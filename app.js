'use strict';

/* ======================= Stan aplikacji ======================= */
const LETTERS = ['A', 'B', 'C', 'D'];
const EXAM_DEFAULT = 20;
const BEST_KEY_PREFIX = 'metrologia.bestExam';

const state = {
  datasets: {
    exam: [],         // pytania z questions.json ("Oryginalna baza egzaminacyjna")
    ai: []            // pytania z ai_questions.json ("Trenażer AI z wykładów")
  },
  source: 'exam',     // 'exam' | 'ai'
  selectedLectures: new Set(), // pusty zbiór = Wszystkie wykłady (Mix); wpp wybrane numery lectureId
  lecturesMeta: [],   // [{ id, title, count }] wyznaczone z ai_questions.json
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
    checkedBySource: {
      exam: {},       // { [id]: wybranaLitera } dla questions.json
      ai: {}          // { [id]: wybranaLitera } dla ai_questions.json
    }
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

function plural(n, one, few, many) {
  if (n === 1) return one;
  const d = n % 10, t = n % 100;
  return d >= 2 && d <= 4 && (t < 12 || t > 14) ? few : many;
}

function formatLectureBadge(q) {
  if (!q || q.lectureId == null) return '';
  return q.lectureTitle
    ? `Wykład ${q.lectureId}: ${q.lectureTitle}`
    : `Wykład ${q.lectureId}`;
}

function currentCheckedMap() {
  return state.browser.checkedBySource[state.source];
}

function getActiveQuestions() {
  if (state.source === 'ai') {
    const allAi = state.datasets.ai;
    if (state.selectedLectures.size === 0) return allAi;
    return allAi.filter((q) => state.selectedLectures.has(Number(q.lectureId)));
  }
  return state.datasets.exam;
}

function hasAnyLoadedData() {
  return state.datasets.exam.length > 0 || state.datasets.ai.length > 0;
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
  const isInitOrErr = ['screen-loading', 'screen-error'].includes(screen);
  const onStartOrInit = ['screen-loading', 'screen-error', 'screen-start'].includes(screen);
  const onBrowser = screen === 'screen-browser';

  $('nav-source-switch').classList.toggle('hidden', isInitOrErr);
  $('nav-menu').classList.toggle('hidden', onStartOrInit);
  $('nav-browser').classList.toggle('hidden', isInitOrErr);
  $('nav-browser').className =
    'text-xs font-semibold px-3 py-1.5 rounded-xl border transition flex items-center gap-1.5 ' +
    (onBrowser
      ? 'border-amber-400 bg-amber-500/25 text-amber-200 shadow-sm shadow-amber-500/20'
      : 'border-amber-500/40 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20');

  paintSourceSwitches();
}

function availableLetters(q) {
  return LETTERS.filter((l) => q.options && q.options[l] != null && q.options[l] !== '');
}

/* ======================= Wczytywanie danych ======================= */
function validate(data) {
  if (!Array.isArray(data) || data.length === 0) throw new Error('Plik nie zawiera tablicy pytań.');
  return data.filter((q) => q && q.question && q.options && q.correct);
}

function buildLecturesMeta(aiQuestions) {
  const map = new Map();
  aiQuestions.forEach((q) => {
    const lid = Number(q.lectureId);
    if (!lid) return;
    if (!map.has(lid)) {
      map.set(lid, {
        id: lid,
        title: q.lectureTitle || `Wykład ${lid}`,
        count: 0
      });
    }
    map.get(lid).count++;
  });
  return [...map.values()].sort((a, b) => a.id - b.id);
}

async function fetchJsonSafe(url) {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return validate(await res.json());
}

async function loadAllDatabases() {
  const [examRes, aiRes] = await Promise.allSettled([
    fetchJsonSafe('questions.json'),
    fetchJsonSafe('ai_questions.json')
  ]);

  if (examRes.status === 'fulfilled') {
    state.datasets.exam = examRes.value;
  }
  if (aiRes.status === 'fulfilled') {
    state.datasets.ai = aiRes.value;
    state.lecturesMeta = buildLecturesMeta(state.datasets.ai);
  }

  if (!hasAnyLoadedData()) {
    const reasons = [examRes, aiRes]
      .filter((r) => r.status === 'rejected')
      .map((r) => r.reason?.message || String(r.reason))
      .join(' | ');
    $('error-details').textContent = 'Szczegóły: ' + reasons;
    show('screen-error');
    return;
  }

  if (state.datasets.exam.length === 0 && state.datasets.ai.length > 0) {
    state.source = 'ai';
  }

  refreshAllSourceUI();
  goMenu();
}

$('file-input').addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const parsed = validate(JSON.parse(await file.text()));
    const isAi = parsed.some((q) => q.lectureId != null);
    if (isAi) {
      state.datasets.ai = parsed;
      state.lecturesMeta = buildLecturesMeta(parsed);
      state.source = 'ai';
    } else {
      state.datasets.exam = parsed;
      state.source = 'exam';
    }
    refreshAllSourceUI();
    goMenu();
  } catch (err) {
    $('error-details').textContent = 'Szczegóły: ' + err.message;
  }
});

