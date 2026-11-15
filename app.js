'use strict';

/* ======================= Wbudowane bazy pytań (offline / file:// ready) ======================= */
const EMBEDDED_EXAM_QUESTIONS = [
  {
    "id": 1,
    "question": "Czym jest pomiar (definicja pomiaru)?",
    "image": null,
    "options": {
      "A": "Zgrubnym wytworzeniem skali pozwalającym na jakościową ocenę otaczającego świata",
      "B": "Procesem poznawczym umożliwiającym obiektywne odwzorowanie właściwości fizycznych obiektów w dziedzinie liczb",
      "C": "Porównaniem wskazań przyrządu z wzorcem wyłącznie w celu wyznaczenia poprawki",
      "D": "Subiektywną oceną cech obiektu dokonywaną przez obserwatora bez użycia przyrządów"
    },
    "correct": "B",
    "explanation": "Pomiar to proces poznawczy, w którym właściwościom fizycznym obiektu przyporządkowuje się w sposób obiektywny liczby (wartość liczbową wraz z jednostką). Opis z odpowiedzi A dotyczy obserwacji, która daje jedynie obraz jakościowy.",
    "type": "choice"
  },
  {
    "id": 2,
    "question": "Czym jest obserwacja (definicja obserwacji)?",
    "image": null,
    "options": {
      "A": "Procesem poznawczym umożliwiającym obiektywne odwzorowanie właściwości fizycznych obiektów w dziedzinie liczb",
      "B": "Zbiorem czynności mających na celu wyznaczenie poprawki przyrządu pomiarowego",
      "C": "Zgrubnym wytworzeniem skali pozwalającym na ocenę otaczającego świata; pozwala na ustalenie jakościowego obrazu obiektu fizycznego",
      "D": "Wielokrotnym powtarzaniem pomiaru w celu wyznaczenia niepewności typu A"
    },
    "correct": "C",
    "explanation": "Obserwacja poprzedza pomiar – pozwala zgrubnie uporządkować zjawiska i ustalić jakościowy (a nie ilościowy) obraz obiektu. Ilościowe, liczbowe odwzorowanie właściwości to już pomiar.",
    "type": "choice"
  },
  {
    "id": 3,
    "question": "Który zapis wyniku pomiaru jest prawidłowy?",
    "image": null,
    "options": {
      "A": "2,5 ± 0,1",
      "B": "2,5 V ± 0,123 V",
      "C": "2,5432 V ± 0,1 V",
      "D": "2,5 V ± 0,1 V"
    },
    "correct": "D",
    "explanation": "Wynik zapisuje się jako wartość ± niepewność wraz z jednostką (np. 2,5 V ± 0,1 V lub 5,3 kg ± 0,2 kg). Niepewność zaokrągla się do 1–2 cyfr znaczących, a wartość wyniku – do tego samego miejsca dziesiętnego co niepewność. W A brakuje jednostek, w B niepewność ma za dużo cyfr znaczących, a w C wynik ma więcej miejsc po przecinku niż niepewność.",
    "type": "choice"
  },
  {
    "id": 4,
    "question": "Który z poniższych jest przykładem pomiaru metodą pośrednią?",
    "image": null,
    "options": {
      "A": "Pomiar gęstości ciała na podstawie pomiarów masy i objętości",
      "B": "Pomiar długości linijką",
      "C": "Pomiar natężenia prądu amperomierzem",
      "D": "Pomiar masy na wadze z podziałką"
    },
    "correct": "A",
    "explanation": "W metodzie pośredniej wartość wielkości mierzonej oblicza się ze znanej zależności funkcyjnej od innych wielkości zmierzonych bezpośrednio (ρ = m/V). Inne przykłady: energia elektryczna z pomiarów prądu, napięcia i czasu albo rezystywność z rezystancji, długości i przekroju próbki.",
    "type": "choice"
  },
  {
    "id": 5,
    "question": "Który z poniższych jest przykładem pomiaru metodą bezpośrednią?",
    "image": null,
    "options": {
      "A": "Pomiar energii elektrycznej na podstawie pomiarów prądu, napięcia i czasu",
      "B": "Pomiar natężenia prądu amperomierzem",
      "C": "Pomiar rezystywności na podstawie pomiarów rezystancji, długości i przekroju próbki",
      "D": "Pomiar gęstości ciała na podstawie pomiarów masy i objętości"
    },
    "correct": "B",
    "explanation": "W metodzie bezpośredniej wartość wielkości mierzonej odczytuje się wprost z przyrządu wyskalowanego w jej jednostkach, bez obliczeń (amperomierz, linijka, waga z podziałką lub równoramienna). Pozostałe odpowiedzi to metody pośrednie.",
    "type": "choice"
  },
  {
    "id": 6,
    "question": "Który z poniższych jest przykładem pomiaru metodą złożoną?",
    "image": null,
    "options": {
      "A": "Pomiar długości linijką",
      "B": "Pomiar napięcia woltomierzem",
      "C": "Wyznaczenie gęstości ciała na podstawie pomiarów masy i objętości",
      "D": "Pomiar masy poszczególnych odważników z kompletu, gdy znana jest masa jednego z nich oraz wyniki porównań mas różnych kombinacji tych odważników"
    },
    "correct": "D",
    "explanation": "W metodzie złożonej wartości kilku wielkości wyznacza się, rozwiązując układ równań utworzony z wyników pomiarów różnych ich kombinacji – tak jak przy wzorcowaniu kompletu odważników na podstawie porównań ich zestawów.",
    "type": "choice"
  },
  {
    "id": 7,
    "question": "Który z poniższych jest przykładem pomiaru metodą podstawową?",
    "image": null,
    "options": {
      "A": "Wyznaczenie powierzchni prostokąta na podstawie pomiaru jego długości i szerokości",
      "B": "Pomiar napięcia przez porównanie z napięciem ogniwa wzorcowego w układzie kompensacyjnym",
      "C": "Pomiar masy odważników na podstawie porównań różnych ich kombinacji",
      "D": "Pomiar rezystancji omomierzem"
    },
    "correct": "A",
    "explanation": "Metoda podstawowa (bezwzględna) polega na pomiarze wielkości podstawowych (np. długości), z których wynika wartość wielkości mierzonej zgodnie z jej definicją – powierzchnia prostokąta to iloczyn zmierzonej długości i szerokości (S = a·b).",
    "type": "choice"
  },
  {
    "id": 8,
    "question": "Na czym polega metoda odchyłowa?",
    "image": null,
    "options": {
      "A": "Na doprowadzeniu do zera różnicy między wielkością mierzoną a wielkością wzorcową (stan równowagi)",
      "B": "Na wyznaczeniu wartości wielkości z zależności funkcyjnej od innych wielkości mierzonych bezpośrednio",
      "C": "Na przyporządkowaniu wielkości mierzonej miejsca w uporządkowanym zbiorze wartości danej wielkości",
      "D": "Na rozwiązaniu układu równań otrzymanego z pomiarów różnych kombinacji wielkości"
    },
    "correct": "C",
    "explanation": "W metodzie odchyłowej wartość odczytuje się z odchylenia wskazówki (lub zmiany wskazania) na wyskalowanej podziałce, która jest uporządkowanym zbiorem wartości wielkości. Wielkość mierzona dostaje więc miejsce na skali. A opisuje metodę zerową, B – pośrednią, a D – złożoną.",
    "type": "choice"
  },
  {
    "id": 9,
    "question": "Jaka jest różnica między systemem pomiarowym a układem pomiarowym?",
    "image": null,
    "options": {
      "A": "Nie ma żadnej różnicy – są to pojęcia całkowicie tożsame",
      "B": "System pomiarowy jest bardziej zintegrowany i zautomatyzowany, umożliwia zaawansowane przetwarzanie i analizę danych, a układ pomiarowy jest prostszy, manualny i niekoniecznie wymaga użycia komputera",
      "C": "Układ pomiarowy zawsze zawiera komputer, a system pomiarowy składa się wyłącznie z przyrządów analogowych",
      "D": "System pomiarowy służy wyłącznie do pomiarów wielkości nieelektrycznych, a układ pomiarowy – elektrycznych"
    },
    "correct": "B",
    "explanation": "System pomiarowy to zintegrowany i zautomatyzowany zespół przyrządów pomiarowych, przetworników oraz wspólnego sterowania (wewnętrznego lub zewnętrznego, np. przez komputer), który umożliwia automatyczną rejestrację, przetwarzanie i obliczanie wyników pomiarów. Układ pomiarowy jest prostszym zestawem przyrządów obsługiwanych manualnie.",
    "type": "choice"
  },
  {
    "id": 10,
    "question": "W jakim celu stosuje się przetwornik pomiarowy?",
    "image": null,
    "options": {
      "A": "W celu zwiększenia rozdzielczości wyświetlacza przyrządu",
      "B": "W celu wyeliminowania błędów przypadkowych",
      "C": "W celu zapisywania wyników pomiarów w pamięci przyrządu",
      "D": "Gdy nie możemy bezpośrednio zmierzyć wielkości mierzonej X, a można ją przekształcić na wielkość Y, którą jesteśmy w stanie zmierzyć"
    },
    "correct": "D",
    "explanation": "Przetwornik pomiarowy przetwarza wielkość mierzoną X (np. temperaturę, ciśnienie) według znanej zależności na inną wielkość Y (najczęściej elektryczną), którą łatwiej zmierzyć, przesłać i przetworzyć.",
    "type": "choice"
  },
  {
    "id": 11,
    "question": "W jaki sposób można wyeliminować błąd systematyczny pomiaru?",
    "image": null,
    "options": {
      "A": "Przez wielokrotne powtórzenie pomiaru i uśrednienie wyników",
      "B": "Nie da się go wyeliminować, ponieważ podlega rozkładowi Gaussa",
      "C": "Przez kalibrację przyrządów i zastosowanie poprawki",
      "D": "Przez odrzucenie wyników znacznie odbiegających od pozostałych"
    },
    "correct": "C",
    "explanation": "Błąd systematyczny ma stałą lub przewidywalnie zmienną wartość, więc można go wyznaczyć (np. podczas kalibracji względem wzorca) i skompensować poprawką równą błędowi ze znakiem przeciwnym. Uśrednianie (A) nie pomaga, bo każdy pomiar jest przesunięty o tyle samo.",
    "type": "choice"
  },
  {
    "id": 12,
    "question": "Kiedy wystąpi błąd dodatkowy pomiaru?",
    "image": null,
    "options": {
      "A": "W warunkach różniących się od warunków znamionowych – określa się go osobno dla każdej wielkości wpływającej",
      "B": "W warunkach odniesienia, dla których określono właściwości metrologiczne przyrządu",
      "C": "Gdy obserwator popełni pomyłkę przy odczycie wskazania",
      "D": "Wyłącznie przy pomiarach wielokrotnych, jako składnik niepewności typu A"
    },
    "correct": "A",
    "explanation": "Błąd dodatkowy pojawia się, gdy wielkości wpływające (temperatura, wilgotność, częstotliwość, pole magnetyczne itp.) wychodzą poza warunki znamionowe. Podaje się go osobno dla każdej wielkości wpływającej. B opisuje błąd podstawowy, a C – błąd gruby.",
    "type": "choice"
  },
  {
    "id": 13,
    "question": "Co należy zrobić, jeśli wystąpi błąd gruby?",
    "image": null,
    "options": {
      "A": "Uwzględnić go w obliczeniach jako składnik niepewności typu B",
      "B": "Wyeliminować go przez sprawdzenie poprawności procedury pomiarowej i powtórzenie pomiaru",
      "C": "Skorygować wynik poprawką wyznaczoną podczas kalibracji",
      "D": "Zwiększyć liczbę pomiarów i uśrednić wszystkie wyniki, łącznie z błędnym"
    },
    "correct": "B",
    "explanation": "Błąd gruby (pomyłka) wynika np. z błędnego odczytu, złego podłączenia lub awarii. Wynik obarczony takim błędem odrzuca się, sprawdza procedurę pomiarową i powtarza pomiar. Takiego wyniku nie wolno uśredniać ani korygować poprawką.",
    "type": "choice"
  },
  {
    "id": 14,
    "question": "Kiedy wystąpi błąd podstawowy pomiaru?",
    "image": null,
    "options": {
      "A": "W warunkach różniących się od warunków znamionowych",
      "B": "Przy niewłaściwym podłączeniu przyrządu do obwodu",
      "C": "Wyłącznie przy pomiarach metodą pośrednią",
      "D": "W warunkach, dla których określono właściwości metrologiczne przyrządu (warunki odniesienia)"
    },
    "correct": "D",
    "explanation": "Błąd podstawowy to błąd przyrządu pracującego w warunkach odniesienia, czyli takich, dla których producent określił jego właściwości metrologiczne (np. klasę dokładności). Poza tymi warunkami dochodzą błędy dodatkowe.",
    "type": "choice"
  },
  {
    "id": 15,
    "question": "Które stwierdzenie dotyczące błędów przypadkowych jest prawdziwe?",
    "image": null,
    "options": {
      "A": "Mają stałą wartość i znak, więc można je usunąć poprawką",
      "B": "Wynikają wyłącznie z pomyłek obserwatora i należy je odrzucać",
      "C": "Statystycznie podlegają rozkładowi Gaussa (normalnemu) i nie dają się wyeliminować",
      "D": "Występują tylko w warunkach różniących się od znamionowych"
    },
    "correct": "C",
    "explanation": "Błędy przypadkowe zmieniają się w nieprzewidywalny sposób między kolejnymi pomiarami i zwykle mają rozkład normalny (Gaussa). Nie da się ich wyeliminować, można jedynie ograniczyć ich wpływ przez wielokrotny pomiar i uśrednianie (odchylenie standardowe średniej maleje jak 1/√n).",
    "type": "choice"
  },
  {
    "id": 16,
    "question": "Do pomiaru jakich wielkości elektrycznych stosowany jest przetwornik typu „TRUE RMS”?",
    "image": null,
    "options": {
      "A": "Wartości skutecznej prądu i napięcia",
      "B": "Wartości szczytowej (amplitudy) prądu i napięcia",
      "C": "Wartości średniej wyprostowanej prądu i napięcia",
      "D": "Wyłącznie składowej stałej napięcia"
    },
    "correct": "A",
    "explanation": "RMS (Root Mean Square) to wartość skuteczna. Przetwornik „TRUE RMS” mierzy rzeczywistą wartość skuteczną także przebiegów odkształconych (niesinusoidalnych), a nie tylko wartość wyliczoną z wartości średniej przy założeniu sinusoidy.",
    "type": "choice"
  },
  {
    "id": 17,
    "question": "Amplituda napięcia sinusoidalnego bez składowej stałej wynosi \\(U_m = 4{,}24\\text{ V}\\). Ile pokaże przyrząd mierzący wartość skuteczną przy pomiarze tego napięcia? Wynik podaj w woltach [V].",
    "image": null,
    "options": {
      "A": "4,24 V",
      "B": "≈ 3,00 V (2,998 V)",
      "C": "2,70 V",
      "D": "6,00 V"
    },
    "correct": "B",
    "explanation": "Dla przebiegu sinusoidalnego bez składowej stałej wartość skuteczna wynosi:\n\\[U_{\\text{sk}} = \\frac{U_m}{\\sqrt{2}} = \\frac{4{,}24\\text{ V}}{\\sqrt{2}} \\approx 2{,}998\\text{ V} \\approx 3{,}00\\text{ V}\\]\nWartość \\(2{,}70\\text{ V}\\) odpowiada wartości średniej wyprostowanej (\\(2 U_m / \\pi\\)), a \\(6{,}00\\text{ V}\\) to wynik błędnego mnożenia przez \\(\\sqrt{2}\\).",
    "type": "open",
    "numericTarget": 3.0,
    "acceptedNumbers": [
      3.0,
      2.998
    ],
    "tolerance": 0.02,
    "toleranceAbs": 0.02,
    "unit": "V",
    "openAnswerText": "3,00 V (dokładnie 2,998 V)"
  },
  {
    "id": 18,
    "question": "Wykonano \\(n = 36\\) pomiarów napięcia. Otrzymano odchylenie standardowe pojedynczego pomiaru równe \\(s = 0{,}0036\\text{ V}\\). Ile wynosi niepewność pomiaru liczona metodą typu A? Wynik podaj w woltach [V].",
    "image": null,
    "options": {
      "A": "0,0036 V",
      "B": "0,0001 V",
      "C": "0,0006 V",
      "D": "0,0216 V"
    },
    "correct": "C",
    "explanation": "Niepewność standardowa typu A to odchylenie standardowe średniej arytmetycznej:\n\\[u_A = \\frac{s}{\\sqrt{n}} = \\frac{0{,}0036\\text{ V}}{\\sqrt{36}} = \\frac{0{,}0036\\text{ V}}{6} = 0{,}0006\\text{ V}\\]\nUwaga: wartością \\(0{,}0001\\text{ V}\\) byłby wynik błędnego dzielenia przez \\(n\\) zamiast przez \\(\\sqrt{n}\\).",
    "type": "open",
    "numericTarget": 0.0006,
    "acceptedNumbers": [
      0.0006
    ],
    "tolerance": 0.01,
    "toleranceAbs": 1e-05,
    "unit": "V",
    "openAnswerText": "0,0006 V"
  },
  {
    "id": 19,
    "question": "Błąd graniczny pomiaru napięcia multimetrem cyfrowym wynosi \\(\\Delta U_{\\text{gr}} = 0{,}138\\text{ V}\\). Ile wynosi niepewność pomiaru liczona metodą typu B (przy założeniu rozkładu prostokątnego)? Wynik podaj w woltach [V].",
    "image": null,
    "options": {
      "A": "0,138 V",
      "B": "0,0460 V",
      "C": "0,239 V",
      "D": "0,0797 V"
    },
    "correct": "D",
    "explanation": "Przy założeniu rozkładu prostokątnego (jednostajnego) niepewność standardowa typu B wynosi:\n\\[u_B = \\frac{\\Delta U_{\\text{gr}}}{\\sqrt{3}} = \\frac{0{,}138\\text{ V}}{\\sqrt{3}} \\approx 0{,}07967\\text{ V}\\]\nW obliczeniach pośrednich (do 3 cyfr znaczących): \\(0{,}0797\\text{ V}\\). Przy zaokrągleniu końcowym w górę do 1 cyfry znaczącej: \\(0{,}08\\text{ V}\\).",
    "type": "open",
    "numericTarget": 0.0797,
    "acceptedNumbers": [
      0.0797,
      0.0796,
      0.08
    ],
    "tolerance": 0.02,
    "toleranceAbs": 0.0005,
    "unit": "V",
    "openAnswerText": "0,0797 V (lub 0,08 V po zaokrągleniu końcowym do 1 cyfry znaczącej)"
  },
  {
    "id": 20,
    "question": "Przetwornik cyfrowo-analogowy o rozdzielczości \\(n = 9\\text{ bitów}\\) posiada napięcie referencyjne \\(U_{\\text{ref}} = 5{,}12\\text{ V}\\). Jaka jest możliwa minimalna zmiana napięcia na jego wyjściu (1 LSB)? Wynik podaj w woltach [V].",
    "image": null,
    "options": {
      "A": "0,01 V = 10 mV",
      "B": "0,02 V = 20 mV",
      "C": "0,569 V",
      "D": "5 mV"
    },
    "correct": "A",
    "explanation": "Najmniejsza zmiana napięcia na wyjściu przetwornika C/A (1 LSB) wynosi:\n\\[\\Delta U_{\\min} = \\frac{U_{\\text{ref}}}{2^n} = \\frac{5{,}12\\text{ V}}{2^9} = \\frac{5{,}12\\text{ V}}{512} = 0{,}01\\text{ V} = 10\\text{ mV}\\]",
    "type": "open",
    "numericTarget": 0.01,
    "acceptedNumbers": [
      0.01,
      10
    ],
    "tolerance": 0.01,
    "toleranceAbs": 0.0002,
    "unit": "V",
    "openAnswerText": "0,01 V (10 mV)"
  },
  {
    "id": 21,
    "question": "Niepewność pomiaru obliczona metodą typu A wynosi \\(u_A = 0{,}0539\\text{ V}\\), a niepewność obliczona metodą typu B wynosi \\(u_B = 0{,}0589\\text{ V}\\). Ile wynosi niepewność całkowita (złożona) pomiaru? Wynik podaj w woltach [V].",
    "image": null,
    "options": {
      "A": "0,1128 V",
      "B": "0,0798 V",
      "C": "0,0564 V",
      "D": "0,00637 V"
    },
    "correct": "B",
    "explanation": "Niepewność całkowitą (złożoną) liczy się geometrycznie (pierwiastek z sumy kwadratów):\n\\[u_c = \\sqrt{u_A^2 + u_B^2} = \\sqrt{0{,}0539^2 + 0{,}0589^2}\\text{ V} = \\sqrt{0{,}00637442}\\text{ V} \\approx 0{,}07984\\text{ V}\\]\nZ 3 cyframi znaczącymi w górę daje to \\(0{,}0799\\text{ V}\\) (matematycznie \\(0{,}0798\\text{ V}\\)), a po zaokrągleniu końcowym w górę do 1 cyfry znaczącej \\(0{,}08\\text{ V}\\). Niepewności nie sumuje się algebraicznie.\nUwaga: w popularnym pliku PDF ze ściągawką MEGA podano błędny wynik 0,00799 V (przesunięty przecinek — 10× za mało).",
    "type": "open",
    "numericTarget": 0.0798,
    "acceptedNumbers": [
      0.0798,
      0.0799,
      0.08
    ],
    "tolerance": 0.02,
    "toleranceAbs": 0.0005,
    "unit": "V",
    "openAnswerText": "0,0798 V (lub 0,0799 V / 0,08 V po zaokrągleniu w górę)"
  },
  {
    "id": 22,
    "question": "Multimetrem cyfrowym na zakresie \\(10\\text{ V}\\) zmierzono napięcie stałe i otrzymano wynik \\(3{,}000\\text{ V}\\). Producent podaje dokładność przyrządu w postaci \\(0{,}3\\%\\text{ of reading} + 0{,}2\\%\\text{ of range}\\). Ile wyniesie błąd graniczny pomiaru tego napięcia? Wynik podaj w woltach [V].",
    "image": null,
    "options": {
      "A": "0,009 V",
      "B": "0,020 V",
      "C": "0,029 V",
      "D": "0,050 V"
    },
    "correct": "C",
    "explanation": "Błąd graniczny multimetru ze specyfikacją procentową wskazania i zakresu:\n\\[\\Delta U_{\\text{gr}} = 0{,}3\\% \\cdot U_{\\text{wsk}} + 0{,}2\\% \\cdot U_{\\text{zakr}} = 0{,}003 \\cdot 3{,}000\\text{ V} + 0{,}002 \\cdot 10\\text{ V} = 0{,}009\\text{ V} + 0{,}020\\text{ V} = 0{,}029\\text{ V}\\]\nPrzy zaokrągleniu końcowym w górę do 1 cyfry znaczącej: \\(0{,}03\\text{ V}\\).",
    "type": "open",
    "numericTarget": 0.029,
    "acceptedNumbers": [
      0.029,
      0.03
    ],
    "tolerance": 0.02,
    "toleranceAbs": 0.001,
    "unit": "V",
    "openAnswerText": "0,029 V (lub 0,03 V po zaokrągleniu w górę)"
  },
  {
    "id": 23,
    "question": "Multimetr podaje wynik z rozdzielczością 5 cyfr po przecinku. Wykonujemy 20 pomiarów napięcia. Ile cyfr po przecinku należy zapisać przy obliczaniu średniej wartości tego napięcia?",
    "image": null,
    "options": {
      "A": "2",
      "B": "3",
      "C": "6",
      "D": "5"
    },
    "correct": "C",
    "explanation": "Zgodnie z zasadami zaokrąglania z wykładu (Wykład 6, slajd 18): wynik pojedynczego pomiaru lub średnią dla \\(n \\le 10\\) pomiarów zapisuje się z taką samą liczbą cyfr jak wskazanie przyrządu, dla średniej z \\(n > 10\\) pomiarów (tu: 20) dodaje się jedną dodatkową cyfrę (\\(5 + 1 = 6\\) cyfr po przecinku), a dla \\(n > 100\\) – dwie dodatkowe cyfry.\nUwaga: w popularnym pliku PDF MEGA błędnie podano odpowiedź 5, pomijając regułę +1 cyfry dla \\(n > 10\\).",
    "type": "open",
    "numericTarget": 6,
    "acceptedNumbers": [
      6
    ],
    "tolerance": 0,
    "toleranceAbs": 0.01,
    "unit": "",
    "openAnswerText": "6"
  },
  {
    "id": 24,
    "question": "Co oznacza jednostka ppm?",
    "image": null,
    "options": {
      "A": "10⁻⁶ (jedna milionowa część)",
      "B": "10⁻³ (jedna tysięczna część)",
      "C": "10⁻⁹ (jedna miliardowa część)",
      "D": "10⁻² (jedna setna część)"
    },
    "correct": "A",
    "explanation": "ppm (parts per million) oznacza „części na milion”, czyli 10⁻⁶. W specyfikacjach przyrządów (np. 50 ppm) to 0,005%. 10⁻³ to promil (‰), a 10⁻² to procent (%).",
    "type": "choice"
  }
];

