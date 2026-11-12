'use strict';

/* ======================= Stan aplikacji ======================= */
const LETTERS = ['A', 'B', 'C', 'D'];
const EXAM_DEFAULT = 20;
const BEST_KEY = 'metrologia.bestExam';

const state = {
  all: [],            // wszystkie pytania z questions.json
  mode: null,         // 'learn' | 'exam' | 'browser'
  isRetry: false,     // czy to sesja powtórki błędnych
  examSize: EXAM_DEFAULT,
  questions: [],      // pytania bieżącej sesji
  answers: [],        // wybrane litery (lub null) — indeks zgodny z questions
  idx: 0,
  finished: false,
  lastWrong: [],      // błędne pytania z ostatniej sesji
  browser: {
    query: '',
    showAll: false,
    checked: {}       // { [id]: wybranaLitera } w trybie samodzielnego sprawdzania
  }
};

/* ======================= Pomocnicze ======================= */
const $ = (id) => document.getElementById(id);

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

const SCREENS = ['screen-loading', 'screen-error', 'screen-start', 'screen-quiz', 'screen-result', 'screen-browser'];
function show(screen, scrollTop = true) {
  SCREENS.forEach((s) => $(s).classList.toggle('hidden', s !== screen));
  updateHeaderNav(screen);
  if (scrollTop) window.scrollTo({ top: 0, behavior: 'smooth' });
}
function currentScreen() {
  return SCREENS.find((s) => !$(s).classList.contains('hidden'));
}

function updateHeaderNav(screen) {
  const onStartOrInit = ['screen-loading', 'screen-error', 'screen-start'].includes(screen);
  const onBrowser = screen === 'screen-browser';
  $('nav-menu').classList.toggle('hidden', onStartOrInit);
  $('nav-browser').classList.toggle('hidden', ['screen-loading', 'screen-error'].includes(screen));
  $('nav-browser').className =
    'text-xs font-semibold px-3 py-1.5 rounded-xl border transition flex items-center gap-1.5 ' +
    (onBrowser
      ? 'border-amber-400 bg-amber-500/25 text-amber-200 shadow-sm shadow-amber-500/20'
      : 'border-amber-500/40 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20');
}

function availableLetters(q) {
  return LETTERS.filter((l) => q.options && q.options[l] != null && q.options[l] !== '');
}

/* ======================= Wczytywanie danych ======================= */
function validate(data) {
  if (!Array.isArray(data) || data.length === 0) throw new Error('Plik nie zawiera tablicy pytań.');
  return data.filter((q) => q && q.question && q.options && q.correct);
}

async function loadQuestions() {
  try {
    const res = await fetch('questions.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    initData(validate(await res.json()));
  } catch (err) {
    $('error-details').textContent = 'Szczegóły: ' + err.message;
    show('screen-error');
  }
}

$('file-input').addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    initData(validate(JSON.parse(await file.text())));
  } catch (err) {
    $('error-details').textContent = 'Szczegóły: ' + err.message;
  }
});

function initData(questions) {
  state.all = questions;
  $('total-count').textContent = questions.length;
  renderExamCountOptions();
  goMenu();
}

/* ======================= Menu ======================= */
function renderExamCountOptions() {
  const total = state.all.length;
  const opts = [...new Set([10, 20, 30, 40].filter((n) => n < total).concat(total))];
  state.examSize = Math.min(EXAM_DEFAULT, total);
  const wrap = $('exam-count');
  wrap.innerHTML = '';
  opts.forEach((n) => {
    const b = document.createElement('button');
    b.textContent = n === total ? `Wszystkie (${n})` : n;
    b.dataset.n = n;
    b.addEventListener('click', () => { state.examSize = n; paintExamCount(); });
    wrap.appendChild(b);
  });
  paintExamCount();
}