$('file-input-ai').addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const parsed = validate(JSON.parse(await file.text()));
    state.datasets.ai = parsed;
    state.lecturesMeta = buildLecturesMeta(parsed);
    state.source = 'ai';
    refreshAllSourceUI();
    goMenu();
  } catch (err) {
    $('error-details').textContent = 'Szczegóły: ' + err.message;
  }
});

/* ======================= Przełącznik źródeł i filtr wykładów ======================= */
function switchSource(targetSource) {
  if (targetSource !== 'exam' && targetSource !== 'ai') return;
  if (state.source === targetSource && currentScreen() !== 'screen-quiz') return;

  if (targetSource === 'ai' && state.datasets.ai.length === 0) {
    alert('Baza AI (ai_questions.json) nie została jeszcze wczytana.');
    return;
  }
  if (targetSource === 'exam' && state.datasets.exam.length === 0) {
    alert('Oryginalna baza (questions.json) nie została jeszcze wczytana.');
    return;
  }

  const screen = currentScreen();
  if (screen === 'screen-quiz' && !confirmLeave()) return;

  state.source = targetSource;
  refreshAllSourceUI();

  if (screen === 'screen-browser') {
    renderBrowser();
  } else {
    goMenu();
  }
}

function toggleLectureFilter(lectureId) {
  const totalLectures = state.lecturesMeta.length;
  if (lectureId === 'ALL') {
    state.selectedLectures.clear();
  } else {
    const id = Number(lectureId);
    if (state.selectedLectures.has(id)) {
      state.selectedLectures.delete(id);
    } else {
      state.selectedLectures.add(id);
    }
    if (totalLectures > 0 && state.selectedLectures.size >= totalLectures) {
      state.selectedLectures.clear();
    }
  }
  refreshAllSourceUI();
  if (currentScreen() === 'screen-browser') {
    renderBrowser(true);
  }
}