const EMBEDDED_AI_QUESTIONS = [
  {
    "id": 1,
    "lectureId": 1,
    "lectureTitle": "Pojęcia podstawowe metrologii",
    "question": "Jak w metrologii dzieli się wielkości mierzalne ze względu na ich strukturę oraz ze względu na pobór energii?",
    "image": null,
    "options": {
      "A": "Według struktury na ciągłe (analogowe) i ziarniste (dyskretne, różniące się o kwanty), a według poboru energii na aktywne (niewymagające dodatkowych źródeł energii) i pasywne (wymagające dodatkowego źródła energii)",
      "B": "Według struktury na aktywne i pasywne, a według poboru energii na ciągłe (analogowe) i ziarniste (dyskretne)",
      "C": "Według struktury na podstawowe i pochodne, a według poboru energii na wzorcowe i robocze",
      "D": "Według struktury na bezpośrednie i pośrednie, a według poboru energii na statyczne i dynamiczne"
    },
    "correct": "A",
    "explanation": "Wielkości mierzalne dzielimy według struktury na ciągłe (analogowe – przyjmujące nieskończenie wiele wartości) oraz ziarniste (dyskretne – różniące się o skończone kwanty), natomiast według poboru energii na aktywne (np. napięcie, siła elektromotoryczna – nie wymagają zewnętrznego źródła energii przy pomiarze) oraz pasywne (np. rezystancja, pojemność – do ich pomiaru trzeba doprowadzić energię z zewnątrz).",
    "type": "choice"
  },
  {
    "id": 2,
    "lectureId": 1,
    "lectureTitle": "Pojęcia podstawowe metrologii",
    "question": "Na czym polega ustalenie modelu metrologicznego obiektu w procesie pomiarowym i czym różni się on od modelu matematycznego?",
    "image": null,
    "options": {
      "A": "Model metrologiczny to wytypowanie jakościowej cechy obiektu bez użycia równań, podczas gdy model matematyczny dobiera konkretne przyrządy pomiarowe",
      "B": "Model metrologiczny powstaje przez transformację modelu matematyczno-fizycznego tak, aby badany obiekt był opisywany wyłącznie przez wielkości mierzalne",
      "C": "Model metrologiczny uwzględnia wyłącznie błędy przypadkowe, a model matematyczny – wyłącznie błędy systematyczne",
      "D": "Model metrologiczny jest zawsze tożsamy z modelem fizycznym i poprzedza zapisanie jakichkolwiek formuł matematycznych"
    },
    "correct": "B",
    "explanation": "W procesie pomiarowym najpierw wybiera się badane właściwości (model fizyczny), następnie opisuje je równaniami (model matematyczny), a kolejnym krokiem jest ustalenie modelu metrologicznego – czyli taka transformacja modelu matematycznego, aby występowały w nim wyłącznie wielkości mierzalne.",
    "type": "choice"
  },
  {
    "id": 3,
    "lectureId": 1,
    "lectureTitle": "Pojęcia podstawowe metrologii",
    "question": "W obowiązującym układzie SI definicja kilograma (kg) opiera się na przyjęciu ustalonej wartości liczbowej:",
    "image": null,
    "options": {
      "A": "Masy międzynarodowego prototypu kilograma z platyny i irydu przechowywanego w Sèvres",
      "B": "Stałej Avogadra N_A = 6,022 140 76 × 10²³ mol⁻¹ wyrażonej bezpośrednio w jednostce kg⁻¹",
      "C": "Stałej Plancka h = 6,626 070 15 × 10⁻³⁴ wyrażonej w jednostce J·s (czyli kg·m²·s⁻¹), przy wykorzystaniu definicji metra (c) i sekundy (Δν_Cs)",
      "D": "Stałej Boltzmanna k = 1,380 649 × 10⁻²³ wyrażonej w jednostce J·K⁻¹"
    },
    "correct": "C",
    "explanation": "Po redefinicji układu SI kilogram nie jest już definiowany przez wzorzec materijalny, lecz przez ustalenie dokładnej wartości stałej Plancka h = 6,626 070 15 × 10⁻³⁴ J·s (gdzie J·s = kg·m²·s⁻¹), przy czym metr jest zdefiniowany przez prędkość światła w próżni c, a sekunda przez częstotliwość przejścia nadsubtelnego w atomie cezu-133 (Δν_Cs).",
    "type": "choice"
  },
  {
    "id": 4,
    "lectureId": 1,
    "lectureTitle": "Pojęcia podstawowe metrologii",
    "question": "Przez ustalenie wartości której stałej fizycznej zdefiniowana jest obecnie w układzie SI jednostka temperatury termodynamicznej – kelwin (K)?",
    "image": null,
    "options": {
      "A": "Temperatury punktu potrójnego wody równej dokładnie 273,16 K",
      "B": "Stałej Stefana-Boltzmanna σ wyrażonej w W·m⁻²·K⁻⁴",
      "C": "Stałej gazowej R wyrażonej w J·mol⁻¹·K⁻¹",
      "D": "Stałej Boltzmanna k = 1,380 649 × 10⁻²³ J·K⁻¹ (czyli kg·m²·s⁻²·K⁻¹)"
    },
    "correct": "D",
    "explanation": "Kelwin (K) jest zdefiniowany poprzez przyjęcie ustalonej wartości liczbowej stałej Boltzmanna k = 1,380 649 × 10⁻²³ J·K⁻¹ (gdzie J·K⁻¹ = kg·m²·s⁻²·K⁻¹), przy wykorzystaniu definicji kilograma (h), metra (c) i sekundy (Δν_Cs).",
    "type": "choice"
  },
  {
    "id": 5,
    "lectureId": 1,
    "lectureTitle": "Pojęcia podstawowe metrologii",
    "question": "Które zestawienie poprawnie przyporządkowuje podstawowe jednostki układu SI (sekundę, metr, amper i kandelę) do wielkości/stałych fizycznych użytych w ich definicjach?",
    "image": null,
    "options": {
      "A": "Sekunda – stała Plancka h; metr – częstotliwość cezowa Δν_Cs; amper – stała Faradaya F; kandela – stała Boltzmanna k",
      "B": "Sekunda – częstotliwość cezowa Δν_Cs (9 192 631 770 Hz); metr – prędkość światła c (299 792 458 m·s⁻¹); amper – ładunek elementarny e (1,602 176 634 × 10⁻¹⁹ C); kandela – skuteczność świetlna K_cd (683 lm·W⁻¹ dla f = 540 × 10¹² Hz)",
      "C": "Sekunda – okres obiegu Ziemi; metr – długość fali kryptonu-86; amper – siła oddziaływania dwóch przewodów (2 × 10⁻⁷ N); kandela – promieniowanie ciała doskonale czarnego",
      "D": "Sekunda – Δν_Cs; metr – prędkość światła c; amper – kwant strumienia magnetycznego Φ₀; kandela – skuteczność świetlna dla długości fali 683 nm"
    },
    "correct": "B",
    "explanation": "W układzie SI: sekunda opiera się na częstotliwości przejścia nadsubtelnego w atomie cezu-133 (Δν_Cs = 9 192 631 770 Hz), metr na prędkości światła w próżni (c = 299 792 458 m·s⁻¹), amper na ładunku elementarnym (e = 1,602 176 634 × 10⁻¹⁹ C, gdzie C = A·s), a kandela na skuteczności świetlnej promieniowania monochromatycznego o częstotliwości 540 × 10¹² Hz (K_cd = 683 lm·W⁻¹ = cd·sr·W⁻¹).",
    "type": "choice"
  },
  {
    "id": 6,
    "lectureId": 1,
    "lectureTitle": "Pojęcia podstawowe metrologii",
    "question": "Jakie cztery podstawowe parametry określają wzorzec pomiarowy (podawane zwykle na wzorcu lub w jego metryce)?",
    "image": null,
    "options": {
      "A": "Czułość progowa, stała podziałki, współczynnik kształtu oraz współczynnik szczytu",
      "B": "Rozdzielczość wyświetlacza, czas próbkowania, impedancja wejściowa oraz napięcie zasilania",
      "C": "Wartość średnia, odchylenie standardowe, współczynnik rozszerzenia k oraz poziom ufności",
      "D": "Nominalna miara wzorca, niedokładność miary wzorca, okres zachowania niedokładności miary wzorca oraz warunki, w których miara i niedokładność są zachowane"
    },
    "correct": "D",
    "explanation": "W metryce wzorca (lub bezpośrednio na nim) podaje się cztery kluczowe parametry metrologiczne: nominalną miarę wzorca, niedokładność tej miary, okres zachowania niedokładności miary (ważność wzorcowania) oraz warunki odniesienia, w których miara i niedokładność są zachowane.",
    "type": "choice"
  },
  {
    "id": 7,
    "lectureId": 1,
    "lectureTitle": "Pojęcia podstawowe metrologii",
    "question": "Czym są wzorce obliczeniowe (liczalne) i który wzór opisuje klasyczny przykład takiego wzorca przedstawiony na wykładzie?",
    "image": null,
    "options": {
      "A": "Są to wzorce skonstruowane w oparciu o określone wymiary geometryczne i właściwości materiałowe, np. wzorzec pojemności C = ε · ε₀ · S / l",
      "B": "Są to wyłącznie wzorce II rzędu stosowane do kalibracji przyrządów warsztatowych z zależności ΔX = klasa · zakres / 100",
      "C": "Są to wzorce wyznaczane metodą najmniejszych kwadratów z serii pomiarowej, opisywane wzorem u_i = s(x) / √n",
      "D": "Są to wirtualne wzorce generowane programowo w komputerze; opisuje je wzór U_wy = U_ref · Σ a_i · 2⁻ⁱ"
    },
    "correct": "A",
    "explanation": "Wzorce obliczeniowe (liczalne) to wzorce skonstruowane tak, że ich miarę można wyliczyć z praw fizyki na podstawie dokładnie zmierzonych wymiarów geometrycznych i stałych materiałowych – przykładem jest wzorzec pojemności (kondensator płaski/pierścieniowy Thompsona-Lamparda) opisywany zależnością C = ε·ε₀·S/l.",
    "type": "choice"
  },
  {
    "id": 8,
    "lectureId": 1,
    "lectureTitle": "Pojęcia podstawowe metrologii",
    "question": "W jakiej kolejności (od najwyższej do najniższej dokładności) uporządkowana jest hierarchia wzorców pomiarowych?",
    "image": null,
    "options": {
      "A": "Wzorce I rzędu → wzorce II rzędu → wzorce pierwotne (etalony)",
      "B": "Wzorce robocze → etalony → wzorce I rzędu",
      "C": "Wzorce pierwotne (wzorce państwowe – etalony) → wzorce I rzędu → wzorce II rzędu",
      "D": "Wzorce II rzędu → wzorce I rzędu → wzorce państwowe (etalony)"
    },
    "correct": "C",
    "explanation": "Hierarchia wzorców wynika z ich dokładności: na szczycie znajdują się wzorce pierwotne (wzorce państwowe – etalony) o najwyższej dokładności, poniżej wzorce I rzędu, a następnie wzorce II rzędu (i kontrolne/robocze).",
    "type": "choice"
  },
  {
    "id": 9,
    "lectureId": 1,
    "lectureTitle": "Pojęcia podstawowe metrologii",
    "question": "Na wyświetlaczu multimetru cyfrowego oprócz odczytu liczbowego (np. 1,469 V) znajduje się linijka świetlna (tzw. bargraf) ze skalą od 0 do 100. Jakim rodzajem wizualizacji wyniku pomiaru jest bargraf?",
    "image": null,
    "options": {
      "A": "Jest to wskaźnik stanu baterii i temperatury wewnętrznej przyrządu, niemający związku z wartością mierzoną",
      "B": "Jest to wyłącznie cyfrowa wizualizacja wyniku pomiaru, ponieważ znajduje się na ekranie LCD multimetru cyfrowego",
      "C": "Jest to przykład analogowej wizualizacji wyniku pomiaru (położenie wskaźnika względem opisanej podziałki)",
      "D": "Jest to graficzny zapis niepewności rozszerzonej typu A"
    },
    "correct": "C",
    "explanation": "Mimo że bargraf jest umieszczony na wyświetlaczu multimetru cyfrowego, stanowi on przykład analogowej wizualizacji wyniku pomiaru – informacja jest przekazywana poprzez długość paska (położenie wskaźnika) względem opisanej w liczbach podziałki, co ułatwia obserwację szybkich zmian sygnału.",
    "type": "choice"
  },
  {
    "id": 10,
    "lectureId": 1,
    "lectureTitle": "Pojęcia podstawowe metrologii",
    "question": "Jakie bloki tworzą podstawowy schemat funkcjonalny przyrządu pomiarowego i w jakiej są ze sobą relacji?",
    "image": null,
    "options": {
      "A": "Wejście sygnału → przetwornik → układ porównania (komparator), do którego doprowadzony jest też sygnał z układu odniesienia → urządzenie odczytowe → pole informacyjne",
      "B": "Źródło zasilania → wzmacniacz mocy → detektor szczytowy → pamięć dyskowa",
      "C": "Obserwator → model matematyczny → wzorzec II rzędu → przetwornik C/A",
      "D": "Multiplekser → komparator → układ próbkująco-pamiętający → czujnik fizyczny"
    },
    "correct": "A",
    "explanation": "W schemacie funkcjonalnym przyrządu pomiarowego wielkość wejściowa trafia na przetwornik, a następnie do układu porównania (komparatora), który porównuje ją z wartością z układu odniesienia; wynik porównania przekazywany jest przez urządzenie odczytowe na pole informacyjne (wskazówka/wyświetlacz).",
    "type": "choice"
  },
  {
    "id": 11,
    "lectureId": 1,
    "lectureTitle": "Pojęcia podstawowe metrologii",
    "question": "W teorii sygnałów pomiarowych wyróżnia się nośnik sygnału oraz parametr informacji. Czym różnią się te dwa pojęcia?",
    "image": null,
    "options": {
      "A": "Nośnik sygnału to przewód miedziany łączący przyrządy, a parametr informacji to klasa dokładności miernika",
      "B": "Parametr informacji określa moc strat w obwodzie, a nośnik sygnału to wartość błędu granicznego",
      "C": "Nośnik sygnału występuje wyłącznie w sygnałach cyfrowych, a parametr informacji wyłącznie w sygnałach analogowych",
      "D": "Nośnik sygnału jest wielkością opisującą procesy energetyczne przenoszące informację (np. prąd, napięcie), natomiast parametr informacji to funkcja zrealizowana na tym nośniku (np. amplituda, częstotliwość, faza)"
    },
    "correct": "D",
    "explanation": "Sygnał pomiarowy składa się z nośnika sygnału (wielkości fizycznej opisującej procesy energetyczne przenoszące informację, np. prądu elektrycznego czy napięcia) oraz parametru informacji (funkcji zrealizowanej na tym nośniku, z której wyznacza się wartość wielkości mierzonej).",
    "type": "choice"
  },
  {
    "id": 12,
    "lectureId": 1,
    "lectureTitle": "Pojęcia podstawowe metrologii",
    "question": "Co zgodnie z definicją wykładową odróżnia system pomiarowy od układu pomiarowego?",
    "image": null,
    "options": {
      "A": "Układ pomiarowy zawiera przetworniki pomiarowe, natomiast w systemie pomiarowym przetworniki nie występują",
      "B": "System pomiarowy jest objęty wspólnym sterowaniem wewnętrznym lub zewnętrznym i tworzy jedną organizacyjną całość przeznaczoną m.in. do obliczenia i rejestracji wyników pomiaru (np. DMM i zasilacz programowalny sterowane komputerem)",
      "C": "Układ pomiarowy służy wyłącznie do komparacji z etalonem państwowym, a system pomiarowy do obserwacji jakościowej",
      "D": "System pomiarowy nie dokonuje komparacji ani przetwarzania informacji pomiarowej, a jedynie ją wyświetla"
    },
    "correct": "B",
    "explanation": "Zarówno układ, jak i system pomiarowy są zbiorami funkcjonalnymi przyrządów i przetworników, jednak system pomiarowy jest objęty wspólnym sterowaniem (wewnętrznym lub zewnętrznym, np. przez komputer z programem) oraz realizuje automatyczne obliczenie i rejestrację wyników pomiaru.",
    "type": "choice"
  },
  {
    "id": 13,
    "lectureId": 1,
    "lectureTitle": "Pojęcia podstawowe metrologii",
    "question": "Jak nazywa się operacja zamiany wielkości mierzonej X (której nie możemy zmierzyć bezpośrednio) w wielkość Y za pomocą przetwornika pomiarowego przy zachowaniu informacji o X, i jak nazywamy powstałą wielkość Y?",
    "image": null,
    "options": {
      "A": "Operacja ta nazywana jest wzorcowaniem, a wielkość Y nazywana jest miarą wzorca",
      "B": "Operacja ta nazywana jest kwantyzacją, a wielkość Y nazywana jest błędem metody",
      "C": "Operacja ta nazywana jest kompensacją, a wielkość Y nazywana jest progiem pobudliwości",
      "D": "Operacja ta nazywana jest przetwarzaniem, a nowa wielkość Y nazywana jest sygnałem pomiarowym"
    },
    "correct": "D",
    "explanation": "Zgodnie z definicją z wykładu, zamiana wielkości wejściowej X w wielkość wyjściową Y (w przetworniku pomiarowym o symbolu X/Y) przy zachowaniu informacji o wartości X nazywana jest przetwarzaniem, natomiast nowa wielkość Y nosi nazwę sygnału pomiarowego.",
    "type": "choice"
  },
  {
    "id": 14,
    "lectureId": 1,
    "lectureTitle": "Pojęcia podstawowe metrologii",
    "question": "Ile w przybliżeniu wyróżnia się wielkości mierzalnych w nauce i technice oraz ile jednostek podstawowych przyjęto w układzie SI do utworzenia pozostałych jednostek pochodnych?",
    "image": null,
    "options": {
      "A": "Około 50 wielkości mierzalnych i 10 jednostek podstawowych",
      "B": "Około 100 wielkości mierzalnych i 3 jednostki podstawowe (metr, kilogram, sekunda)",
      "C": "Około 1000 wielkości mierzalnych i 7 jednostek podstawowych (sekunda, metr, kilogram, amper, kelwin, mol, kandela)",
      "D": "Nieskończenie wiele jednostek podstawowych i 7 jednostek pochodnych"
    },
    "correct": "C",
    "explanation": "Ze względu na dużą liczbę wielkości mierzalnych (około 1000) w układzie SI wyszczególniono 7 jednostek podstawowych (s, m, kg, A, K, mol, cd), za pomocą których tworzy się wszystkie pozostałe jednostki pochodne przy użyciu odpowiednich równań definicyjnych.",
    "type": "choice"
  },
  {
    "id": 15,
    "lectureId": 2,
    "lectureTitle": "Metody pomiarowe i mostek Wheatstone'a",
    "question": "Czym charakteryzuje się metoda pomiarowa różnicowa i w jaki sposób może być wywzorcowana podziałka przyrządu pracującego tą metodą?",
    "image": null,
    "options": {
      "A": "Polega na doprowadzeniu różnicy X − X_w do zera; przyrząd nie posiada podziałki, a jedynie diodę sygnalizującą stan zerowy",
      "B": "Od wielkości mierzonej X odejmuje się znaną wartość odniesienia X_w, a różnicę α = X − X_w mierzy się metodą odchyłową; przyrząd może być wywzorcowany w wartościach różnicy X − X_w lub bezpośrednio w wartościach X (wtedy zakres nie zawiera zera)",
      "C": "Polega na przemnożeniu wielkości mierzonej X przez wielkość wzorcową X_w; zakres pomiarowy musi zawsze zaczynać się od zera",
      "D": "Wymaga rozwiązania układu równań różniczkowych z użyciem co najmniej trzech wzorców jednocześnie"
    },
    "correct": "B",
    "explanation": "W metodzie różnicowej od wielkości mierzonej X odejmujemy znaną wartość porównawczą X_w, a niewielką różnicę α = X − X_w mierzymy metodą odchyłową. Pozwala to uzyskać wysoką dokładność (zbliżoną do dokładności wzorca X_w) nawet przy użyciu mało dokładnego miernika odchyłowego, o ile X_w jest bliskie X. Gdy skala jest opisana wprost w jednostkach X, zakres nie zawiera wartości zerowej.",
    "type": "choice"
  },
  {
    "id": 16,
    "lectureId": 2,
    "lectureTitle": "Metody pomiarowe i mostek Wheatstone'a",
    "question": "Czym jest metoda koincydencyjna i do której grupy metod pomiarowych należy?",
    "image": null,
    "options": {
      "A": "Jest odmianą metody różnicowej, w której wyznacza się koincydencję (pokrywanie się) pewnych wskazów lub sygnałów przy małej różnicy między wielkością mierzoną a porównywaną (np. impulsów zegara badanego i wzorcowego czy kresek noniusza)",
      "B": "Jest odmianą metody podstawowej (bezwzględnej), polegającą na jednoczesnym pomiarze masy i temperatury",
      "C": "Jest metodą przetwarzania cyfrowo-analogowego wykorzystywaną w drabinkach R-2R",
      "D": "Jest odmianą metody przestawieniowej, w której zamienia się miejscami woltomierz z amperomierzem"
    },
    "correct": "A",
    "explanation": "Metoda koincydencyjna to szczególna odmiana metody różnicowej. Polega na obserwacji zbieżności (koincydencji) sygnałów lub kresek podziałki przy niewielkiej różnicy między wartością mierzoną a wzorcową – np. koincydencji wzorcowych sygnałów czasu z sygnałami badanego zegara.",
    "type": "choice"
  },
  {
    "id": 17,
    "lectureId": 2,
    "lectureTitle": "Metody pomiarowe i mostek Wheatstone'a",
    "question": "Dlaczego w metodzie zerowej rzeczywisty stan równowagi zapisuje się warunkiem |X − X_w| ≤ Δ_D X zamiast idealnego równania X − X_w = 0?",
    "image": null,
    "options": {
      "A": "Ze względu na istnienie progu czułości (pobudliwości) detektora Δ_D X – dla nieskończenie wielu wartości różnicy mniejszych lub równych Δ_D X detektor przyjmuje ten sam stan i nie reaguje",
      "B": "Ponieważ wzorzec X_w zawsze ma wartość ujemną względem wielkości mierzonej X",
      "C": "Ponieważ w stanie równowagi przez detektor musi płynąć maksymalny prąd znamionowy",
      "D": "Ponieważ metoda zerowa służy wyłącznie do pomiarów z błędem względnym powyżej 10%"
    },
    "correct": "A",
    "explanation": "Każdy rzeczywisty detektor zera posiada niezerowy próg czułości (pobudliwości) Δ_D X. Dopóki moduł różnicy |X − X_w| nie przekroczy wartości Δ_D X, stan detektora nie ulega zmianie, przez co istnieje przedział nieczułości wokół idealnego stanu X = X_w.",
    "type": "choice"
  },
  {
    "id": 18,
    "lectureId": 2,
    "lectureTitle": "Metody pomiarowe i mostek Wheatstone'a",
    "question": "Jakie są główne właściwości metody kompensacyjnej (zerowej) przy pomiarze siły elektromotorycznej E_x źródła o rezystancji wewnętrznej R_wx?",
    "image": null,
    "options": {
      "A": "Metoda ta nie wymaga użycia wzorca napięcia odniesienia E_w, lecz opiera się na pomiarze czasu rozładowania kondensatora",
      "B": "W stanie równowagi prąd w obwodzie dąży do zera, obiekt badany nie jest obciążony energetycznie (spadek napięcia na R_wx jest pomijalny, układ działa jak idealny woltomierz), a bezpośredni pomiar możliwy jest tylko dla wielkości aktywnej",
      "C": "W stanie równowagi źródło badane oddaje maksymalną moc do detektora, dlatego metoda nadaje się wyłącznie do wielkości pasywnych",
      "D": "Dokładność metody kompensacyjnej zależy wyłącznie od rezystancji wewnętrznej badanego źródła R_wx"
    },
    "correct": "B",
    "explanation": "W metodzie kompensacyjnej wielkość wzorcowa przeciwdziała fizycznie wielkości mierzonej. W stanie równowagi prąd płynący przez detektor dąży do 0, więc badane źródło nie wydatkuje energii (brak spadku napięcia na R_wx – pomiar SEM jak idealnym woltomierzem). Bezpośredni pomiar tą metodą jest możliwy wyłącznie dla wielkości aktywnych (będących nośnikiem energii).",
    "type": "choice"
  },
  {
    "id": 19,
    "lectureId": 2,
    "lectureTitle": "Metody pomiarowe i mostek Wheatstone'a",
    "question": "Na czym polega metoda komparacyjna (zerowa) i jaka jest jej główna zaleta metrologiczna?",
    "image": null,
    "options": {
      "A": "Polega na odczycie odchylenia wskazówki bez użycia jakiegokolwiek wzorca odniesienia",
      "B": "Polega na zastąpieniu wielkości mierzonej X zestawem wielowartościowych wzorców o niskiej dokładności bez użycia detektora zera",
      "C": "Polega na porównaniu wielkości mierzonej X ze znaną krotnością k wielkości odniesienia X_w (sprowadzeniu różnicy X − k·X_w do zera przez zmianę współczynnika k); pozwala użyć pojedynczego, bardzo dokładnego wzorca odtwarzającego tylko jedną wartość X_w",
      "D": "Polega na obliczeniu średniej geometrycznej dwóch wzorców X = √(X_w1 · X_w2)"
    },
    "correct": "C",
    "explanation": "W metodzie komparacyjnej badana różnica X − k·X_w jest sprowadzana do zera poprzez zmianę bezwymiarowego współczynnika k (X = k·X_w). Główną zaletą jest to, że wzorzec musi odtwarzać tylko jedną wartość X_w, a wzorce jednowartościowe (np. ogniwo Westona, pojedynczy rezystor wzorcowy) można wykonać ze znacznie lepszą dokładnością niż wzorce wielowartościowe.",
    "type": "choice"
  },
  {
    "id": 20,
    "lectureId": 2,
    "lectureTitle": "Metody pomiarowe i mostek Wheatstone'a",
    "question": "W jakim celu stosuje się metodę podstawieniową (np. przełączając woltomierz z badanego napięcia U na regulowane napięcie wzorcowe U_w tak, aby uzyskać to samo wskazanie)?",
    "image": null,
    "options": {
      "A": "W celu pomiaru wielkości bez użycia jakiegokolwiek źródła odniesienia U_w",
      "B": "W celu wyeliminowania błędów przypadkowych o rozkładzie Gaussa w pojedynczym pomiarze",
      "C": "W celu zmniejszenia czasu pomiaru w porównaniu z metodą odchyłową",
      "D": "W celu wyeliminowania niedokładności systematycznej użytego przyrządu pomiarowego"
    },
    "correct": "D",
    "explanation": "W metodzie podstawieniowej wielkość mierzoną X zastępuje się w tym samym układzie wielkością odniesienia X_w dobraną tak, aby wywołała identyczny skutek (to samo wskazanie miernika). Ponieważ w obu krokach przyrząd wnosi ten sam błąd systematyczny, niedokładność systematyczna samego przyrządu pomiarowego zostaje wyeliminowana.",
    "type": "choice"
  },
  {
    "id": 21,
    "lectureId": 2,
    "lectureTitle": "Metody pomiarowe i mostek Wheatstone'a",
    "question": "W metodzie przestawieniowej (będącej odmianą metody podstawieniowej, np. przy ważeniu na wadze nierównoramiennej) wielkość mierzoną X równoważy się najpierw wartością X_w1, a po przestawieniu – wartością X_w2. Z jakiego wzoru oblicza się wartość X?",
    "image": null,
    "options": {
      "A": "X = (X_w1 + X_w2) / 2",
      "B": "X = √(X_w1 · X_w2)",
      "C": "X = |X_w1 − X_w2|",
      "D": "X = √(X_w1² + X_w2²)"
    },
    "correct": "B",
    "explanation": "W metodzie przestawieniowej (metodzie Gaussa) w pierwszym etapie równoważy się X za pomocą X_w1 (X · l₁ = X_w1 · l₂), a po zamianie miejscami równoważy się X za pomocą X_w2 (X_w2 · l₁ = X · l₂). Po podzieleniu równań stronami stosunek ramion się skraca i otrzymujemy średnią geometryczną: X = √(X_w1 · X_w2).",
    "type": "choice"
  },
  {
    "id": 22,
    "lectureId": 2,
    "lectureTitle": "Metody pomiarowe i mostek Wheatstone'a",
    "question": "Której metodzie pomiaru odpowiada metoda przekształcenia (jako metoda formowania sygnału pomiarowego Y z wielkości X) i które z poniższych jest jej przykładem?",
    "image": null,
    "options": {
      "A": "Jest odpowiednikiem metody zerowej kompensacyjnej; przykładem jest zrównoważony mostek Wheatstone'a",
      "B": "Jest odpowiednikiem metody złożonej; wymaga zawsze bezpośredniego udziału wzorca I rzędu",
      "C": "Jest odpowiednikiem metody koincydencyjnej; przykładem jest porównywanie częstotliwości dwóch generatorów wzorcowych",
      "D": "Jest odpowiednikiem metody odchyłowej pomiaru (bez bezpośredniego udziału wielkości wzorcowych); przykładem jest zamiana temperatury na napięcie w termoparze lub zmiana skali prądu w przekładniku"
    },
    "correct": "D",
    "explanation": "Metoda przekształcenia polega na uformowaniu sygnału Y poprzez zmianę skali wielkości X (np. w przekładniku), zmianę jej charakteru fizycznego (np. prąd na odchylenie w amperomierzu, temperatura na napięcie w termoparze) lub sterowanie procesami energetycznymi – odbywa się to bez bezpośredniego udziału wielkości wzorcowych i jest odpowiednikiem metody odchyłowej.",
    "type": "choice"
  },
  {
    "id": 23,
    "lectureId": 2,
    "lectureTitle": "Metody pomiarowe i mostek Wheatstone'a",
    "question": "W mostku Wheatstone'a gałęzie między węzłem zasilania A a węzłami przekątnej pomiarowej C i D stanowią rezystory R₁ (gałąź A–C) i R₃ (gałąź A–D), natomiast między węzłami C i D a drugim węzłem zasilania B – rezystory R₂ (gałąź C–B) i R₄ (gałąź D–B). Jaki jest warunek równowagi tego mostka (ΔU_CD = 0)?",
    "image": null,
    "options": {
      "A": "R₁ · R₄ = R₂ · R₃",
      "B": "R₁ · R₂ = R₃ · R₄",
      "C": "R₁ + R₄ = R₂ + R₃",
      "D": "R₁ / R₄ = R₂ / R₃"
    },
    "correct": "A",
    "explanation": "Napięcie na przekątnej pomiarowej C–D wynosi ΔU = U₀ · [R₁/(R₁+R₂) − R₃/(R₃+R₄)]. Przyrównując ΔU do zera, otrzymujemy warunek równowagi mostka Wheatstone'a: iloczyny rezystancji gałęzi przeciwległych muszą być sobie równe, czyli R₁ · R₄ = R₂ · R₃.",
    "type": "choice"
  },
  {
    "id": 24,
    "lectureId": 2,
    "lectureTitle": "Metody pomiarowe i mostek Wheatstone'a",
    "question": "W zrównoważonym mostku Wheatstone'a (\\(R_1 \\cdot R_4 = R_2 \\cdot R_3\\)) znamy wartości \\(R_2 = 200\\,\\Omega\\), \\(R_3 = 500\\,\\Omega\\) oraz \\(R_4 = 1000\\,\\Omega\\). Oblicz mierzoną rezystancję \\(R_1\\). Wynik podaj w omach [Ω].",
    "image": null,
    "options": {
      "A": "400 Ω",
      "B": "250 Ω",
      "C": "100 Ω",
      "D": "2500 Ω"
    },
    "correct": "C",
    "explanation": "Z warunku równowagi mostka Wheatstone'a:\n\\[R_1 \\cdot R_4 = R_2 \\cdot R_3 \\implies R_1 = \\frac{R_2 \\cdot R_3}{R_4} = \\frac{200\\,\\Omega \\cdot 500\\,\\Omega}{1000\\,\\Omega} = \\frac{100\\,000}{1000}\\,\\Omega = 100\\,\\Omega\\]",
    "type": "open",
    "numericTarget": 100,
    "acceptedNumbers": [
      100
    ],
    "tolerance": 0.01,
    "toleranceAbs": 0.1,
    "unit": "Ω",
    "openAnswerText": "100 Ω"
  },
  {
    "id": 25,
    "lectureId": 2,
    "lectureTitle": "Metody pomiarowe i mostek Wheatstone'a",
    "question": "Niezrównoważony mostek Wheatstone'a ma w stanie początkowym wszystkie cztery rezystancje równe R. Jak zmienia się względne napięcie wyjściowe ΔU / U₀ przy niewielkiej względnej zmianie rezystancji ΔR / R odpowiednio w jednej, dwóch oraz czterech gałęziach mostka?",
    "image": null,
    "options": {
      "A": "Dla 1 gałęzi: ΔR/R; dla 2 gałęzi: 2·(ΔR/R); dla 4 gałęzi: 4·(ΔR/R)",
      "B": "Dla 1 gałęzi: (1/2)·(ΔR/R); dla 2 gałęzi: ΔR/R; dla 4 gałęzi: 2·(ΔR/R)",
      "C": "Dla 1 gałęzi: (1/4)·(ΔR/R); dla 2 gałęzi: (1/2)·(ΔR/R); dla 4 gałęzi: ΔR/R",
      "D": "Niezależnie od liczby aktywnych gałęzi stosunek ΔU / U₀ wynosi zawsze (1/4)·(ΔR/R)"
    },
    "correct": "C",
    "explanation": "Dla mostka równoramiennego (R₁=R₂=R₃=R₄=R) przy małych przyrostach ΔR << R czułość względna ΔU / U₀ wynosi: (1/4)·(ΔR/R) przy zmianie rezystancji w jednej gałęzi (ćwierćmostek), (1/2)·(ΔR/R) przy zmianie w dwóch gałęziach (półmostek) oraz ΔR/R przy zmianie we wszystkich czterech gałęziach (pełny mostek).",
    "type": "choice"
  },
  {
    "id": 26,
    "lectureId": 2,
    "lectureTitle": "Metody pomiarowe i mostek Wheatstone'a",
    "question": "Która zależność dokładnie opisuje napięcie niezrównoważenia ΔU mostka Wheatstone'a o wszystkich rezystancjach początkowych równych R, gdy w jednej gałęzi rezystancja zmieniła się o ΔR (tj. przyjęła wartość R + ΔR)?",
    "image": null,
    "options": {
      "A": "ΔU = U₀ · [ (R + ΔR) / (2R + ΔR) − 1/2 ]",
      "B": "ΔU = U₀ · [ (R + ΔR) / R − 1 ]",
      "C": "ΔU = U₀ · [ R / (R + ΔR) + 1/2 ]",
      "D": "ΔU = U₀ · (ΔR / R)²"
    },
    "correct": "A",
    "explanation": "Podstawiając R₁ = R + ΔR oraz R₂ = R₃ = R₄ = R do wzoru ogólnego ΔU = U₀ · [R₁/(R₁+R₂) − R₃/(R₃+R₄)], otrzymujemy dokładnie ΔU = U₀ · [(R + ΔR)/(R + ΔR + R) − R/(R + R)] = U₀ · [(R + ΔR)/(2R + ΔR) − 1/2]. Dopiero dla ΔR << 2R ułamek ten przybliża się liniowo przez (1/4)·(ΔR/R).",
    "type": "choice"
  },
  {
    "id": 27,
    "lectureId": 2,
    "lectureTitle": "Metody pomiarowe i mostek Wheatstone'a",
    "question": "Dlaczego metoda pomiarowa podstawowa (bezwzględna, absolutna) nie ma większego zastosowania przy pomiarach wielkości elektrycznych?",
    "image": null,
    "options": {
      "A": "Ponieważ metoda podstawowa daje zawsze błąd względny przekraczający 50%",
      "B": "Ponieważ wielkości elektryczne należą do wielkości niemierzalnych i można je jedynie obserwować jakościowo",
      "C": "Ponieważ metoda podstawowa może być stosowana wyłącznie do wyznaczania czasu za pomocą stopera",
      "D": "Ponieważ wymaga bezpośredniego pomiaru wielkości podstawowych wchodzących do definicji danej wielkości mierzalnej, co dla wielkości elektrycznych jest technicznie bardzo trudne i znacznie mniej wygodne niż metody porównawcze"
    },
    "correct": "D",
    "explanation": "Metoda podstawowa (bezwzględna, absolutna) polega na wyznaczeniu wielkości mierzonej wprost z pomiarów wielkości podstawowych wchodzących do jej definicji (jak pole prostokąta z długości i szerokości). W elektrotechnice wyznaczanie np. napięcia czy rezystancji z samych definicyjnych wielkości podstawowych jest skomplikowane, dlatego stosuje się metody porównawcze z wzorcami elektrycznymi.",
    "type": "choice"
  },
  {
    "id": 28,
    "lectureId": 2,
    "lectureTitle": "Metody pomiarowe i mostek Wheatstone'a",
    "question": "Jak na poziomie przetwarzania sygnału pomiarowego definiuje się różnicę między metodą analogową a metodą cyfrową pomiaru?",
    "image": null,
    "options": {
      "A": "Metoda analogowa wymaga zawsze użycia komputera, a metoda cyfrowa polega na obserwacji wychylenia wskazówki",
      "B": "W metodzie analogowej mierzonej wielkości ciągłej odpowiada ciągły sygnał pomiarowy, natomiast w metodzie cyfrowej ciągłe przedziały czasu (lub wartości) wielkości mierzonej są odwzorowywane przez dyskretne wartości sygnału pomiarowego",
      "C": "Metoda analogowa służy wyłącznie do pomiarów pośrednich, a cyfrowa wyłącznie do bezpośrednich",
      "D": "W metodzie cyfrowej sygnał pomiarowy przyjmuje nieskończenie wiele wartości w każdym punkcie czasu"
    },
    "correct": "B",
    "explanation": "Podział ze względu na sposób przetwarzania sygnału w procesie pomiarowym wyróżnia metody analogowe (gdzie ciągłej wielkości mierzonej odpowiada ciągły sygnał pomiarowy) oraz metody cyfrowe (gdzie ciągłe przedziały wielkości mierzonej odwzorowywane są przez dyskretne, skwantowane wartości sygnału pomiarowego).",
    "type": "choice"
  },
  {
    "id": 29,
    "lectureId": 3,
    "lectureTitle": "Parametry sygnałów pomiarowych",
    "question": "Jaki warunek matematyczny musi spełniać sygnał x(t), aby można go było uznać za sygnał okresowy o okresie T?",
    "image": null,
    "options": {
      "A": "x(t) = m · x(T), gdzie m jest współczynnikiem kształtu przebiegu",
      "B": "Wartość chwilowa sygnału w dowolnej chwili t musi być równa jego wartości skutecznej",
      "C": "Całka z sygnału x(t) w przedziale od 0 do T musi być zawsze dodatnia i równa 1",
      "D": "x(t) = x(t + m·T), gdzie m jest dowolną liczbą naturalną, a T stałym okresem"
    },
    "correct": "D",
    "explanation": "Zgodnie z definicją sygnału okresowego jego wartości powtarzają się regularnie co stały przedział czasu nazywany okresem T, co zapisuje się wzorem x(t) = x(t + m·T), gdzie m jest liczbą naturalną.",
    "type": "choice"
  },
  {
    "id": 30,
    "lectureId": 3,
    "lectureTitle": "Parametry sygnałów pomiarowych",
    "question": "W jakim przedziale mieszczą się wartości chwilowe czysto sinusoidalnego sygnału przemiennego opisanego równaniem x(t) = Xm·sin(ωt + φ) oraz jak w praktyce wyznacza się jego wartość międzyszczytową Xpp?",
    "image": null,
    "options": {
      "A": "Wartości chwilowe należą do przedziału [0, Xm], a wartość międzyszczytowa wynosi Xpp = Xm / √2",
      "B": "Wartości chwilowe należą do przedziału [-Xsk, Xsk], a wartość międzyszczytowa wynosi Xpp = π·Xm",
      "C": "Wartości chwilowe należą do przedziału [-Xm, Xm], a wartość międzyszczytowa wynosi Xpp = 2·Xm (odstęp między wartością maksymalną a minimalną)",
      "D": "Wartości chwilowe należą do przedziału [-2·Xm, 2·Xm], a wartość międzyszczytowa wynosi Xpp = Xm"
    },
    "correct": "C",
    "explanation": "Funkcja sinus przyjmuje wartości z przedziału [-1, 1], zatem wartość chwilowa x(t) zmienia się w granicach [-Xm, Xm]. Wartość międzyszczytowa (peak-to-peak) dla przebiegu symetrycznego względem zera jest równa podwojonej amplitudzie: Xpp = 2·Xm.",
    "type": "choice"
  },
  {
    "id": 31,
    "lectureId": 3,
    "lectureTitle": "Parametry sygnałów pomiarowych",
    "question": "W jakich zastosowaniach praktycznych szczególnie często posługujemy się wartością międzyszczytową (Xpp) napięcia zamiast wartością skuteczną?",
    "image": null,
    "options": {
      "A": "Wyłącznie przy rozliczeniach za energię elektryczną w sieciach energetycznych 50 Hz",
      "B": "Do określania maksymalnego bezpiecznego napięcia wejściowego układów (aby nie dopuścić do przesterowania lub uszkodzenia) oraz przy porównywaniu sygnałów wejściowych i wyjściowych na oscyloskopie",
      "C": "Wyłącznie podczas pomiaru rezystancji izolacji metodą techniczną przy użyciu prądu stałego",
      "D": "Tylko podczas wzorcowania analogowych woltomierzy elektromagnetycznych"
    },
    "correct": "B",
    "explanation": "Wartość międzyszczytowa Xpp bezpośrednio informuje o rozpiętości zmian sygnału od minimum do maksimum, dlatego jest niezwykle wygodna do odczytu z ekranu oscyloskopu (np. przy badaniu wzmocnienia) oraz do oceny, czy sygnał nie przekroczy dopuszczalnego zakresu napięć wejściowych układu.",
    "type": "choice"
  },
  {
    "id": 32,
    "lectureId": 3,
    "lectureTitle": "Parametry sygnałów pomiarowych",
    "question": "Ile wynosi wartość średnia całookresowa Xśr czysto przemiennego przebiegu sinusoidalnego (bez składowej stałej) i za pomocą jakich przyrządów mierzy się wartość średnią sygnału?",
    "image": null,
    "options": {
      "A": "Wynosi 0; wartość średnią sygnału mierzy się przyrządem magnetoelektrycznym lub multimetrem cyfrowym w trybie DC (napięcia/prądu stałego)",
      "B": "Wynosi 0,707·Xm; mierzy się ją multimetrem cyfrowym w trybie AC TrueRMS",
      "C": "Wynosi 0,637·Xm; mierzy się ją przyrządem elektromagnetycznym lub termoelektrycznym",
      "D": "Wynosi 1,11·Xm; mierzy się ją przyrządem magnetoelektrycznym z prostownikiem"
    },
    "correct": "A",
    "explanation": "Całka z funkcji sinus po pełnym okresie T jest równa zeru (dodatnie i ujemne półokresy znoszą się wzajemnie), więc wartość średnia całookresowa wynosi 0. Do pomiaru wartości średniej (składowej stałej) służą ustroje magnetoelektryczne oraz multimetry cyfrowe przełączone na zakres DCV/DCI.",
    "type": "choice"
  },
  {
    "id": 33,
    "lectureId": 3,
    "lectureTitle": "Parametry sygnałów pomiarowych",
    "question": "Co stanie się podczas pomiaru napięcia stałego, jeśli omyłkowo zamienimy miejscami przewody pomiarowe (odwrócimy polaryzację) w analogowym woltomierzu magnetoelektrycznym (z zerem na początku skali), a co w multimetrze cyfrowym w trybie DC?",
    "image": null,
    "options": {
      "A": "W przyrządzie magnetoelektrycznym wskazówka odchyli się w lewo (poniżej zera) uniemożliwiając pomiar, natomiast multimetr cyfrowy wyświetli poprawną wartość poprzedzoną znakiem minus (-)",
      "B": "Przyrząd magnetoelektryczny wskaże wartość skuteczną, a multimetr cyfrowy ulegnie natychmiastowemu spaleniu",
      "C": "Oba przyrządy wskażą dokładnie tę samą dodatnią wartość bez żadnej różnicy",
      "D": "W przyrządzie magnetoelektrycznym wskazówka wychyli się w prawo, a multimetr cyfrowy wyświetli komunikat o przekroczeniu zakresu (OL)"
    },
    "correct": "A",
    "explanation": "Kierunek momentu obrotowego w ustroju magnetoelektrycznym zależy od kierunku prądu – przy odwrotnej polaryzacji wskazówka próbuje wychylić się w lewo poza zero skali i pomiar jest niemożliwy. Multimetr cyfrowy w trybie DC automatycznie rozpoznaje biegunowość i sygnalizuje ujemny znak na wyświetlaczu.",
    "type": "choice"
  },
  {
    "id": 34,
    "lectureId": 3,
    "lectureTitle": "Parametry sygnałów pomiarowych",
    "question": "Który wzór definiuje wartość skuteczną (Xsk) sygnału okresowego x(t) o okresie T i które z wymienionych przyrządów mierzą tę wartość zgodnie z definicją również dla przebiegów odkształconych?",
    "image": null,
    "options": {
      "A": "Xsk = (1/T) · ∫₀ᵀ |x(t)| dt; mierzą ją najtańsze multimetry cyfrowe bez TrueRMS oraz przyrządy magnetoelektryczne",
      "B": "Xsk = √( (1/T) · ∫₀ᵀ x²(t) dt ); mierzą ją przyrządy elektromagnetyczne, termoelektryczne oraz multimetry cyfrowe z przetwornikiem TrueRMS",
      "C": "Xsk = (1/T) · ∫₀ᵀ x(t) dt; mierzą ją wyłącznie oscyloskopy analogowe",
      "D": "Xsk = Xm / 1,11; mierzą ją przyrządy magnetoelektryczne z prostownikiem jednopołówkowym"
    },
    "correct": "B",
    "explanation": "Wartość skuteczna (RMS – Root Mean Square) to pierwiastek ze średniej kwadratowej sygnału w okresie T: Xsk = √( (1/T) ∫ x²(t) dt ). Zjawisko kwadratowej zależności wykorzystują ustroje elektromagnetyczne, termoelektryczne (cieplne działanie prądu) oraz układy TrueRMS w multimetrach cyfrowych.",
    "type": "choice"
  },
  {
    "id": 35,
    "lectureId": 3,
    "lectureTitle": "Parametry sygnałów pomiarowych",
    "question": "Jak działają przyrządy magnetoelektryczne z prostownikiem oraz tanie multimetry cyfrowe (bez układu TrueRMS) na zakresach napięcia przemiennego AC?",
    "image": null,
    "options": {
      "A": "Obliczają całkę z kwadratu napięcia za pomocą wbudowanego procesora DSP",
      "B": "Poprawnie wskazują wartość skuteczną dowolnego przebiegu trójkątnego i prostokątnego bez żadnego błędu",
      "C": "Reagują na wartość średnią wyprostowaną Xśrw = (1/T)∫|x(t)|dt, lecz ich skala lub wskazanie są wyskalowane w wartościach skutecznych dla przebiegu sinusoidalnego (przemnożone przez współczynnik kształtu kk = 1,11)",
      "D": "Mierzą wartość szczytową Xm i dzielą ją zawsze przez współczynnik kształtu równy 2"
    },
    "correct": "C",
    "explanation": "Proste mierniki AC prostują sygnał i uśredniają go, mierząc fizycznie wartość średnią wyprostowaną (półokresową) Xśrw. Aby dla sinusoidy pokazywały wartość skuteczną Xsk, konstruktor mnoży wynik przez współczynnik kształtu sinusoidy kk = Xsk/Xśrw = π/(2√2) ≈ 1,11. Dla przebiegów niesinusoidalnych prowadzi to do dużych błędów.",
    "type": "choice"
  },
  {
    "id": 36,
    "lectureId": 3,
    "lectureTitle": "Parametry sygnałów pomiarowych",
    "question": "Sygnał napięciowy składa się ze składowej stałej \\(U_{\\text{śr}} = 3\\text{ V}\\) oraz składowej przemiennej o wartości skutecznej \\(U_{\\text{sk(AC)}} = 4\\text{ V}\\). Oblicz całkowitą wartość skuteczną \\(U_{\\text{sk(AC+DC)}}\\) tego sygnału (mierzoną multimetrem TrueRMS w trybie AC+DC). Wynik podaj w woltach [V].",
    "image": null,
    "options": {
      "A": "7 V; wystarczy dowolny multimetr analogowy na zakresie DC",
      "B": "3,5 V; należy uśrednić wskazania z trybu AC i trybu DC",
      "C": "1 V; należy użyć multimetru cyfrowego w standardowym trybie AC z kondensatorem sprzęgającym",
      "D": "5 V; należy użyć multimetru cyfrowego z przetwornikiem TrueRMS posiadającego tryb pomiaru AC+DC"
    },
    "correct": "D",
    "explanation": "Całkowita wartość skuteczna przebiegu ze składową stałą wyraża się wzorem:\n\\[U_{\\text{sk(AC+DC)}} = \\sqrt{U_{\\text{sk(AC)}}^2 + U_{\\text{śr}}^2} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5\\text{ V}\\]\nStandardowy tryb AC odcina składową stałą przez kondensator, dlatego do bezpośredniego pomiaru wymagany jest multimetr TrueRMS z funkcją AC+DC.",
    "type": "open",
    "numericTarget": 5,
    "acceptedNumbers": [
      5
    ],
    "tolerance": 0.01,
    "toleranceAbs": 0.05,
    "unit": "V",
    "openAnswerText": "5 V (pomiar multimetrem TrueRMS w trybie AC+DC)"
  },
  {
    "id": 37,
    "lectureId": 3,
    "lectureTitle": "Parametry sygnałów pomiarowych",
    "question": "Jak definiuje się współczynnik szczytu (ks) oraz współczynnik kształtu (kk) sygnału okresowego i jakie wartości przyjmują one dla idealnego przebiegu sinusoidalnego?",
    "image": null,
    "options": {
      "A": "ks = Xsk / Xm (dla sinusoidy 0,707), natomiast kk = Xśrw / Xsk (dla sinusoidy 0,637)",
      "B": "ks = Xm / Xsk (dla sinusoidy √2 ≈ 1,414), natomiast kk = Xsk / Xśrw (dla sinusoidy π/(2√2) ≈ 1,11)",
      "C": "ks = Xpp / Xm (dla sinusoidy 2,00), natomiast kk = Xm / Xśrw (dla sinusoidy 1,57)",
      "D": "ks = Xsk / Xśr (dla sinusoidy nieskończoność), natomiast kk = Xm / Xsk (dla sinusoidy 1,414)"
    },
    "correct": "B",
    "explanation": "Współczynnik szczytu (crest factor) to stosunek wartości szczytowej (amplitudy) do wartości skutecznej: ks = Xm / Xsk, co dla sinusoidy daje Xm / (Xm/√2) = √2 ≈ 1,414. Współczynnik kształtu (form factor) to stosunek wartości skutecznej do wartości średniej wyprostowanej (półokresowej): kk = Xsk / Xśrw ≈ 1,11.",
    "type": "choice"
  },
  {
    "id": 38,
    "lectureId": 3,
    "lectureTitle": "Parametry sygnałów pomiarowych",
    "question": "W jaki sposób wyznacza się wartość średnią Xśr oraz wartość skuteczną Xsk sygnału okresowego na podstawie n próbek Nx(ti) pobranych w jednym okresie T i jaki warunek musi spełniać próbkowanie?",
    "image": null,
    "options": {
      "A": "Xśr = (1/n²)·Σ Nx(ti), a Xsk = (1/n)·Σ |Nx(ti)|; liczba próbek n musi wynosić dokładnie 2",
      "B": "Xśr = Σ Nx(ti), a Xsk = Σ Nx²(ti); próbki muszą być pobierane tylko w chwilach przejścia sygnału przez zero",
      "C": "Xśr = (max Nx - min Nx)/2, a Xsk = max Nx / √2; odstęp między próbkami powinien zmieniać się losowo",
      "D": "Xśr = (1/n)·Σ Nx(ti), a Xsk = √( (1/n)·Σ Nx²(ti) ); próbkowanie musi być równomierne, tzn. odstęp czasu Tp między kolejnymi próbkami musi być stały"
    },
    "correct": "D",
    "explanation": "Dla sygnału spróbkowanego równomiernie (stały okres próbkowania Tp między próbkami) całki w definicjach wartości średniej i skutecznej zastępuje się sumowaniem dyskretnych próbek Nx(ti) z jednego okresu: Xśr = (1/n) Σᵢ₌₁ⁿ Nx(ti) oraz Xsk = √( (1/n) Σᵢ₌₁ⁿ Nx²(ti) ). (Uwaga: na slajdzie 20 wykładu w03 w indeksie dolnym wzoru na wartość skuteczną z próbek znajduje się literówka: napisano Xśr zamiast Xsk).",
    "type": "choice"
  },
  {
    "id": 39,
    "lectureId": 3,
    "lectureTitle": "Parametry sygnałów pomiarowych",
    "question": "Jak w metrologii definiuje się czas narastania (tn) oraz czas opadania (to) impulsu prostokątnego (sygnału impulsowego)?",
    "image": null,
    "options": {
      "A": "Czas narastania to czas przejścia zbocza przedniego od 10% do 90% wartości ustalonej (wysokości impulsu), a czas opadania to czas przejścia zbocza tylnego od 90% do 10%",
      "B": "Czas narastania mierzy się od 0% do 100% amplitudy, a czas opadania od 100% do 0% amplitudy",
      "C": "Oba czasy mierzy się dokładnie w jednym punkcie odpowiadającym 50% wysokości impulsu",
      "D": "Czas narastania mierzy się od 25% do 75% amplitudy, a czas opadania od 75% do 25%"
    },
    "correct": "A",
    "explanation": "Ponieważ w okolicach 0% i 100% wysokości impulsu zbocza zbliżają się do wartości ustalonych asymptotycznie (lub występują tam przerzuty), czas narastania definiuje się jednoznacznie jako czas wzrostu sygnału z poziomu 10% do 90%, a czas opadania z poziomu 90% do 10%.",
    "type": "choice"
  },
  {
    "id": 40,
    "lectureId": 3,
    "lectureTitle": "Parametry sygnałów pomiarowych",
    "question": "Dlaczego podczas pomiaru czasu narastania impulsu na oscyloskopie wyposażonym w linie siatki 0%, 10%, 90% i 100% wolno skorzystać z płynnej (nieskalibrowanej) regulacji wzmocnienia odchylania pionowego (V/dz)?",
    "image": null,
    "options": {
      "A": "Ponieważ płynna regulacja wzmocnienia pionowego automatycznie zwiększa częstotliwość taktowania podstawy czasu",
      "B": "Ponieważ rozkalibrowanie toru pionowego zmniejsza czas narastania badanego generatora",
      "C": "Ponieważ w tym pomiarze wyznaczamy przedział czasu (wzdłuż osi poziomej), a nie wartość napięcia – dopasowanie wysokości obrazu impulsu do linii 0% i 100% ułatwia odczyt punktów 10% i 90% bez wpływu na skalę czasu",
      "D": "Nie wolno tego robić – każde wyłączenie kalibracji pionowej unieważnia pomiar czasu na osi poziomej"
    },
    "correct": "C",
    "explanation": "Wykorzystanie płynnej regulacji wzmocnienia pionowego pozwala wygodnie rozciągnąć obraz impulsu tak, aby jego podstawa pokryła się z linią 0%, a wierzchołek z linią 100%. Choć oś napięcia (pionowa) traci wówczas kalibrację, oś czasu (pozioma) pozostaje skalibrowana, co pozwala odczytać czas między przecięciami z liniami 10% i 90%.",
    "type": "choice"
  },
  {
    "id": 41,
    "lectureId": 3,
    "lectureTitle": "Parametry sygnałów pomiarowych",
    "question": "Jakim wzorem określa się fazę początkową φ sygnału sinusoidalnego, jeśli znany jest okres przebiegu T oraz przesunięcie czasowe t0 względem początku układu współrzędnych?",
    "image": null,
    "options": {
      "A": "φ = t0 / T",
      "B": "φ = (T / 2π) · t0",
      "C": "φ = (2π / T) · t0",
      "D": "φ = 2π · T · t0"
    },
    "correct": "C",
    "explanation": "Pełny okres T odpowiada kątowi fazowemu 2π radianów (lub 360°). Z proporcji wynika więc, że przesunięciu czasowemu t0 odpowiada faza początkowa φ = (2π / T) · t0 (w radianach).",
    "type": "choice"
  },
  {
    "id": 42,
    "lectureId": 3,
    "lectureTitle": "Parametry sygnałów pomiarowych",
    "question": "Jaka cecha konstrukcyjna jest często spotykana w najtańszych multimetrach cyfrowych (np. klasy popularnej bez układu TrueRMS) w zakresie pomiaru wielkości przemiennych AC?",
    "image": null,
    "options": {
      "A": "Bardzo często nie posiadają one w ogóle zakresów do pomiaru prądu przemiennego (ACI), oferując jedynie pomiar napięcia przemiennego (ACV) na niewielkiej liczbie zakresów",
      "B": "Posiadają one wyłącznie zakresy prądu przemiennego ACI, a nie posiadają zakresów napięcia ACV",
      "C": "Mierzą one napięcie przemienne wyłącznie metodą kompensacyjną za pomocą wbudowanego ogniwa Westona",
      "D": "Mają pasmo pomiarowe sięgające 10 GHz na wszystkich zakresach napięciowych"
    },
    "correct": "A",
    "explanation": "Jak pokazano na wykładzie, najtańsze multimetry cyfrowe nie tylko nie posiadają przetwornika TrueRMS (mierzą wartość średnią wyprostowaną wyskalowaną dla sinusoidy), ale często w ogóle są pozbawione zakresów pomiaru prądu przemiennego (ACI).",
    "type": "choice"
  },
  {
    "id": 43,
    "lectureId": 4,
    "lectureTitle": "Niedokładność i błędy pomiaru – cz. 1",
    "question": "Dwa multimetry cyfrowe (np. 5½-cyfrowy oraz 4½-cyfrowy) mierzą jednocześnie napięcie tego samego zasilacza DC i wskazują odpowiednio 10,0871 V oraz 10,0859 V. Jaki podstawowy wniosek metrologiczny wynika z tego eksperymentu?",
    "image": null,
    "options": {
      "A": "Przynajmniej jeden z multimetrów jest całkowicie uszkodzony i wymaga złomowania",
      "B": "Różnica wynika wyłącznie z błędu grubego popełnionego przez obserwatora przy odczycie cyfr z ekranu LCD",
      "C": "Napięcie zasilacza nie istnieje fizycznie, dopóki oba mierniki nie pokażą identycznej wartości na szóstym miejscu po przecinku",
      "D": "Każdy pomiar obarczony jest pewnym błędem (wynikającym m.in. ze skończonej dokładności przyrządów, warunków fizycznych i szumów), a mniejsza rozdzielczość tańszego miernika może jedynie zamaskować tę różnicę"
    },
    "correct": "D",
    "explanation": "Każdy pomiar obarczony jest niedokładnością. Przyrządy wysokiej rozdzielczości ujawniają drobne różnice wynikające ze skończonej dokładności wzorców wewnętrznych, wpływu warunków środowiskowych oraz szumów. Zastosowanie miernika o małej rozdzielczości (np. 3½ cyfry) sprawiłoby jedynie, że oba pokazałyby np. 10,08 V, co nie oznacza braku błędu.",
    "type": "choice"
  },
  {
    "id": 44,
    "lectureId": 4,
    "lectureTitle": "Niedokładność i błędy pomiaru – cz. 1",
    "question": "Jak definiuje się błąd bezwzględny ΔX oraz błąd względny δX pomiaru i co podstawia się w miejsce wartości rzeczywistej Xr w praktyce inżynierskiej?",
    "image": null,
    "options": {
      "A": "ΔX = X² - Xr² oraz δX = ΔX · Xr; wartość rzeczywista Xr jest zawsze podana na obudowie miernika",
      "B": "ΔX = X - Xr oraz δX = (X - Xr) / Xr; ponieważ wartość rzeczywista Xr jest nieznana, w praktyce zastępuje się ją wartością poprawną (np. zmierzoną przyrządem znacznie dokładniejszym)",
      "C": "ΔX = Xr - X oraz δX = Xr / X; wartość rzeczywistą Xr wyznacza się za pomocą przyrządu o najniższej klasie dokładności",
      "D": "ΔX = X / Xr oraz δX = X - Xr; wartość rzeczywistą Xr przyjmuje się zawsze jako równą zeru"
    },
    "correct": "B",
    "explanation": "Błąd bezwzględny to różnica między wynikiem pomiaru X a wartością rzeczywistą Xr (ΔX = X - Xr, wyrażany w jednostkach wielkości mierzonej), a błąd względny to stosunek δX = ΔX / Xr (zwykle w %). Gdyby Xr była dokładnie znana, pomiar byłby zbędny – dlatego zastępuje się ją tzw. wartością poprawną (umownie prawdziwą).",
    "type": "choice"
  },
  {
    "id": 45,
    "lectureId": 4,
    "lectureTitle": "Niedokładność i błędy pomiaru – cz. 1",
    "question": "Dlaczego obliczoną wartość błędu granicznego ΔXg (lub niepewności pomiaru) zaokrągla się ZAWSZE W GÓRĘ, a nigdy w dół zgodnie ze zwykłymi regułami matematycznymi?",
    "image": null,
    "options": {
      "A": "Jest to wyłącznie tradycja akademicka nieposiadająca uzasadnienia w rachunku przedziałowym",
      "B": "Aby sztucznie zawyżyć klasę dokładności użytego przyrządu pomiarowego",
      "C": "Ponieważ błędy pomiarowe mogą przyjmować wyłącznie wartości będące wielokrotnością liczby 10",
      "D": "Ponieważ zaokrąglenie błędu w dół zawęziłoby przedział [X - ΔXg, X + ΔXg], przez co wartość rzeczywista Xr leżąca blisko krańca przedziału mogłaby znaleźć się poza nim"
    },
    "correct": "D",
    "explanation": "Błąd graniczny ΔXg wyznacza najkrótszy przedział wokół wyniku pomiaru X, w którym na pewno znajduje się wartość rzeczywista: X - ΔXg ≤ Xr ≤ X + ΔXg. Zaokrąglenie ΔXg w dół zmniejszyłoby ten przedział, prowadząc do ryzyka, że wartość rzeczywista wypadnie poza zadeklarowane granice błędu.",
    "type": "choice"
  },
  {
    "id": 46,
    "lectureId": 4,
    "lectureTitle": "Niedokładność i błędy pomiaru – cz. 1",
    "question": "Czym różni się błąd podstawowy przyrządu pomiarowego od błędu dodatkowego?",
    "image": null,
    "options": {
      "A": "Błąd podstawowy występuje przy pomiarze napięcia, a błąd dodatkowy przy pomiarze prądu",
      "B": "Błąd podstawowy zależy od zmierzonej wartości, a błąd dodatkowy zależy wyłącznie od czasu trwania pomiaru",
      "C": "Błąd podstawowy to błąd przyrządu pracującego w warunkach odniesienia (nominalnych), natomiast błędy dodatkowe pojawiają się, gdy wielkości wpływające (np. temperatura, położenie ustroju, pole magnetyczne) wykraczają poza warunki nominalne",
      "D": "Błąd podstawowy można wyeliminować przyciskiem REL, a błędu dodatkowego nie opisuje się w dokumentacji"
    },
    "correct": "C",
    "explanation": "Ze względu na warunki fizyczne wyróżniamy błąd podstawowy (określony w warunkach nominalnych/odniesienia podanych przez producenta, np. 23°C ± 5°C) oraz błędy dodatkowe, które dolicza się osobno dla każdej wielkości wpływającej (np. temperatury, przechyłu miernika analogowego) przekraczającej zakres nominalny.",
    "type": "choice"
  },
  {
    "id": 47,
    "lectureId": 4,
    "lectureTitle": "Niedokładność i błędy pomiaru – cz. 1",
    "question": "W jaki sposób w praktyce pomiarowej postępuje się z błędami grubymi, błędami systematycznymi oraz błędami przypadkowymi?",
    "image": null,
    "options": {
      "A": "Wszystkie trzy rodzaje błędów można całkowicie wyeliminować przez wykonanie jednego dokładnego pomiaru",
      "B": "Błędy grube (pomyłki) eliminuje się przez powtórzenie pomiaru i odrzucenie skrajnie odstających wyników, błędy systematyczne koryguje się poprawkami (lub funkcją REL), a błędów przypadkowych nie da się wyeliminować i opisuje się je statystycznie",
      "C": "Błędy przypadkowe zeruje się przyciskiem REL, błędy systematyczne uśrednia się w długiej serii pomiarów, a błędy grube wpisuje się jako niepewność typu B",
      "D": "Błędy systematyczne mają rozkład normalny Gaussa, a błędy przypadkowe mają zawsze stałą wartość i znak"
    },
    "correct": "B",
    "explanation": "Błędy grube wynikają z pomyłki lub awarii i są łatwe do wykrycia przy powtórzeniu pomiaru. Błędy systematyczne mają stałą wartość w danych warunkach (np. rezystancja przewodów przy pomiarze małych rezystancji) i eliminuje się je poprawką lub trybem REL. Błędy przypadkowe (losowe, o rozkładzie Gaussa) wymagają analizy statystycznej.",
    "type": "choice"
  },
  {
    "id": 48,
    "lectureId": 4,
    "lectureTitle": "Niedokładność i błędy pomiaru – cz. 1",
    "question": "Woltomierz analogowy o klasie dokładności \\(K = 0{,}5\\) pracuje na zakresie pomiarowym \\(U_{\\text{zakr}} = 300\\text{ V}\\) i wskazuje napięcie \\(U = 230\\text{ V}\\). Oblicz względny błąd graniczny \\(\\delta U\\) tego pomiaru. Wynik podaj w procentach [%].",
    "image": null,
    "options": {
      "A": "ΔU = 1,5 V; δU ≈ 0,65%",
      "B": "ΔU = 1,15 V; δU = 0,50%",
      "C": "ΔU = 0,5 V; δU ≈ 0,22%",
      "D": "ΔU = 1,5 V; δU = 0,50%"
    },
    "correct": "A",
    "explanation": "Dla miernika analogowego bezwzględny błąd graniczny jest stały na całym zakresie:\n\\[\\Delta U = \\frac{K \\cdot U_{\\text{zakr}}}{100} = \\frac{0{,}5 \\cdot 300\\text{ V}}{100} = 1{,}5\\text{ V}\\]\nWzględny błąd graniczny dla wskazania \\(U = 230\\text{ V}\\) wynosi:\n\\[\\delta U = \\frac{\\Delta U}{U} \\cdot 100\\% = \\frac{1{,}5}{230} \\cdot 100\\% \\approx 0{,}652\\% \\approx 0{,}65\\%\\]",
    "type": "open",
    "numericTarget": 0.65,
    "acceptedNumbers": [
      0.65,
      0.652,
      0.66
    ],
    "tolerance": 0.03,
    "toleranceAbs": 0.02,
    "unit": "%",
    "openAnswerText": "0,65% (przy błędzie bezwzględnym ΔU = 1,5 V)"
  },
  {
    "id": 49,
    "lectureId": 4,
    "lectureTitle": "Niedokładność i błędy pomiaru – cz. 1",
    "question": "Dlaczego podczas pomiarów przyrządami analogowymi (wskazówkowymi) należy tak dobierać zakres pomiarowy, aby wskazówka zatrzymywała się w górnej części skali (co najmniej powyżej 2/3 zakresu)?",
    "image": null,
    "options": {
      "A": "Ponieważ bezwzględny błąd graniczny ΔXg jest stały dla całego zakresu, więc im mniejsza wartość mierzona X, tym większy staje się błąd względny δXg = (ΔXg / X) · 100%",
      "B": "Ponieważ tylko w górnej części skali działa tłumik magnetoelektryczny",
      "C": "Ponieważ powyżej 2/3 skali błąd bezwzględny ΔXg maleje do zera",
      "D": "Ponieważ w dolnej części skali sprężyny zwrotne przestają przewodzić prąd elektryczny"
    },
    "correct": "A",
    "explanation": "W mierniku analogowym błąd bezwzględny ΔXg zależy od pełnego zakresu pomiarowego, a nie od bieżącego wskazania. Przy małym wychyleniu wskazówki stały błąd ΔXg stanowi duży procent mierzonej wartości (np. dla klasy 0,5 i zakresu 300 V przy wskazaniu 30 V błąd względny rośnie aż do 5%).",
    "type": "choice"
  },
  {
    "id": 50,
    "lectureId": 4,
    "lectureTitle": "Niedokładność i błędy pomiaru – cz. 1",
    "question": "Jakie informacje metrologiczne zakodowane są w symbolach umieszczanych na podzielni (skali) miernika analogowego, takich jak symbol ustroju, liczba w ramce/gwiazdce, symbol poziomej kreski czy zapis '30...50...100 Hz'?",
    "image": null,
    "options": {
      "A": "Są to numery seryjne producenta oraz daty kolejnych przeglądów gwarancyjnych",
      "B": "Określają one m.in. rodzaj ustroju pomiarowego, klasę dokładności, napięcie probiercze izolacji, nominalne położenie pracy (np. poziome) oraz nominalny i roboczy zakres częstotliwości, w których miernik zachowuje klasę dokładności",
      "C": "Informują wyłącznie o cenie przyrządu oraz rezystancji bezpiecznika topikowego",
      "D": "Wskazują liczbę próbek na sekundę pobieranych przez przetwornik A/C"
    },
    "correct": "B",
    "explanation": "Na tarczy przyrządu analogowego umieszcza się znormalizowane znaki określające warunki odniesienia i parametry graniczne: rodzaj ustroju, klasę dokładności, napięcie próby izolacji (w gwieździe), położenie pracy (np. poziome/pionowe – zmiana położenia wywołuje błąd dodatkowy!) oraz zakres częstotliwości odniesienia.",
    "type": "choice"
  },
  {
    "id": 51,
    "lectureId": 4,
    "lectureTitle": "Niedokładność i błędy pomiaru – cz. 1",
    "question": "Z jakich dwóch składników składa się równanie błędu granicznego multimetru cyfrowego zapisywane w postaci ΔUgr = a%·Uwsk + b%·Uzakr (lub ΔUgr = a%·Uwsk + k·rozdzielczość)?",
    "image": null,
    "options": {
      "A": "Ze składnika częstotliwościowego oraz składnika rezystancyjnego",
      "B": "Ze składnika losowego o rozkładzie Gaussa oraz składnika błędu grubego",
      "C": "Ze składnika multiplikatywnego (proporcjonalnego do wskazania Uwsk) oraz składnika addytywnego (stałego dla danego zakresu pomiarowego)",
      "D": "Wyłącznie z dwóch składników multiplikatywnych zależnych od kwadratu napięcia"
    },
    "correct": "C",
    "explanation": "Pierwszy człon (a%·Uwsk) jest proporcjonalny do wartości mierzonej i nazywa się składnikiem multiplikatywnym (wynika m.in. z błędu wzmocnienia/wzorca). Drugi człon (b%·Uzakr lub c = k·rozdzielczość) jest stały na danym zakresie i nazywa się składnikiem addytywnym (wynika m.in. z przesunięcia zera i kwantowania).",
    "type": "choice"
  },
  {
    "id": 52,
    "lectureId": 4,
    "lectureTitle": "Niedokładność i błędy pomiaru – cz. 1",
    "question": "Jak zmienia się względny błąd graniczny multimetru cyfrowego δUgr = a% + (c / Uwsk)·100% w funkcji mierzonego napięcia Uwsk i jaka zasada doboru zakresu pomiarowego z tego wynika?",
    "image": null,
    "options": {
      "A": "Błąd względny jest idealnie stały w całym zakresie, więc wybór zakresu nie ma żadnego znaczenia",
      "B": "Multimetry cyfrowe nie posiadają zakresów pomiarowych",
      "C": "Błąd względny maleje do zera przy Uwsk dążącym do zera, dlatego należy wybierać jak największy zakres pomiarowy (np. 1000 V do pomiaru 1 V)",
      "D": "Błąd względny rośnie hiperbolicznie przy malejącym wskazaniu Uwsk (z powodu składnika addytywnego c), dlatego pomiar należy zawsze wykonywać na możliwie najmniejszym zakresie obejmującym mierzoną wartość"
    },
    "correct": "D",
    "explanation": "We wzorze na błąd względny δUgr = a% + (c / Uwsk)·100% składnik addytywny c dzielony jest przez wartość wskazywaną Uwsk. Im mniejsze Uwsk w stosunku do wybranego zakresu (i jego rozdzielczości), tym większy udział składnika c/Uwsk. Dlatego w multimetrach cyfrowych zawsze wybieramy najniższy możliwy zakres.",
    "type": "choice"
  },
  {
    "id": 53,
    "lectureId": 4,
    "lectureTitle": "Niedokładność i błędy pomiaru – cz. 1",
    "question": "Multimetrem cyfrowym UNI-T UT60E zmierzono napięcie przemienne \\(U_{\\text{wsk}} = 10{,}03\\text{ V}\\) na zakresie \\(40\\text{ V}\\) (rozdzielczość \\(0{,}01\\text{ V}\\), dokładność \\(\\pm(1\\% + 5\\text{ dgt})\\)). Oblicz bezwzględny błąd graniczny \\(\\Delta U_{\\text{gr}}\\) po prawidłowym zaokrągleniu w górę. Wynik podaj w woltach [V].",
    "image": null,
    "options": {
      "A": "ΔUgr = 0,10 V; U = (10,03 ± 0,10) V",
      "B": "ΔUgr = 0,1503 V ≈ 0,16 V (po zaokrągleniu w górę); U = (10,03 ± 0,16) V",
      "C": "ΔUgr = 0,1503 V ≈ 0,15 V; U = (10,03 ± 0,15) V",
      "D": "ΔUgr = 0,60 V; U = (10,0 ± 0,6) V"
    },
    "correct": "B",
    "explanation": "Składnik multiplikatywny: \\(1\\% \\cdot 10{,}03\\text{ V} = 0{,}1003\\text{ V}\\).\nSkładnik addytywny: \\(5 \\cdot 0{,}01\\text{ V} = 0{,}05\\text{ V}\\).\n\\[\\Delta U_{\\text{gr}} = 0{,}1003\\text{ V} + 0{,}05\\text{ V} = 0{,}1503\\text{ V}\\]\nPonieważ zaokrąglenie w górę do 1 cyfry znaczącej (\\(0{,}2\\text{ V}\\)) zmieniłoby wartość o ponad 20%, zostawiamy 2 cyfry znaczące zaokrąglone w górę: \\(\\Delta U_{\\text{gr}} = 0{,}16\\text{ V}\\), a zapis wyniku to \\(U = (10{,}03 \\pm 0{,}16)\\text{ V}\\).",
    "type": "open",
    "numericTarget": 0.16,
    "acceptedNumbers": [
      0.16,
      0.1503,
      0.15
    ],
    "tolerance": 0.02,
    "toleranceAbs": 0.005,
    "unit": "V",
    "openAnswerText": "0,16 V (dokł. 0,1503 V → w górę: 0,16 V; zapis: (10,03 ± 0,16) V)"
  },
  {
    "id": 54,
    "lectureId": 4,
    "lectureTitle": "Niedokładność i błędy pomiaru – cz. 1",
    "question": "W jakim celu w multimetrach cyfrowych przed pomiarem małych rezystancji (np. rzędu kilku omów) zwiera się końcówki przewodów pomiarowych i naciska przycisk REL (lub Δ)?",
    "image": null,
    "options": {
      "A": "Aby rozładować baterię zasilającą multimetr w celu zmniejszenia prądu pomiarowego",
      "B": "Aby przełączyć multimetr z pomiaru rezystancji na pomiar częstotliwości sieciowej",
      "C": "Aby wyeliminować błędy przypadkowe (szumy termiczne) w badanym rezystorze",
      "D": "Aby zmierzyć i odjąć od kolejnych wskazań systematyczny błąd addytywny wynikający z rezystancji samych przewodów pomiarowych oraz styków"
    },
    "correct": "D",
    "explanation": "Rezystancja przewodów pomiarowych (zwykle 0,1–0,5 Ω) dodaje się wprost do mierzonej rezystancji, stanowiąc klasyczny błąd systematyczny. Zwarcie sond i włączenie trybu względnego REL zapisuje tę wartość jako poziom odniesienia i automatycznie odejmuje ją od kolejnych wyników.",
    "type": "choice"
  },
  {
    "id": 55,
    "lectureId": 4,
    "lectureTitle": "Niedokładność i błędy pomiaru – cz. 1",
    "question": "Jaką rolę pełnią warunki odniesienia podawane w instrukcji multimetru cyfrowego, np. temperatura 23°C ± 5°C, wilgotność względna < 75% oraz pasmo częstotliwości 40 Hz – 400 Hz przy pomiarze AC?",
    "image": null,
    "options": {
      "A": "Wyznaczają przedziały wielkości wpływających, w których gwarantowane jest nieprzekroczenie podstawowego błędu granicznego podanego w tabeli dokładności",
      "B": "Dotyczą wyłącznie transportu lotniczego przyrządu w stanie wyłączonym",
      "C": "Wskazują parametry sygnału, dla których błąd kwantowania przetwornika A/C jest równy zeru",
      "D": "Określają warunki, poza którymi wyświetlacz ciekłokrystaliczny ulega trwałemu pęknięciu"
    },
    "correct": "A",
    "explanation": "Podawane w specyfikacji formuły dokładności (np. ±(1% + 5 dgt)) określają błąd podstawowy. Obowiązuje on wyłącznie wtedy, gdy pomiar odbywa się w zadeklarowanych warunkach odniesienia (temperatury, wilgotności oraz częstotliwości sygnału AC).",
    "type": "choice"
  },
  {
    "id": 56,
    "lectureId": 4,
    "lectureTitle": "Niedokładność i błędy pomiaru – cz. 1",
    "question": "W jaki sposób definiuje się błąd względny pomiaru δX, jeśli znany jest tylko stosunek wyniku pomiaru X do wartości rzeczywistej (poprawnej) Xr?",
    "image": null,
    "options": {
      "A": "δX = 1 - (X / Xr)",
      "B": "δX = (X / Xr) + 1",
      "C": "δX = (X / Xr) - 1",
      "D": "δX = X · Xr"
    },
    "correct": "C",
    "explanation": "Przekształcając definicję błędu względnego δX = ΔX / Xr = (X - Xr) / Xr, otrzymujemy równoważną postać δX = (X / Xr) - 1 (często wyrażaną w procentach po pomnożeniu przez 100%).",
    "type": "choice"
  },
  {
    "id": 57,
    "lectureId": 5,
    "lectureTitle": "Niedokładność pomiaru – cz. 2 i pomiary pośrednie",
    "question": "Co oznacza zapis w dokumentacji multimetru Metex M-3860D, że posiada on wyświetlacz '3 3/4 cyfry' (maksymalne wskazanie 4000) i jak wpływa to na szereg zakresów pomiarowych?",
    "image": null,
    "options": {
      "A": "Na wyświetlaczu znajdują się cztery pełne cyfry mogące przyjmować wartości od 0 do 9, a zakresy zaczynają się od cyfry 9",
      "B": "Jedna czwarta wyświetlacza jest stale podświetlona, a trzy czwarte są wygaszone",
      "C": "Trzy mniej znaczące pozycje wyświetlają cyfry od 0 do 9, natomiast najstarsza (pierwsza z lewej) pozycja może wyświetlać cyfry 0, 1, 2, 3 (do 4000 działek), dlatego podzakresy zaczynają się od cyfry 4 (np. 400 mV, 4 V, 40 V, 400 V)",
      "D": "Multimetr potrafi mierzyć napięcia wyłącznie z dokładnością do 3/4 wolta"
    },
    "correct": "C",
    "explanation": "W oznaczeniu '3 3/4 cyfry' liczba całkowita (3) oznacza liczbę pełnych pozycji dziesiętnych (0–9), natomiast ułamek (3/4) informuje, że najstarsza cyfra może przyjmować wartości do 3 (maksymalne wskazanie 3999/4000). Z tego powodu zakresy pomiarowe tworzą szereg 400 mV, 4 V, 40 V, 400 V.",
    "type": "choice"
  },
  {
    "id": 58,
    "lectureId": 5,
    "lectureTitle": "Niedokładność pomiaru – cz. 2 i pomiary pośrednie",
    "question": "W dokumentacji multimetru (np. Metex M-3860D) podane są trzy różne przedziały temperatur: 0°C..40°C, -10°C..50°C oraz +23°C ± 5°C. Co oznaczają te trzy zakresy?",
    "image": null,
    "options": {
      "A": "Są to odpowiednio: zakres temperatury pracy (operating), zakres temperatury przechowywania (storage) oraz zakres temperatury odniesienia, w którym gwarantowana jest podana dokładność pomiaru",
      "B": "Są to zakresy temperatur mierzonych za pomocą termopary typu K na trzech podzakresach",
      "C": "Każdy zakres odpowiada innemu kolorowi podświetlenia wyświetlacza LCD",
      "D": "Są to odpowiednio: temperatura lutowania, temperatura topnienia obudowy oraz temperatura wrzenia elektrolitu baterii"
    },
    "correct": "A",
    "explanation": "Producenci przyrządów pomiarowych rozróżniają: temperaturę przechowywania (np. -10°C..50°C, gdy przyrząd jest wyłączony), temperaturę pracy (np. 0°C..40°C, w której przyrząd działa bezpiecznie, ale z możliwym błędem dodatkowym) oraz węższy przedział +23°C ± 5°C, w którym gwarantowany jest błąd podstawowy.",
    "type": "choice"
  },
  {
    "id": 59,
    "lectureId": 5,
    "lectureTitle": "Niedokładność pomiaru – cz. 2 i pomiary pośrednie",
    "question": "Multimetrem Metex M-3860D zmierzono napięcie stałe \\(U = 1{,}352\\text{ V}\\) na zakresie \\(4\\text{ V}\\) (rozdzielczość \\(1\\text{ mV}\\), dokładność \\(\\pm(0{,}3\\%\\text{ rdg} + 1\\text{ dgt})\\)). Oblicz bezwzględny błąd graniczny \\(\\Delta U\\) po prawidłowym zaokrągleniu w górę. Wynik podaj w woltach [V].",
    "image": null,
    "options": {
      "A": "0,010 V",
      "B": "0,005 V",
      "C": "0,004 V",
      "D": "0,006 V"
    },
    "correct": "D",
    "explanation": "Obliczamy błąd graniczny ze specyfikacji producenta:\n\\[\\Delta U = 0{,}3\\% \\cdot 1{,}352\\text{ V} + 1 \\cdot 0{,}001\\text{ V} = 0{,}004056\\text{ V} + 0{,}001\\text{ V} = 0{,}005056\\text{ V}\\]\nZgodnie z zasadą zaokrąglania błędów granicznych zawsze w górę do 1 cyfry znaczącej (wzrost \\(< 20\\%\\), a zarazem ostatnia cyfra rozdzielczości) otrzymujemy \\(\\Delta U = 0{,}006\\text{ V}\\).",
    "type": "open",
    "numericTarget": 0.006,
    "acceptedNumbers": [
      0.006,
      0.005056,
      0.0051
    ],
    "tolerance": 0.02,
    "toleranceAbs": 0.0002,
    "unit": "V",
    "openAnswerText": "0,006 V (dokł. 0,005056 V → w górę: 0,006 V)"
  },
  {
    "id": 60,
    "lectureId": 5,
    "lectureTitle": "Niedokładność pomiaru – cz. 2 i pomiary pośrednie",
    "question": "Jak w multimetrze stołowym Escort 3145A zmiana szybkości pomiaru (Reading Rate: Slow / Medium / Fast) wpływa na parametry metrologiczne przyrządu?",
    "image": null,
    "options": {
      "A": "Zmiana szybkości pomiaru zmienia jedynie jasność wyświetlacza i nie ma wpływu na rozdzielczość ani dokładność",
      "B": "W trybie Slow uzyskuje się największą długość słowa wyjściowego (119 999, najwyższą rozdzielczość np. 100 μV na zakresie 12 V) i najwyższą dokładność, natomiast w trybach Medium (39 999) i Fast (3 999) rozdzielczość oraz dokładność maleją",
      "C": "W trybie Fast uzyskuje się najwyższą rozdzielczość (119 999), a w trybie Slow najniższą (3 999)",
      "D": "Tryb Slow służy wyłącznie do pomiaru częstotliwości powyżej 1 MHz"
    },
    "correct": "B",
    "explanation": "W przetwornikach całkujących dłuższy czas całkowania (tryb Slow) zapewnia większą liczbę zliczeń (maks. 119 999, rozdzielczość 100 μV na zakresie 12 V) oraz lepsze tłumienie zakłóceń. Przyspieszenie pomiaru (Medium: 39 999, Fast: 3 999) odbywa się kosztem mniejszej rozdzielczości i większego błędu granicznego.",
    "type": "choice"
  },
  {
    "id": 61,
    "lectureId": 5,
    "lectureTitle": "Niedokładność pomiaru – cz. 2 i pomiary pośrednie",
    "question": "Jakie dodatkowe wymagania eksploatacyjne podaje dokumentacja dokładnych multimetrów laboratoryjnych (takich jak Escort 3145A czy HP/Agilent 34401A), aby przyrząd osiągnął deklarowaną w tabelach dokładność?",
    "image": null,
    "options": {
      "A": "Wymóg zasilania multimetru wyłącznie z baterii alkalicznych 9 V",
      "B": "Konieczność zanurzenia sond pomiarowych w wodzie destylowanej przed każdym pomiarem",
      "C": "Konieczność wykonywania pomiarów wyłącznie w całkowitej ciemności",
      "D": "Konieczność wstępnego wygrzania przyrządu po włączeniu zasilania (np. 30 minut dla Escort 3145A lub 2 godziny dla HP 34401A) oraz uwzględnienia czasu od ostatniej kalibracji (np. 24h, 90 dni, 1 rok) i współczynnika temperaturowego"
    },
    "correct": "D",
    "explanation": "Precyzyjne multimetry stołowe wymagają ustabilizowania termicznego wewnętrznych źródeł napięcia odniesienia i dzielników (czas nagrzewania 30 min – 2 h), a na najniższych zakresach (np. 120 mV) użycia funkcji REL do kompensacji sił termoelektrycznych. Ich dokładność zależy też od czasu, jaki upłynął od kalibracji.",
    "type": "choice"
  },
  {
    "id": 62,
    "lectureId": 5,
    "lectureTitle": "Niedokładność pomiaru – cz. 2 i pomiary pośrednie",
    "question": "W jaki sposób specyfikowany jest błąd graniczny w stacjonarnym multimetrze HP/Agilent 34401A i co oznacza parametr '20% overrange' na zakresach napięciowych?",
    "image": null,
    "options": {
      "A": "Błąd podawany jest w omach, a '20% overrange' oznacza, że wyświetlacz pokazuje o 20% więcej niż wynosi napięcie wejściowe",
      "B": "Błąd podawany jest wyłącznie jako klasa dokładności, a '20% overrange' oznacza 20-procentowy błąd dodatkowy",
      "C": "Błąd podawany jest w postaci ±(% wskazania + % zakresu), a '20% overrange' oznacza możliwość pomiaru wartości o 20% przekraczających nominalny zakres (np. do 12 V na zakresie 10 V), z wyjątkiem najwyższego zakresu 1000 V",
      "D": "'20% overrange' pozwala mierzyć napięcie 1200 V na zakresie 1000 V bez ryzyka przebicia izolacji"
    },
    "correct": "C",
    "explanation": "W multimetrach klasy HP 34401A dokładność zapisuje się jako ±(% of reading + % of range). Funkcja 20% przepełnienia (overrange) pozwala na zakresach 100 mV, 1 V, 10 V i 100 V mierzyć napięcia odpowiednio do 120 mV, 1,2 V, 12 V i 120 V bez przełączania na wyższy, mniej dokładny zakres.",
    "type": "choice"
  },
  {
    "id": 63,
    "lectureId": 5,
    "lectureTitle": "Niedokładność pomiaru – cz. 2 i pomiary pośrednie",
    "question": "W dokumentacji multimetru Keithley 2000 dokładność pomiaru napięcia DC na zakresie \\(10\\text{ V}\\) (24h, \\(23^\\circ\\text{C} \\pm 1^\\circ\\text{C}\\)) zapisano jako \\(\\pm(15\\text{ ppm of reading} + 4\\text{ ppm of range})\\). Oblicz bezwzględny błąd graniczny \\(\\Delta U\\) dla wskazania \\(1{,}35182\\text{ V}\\) po zaokrągleniu w górę do 1 cyfry znaczącej. Wynik podaj w woltach [V].",
    "image": null,
    "options": {
      "A": "10 ppm = 0,1%; ΔU = 0,07 V",
      "B": "10 ppm = 0,001% (1 ppm = 10⁻⁶); ΔU = 15·10⁻⁶·1,35182 V + 4·10⁻⁶·10 V = 0,0000602773 V ≈ 0,00007 V",
      "C": "10 ppm = 1%; ΔU = 0,7 V",
      "D": "10 ppm = 10⁻⁹%; ΔU = 0,00001 V"
    },
    "correct": "B",
    "explanation": "Jednostka \\(1\\text{ ppm} = 10^{-6} = 0{,}0001\\%\\) (stąd \\(10\\text{ ppm} = 0{,}001\\%\\)).\nDla \\(15\\text{ ppm}\\) wskazania i \\(4\\text{ ppm}\\) zakresu \\(10\\text{ V}\\):\n\\[\\Delta U = 15 \\cdot 10^{-6} \\cdot 1{,}35182\\text{ V} + 4 \\cdot 10^{-6} \\cdot 10\\text{ V} = 0{,}0000202773\\text{ V} + 0{,}00004\\text{ V} = 0{,}0000602773\\text{ V}\\]\nPo zaokrągleniu w górę do 1 cyfry znaczącej otrzymujemy \\(\\Delta U = 0{,}00007\\text{ V}\\) (\\(70\\,\\mu\\text{V}\\)).",
    "type": "open",
    "numericTarget": 7e-05,
    "acceptedNumbers": [
      7e-05,
      6.03e-05,
      6e-05,
      70,
      60.28
    ],
    "tolerance": 0.02,
    "toleranceAbs": 5e-06,
    "unit": "V",
    "openAnswerText": "0,00007 V (70 μV; przed zaokrągleniem: 0,0000602773 V)"
  },
  {
    "id": 64,
    "lectureId": 5,
    "lectureTitle": "Niedokładność pomiaru – cz. 2 i pomiary pośrednie",
    "question": "Jaką rezystancją wejściową charakteryzuje się multimetr laboratoryjny Keithley 2000 (oraz HP 34401A) na niskich zakresach napięcia stałego (100 mV, 1 V, 10 V) w porównaniu z zakresami wysokonapięciowymi (100 V, 1000 V)?",
    "image": null,
    "options": {
      "A": "Na zakresach 100 mV, 1 V i 10 V rezystancja wejściowa przekracza 10 GΩ, natomiast na zakresach 100 V i 1000 V wynosi 10 MΩ ± 1%",
      "B": "Na wszystkich zakresach rezystancja wejściowa wynosi dokładnie 50 Ω",
      "C": "Na niskich zakresach wynosi 1 kΩ, a na wysokich zakresach przekracza 10 GΩ",
      "D": "Rezystancja wejściowa jest ujemna i zależy od częstotliwości sieci"
    },
    "correct": "A",
    "explanation": "Na zakresach do 10 V włącznie wejście pomiarowe prowadzi bezpośrednio na wzmacniacz buforowy o gigantycznej rezystancji wejściowej (> 10 GΩ), co niemal całkowicie eliminuje błąd metody (obciążenie badanego źródła). Na zakresach 100 V i 1000 V włączany jest precyzyjny dzielnik napięcia o rezystancji 10 MΩ.",
    "type": "choice"
  },
  {
    "id": 65,
    "lectureId": 5,
    "lectureTitle": "Niedokładność pomiaru – cz. 2 i pomiary pośrednie",
    "question": "Energię prądu stałego wydzieloną w rezystorze R w czasie t wyznaczamy pośrednio ze wzoru A = R·I²·t. Jak wyraża się względny błąd pomiaru energii δA za pomocą błędów względnych wielkości mierzonych bezpośrednio (δR, δI, δt)?",
    "image": null,
    "options": {
      "A": "δA ≈ δR + 2·δI + δt",
      "B": "δA ≈ δR + δI + δt",
      "C": "δA ≈ δR · (δI)² · δt",
      "D": "δA ≈ δR + (δI)² + δt"
    },
    "correct": "A",
    "explanation": "Ponieważ prąd I występuje we wzorze A = R·I²·t w drugiej potędze, jego błąd względny przenosi się na błąd wyznaczenia energii z wagą równą wykładnikowi potęgi (czyli 2). Stąd dla małych błędów względnych otrzymujemy δA ≈ δR + 2·δI + δt.",
    "type": "choice"
  },
  {
    "id": 66,
    "lectureId": 5,
    "lectureTitle": "Niedokładność pomiaru – cz. 2 i pomiary pośrednie",
    "question": "Dlaczego podczas wyprowadzania wzoru na błąd względny pomiaru pośredniego A = R·I²·t metodą przyrostów z wyrażenia δA = (1 + δR)(1 + δI)²(1 + δt) - 1 pomija się wyrazy zawierające iloczyny błędów względnych (np. δR·δI, δI² itp.)?",
    "image": null,
    "options": {
      "A": "Nie wolno ich pomijać – metoda przyrostów daje zupełnie inny wynik niż metoda różniczki zupełnej",
      "B": "Ponieważ błędy względne są znacznie mniejsze od jedności (np. rzędu 10⁻² lub 10⁻³), więc ich iloczyny są wielkościami małych wyższych rzędów, pomijalnie małymi wobec samych błędów",
      "C": "Ponieważ błędy δR, δI oraz δt są zawsze równe dokładnie 100%",
      "D": "Ponieważ iloczyny błędów względnych są zawsze liczbami urojonymi"
    },
    "correct": "B",
    "explanation": "Jeżeli poszczególne błędy względne wynoszą np. 1% (0,01), to ich iloczyn wynosi 0,0001 (0,01%), a iloczyn trzech błędów 0,000001. Odrzucenie tych wyrazów wyższych rzędów prowadzi do liniowego przybliżenia δA ≈ δR + 2·δI + δt, identycznego z wynikiem metody różniczki zupełnej i logarytmicznej.",
    "type": "choice"
  },
  {
    "id": 67,
    "lectureId": 5,
    "lectureTitle": "Niedokładność pomiaru – cz. 2 i pomiary pośrednie",
    "question": "Który wzór ogólny opisuje błąd bezwzględny ΔY pomiaru pośredniego wielkości Y = f(X1, X2, ..., Xn) wyznaczany metodą różniczki zupełnej?",
    "image": null,
    "options": {
      "A": "ΔY = ΔX1 + ΔX2 + ... + ΔXn niezależnie od postaci funkcji f",
      "B": "ΔY = (∂²f/∂X1²)·(ΔX1)² + ... + (∂²f/∂Xn²)·(ΔXn)²",
      "C": "ΔY = (∂f/∂X1)·ΔX1 + (∂f/∂X2)·ΔX2 + ... + (∂f/∂Xn)·ΔXn (dla błędu granicznego z wartościami bezwzględnymi pochodnych cząstkowych)",
      "D": "ΔY = f(ΔX1, ΔX2, ..., ΔXn)"
    },
    "correct": "C",
    "explanation": "W metodzie różniczki zupełnej przyrost funkcji ΔY zastępuje się jej różniczką zupełną dY, będącą sumą iloczynów pochodnych cząstkowych funkcji f względem poszczególnych zmiennych Xi oraz błędów bezwzględnych ΔXi tych zmiennych.",
    "type": "choice"
  },
  {
    "id": 68,
    "lectureId": 5,
    "lectureTitle": "Niedokładność pomiaru – cz. 2 i pomiary pośrednie",
    "question": "Na czym polega metoda logarytmiczna wyznaczania błędu względnego w pomiarach pośrednich (np. dla zależności iloczynowo-potęgowej A = R·I²·t)?",
    "image": null,
    "options": {
      "A": "Na pomiarze wszystkich wielkości za pomocą wzmacniacza logarytmującego",
      "B": "Na podstawieniu logarytmów dziesiętnych błędów bezwzględnych do wzoru na średnią arytmetyczną",
      "C": "Na pomnożeniu wyniku końcowego przez logarytm naturalny z liczby pomiarów",
      "D": "Na zlogarytmowaniu stronami wzoru (ln A = ln R + 2·ln I + ln t), a następnie obliczeniu różniczki zupełnej d(ln A) = dA/A = dR/R + 2·dI/I + dt/t, co bezpośrednio daje relację między błędami względnymi"
    },
    "correct": "D",
    "explanation": "Korzystając z własności pochodnej logarytmu naturalnego d(ln x) = dx / x ≈ Δx / x = δx, zlogarytmowanie wyrażenia iloczynowego zamienia mnożenie i potęgowanie na sumę logarytmów, a jej zróżniczkowanie od razu daje sumę błędów względnych z odpowiednimi współczynnikami.",
    "type": "choice"
  },
  {
    "id": 69,
    "lectureId": 5,
    "lectureTitle": "Niedokładność pomiaru – cz. 2 i pomiary pośrednie",
    "question": "Czym pod względem konstrukcyjnym różni się multimetr Metex M-3860D od pokrewnych modeli z tej samej serii M-3850D oraz M-3870D?",
    "image": null,
    "options": {
      "A": "Modele te różnią się wyłącznie kolorem przewodów pomiarowych w zestawie",
      "B": "Model M-3860D wyposażony jest w przetwornik wartości skutecznej True RMS dla przebiegów przemiennych, podczas gdy pozostałe modele mierzą wartość średnią wyprostowaną",
      "C": "Model M-3860D nie potrafi mierzyć napięcia stałego DC",
      "D": "Model M-3860D jest miernikiem wyłącznie wskazówkowym bez wyświetlacza cyfrowego"
    },
    "correct": "B",
    "explanation": "Wspólna instrukcja obsługi serii Metex M-3850D/3860D/3870D wskazuje, że wyróżnikiem modelu M-3860D jest zastosowanie przetwornika True RMS w torze pomiarowym AC.",
    "type": "choice"
  },
  {
    "id": 70,
    "lectureId": 5,
    "lectureTitle": "Niedokładność pomiaru – cz. 2 i pomiary pośrednie",
    "question": "Co oznacza skrót '100 PLC' (Power Line Cycles) występujący w warunkach odniesienia dla najwyższej rozdzielczości (6½ cyfry) w specyfikacji multimetru HP 34401A lub Keithley 2000?",
    "image": null,
    "options": {
      "A": "Konieczność wykonania 100 pomiarów próbnych przed odczytem wyniku",
      "B": "Możliwość podłączenia do 100 sterowników przemysłowych PLC jednocześnie",
      "C": "Maksymalne napięcie wejściowe równe 100 V prądu przemiennego",
      "D": "Czas całkowania przetwornika A/C ustawiony na 100 okresów sieci zasilającej (czyli 2 sekundy dla sieci 50 Hz), co zapewnia maksymalną rozdzielczość i tłumienie zakłóceń sieciowych"
    },
    "correct": "D",
    "explanation": "PLC (Power Line Cycles) określa czas całkowania przetwornika A/C wyrażony jako wielokrotność okresu napięcia sieci (20 ms dla 50 Hz). Ustawienie 100 PLC oznacza uśrednianie przez 100 okresów sieci, co minimalizuje szumy i zakłóceń sieciowe oraz pozwala uzyskać pełną dokładność 6½ cyfry.",
    "type": "choice"
  },
  {
    "id": 71,
    "lectureId": 6,
    "lectureTitle": "Niepewność pomiaru i zasady zapisu wyniku",
    "question": "Jak według przewodnika GUM (JCGM 100:2008) interpretuje się zapis niepewności standardowej u(x) oraz czym z punktu widzenia metrologicznego jest sama niepewność standardowa?",
    "image": null,
    "options": {
      "A": "u(x) jest pojedynczą liczbą (a nie funkcją!), gdzie symbol w nawiasie wskazuje wielkość mierzoną (estymatę), natomiast sama niepewność standardowa to niepewność wyniku pomiaru wyrażona jako odchylenie standardowe",
      "B": "u(x) jest funkcją matematyczną zmiennej x, a jej pochodna określa błąd gruby",
      "C": "u(x) jest iloczynem napięcia u oraz wyniku pomiaru x",
      "D": "u(x) oznacza bezwzględną różnicę między największym a najmniejszym wynikiem w serii"
    },
    "correct": "A",
    "explanation": "Zgodnie z dokumentem JCGM 100:2008 (GUM) niepewność standardowa to niepewność wyniku pomiaru wyrażona jako odchylenie standardowe. Zapis u(x) jest liczbą, a argument w nawiasie informuje wyłącznie o tym, której wielkości (estymaty) dotyczy dana niepewność.",
    "type": "choice"
  },
  {
    "id": 72,
    "lectureId": 6,
    "lectureTitle": "Niepewność pomiaru i zasady zapisu wyniku",
    "question": "Czym różni się wyznaczanie niepewności standardowej metodą typu A (ui) od metody typu B (uj) i jakim wzorem oblicza się niepewność typu A dla serii n pomiarów?",
    "image": null,
    "options": {
      "A": "Metoda typu A dotyczy wyłącznie woltomierzy analogowych, a metoda typu B woltomierzy cyfrowych",
      "B": "Metodę typu A można zastosować dla pojedynczego pomiaru (n = 1), a metoda typu B wymaga co najmniej 100 pomiarów",
      "C": "Metoda typu A opiera się na analizie statystycznej serii pomiarów: ui = s(x̄) = √( [1 / (n(n-1))] · Σ(xi - x̄)² ), natomiast metoda typu B wykorzystuje inne informacje (np. dane producenta przyrządu: uj = ΔUgr / √3)",
      "D": "Metoda typu A polega na podzieleniu błędu granicznego przez √3, a metoda typu B na obliczeniu średniej arytmetycznej"
    },
    "correct": "C",
    "explanation": "Niepewność standardowa typu A (ui) jest wyznaczana wyłącznie na podstawie analizy statystycznej serii n obserwacji jako eksperymentalne odchylenie standardowe średniej: s(x̄) = s(xi)/√n. Niepewność typu B (uj) wyznacza się metodami innymi niż statystyczna analiza serii (np. z błędu granicznego przyrządu przy założeniu rozkładu prostokątnego: uj = ΔXgr / √3).",
    "type": "choice"
  },
  {
    "id": 73,
    "lectureId": 6,
    "lectureTitle": "Niepewność pomiaru i zasady zapisu wyniku",
    "question": "Kiedy do obliczenia złożonej niepewności standardowej uc stosuje się pełny wzór uc = √(ui² + uj²), a w jakiej sytuacji jedną ze składowych można pominąć?",
    "image": null,
    "options": {
      "A": "Zawsze pomija się większą składową, a zostawia mniejszą",
      "B": "Wzór uc = √(ui² + uj²) stosuje się wyłącznie wtedy, gdy ui jest dokładnie równe uj",
      "C": "Wzór uc = √(ui² + uj²) stosuje się, gdy obie składowe są tego samego rzędu; jeżeli natomiast jedna z niepewności (ui lub uj) jest o rząd wielkości (co najmniej 10-krotnie) mniejsza od drugiej, można ją pominąć",
      "D": "Składową uj pomija się zawsze, gdy liczba pomiarów n przekracza 5"
    },
    "correct": "C",
    "explanation": "Ponieważ pod pierwiastkiem składowe są podnoszone do kwadratu, składowa 10-krotnie mniejsza wnosi do sumy kwadratów zaledwie 1% (co po spierwiastkowaniu zmienia wynik o ok. 0,5%). Dlatego składową o rząd wielkości mniejszą od dominującej można w praktyce pominąć.",
    "type": "choice"
  },
  {
    "id": 74,
    "lectureId": 6,
    "lectureTitle": "Niepewność pomiaru i zasady zapisu wyniku",
    "question": "Jak definiuje się niepewność rozszerzoną U i jakie wartości przyjmuje współczynnik rozszerzenia k dla rozkładu normalnego (przy długiej serii pomiarowej, n > 30) dla poziomów ufności 95,6% oraz 99,7%?",
    "image": null,
    "options": {
      "A": "U = k · uc; dla rozkładu normalnego przyjmuje się k = 2 dla poziomu ufności 95,6% oraz k = 3 dla poziomu ufności 99,7%",
      "B": "U = k + uc; k = 1,41 dla 95,6% oraz k = 1,73 dla 99,7%",
      "C": "U = uc / k; k = 1 dla 95,6% oraz k = 2 dla 99,7%",
      "D": "U = k² · uc; k = 5 dla 95,6% oraz k = 10 dla 99,7%"
    },
    "correct": "A",
    "explanation": "Niepewność rozszerzona U jest iloczynem współczynnika rozszerzenia k oraz niepewności złożonej uc (U = k · uc). Dla rozkładu normalnego Gaussa przedział ±2σ (k = 2) obejmuje 95,6% prawdopodobieństwa, natomiast przedział ±3σ (k = 3) obejmuje 99,7%.",
    "type": "choice"
  },
  {
    "id": 75,
    "lectureId": 6,
    "lectureTitle": "Niepewność pomiaru i zasady zapisu wyniku",
    "question": "W jaki sposób dobiera się rozkład prawdopodobieństwa decydujący o wartości współczynnika rozszerzenia k, gdy na wynik pomiaru składają się zarówno niepewność typu A (ui), jak i typu B (uj)?",
    "image": null,
    "options": {
      "A": "Splot rozkładu normalnego i prostokątnego daje zawsze rozkład dyskretny dwupunktowy",
      "B": "Niezależnie od liczby pomiarów i rodzaju przyrządu zawsze przyjmuje się rozkład trójkątny i k = 10",
      "C": "Współczynnik rozszerzenia k zależy wyłącznie od temperatury otoczenia w laboratorium",
      "D": "Teoretycznie rozkład wypadkowy jest splotem rozkładów składowych; w praktyce decyduje składnik dominujący (dla krótkiej serii z dominującym ui – rozkład t-Studenta, dla dominującego o rząd wielkości uj – rozkład prostokątny), a gdy składniki są porównywalne lub w pomiarach pośrednich z min. 3 wielkości – przyjmuje się rozkład normalny"
    },
    "correct": "D",
    "explanation": "Wypadkowy rozkład prawdopodobieństwa jest splotem rozkładów składowych. W praktyce: dla krótkiej serii (n ≤ 30) przy dominacji typu A stosuje się rozkład t-Studenta; gdy niepewność typu B jest co najmniej o rząd wielkości większa od typu A – rozkład prostokątny; a gdy składowe są zbliżone lub dla serii n > 30 – rozkład normalny.",
    "type": "choice"
  },
  {
    "id": 76,
    "lectureId": 6,
    "lectureTitle": "Niepewność pomiaru i zasady zapisu wyniku",
    "question": "Jaka zasada obowiązuje przy zaokrąglaniu końcowej wartości niepewności pomiaru (lub błędu granicznego) w zapisie wyniku pomiaru?",
    "image": null,
    "options": {
      "A": "Niepewność oblicza się z dokładnością do 6 cyfr znaczących i zaokrągla zawsze w dół do 3 cyfr znaczących",
      "B": "Niepewności w obliczeniach pośrednich liczy się z dokładnością do 3 cyfr znaczących, a w wyniku końcowym zaokrągla ZAWSZE W GÓRĘ do jednej cyfry znaczącej, lub do dwóch cyfr znaczących, jeżeli zaokrąglenie do jednej cyfry spowodowałoby zmianę (wzrost) niepewności o więcej niż 20%",
      "C": "Niepewność zaokrągla się zawsze do dwóch miejsc po przecinku, niezależnie od jej rzędu wielkości",
      "D": "Niepewność zaokrągla się dokładnie tak samo jak wynik pomiaru – do parzystej cyfry na trzecim miejscu po przecinku"
    },
    "correct": "B",
    "explanation": "W trakcie obliczeń niepewności zachowuje się 3 cyfry znaczące. Końcową niepewność zaokrągla się zawsze w górę: standardowo do 1 cyfry znaczącej, chyba że takie zaokrąglenie zwiększyłoby jej wartość o ponad 20% (dotyczy to głównie niepewności zaczynających się od cyfry 1, np. 111,55 Ω → 120 Ω zamiast 200 Ω) – wówczas pozostawia się 2 cyfry znaczące.",
    "type": "choice"
  },
  {
    "id": 77,
    "lectureId": 6,
    "lectureTitle": "Niepewność pomiaru i zasady zapisu wyniku",
    "question": "Ile cyfr znaczących należy zachować podczas obliczania wartości średniej z serii pomiarów bezpośrednich w zależności od liczności serii n?",
    "image": null,
    "options": {
      "A": "Zawsze tylko dwie cyfry znaczące niezależnie od użytego miernika",
      "B": "Dla ponad 10 pomiarów odejmuje się jedną cyfrę znaczącą względem wskazania miernika",
      "C": "Liczba cyfr znaczących średniej jest zawsze równa liczbie wykonanych pomiarów n",
      "D": "Dla krótkiej serii (do 10 pomiarów) zachowuje się tyle cyfr znaczących, ile ma wskazanie przyrządu; przy średniej z ponad 10 pomiarów dodaje się jedną dodatkową cyfrę znaczącą, a przy średniej z ponad 100 pomiarów – dwie dodatkowe cyfry znaczące"
    },
    "correct": "D",
    "explanation": "Uśrednianie większej liczby pomiarów zmniejsza niepewność przypadkową średniej (zgodnie z czynnikiem 1/√n). Dlatego dla n > 10 uzasadnione jest dopisanie jednej dodatkowej cyfry znaczącej ponad rozdzielczość pojedynczego odczytu, a dla n > 100 – dwóch cyfr.",
    "type": "choice"
  },
  {
    "id": 78,
    "lectureId": 6,
    "lectureTitle": "Niepewność pomiaru i zasady zapisu wyniku",
    "question": "Na czym polega reguła zaokrąglania samego wyniku pomiaru (estymaty) do miejsca wyznaczonego przez zaokrągloną niepewność w szczególnym przypadku, gdy pierwszą odrzucaną cyfrą jest 5, po której występują wyłącznie zera?",
    "image": null,
    "options": {
      "A": "Wynik zaokrągla się wówczas zawsze w górę, tak samo jak błąd graniczny",
      "B": "Wynik zaokrągla się wówczas zawsze w dół przez zwykłe obcięcie cyfry 5",
      "C": "Stosuje się zasadę zaokrąglania do parzystej: ostatnią zachowywaną cyfrę zwiększa się o 1, jeśli jest nieparzysta, lub pozostawia bez zmian, jeśli jest parzysta (aby ostatnia pozostawiona cyfra była parzysta)",
      "D": "Należy odrzucić cały pomiar i powtórzyć serię od nowa"
    },
    "correct": "C",
    "explanation": "Dla wyniku pomiaru stosuje się symetryczne zaokrąglanie matematyczne: gdy pierwsza odrzucana cyfra jest < 5 zaokrąglamy w dół, gdy > 5 (lub 5 i dalsze cyfry niezerowe) – w górę. Gdy pierwszą odrzucaną cyfrą jest dokładnie 5 (a po niej same zera), zaokrąglamy tak, aby ostatnia zachowana cyfra była parzysta (np. 1,250 → 1,2, ale 1,350 → 1,4).",
    "type": "choice"
  },
  {
    "id": 79,
    "lectureId": 6,
    "lectureTitle": "Niepewność pomiaru i zasady zapisu wyniku",
    "question": "W wyniku pomiaru rezystancji otrzymano wartość \\(R = 5335{,}777\\,\\Omega\\) oraz złożoną niepewność standardową \\(u_c(R) = 55{,}7778\\,\\Omega\\). Oblicz prawidłowo zaokrągloną w górę niepewność rozszerzoną \\(U\\) dla współczynnika rozszerzenia \\(k = 2\\). Wynik podaj w omach [Ω].",
    "image": null,
    "options": {
      "A": "Z niepewnością standardową: R = 5335,8(55,8) Ω; z rozszerzoną (k = 2): R = (5336 ± 112) Ω",
      "B": "Z niepewnością standardową: R = 5336(56) Ω; z rozszerzoną (k = 2): U = 120 Ω, więc R = (5340 ± 120) Ω lub (5,34 ± 0,12) kΩ",
      "C": "Z niepewnością standardową: R = 5300(60) Ω; z rozszerzoną (k = 2): R = (5300 ± 200) Ω",
      "D": "Z niepewnością standardową: R = 5335,777(56) Ω; z rozszerzoną (k = 2): R = (5335,78 ± 111,55) Ω"
    },
    "correct": "B",
    "explanation": "Dla \\(k = 2\\) niepewność rozszerzona przed zaokrągleniem wynosi:\n\\[U = k \\cdot u_c(R) = 2 \\cdot 55{,}7778\\,\\Omega = 111{,}5556\\,\\Omega\\]\nZaokrąglenie do 1 cyfry znaczącej (\\(200\\,\\Omega\\)) zwiększyłoby \\(U\\) o blisko \\(80\\%\\) (\\(> 20\\%\\)), dlatego zaokrąglamy w górę do 2 cyfr znaczących: \\(U = 120\\,\\Omega\\) (na slajdzie 23 wykładu w06 podano wprost niepewność standardową \\(R = 5336(56)\\,\\Omega\\) oraz rozszerzoną \\(U = 120\\,\\Omega\\)).\nPrawidłowy zapis wyniku: \\(R = (5340 \\pm 120)\\,\\Omega = (5{,}34 \\pm 0{,}12)\\text{ k}\\Omega\\).",
    "type": "open",
    "numericTarget": 120,
    "acceptedNumbers": [
      120,
      111.56,
      111.55
    ],
    "tolerance": 0.01,
    "toleranceAbs": 0.5,
    "unit": "Ω",
    "openAnswerText": "120 Ω (dokł. 111,56 Ω → w górę do 2 cyfr znacz.: 120 Ω; zapis: (5340 ± 120) Ω)"
  },
  {
    "id": 80,
    "lectureId": 6,
    "lectureTitle": "Niepewność pomiaru i zasady zapisu wyniku",
    "question": "W pomiarze napięcia uzyskano estymatę \\(U = 5{,}0148\\text{ V}\\) oraz złożoną niepewność standardową \\(u_c = 0{,}0017\\text{ V}\\). Oblicz prawidłowo zaokrągloną w górę niepewność rozszerzoną \\(U_{\\text{rozsz}}\\) dla współczynnika rozszerzenia \\(k = 3\\). Wynik podaj w woltach [V].",
    "image": null,
    "options": {
      "A": "U = (5,015 ± 0,006) V lub U = 5,015 V ± 6 mV, ponieważ Urozsz = 3 · 0,0017 V = 0,0051 V, a zaokrąglenie w górę do 1 cyfry znaczącej (0,006 V) zwiększa niepewność o mniej niż 20%",
      "B": "U = (5,0148 ± 0,0051) V",
      "C": "U = (5,01 ± 0,01) V",
      "D": "U = (5,015 ± 0,005) V, ponieważ 0,0051 V zaokrągla się w dół do 0,005 V"
    },
    "correct": "A",
    "explanation": "Dla \\(k = 3\\) niepewność rozszerzona przed zaokrągleniem wynosi:\n\\[U_{\\text{rozsz}} = 3 \\cdot 0{,}0017\\text{ V} = 0{,}0051\\text{ V}\\]\nZaokrąglenie w górę do jednej cyfry znaczącej daje \\(0{,}006\\text{ V}\\) (wzrost o \\((6 - 5{,}1)/5{,}1 \\approx 17{,}6\\% < 20\\%\\)). Wynik pomiaru zaokrąglamy do trzeciego miejsca po przecinku: \\(U = (5{,}015 \\pm 0{,}006)\\text{ V}\\).",
    "type": "open",
    "numericTarget": 0.006,
    "acceptedNumbers": [
      0.006,
      0.0051
    ],
    "tolerance": 0.02,
    "toleranceAbs": 0.0001,
    "unit": "V",
    "openAnswerText": "0,006 V (zapis wyniku: (5,015 ± 0,006) V)"
  },
  {
    "id": 81,
    "lectureId": 6,
    "lectureTitle": "Niepewność pomiaru i zasady zapisu wyniku",
    "question": "Jak na osi liczbowej przedstawiającej wielokrotne pomiary x1, x2, ..., xn interpretuje się wynik skrajnie odległy xb oraz przesunięcie średniej arytmetycznej x̄ o wartość błędu systematycznego Δxs?",
    "image": null,
    "options": {
      "A": "Wartość xb to błąd gruby (który należy odrzucić przed uśrednianiem), a odjęcie znanego błędu systematycznego Δxs od średniej x̄ pozwala wyznaczyć skorygowaną estymatę x, wokół której odkłada się przedział niepewności u(x)",
      "B": "Wartość xb to najlepsza estymata wielkości mierzonej, a błąd systematyczny Δxs poszerza rozrzut przypadkowy",
      "C": "Wartość xb należy pomnożyć przez współczynnik rozszerzenia k, a Δxs jest zawsze równe zeru",
      "D": "Średnią arytmetyczną x̄ oblicza się wyłącznie z błędu grubego xb i błędu systematycznego Δxs"
    },
    "correct": "A",
    "explanation": "Na wykresie interpretacji wyników pomiaru punkt xb leżący daleko poza skupiskiem x1..xn oznacza błąd gruby (pomyłkę), który eliminuje się z analizy. Średnia z poprawnych pomiarów x̄ jest przesunięta o błąd systematyczny Δxs względem poprawnej estymaty x = x̄ - Δxs, wokół której wyznacza się przedział niepewności u(x).",
    "type": "choice"
  },
  {
    "id": 82,
    "lectureId": 6,
    "lectureTitle": "Niepewność pomiaru i zasady zapisu wyniku",
    "question": "Co oznacza zapis wyniku pomiaru napięcia w postaci nawiasowej U = 5,015(2) V?",
    "image": null,
    "options": {
      "A": "Pomiar został powtórzony dokładnie 2 razy",
      "B": "Cyfra w nawiasie określa niepewność standardową odniesioną do ostatniej cyfry znaczącej wyniku, czyli wynik wynosi 5,015 V, a niepewność standardowa u(U) = 0,002 V (2 mV)",
      "C": "Niepewność pomiaru wynosi 2 V",
      "D": "Wynik należy pomnożyć przez 2, aby uzyskać wartość skuteczną"
    },
    "correct": "B",
    "explanation": "W zalecanym przez GUM zapisie nawiasowym liczba w nawiasie odpowiada niepewności standardowej wyrażonej w jednostkach ostatnich cyfr podanej estymaty. Ponieważ 5,015 V jest zapisane z dokładnością do części tysięcznych (0,001 V), zapis (2) oznacza u(U) = 0,002 V.",
    "type": "choice"
  },
  {
    "id": 83,
    "lectureId": 6,
    "lectureTitle": "Niepewność pomiaru i zasady zapisu wyniku",
    "question": "Dlaczego we wzorze na eksperymentalne odchylenie standardowe pojedynczego pomiaru s(xi) = √( [1/(n-1)] · Σ(xi - x̄)² ) w mianowniku pod pierwiastkiem występuje (n - 1), a we wzorze na niepewność typu A średniej s(x̄) występuje iloczyn n(n - 1)?",
    "image": null,
    "options": {
      "A": "Ponieważ dla n = 1 niepewność typu A musi być równa dokładnie zero",
      "B": "Ponieważ zawsze odrzuca się pierwszy i ostatni pomiar z każdej serii",
      "C": "Ponieważ (n - 1) to liczba stopni swobody dla próby o znanej średniej x̄, a niepewność standardowa średniej arytmetycznej jest √n-krotnie mniejsza od odchylenia standardowego pojedynczego pomiaru: s(x̄) = s(xi) / √n",
      "D": "Jest to błąd drukarski – w mianowniku powinno zawsze występować n³"
    },
    "correct": "C",
    "explanation": "Odchylenie standardowe pojedynczej obserwacji estymuje się z (n - 1) stopniami swobody (estymator nieobciążony σn-1). Ponieważ najlepszą estymatą wielkości mierzonej jest średnia arytmetyczna x̄ z n pomiarów, jej odchylenie standardowe (czyli niepewność typu A) maleje proporcjonalnie do √n: ui = s(x̄) = s(xi)/√n.",
    "type": "choice"
  },
  {
    "id": 84,
    "lectureId": 6,
    "lectureTitle": "Niepewność pomiaru i zasady zapisu wyniku",
    "question": "Jak oblicza się niepewność standardową typu B (uj) wynikającą z błędu granicznego przyrządu ΔXgr przy standardowym założeniu jednostajnego (prostokątnego) rozkładu prawdopodobieństwa błędów w przedziale [-ΔXgr, +ΔXgr]?",
    "image": null,
    "options": {
      "A": "uj = ΔXgr · √3",
      "B": "uj = ΔXgr / √2",
      "C": "uj = ΔXgr / 2",
      "D": "uj = ΔXgr / √3"
    },
    "correct": "D",
    "explanation": "Dla rozkładu jednostajnego (prostokątnego) o półszerokości przedziału równej błędowi granicznemu ΔXgr wariancja wynosi (ΔXgr)² / 3, a odchylenie standardowe (czyli niepewność standardowa typu B) jest równe uj = ΔXgr / √3.",
    "type": "choice"
  },
  {
    "id": 85,
    "lectureId": 7,
    "lectureTitle": "Niepewność w pomiarach pośrednich i błąd metody",
    "question": "Wykonano serię \\(n = 5\\) pomiarów napięcia DC (średnia \\(U_{\\text{śr}} = 5{,}1328\\text{ V}\\)). Obliczone odchylenie standardowe próby wyniosło \\(s = 0{,}002410394\\text{ V}\\) (po zaokrągleniu w górę do 3 cyfr znaczących: \\(0{,}00242\\text{ V}\\)). Oblicz niepewność standardową typu A średniej \\(u_i(U_{\\text{śr}})\\) zaokrągloną w górę do 3 cyfr znaczących. Wynik podaj w woltach [V].",
    "image": null,
    "options": {
      "A": "s = 0,00241 V; ui(Uśr) = 0,00241 V",
      "B": "s = 0,00242 V (zaokrąglone w górę do 3 cyfr znaczących); ui(Uśr) = 0,00242 / √5 ≈ 0,00109 V",
      "C": "s = 0,003 V; ui(Uśr) = 0,003 / 5 = 0,0006 V",
      "D": "s = 0,00240 V; ui(Uśr) = 0,00240 · √5 ≈ 0,00537 V"
    },
    "correct": "B",
    "explanation": "W obliczeniach pośrednich niepewności zachowujemy 3 cyfry znaczące zaokrąglane w górę: \\(s = 0{,}002410394\\text{ V} \\to 0{,}00242\\text{ V}\\).\nDzielimy przez pierwiastek z liczby pomiarów (\\(\\sqrt{5}\\)):\n\\[u_i(U_{\\text{śr}}) = \\frac{0{,}00242\\text{ V}}{\\sqrt{5}} \\approx 0{,}001082\\text{ V} \\to 0{,}00109\\text{ V}\\]",
    "type": "open",
    "numericTarget": 0.00109,
    "acceptedNumbers": [
      0.00109,
      0.00108,
      0.0011
    ],
    "tolerance": 0.02,
    "toleranceAbs": 2e-05,
    "unit": "V",
    "openAnswerText": "0,00109 V (z 0,00242 / √5 ≈ 0,001082 V → w górę: 0,00109 V)"
  },
  {
    "id": 86,
    "lectureId": 7,
    "lectureTitle": "Niepewność w pomiarach pośrednich i błąd metody",
    "question": "Dla serii pomiarowej ze średnią \\(U_{\\text{śr}} = 5{,}1328\\text{ V}\\) uzyskano \\(u_i = 0{,}00109\\text{ V}\\) oraz \\(u_j = 0{,}00103\\text{ V}\\), skąd złożona niepewność standardowa wyniosła \\(u_c = 0{,}00150\\text{ V}\\). Oblicz końcową niepewność rozszerzoną \\(U\\) dla współczynnika rozszerzenia \\(k = 2\\). Wynik podaj w woltach [V].",
    "image": null,
    "options": {
      "A": "Z niepewnością standardową: Uzm = 5,1328(150) V; z niepewnością rozszerzoną: Uzm = (5,132 ± 0,003) V",
      "B": "Z niepewnością standardową: Uzm = 5,133(3) V; z niepewnością rozszerzoną: Uzm = (5,1328 ± 0,0030) V",
      "C": "Z niepewnością standardową: Uzm = 5,13(15) V; z niepewnością rozszerzoną: Uzm = (5,1 ± 0,3) V",
      "D": "Z niepewnością standardową: Uzm = 5,1328(15) V; z niepewnością rozszerzoną (k = 2, U = 0,003 V): Uzm = (5,133 ± 0,003) V lub 5,133 V ± 3 mV"
    },
    "correct": "D",
    "explanation": "Złożona niepewność standardowa:\n\\[u_c = \\sqrt{0{,}00109^2 + 0{,}00103^2} \\approx 0{,}001497\\text{ V} \\to 0{,}00150\\text{ V}\\]\nDla \\(k = 2\\) niepewność rozszerzona wynosi:\n\\[U = 2 \\cdot 0{,}00150\\text{ V} = 0{,}003\\text{ V}\\]\nZapis z niepewnością standardową: \\(5{,}1328(15)\\text{ V}\\); zapis z niepewnością rozszerzoną: \\((5{,}133 \\pm 0{,}003)\\text{ V}\\).",
    "type": "open",
    "numericTarget": 0.003,
    "acceptedNumbers": [
      0.003,
      0.0015
    ],
    "tolerance": 0.02,
    "toleranceAbs": 0.0001,
    "unit": "V",
    "openAnswerText": "0,003 V (zapis końcowy: (5,133 ± 0,003) V lub 5,1328(15) V)"
  },
  {
    "id": 87,
    "lectureId": 7,
    "lectureTitle": "Niepewność w pomiarach pośrednich i błąd metody",
    "question": "Który wzór wyraża prawo przenoszenia (propagacji) niepewności standardowej u(ȳ) w pomiarze pośrednim Y = f(X1, X2, ..., Xk), gdy mierzone bezpośrednio wielkości wejściowe Xi są nieskorelowane?",
    "image": null,
    "options": {
      "A": "u(ȳ) = √( Σ [ (∂f/∂Xi)² · u²(xi) ] )",
      "B": "u(ȳ) = Σ |∂f/∂Xi| · u(xi)",
      "C": "u(ȳ) = √( Σ u²(xi) ) bez uwzględniania pochodnych cząstkowych",
      "D": "u(ȳ) = Π (∂f/∂Xi) · u(xi)"
    },
    "correct": "A",
    "explanation": "Dla nieskorelowanych wielkości wejściowych wariancja wielkości wyjściowej u²(ȳ) jest sumą kwadratów iloczynów współczynników wrażliwości (pochodnych cząstkowych ∂f/∂Xi obliczonych dla wartości średnich) oraz niepewności standardowych u(xi): u(ȳ) = √( Σ (∂f/∂Xi)² · u²(xi) ).",
    "type": "choice"
  },
  {
    "id": 88,
    "lectureId": 7,
    "lectureTitle": "Niepewność w pomiarach pośrednich i błąd metody",
    "question": "Jak zmienia się wzór na niepewność złożoną pomiaru pośredniego Y = f(X1, ..., Xk), jeżeli mierzone wielkości wejściowe Xi oraz Xj są ze sobą skorelowane?",
    "image": null,
    "options": {
      "A": "Pochodne cząstkowe zastępuje się całkami oznaczonymi po czasie pomiaru",
      "B": "Niepewność całkowita staje się zawsze równa zeru dzięki wzajemnemu znoszeniu się błędów",
      "C": "Pod pierwiastkiem oprócz sumy kwadratów pojawia się podwójna suma wyrazów kowariancyjnych: 2 · Σᵢ<ⱼ (∂f/∂Xi)(∂f/∂Xj) · u(xi, xj), gdzie u(xi, xj) jest estymowaną kowariancją",
      "D": "Wystarczy pomnożyć wynik dla zmiennych nieskorelowanych przez liczbę zmiennych k"
    },
    "correct": "C",
    "explanation": "W przypadku skorelowanych wielkości wejściowych pełne prawo propagacji niepewności uwzględnia kowariancje u(xi, xj) = [1/(n(n-1))] Σ (xik - x̄i)(xjk - x̄j) poprzez dodatkowy człon 2 · Σᵢ₌₁ᵏ⁻¹ Σⱼ₌ᵢ₊₁ᵏ (∂f/∂Xi)(∂f/∂Xj) u(xi, xj) pod pierwiastkiem.",
    "type": "choice"
  },
  {
    "id": 89,
    "lectureId": 7,
    "lectureTitle": "Niepewność w pomiarach pośrednich i błąd metody",
    "question": "Rezystancję Rx wyznaczono metodą pośrednią z prawa Ohma Rx = Ux / Ix na podstawie nieskorelowanych pomiarów napięcia Ux i prądu Ix. Który wzór prawidłowo opisuje niepewność rozszerzoną U(R̄x)?",
    "image": null,
    "options": {
      "A": "U(R̄x) = √( U²(Ux) + U²(Ix) )",
      "B": "U(R̄x) = U(Ux) / U(Ix)",
      "C": "U(R̄x) = √( [ (1 / Ix) · U(Ux) ]² + [ (Ux / Ix²) · U(Ix) ]² )",
      "D": "U(R̄x) = (1 / Ix) · U(Ux) - (Ux / Ix²) · U(Ix)"
    },
    "correct": "C",
    "explanation": "Obliczamy pochodne cząstkowe funkcji Rx = Ux / Ix: ∂Rx/∂Ux = 1/Ix oraz ∂Rx/∂Ix = -Ux/Ix². Podstawiając je do prawa propagacji niepewności (po podniesieniu do kwadratu znak minus znika), otrzymujemy U(R̄x) = √( [(1/Ix)·U(Ux)]² + [(Ux/Ix²)·U(Ix)]² ).",
    "type": "choice"
  },
  {
    "id": 90,
    "lectureId": 7,
    "lectureTitle": "Niepewność w pomiarach pośrednich i błąd metody",
    "question": "Jaka jest przyczyna powstawania tzw. błędu metody podczas pomiaru napięcia realnego źródła (o sile elektromotorycznej Up i rezystancji wewnętrznej Rw) za pomocą woltomierza o skończonej rezystancji wewnętrznej Rv?",
    "image": null,
    "options": {
      "A": "Po dołączeniu woltomierza płynie prąd I = Up / (Rw + Rv), który wywołuje spadek napięcia ΔU = I·Rw na rezystancji wewnętrznej źródła, przez co woltomierz wskazuje napięcie U = Up - I·Rw mniejsze od Up",
      "B": "Woltomierz generuje własny prąd, który podnosi napięcie źródła ponad wartość Up",
      "C": "Błąd metody wynika wyłącznie z niedokładnego odczytu pozycji wskazówki przez obserwatora",
      "D": "Rezystancja wewnętrzna woltomierza Rv dodaje się szeregowo do napięcia mierzonego"
    },
    "correct": "A",
    "explanation": "Każdy realny woltomierz o skończonej rezystancji Rv pobiera z badanego obwodu prąd I = Up / (Rw + Rv). Prąd ten powoduje spadek napięcia na rezystancji wewnętrznej źródła Rw, wobec czego na zaciskach woltomierza pojawia się napięcie obniżone względem SEM źródła Up.",
    "type": "choice"
  },
  {
    "id": 91,
    "lectureId": 7,
    "lectureTitle": "Niepewność w pomiarach pośrednich i błąd metody",
    "question": "Jaki znak ma systematyczny błąd metody ΔUs = U - Up oraz względny błąd metody δUs przy pomiarze napięcia źródła o rezystancji wewnętrznej Rw woltomierzem o rezystancji Rv i jaki warunek musi być spełniony, aby błąd ten był pomijalnie mały?",
    "image": null,
    "options": {
      "A": "Błąd jest zawsze dodatni; maleje gdy Rv << Rw",
      "B": "Błąd zależy wyłącznie od klasy dokładności woltomierza, a nie od stosunku Rw do Rv",
      "C": "Błąd zmienia znak losowo w każdym pomiarze; znika gdy Rv = Rw",
      "D": "Błąd jest zawsze ujemny: δUs = -[Rw / (Rw + Rv)] · 100%; jest on tym mniejszy, im rezystancja wewnętrzna woltomierza Rv jest większa w stosunku do rezystancji źródła Rw (Rv >> Rw)"
    },
    "correct": "D",
    "explanation": "Ponieważ napięcie zmierzone U = Up·Rv/(Rw + Rv) jest zawsze mniejsze od Up, błąd bezwzględny ΔUs = U - Up = -I·Rw = -Up·Rw/(Rw + Rv) oraz błąd względny δUs = -Rw/(Rw + Rv)·100% mają zawsze znak ujemny (mierzymy za mało). Aby zminimalizować ten błąd, musi zachodzić warunek Rv >> Rw. (Uwaga: na slajdzie 19 wykładu w07 we wzorze pośrednim na ΔUs wkradła się literówka w znaku mianownika: napisano Rw − Rv zamiast Rw + Rv; natomiast wzór na prąd I = Up/(Rw + Rv) na slajdzie 18 oraz wzór końcowy na δUs na slajdzie 19 mają poprawny znak plus).",
    "type": "choice"
  },
  {
    "id": 92,
    "lectureId": 7,
    "lectureTitle": "Niepewność w pomiarach pośrednich i błąd metody",
    "question": "Dlaczego podczas pomiaru małej rezystancji Rx metodą techniczną w układzie poprawnie mierzonego prądu (woltomierz obejmuje zarówno rezystor Rx, jak i szeregowy amperomierz o rezystancji RA) popełniamy systematyczny błąd metody?",
    "image": null,
    "options": {
      "A": "Ponieważ amperomierz mierzy prąd płynący przez woltomierz",
      "B": "Ponieważ woltomierz mierzy sumę spadków napięć na rezystorze Rx oraz na amperomierzu (U = Ux + UA), przez co obliczona rezystancja R = U / I = Rx + RA jest zawsze zawyżona o rezystancję amperomierza RA",
      "C": "Ponieważ obliczona rezystancja jest zawsze zaniżona o rezystancję woltomierza Rv",
      "D": "W układzie poprawnie mierzonego prądu błąd metody jest zawsze równy zeru"
    },
    "correct": "B",
    "explanation": "W układzie poprawnie mierzonego prądu amperomierz mierzy dokładny prąd I płynący przez Rx, ale woltomierz mierzy napięcie U powiększone o spadek napięcia na amperomierzu UA = I·RA. Stąd bezwzględny błąd metody wynosi ΔRsa = U/I - (U - UA)/I = UA/I = RA.",
    "type": "choice"
  },
  {
    "id": 93,
    "lectureId": 7,
    "lectureTitle": "Niepewność w pomiarach pośrednich i błąd metody",
    "question": "Ile wynosi względny błąd metody δRsa w układzie poprawnie mierzonego prądu i do jakich rezystancji Rx układ ten powinien być stosowany?",
    "image": null,
    "options": {
      "A": "δRsa = -(Rx / Rv) · 100%; układ ten nie zależy od rezystancji amperomierza",
      "B": "δRsa = -(RA / Rx) · 100% (zawsze ujemny); układ ten stosuje się do pomiaru bardzo małych rezystancji (Rx << RA)",
      "C": "δRsa = (Rx / RA) · 100%; układ ten stosuje się tylko wtedy, gdy Rx = RA",
      "D": "δRsa = (RA / Rx) · 100% (zawsze dodatni – mierzymy za dużo); układ ten należy stosować do pomiaru dużych rezystancji, spełniających warunek Rx >> RA"
    },
    "correct": "D",
    "explanation": "Dzieląc błąd bezwzględny ΔRsa = RA przez wartość poprawną Rx, otrzymujemy δRsa = (RA / Rx)·100%. Błąd ten jest zawsze dodatni (wynik zawyżony o RA) i staje się pomijalnie mały, gdy mierzona rezystancja Rx jest znacznie większa od rezystancji wewnętrznej amperomierza RA (Rx >> RA).",
    "type": "choice"
  },
  {
    "id": 94,
    "lectureId": 7,
    "lectureTitle": "Niepewność w pomiarach pośrednich i błąd metody",
    "question": "Jaki błąd metody popełniamy podczas pomiaru rezystancji Rx metodą techniczną w układzie poprawnie mierzonego napięcia (woltomierz o rezystancji Rv dołączony bezpośrednio równolegle do Rx, a amperomierz mierzy prąd całkowity I = Ix + Iv)?",
    "image": null,
    "options": {
      "A": "Błąd bezwzględny jest zawsze dodatni i równy Rv",
      "B": "W układzie poprawnie mierzonego napięcia prąd woltomierza Iv jest równy zeru dla każdego miernika analogowego",
      "C": "Błąd bezwzględny wynosi ΔRsv = -Rx² / (Rx + Rv), a błąd względny δRsv = -[Rx / (Rx + Rv)] · 100%; błąd ten jest zawsze ujemny (mierzymy za mało), a układ nadaje się do pomiaru małych rezystancji (Rx << Rv)",
      "D": "Błąd względny wynosi +[Rv / (Rx + Rv)] · 100% i układ nadaje się wyłącznie do pomiaru rezystancji izolacji rzędu megaomów"
    },
    "correct": "C",
    "explanation": "W układzie poprawnie mierzonego napięcia amperomierz wskazuje sumę prądów I = Ix + Iv, więc obliczona rezystancja R = U/I jest w istocie równoległym połączeniem Rx oraz Rv. Błąd bezwzględny ΔRsv = U/I - U/(I - Iv) = -Rx²/(Rx + Rv) oraz względny δRsv = -Rx/(Rx + Rv)·100% są zawsze ujemne (mierzymy za mało) i maleją, gdy Rx << Rv.",
    "type": "choice"
  },
  {
    "id": 95,
    "lectureId": 7,
    "lectureTitle": "Niepewność w pomiarach pośrednich i błąd metody",
    "question": "W jaki sposób możemy wyeliminować systematyczny błąd metody (np. przy pomiarze rezystancji metodą techniczną), jeżeli znamy rezystancję wewnętrzną zastosowanego amperomierza RA lub woltomierza Rv?",
    "image": null,
    "options": {
      "A": "Poprzez wykonanie serii 100 pomiarów tymi samymi przyrządami i obliczenie średniej arytmetycznej",
      "B": "Poprzez wprowadzenie poprawki do wzoru obliczeniowego: Rx = U / I - RA (w układzie poprawnie mierzonego prądu) lub Rx = U / (I - U/Rv) (w układzie poprawnie mierzonego napięcia)",
      "C": "Poprzez pomnożenie wyniku przez współczynnik rozszerzenia k = 3",
      "D": "Błędu metody nie da się skorygować żadnym wzorem, nawet gdy znamy dokładne wartości RA i Rv"
    },
    "correct": "B",
    "explanation": "Błąd metody ma charakter błędu systematycznego o znanej przyczynie fizycznej. Znając rezystancję wewnętrzną RA lub Rv, możemy obliczyć dokładną wartość poprawki (odpowiednio odjąć spadek napięcia UA = I·RA od wskazania woltomierza lub odjąć prąd Iv = U/Rv od wskazania amperomierza).",
    "type": "choice"
  },
  {
    "id": 96,
    "lectureId": 7,
    "lectureTitle": "Niepewność w pomiarach pośrednich i błąd metody",
    "question": "Chcemy zmierzyć metodą techniczną rezystor \\(R_x \\approx 10\\,\\Omega\\), dysponując amperomierzem o rezystancji wewnętrznej \\(R_A = 2\\,\\Omega\\) oraz woltomierzem o rezystancji wewnętrznej \\(R_v = 10\\text{ k}\\Omega\\). Korzystniejszy układ to układ poprawnie mierzonego napięcia. Oblicz względny błąd metody \\(\\delta R_{sv}\\) w tym układzie (bez wprowadzania poprawki). Wynik podaj w procentach [%].",
    "image": null,
    "options": {
      "A": "Układ poprawnie mierzonego napięcia; błąd względny metody wyniesie δRsv = -10 / (10 + 10000) · 100% ≈ -0,1%, podczas gdy w układzie poprawnie mierzonego prądu wyniósłby aż +20%",
      "B": "Oba układy dadzą identyczny błąd względny równy 1%",
      "C": "Układ poprawnie mierzonego prądu; błąd wyniesie +0,1%",
      "D": "Układ poprawnie mierzonego prądu; błąd wyniesie -20%"
    },
    "correct": "A",
    "explanation": "Sprawdzamy oba układy:\n• Układ poprawnie mierzonego prądu: \\(\\delta R_{sa} = \\frac{R_A}{R_x} \\cdot 100\\% = \\frac{2}{10} \\cdot 100\\% = +20\\%\\).\n• Układ poprawnie mierzonego napięcia (korzystny dla \\(R_x \\ll R_v\\)):\n\\[\\delta R_{sv} = -\\frac{R_x}{R_x + R_v} \\cdot 100\\% = -\\frac{10}{10 + 10000} \\cdot 100\\% \\approx -0{,}1\\%\\]",
    "type": "open",
    "numericTarget": -0.1,
    "acceptedNumbers": [
      -0.1,
      0.1,
      -0.0999,
      0.0999
    ],
    "tolerance": 0.05,
    "toleranceAbs": 0.01,
    "unit": "%",
    "openAnswerText": "-0,1% (dla porównania w układzie poprawnie mierzonego prądu błąd wyniósłby +20%)"
  },
  {
    "id": 97,
    "lectureId": 7,
    "lectureTitle": "Niepewność w pomiarach pośrednich i błąd metody",
    "question": "W przykładzie z wykładu obliczono dla średniej \\(U_{\\text{śr}} = 5{,}1328\\text{ V}\\) (na zakresie \\(10\\text{ V}\\) multimetru o rocznej specyfikacji \\(0{,}025\\% + 0{,}005\\%\\)) błąd graniczny \\(\\Delta U_{\\text{gr}} = 0{,}0017832\\text{ V} \\to 0{,}00179\\text{ V}\\). Oblicz wyznaczoną z niego niepewność standardową typu B \\(u_j(U_{\\text{śr}})\\). Wynik podaj w woltach [V].",
    "image": null,
    "options": {
      "A": "uj(Uśr) = 0,00179 V / √3 ≈ 0,00103 V",
      "B": "uj(Uśr) = 0,00179 V · √3 ≈ 0,00310 V",
      "C": "uj(Uśr) = 0,00179 V / √5 ≈ 0,000801 V",
      "D": "uj(Uśr) = 0,00179 V"
    },
    "correct": "A",
    "explanation": "Niepewność standardową typu B wyznacza się z błędu granicznego \\(\\Delta U_{\\text{gr}} = 0{,}00179\\text{ V}\\) przy założeniu rozkładu prostokątnego, dzieląc przez \\(\\sqrt{3}\\):\n\\[u_j(U_{\\text{śr}}) = \\frac{0{,}00179\\text{ V}}{\\sqrt{3}} \\approx 0{,}001033\\text{ V} \\approx 0{,}00103\\text{ V}\\]",
    "type": "open",
    "numericTarget": 0.00103,
    "acceptedNumbers": [
      0.00103,
      0.00104,
      0.001
    ],
    "tolerance": 0.02,
    "toleranceAbs": 2e-05,
    "unit": "V",
    "openAnswerText": "0,00103 V (lub 0,00104 V przy zaokrągleniu w górę)"
  },
  {
    "id": 98,
    "lectureId": 7,
    "lectureTitle": "Niepewność w pomiarach pośrednich i błąd metody",
    "question": "Dlaczego w obliczeniach pośrednich złożonej niepewności standardowej uc = 0,00150 V ostatnie zero na piątym miejscu po przecinku zostało zachowane przed pomnożeniem przez współczynnik rozszerzenia k?",
    "image": null,
    "options": {
      "A": "Ponieważ zera wiodące z przodu ułamka (0,00...) są zawsze cyframi znaczącymi",
      "B": "Ponieważ w obliczeniach pośrednich zachowujemy 3 cyfry znaczące, a zero stojące na końcu ułamka dziesiętnego po cyfrach 1 i 5 (0,00150) jest trzecią cyfrą znaczącą",
      "C": "Jest to wyłącznie zabieg estetyczny niemający znaczenia dla liczby cyfr znaczących",
      "D": "Ponieważ każda niepewność musi mieć dokładnie pięć miejsc po przecinku"
    },
    "correct": "B",
    "explanation": "Zera wiodące (przed pierwszą niezerową cyfrą) nie są cyframi znaczącymi. W liczbie 0,00150 V pierwszymi dwiema cyframi znaczącymi są 1 oraz 5, natomiast końcowe zero jest trzecią cyfrą znaczącą, świadczącą o dokładności obliczeń pośrednich.",
    "type": "choice"
  },
  {
    "id": 99,
    "lectureId": 8,
    "lectureTitle": "Przetwarzanie A/C i C/A oraz przyrządy cyfrowe",
    "question": "Jaką wielką zaletę technologiczną ma przetwornik cyfrowo-analogowy (C/A) z drabinką rezystorową R-2R oraz jakim wzorem opisane jest jego napięcie wyjściowe Uwy dla N-bitowego słowa wejściowego (a1, a2, ..., aN)?",
    "image": null,
    "options": {
      "A": "Wymaga N różnych rezystorów o wartościach od R do 2ᴺ·R; Uwy = Uref · Σ ai · 2ⁱ",
      "B": "Nie wymaga w ogóle źródła napięcia odniesienia Uref; Uwy = Σ ai",
      "C": "Wykorzystuje rezystory o zaledwie dwóch wartościach rezystancji: R oraz 2R (np. 10 kΩ i 20 kΩ), co ułatwia ich precyzyjne wykonanie w układzie scalonym; napięcie wyjściowe wynosi Uwy = Uref · Σᵢ₌₁ᴺ (ai · 2⁻ⁱ), gdzie a1 to MSB, a aN to LSB",
      "D": "Zbudowany jest wyłącznie z kondensatorów i cewek indukcyjnych"
    },
    "correct": "C",
    "explanation": "Drabinka R-2R wymaga zastosowania rezystorów o tylko dwóch nominalech (R i 2R, np. 10 kΩ i 20 kΩ), dzięki czemu łatwo uzyskać wysoką dokładność ich stosunku niezależnie od liczby bitów N. Kolejne klucze od S-1 (MSB) do S-N (LSB) wnoszą wagi 2⁻¹, 2⁻², ..., 2⁻ᴺ napięcia Uref.",
    "type": "choice"
  },
  {
    "id": 100,
    "lectureId": 8,
    "lectureTitle": "Przetwarzanie A/C i C/A oraz przyrządy cyfrowe",
    "question": "Jak w klasyfikacji metod przetwarzania analogowo-cyfrowego (A/C) dzieli się metody bezpośrednie (U → N), a jak metody pośrednie (U → wielkość pośrednia → N)?",
    "image": null,
    "options": {
      "A": "Metody bezpośrednie nie używają komparatorów, a pośrednie nie używają liczników",
      "B": "Metody bezpośrednie to wyłącznie podwójne całkowanie, a metody pośrednie to przetworniki równoległe Flash",
      "C": "Metody bezpośrednie mierzą tylko prąd przemienny, a pośrednie tylko napięcie stałe",
      "D": "Metody bezpośrednie dzielą się na kompensacyjne (z kompensacją równomierną, z kompensacją wagową) oraz porównania bezpośredniego (równoległa, szeregowa, szeregowo-równoległa); natomiast metody pośrednie dzielą się na czasowe (proste, z podwójnym/wielokrotnym całkowaniem) oraz częstotliwościowe (proste, z równoważeniem ładunku, Delta-Sigma)"
    },
    "correct": "D",
    "explanation": "Zgodnie ze schematem klasyfikacji z wykładu: przetwarzanie bezpośrednie (U → N) obejmuje metody kompensacyjne (równomierna, wagowa) i porównania bezpośredniego (równoległa, szeregowa, szeregowo-równoległa), zaś przetwarzanie pośrednie zamienia najpierw napięcie na czas (proste, podwójne/potrójne/wielokrotne całkowanie) lub na częstotliwość (proste, z równoważeniem ładunku, ΔΣ).",
    "type": "choice"
  },
  {
    "id": 101,
    "lectureId": 8,
    "lectureTitle": "Przetwarzanie A/C i C/A oraz przyrządy cyfrowe",
    "question": "Jak działa komparator napięcia K oraz bramka logiczna AND stanowiące podstawowe bloki funkcjonalne przetworników A/C?",
    "image": null,
    "options": {
      "A": "Komparator sumuje dwa napięcia cyfrowe, a bramka AND daje stan 1, gdy przynajmniej jedno wejście jest równe 0",
      "B": "Komparator porównuje dwa napięcia analogowe (dla U1 < U2 wyjście Y = 0, a dla U1 > U2 wyjście Y = 1), natomiast bramka AND przepuszcza impulsy (Y = 1) wyłącznie wtedy, gdy na obu jej wejściach A i B panuje stan wysoki (1)",
      "C": "Komparator całkuje sygnał po czasie, a bramka AND mnoży napięcie przez częstotliwość",
      "D": "Oba układy są elementami wyłącznie biernymi zbudowanymi z rezystorów"
    },
    "correct": "B",
    "explanation": "Komparator K ma wejścia analogowe i wyjście dwustanowe (cyfrowe): zmienia stan z 0 na 1 w chwili, gdy napięcie U1 przekroczy napięcie progowe U2. Bramka iloczynu logicznego AND pełni w przetwornikach rolę klucza zliczającego: przepuszcza impulsy zegarowe do licznika tylko wtedy, gdy wejście sterujące z komparatora/układu sterowania ma stan 1.",
    "type": "choice"
  },
  {
    "id": 102,
    "lectureId": 8,
    "lectureTitle": "Przetwarzanie A/C i C/A oraz przyrządy cyfrowe",
    "question": "Na czym polega działanie przetwornika A/C z kompensacją równomierną (schodkową) i jakie są jego główne wady?",
    "image": null,
    "options": {
      "A": "Przetwornik całkuje napięcie wejściowe przez stały czas Tp, dzięki czemu jest całkowicie odporny na zakłócenia sieciowe",
      "B": "Napięcie Ux porównywane jest jednocześnie z 2ⁿ komparatorami w jednym takcie zegara; wadą jest zbyt duża szybkość działania",
      "C": "Przetwarza n bitów w dokładnie n krokach, zaczynając od bitu najbardziej znaczącego MSB",
      "D": "Wewnętrzny przetwornik C/A wytwarza narastające schodkowo napięcie kompensujące Uk; dopóki Uk < Ux, impulsy zegara są zliczane przez licznik. Główne wady to długi czas przetwarzania (2ⁿ taktów dla n bitów), konieczność odczekania do końca cyklu oraz wymóg stałości Ux w czasie konwersji"
    },
    "correct": "D",
    "explanation": "W metodzie kompensacji równomiernej licznik zlicza impulsy od zera, a wewnętrzny przetwornik C/A generuje narastające schodkowo napięcie Uk. Gdy Uk przekroczy Ux, bramka zostaje zablokowana. Układ jest prosty, ale wolny (pełny cykl trwa 2ⁿ kroków zegara) i wymaga niezmiennego napięcia Ux.",
    "type": "choice"
  },
  {
    "id": 103,
    "lectureId": 8,
    "lectureTitle": "Przetwarzanie A/C i C/A oraz przyrządy cyfrowe",
    "question": "Przetwornik C/A lub A/C o rozdzielczości \\(n = 12\\text{ bitów}\\) odwzorowuje napięcie na \\(2^n\\) stanów (poziomów), co w metodzie z kompensacją równomierną oznacza do \\(2^n\\) kroków zegara (podczas gdy przetwornik z kompensacją wagową SAR wyznacza wynik od MSB do LSB w zaledwie \\(n = 12\\) krokach). Oblicz całkowitą liczbę poziomów kwantowania \\(2^n\\) dla przetwornika 12-bitowego.",
    "image": null,
    "options": {
      "A": "4096 poziomów (2¹² = 4096)",
      "B": "1024 poziomy",
      "C": "2048 poziomów",
      "D": "12 poziomów"
    },
    "correct": "A",
    "explanation": "Liczba rozróżnialnych poziomów (stanów binarnych) przetwornika \\(n\\)-bitowego wynosi \\(2^n = 2^{12} = 4096\\).\nW metodzie z kompensacją równomierną pełny cykl przetwarzania może wymagać aż \\(4096\\) taktów zegara, natomiast w metodzie z kompensacją wagową (sukcesywnej aproksymacji – SAR) kolejne bity od najstarszego (MSB, o wadze \\(\\tfrac{1}{2} U_{\\text{ref}}\\)) do najmłodszego (LSB) wyznacza się jak na wadze szalkowej w zaledwie \\(n = 12\\) krokach (w10, slajdy 11–15).",
    "type": "open",
    "numericTarget": 4096,
    "acceptedNumbers": [
      4096
    ],
    "tolerance": 0.01,
    "toleranceAbs": 0.5,
    "unit": "poziomów",
    "openAnswerText": "4096 poziomów (2¹² = 4096; dla porównania SAR potrzebuje n = 12 kroków)"
  },
  {
    "id": 104,
    "lectureId": 8,
    "lectureTitle": "Przetwarzanie A/C i C/A oraz przyrządy cyfrowe",
    "question": "Jak zbudowany jest układ próbkująco-pamiętający (Sample-and-Hold, S&H) i jaką rolę pełni on przed wejściem przetwornika A/C (np. z kompensacją wagową)?",
    "image": null,
    "options": {
      "A": "Składa się z transformatora sieciowego i prostownika dwupołówkowego",
      "B": "Składa się wyłącznie z dzielnika rezystorowego R-2R i służy do generowania sygnału zegarowego",
      "C": "Składa się z dwóch wzmacniaczy operacyjnych pracujących jako wtórniki napięciowe (W1, W2), klucza analogowego P oraz kondensatora pamiętającego C; jego zadaniem jest utrzymanie stałej wartości pobranej próbki napięcia u(tj) przez cały czas trwania konwersji A/C",
      "D": "Służy do zamiany sygnału cyfrowego z powrotem na sygnał schodkowy na ekranie LCD"
    },
    "correct": "C",
    "explanation": "Zmiana napięcia wejściowego w trakcie pracy przetwornika kompensacyjnego wywołałaby duży błąd konwersji. Układ S&H w chwili próbkowania zamyka klucz P, ładując kondensator C przez wtórnik W1 do wartości chwilowej u(tj), a po otwarciu klucza wtórnik W2 o bardzo dużej rezystancji wejściowej utrzymuje to napięcie na stałym poziomie aż do zakończenia przetwarzania.",
    "type": "choice"
  },
  {
    "id": 105,
    "lectureId": 8,
    "lectureTitle": "Przetwarzanie A/C i C/A oraz przyrządy cyfrowe",
    "question": "Z jakich dwóch etapów składa się cykl pracy przetwornika A/C z podwójnym całkowaniem (dual-slope) i jakim wzorem wyraża się czas rozładowania Tx w drugim etapie?",
    "image": null,
    "options": {
      "A": "W etapie I mierzona jest częstotliwość sieci, a w etapie II rezystancja wejściowa wzmacniacza",
      "B": "W etapie I całkowane jest napięcie Uref przez czas zmienny, a w etapie II napięcie Ux przez czas stały",
      "C": "W etapie I przez stały, określony czas Tp całkowane jest napięcie wejściowe Ux, a w etapie II układ całkujący jest rozładowywany napięciem odniesienia -Uref o przeciwnym znaku aż do osiągnięcia zera przez mierzony czas Tx = Tp · (Ux / Uref)",
      "D": "Oba etapy polegają na jednoczesnym ładowaniu dwóch różnych kondensatorów przez czas 1 nanosekundy"
    },
    "correct": "C",
    "explanation": "W przetworniku z podwójnym całkowaniem najpierw integruje się napięcie mierzone Ux przez ściśle określony czas Tp (napięcie na wyjściu integratora rośnie liniowo do wartości proporcjonalnej do średniej z Ux). Następnie przełącznik podaje napięcie odniesienia -Uref i licznik zlicza impulsy zegara do chwili zrównania napięcia integratora z zerem przez czas Tx = Tp · (Ux / Uref).",
    "type": "choice"
  },
  {
    "id": 106,
    "lectureId": 8,
    "lectureTitle": "Przetwarzanie A/C i C/A oraz przyrządy cyfrowe",
    "question": "Dlaczego przetwornik A/C z podwójnym całkowaniem jest powszechnie stosowany w multimetrach cyfrowych i jaki warunek musi spełniać czas całkowania Tp, aby uzyskać tłumienie okresowych zakłóceń narzuconych (np. przydźwięku sieci 50 Hz)?",
    "image": null,
    "options": {
      "A": "Ponieważ uśrednia sygnał wejściowy w pierwszym etapie – jeżeli czas całkowania Tp jest całkowitą wielokrotnością okresu zakłóceń (czyli okres zakłóceń Tz jest podwielokrotnością Tp, np. Tp = 20 ms lub k·20 ms dla sieci 50 Hz), całka ze składowej przemiennej zakłócenia wynosi zero",
      "B": "Ponieważ jest najszybszym przetwornikiem na rynku (miliardy próbek na sekundę), a Tp musi wynosić 1 μs",
      "C": "Ponieważ nie wymaga źródła napięcia odniesienia Uref ani generatora impulsów zegarowych",
      "D": "Ponieważ tłumi wyłącznie zakłócenia o częstotliwości wyższej niż 10 GHz"
    },
    "correct": "A",
    "explanation": "Całka z przebiegu sinusoidalnego (zakłócenia sieciowego) po pełnym okresie Tz lub jego k-krotności jest równa zeru. Dobierając czas pierwszego całkowania Tp = k · Tz (np. 20 ms lub wielokrotność dla 50 Hz), przetwornik z podwójnym całkowaniem zapewnia bardzo wysoki współczynnik tłumienia zakłóceń narzuconych (NMRR), choć kosztem niewielkiej szybkości (ok. 3 pomiarów/s).",
    "type": "choice"
  },
  {
    "id": 107,
    "lectureId": 8,
    "lectureTitle": "Przetwarzanie A/C i C/A oraz przyrządy cyfrowe",
    "question": "Która metoda przetwarzania A/C charakteryzuje się największą szybkością działania dzięki jednoczesnemu porównaniu napięcia wejściowego Ux z zestawem napięć progowych na wielu komparatorach?",
    "image": null,
    "options": {
      "A": "Metoda czasowa prosta",
      "B": "Metoda kompensacji równomiernej",
      "C": "Metoda z podwójnym całkowaniem (dual-slope)",
      "D": "Metoda bezpośredniego porównania równoległego (przetwornik równoległy / Flash)"
    },
    "correct": "D",
    "explanation": "W przetworniku równoległym (Flash) dzielnik rezystorowy wytwarza wszystkie poziomy odniesienia jednocześnie, a zestaw komparatorów porównuje je z napięciem Ux w jednym kroku. Dekoder (koder) natychmiast zamienia stan wyjść komparatorów na kod binarny, co czyni tę metodę najszybszą ze wszystkich.",
    "type": "choice"
  },
  {
    "id": 108,
    "lectureId": 8,
    "lectureTitle": "Przetwarzanie A/C i C/A oraz przyrządy cyfrowe",
    "question": "Który z błędów przetwarzania analogowo-cyfrowego odpowiada za powstanie składowej multiplikatywnej (proporcjonalnej do wskazania), a który za powstanie składowej addytywnej (stałego przesunięcia charakterystyki) w równaniu błędu przyrządu cyfrowego?",
    "image": null,
    "options": {
      "A": "Błąd wzmocnienia występuje tylko przy zwartym wejściu (Ux = 0)",
      "B": "Błąd współczynnika skali / wzmocnienia (ΔUG, wynikający z niewłaściwego wzmocnienia wzmacniacza) tworzy składową multiplikatywną, natomiast błąd przesunięcia zera (ΔU0, wynikający z napięcia niezrównoważenia wzmacniacza) oraz błąd kwantowania tworzą składową addytywną",
      "C": "Oba błędy tworzą wyłącznie błąd gruby obserwatora",
      "D": "Błąd przesunięcia zera tworzy składową multiplikatywną, a błąd kwantowania zależy od kwadratu częstotliwości"
    },
    "correct": "B",
    "explanation": "Błąd przesunięcia zera ΔU0 przesuwa całą charakterystykę przetwarzania równolegle w górę lub w dół (stała wartość na całym zakresie – składnik addytywny). Błąd współczynnika skali (wzmocnienia) ΔUG zmienia nachylenie prostej przetwarzania, więc wywołany nim błąd rośnie proporcjonalnie do wartości sygnału wejściowego Ux (składnik multiplikatywny).",
    "type": "choice"
  },
  {
    "id": 109,
    "lectureId": 8,
    "lectureTitle": "Przetwarzanie A/C i C/A oraz przyrządy cyfrowe",
    "question": "Czym różni się przyczyna powstawania błędu nieliniowości różniczkowej (mogącego prowadzić do tzw. brakujących kodów) od przyczyny błędu nieliniowości całkowej (ΔUMAX) w przetwornikach A/C?",
    "image": null,
    "options": {
      "A": "Oba błędy wynikają wyłącznie z wyczerpania baterii w wyświetlaczu LCD",
      "B": "Błąd brakujących kodów polega na uszkodzeniu segmentów na wyświetlaczu siedmiosegmentowym",
      "C": "Nieliniowość różniczkowa występuje tylko w woltomierzach analogowych, a całkowa tylko w omomierzach",
      "D": "Błąd nieliniowości różniczkowej wynika z rozrzutu wartości (tolerancji) rezystorów w drabinkach rezystorowych powodującego nierówną szerokość poszczególnych przedziałów kwantowania, natomiast błąd nieliniowości całkowej wynika np. z nieliniowości ładowania kondensatora w układzie całkującym"
    },
    "correct": "D",
    "explanation": "Niedokładności wykonania rezystorów w drabince przetwornika sprawiają, że schodki kwantowania nie mają idealnie równej szerokości q (nieliniowość różniczkowa), a w skrajnym przypadku niektóre kody mogą w ogóle nie wystąpić (błąd brakujących kodów). Z kolei nieliniowość charakterystyki układu całkującego powoduje wygięcie całej charakterystyki przetwarzania względem prostej idealnej (nieliniowość całkowa).",
    "type": "choice"
  },
  {
    "id": 110,
    "lectureId": 8,
    "lectureTitle": "Przetwarzanie A/C i C/A oraz przyrządy cyfrowe",
    "question": "Jak na schemacie blokowym watomierza cyfrowego rozwiązano problem wyznaczania mocy na podstawie jednoczesnych wartości chwilowych napięcia u(t) oraz prądu i(t) przy zastosowaniu tylko jednego przetwornika A/C?",
    "image": null,
    "options": {
      "A": "Sygnały u(t) i i(t) są zwierane razem przed wejściem przetwornika A/C",
      "B": "Mierzy się napięcie w jednym dniu, a prąd w następnym dniu bez układów S&H",
      "C": "Zastosowano dwa oddzielne układy próbkująco-pamiętające (S&H) w torach napięcia i prądu wyzwalane jednocześnie wspólnym impulsem, a następnie multiplekser analogowy podający zapamiętane próbki kolejno na pojedynczy przetwornik A/C współpracujący z mikroprocesorem (μP)",
      "D": "Watomierz cyfrowy używa cewki ruchomej i sprężynki zwrotnej zamiast przetwornika A/C"
    },
    "correct": "C",
    "explanation": "Aby poprawnie obliczyć moc czynną z próbek u(ti) oraz i(ti), obie próbki muszą pochodzić z dokładnie tej samej chwili czasowej ti. Dlatego watomierz cyfrowy posiada dwa równocześnie taktowane układy S&H, z których zapamiętane napięcia są następnie sekwencyjnie przekazywane przez multiplekser do jednego przetwornika A/C i mnożone cyfrowo przez mikroprocesor.",
    "type": "choice"
  },
  {
    "id": 111,
    "lectureId": 8,
    "lectureTitle": "Przetwarzanie A/C i C/A oraz przyrządy cyfrowe",
    "question": "Czym wyróżnia się architektura torów wejściowych dwukanałowego oscyloskopu cyfrowego (CH1, CH2) w porównaniu z wielokanałową kartą pomiarową (DAQ) posiadającą wejścia AI0..AI7?",
    "image": null,
    "options": {
      "A": "W oscyloskopie cyfrowym wszystkie kanały są sumowane na jednym rezystorze bez kondycjonowania",
      "B": "W oscyloskopie cyfrowym każdy kanał (CH1, CH2) posiada własny układ kondycjonowania i własny szybki przetwornik A/C współpracujący z szybką pamięcią RAM, natomiast w karcie pomiarowej wiele wejść analogowych (wyposażonych w układy S&H) jest przełączanych przez wspólny multiplekser analogowy i wzmacniacz o programowanym wzmocnieniu na jeden przetwornik A/C",
      "C": "Karta pomiarowa nie posiada przetwornika A/C, a jedynie wyświetlacz wskazówkowy",
      "D": "Oscyloskop cyfrowy nie posiada w ogóle pamięci RAM ani przetworników A/C"
    },
    "correct": "B",
    "explanation": "Oscyloskop cyfrowy wymaga bardzo szybkiej, równoczesnej akwizycji przebiegów w każdym kanale, dlatego każdy kanał ma własny tor kondycjonowania i dedykowany przetwornik A/C zapisujący próbki do szybkiej pamięci RAM. W karcie pomiarowej (DAQ) sygnały z wejść AI0–AI7 (po układach S&H) trafiają przez multiplekser, przełącznik konfiguracji (RSE/Differential) oraz wzmacniacz z nastawą wzmocnienia do wspólnego przetwornika A/C.",
    "type": "choice"
  },
  {
    "id": 112,
    "lectureId": 8,
    "lectureTitle": "Przetwarzanie A/C i C/A oraz przyrządy cyfrowe",
    "question": "Jakie dodatkowe bloki funkcjonalne – oprócz wielokanałowego toru wejść analogowych (AI0..AI7) z przetwornikiem A/C – znajdują się na typowej karcie pomiarowej (DAQ) współpracującej z komputerem?",
    "image": null,
    "options": {
      "A": "Przełącznik konfiguracji wejść (RSE / Differential), nastawa wzmocnienia (PGA), tor wyjścia analogowego (AO) z przetwornikiem C/A i buforem wyjściowym oraz rejestr wejść/wyjść cyfrowych (DIO)",
      "B": "Wyłącznie ogniwo wzorcowe Westona oraz galwanometr magnetoelektryczny",
      "C": "Silnik spalinowy oraz przekładnia ślimakowa",
      "D": "Tylko jeden pojedynczy bezpiecznik topikowy bez żadnych układów cyfrowych"
    },
    "correct": "A",
    "explanation": "Zgodnie ze schematem blokowym karty pomiarowej z wykładu, oprócz sekcji wejść analogowych AI0–AI7 (z układami S&H, multiplekserem, wyborem trybu asymetrycznego RSE lub różnicowego Differential, wzmacniaczem PGA i przetwornikiem A/C), karta zawiera także sekcję wyjścia analogowego AO (przetwornik C/A z buforem) oraz rejestr dwukierunkowych linii cyfrowych.",
    "type": "choice"
  }
];