function paintExamCount() {
  [...$('exam-count').children].forEach((b) => {
    const active = Number(b.dataset.n) === state.examSize;
    b.className = 'px-3 py-1.5 rounded-lg text-sm font-semibold border transition ' +
      (active ? 'bg-indigo-500/20 border-indigo-400 text-indigo-200'
              : 'border-slate-700 text-slate-400 hover:border-slate-500');
  });
}

function goMenu() {
  $('mode-badge').classList.add('hidden');
  const best = localStorage.getItem(BEST_KEY);
  $('best-score').classList.toggle('hidden', !best);
  if (best) $('best-score').innerHTML = `🏆 Najlepszy wynik egzaminu: <span class="text-slate-100 font-semibold">${esc(best)}%</span>`;
  show('screen-start');
}

/* ======================= Sesja ======================= */
function startSession(mode, questions, isRetry = false) {
  state.mode = mode;
  state.isRetry = isRetry;
  state.questions = questions;
  state.answers = new Array(questions.length).fill(null);
  state.idx = 0;
  state.finished = false;

  const badge = $('mode-badge');
  badge.classList.remove('hidden');
  badge.className = 'text-xs font-semibold px-3 py-1.5 rounded-full ' +
    (mode === 'learn' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-indigo-500/15 text-indigo-300');
  badge.textContent = (mode === 'learn' ? '📘 Tryb Nauki' : '📝 Tryb Egzaminu') + (isRetry ? ' · powtórka błędnych' : '');

  show('screen-quiz');
  renderQuestion();
}

function startLearn() {
  startSession('learn', shuffle(state.all));
}

function startExam() {
  startSession('exam', shuffle(state.all).slice(0, state.examSize));
}

function stats() {
  let good = 0, bad = 0, answered = 0;
  state.questions.forEach((q, i) => {
    const a = state.answers[i];
    if (a == null) return;
    answered++;
    if (a === q.correct) good++; else bad++;
  });
  return { good, bad, answered, total: state.questions.length };
}

/* ======================= Renderowanie pytania ======================= */
function renderQuestion() {
  const q = state.questions[state.idx];
  const total = state.questions.length;
  const chosen = state.answers[state.idx];
  const revealed = state.mode === 'learn' && chosen != null;

  $('q-current').textContent = state.idx + 1;
  $('q-total').textContent = total;
  $('q-id').textContent = `Pytanie #${q.id ?? state.idx + 1} z bazy`;
  $('q-text').textContent = q.question;

  // Obrazek (jeśli jest)
  const imgWrap = $('q-image-wrap');
  if (q.image) {
    $('q-image').src = q.image;
    imgWrap.classList.remove('hidden');
  } else {
    $('q-image').removeAttribute('src');
    imgWrap.classList.add('hidden');
  }

  // Odpowiedzi
  const box = $('options');
  box.innerHTML = '';
  availableLetters(q).forEach((letter, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.dataset.letter = letter;

    let tone = 'border-slate-700 bg-slate-800/50 hover:border-indigo-400 hover:bg-slate-800';
    let keyTone = 'bg-slate-700 text-slate-200';
    let icon = '';

    if (revealed) {
      if (letter === q.correct) {
        tone = 'border-emerald-400 bg-emerald-500/15';
        keyTone = 'bg-emerald-500 text-white';
        icon = '<span class="ml-auto text-emerald-300 font-bold">✓</span>';
      } else if (letter === chosen) {
        tone = 'border-rose-400 bg-rose-500/15';
        keyTone = 'bg-rose-500 text-white';
        icon = '<span class="ml-auto text-rose-300 font-bold">✗</span>';
      } else {
        tone = 'border-slate-800 bg-slate-900/40 opacity-50';
      }
    } else if (state.mode === 'exam' && letter === chosen) {
      tone = 'border-indigo-400 bg-indigo-500/20 ring-2 ring-indigo-400/30';
      keyTone = 'bg-indigo-500 text-white';
    }

    btn.className = `w-full text-left flex items-start gap-4 p-4 rounded-2xl border-2 transition-all duration-150 ${tone} ` +
      (revealed ? 'cursor-default' : 'cursor-pointer active:scale-[.99]');
    btn.innerHTML = `
      <span class="shrink-0 w-8 h-8 rounded-lg grid place-items-center text-sm font-bold ${keyTone}">${letter}</span>
      <span class="pt-1 leading-relaxed">${esc(q.options[letter])}</span>
      ${icon || `<kbd class="hidden sm:inline-block ml-auto shrink-0 self-center text-[10px] px-1.5 py-0.5 rounded bg-slate-900/70 border border-slate-700 text-slate-500">${i + 1}</kbd>`}`;
    btn.addEventListener('click', () => { btn.blur(); selectAnswer(letter); });
    box.appendChild(btn);
  });

  // Wyjaśnienie (tylko tryb nauki po odpowiedzi)
  const fb = $('feedback');
  if (revealed) {
    const ok = chosen === q.correct;
    fb.className = 'mt-5 p-4 rounded-2xl border fade-in ' +
      (ok ? 'border-emerald-500/40 bg-emerald-500/10' : 'border-rose-500/40 bg-rose-500/10');
    fb.innerHTML = `
      <p class="font-bold mb-1 ${ok ? 'text-emerald-300' : 'text-rose-300'}">
        ${ok ? '✓ Dobrze!' : `✗ Źle — poprawna odpowiedź: ${esc(q.correct)}`}
      </p>
      <p class="text-sm text-slate-300 leading-relaxed">${esc(q.explanation || 'Brak wyjaśnienia.')}</p>`;
  } else {
    fb.className = 'hidden';
    fb.innerHTML = '';
  }

  renderNav();
  renderCounters();
}

function renderCounters() {
  const s = stats();
  const c = $('counters');
  if (state.mode === 'learn') {
    c.innerHTML = `
      <span class="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300">✓ ${s.good}</span>
      <span class="px-2.5 py-1 rounded-full bg-rose-500/15 text-rose-300">✗ ${s.bad}</span>`;
    $('progress-bar').style.width = `${(s.answered / s.total) * 100}%`;
  } else {
    // W egzaminie nie zdradzamy poprawności — tylko liczba udzielonych odpowiedzi
    c.innerHTML = `
      <span class="px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-300">Udzielone: ${s.answered}/${s.total}</span>
      <span class="px-2.5 py-1 rounded-full bg-slate-700/60 text-slate-300">Pozostało: ${s.total - s.answered}</span>`;
    $('progress-bar').style.width = `${((state.idx + 1) / s.total) * 100}%`;
  }
}

function renderNav() {
  const last = state.idx === state.questions.length - 1;
  const chosen = state.answers[state.idx];
  const prev = $('btn-prev');
  const next = $('btn-next');

  prev.classList.toggle('invisible', state.mode === 'learn');
  prev.disabled = state.idx === 0;

  if (state.mode === 'learn') {
    next.disabled = chosen == null;
    next.textContent = last ? 'Zobacz wynik →' : 'Dalej →';
    $('nav-hint').textContent = chosen == null
      ? 'Wybierz odpowiedź: 1–4 lub A–D'
      : 'Spacja / Enter — dalej';
  } else {
    next.disabled = false;
    next.textContent = last ? 'Zakończ egzamin ✓' : (chosen == null ? 'Pomiń →' : 'Dalej →');
    $('nav-hint').textContent = 'Możesz zmienić odpowiedź przed przejściem dalej · ← wstecz';
  }
  next.className = 'px-5 py-2.5 rounded-xl font-semibold transition disabled:opacity-30 disabled:cursor-not-allowed shadow-lg ' +
    (last ? 'bg-emerald-500 hover:bg-emerald-400 shadow-emerald-500/20' : 'bg-indigo-500 hover:bg-indigo-400 shadow-indigo-500/20');
}

/* ======================= Interakcje ======================= */
function selectAnswer(letter) {
  if (currentScreen() !== 'screen-quiz') return;
  const q = state.questions[state.idx];
  if (!availableLetters(q).includes(letter)) return;

  if (state.mode === 'learn') {
    if (state.answers[state.idx] != null) return; // odpowiedź już udzielona
    state.answers[state.idx] = letter;
    renderQuestion();
    if (letter !== q.correct) {
      $('q-card').classList.remove('shake');
      void $('q-card').offsetWidth;
      $('q-card').classList.add('shake');
    }
  } else {
    state.answers[state.idx] = letter;
    renderQuestion();
  }
}

function next() {
  if (currentScreen() !== 'screen-quiz') return;
  const last = state.idx === state.questions.length - 1;

  if (state.mode === 'learn') {
    if (state.answers[state.idx] == null) return;
    if (last) return finish();
  } else if (last) {
    const unanswered = state.answers.filter((a) => a == null).length;
    if (unanswered > 0 &&
        !confirm(`Nie udzielono odpowiedzi na ${unanswered} ${plural(unanswered, 'pytanie', 'pytania', 'pytań')}. Zakończyć egzamin?`)) {
      return;
    }
    return finish();
  }
  state.idx++;
  renderQuestion();
}

function prev() {
  if (currentScreen() !== 'screen-quiz' || state.mode !== 'exam' || state.idx === 0) return;
  state.idx--;
  renderQuestion();
}

function plural(n, one, few, many) {
  if (n === 1) return one;
  const d = n % 10, t = n % 100;
  return d >= 2 && d <= 4 && (t < 12 || t > 14) ? few : many;
}

/* ======================= Wyniki ======================= */
function finish() {
  state.finished = true;
  const s = stats();
  const skipped = s.total - s.answered;
  const wrongCount = s.bad + skipped;
  const percent = s.total ? Math.round((s.good / s.total) * 100) : 0;

  state.lastWrong = state.questions
    .map((q, i) => ({ q, answer: state.answers[i] }))
    .filter((x) => x.answer !== x.q.correct);

  if (state.mode === 'exam' && !state.isRetry) {
    const best = Number(localStorage.getItem(BEST_KEY) || 0);
    if (percent > best || localStorage.getItem(BEST_KEY) == null) localStorage.setItem(BEST_KEY, String(percent));
  }

  $('result-title').textContent =
    (state.mode === 'learn' ? 'Koniec sesji nauki' : 'Wynik egzaminu') + (state.isRetry ? ' (powtórka)' : '');
  $('result-percent').textContent = `${percent}%`;
  $('result-grade').textContent = grade(percent);
  $('result-good').textContent = s.good;
  $('result-bad').textContent = s.bad;
  $('result-skipped').textContent = skipped;
  $('result-skipped-wrap').classList.toggle('hidden', skipped === 0);

  const ring = $('result-ring');
  const C = 2 * Math.PI * 52;
  ring.setAttribute('stroke', percent >= 80 ? '#34d399' : percent >= 50 ? '#fbbf24' : '#fb7185');
  ring.style.strokeDashoffset = C;
  requestAnimationFrame(() => requestAnimationFrame(() => {
    ring.style.strokeDashoffset = C * (1 - percent / 100);
  }));

  const retry = $('btn-retry-wrong');
  retry.disabled = wrongCount === 0;

  renderMistakes();
  show('screen-result');
}

function grade(p) {
  if (p >= 90) return 'Doskonale!';
  if (p >= 75) return 'Bardzo dobrze';
  if (p >= 50) return 'Zaliczone — ale powtórz';
  return 'Do powtórki';
}

function renderMistakes() {
  const list = $('mistakes');
  list.innerHTML = '';
  if (state.lastWrong.length === 0) {
    $('mistakes-title').textContent = '🎉 Bezbłędnie! Brak pytań do powtórki.';
    return;
  }
  $('mistakes-title').textContent = `Lista błędów (${state.lastWrong.length})`;

  state.lastWrong.forEach(({ q, answer }, n) => {
    const el = document.createElement('div');
    el.className = 'p-5 rounded-2xl bg-slate-900/70 border border-slate-800';
    const yours = answer
      ? `<span class="font-bold">${esc(answer)}.</span> ${esc(q.options[answer])}`
      : '<em class="text-slate-500">brak odpowiedzi</em>';
    el.innerHTML = `
      <p class="text-xs text-slate-500 mb-1">${n + 1}. Pytanie #${esc(q.id)}</p>
      <p class="font-semibold mb-3 leading-relaxed">${esc(q.question)}</p>
      ${q.image ? `<img src="${esc(q.image)}" alt="" class="max-h-48 rounded-xl border border-slate-700 bg-white mb-3" />` : ''}
      <div class="grid gap-2 text-sm">
        <p class="px-3 py-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-200">✗ Twoja: ${yours}</p>
        <p class="px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-200">✓ Poprawna: <span class="font-bold">${esc(q.correct)}.</span> ${esc(q.options[q.correct])}</p>
      </div>
      ${q.explanation ? `<p class="text-sm text-slate-400 mt-3 leading-relaxed">💡 ${esc(q.explanation)}</p>` : ''}`;
    list.appendChild(el);
  });
}

function retryWrong() {
  if (!state.lastWrong.length) return;
  startSession(state.mode, shuffle(state.lastWrong.map((x) => x.q)), true);
}

function restart() {
  state.mode === 'exam' ? startExam() : startLearn();
}

function confirmLeave() {
  if (currentScreen() === 'screen-quiz' && !state.finished && state.answers.some((a) => a != null)) {
    return confirm('Przerwać bieżącą sesję i wrócić do menu?');
  }
  return true;
}

/* ======================= Przeglądarka bazy pytań ======================= */
function sortedAllQuestions() {
  return state.all.slice().sort((a, b) => (Number(a.id) || 0) - (Number(b.id) || 0));
}

function openBrowser() {
  if (!state.all.length || !confirmLeave()) return;
  state.mode = 'browser';
  $('mode-badge').classList.add('hidden');
  show('screen-browser');
  renderBrowser();
}

function parseBrowserQuery(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return { type: 'all', value: '' };

  // Zapytanie wprost po ID z symbolem # (np. "#15")
  const hashMatch = trimmed.match(/^#\s*(\d+)$/);
  if (hashMatch) {
    return { type: 'id', id: Number(hashMatch[1]), value: trimmed };
  }

  // Zapytanie samą liczbą (np. "15") — jeśli istnieje pytanie o takim ID, pokaż je natychmiast
  const numMatch = trimmed.match(/^(\d+)$/);
  if (numMatch) {
    const id = Number(numMatch[1]);
    if (state.all.some((q) => Number(q.id) === id)) {
      return { type: 'id', id, value: trimmed };
    }
  }

  return { type: 'keyword', keyword: trimmed.toLowerCase(), rawKeyword: trimmed };
}

function filterBrowserQuestions() {
  const all = sortedAllQuestions();
  const parsed = parseBrowserQuery(state.browser.query);
  if (parsed.type === 'all') return { list: all, parsed };
  if (parsed.type === 'id') {
    return { list: all.filter((q) => Number(q.id) === parsed.id), parsed };
  }
  const needle = parsed.keyword;
  const list = all.filter((q) => {
    if (String(q.question || '').toLowerCase().includes(needle)) return true;
    return availableLetters(q).some((l) => String(q.options[l] || '').toLowerCase().includes(needle));
  });
  return { list, parsed };
}

function highlightText(str, rawKeyword) {
  const text = String(str ?? '');
  if (!rawKeyword) return esc(text);
  const escapedKeyword = rawKeyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const rx = new RegExp(`(${escapedKeyword})`, 'gi');
  return text
    .split(rx)
    .map((part, i) => (i % 2 === 1
      ? `<mark class="bg-amber-400/30 text-amber-200 rounded px-0.5">${esc(part)}</mark>`
      : esc(part)))
    .join('');
}

function renderBrowser(preserveScroll = false) {
  const scrollY = preserveScroll ? window.scrollY : null;
  const all = sortedAllQuestions();
  const { list: filtered, parsed } = filterBrowserQuestions();
  const filteredIds = new Set(filtered.map((q) => Number(q.id)));
  const kw = parsed.type === 'keyword' ? parsed.rawKeyword : '';

  // Licznik znalezionych pytań
  $('browser-shown-count').textContent = filtered.length;
  $('browser-total-count').textContent = all.length;

  // Przycisk czyszczenia wyszukiwarki
  $('browser-search-clear').classList.toggle('hidden', state.browser.query.trim() === '');

  // Podpowiedź i przycisk resetowania sprawdzonych pytań
  const checkedCount = Object.keys(state.browser.checked).length;
  $('browser-selfcheck-hint').classList.toggle('hidden', state.browser.showAll);
  $('browser-reset-checked').classList.toggle('hidden', state.browser.showAll || checkedCount === 0);

  // Siatka numerów wszystkich pytań (Spis treści)
  const toc = $('browser-toc');
  toc.innerHTML = '';
  all.forEach((q) => {
    const id = Number(q.id);
    const inFilter = filteredIds.has(id);
    const isSingleMatch = filtered.length === 1 && inFilter && state.browser.query.trim() !== '';
    const chosen = state.browser.checked[id];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.dataset.qid = id;
    btn.textContent = id;
    btn.title = `Skocz do pytania #${id}`;

    let cls = 'h-9 rounded-xl text-xs font-bold border transition ';
    if (isSingleMatch) {
      cls += 'border-amber-400 bg-amber-500/25 text-amber-200 ring-2 ring-amber-400/30';
    } else if (!state.browser.showAll && chosen) {
      const ok = chosen === q.correct || chosen === '__REVEAL__';
      cls += ok
        ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-300 hover:border-emerald-400'
        : 'border-rose-500/60 bg-rose-500/15 text-rose-300 hover:border-rose-400';
      if (!inFilter) cls += ' opacity-40';
    } else if (inFilter) {
      cls += 'border-slate-700 bg-slate-800/80 text-slate-200 hover:border-amber-400 hover:text-amber-200';
    } else {
      cls += 'border-slate-800/80 bg-slate-900/40 text-slate-500 opacity-45 hover:opacity-100 hover:border-amber-400/60 hover:text-slate-200';
    }

    btn.className = cls;
    btn.addEventListener('click', () => jumpToQuestion(id));
    toc.appendChild(btn);
  });

  // Lista kart pytań
  const listEl = $('browser-list');
  listEl.innerHTML = '';
  $('browser-empty').classList.toggle('hidden', filtered.length > 0);

  filtered.forEach((q) => {
    const id = Number(q.id);
    const chosen = state.browser.checked[id];
    const revealed = state.browser.showAll || chosen != null;
    const isSelfChecked = !state.browser.showAll && chosen != null && chosen !== '__REVEAL__';

    const card = document.createElement('article');
    card.id = `browser-q-${id}`;
    card.dataset.qid = id;
    card.className = 'bg-slate-900/70 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl transition';

    // Nagłówek karty pytania
    const topBar = document.createElement('div');
    topBar.className = 'flex items-center justify-between gap-2 mb-2';
    topBar.innerHTML = `
      <span class="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-amber-300">
        Pytanie #${esc(id)}
      </span>`;

    if (!state.browser.showAll) {
      const actionBtn = document.createElement('button');
      actionBtn.type = 'button';
      actionBtn.className = 'text-xs font-semibold px-2.5 py-1 rounded-lg border transition ' +
        (chosen != null
          ? 'border-slate-700 bg-slate-800/80 text-slate-300 hover:bg-slate-700'
          : 'border-slate-700/80 bg-slate-800/40 text-slate-400 hover:border-amber-400/50 hover:text-amber-200');
      actionBtn.textContent = chosen != null ? '↺ Ukryj odpowiedź' : '👁 Pokaż odpowiedź';
      actionBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (state.browser.checked[id] != null) {
          delete state.browser.checked[id];
        } else {
          state.browser.checked[id] = '__REVEAL__';
        }
        renderBrowser(true);
      });
      topBar.appendChild(actionBtn);
    }
    card.appendChild(topBar);

    // Treść pytania
    const title = document.createElement('h3');
    title.className = 'text-base sm:text-lg font-semibold leading-relaxed mb-4';
    title.innerHTML = highlightText(q.question, kw);
    card.appendChild(title);

    // Obrazek (jeśli występuje)
    if (q.image) {
      const fig = document.createElement('figure');
      fig.className = 'mb-4';
      fig.innerHTML = `<img src="${esc(q.image)}" alt="Ilustracja do pytania #${esc(id)}" class="max-h-72 mx-auto rounded-2xl border border-slate-700 bg-white object-contain" />`;
      card.appendChild(fig);
    }

    // Warianty odpowiedzi A–D
    const optsWrap = document.createElement('div');
    optsWrap.className = 'grid gap-2.5';

    availableLetters(q).forEach((letter) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset.letter = letter;

      let tone = 'border-slate-700 bg-slate-800/50 hover:border-indigo-400 hover:bg-slate-800';
      let keyTone = 'bg-slate-700 text-slate-200';
      let icon = '';

      if (revealed) {
        if (letter === q.correct) {
          tone = 'border-emerald-400 bg-emerald-500/15';
          keyTone = 'bg-emerald-500 text-white';
          icon = '<span class="ml-auto shrink-0 text-emerald-300 font-bold">✓</span>';
        } else if (isSelfChecked && letter === chosen) {
          tone = 'border-rose-400 bg-rose-500/15';
          keyTone = 'bg-rose-500 text-white';
          icon = '<span class="ml-auto shrink-0 text-rose-300 font-bold">✗</span>';
        } else {
          tone = 'border-slate-800 bg-slate-900/40 text-slate-300 opacity-75';
        }
      }

      btn.className = `w-full text-left flex items-start gap-3.5 p-3.5 rounded-2xl border-2 transition ${tone} ` +
        (state.browser.showAll ? 'cursor-default' : 'cursor-pointer active:scale-[.995]');
      btn.innerHTML = `
        <span class="shrink-0 w-7 h-7 rounded-lg grid place-items-center text-xs font-bold ${keyTone}">${letter}</span>
        <span class="pt-0.5 text-sm sm:text-base leading-relaxed">${highlightText(q.options[letter], kw)}</span>
        ${icon}`;

      if (!state.browser.showAll) {
        btn.addEventListener('click', () => {
          state.browser.checked[id] = letter;
          renderBrowser(true);
        });
      }
      optsWrap.appendChild(btn);
    });
    card.appendChild(optsWrap);

    // Wyjaśnienie
    if (revealed && q.explanation) {
      const fb = document.createElement('div');
      const ok = !isSelfChecked || chosen === q.correct;
      fb.className = 'mt-4 p-3.5 rounded-2xl border fade-in ' +
        (ok ? 'border-emerald-500/40 bg-emerald-500/10' : 'border-rose-500/40 bg-rose-500/10');
      const headerLine = isSelfChecked
        ? `<p class="text-sm font-bold mb-1 ${ok ? 'text-emerald-300' : 'text-rose-300'}">${ok ? '✓ Dobrze!' : `✗ Źle — poprawna odpowiedź: ${esc(q.correct)}`}</p>`
        : `<p class="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-1">✓ Poprawna odpowiedź: ${esc(q.correct)}</p>`;
      fb.innerHTML = `
        ${headerLine}
        <p class="text-sm text-slate-300 leading-relaxed">💡 ${esc(q.explanation)}</p>`;
      card.appendChild(fb);
    }

    listEl.appendChild(card);
  });

  if (scrollY !== null) {
    window.scrollTo({ top: scrollY, behavior: 'instant' });
  }
}