function paintSourceSwitches() {
  const isAi = state.source === 'ai';

  // Górny pasek nawigacji
  $('nav-src-exam').className =
    'text-xs font-semibold px-2.5 py-1.5 rounded-lg transition flex items-center gap-1.5 ' +
    (!isAi
      ? 'bg-indigo-500 text-white shadow-sm shadow-indigo-500/30'
      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/70');

  $('nav-src-ai').className =
    'text-xs font-semibold px-2.5 py-1.5 rounded-lg transition flex items-center gap-1.5 ' +
    (isAi
      ? 'bg-violet-500 text-white shadow-sm shadow-violet-500/30'
      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/70');

  // Kafelki na ekranie startowym
  $('start-src-exam').className =
    'text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 ' +
    (!isAi
      ? 'border-indigo-400 bg-indigo-500/15 shadow-lg shadow-indigo-500/10'
      : 'border-slate-800 bg-slate-900/50 hover:border-slate-700 opacity-80 hover:opacity-100');

  $('start-src-ai').className =
    'text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 ' +
    (isAi
      ? 'border-violet-400 bg-violet-500/15 shadow-lg shadow-violet-500/10'
      : 'border-slate-800 bg-slate-900/50 hover:border-slate-700 opacity-80 hover:opacity-100');

  $('start-src-exam-count').textContent = `${state.datasets.exam.length} pytań`;
  $('start-src-ai-count').textContent = `${state.datasets.ai.length} pytań`;
}

function renderLecturesFilterPanel() {
  const isAi = state.source === 'ai';
  const panel = $('ai-lectures-panel');
  panel.classList.toggle('hidden', !isAi);

  const isMix = state.selectedLectures.size === 0;
  $('lectures-all-count').textContent = `${state.datasets.ai.length} pytań`;
  $('btn-lectures-all').className =
    'text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl border-2 transition flex items-center gap-2 ' +
    (isMix
      ? 'border-violet-400 bg-violet-500/25 text-violet-100 shadow-sm shadow-violet-500/20'
      : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:border-violet-400/60 hover:text-violet-200');

  const grid = $('lectures-grid');
  grid.innerHTML = '';

  state.lecturesMeta.forEach((lec) => {
    const selected = state.selectedLectures.has(lec.id);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.dataset.lectureId = lec.id;
    btn.className =
      'text-left p-3.5 rounded-2xl border-2 transition-all flex flex-col justify-between gap-2 ' +
      (selected
        ? 'border-violet-400 bg-violet-500/20 text-slate-100 ring-2 ring-violet-400/25'
        : isMix
          ? 'border-slate-800 bg-slate-950/60 text-slate-200 hover:border-violet-400/60 hover:bg-slate-900'
          : 'border-slate-800/80 bg-slate-950/40 text-slate-400 opacity-70 hover:opacity-100 hover:border-slate-600');

    const checkBadge = selected
      ? '<span class="w-5 h-5 rounded-md bg-violet-500 text-white grid place-items-center text-xs font-bold">✓</span>'
      : '<span class="w-5 h-5 rounded-md border border-slate-700 bg-slate-900/80 grid place-items-center text-[10px] text-slate-500">+</span>';

    btn.innerHTML = `
      <div class="flex items-center justify-between gap-2">
        <span class="text-xs font-bold uppercase tracking-wider ${selected ? 'text-violet-200' : 'text-violet-300/90'}">
          Wykład ${lec.id}
        </span>
        <div class="flex items-center gap-1.5">
          <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
            ${lec.count} ${plural(lec.count, 'pytanie', 'pytania', 'pytań')}
          </span>
          ${checkBadge}
        </div>
      </div>
      <p class="text-xs sm:text-sm font-semibold leading-snug line-clamp-2">${esc(lec.title)}</p>`;

    btn.addEventListener('click', () => toggleLectureFilter(lec.id));
    grid.appendChild(btn);
  });

  const activeCount = getActiveQuestions().length;
  if (isMix) {
    $('lectures-selection-summary').innerHTML =
      `Aktywne: <strong class="text-violet-200">Wszystkie wykłady (Mix 1–${state.lecturesMeta.length})</strong> — łącznie <strong class="text-slate-100">${activeCount}</strong> pytań`;
  } else {
    const sortedIds = [...state.selectedLectures].sort((a, b) => a - b);
    const label = sortedIds.length === 1
      ? `Wykład ${sortedIds[0]} (${esc(state.lecturesMeta.find((l) => l.id === sortedIds[0])?.title || '')})`
      : `Wykłady: ${sortedIds.map((n) => '#' + n).join(', ')}`;
    $('lectures-selection-summary').innerHTML =
      `Wybrano: <strong class="text-violet-200">${label}</strong> — łącznie <strong class="text-slate-100">${activeCount}</strong> ${plural(activeCount, 'pytanie', 'pytania', 'pytań')}`;
  }
}

function refreshAllSourceUI() {
  paintSourceSwitches();
  renderLecturesFilterPanel();

  const pool = getActiveQuestions();
  $('total-count').textContent = pool.length;

  if (state.source === 'ai') {
    if (state.selectedLectures.size === 0) {
      $('active-source-label').textContent = 'z bazy AI (Wszystkie wykłady 1–8)';
    } else {
      const sorted = [...state.selectedLectures].sort((a, b) => a - b);
      $('active-source-label').textContent =
        sorted.length === 1
          ? `z bazy AI (Wykład ${sorted[0]})`
          : `z bazy AI (wykłady: ${sorted.join(', ')})`;
    }
  } else {
    $('active-source-label').textContent = 'z oryginalnej bazy egzaminacyjnej';
  }

  $('learn-pool-hint').textContent = `Wszystkie pytania z wybranej puli (${pool.length}) w losowej kolejności`;
  renderExamCountOptions();
  updateBestScoreBanner();
}

/* ======================= Menu ======================= */
function renderExamCountOptions() {
  const total = getActiveQuestions().length;
  const standardCounts = [10, 14, 20, 30, 40].filter((n) => n < total);
  const opts = [...new Set(standardCounts.concat(total > 0 ? [total] : []))];
  if (!opts.includes(state.examSize)) {
    state.examSize = Math.min(EXAM_DEFAULT, total);
  }
  const wrap = $('exam-count');
  wrap.innerHTML = '';
  opts.forEach((n) => {
    const b = document.createElement('button');
    b.type = 'button';
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

function bestScoreStorageKey() {
  return `${BEST_KEY_PREFIX}.${state.source}`;
}

function updateBestScoreBanner() {
  const best = localStorage.getItem(bestScoreStorageKey()) ??
    (state.source === 'exam' ? localStorage.getItem(BEST_KEY_PREFIX) : null);
  $('best-score').classList.toggle('hidden', !best);
  if (best) {
    const srcName = state.source === 'ai' ? 'Trenażer AI z wykładów' : 'Oryginalna baza egzaminacyjna';
    $('best-score').innerHTML = `🏆 Najlepszy wynik egzaminu (${srcName}): <span class="text-slate-100 font-semibold">${esc(best)}%</span>`;
  }
}

function goMenu() {
  $('mode-badge').classList.add('hidden');
  refreshAllSourceUI();
  show('screen-start');
}

/* ======================= Sesja ======================= */
function startSession(mode, questions, isRetry = false) {
  if (!questions.length) return;
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
  const srcPrefix = state.source === 'ai' ? '🤖 AI · ' : '📚 ';
  badge.textContent = srcPrefix + (mode === 'learn' ? 'Tryb Nauki' : 'Tryb Egzaminu') + (isRetry ? ' · powtórka błędnych' : '');

  show('screen-quiz');
  renderQuestion();
}

function startLearn() {
  startSession('learn', shuffle(getActiveQuestions()));
}

function startExam() {
  const pool = shuffle(getActiveQuestions());
  startSession('exam', pool.slice(0, Math.min(state.examSize, pool.length)));
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

  // Etykieta (badge) wykładu w trybie AI
  const lecBadge = $('q-lecture-badge');
  const lecText = formatLectureBadge(q);
  if (lecText) {
    lecBadge.textContent = `🎓 ${lecText}`;
    lecBadge.classList.remove('hidden');
  } else {
    lecBadge.textContent = '';
    lecBadge.classList.add('hidden');
  }

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
    const key = bestScoreStorageKey();
    const best = Number(localStorage.getItem(key) || 0);
    if (percent > best || localStorage.getItem(key) == null) {
      localStorage.setItem(key, String(percent));
    }
  }

  const srcTitle = state.source === 'ai' ? ' · Trenażer AI' : ' · Baza egzaminacyjna';
  $('result-title').textContent =
    (state.mode === 'learn' ? 'Koniec sesji nauki' : 'Wynik egzaminu') +
    srcTitle +
    (state.isRetry ? ' (powtórka)' : '');
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
    const lecText = formatLectureBadge(q);
    const lecBadgeHtml = lecText
      ? `<span class="text-xs font-semibold px-2 py-0.5 rounded-md bg-violet-500/15 border border-violet-400/40 text-violet-200">🎓 ${esc(lecText)}</span>`
      : '';
    el.innerHTML = `
      <div class="flex flex-wrap items-center gap-2 mb-2">
        <span class="text-xs font-semibold text-slate-400">${n + 1}. Pytanie #${esc(q.id)}</span>
        ${lecBadgeHtml}
      </div>
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
    return confirm('Przerwać bieżącą sesję i kontynuować?');
  }
  return true;
}

/* ======================= Przeglądarka bazy pytań ======================= */
function sortedActiveQuestions() {
  return getActiveQuestions().slice().sort((a, b) => (Number(a.id) || 0) - (Number(b.id) || 0));
}

function openBrowser() {
  if (!hasAnyLoadedData() || !confirmLeave()) return;
  state.mode = 'browser';
  $('mode-badge').classList.add('hidden');
  show('screen-browser');
  renderBrowser();
}

function parseBrowserQuery(raw, activeList) {
  const trimmed = raw.trim();
  if (!trimmed) return { type: 'all', value: '' };

  // Zapytanie wprost po ID z symbolem # (np. "#15")
  const hashMatch = trimmed.match(/^#\s*(\d+)$/);
  if (hashMatch) {
    return { type: 'id', id: Number(hashMatch[1]), value: trimmed };
  }

  // Zapytanie samą liczbą (np. "15") — jeśli w aktywnej puli istnieje pytanie o takim ID, pokaż je natychmiast
  const numMatch = trimmed.match(/^(\d+)$/);
  if (numMatch) {
    const id = Number(numMatch[1]);
    if (activeList.some((q) => Number(q.id) === id)) {
      return { type: 'id', id, value: trimmed };
    }
  }

  return { type: 'keyword', keyword: trimmed.toLowerCase(), rawKeyword: trimmed };
}

function filterBrowserQuestions() {
  const all = sortedActiveQuestions();
  const parsed = parseBrowserQuery(state.browser.query, all);
  if (parsed.type === 'all') return { list: all, parsed };
  if (parsed.type === 'id') {
    return { list: all.filter((q) => Number(q.id) === parsed.id), parsed };
  }
  const needle = parsed.keyword;
  const list = all.filter((q) => {
    if (String(q.question || '').toLowerCase().includes(needle)) return true;
    if (String(q.lectureTitle || '').toLowerCase().includes(needle)) return true;
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

function renderBrowserLectureChips() {
  const wrap = $('browser-lectures-wrap');
  const isAi = state.source === 'ai';
  wrap.classList.toggle('hidden', !isAi);
  if (!isAi) return;

  const isMix = state.selectedLectures.size === 0;
  $('browser-lectures-all').className =
    'text-xs font-semibold px-2.5 py-1 rounded-lg border transition ' +
    (isMix
      ? 'border-violet-400 bg-violet-500/25 text-violet-100'
      : 'border-slate-700 bg-slate-800/80 text-slate-300 hover:border-violet-400/60');

  const chips = $('browser-lectures-chips');
  chips.innerHTML = '';
  state.lecturesMeta.forEach((lec) => {
    const selected = state.selectedLectures.has(lec.id);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.title = `Wykład ${lec.id}: ${lec.title} (${lec.count} pytań)`;
    btn.className =
      'text-xs font-semibold px-2.5 py-1.5 rounded-xl border transition flex items-center gap-1.5 ' +
      (selected
        ? 'border-violet-400 bg-violet-500/25 text-violet-100'
        : isMix
          ? 'border-slate-700 bg-slate-900 text-slate-300 hover:border-violet-400/60'
          : 'border-slate-800 bg-slate-950/50 text-slate-500 hover:text-slate-300 hover:border-slate-700');
    btn.innerHTML = `<span class="font-bold">W${lec.id}:</span> <span class="truncate max-w-[180px] sm:max-w-[240px]">${esc(lec.title)}</span> <span class="opacity-70">(${lec.count})</span>`;
    btn.addEventListener('click', () => toggleLectureFilter(lec.id));
    chips.appendChild(btn);
  });
}

function renderBrowser(preserveScroll = false) {
  const scrollY = preserveScroll ? window.scrollY : null;
  const all = sortedActiveQuestions();
  const { list: filtered, parsed } = filterBrowserQuestions();
  const filteredIds = new Set(filtered.map((q) => Number(q.id)));
  const kw = parsed.type === 'keyword' ? parsed.rawKeyword : '';
  const checkedMap = currentCheckedMap();

  // Etykieta aktywnego źródła w nagłówku przeglądarki
  const srcBadge = $('browser-source-badge');
  if (state.source === 'ai') {
    srcBadge.className = 'text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/20 border border-violet-400/40 text-violet-200';
    srcBadge.textContent = '🤖 Trenażer AI z wykładów';
  } else {
    srcBadge.className = 'text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-200';
    srcBadge.textContent = '📚 Oryginalna baza egzaminacyjna';
  }

  renderBrowserLectureChips();

  // Licznik znalezionych pytań
  $('browser-shown-count').textContent = filtered.length;
  $('browser-total-count').textContent = all.length;

  // Przycisk czyszczenia wyszukiwarki
  $('browser-search-clear').classList.toggle('hidden', state.browser.query.trim() === '');

  // Podpowiedź i przycisk resetowania sprawdzonych pytań
  const checkedCount = Object.keys(checkedMap).length;
  $('browser-selfcheck-hint').classList.toggle('hidden', state.browser.showAll);
  $('browser-reset-checked').classList.toggle('hidden', state.browser.showAll || checkedCount === 0);

  // Siatka numerów wszystkich pytań (Spis treści)
  const toc = $('browser-toc');
  toc.innerHTML = '';
  all.forEach((q) => {
    const id = Number(q.id);
    const inFilter = filteredIds.has(id);
    const isSingleMatch = filtered.length === 1 && inFilter && state.browser.query.trim() !== '';
    const chosen = checkedMap[id];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.dataset.qid = id;
    btn.textContent = id;
    const lecText = formatLectureBadge(q);
    btn.title = lecText ? `Pytanie #${id} (${lecText})` : `Skocz do pytania #${id}`;

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
    const chosen = checkedMap[id];
    const revealed = state.browser.showAll || chosen != null;
    const isSelfChecked = !state.browser.showAll && chosen != null && chosen !== '__REVEAL__';
    const lecText = formatLectureBadge(q);

    const card = document.createElement('article');
    card.id = `browser-q-${id}`;
    card.dataset.qid = id;
    card.className = 'bg-slate-900/70 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl transition';

    // Nagłówek karty pytania (z badge wykładu w trybie AI)
    const topBar = document.createElement('div');
    topBar.className = 'flex flex-wrap items-center justify-between gap-2 mb-2.5';

    const badgesWrap = document.createElement('div');
    badgesWrap.className = 'flex flex-wrap items-center gap-2';
    badgesWrap.innerHTML = `
      <span class="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-amber-300">
        Pytanie #${esc(id)}
      </span>
      ${lecText ? `<span class="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-violet-500/15 border border-violet-400/40 text-violet-200">🎓 ${highlightText(lecText, kw)}</span>` : ''}`;
    topBar.appendChild(badgesWrap);

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
        if (checkedMap[id] != null) {
          delete checkedMap[id];
        } else {
          checkedMap[id] = '__REVEAL__';
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
          checkedMap[id] = letter;
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
    // Jeśli pytanie jest aktualnie odfiltrowane wyszukiwarką, wyczyść filtr i wyrenderuj pełną listę
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
$('nav-src-exam').addEventListener('click', () => switchSource('exam'));
$('nav-src-ai').addEventListener('click', () => switchSource('ai'));
$('start-src-exam').addEventListener('click', () => switchSource('exam'));
$('start-src-ai').addEventListener('click', () => switchSource('ai'));
$('btn-lectures-all').addEventListener('click', () => toggleLectureFilter('ALL'));
$('browser-lectures-all').addEventListener('click', () => toggleLectureFilter('ALL'));

$('btn-learn').addEventListener('click', startLearn);
$('btn-exam').addEventListener('click', startExam);
$('btn-browser').addEventListener('click', openBrowser);
$('nav-browser').addEventListener('click', openBrowser);
$('nav-menu').addEventListener('click', () => { if (hasAnyLoadedData() && confirmLeave()) goMenu(); });
$('btn-next').addEventListener('click', (e) => { e.currentTarget.blur(); next(); });
$('btn-prev').addEventListener('click', (e) => { e.currentTarget.blur(); prev(); });
$('btn-retry-wrong').addEventListener('click', retryWrong);
$('btn-restart').addEventListener('click', restart);
$('btn-menu').addEventListener('click', goMenu);
$('logo').addEventListener('click', () => { if (hasAnyLoadedData() && confirmLeave()) goMenu(); });

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
    state.browser.checkedBySource[state.source] = {};
  }
  renderBrowser(true);
});

$('browser-reset-checked').addEventListener('click', () => {
  state.browser.checkedBySource[state.source] = {};
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

loadAllDatabases();