/* ======================= Konfiguracja i stan aplikacji ======================= */
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const STATS_STORAGE_KEY = 'metroleszek_stats_v1';
const BROWSE_PAGE_SIZE = 12;

const LECTURE_DESCRIPTIONS = {
  1: 'Definicja pomiaru i obserwacji, wielkości mierzalne, układ SI po redefinicji, wzorce obliczeniowe i systemy pomiarowe.',
  2: 'Metody pomiarowe (bezpośrednia, pośrednia, złożona, zerowa, kompensacyjna, Gaussa) oraz mostek Wheatstone’a.',
  3: 'Przebiegi okresowe, wartość średnia, wyprostowana i skuteczna (RMS / TrueRMS), składowa AC+DC, współczynniki szczytu i kształtu.',
  4: 'Błąd bezwzględny i względny, klasy dokładności mierników analogowych, specyfikacja DMM i zaokrąglanie błędów w górę.',
  5: 'Wyświetlacze DMM, czas całkowania PLC, jednostka ppm, rezystancja wejściowa oraz błędy w pomiarach pośrednich.',
  6: 'Niepewność standardowa typu A i typu B, złożona i rozszerzona (k = 2, k = 3), reguła 20%, cyfry znaczące i zapis GUM.',
  7: 'Prawo propagacji niepewności (wielkości nieskorelowane i skorelowane) oraz błąd metody przy pomiarze napięcia i rezystancji.',
  8: 'Przetworniki C/A (drabinka R-2R, 1 LSB) i A/C (kompensacja równomierna, SAR, Flash, podwójne całkowanie), błędy ADC, oscyloskop i karta DAQ.'
};