function jumpToQuestion(id) {
  let card = $(`browser-q-${id}`);
  if (!card) {
    // Jeśli pytanie jest aktualnie odfiltrowane, wyczyść filtr i wyrenderuj pełną listę
    state.browser.query = '';
    $('browser-search').value = '';
    renderBrowser(true);
    card = $(`browser-q-${id}`);
  }
  if (!card) return;
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  card.classList.remove('card-flash');
  void card.offsetWidth;
  card.classList.add('card-flash');
}

/* ======================= Zdarzenia ======================= */
$('btn-learn').addEventListener('click', startLearn);
$('btn-exam').addEventListener('click', startExam);
$('btn-browser').addEventListener('click', openBrowser);
$('nav-browser').addEventListener('click', openBrowser);
$('nav-menu').addEventListener('click', () => { if (state.all.length && confirmLeave()) goMenu(); });
$('btn-next').addEventListener('click', (e) => { e.currentTarget.blur(); next(); });
$('btn-prev').addEventListener('click', (e) => { e.currentTarget.blur(); prev(); });
$('btn-retry-wrong').addEventListener('click', retryWrong);
$('btn-restart').addEventListener('click', restart);
$('btn-menu').addEventListener('click', goMenu);
$('logo').addEventListener('click', () => { if (state.all.length && confirmLeave()) goMenu(); });