const state = {
  datasets: {
    exam: [],
    ai: []
  },
  allQuestions: [],
  questionMap: new Map(), // uid -> question
  lecturesMeta: [],       // [{ id, title, count, openCount }]
  globalSource: 'all',    // 'exam' | 'ai' | 'all'
  activeTab: 'dashboard',
  tabLoaded: {
    dashboard: true,
    study: false,
    exam: false,
    browse: false,
    starred: false,
    formulas: false
  },
  study: {
    scope: 'all',         // 'all' | 'exam' | 'ai-all' | 'ai-1'..'ai-8'
    typeFilter: 'all',    // 'all' | 'open' | 'closed'
    order: [],            // tablica uid
    pos: 0,
    random: false,
    answered: {},         // { [uid]: { chosenKey, chosenKeys, userInput, isCorrect, revealed } }
    multiSelections: {},  // { [uid]: ['A', 'C'] }
    optionOrders: {}      // { [uid]: ['B','A','D','C'] }
  },
  exam: {
    active: false,
    questions: [],
    currentIndex: 0,
    answers: {},          // { [uid]: key | string }
    optionOrders: {},     // { [uid]: ['A','B','C','D'] }
    selfAssessments: {},  // { [uid]: boolean }
    timer: null,
    timeRemaining: 0,
    timeLimit: 0,
    elapsedSeconds: 0,
    lastWrong: []
  },
  browse: {
    scope: 'all',
    typeFilter: 'all',
    query: '',
    showAll: false,
    tocVisible: true,
    filtered: [],
    renderedCount: 0,
    checked: {},          // { [uid]: { mode: 'choice'|'open'|'reveal', chosenKey?, userInput?, isCorrect? } }
    searchTimeout: null,
    observer: null
  },
  formulas: {
    filter: 'all',
    search: ''
  }
};

/* ======================= Pomocnicze ======================= */
const $ = (id) => document.getElementById(id);

function escapeHtml(str) {
  if (str === undefined || str === null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function plural(n, one, few, many) {
  if (n === 1) return one;
  const d = n % 10;
  const t = n % 100;
  return d >= 2 && d <= 4 && (t < 12 || t > 14) ? few : many;
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function availableLetters(q) {
  return LETTERS.filter((l) => q && q.options && q.options[l] != null && String(q.options[l]).trim() !== '');
}

const getChoiceKeys = availableLetters;

function isOpenQuestion(q) {
  return Boolean(q && q.type === 'open');
}

function isNumericOpenQuestion(q) {
  return isOpenQuestion(q) && q.numericTarget !== undefined && q.numericTarget !== null;
}

function isMultiChoiceQuestion(q) {
  if (!q || isOpenQuestion(q)) return false;
  return q.type === 'multi' || (typeof q.correct === 'string' && q.correct.includes(','));
}

function normalizeAnswerList(val) {
  if (Array.isArray(val)) {
    return val.map((v) => String(v).trim().toUpperCase()).filter(Boolean).sort();
  }
  if (typeof val === 'string') {
    return val.split(',').map((s) => s.trim().toUpperCase()).filter(Boolean).sort();
  }
  return [];
}

function getCorrectAnswers(q) {
  if (!q || !q.correct) return [];
  return normalizeAnswerList(q.correct);
}

function formatAnswerText(q, userAns) {
  const keys = Array.isArray(userAns)
    ? normalizeAnswerList(userAns)
    : (typeof userAns === 'string' && userAns.trim() ? normalizeAnswerList(userAns) : []);
  if (keys.length === 0) return '<span class="italic text-neutral-500">Brak odpowiedzi</span>';
  return keys.map((key) => {
    const optText = q && q.options && q.options[key] != null ? escapeHtml(q.options[key]) : '';
    return `${escapeHtml(key)}) ${optText}`;
  }).join(', ');
}

function parsePolishNumber(str) {
  if (str === undefined || str === null) return NaN;
  const cleaned = String(str).trim().replace(/\s+/g, '').replace(/,/g, '.');
  if (!cleaned) return NaN;
  // Zezwalamy na wpisanie samej liczby lub liczby z typową jednostką metrologiczną na końcu (np. "3.00V", "100Ω", "-0.1%", "11 V/V", "4096 poziomów")
  const match = cleaned.match(/^([+-]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)(?:[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ%Ωμµ°/]+)?$/i);
  if (!match) return NaN;
  return parseFloat(match[1]);
}

function isOpenAnswerCorrect(q, userAns) {
  if (!isNumericOpenQuestion(q)) return false;
  const parsed = parsePolishNumber(userAns);
  if (isNaN(parsed)) return false;

  const targets = Array.isArray(q.acceptedNumbers) && q.acceptedNumbers.length > 0
    ? q.acceptedNumbers
    : [q.numericTarget];

  const relTol = q.tolerance !== undefined ? Number(q.tolerance) : 0.02;
  const absTol = q.toleranceAbs !== undefined ? Number(q.toleranceAbs) : 0.0005;

  return targets.some((t) => {
    if (t === undefined || t === null || isNaN(Number(t))) return false;
    const target = Number(t);
    const allowedDiff = target === 0 ? absTol : Math.max(Math.abs(target * relTol), absTol);
    return Math.abs(parsed - target) <= allowedDiff + 1e-12;
  });
}

function isAnswerCorrect(q, userAns) {
  if (!q) return false;
  if (isOpenQuestion(q)) {
    return isNumericOpenQuestion(q) ? isOpenAnswerCorrect(q, userAns) : false;
  }
  if (isMultiChoiceQuestion(q)) {
    const expected = getCorrectAnswers(q).join(',');
    const actual = normalizeAnswerList(userAns).join(',');
    return expected.length > 0 && actual === expected;
  }
  return userAns === q.correct;
}

function formatOpenStandardAnswer(q) {
  if (q.openAnswerText) return q.openAnswerText;
  if (q.numericTarget !== undefined && q.numericTarget !== null) {
    return `${String(q.numericTarget).replace('.', ',')}${q.unit ? ' ' + q.unit : ''}`;
  }
  return q.options && q.correct ? q.options[q.correct] : '';
}

function triggerMathJax(targetEl) {
  if (!targetEl) return;
  const elements = Array.isArray(targetEl) ? targetEl.filter(Boolean) : [targetEl];
  if (elements.length === 0) return;

  if (!mathJaxReady || !window.MathJax || typeof window.MathJax.typesetPromise !== 'function') {
    elements.forEach((el) => pendingMathJaxElements.add(el));
    return;
  }

  try {
    if (typeof window.MathJax.typesetClear === 'function') {
      window.MathJax.typesetClear(elements);
    }
    window.MathJax.typesetPromise(elements).catch(() => {});
  } catch (e) {
    // Ignorujemy drobne błędy kolejkowania MathJax
  }
}

function showToast(msg) {
  const toast = $('toast');
  const toastMsg = $('toast-msg');
  if (!toast || !toastMsg) return;
  toastMsg.innerText = msg;
  toast.classList.remove('hidden', 'opacity-0');
  toast.classList.add('opacity-100');
  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0');
    setTimeout(() => toast.classList.add('hidden'), 150);
  }, 2300);
}

/* ======================= Odznaki i obrazki ======================= */
function renderQuestionBadges(q) {
  if (!q) return '';
  const sourceBadge = q.src === 'exam'
    ? '<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-mono border border-neutral-300 dark:border-neutral-700 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-semibold">Baza egzam.</span>'
    : `<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-mono border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium">Wykład ${q.lectureId}</span>`;

  let typeBadge = '<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-mono border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-850 text-neutral-500 dark:text-neutral-400">Test ABCD</span>';
  if (isOpenQuestion(q)) {
    typeBadge = '<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-mono border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 font-medium">Otwarte (obliczenia)</span>';
  } else if (isMultiChoiceQuestion(q)) {
    typeBadge = '<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-mono border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 font-medium">Wielokrotny wybór</span>';
  }

  return `${sourceBadge} ${typeBadge}`;
}

const renderLabBadges = renderQuestionBadges;

function renderQuestionImage(img) {
  if (!img) return '';
  return `
    <div class="my-3 text-center">
      <img src="${escapeHtml(img)}" loading="lazy" decoding="async" alt="Ilustracja do pytania"
        onclick="openImageModal('${escapeHtml(img)}')"
        class="bg-white p-2 rounded-md border border-neutral-200 dark:border-neutral-700 max-h-64 mx-auto cursor-zoom-in transition-opacity hover:opacity-90 object-contain inline-block"
        title="Kliknij, aby powiększyć schemat" />
    </div>`;
}

function openImageModal(src) {
  const modal = $('image-modal');
  const img = $('image-modal-img');
  if (modal && img) {
    img.src = src;
    modal.classList.remove('hidden');
  }
}

function closeImageModal() {
  const modal = $('image-modal');
  if (modal) modal.classList.add('hidden');
}

/* ======================= Statystyki w localStorage ======================= */
function getStoredStats() {
  try {
    const raw = JSON.parse(localStorage.getItem(STATS_STORAGE_KEY));
    if (raw && typeof raw === 'object') {
      return {
        solved: raw.solved && typeof raw.solved === 'object' ? raw.solved : {},
        correctCount: Number(raw.correctCount) || 0,
        wrongCount: Number(raw.wrongCount) || 0,
        stars: Array.isArray(raw.stars) ? raw.stars : [],
        bestExam: raw.bestExam != null ? Number(raw.bestExam) : null
      };
    }
  } catch (e) {}
  return { solved: {}, correctCount: 0, wrongCount: 0, stars: [], bestExam: null };
}

function saveStoredStats(stats) {
  localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stats));
}