$('browser-search').addEventListener('input', (e) => {
  state.browser.query = e.target.value;
  renderBrowser(true);
});

$('browser-search-clear').addEventListener('click', () => {
  state.browser.query = '';
  $('browser-search').value = '';
  renderBrowser(true);
  $('browser-search').focus();
});

$('browser-empty-clear').addEventListener('click', () => {
  state.browser.query = '';
  $('browser-search').value = '';
  renderBrowser(true);
});

$('browser-show-answers').addEventListener('change', (e) => {
  state.browser.showAll = e.target.checked;
  if (!state.browser.showAll) {
    state.browser.checked = {};
  }
  renderBrowser(true);
});

$('browser-reset-checked').addEventListener('click', () => {
  state.browser.checked = {};
  renderBrowser(true);
});

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const key = e.key;
  const screen = currentScreen();

  if (e.target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
    if (key === 'Escape' && e.target.id === 'browser-search') {
      e.target.blur();
    }
    return;
  }

  if (screen === 'screen-quiz') {
    if (/^[1-4]$/.test(key)) {
      e.preventDefault();
      const q = state.questions[state.idx];
      const letter = availableLetters(q)[Number(key) - 1];
      if (letter) selectAnswer(letter);
    } else if (/^[a-dA-D]$/.test(key)) {
      e.preventDefault();
      selectAnswer(key.toUpperCase());
    } else if (key === ' ' || key === 'Enter') {
      e.preventDefault();
      next();
    } else if (key === 'ArrowRight') {
      e.preventDefault();
      next();
    } else if (key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    } else if (key === 'Escape') {
      if (confirmLeave()) goMenu();
    }
  } else if (screen === 'screen-start') {
    if (key === '1') { e.preventDefault(); startLearn(); }
    else if (key === '2') { e.preventDefault(); startExam(); }
    else if (key === '3') { e.preventDefault(); openBrowser(); }
  } else if (screen === 'screen-result') {
    if (key === 'r' || key === 'R') { e.preventDefault(); retryWrong(); }
    else if (key === 'n' || key === 'N') { e.preventDefault(); restart(); }
    else if (key === 'Escape') { goMenu(); }
  } else if (screen === 'screen-browser') {
    if (key === 'Escape') { goMenu(); }
    else if (key === '/') { e.preventDefault(); $('browser-search').focus(); }
  }
});

loadQuestions();