function initProgress() {
  saveStoredStats(getStoredStats());
  updateProgressDOM();
}

function updateProgressDOM() {
  const stats = getStoredStats();
  const totalQuestions = state.allQuestions.length;
  const solvedCount = Object.keys(stats.solved).filter((uid) => state.questionMap.has(uid)).length;

  $('stat-solved').innerText = `${solvedCount} / ${totalQuestions}`;

  const totalAttempts = stats.correctCount + stats.wrongCount;
  const accuracy = totalAttempts > 0 ? Math.round((stats.correctCount / totalAttempts) * 100) : 0;
  $('stat-accuracy').innerText = `${accuracy}%`;

  const percent = totalQuestions > 0 ? Math.round((solvedCount / totalQuestions) * 100) : 0;
  $('stat-progress-bar').style.width = `${percent}%`;

  const starredValid = stats.stars.filter((uid) => state.questionMap.has(uid)).length;
  $('stat-starred-count').innerText = String(starredValid);

  const bestWrap = $('stat-best-wrap');
  const bestVal = $('stat-best-exam');
  if (stats.bestExam != null) {
    bestWrap.classList.remove('hidden');
    bestVal.innerText = `${stats.bestExam}%`;
  } else {
    bestWrap.classList.add('hidden');
  }
}

function updateQuestionHistory(uid, isCorrect) {
  const stats = getStoredStats();
  stats.solved[uid] = true;
  if (isCorrect) stats.correctCount++;
  else stats.wrongCount++;
  saveStoredStats(stats);
  updateProgressDOM();
}

function toggleStar(uid) {
  const stats = getStoredStats();
  if (stats.stars.includes(uid)) {
    stats.stars = stats.stars.filter((id) => id !== uid);
    showToast('Pytanie usunięte z ulubionych');
  } else {
    stats.stars.push(uid);
    showToast('Pytanie dodane do ulubionych');
  }
  saveStoredStats(stats);
  updateProgressDOM();

  if (state.activeTab === 'starred') {
    loadStarredQuestions();
  } else if (state.activeTab === 'study') {
    loadStudyQuestion();
  } else if (state.activeTab === 'browse') {
    refreshBrowseStarButtons(uid);
  }
}

function resetStats() {
  if (!confirm('Czy na pewno chcesz zresetować postępy, historię odpowiedzi i ulubione pytania?')) return;
  localStorage.removeItem(STATS_STORAGE_KEY);
  state.study.answered = {};
  state.browse.checked = {};
  initProgress();
  rebuildStudyOrder();
  if (state.activeTab === 'study') loadStudyQuestion();
  if (state.activeTab === 'starred') loadStarredQuestions();
  if (state.activeTab === 'browse') applyBrowseFilter();
  showToast('Wszystkie postępy zostały zresetowane.');
  switchTab('dashboard');
}

/* ======================= Wczytywanie i normalizacja baz pytań ======================= */
function normalizeDataset(rawList, src) {
  if (!Array.isArray(rawList) || rawList.length === 0) {
    throw new Error(`Plik źródłowy (${src}) nie zawiera tablicy pytań.`);
  }
  return rawList
    .filter((q) => {
      if (!q || !q.question) return false;
      if (isOpenQuestion(q)) {
        return Boolean(q.correct || q.openAnswerText || isNumericOpenQuestion(q));
      }
      return Boolean(q.options && q.correct);
    })
    .map((q) => {
      const uid = `${src}-${q.id}`;
      const optionsText = availableLetters(q).map((l) => q.options[l]).join(' ');
      const searchParts = [
        q.question,
        q.explanation,
        q.openAnswerText,
        q.lectureTitle,
        optionsText,
        q.lectureId ? `wyklad ${q.lectureId} w${q.lectureId}` : 'baza egzaminacyjna',
        q.type === 'open' ? 'otwarte obliczenia' : 'zamkniete test',
        `#${q.id}`,
        String(q.id),
        uid
      ];
      return {
        ...q,
        src,
        uid,
        _searchText: searchParts.filter(Boolean).join(' ').toLowerCase()
      };
    });
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
        count: 0,
        openCount: 0
      });
    }
    const meta = map.get(lid);
    meta.count++;
    if (isOpenQuestion(q)) meta.openCount++;
  });
  return [...map.values()].sort((a, b) => a.id - b.id);
}

function rebuildCombinedIndex() {
  state.allQuestions = [...state.datasets.exam, ...state.datasets.ai];
  state.questionMap = new Map();
  state.allQuestions.forEach((q, idx) => {
    q._idx = idx;
    state.questionMap.set(q.uid, q);
  });
  state.lecturesMeta = buildLecturesMeta(state.datasets.ai);

  if (state.datasets.exam.length > 0 && state.datasets.ai.length === 0) {
    state.globalSource = 'exam';
  } else if (state.datasets.exam.length === 0 && state.datasets.ai.length > 0) {
    state.globalSource = 'ai';
  }

  populateAllFiltersAndDashboard();
  updateProgressDOM();
}

async function fetchJsonSafe(url, src) {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return normalizeDataset(await res.json(), src);
}

async function loadAllDatabases() {
  const hasEmbeddedExam = Array.isArray(EMBEDDED_EXAM_QUESTIONS) && EMBEDDED_EXAM_QUESTIONS.length > 0;
  const hasEmbeddedAi = Array.isArray(EMBEDDED_AI_QUESTIONS) && EMBEDDED_AI_QUESTIONS.length > 0;

  if (hasEmbeddedExam) {
    state.datasets.exam = normalizeDataset(EMBEDDED_EXAM_QUESTIONS, 'exam');
  }
  if (hasEmbeddedAi) {
    state.datasets.ai = normalizeDataset(EMBEDDED_AI_QUESTIONS, 'ai');
  }

  // Gdy działamy offline / file:// lub z wbudowaną bazą, uruchamiamy aplikację natychmiast od ręki
  if (!hasEmbeddedExam && !hasEmbeddedAi) {
    const [examRes, aiRes] = await Promise.allSettled([
      fetchJsonSafe('questions.json', 'exam'),
      fetchJsonSafe('ai_questions.json', 'ai')
    ]);

    if (examRes.status === 'fulfilled') state.datasets.exam = examRes.value;
    if (aiRes.status === 'fulfilled') state.datasets.ai = aiRes.value;

    if (state.datasets.exam.length === 0 && state.datasets.ai.length === 0) {
      const reasons = [examRes, aiRes]
        .filter((r) => r.status === 'rejected')
        .map((r) => r.reason?.message || String(r.reason))
        .join(' | ');
      $('error-details').textContent = 'Szczegóły: ' + reasons;
      $('screen-loading').classList.add('hidden');
      $('screen-error').classList.remove('hidden');
      return;
    }
  }

  $('screen-loading').classList.add('hidden');
  $('screen-error').classList.add('hidden');
  $('app-shell').classList.remove('hidden');
  $('top-source-switch').classList.remove('hidden');

  rebuildCombinedIndex();
  handleUrlRouting();
}

function bindManualFileLoaders() {
  $('file-input').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const raw = JSON.parse(await file.text());
      const isAi = Array.isArray(raw) && raw.some((q) => q && q.lectureId != null);
      if (isAi) state.datasets.ai = normalizeDataset(raw, 'ai');
      else state.datasets.exam = normalizeDataset(raw, 'exam');
      onManualLoadSuccess();
    } catch (err) {
      $('error-details').textContent = 'Szczegóły: ' + err.message;
    }
  });

  $('file-input-ai').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const raw = JSON.parse(await file.text());
      state.datasets.ai = normalizeDataset(raw, 'ai');
      onManualLoadSuccess();
    } catch (err) {
      $('error-details').textContent = 'Szczegóły: ' + err.message;
    }
  });
}

function onManualLoadSuccess() {
  $('screen-error').classList.add('hidden');
  $('screen-loading').classList.add('hidden');
  $('app-shell').classList.remove('hidden');
  $('top-source-switch').classList.remove('hidden');
  rebuildCombinedIndex();
  switchTab('dashboard');
}

/* ======================= Populate UI: Top Switch, Dashboard, Filters ======================= */
function getGlobalSourceQuestions() {
  if (state.globalSource === 'exam') return state.datasets.exam;
  if (state.globalSource === 'ai') return state.datasets.ai;
  return state.allQuestions;
}

function setGlobalSource(src) {
  if (src === 'exam' && state.datasets.exam.length === 0) {
    showToast('Brak pytań w oryginalnej bazie egzaminacyjnej.');
    return;
  }
  if (src === 'ai' && state.datasets.ai.length === 0) {
    showToast('Brak pytań z wykładów AI.');
    return;
  }
  state.globalSource = src;
  paintTopSourceSwitch();

  const scopeValue = src === 'exam' ? 'exam' : src === 'ai' ? 'ai-all' : 'all';
  state.study.scope = scopeValue;
  state.browse.scope = scopeValue;

  const studyScopeEl = $('study-scope-filter');
  const browseScopeEl = $('browse-scope-filter');
  if (studyScopeEl) studyScopeEl.value = scopeValue;
  if (browseScopeEl) browseScopeEl.value = scopeValue;

  rebuildStudyOrder();
  if (state.activeTab === 'study') loadStudyQuestion();
  if (state.activeTab === 'browse') applyBrowseFilter();
}

function paintTopSourceSwitch() {
  $('src-count-exam').textContent = state.datasets.exam.length;
  $('src-count-ai').textContent = state.datasets.ai.length;
  $('src-count-all').textContent = state.allQuestions.length;

  ['exam', 'ai', 'all'].forEach((key) => {
    const btn = $(`src-btn-${key}`);
    if (!btn) return;
    const active = state.globalSource === key;
    btn.className = 'px-2.5 py-1 text-xs font-medium rounded transition-colors ' +
      (active
        ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100');
  });
}

function buildScopeOptionsHTML() {
  const totalCount = state.allQuestions.length;
  const examCount = state.datasets.exam.length;
  const aiCount = state.datasets.ai.length;

  let html = `<option value="all">Wszystkie bazy (${totalCount})</option>`;
  if (examCount > 0) {
    html += `<option value="exam">Oryginalna baza egzaminacyjna (${examCount})</option>`;
  }
  if (aiCount > 0) {
    html += `<option value="ai-all">Wszystkie wykłady AI 1–8 (${aiCount})</option>`;
    state.lecturesMeta.forEach((lec) => {
      html += `<option value="ai-${lec.id}">Wykład ${lec.id}: ${escapeHtml(lec.title)} (${lec.count})</option>`;
    });
  }
  return html;
}

function renderDashboardModules() {
  const grid = $('dashboard-modules-grid');
  if (!grid) return;

  const totalCount = state.allQuestions.length;
  const openCount = state.allQuestions.filter(isOpenQuestion).length;
  $('dashboard-subtitle').textContent =
    `Kompleksowa baza z Metrologii: ${totalCount} pytań (w tym ${openCount} otwartych zadań obliczeniowych i ${totalCount - openCount} testowych)`;

  let cardsHtml = '';

  if (state.datasets.exam.length > 0) {
    const examOpen = state.datasets.exam.filter(isOpenQuestion).length;
    cardsHtml += `
      <div onclick="filterToModuleStudy('exam')" class="bg-white dark:bg-[#18181b] p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between space-y-3 cursor-pointer hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors group">
        <div class="space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">Egzamin</span>
            <span class="text-[11px] font-mono px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-700 text-neutral-500">${state.datasets.exam.length} pytań (${examOpen} otw.)</span>
          </div>
          <h3 class="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Oryginalna Baza Egzaminacyjna</h3>
          <p class="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Pytania egzaminacyjne: definicja pomiaru i obserwacji, metody pomiarowe, błędy, niepewności typu A/B/całkowita, True RMS, C/A i zapis wyniku.
          </p>
        </div>
        <div class="pt-2 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
          <span class="text-xs font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline">Ćwicz &rarr;</span>
        </div>
      </div>`;
  }

  state.lecturesMeta.forEach((lec) => {
    const desc = LECTURE_DESCRIPTIONS[lec.id] || `Szczegółowe pytania i zadania z Wykładu ${lec.id}.`;
    const openBadge = lec.openCount > 0 ? ` (${lec.openCount} otw.)` : '';
    cardsHtml += `
      <div onclick="filterToModuleStudy('ai-${lec.id}')" class="bg-white dark:bg-[#18181b] p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between space-y-3 cursor-pointer hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors group">
        <div class="space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">Wykład ${lec.id}</span>
            <span class="text-[11px] font-mono px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-700 text-neutral-500">${lec.count} pytań${openBadge}</span>
          </div>
          <h3 class="text-sm font-semibold text-neutral-900 dark:text-neutral-100">W${lec.id}: ${escapeHtml(lec.title)}</h3>
          <p class="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">${escapeHtml(desc)}</p>
        </div>
        <div class="pt-2 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
          <span class="text-xs font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline">Ćwicz &rarr;</span>
        </div>
      </div>`;
  });

  grid.innerHTML = cardsHtml;
}

function renderExamModulesCheckboxes() {
  const grid = $('exam-modules-grid');
  if (!grid) return;

  let html = '';
  if (state.datasets.exam.length > 0) {
    html += `
      <label class="flex items-center gap-2 p-2.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-850/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer transition-colors text-xs text-neutral-800 dark:text-neutral-200 font-medium select-none">
        <input type="checkbox" name="exam-module" value="exam" checked onchange="updateExamPoolCount()" class="w-4 h-4 rounded border-neutral-300 dark:border-neutral-700 text-neutral-900 focus:ring-0" />
        <span class="truncate">Baza egzaminacyjna (${state.datasets.exam.length})</span>
      </label>`;
  }

  state.lecturesMeta.forEach((lec) => {
    html += `
      <label class="flex items-center gap-2 p-2.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-850/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer transition-colors text-xs text-neutral-800 dark:text-neutral-200 font-medium select-none" title="${escapeHtml(lec.title)}">
        <input type="checkbox" name="exam-module" value="ai-${lec.id}" checked onchange="updateExamPoolCount()" class="w-4 h-4 rounded border-neutral-300 dark:border-neutral-700 text-neutral-900 focus:ring-0" />
        <span class="truncate">W${lec.id}: ${escapeHtml(lec.title)} (${lec.count})</span>
      </label>`;
  });

  grid.innerHTML = html;
  updateExamPoolCount();
}

function populateAllFiltersAndDashboard() {
  paintTopSourceSwitch();
  renderDashboardModules();

  const scopeHtml = buildScopeOptionsHTML();
  const studyScope = $('study-scope-filter');
  const browseScope = $('browse-scope-filter');
  if (studyScope) {
    studyScope.innerHTML = scopeHtml;
    studyScope.value = state.study.scope;
  }
  if (browseScope) {
    browseScope.innerHTML = scopeHtml;
    browseScope.value = state.browse.scope;
  }

  renderExamModulesCheckboxes();
  rebuildStudyOrder();
}

/* ======================= Routing i nawigacja między zakładkami ======================= */
function filterQuestionsByScopeAndType(scope, typeFilter) {
  let pool = state.allQuestions;
  if (scope === 'exam') {
    pool = state.datasets.exam;
  } else if (scope === 'ai-all') {
    pool = state.datasets.ai;
  } else if (scope && scope.startsWith('ai-')) {
    const lid = Number(scope.slice(3));
    pool = state.datasets.ai.filter((q) => Number(q.lectureId) === lid);
  }

  if (typeFilter === 'open') {
    pool = pool.filter((q) => isOpenQuestion(q));
  } else if (typeFilter === 'closed') {
    pool = pool.filter((q) => !isOpenQuestion(q));
  }
  return pool;
}

function switchTab(tabName) {
  const validTabs = ['dashboard', 'study', 'exam', 'browse', 'starred', 'formulas'];
  if (!validTabs.includes(tabName)) tabName = 'dashboard';
  state.activeTab = tabName;

  validTabs.forEach((t) => {
    const sec = $(`sec-${t}`);
    const navBtn = $(`nav-${t}`);
    if (sec) sec.classList.toggle('hidden', t !== tabName);
    if (navBtn) {
      if (t === tabName) {
        navBtn.className = 'w-full flex items-center justify-between px-2.5 py-2 text-xs font-medium rounded-md transition-colors bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100';
      } else {
        navBtn.className = 'w-full flex items-center justify-between px-2.5 py-2 text-xs font-medium rounded-md transition-colors text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-850 hover:text-neutral-900 dark:hover:text-neutral-200';
      }
      // Dla guzików bez licznika zachowujemy flex-start przez brak justify-between lub spójność dzieci
      if (t !== 'starred') {
        navBtn.className = navBtn.className.replace('justify-between', 'space-x-2.5');
      }
    }
  });

  if (window.history && window.history.replaceState) {
    try {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set('tab', tabName);
      if (tabName !== 'study') {
        currentUrl.searchParams.delete('q');
      }
      window.history.replaceState({ tab: tabName }, '', currentUrl.toString());
    } catch (e) {}
  }

  if (tabName === 'study') {
    if (!state.tabLoaded.study) {
      loadStudyQuestion();
      state.tabLoaded.study = true;
    }
  } else if (tabName === 'browse') {
    if (!state.tabLoaded.browse) {
      initBrowseDatabase();
      state.tabLoaded.browse = true;
    }
  } else if (tabName === 'starred') {
    loadStarredQuestions();
    state.tabLoaded.starred = true;
  } else if (tabName === 'formulas') {
    if (!state.tabLoaded.formulas) {
      const sec = $('sec-formulas');
      if (sec) triggerMathJax(sec);
      state.tabLoaded.formulas = true;
    }
  }
}

window.filterToModuleStudy = function(scopeVal) {
  state.study.scope = String(scopeVal);
  state.study.typeFilter = 'all';
  const scopeEl = $('study-scope-filter');
  const typeEl = $('study-type-filter');
  if (scopeEl) scopeEl.value = state.study.scope;
  if (typeEl) typeEl.value = 'all';

  rebuildStudyOrder(true);
  state.tabLoaded.study = true;
  loadStudyQuestion();
  switchTab('study');
};

window.filterToLabStudy = function(labVal) {
  const strVal = String(labVal);
  const scopeVal = (strVal === 'exam' || strVal === 'all' || strVal.startsWith('ai-')) ? strVal : `ai-${strVal}`;
  filterToModuleStudy(scopeVal);
};

window.studyNow = function(uid) {
  const target = state.questionMap.get(uid);
  if (!target) return;

  state.study.scope = 'all';
  state.study.typeFilter = 'all';
  if ($('study-scope-filter')) $('study-scope-filter').value = 'all';
  if ($('study-type-filter')) $('study-type-filter').value = 'all';

  rebuildStudyOrder();
  const pos = state.study.order.indexOf(uid);
  state.study.pos = pos !== -1 ? pos : 0;
  state.tabLoaded.study = true;
  loadStudyQuestion();
  switchTab('study');
};

window.copyQuestionLink = function(uid) {
  try {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('tab', 'study');
    currentUrl.searchParams.set('q', uid);
    const shareUrl = currentUrl.toString();

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl)
        .then(() => showToast(`Skopiowano link do pytania (${uid})!`))
        .catch(() => window.prompt('Skopiuj bezpośredni link do pytania:', shareUrl));
    } else {
      window.prompt('Skopiuj bezpośredni link do pytania:', shareUrl);
    }
  } catch (err) {
    const shareUrl = window.location.href.split('?')[0] + '?tab=study&q=' + encodeURIComponent(uid);
    window.prompt('Skopiuj bezpośredni link do pytania:', shareUrl);
  }
};

function handleUrlRouting() {
  try {
    const params = new URLSearchParams(window.location.search);
    const qParam = params.get('q') || params.get('id');
    const tabParam = params.get('tab');
    const lecParam = params.get('lec') || params.get('lab');

    if (qParam) {
      if (state.questionMap.has(qParam)) {
        studyNow(qParam);
        return;
      }
      const numId = parseInt(qParam, 10);
      if (!isNaN(numId)) {
        const candidate = state.questionMap.get(`exam-${numId}`) || state.questionMap.get(`ai-${numId}`);
        if (candidate) {
          studyNow(candidate.uid);
          return;
        }
      }
    }

    if (lecParam) {
      filterToLabStudy(lecParam);
      return;
    }

    if (tabParam && ['dashboard', 'study', 'exam', 'browse', 'starred', 'formulas'].includes(tabParam)) {
      switchTab(tabParam);
      return;
    }
  } catch (e) {}
  switchTab('dashboard');
}

/* ======================= Tryb Nauki ======================= */
function getStudyQuestionPool() {
  return filterQuestionsByScopeAndType(state.study.scope, state.study.typeFilter);
}

function rebuildStudyOrder(resetPos = false) {
  const pool = getStudyQuestionPool();
  const uids = pool.map((q) => q.uid);
  const prevUid = !resetPos && state.study.order[state.study.pos] ? state.study.order[state.study.pos] : null;

  state.study.order = state.study.random ? shuffleArray(uids) : uids;

  if (resetPos || !prevUid) {
    state.study.pos = 0;
  } else {
    const newPos = state.study.order.indexOf(prevUid);
    state.study.pos = newPos !== -1 ? newPos : 0;
  }

  const goTo = $('study-go-to');
  if (goTo) {
    goTo.max = Math.max(1, state.study.order.length);
    goTo.value = state.study.order.length > 0 ? state.study.pos + 1 : 0;
  }
}

function onStudyFilterChange() {
  state.study.scope = $('study-scope-filter').value;
  state.study.typeFilter = $('study-type-filter').value;
  rebuildStudyOrder(true);
  loadStudyQuestion();
}

const onStudyLabFilterChange = onStudyFilterChange;

function toggleStudyShuffle() {
  state.study.random = !state.study.random;
  const btn = $('study-shuffle');
  if (state.study.random) {
    btn.classList.add('bg-neutral-200', 'dark:bg-neutral-700');
    showToast('Włączono losową kolejność pytań');
  } else {
    btn.classList.remove('bg-neutral-200', 'dark:bg-neutral-700');
    showToast('Wyłączono losową kolejność');
  }
  rebuildStudyOrder(true);
  loadStudyQuestion();
}

function jumpToStudyQuestion(val) {
  const num = parseInt(val, 10);
  if (num >= 1 && num <= state.study.order.length) {
    state.study.pos = num - 1;
    loadStudyQuestion();
  } else {
    showToast(`Wprowadź numer od 1 do ${state.study.order.length}`);
  }
}

function getChoiceOptionClasses(isSelected, useCompactGrid = false) {
  if (useCompactGrid) {
    return isSelected
      ? 'w-full min-h-20 rounded-md border-2 border-neutral-900 dark:border-neutral-100 bg-neutral-100/80 dark:bg-neutral-800 p-2.5 text-left flex flex-col items-start justify-between gap-1.5 font-semibold text-xs text-neutral-900 dark:text-neutral-100 transition-colors'
      : 'w-full min-h-20 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-850 p-2.5 text-left flex flex-col items-start justify-between gap-1.5 text-xs text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors';
  }
  return isSelected
    ? 'w-full p-3.5 rounded-md border-2 border-neutral-900 dark:border-neutral-100 bg-neutral-100/70 dark:bg-neutral-800 text-left flex items-center space-x-3 font-semibold text-sm text-neutral-900 dark:text-neutral-100 transition-colors'
    : 'w-full p-3.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-850 text-left flex items-center space-x-3 text-sm text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors';
}

function getChoiceBadgeClasses(isSelected, useCompactGrid = false) {
  const sizeCls = useCompactGrid ? 'w-5 h-5 text-[11px]' : 'w-6 h-6 text-xs';
  return isSelected
    ? `${sizeCls} rounded border border-neutral-900 dark:border-neutral-100 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 flex items-center justify-center font-mono font-bold flex-shrink-0`
    : `${sizeCls} rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 flex items-center justify-center font-mono font-medium flex-shrink-0`;
}

function getStudyOptionOrder(q) {
  if (!state.study.optionOrders[q.uid]) {
    state.study.optionOrders[q.uid] = availableLetters(q);
  }
  return state.study.optionOrders[q.uid];
}

function loadStudyQuestion() {
  const card = $('study-card');
  if (!card) return;

  if (state.study.order.length === 0) {
    card.innerHTML = `<div class="text-center py-8 text-neutral-400 text-xs">Brak pytań dla wybranego zakresu i typu.</div>`;
    return;
  }

  const uid = state.study.order[state.study.pos];
  const q = state.questionMap.get(uid);
  if (!q) return;

  const stats = getStoredStats();
  const isStarred = stats.stars.includes(uid);
  const ansState = state.study.answered[uid];
  const openMode = isOpenQuestion(q);
  const numericMode = isNumericOpenQuestion(q);
  const multiMode = isMultiChoiceQuestion(q);

  let bodyInputHTML = '';
  if (openMode) {
    const prevInput = ansState && ansState.userInput != null ? ansState.userInput : '';
    const isChecked = Boolean(ansState && ansState.revealed);
    const unitHint = q.unit ? ` (jednostka: [${escapeHtml(q.unit)}])` : '';

    if (numericMode) {
      bodyInputHTML = `
        <div class="space-y-3 pt-1">
          <label for="open-numeric-input" class="block text-xs font-medium text-neutral-600 dark:text-neutral-400">
            Wpisz obliczony wynik liczbowy${unitHint}:
          </label>
          <div class="flex flex-col sm:flex-row gap-2">
            <input type="text" id="open-numeric-input" value="${escapeHtml(prevInput)}"
              ${isChecked ? 'disabled' : ''}
              placeholder="Wpisz obliczony wynik (np. 1,23)..."
              onkeydown="handleStudyNumericKeydown(event)"
              class="flex-1 p-2.5 border rounded-md bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-sm font-mono text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 disabled:opacity-70" />
            <button type="button" onclick="checkStudyNumericAnswer()" ${isChecked ? 'disabled' : ''}
              class="bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 font-medium px-4 py-2.5 rounded-md text-xs transition-colors whitespace-nowrap disabled:opacity-40">
              Sprawdź wynik
            </button>
          </div>
          <div id="numeric-feedback" class="hidden"></div>
          <div class="flex flex-wrap justify-between items-center gap-2 pt-1">
            <button type="button" onclick="showOpenExplanation(false)" class="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 underline">
              Pokaż wzór i rozwiązanie bez sprawdzania
            </button>
            ${isChecked ? `<button type="button" onclick="resetStudyQuestionAnswer('${escapeHtml(uid)}')" class="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 underline">Spróbuj ponownie</button>` : ''}
          </div>
        </div>`;
    } else {
      bodyInputHTML = `
        <div class="space-y-3 pt-1">
          <label for="open-answer" class="block text-xs font-medium text-neutral-600 dark:text-neutral-400">
            Wpisz swoje obliczenia, wzór lub odpowiedź:
          </label>
          <textarea id="open-answer" placeholder="Wpisz swoje obliczenia, wzór lub wynik..." rows="3"
            class="w-full p-3 border rounded-md bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100">${escapeHtml(prevInput)}</textarea>
          <div class="flex flex-wrap gap-2">
            <button type="button" onclick="showOpenExplanation(true)" class="flex-1 bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 font-medium py-2 px-3 rounded-md text-xs transition-colors">
              Znam rozwiązanie / Pokaż wzór
            </button>
            <button type="button" onclick="showOpenExplanation(false)" class="flex-1 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium py-2 px-3 rounded-md text-xs transition-colors">
              Pokaż wzorzec i rozwiązanie
            </button>
          </div>
          ${isChecked ? `<div class="flex justify-end"><button type="button" onclick="resetStudyQuestionAnswer('${escapeHtml(uid)}')" class="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 underline">Spróbuj ponownie</button></div>` : ''}
        </div>`;
    }
  } else {
    const keys = getStudyOptionOrder(q);
    const useCompactGrid = keys.length > 4;
    const correctList = getCorrectAnswers(q);
    const multiSelected = Array.isArray(state.study.multiSelections[uid]) ? state.study.multiSelections[uid] : [];
    const revealed = Boolean(ansState && ansState.revealed);

    bodyInputHTML = `
      <div class="${useCompactGrid ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5' : 'space-y-2'}" id="study-options-wrap">
        ${keys.map((optKey, idx) => {
          const displayLetter = LETTERS[idx] || optKey;
          const isChosen = multiMode
            ? (revealed ? (ansState.chosenKeys || []).includes(optKey) : multiSelected.includes(optKey))
            : (ansState && ansState.chosenKey === optKey);

          let btnCls = getChoiceOptionClasses(multiMode && !revealed ? isChosen : false, useCompactGrid);
          let badgeCls = getChoiceBadgeClasses(multiMode && !revealed ? isChosen : false, useCompactGrid);
          let extra = `<kbd class="hidden sm:inline-block ml-auto text-[10px] font-mono px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-700 text-neutral-400">${idx + 1}</kbd>`;

          if (revealed) {
            if (correctList.includes(optKey)) {
              btnCls = useCompactGrid
                ? 'w-full min-h-20 rounded-md border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 p-2.5 text-left flex flex-col items-start justify-between gap-1.5 font-semibold text-xs text-emerald-950 dark:text-emerald-100 transition-colors'
                : 'w-full p-3.5 rounded-md border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-left flex items-center space-x-3 font-semibold text-sm text-emerald-950 dark:text-emerald-100 transition-colors';
              badgeCls = `${useCompactGrid ? 'w-5 h-5 text-[11px]' : 'w-6 h-6 text-xs'} rounded bg-emerald-600 text-white border border-emerald-700 flex items-center justify-center font-mono font-bold flex-shrink-0`;
              extra = '<span class="ml-auto text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">✓ Poprawna</span>';
            } else if (isChosen) {
              btnCls = useCompactGrid
                ? 'w-full min-h-20 rounded-md border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/60 p-2.5 text-left flex flex-col items-start justify-between gap-1.5 font-semibold text-xs text-rose-950 dark:text-rose-100 transition-colors'
                : 'w-full p-3.5 rounded-md border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-left flex items-center space-x-3 font-semibold text-sm text-rose-950 dark:text-rose-100 transition-colors';
              badgeCls = `${useCompactGrid ? 'w-5 h-5 text-[11px]' : 'w-6 h-6 text-xs'} rounded bg-rose-600 text-white border border-rose-700 flex items-center justify-center font-mono font-bold flex-shrink-0`;
              extra = '<span class="ml-auto text-rose-600 dark:text-rose-400 font-mono text-xs font-bold">✗ Błędna</span>';
            } else {
              btnCls = useCompactGrid
                ? 'w-full min-h-20 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 p-2.5 text-left flex flex-col items-start justify-between gap-1.5 text-xs text-neutral-400 opacity-65'
                : 'w-full p-3.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 text-left flex items-center space-x-3 text-sm text-neutral-400 opacity-65';
              extra = '';
            }
          }

          const clickHandler = multiMode ? `toggleStudyMultiAnswer('${optKey}')` : `checkStudyAnswer('${optKey}')`;
          return `
            <button type="button" id="opt-${optKey}" data-optkey="${optKey}" ${revealed ? 'disabled' : ''}
              ${multiMode ? `aria-pressed="${isChosen}"` : ''}
              onclick="${clickHandler}" class="${btnCls}">
              <span class="${badgeCls}">${displayLetter}</span>
              <span class="${useCompactGrid ? 'text-xs leading-snug' : 'flex-1 leading-relaxed'}">${escapeHtml(q.options[optKey])}</span>
              ${extra}
            </button>`;
        }).join('')}
      </div>
      ${multiMode && !revealed ? `
        <div class="flex items-center justify-between gap-3 pt-2">
          <p class="text-xs text-neutral-500">Zaznacz poprawne opcje, potem sprawdź odpowiedź.</p>
          <button type="button" onclick="checkStudyMultiAnswer()" class="bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 font-medium px-4 py-2 rounded-md text-xs transition-colors">Sprawdź odpowiedź</button>
        </div>` : ''}`;
  }

  const lectureHeader = q.lectureTitle
    ? `<span class="text-xs text-neutral-500 dark:text-neutral-400 font-mono truncate max-w-[260px] sm:max-w-md" title="${escapeHtml(q.lectureTitle)}">${escapeHtml(q.lectureTitle)}</span>`
    : '';

  card.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-2 border-b pb-3 border-neutral-200 dark:border-neutral-800">
      <div class="flex flex-wrap items-center gap-2">
        <span class="text-xs font-mono text-neutral-500">Pytanie ${state.study.pos + 1} z ${state.study.order.length} (#${q.id})</span>
        ${renderQuestionBadges(q)}
        ${lectureHeader}
      </div>
      <div class="flex items-center space-x-1.5">
        <button type="button" onclick="copyQuestionLink('${escapeHtml(uid)}')" class="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors px-2 py-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-1.5 border border-neutral-200 dark:border-neutral-700" title="Kopiuj bezpośredni link do tego pytania">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
          <span class="text-[11px] font-mono">Link</span>
        </button>
        <button type="button" onclick="toggleStar('${escapeHtml(uid)}')" class="text-neutral-400 hover:text-amber-500 transition-colors p-1" title="Dodaj do ulubionych">
          <svg class="w-4 h-4 ${isStarred ? 'text-amber-500 fill-current' : 'fill-none'}" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
          </svg>
        </button>
      </div>
    </div>

    <div class="space-y-4">
      <p class="text-base font-medium leading-relaxed text-neutral-900 dark:text-neutral-100">${escapeHtml(q.question)}</p>
      ${renderQuestionImage(q.image)}
      ${bodyInputHTML}
    </div>

    <div id="study-exp" class="${ansState && ansState.revealed ? '' : 'hidden '}mt-4 p-4 rounded-md bg-neutral-50 dark:bg-[#202024] border-l-4 ${ansState && ansState.isCorrect === true ? 'border-emerald-500' : ansState && ansState.isCorrect === false ? 'border-rose-500' : 'border-neutral-400'} border-y border-r border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 space-y-2 text-xs">
      <p class="font-semibold text-neutral-900 dark:text-neutral-100">Wzorzec i objaśnienie:</p>
      <div class="leading-relaxed whitespace-pre-line">${escapeHtml(q.explanation || 'Brak dodatkowego wyjaśnienia.')}</div>
      ${openMode ? `<div class="mt-2 font-mono font-semibold text-neutral-900 dark:text-neutral-100 border-t border-neutral-200 dark:border-neutral-700 pt-2">Wzorcowa odpowiedź: ${escapeHtml(formatOpenStandardAnswer(q))}</div>` : ''}
    </div>

    <div class="flex justify-between items-center pt-3 border-t border-neutral-200 dark:border-neutral-800">
      <button type="button" onclick="prevStudyQuestion()" class="border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium px-4 py-2 rounded-md text-xs transition-colors disabled:opacity-40 disabled:cursor-not-allowed" ${state.study.pos === 0 ? 'disabled' : ''}>← Poprzednie</button>
      <span class="hidden sm:inline text-[11px] font-mono text-neutral-400">
        ${openMode ? 'Wpisz wynik i naciśnij Enter' : 'Klawisze 1–4 lub A–D, potem Enter / →'}
      </span>
      <button type="button" onclick="nextStudyQuestion()" class="bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 font-medium px-4 py-2 rounded-md text-xs transition-colors">
        ${state.study.pos === state.study.order.length - 1 ? 'Zakończ pulę' : 'Następne →'}
      </button>
    </div>
  `;

  if (openMode && ansState && ansState.revealed && ansState.userInput != null && ansState.userInput !== '') {
    paintNumericFeedback($('numeric-feedback'), q, ansState.userInput, ansState.isCorrect);
  }

  const goTo = $('study-go-to');
  if (goTo) {
    goTo.value = state.study.pos + 1;
    goTo.max = state.study.order.length;
  }

  if (window.history && window.history.replaceState) {
    try {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set('tab', 'study');
      currentUrl.searchParams.set('q', uid);
      window.history.replaceState({ tab: 'study', q: uid }, '', currentUrl.toString());
    } catch (e) {}
  }

  triggerMathJax(card);
}

function paintNumericFeedback(el, q, rawInput, isCorrect) {
  if (!el) return;
  const parsed = parsePolishNumber(rawInput);
  const shownParsed = isNaN(parsed) ? escapeHtml(rawInput) : String(parsed).replace('.', ',');
  if (isCorrect) {
    el.className = 'p-3 rounded-md border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-xs font-semibold text-emerald-950 dark:text-emerald-100 flex items-center gap-2';
    el.innerHTML = `<span class="w-5 h-5 rounded bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">✓</span><span><strong>Wynik poprawny (${shownParsed}${q.unit ? ' ' + escapeHtml(q.unit) : ''}).</strong> Sprawdź poniższe wyprowadzenie:</span>`;
  } else {
    el.className = 'p-3 rounded-md border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-xs font-semibold text-rose-950 dark:text-rose-100 flex items-center gap-2';
    el.innerHTML = `<span class="w-5 h-5 rounded bg-rose-600 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">✗</span><span><strong>Różnica w wyniku:</strong> Twój wynik (${shownParsed}) odbiega od wzorca (${escapeHtml(formatOpenStandardAnswer(q))}).</span>`;
  }
  el.classList.remove('hidden');
}

function handleStudyNumericKeydown(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    const uid = state.study.order[state.study.pos];
    if (state.study.answered[uid] && state.study.answered[uid].revealed) {
      nextStudyQuestion();
    } else {
      checkStudyNumericAnswer();
    }
  }
}

function checkStudyAnswer(choiceKey) {
  const uid = state.study.order[state.study.pos];
  const q = state.questionMap.get(uid);
  if (!q || isOpenQuestion(q) || isMultiChoiceQuestion(q)) return;
  if (state.study.answered[uid] && state.study.answered[uid].revealed) return;

  const isCorrect = isAnswerCorrect(q, choiceKey);
  state.study.answered[uid] = { chosenKey: choiceKey, isCorrect, revealed: true };
  updateQuestionHistory(uid, isCorrect);
  loadStudyQuestion();
}

function toggleStudyMultiAnswer(choiceKey) {
  const uid = state.study.order[state.study.pos];
  const q = state.questionMap.get(uid);
  if (!q || !isMultiChoiceQuestion(q)) return;
  if (state.study.answered[uid] && state.study.answered[uid].revealed) return;

  const current = Array.isArray(state.study.multiSelections[uid]) ? state.study.multiSelections[uid] : [];
  if (current.includes(choiceKey)) {
    state.study.multiSelections[uid] = current.filter((k) => k !== choiceKey);
  } else {
    state.study.multiSelections[uid] = [...current, choiceKey];
  }
  loadStudyQuestion();
}

function checkStudyMultiAnswer() {
  const uid = state.study.order[state.study.pos];
  const q = state.questionMap.get(uid);
  if (!q || !isMultiChoiceQuestion(q)) return;
  if (state.study.answered[uid] && state.study.answered[uid].revealed) return;

  const chosenKeys = normalizeAnswerList(state.study.multiSelections[uid]);
  const isCorrect = isAnswerCorrect(q, chosenKeys);
  state.study.answered[uid] = { chosenKeys, isCorrect, revealed: true };
  updateQuestionHistory(uid, isCorrect);
  loadStudyQuestion();
}

function checkStudyNumericAnswer() {
  const input = $('open-numeric-input');
  const feedback = $('numeric-feedback');
  if (!input || !feedback) return;

  const val = input.value.trim();
  if (!val) {
    feedback.className = 'p-3 rounded-md border border-amber-400 bg-amber-50 dark:bg-amber-950/40 text-xs text-amber-900 dark:text-amber-200 font-medium';
    feedback.innerText = 'Wpisz obliczony wynik liczbowy przed sprawdzeniem.';
    feedback.classList.remove('hidden');
    return;
  }

  const parsed = parsePolishNumber(val);
  if (isNaN(parsed)) {
    feedback.className = 'p-3 rounded-md border border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-xs text-rose-900 dark:text-rose-200 font-medium';
    feedback.innerText = 'Wpisz poprawną wartość liczbową (np. 1,23 lub 0,006).';
    feedback.classList.remove('hidden');
    return;
  }

  const uid = state.study.order[state.study.pos];
  const q = state.questionMap.get(uid);
  const isCorrect = isOpenAnswerCorrect(q, val);

  state.study.answered[uid] = { userInput: val, isCorrect, revealed: true };
  updateQuestionHistory(uid, isCorrect);
  loadStudyQuestion();
}

function showStudyOpenExplanation(isCorrect = null) {
  const uid = state.study.order[state.study.pos];
  const input = $('open-numeric-input') || $('open-answer');
  const status = typeof isCorrect === 'boolean' ? isCorrect : null;
  if (status !== null) {
    updateQuestionHistory(uid, status);
  }
  state.study.answered[uid] = {
    userInput: input ? input.value : '',
    isCorrect: status,
    revealed: true
  };
  loadStudyQuestion();
}

const showOpenExplanation = showStudyOpenExplanation;

function resetStudyQuestionAnswer(uid) {
  delete state.study.answered[uid];
  delete state.study.multiSelections[uid];
  loadStudyQuestion();
}

function moveStudyQuestion(direction) {
  if (state.study.order.length === 0) return;
  if (direction === 'prev') {
    if (state.study.pos > 0) {
      state.study.pos--;
      loadStudyQuestion();
    }
  } else if (direction === 'next') {
    if (state.study.pos < state.study.order.length - 1) {
      state.study.pos++;
      loadStudyQuestion();
    } else {
      showToast('Ukończono wszystkie pytania w tej kategorii.');
    }
  }
}

function prevStudyQuestion() {
  moveStudyQuestion('prev');
}

function nextStudyQuestion() {
  moveStudyQuestion('next');
}

/* ======================= Tryb Egzaminu ======================= */
function selectExamPreset(preset) {
  document.querySelectorAll('input[name="exam-module"]').forEach((cb) => {
    if (preset === 'all') cb.checked = true;
    else if (preset === 'none') cb.checked = false;
    else if (preset === 'exam') cb.checked = cb.value === 'exam';
    else if (preset === 'ai') cb.checked = cb.value.startsWith('ai-');
  });
  updateExamPoolCount();
}

window.selectAllExamLabs = function(val) {
  selectExamPreset(val ? 'all' : 'none');
};

function getExamPool() {
  const checked = Array.from(document.querySelectorAll('input[name="exam-module"]:checked')).map((cb) => cb.value);
  const typeVal = $('exam-type') ? $('exam-type').value : 'all';

  let pool = state.allQuestions.filter((q) => {
    const modKey = q.src === 'exam' ? 'exam' : `ai-${q.lectureId}`;
    return checked.includes(modKey);
  });

  if (typeVal === 'open') pool = pool.filter((q) => isOpenQuestion(q));
  else if (typeVal === 'closed') pool = pool.filter((q) => !isOpenQuestion(q));

  return pool;
}

function updateExamPoolCount() {
  const pool = getExamPool();
  const total = pool.length;
  const openInPool = pool.filter(isOpenQuestion).length;

  const summary = $('exam-pool-summary');
  if (summary) {
    summary.textContent = `Dostępna pula: ${total} ${plural(total, 'pytanie', 'pytania', 'pytań')} (otwartych: ${openInPool}, zamkniętych: ${total - openInPool})`;
  }

  const allOpt = $('exam-count-all-opt');
  if (allOpt) {
    allOpt.textContent = `Wszystkie wybrane pytania (${total})`;
  }
}

function startExam() {
  const pool = getExamPool();
  if (pool.length === 0) {
    showToast('Brak pytań dla wybranego zakresu i typu. Zaznacz co najmniej jeden moduł.');
    return;
  }

  const countVal = $('exam-count').value;
  const timeVal = $('exam-time').value;
  const qCount = countVal === 'all' ? pool.length : Math.min(parseInt(countVal, 10), pool.length);

  state.exam.questions = shuffleArray(pool).slice(0, qCount);
  state.exam.currentIndex = 0;
  state.exam.answers = {};
  state.exam.optionOrders = {};
  state.exam.selfAssessments = {};
  state.exam.elapsedSeconds = 0;
  state.exam.lastWrong = [];
  state.exam.active = true;

  state.exam.questions.forEach((q) => {
    if (!isOpenQuestion(q)) {
      state.exam.optionOrders[q.uid] = availableLetters(q);
    }
  });

  if (state.exam.timer) clearInterval(state.exam.timer);

  if (timeVal === 'no-limit') {
    state.exam.timeLimit = 0;
    state.exam.timeRemaining = 0;
    $('exam-timer-wrapper').classList.add('hidden');
    state.exam.timer = setInterval(() => {
      state.exam.elapsedSeconds++;
    }, 1000);
  } else {
    state.exam.timeLimit = parseInt(timeVal, 10) * 60;
    state.exam.timeRemaining = state.exam.timeLimit;
    $('exam-timer-wrapper').classList.remove('hidden');
    updateExamTimerDisplay();

    state.exam.timer = setInterval(() => {
      state.exam.timeRemaining--;
      state.exam.elapsedSeconds++;
      updateExamTimerDisplay();
      if (state.exam.timeRemaining <= 0) {
        clearInterval(state.exam.timer);
        finishExam(true);
        showToast('Czas egzaminu minął!');
      }
    }, 1000);
  }

  $('exam-setup').classList.add('hidden');
  $('exam-results').classList.add('hidden');
  $('exam-active').classList.remove('hidden');
  loadExamQuestion();
}

function updateExamTimerDisplay() {
  const mins = Math.floor(Math.max(0, state.exam.timeRemaining) / 60);
  const secs = Math.max(0, state.exam.timeRemaining) % 60;
  $('exam-timer').innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function getExamAnsweredCount() {
  return state.exam.questions.filter((q) => {
    const a = state.exam.answers[q.uid];
    if (Array.isArray(a)) return a.length > 0;
    return a !== undefined && a !== null && String(a).trim() !== '';
  }).length;
}

function loadExamQuestion() {
  const card = $('exam-question-card');
  const q = state.exam.questions[state.exam.currentIndex];
  if (!card || !q) return;

  const savedAns = state.exam.answers[q.uid];
  const answeredTotal = getExamAnsweredCount();

  $('exam-progress-badge').innerHTML = `
    <div class="flex flex-wrap items-center gap-2">
      <span>Pytanie ${state.exam.currentIndex + 1} / ${state.exam.questions.length} (#${q.id})</span>
      ${renderQuestionBadges(q)}
    </div>`;
  $('exam-answered-badge').textContent = `Udzielone: ${answeredTotal}/${state.exam.questions.length}`;

  let inputHTML = '';
  if (isOpenQuestion(q)) {
    const numericMode = isNumericOpenQuestion(q);
    const unitHint = q.unit ? ` [${escapeHtml(q.unit)}]` : '';
    inputHTML = `
      <div class="space-y-2">
        <label for="exam-open-answer" class="block text-xs font-medium text-neutral-600 dark:text-neutral-400">
          ${numericMode ? `Wpisz obliczony wynik liczbowy${unitHint}:` : 'Wpisz swoją odpowiedź:'}
        </label>
        <input type="text" id="exam-open-answer"
          onchange="saveExamOpenAnswer(this.value)"
          oninput="saveExamOpenAnswer(this.value)"
          value="${savedAns != null ? escapeHtml(savedAns) : ''}"
          placeholder="${numericMode ? 'Wpisz wynik liczbowy (np. 1,23)...' : 'Wpisz swoją odpowiedź...'}"
          class="w-full p-2.5 border rounded-md bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 text-sm font-mono text-neutral-900 dark:text-neutral-100" />
      </div>`;
  } else {
    const keys = state.exam.optionOrders[q.uid] || availableLetters(q);
    const useCompactGrid = keys.length > 4;
    const multiMode = isMultiChoiceQuestion(q);

    if (multiMode) {
      const savedMulti = Array.isArray(savedAns) ? savedAns : [];
      inputHTML = `
        <div class="${useCompactGrid ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5' : 'space-y-2'}">
          ${keys.map((optKey, idx) => {
            const isSelected = savedMulti.includes(optKey);
            const displayLetter = LETTERS[idx] || optKey;
            return `
              <button type="button" onclick="toggleExamAnswer('${optKey}')" aria-pressed="${isSelected}" class="${getChoiceOptionClasses(isSelected, useCompactGrid)}">
                <span class="${getChoiceBadgeClasses(isSelected, useCompactGrid)}">${displayLetter}</span>
                <span class="${useCompactGrid ? 'text-xs leading-snug' : 'flex-1 leading-relaxed'}">${escapeHtml(q.options[optKey])}</span>
                <kbd class="hidden sm:inline-block ml-auto text-[10px] font-mono px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-700 text-neutral-400">${idx + 1}</kbd>
              </button>`;
          }).join('')}
        </div>`;
    } else {
      inputHTML = `
        <div class="${useCompactGrid ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5' : 'space-y-2'}">
          ${keys.map((optKey, idx) => {
            const isSelected = savedAns === optKey;
            const displayLetter = LETTERS[idx] || optKey;
            return `
              <button type="button" onclick="selectExamAnswer('${optKey}')" class="${getChoiceOptionClasses(isSelected, useCompactGrid)}">
                <span class="${getChoiceBadgeClasses(isSelected, useCompactGrid)}">${displayLetter}</span>
                <span class="${useCompactGrid ? 'text-xs leading-snug' : 'flex-1 leading-relaxed'}">${escapeHtml(q.options[optKey])}</span>
                <kbd class="hidden sm:inline-block ml-auto text-[10px] font-mono px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-700 text-neutral-400">${idx + 1}</kbd>
              </button>`;
          }).join('')}
        </div>`;
    }
  }

  card.innerHTML = `
    <div class="space-y-4">
      <p class="text-base font-medium leading-relaxed text-neutral-900 dark:text-neutral-100">${escapeHtml(q.question)}</p>
      ${renderQuestionImage(q.image)}
      ${inputHTML}
    </div>`;

  $('exam-prev-btn').disabled = state.exam.currentIndex === 0;
  $('exam-next-btn').disabled = state.exam.currentIndex === state.exam.questions.length - 1;
  triggerMathJax(card);
}

function selectExamAnswer(key) {
  const q = state.exam.questions[state.exam.currentIndex];
  if (!q) return;
  state.exam.answers[q.uid] = key;
  loadExamQuestion();
}

function toggleExamAnswer(key) {
  const q = state.exam.questions[state.exam.currentIndex];
  if (!q) return;
  const currentSelected = Array.isArray(state.exam.answers[q.uid]) ? state.exam.answers[q.uid] : [];
  if (currentSelected.includes(key)) {
    state.exam.answers[q.uid] = currentSelected.filter((k) => k !== key);
  } else {
    state.exam.answers[q.uid] = [...currentSelected, key];
  }
  loadExamQuestion();
}

function saveExamOpenAnswer(val) {
  const q = state.exam.questions[state.exam.currentIndex];
  if (!q) return;
  state.exam.answers[q.uid] = val;
  $('exam-answered-badge').textContent = `Udzielone: ${getExamAnsweredCount()}/${state.exam.questions.length}`;
}

function prevExamQuestion() {
  if (state.exam.currentIndex > 0) {
    state.exam.currentIndex--;
    loadExamQuestion();
  }
}

function nextExamQuestion() {
  if (state.exam.currentIndex < state.exam.questions.length - 1) {
    state.exam.currentIndex++;
    loadExamQuestion();
  }
}

function finishExam(forceTimeout = false) {
  if (!forceTimeout) {
    const unanswered = state.exam.questions.length - getExamAnsweredCount();
    if (unanswered > 0 && !confirm(`Nie udzielono odpowiedzi na ${unanswered} ${plural(unanswered, 'pytanie', 'pytania', 'pytań')}. Zakończyć egzamin?`)) {
      return;
    }
  }

  if (state.exam.timer) clearInterval(state.exam.timer);
  state.exam.active = false;
  $('exam-active').classList.add('hidden');
  $('exam-results').classList.remove('hidden');
  calculateAndDisplayResults();
}

function calculateAndDisplayResults() {
  let reviewHTML = '';

  state.exam.questions.forEach((q, idx) => {
    const userAns = state.exam.answers[q.uid];

    if (isOpenQuestion(q)) {
      const hasAns = userAns != null && String(userAns).trim() !== '';
      const autoMatch = hasAns ? isOpenAnswerCorrect(q, userAns) : false;
      if (state.exam.selfAssessments[q.uid] === undefined) {
        state.exam.selfAssessments[q.uid] = autoMatch;
      }
      const isAssessed = state.exam.selfAssessments[q.uid] === true;
      updateQuestionHistory(q.uid, isAssessed);

      reviewHTML += `
        <div id="self-assess-${escapeHtml(q.uid)}" class="p-4 rounded-lg border-2 ${isAssessed ? 'border-emerald-500/80 bg-emerald-50/70 dark:border-emerald-700/80 dark:bg-emerald-950/30' : 'border-rose-500/80 bg-rose-50/70 dark:border-rose-700/80 dark:bg-rose-950/30'} space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div class="flex flex-wrap items-center gap-2">
              <span class="font-mono text-xs text-neutral-500">Pytanie ${idx + 1} (#${q.id})</span>
              ${renderQuestionBadges(q)}
            </div>
            <span id="self-assess-badge-${escapeHtml(q.uid)}" class="text-xs font-mono font-bold ${isAssessed ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/60 border border-emerald-300 dark:border-emerald-700' : 'text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-900/60 border border-rose-300 dark:border-rose-700'} px-2 py-0.5 rounded">${isAssessed ? '✓ Poprawna' : '✗ Błędna'}</span>
          </div>
          <p class="font-medium text-sm leading-snug text-neutral-900 dark:text-neutral-100">${escapeHtml(q.question)}</p>
          ${renderQuestionImage(q.image)}
          <div class="p-3 bg-white dark:bg-neutral-800 rounded-md text-xs border border-neutral-200 dark:border-neutral-700">
            <strong class="block text-neutral-400 mb-1">Twoja odpowiedź:</strong>
            ${hasAns ? `<span class="font-mono font-bold text-neutral-900 dark:text-neutral-100">${escapeHtml(userAns)}</span>` : '<span class="italic text-rose-500 font-medium">Brak odpowiedzi</span>'}
            ${hasAns ? `
              <div class="mt-1 font-mono text-[11px] font-semibold ${autoMatch ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}">
                ${autoMatch ? '✓ Rozpoznano poprawną wartość liczbową' : '✗ Automatyczne sprawdzenie: wartość różni się od wzorca'}
              </div>` : ''}
          </div>
          <div class="p-3 bg-neutral-100/60 dark:bg-neutral-800/60 rounded-md text-xs border border-neutral-200 dark:border-neutral-700 space-y-1.5">
            <strong class="block text-neutral-600 dark:text-neutral-300">Wzorzec rozwiązania:</strong>
            <div class="font-mono font-bold text-neutral-900 dark:text-neutral-100">${escapeHtml(formatOpenStandardAnswer(q))}</div>
            <div class="text-neutral-600 dark:text-neutral-400 whitespace-pre-line border-t border-neutral-200 dark:border-neutral-700 pt-2">${escapeHtml(q.explanation)}</div>
          </div>
          <div id="self-assess-actions-${escapeHtml(q.uid)}" class="flex flex-wrap items-center justify-between gap-2 pt-1">
            <span class="text-xs text-neutral-500 font-medium">Samoocena punktowa:</span>
            <div class="flex items-center space-x-2">
              <button type="button" onclick="selfAssess('${escapeHtml(q.uid)}', false)" class="px-3 py-1.5 text-xs rounded font-bold transition-colors ${!isAssessed ? 'bg-rose-600 text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-rose-600 hover:text-white'}">Niezaliczone</button>
              <button type="button" onclick="selfAssess('${escapeHtml(q.uid)}', true)" class="px-3 py-1.5 text-xs rounded font-bold transition-colors ${isAssessed ? 'bg-emerald-600 text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-emerald-600 hover:text-white'}">Zaliczone</button>
            </div>
          </div>
        </div>`;
    } else {
      const isCorrect = isAnswerCorrect(q, userAns);
      updateQuestionHistory(q.uid, isCorrect);
      const userAnsText = formatAnswerText(q, userAns);
      const correctText = formatAnswerText(q, q.correct);

      reviewHTML += `
        <div class="p-4 rounded-lg border-2 ${isCorrect ? 'border-emerald-500/80 bg-emerald-50/70 dark:border-emerald-700/80 dark:bg-emerald-950/30' : 'border-rose-500/80 bg-rose-50/70 dark:border-rose-700/80 dark:bg-rose-950/30'} space-y-2.5">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div class="flex flex-wrap items-center gap-2">
              <span class="font-mono text-xs text-neutral-500">Pytanie ${idx + 1} (#${q.id})</span>
              ${renderQuestionBadges(q)}
            </div>
            <span class="text-xs font-mono font-bold ${isCorrect ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/60 border border-emerald-300 dark:border-emerald-700' : 'text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-900/60 border border-rose-300 dark:border-rose-700'} px-2 py-0.5 rounded">${isCorrect ? '✓ Poprawna' : '✗ Błędna'}</span>
          </div>
          <p class="font-medium text-sm leading-snug text-neutral-900 dark:text-neutral-100">${escapeHtml(q.question)}</p>
          ${renderQuestionImage(q.image)}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs pt-1">
            <div class="p-2 rounded ${isCorrect ? 'bg-emerald-100/60 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100 border border-emerald-200 dark:border-emerald-800' : 'bg-rose-100/60 dark:bg-rose-900/40 text-rose-900 dark:text-rose-100 border border-rose-200 dark:border-rose-800'}">
              <strong>Twoja odpowiedź:</strong> ${userAnsText}
            </div>
            <div class="p-2 rounded bg-emerald-100/60 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100 border border-emerald-200 dark:border-emerald-800">
              <strong>Poprawna:</strong> ${correctText}
            </div>
          </div>
          <div class="mt-2 text-xs text-neutral-600 dark:text-neutral-400 border-t ${isCorrect ? 'border-emerald-200/60 dark:border-emerald-900/40' : 'border-rose-200/60 dark:border-rose-900/40'} pt-2 whitespace-pre-line">${escapeHtml(q.explanation)}</div>
        </div>`;
    }
  });

  const reviewContainer = $('exam-results-review');
  reviewContainer.innerHTML = reviewHTML;

  const mins = Math.floor(state.exam.elapsedSeconds / 60);
  const secs = state.exam.elapsedSeconds % 60;
  $('exam-time-elapsed').innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  refreshExamSummary(true);
  triggerMathJax(reviewContainer);
}

function refreshExamSummary(saveBest = false) {
  let correctCount = 0;
  const totalEvaluated = state.exam.questions.length;
  const wrongUids = [];

  state.exam.questions.forEach((q) => {
    let ok = false;
    if (isOpenQuestion(q)) {
      ok = state.exam.selfAssessments[q.uid] === true;
    } else {
      ok = isAnswerCorrect(q, state.exam.answers[q.uid]);
    }
    if (ok) correctCount++;
    else wrongUids.push(q.uid);
  });

  state.exam.lastWrong = wrongUids;
  const percentage = totalEvaluated > 0 ? Math.round((correctCount / totalEvaluated) * 100) : 0;

  $('exam-score').innerText = `${percentage}%`;
  $('exam-correct-count').innerText = `${correctCount} / ${totalEvaluated}`;

  const isPassed = percentage >= 50;
  const statusTitle = $('exam-result-title');
  const finalGrade = $('exam-final-grade');

  if (isPassed) {
    statusTitle.innerText = 'Wynik: Egzamin Zaliczony';
    finalGrade.innerText = 'Pozytywna';
    finalGrade.className = 'text-lg font-mono font-bold mt-0.5 text-emerald-600 dark:text-emerald-400';
  } else {
    statusTitle.innerText = 'Wynik: Egzamin Niezaliczeniowy';
    finalGrade.innerText = 'Do powtórki';
    finalGrade.className = 'text-lg font-mono font-bold mt-0.5 text-rose-600 dark:text-rose-400';
  }

  const retryBtn = $('exam-retry-wrong-btn');
  if (retryBtn) {
    retryBtn.classList.toggle('hidden', wrongUids.length === 0);
  }

  if (saveBest && totalEvaluated > 0) {
    const stats = getStoredStats();
    if (stats.bestExam == null || percentage > stats.bestExam) {
      stats.bestExam = percentage;
      saveStoredStats(stats);
      updateProgressDOM();
    }
  }
}

window.selfAssess = function(uid, status) {
  state.exam.selfAssessments[uid] = status;
  const card = $(`self-assess-${uid}`);
  const badge = $(`self-assess-badge-${uid}`);
  const actions = $(`self-assess-actions-${uid}`);

  if (card) {
    card.className = status
      ? 'p-4 rounded-lg border-2 border-emerald-500/80 bg-emerald-50/70 dark:border-emerald-700/80 dark:bg-emerald-950/30 space-y-3'
      : 'p-4 rounded-lg border-2 border-rose-500/80 bg-rose-50/70 dark:border-rose-700/80 dark:bg-rose-950/30 space-y-3';
  }
  if (badge) {
    badge.className = status
      ? 'text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/60 border border-emerald-300 dark:border-emerald-700 px-2 py-0.5 rounded'
      : 'text-xs font-mono font-bold text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-900/60 border border-rose-300 dark:border-rose-700 px-2 py-0.5 rounded';
    badge.innerText = status ? '✓ Poprawna' : '✗ Błędna';
  }
  if (actions) {
    actions.innerHTML = `
      <span class="text-xs text-neutral-500 font-medium">Samoocena punktowa:</span>
      <div class="flex items-center space-x-2">
        <button type="button" onclick="selfAssess('${escapeHtml(uid)}', false)" class="px-3 py-1.5 text-xs rounded font-bold transition-colors ${!status ? 'bg-rose-600 text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-rose-600 hover:text-white'}">Niezaliczone</button>
        <button type="button" onclick="selfAssess('${escapeHtml(uid)}', true)" class="px-3 py-1.5 text-xs rounded font-bold transition-colors ${status ? 'bg-emerald-600 text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-emerald-600 hover:text-white'}">Zaliczone</button>
      </div>`;
  }

  refreshExamSummary(true);
  updateQuestionHistory(uid, status);
};

function retryWrongExamQuestions() {
  if (!state.exam.lastWrong || state.exam.lastWrong.length === 0) return;
  state.study.order = shuffleArray([...state.exam.lastWrong]);
  state.study.pos = 0;
  state.exam.lastWrong.forEach((uid) => { delete state.study.answered[uid]; });
  state.tabLoaded.study = true;
  loadStudyQuestion();
  switchTab('study');
  showToast(`Załadowano ${state.study.order.length} błędnych pytań do powtórki.`);
}

function exitExam() {
  $('exam-results').classList.add('hidden');
  $('exam-setup').classList.remove('hidden');
}

/* ======================= Przeglądarka Bazy Pytań ======================= */
function initBrowseDatabase() {
  applyBrowseFilter();
  setupBrowseInfiniteScroll();
}

function onBrowseFilterChange() {
  state.browse.scope = $('browse-scope-filter').value;
  state.browse.typeFilter = $('browse-type-filter').value;
  applyBrowseFilter();
}

function onSearchInput(val) {
  state.browse.query = val || '';
  clearTimeout(state.browse.searchTimeout);
  state.browse.searchTimeout = setTimeout(() => {
    applyBrowseFilter();
  }, 150);
}

function clearBrowseSearch() {
  state.browse.query = '';
  $('search-input').value = '';
  applyBrowseFilter();
  $('search-input').focus();
}

function onBrowseShowAnswersChange(checked) {
  state.browse.showAll = Boolean(checked);
  if (!state.browse.showAll) {
    state.browse.checked = {};
  }
  applyBrowseFilter();
}

function resetBrowseChecked() {
  state.browse.checked = {};
  applyBrowseFilter();
}

function toggleBrowseToc() {
  state.browse.tocVisible = !state.browse.tocVisible;
  $('browse-toc-wrap').classList.toggle('hidden', !state.browse.tocVisible);
  $('browse-toc-toggle-label').textContent = state.browse.tocVisible ? 'Ukryj spis numerów' : 'Pokaż spis numerów';
}

function highlightText(str, rawKeyword) {
  const text = String(str ?? '');
  if (!rawKeyword) return escapeHtml(text);
  const escapedKw = rawKeyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const rx = new RegExp(`(${escapedKw})`, 'gi');
  return text.split(rx).map((part, i) => (
    i % 2 === 1
      ? `<mark class="bg-amber-300/60 dark:bg-amber-500/30 text-neutral-900 dark:text-amber-100 rounded px-0.5">${escapeHtml(part)}</mark>`
      : escapeHtml(part)
  )).join('');
}

function parseBrowseQuery(raw) {
  const trimmed = String(raw || '').trim();
  if (!trimmed) return { type: 'all', value: '' };
  const hashMatch = trimmed.match(/^#\s*(\d+)$/);
  if (hashMatch) return { type: 'id', id: Number(hashMatch[1]), raw: trimmed };
  const numMatch = trimmed.match(/^(\d+)$/);
  if (numMatch) return { type: 'id', id: Number(numMatch[1]), raw: trimmed };
  return { type: 'keyword', keyword: trimmed.toLowerCase(), raw: trimmed };
}

function applyBrowseFilter() {
  const rawQuery = $('search-input') ? $('search-input').value : state.browse.query;
  state.browse.query = rawQuery;
  $('browse-search-clear').classList.toggle('hidden', rawQuery.trim() === '');

  const parsed = parseBrowseQuery(rawQuery);
  const scopePool = filterQuestionsByScopeAndType(state.browse.scope, state.browse.typeFilter);

  state.browse.filtered = scopePool.filter((q) => {
    if (parsed.type === 'all') return true;
    if (parsed.type === 'id') return Number(q.id) === parsed.id;
    return q._searchText.includes(parsed.keyword);
  });

  $('browse-title').innerText = `Baza pytań (${state.browse.filtered.length})`;
  const hasChecked = Object.keys(state.browse.checked).length > 0;
  $('browse-reset-checked').classList.toggle('hidden', state.browse.showAll || !hasChecked);

  renderBrowseToc(scopePool);

  const list = $('browse-list');
  list.innerHTML = '';
  state.browse.renderedCount = 0;

  if (state.browse.filtered.length === 0) {
    list.innerHTML = `
      <div class="text-center py-10 bg-white dark:bg-[#18181b] rounded-lg border border-neutral-200 dark:border-neutral-800 space-y-2">
        <p class="text-xs text-neutral-500">Nie znaleziono pytań spełniających kryteria.</p>
        <button type="button" onclick="clearBrowseSearch()" class="text-xs font-medium underline text-neutral-800 dark:text-neutral-200">Wyczyść wyszukiwanie</button>
      </div>`;
    $('browse-load-more-wrap').classList.add('hidden');
    return;
  }

  loadMoreBrowseQuestions();
}

function renderBrowseToc(scopePool) {
  const toc = $('browse-toc');
  if (!toc) return;
  const filteredUids = new Set(state.browse.filtered.map((q) => q.uid));

  toc.innerHTML = scopePool.map((q) => {
    const inFilter = filteredUids.has(q.uid);
    const chk = state.browse.checked[q.uid];
    const label = q.src === 'exam' ? `E${q.id}` : `W${q.lectureId}.${q.id}`;

    let cls = 'h-7 px-1 rounded text-[11px] font-mono border transition-colors truncate ';
    if (!state.browse.showAll && chk) {
      if (chk.mode === 'reveal' || chk.isCorrect) {
        cls += 'border-emerald-500/70 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300';
      } else {
        cls += 'border-rose-500/70 bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300';
      }
    } else if (inFilter) {
      cls += 'border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-850 text-neutral-800 dark:text-neutral-200 hover:border-neutral-500';
    } else {
      cls += 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-400 opacity-50 hover:opacity-100';
    }

    const title = q.src === 'exam'
      ? `Baza egzaminacyjna #${q.id}`
      : `Wykład ${q.lectureId} — Pytanie #${q.id}`;

    return `<button type="button" onclick="jumpToBrowseQuestion('${escapeHtml(q.uid)}')" title="${escapeHtml(title)}" class="${cls}">${escapeHtml(label)}</button>`;
  }).join('');
}

function createBrowseCardHTML(q) {
  const parsed = parseBrowseQuery(state.browse.query);
  const kw = parsed.type === 'keyword' ? parsed.raw : '';
  const chk = state.browse.checked[q.uid];
  const revealed = state.browse.showAll || Boolean(chk);
  const openMode = isOpenQuestion(q);
  const stats = getStoredStats();
  const isStarred = stats.stars.includes(q.uid);

  let interactiveHTML = '';
  if (openMode) {
    const val = chk && chk.userInput != null ? chk.userInput : '';
    const isSelfChecked = Boolean(chk && chk.mode === 'open');
    const feedbackLine = isSelfChecked
      ? `<div class="mt-2 p-2.5 rounded border text-xs font-medium ${chk.isCorrect ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200' : 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200'}">
          ${chk.isCorrect ? '✓ Wynik poprawny!' : `✗ Różnica w wyniku. Wzorzec: ${escapeHtml(formatOpenStandardAnswer(q))}`}
        </div>`
      : '';

    interactiveHTML = `
      ${!state.browse.showAll ? `
        <div class="flex flex-col sm:flex-row gap-2 pt-1">
          <input type="text" id="browse-open-input-${escapeHtml(q.uid)}" value="${escapeHtml(val)}"
            placeholder="Wpisz obliczony wynik (np. 1,23)..."
            onkeydown="if(event.key==='Enter') checkBrowseOpen('${escapeHtml(q.uid)}')"
            class="flex-1 px-2.5 py-1.5 border rounded-md bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-xs font-mono text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100" />
          <button type="button" onclick="checkBrowseOpen('${escapeHtml(q.uid)}')" class="px-3 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 text-xs font-medium transition-colors">
            Sprawdź wynik
          </button>
        </div>` : ''}
      ${feedbackLine}`;
  } else {
    interactiveHTML = `
      <div class="grid gap-1.5 pt-1">
        ${availableLetters(q).map((letter) => {
          let cls = 'w-full text-left flex items-start gap-2.5 p-2.5 rounded-md border text-xs transition-colors ';
          let badgeCls = 'w-5 h-5 rounded border flex items-center justify-center font-mono text-[11px] font-medium shrink-0 ';
          let icon = '';

          if (revealed) {
            const correctList = getCorrectAnswers(q);
            if (correctList.includes(letter)) {
              cls += 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-950 dark:text-emerald-100 font-semibold';
              badgeCls += 'bg-emerald-600 text-white border-emerald-700';
              icon = '<span class="ml-auto font-mono text-emerald-600 dark:text-emerald-400 font-bold">✓</span>';
            } else if (chk && chk.mode === 'choice' && chk.chosenKey === letter) {
              cls += 'border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-rose-950 dark:text-rose-100 font-semibold';
              badgeCls += 'bg-rose-600 text-white border-rose-700';
              icon = '<span class="ml-auto font-mono text-rose-600 dark:text-rose-400 font-bold">✗</span>';
            } else {
              cls += 'border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 text-neutral-400 opacity-75';
              badgeCls += 'border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-400';
            }
          } else {
            cls += 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-850 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600 cursor-pointer';
            badgeCls += 'border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300';
          }

          return `
            <button type="button" ${state.browse.showAll ? 'disabled' : `onclick="checkBrowseChoice('${escapeHtml(q.uid)}', '${letter}')"`} class="${cls}">
              <span class="${badgeCls}">${letter}</span>
              <span class="flex-1 leading-relaxed">${highlightText(q.options[letter], kw)}</span>
              ${icon}
            </button>`;
        }).join('')}
      </div>`;
  }

  const revealBtnHTML = !state.browse.showAll
    ? `<button type="button" onclick="toggleBrowseReveal('${escapeHtml(q.uid)}')" class="text-xs font-medium px-2 py-1 rounded-md border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 transition-colors">
        ${revealed ? 'Ukryj' : 'Pokaż odp.'}
      </button>`
    : '';

  const solutionBlock = revealed
    ? `<div class="text-xs text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-850 p-3 rounded-md border border-neutral-200 dark:border-neutral-800 space-y-1.5">
        <p class="font-medium text-neutral-900 dark:text-neutral-200">Wzorzec / Wyjaśnienie:</p>
        <div class="leading-relaxed whitespace-pre-line">${escapeHtml(q.explanation || 'Brak wyjaśnienia.')}</div>
        ${openMode
          ? `<div class="mt-2 font-mono font-medium text-neutral-900 dark:text-neutral-100 border-t border-neutral-200 dark:border-neutral-700 pt-1.5">Wynik / Wzór: ${escapeHtml(formatOpenStandardAnswer(q))}</div>`
          : `<div class="mt-2 font-mono font-medium text-neutral-900 dark:text-neutral-100 border-t border-neutral-200 dark:border-neutral-700 pt-1.5">Poprawna: ${formatAnswerText(q, q.correct)}</div>`}
      </div>`
    : '';

  return `
    <article id="browse-card-${escapeHtml(q.uid)}" class="bg-white dark:bg-[#18181b] p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 space-y-3 browse-card" data-uid="${escapeHtml(q.uid)}">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-xs font-mono text-neutral-400">#${q.id}</span>
          ${renderQuestionBadges(q)}
          ${q.lectureTitle ? `<span class="text-[11px] font-mono text-neutral-500 hidden sm:inline">${highlightText(q.lectureTitle, kw)}</span>` : ''}
        </div>
        <div class="flex flex-wrap items-center gap-1.5">
          ${revealBtnHTML}
          <button type="button" onclick="toggleStar('${escapeHtml(q.uid)}')" id="browse-star-${escapeHtml(q.uid)}" class="p-1 text-neutral-400 hover:text-amber-500 transition-colors" title="Ulubione">
            <svg class="w-4 h-4 ${isStarred ? 'text-amber-500 fill-current' : 'fill-none'}" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
          </button>
          <button type="button" onclick="copyQuestionLink('${escapeHtml(q.uid)}')" class="text-xs font-medium px-2 py-1 rounded-md border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 transition-colors">
            Link
          </button>
          <button type="button" onclick="studyNow('${escapeHtml(q.uid)}')" class="text-xs font-medium px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors">
            Ćwicz &rarr;
          </button>
        </div>
      </div>
      <p class="font-medium text-sm leading-snug text-neutral-900 dark:text-neutral-100">${highlightText(q.question, kw)}</p>
      ${renderQuestionImage(q.image)}
      ${interactiveHTML}
      ${solutionBlock}
    </article>`;
}

function refreshBrowseCard(uid) {
  const card = $(`browse-card-${uid}`);
  const q = state.questionMap.get(uid);
  if (!card || !q) return;
  const wrapper = document.createElement('div');
  wrapper.innerHTML = createBrowseCardHTML(q).trim();
  const newCard = wrapper.firstElementChild;
  card.replaceWith(newCard);
  triggerMathJax(newCard);

  const scopePool = filterQuestionsByScopeAndType(state.browse.scope, state.browse.typeFilter);
  renderBrowseToc(scopePool);
  const hasChecked = Object.keys(state.browse.checked).length > 0;
  $('browse-reset-checked').classList.toggle('hidden', state.browse.showAll || !hasChecked);
}

function refreshBrowseStarButtons(uid) {
  const btn = $(`browse-star-${uid}`);
  if (!btn) return;
  const isStarred = getStoredStats().stars.includes(uid);
  const svg = btn.querySelector('svg');
  if (svg) {
    svg.classList.toggle('text-amber-500', isStarred);
    svg.classList.toggle('fill-current', isStarred);
    svg.classList.toggle('fill-none', !isStarred);
  }
}

window.checkBrowseChoice = function(uid, letter) {
  const q = state.questionMap.get(uid);
  if (!q || state.browse.showAll) return;
  state.browse.checked[uid] = {
    mode: 'choice',
    chosenKey: letter,
    isCorrect: letter === q.correct
  };
  refreshBrowseCard(uid);
};

window.checkBrowseOpen = function(uid) {
  const q = state.questionMap.get(uid);
  const input = $(`browse-open-input-${uid}`);
  if (!q || !input) return;
  const val = input.value.trim();
  if (!val || isNaN(parsePolishNumber(val))) {
    showToast('Wpisz poprawną wartość liczbową (np. 1,23).');
    return;
  }
  state.browse.checked[uid] = {
    mode: 'open',
    userInput: val,
    isCorrect: isOpenAnswerCorrect(q, val)
  };
  refreshBrowseCard(uid);
};

window.toggleBrowseReveal = function(uid) {
  if (state.browse.checked[uid]) {
    delete state.browse.checked[uid];
  } else {
    state.browse.checked[uid] = { mode: 'reveal' };
  }
  refreshBrowseCard(uid);
};

window.jumpToBrowseQuestion = function(uid) {
  let card = $(`browse-card-${uid}`);
  if (!card) {
    if (state.browse.query.trim() !== '') {
      state.browse.query = '';
      $('search-input').value = '';
      applyBrowseFilter();
    }
    while (state.browse.renderedCount < state.browse.filtered.length && !$(`browse-card-${uid}`)) {
      loadMoreBrowseQuestions();
    }
    card = $(`browse-card-${uid}`);
  }
  if (!card) return;
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  card.classList.remove('card-flash');
  void card.offsetWidth;
  card.classList.add('card-flash');
};

function loadMoreBrowseQuestions() {
  const list = $('browse-list');
  const total = state.browse.filtered.length;
  if (state.browse.renderedCount >= total) {
    $('browse-load-more-wrap').classList.add('hidden');
    return;
  }

  const nextBatch = state.browse.filtered.slice(state.browse.renderedCount, state.browse.renderedCount + BROWSE_PAGE_SIZE);
  const fragment = document.createElement('div');
  fragment.className = 'space-y-3';
  fragment.innerHTML = nextBatch.map(createBrowseCardHTML).join('');
  list.appendChild(fragment);

  state.browse.renderedCount += nextBatch.length;
  $('browse-loaded-count').innerText = state.browse.renderedCount;
  $('browse-total-count').innerText = total;
  $('browse-load-more-wrap').classList.toggle('hidden', state.browse.renderedCount >= total);

  triggerMathJax(fragment);
}

function setupBrowseInfiniteScroll() {
  if (state.browse.observer) return;
  const sentinel = $('browse-infinite-sentinel');
  if (!sentinel || typeof IntersectionObserver === 'undefined') return;

  state.browse.observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && state.browse.renderedCount < state.browse.filtered.length) {
      loadMoreBrowseQuestions();
    }
  }, { rootMargin: '250px' });

  state.browse.observer.observe(sentinel);
}

/* ======================= Ulubione pytania ======================= */
function loadStarredQuestions() {
  const list = $('starred-list');
  if (!list) return;
  const stats = getStoredStats();
  const starredQuestions = state.allQuestions.filter((q) => stats.stars.includes(q.uid));

  if (starredQuestions.length === 0) {
    list.innerHTML = `
      <div class="text-center py-12 bg-white dark:bg-[#18181b] rounded-lg border border-neutral-200 dark:border-neutral-800">
        <p class="text-xs text-neutral-500">Brak zapisanych ulubionych pytań.</p>
        <button type="button" onclick="switchTab('study')" class="mt-3 text-xs font-medium text-neutral-900 dark:text-neutral-100 underline hover:no-underline">Przejdź do nauki i oznacz gwiazdką</button>
      </div>`;
    return;
  }

  list.innerHTML = starredQuestions.map((q) => `
    <div class="bg-white dark:bg-[#18181b] p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 space-y-3">
      <div class="flex items-center justify-between gap-2">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-xs font-mono text-neutral-400">#${q.id}</span>
          ${renderQuestionBadges(q)}
        </div>
        <div class="flex items-center space-x-2">
          <button type="button" onclick="toggleStar('${escapeHtml(q.uid)}')" class="text-amber-500 hover:text-neutral-400 p-1" title="Usuń z ulubionych">
            <svg class="w-4 h-4 fill-current" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
          </button>
          <button type="button" onclick="studyNow('${escapeHtml(q.uid)}')" class="text-xs font-medium px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300">
            Ćwicz &rarr;
          </button>
        </div>
      </div>
      <p class="font-medium text-sm leading-snug text-neutral-900 dark:text-neutral-100">${escapeHtml(q.question)}</p>
      ${renderQuestionImage(q.image)}
    </div>`).join('');

  triggerMathJax(list);
}

/* ======================= Wzory i Ściągawki ======================= */
function filterFormulas(lab, btn) {
  state.formulas.filter = String(lab);
  document.querySelectorAll('.formula-filter-btn').forEach((b) => {
    b.className = 'formula-filter-btn px-3 py-1.5 rounded-md text-xs font-medium border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-750';
  });
  if (btn) {
    btn.className = 'formula-filter-btn px-3 py-1.5 rounded-md text-xs font-medium border border-neutral-900 dark:border-neutral-100 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900';
  }
  applyFormulaFilters();
}

function searchFormulas(val) {
  state.formulas.search = String(val || '').toLowerCase().trim();
  applyFormulaFilters();
}

function applyFormulaFilters() {
  document.querySelectorAll('.formula-card').forEach((card) => {
    const cardLab = card.getAttribute('data-lab');
    const cardKeywords = (card.getAttribute('data-keywords') || '').toLowerCase();
    const cardText = card.innerText.toLowerCase();

    const matchesLab = state.formulas.filter === 'all' || cardLab === state.formulas.filter;
    const matchesSearch = !state.formulas.search || cardKeywords.includes(state.formulas.search) || cardText.includes(state.formulas.search);
    card.classList.toggle('hidden', !(matchesLab && matchesSearch));
  });
}

/* ======================= Motyw (Light / Dark) i skróty klawiszowe ======================= */
function initThemeToggle() {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    $('theme-sun').classList.remove('hidden');
  } else {
    document.documentElement.classList.remove('dark');
    $('theme-moon').classList.remove('hidden');
  }

  $('theme-toggle').addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      $('theme-sun').classList.add('hidden');
      $('theme-moon').classList.remove('hidden');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      $('theme-moon').classList.add('hidden');
      $('theme-sun').classList.remove('hidden');
    }
  });
}

function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    if (e.key === 'Escape') {
      closeImageModal();
    }

    const activeEl = document.activeElement;
    if (activeEl && ['INPUT', 'TEXTAREA', 'SELECT'].includes(activeEl.tagName)) {
      if (e.key === 'Escape' && activeEl.id === 'search-input') {
        activeEl.blur();
      }
      return;
    }

    if (state.activeTab === 'study' && state.study.order.length > 0) {
      const uid = state.study.order[state.study.pos];
      const q = state.questionMap.get(uid);
      if (!q) return;

      if (!isOpenQuestion(q)) {
        const keys = getStudyOptionOrder(q);
        const handler = isMultiChoiceQuestion(q) ? toggleStudyMultiAnswer : checkStudyAnswer;
        if (/^[1-8]$/.test(e.key)) {
          const optKey = keys[Number(e.key) - 1];
          if (optKey) { e.preventDefault(); handler(optKey); }
        } else if (/^[a-hA-H]$/.test(e.key)) {
          const idx = LETTERS.indexOf(e.key.toUpperCase());
          const optKey = keys[idx];
          if (optKey) { e.preventDefault(); handler(optKey); }
        }
      }

      if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        nextStudyQuestion();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevStudyQuestion();
      }
    } else if (state.activeTab === 'exam' && state.exam.active) {
      const q = state.exam.questions[state.exam.currentIndex];
      if (!q) return;

      if (!isOpenQuestion(q)) {
        const keys = state.exam.optionOrders[q.uid] || availableLetters(q);
        const examHandler = isMultiChoiceQuestion(q) ? toggleExamAnswer : selectExamAnswer;
        if (/^[1-8]$/.test(e.key)) {
          const optKey = keys[Number(e.key) - 1];
          if (optKey) { e.preventDefault(); examHandler(optKey); }
        } else if (/^[a-hA-H]$/.test(e.key)) {
          const idx = LETTERS.indexOf(e.key.toUpperCase());
          const optKey = keys[idx];
          if (optKey) { e.preventDefault(); examHandler(optKey); }
        }
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextExamQuestion();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevExamQuestion();
      }
    } else if (state.activeTab === 'browse' && e.key === '/') {
      e.preventDefault();
      $('search-input').focus();
    }
  });
}

/* ======================= Inicjalizacja aplikacji ======================= */
function bootstrapMetroLeszek() {
  if (window.__METROLESZEK_INITIALIZED__) return;
  window.__METROLESZEK_INITIALIZED__ = true;

  initThemeToggle();
  initProgress();
  bindManualFileLoaders();
  initKeyboardShortcuts();

  $('logo').addEventListener('click', () => switchTab('dashboard'));
  window.addEventListener('popstate', handleUrlRouting);

  loadAllDatabases();
}

window.addEventListener('DOMContentLoaded', bootstrapMetroLeszek);
if (document.readyState !== 'loading') {
  bootstrapMetroLeszek();
}
