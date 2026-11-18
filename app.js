// ¡Aprende Español! — logica dell'app (nessuna dipendenza, funziona offline)
'use strict';

const STORE_KEY = 'spanish-course-v1';
const PASS = 0.7;                       // 70% per superare una lezione
const SRS_INTERVALS = [0, 1, 3, 7, 14, 30, 60]; // giorni per box (Leitner)
const RHYTHMS = {
  2: '2 lezioni a settimana',
  3: '3 lezioni a settimana',
  5: '5 lezioni a settimana',
  7: 'Ogni giorno'
};

// ---------- Stato ----------
const defaultState = () => ({
  rhythm: 2, startDate: today(), unlockAll: false,
  lessons: {},   // id -> {best, done, date, attempts}
  cards: {},     // es -> {it, box, due, lesson}
  activity: {}   // 'YYYY-MM-DD' -> {lessons:n, reviews:n}
});
let state = load();

function load() {
  try { return Object.assign(defaultState(), JSON.parse(localStorage.getItem(STORE_KEY)) || {}); }
  catch { return defaultState(); }
}
function save() { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }

// ---------- Utilità ----------
function today(d = new Date()) {
  const z = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
}
function addDays(iso, n) { const d = new Date(iso + 'T12:00:00'); d.setDate(d.getDate() + n); return today(d); }
function fmtDate(iso) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
}
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
const $ = sel => document.querySelector(sel);

function norm(s, keepAccents) {
  s = String(s).toLowerCase().trim().replace(/[¿?¡!.,;:"«»]/g, '').replace(/\s+/g, ' ');
  if (!keepAccents) s = s.normalize('NFD').replace(/[̀-ͯ]/g, '');
  return s;
}
// Ritorna 'ok' | 'accent' | 'wrong'
function check(input, answers) {
  if (answers.some(a => norm(a, true) === norm(input, true))) return 'ok';
  if (answers.some(a => norm(a) === norm(input))) return 'accent';
  return 'wrong';
}
// Varianti accettate per parole del vocabolario tipo "encantado / encantada", "el médico / la médica"
function variants(es) {
  const parts = es.split('/').map(s => s.trim()).filter(Boolean);
  const out = new Set([es, ...parts]);
  parts.forEach(p => out.add(p.replace(/^(el|la|los|las)\s+/i, '')));
  return [...out];
}

// ---------- Sintesi vocale ----------
let esVoice = null;
function pickVoice() {
  const vs = speechSynthesis.getVoices();
  esVoice = vs.find(v => v.lang === 'es-ES') || vs.find(v => v.lang && v.lang.startsWith('es')) || null;
}
if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function speak(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text.replace(/\//g, ','));
  u.lang = 'es-ES'; u.rate = 0.85; if (esVoice) u.voice = esVoice;
  speechSynthesis.speak(u);
}
const spk = t => `<button class="spk" title="Ascolta" data-say="${esc(t)}">🔊</button>`;
document.addEventListener('click', e => {
  const b = e.target.closest('[data-say]'); if (b) speak(b.dataset.say);
});

// ---------- Logica corso ----------
const completedCount = () => LESSONS.filter(l => state.lessons[l.id]?.done).length;
const nextLesson = () => LESSONS.find(l => !state.lessons[l.id]?.done);
const isUnlocked = l => state.unlockAll || l.id === 1 || state.lessons[l.id - 1]?.done || state.lessons[l.id]?.done;
const dueCards = () => Object.entries(state.cards).filter(([, c]) => c.due <= today());

function logActivity(kind) {
  const d = today(); state.activity[d] = state.activity[d] || { lessons: 0, reviews: 0 };
  state.activity[d][kind]++; save();
}
function streak() {
  let n = 0, d = today();
  if (!state.activity[d]) d = addDays(d, -1); // la serie non si rompe finché la giornata non è finita
  while (state.activity[d]) { n++; d = addDays(d, -1); }
  return n;
}
function weekStart(iso = today()) {
  const d = new Date(iso + 'T12:00:00'); const wd = (d.getDay() + 6) % 7; return addDays(iso, -wd);
}
function lessonsThisWeek() {
  const ws = weekStart(); let n = 0;
  for (let i = 0; i < 7; i++) n += state.activity[addDays(ws, i)]?.lessons || 0;
  return n;
}
function estimatedEnd() {
  const left = LESSONS.length - completedCount();
  if (!left) return null;
  const weeks = left / state.rhythm;
  return addDays(today(), Math.ceil(weeks * 7));
}

// ---------- Viste ----------
function render(view, arg) {
  window.scrollTo(0, 0);
  document.querySelectorAll('nav button').forEach(b => b.classList.toggle('active', b.dataset.view === view));
  ({ home: renderHome, lessons: renderLessonList, lesson: renderLesson, review: renderReview, plan: renderPlan })[view](arg);
}

function renderHome() {
  const done = completedCount(), total = LESSONS.length, nl = nextLesson();
  const wk = lessonsThisWeek(), goal = state.rhythm, due = dueCards().length;
  const end = estimatedEnd();
  const doneToday = state.activity[today()]?.lessons || 0;
  let advice;
  if (!nl) advice = '🎉 Hai completato il corso! Continua a fare il ripasso per non dimenticare.';
  else if (wk >= goal) advice = `Obiettivo settimanale raggiunto (${wk}/${goal}). Se hai tempo, puoi andare avanti lo stesso: ogni lezione in più ti fa arrivare prima!`;
  else if (doneToday) advice = `Oggi hai già fatto ${doneToday} lezione/i. Puoi farne un'altra o fare il ripasso.`;
  else advice = `Ti mancano ${goal - wk} lezione/i per l'obiettivo di questa settimana.`;

  $('#main').innerHTML = `
    <section class="card hero">
      <h2>¡Hola! 👋</h2>
      <p>${advice}</p>
      <div class="stats">
        <div><b>${done}/${total}</b><span>lezioni</span></div>
        <div><b>${wk}/${goal}</b><span>questa settimana</span></div>
        <div><b>🔥 ${streak()}</b><span>giorni di fila</span></div>
        <div><b>${Object.keys(state.cards).length}</b><span>parole imparate</span></div>
      </div>
      <div class="bar"><div style="width:${done / total * 100}%"></div></div>
      ${end ? `<p class="muted">Al ritmo di <b>${RHYTHMS[state.rhythm].toLowerCase()}</b> finirai il livello A2 intorno al <b>${fmtDate(end)}</b>.</p>` : ''}
      <div class="actions">
        ${nl ? `<button class="primary" data-go="lesson" data-id="${nl.id}">▶ Lezione ${nl.id}: ${esc(nl.title)}</button>` : ''}
        <button class="${due ? 'primary alt' : ''}" data-go="review">🔁 Ripasso (${due} da ripassare)</button>
      </div>
    </section>
    <section class="card">
      <h3>Il tuo ritmo</h3>
      <p class="muted">Puoi cambiarlo quando vuoi. Il ritmo serve solo a calcolare l'obiettivo: puoi sempre fare più lezioni del previsto.</p>
      <div class="rhythms">
        ${Object.entries(RHYTHMS).map(([k, v]) => `<button class="${+k === state.rhythm ? 'sel' : ''}" data-rhythm="${k}">${v}</button>`).join('')}
      </div>
    </section>
    <section class="card">
      <h3>Come funziona una sessione</h3>
      <ol>
        <li><b>Ripasso</b> (5 min): le parole delle lezioni precedenti, al momento giusto (ripetizione dilazionata).</li>
        <li><b>Lezione</b> (20-25 min): vocabolario con audio → grammatica → frasi utili → esercizi.</li>
        <li><b>Superamento</b>: almeno il 70% di risposte giuste sblocca la lezione successiva.</li>
      </ol>
      <p class="muted">Nei giorni in cui non fai una lezione, 5 minuti di ripasso bastano per mantenere la serie 🔥.</p>
    </section>`;
}

function renderLessonList() {
  let lvl = '';
  $('#main').innerHTML = `<section class="card">
    <label class="toggle"><input type="checkbox" id="unlockAll" ${state.unlockAll ? 'checked' : ''}> Sblocca tutte le lezioni (se conosci già un po' di spagnolo)</label>
  </section>` + LESSONS.map(l => {
    const s = state.lessons[l.id], open = isUnlocked(l);
    let head = '';
    if (l.level !== lvl) { lvl = l.level; head = `<h2 class="level">Livello ${lvl}</h2>`; }
    return head + `<div class="lesson-row ${open ? '' : 'locked'}" ${open ? `data-go="lesson" data-id="${l.id}"` : ''}>
      <span class="num">${s?.done ? '✅' : open ? l.id : '🔒'}</span>
      <div><b>${esc(l.title)}</b><br><small class="muted">${esc(l.goal)}</small></div>
      <span class="score">${s ? Math.round(s.best * 100) + '%' : ''}</span>
    </div>`;
  }).join('');
  $('#unlockAll').onchange = e => { state.unlockAll = e.target.checked; save(); renderLessonList(); };
}

// --- Lezione a step ---
let L = null; // stato lezione corrente
function renderLesson(id) {
  const lesson = LESSONS.find(l => l.id === +id);
  if (!isUnlocked(lesson)) return render('lessons');
  L = { lesson, step: 0, ex: buildExercises(lesson), i: 0, score: 0, mistakes: [] };
  showStep();
}

function buildExercises(lesson) {
  const pool = LESSONS.flatMap(l => l.vocab);
  const vocab = shuffle(lesson.vocab);
  const gen = [];
  // 4 scelta multipla italiano → spagnolo
  vocab.slice(0, 4).forEach(([es, it]) => {
    const wrong = shuffle(pool.filter(v => v[0] !== es)).slice(0, 3).map(v => v[0]);
    const o = shuffle([es, ...wrong]);
    gen.push({ t: 'mc', q: `Come si dice "<b>${esc(it)}</b>"?`, o, a: o.indexOf(es), say: true });
  });
  // 3 scrittura italiano → spagnolo
  vocab.slice(4, 7).forEach(([es, it]) => gen.push({ t: 'tr', q: esc(it), a: variants(es), vocab: true }));
  return [...gen, ...lesson.exercises];
}

const STEPS = ['Vocabolario', 'Grammatica', 'Frasi utili', 'Esercizi', 'Risultato'];
function stepper() {
  return `<div class="stepper">${STEPS.map((s, i) => `<span class="${i === L.step ? 'cur' : i < L.step ? 'past' : ''}">${s}</span>`).join('')}</div>`;
}

function showStep() {
  const l = L.lesson;
  const header = `<p class="muted"><a href="#" data-go="lessons">← Lezioni</a> · Livello ${l.level}</p>
    <h2>Lezione ${l.id}: ${esc(l.title)}</h2>${stepper()}`;
  const next = (label = 'Avanti →') => `<div class="actions"><button class="primary" id="next">${label}</button></div>`;
  let body = '';
  if (L.step === 0) {
    body = `<section class="card"><p>🎯 <b>Obiettivo:</b> ${esc(l.goal)}</p>
      <p class="muted">Ascolta ogni parola e ripetila ad alta voce. Tocca "🔊 Tutte" per ascoltarle in sequenza.</p>
      <button id="sayAll">🔊 Tutte</button>
      <table class="vocab">${l.vocab.map(([es, it]) => `<tr><td>${spk(es)} <b>${esc(es)}</b></td><td>${esc(it)}</td></tr>`).join('')}</table>
      ${next()}</section>`;
  } else if (L.step === 1) {
    body = `<section class="card grammar">${l.grammar}${next()}</section>`;
  } else if (L.step === 2) {
    body = `<section class="card"><p class="muted">Leggi, ascolta e ripeti. Prova a dirle prima di guardare la traduzione.</p>
      ${l.phrases.map(([es, it]) => `<div class="phrase">${spk(es)} <b>${esc(es)}</b><br><span class="muted">${esc(it)}</span></div>`).join('')}
      <p class="tip">💡 ${esc(l.tip)}</p>${next('Inizia gli esercizi →')}</section>`;
  } else if (L.step === 3) {
    return showExercise(header);
  } else {
    return showResult(header);
  }
  $('#main').innerHTML = header + body;
  $('#next').onclick = () => { L.step++; showStep(); };
  const sa = $('#sayAll');
  if (sa) sa.onclick = () => {
    speechSynthesis.cancel();
    l.vocab.forEach(([es]) => { const u = new SpeechSynthesisUtterance(es.replace(/\//g, ',')); u.lang = 'es-ES'; u.rate = 0.85; if (esVoice) u.voice = esVoice; speechSynthesis.speak(u); });
  };
}

function showExercise(header) {
  const e = L.ex[L.i], n = L.ex.length;
  let input;
  if (e.t === 'mc') {
    input = `<div class="opts">${e.o.map((o, k) => `<button class="opt" data-k="${k}">${esc(o)}</button>`).join('')}</div>`;
  } else {
    input = `<form id="f"><input id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Scrivi in spagnolo…" autofocus>
      <div class="accents">${['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'].map(c => `<button type="button" class="acc">${c}</button>`).join('')}</div>
      <button class="primary">Verifica</button></form>`;
  }
  const prompt = e.t === 'tr' ? `Traduci in spagnolo: <b>${e.q}</b>` :
    e.t === 'fill' ? `Completa: <b>${esc(e.q)}</b>${e.h ? ` <span class="muted">(${esc(e.h)})</span>` : ''}` : e.q;
  $('#main').innerHTML = header + `<section class="card">
    <div class="bar small"><div style="width:${L.i / n * 100}%"></div></div>
    <p class="muted">Esercizio ${L.i + 1} di ${n}</p>
    <p class="question">${prompt}</p>${input}<div id="fb"></div></section>`;

  if (e.t === 'mc') {
    document.querySelectorAll('.opt').forEach(b => b.onclick = () => {
      const k = +b.dataset.k, ok = k === e.a;
      document.querySelectorAll('.opt').forEach((x, j) => { x.disabled = true; if (j === e.a) x.classList.add('right'); });
      if (!ok) b.classList.add('wrong');
      feedback(ok ? 'ok' : 'wrong', e.o[e.a], e.say ? e.o[e.a] : null);
    });
  } else {
    const inp = $('#ans'); inp.focus();
    document.querySelectorAll('.acc').forEach(b => b.onclick = () => {
      const p = inp.selectionStart; inp.value = inp.value.slice(0, p) + b.textContent + inp.value.slice(inp.selectionEnd);
      inp.focus(); inp.setSelectionRange(p + 1, p + 1);
    });
    $('#f').onsubmit = ev => {
      ev.preventDefault(); if (!inp.value.trim()) return;
      inp.disabled = true; $('#f .primary').disabled = true;
      const r = check(inp.value, e.a);
      const shown = e.t === 'fill' ? e.q.replace('___', `<u>${esc(e.a[0])}</u>`) : esc(e.a[0]);
      feedback(r, shown, e.t === 'fill' ? e.q.replace('___', e.a[0]) : e.a[0], true);
    };
  }
}

function feedback(result, correct, sayText, isHtml) {
  const e = L.ex[L.i];
  if (result !== 'wrong') L.score++; else L.mistakes.push(e);
  const msg = result === 'ok' ? '✅ ¡Correcto!' :
    result === 'accent' ? '🟡 Giusto, ma attenzione agli accenti:' : '❌ Risposta corretta:';
  $('#fb').innerHTML = `<div class="fb ${result}">${msg} ${result !== 'ok' ? `<b>${isHtml ? correct : esc(correct)}</b>` : ''}
    ${sayText ? spk(sayText) : ''}</div>
    <div class="actions"><button class="primary" id="cont">Continua →</button></div>`;
  if (sayText && result === 'ok') speak(sayText);
  const c = $('#cont'); c.focus();
  c.onclick = () => { L.i++; if (L.i >= L.ex.length) L.step = 4; showStep(); };
}

function showResult(header) {
  const l = L.lesson, pct = L.score / L.ex.length, passed = pct >= PASS;
  const prev = state.lessons[l.id] || { best: 0, done: false, attempts: 0 };
  const firstPass = passed && !prev.done;
  state.lessons[l.id] = { best: Math.max(prev.best, pct), done: prev.done || passed, date: prev.date || (passed ? today() : null), attempts: prev.attempts + 1 };
  if (passed) {
    l.vocab.forEach(([es, it]) => { if (!state.cards[es]) state.cards[es] = { it, box: 0, due: addDays(today(), 1), lesson: l.id }; });
  }
  if (firstPass) logActivity('lessons'); else { const d = today(); state.activity[d] = state.activity[d] || { lessons: 0, reviews: 0 }; }
  save();
  const nl = nextLesson();
  $('#main').innerHTML = header + `<section class="card center">
    <h2>${passed ? '🎉 ¡Muy bien!' : '💪 Quasi!'}</h2>
    <p class="big">${L.score}/${L.ex.length} — ${Math.round(pct * 100)}%</p>
    <p>${passed ? `Lezione superata! ${l.vocab.length} parole aggiunte al ripasso.` : `Serve almeno il ${PASS * 100}% per superarla. Rileggi la grammatica e riprova: è normale!`}</p>
    ${L.mistakes.length ? `<div class="mistakes"><h4>Da rivedere</h4>${L.mistakes.map(m => `<div>• ${m.t === 'mc' ? m.q + ' → <b>' + esc(m.o[m.a]) + '</b>' : (m.t === 'fill' ? esc(m.q) : m.q) + ' → <b>' + esc(m.a[0]) + '</b>'}</div>`).join('')}</div>` : ''}
    <div class="actions">
      <button data-go="lesson" data-id="${l.id}">↺ Ripeti lezione</button>
      ${passed && nl ? `<button class="primary" data-go="lesson" data-id="${nl.id}">Lezione successiva →</button>` : ''}
      <button data-go="home">🏠 Home</button>
    </div></section>`;
}

// --- Ripasso (flashcard con ripetizione dilazionata) ---
let R = null;
function renderReview(practiceAll) {
  let cards = dueCards();
  if (practiceAll === true) cards = Object.entries(state.cards);
  if (!cards.length) {
    const total = Object.keys(state.cards).length;
    $('#main').innerHTML = `<section class="card center"><h2>🔁 Ripasso</h2>
      <p>${total ? 'Nessuna parola da ripassare oggi. ¡Genial!' : 'Completa la prima lezione per iniziare a ripassare le parole.'}</p>
      ${total ? `<button data-practice="1">Esercitati comunque su 20 parole a caso</button>` : ''}
      <div class="actions"><button class="primary" data-go="home">🏠 Home</button></div></section>`;
    return;
  }
  R = { cards: shuffle(cards).slice(0, 30), i: 0, ok: 0, practice: practiceAll === true };
  if (R.practice) R.cards = R.cards.slice(0, 20);
  showCard();
}
function showCard() {
  if (R.i >= R.cards.length) {
    logActivity('reviews');
    $('#main').innerHTML = `<section class="card center"><h2>✅ Ripasso completato</h2>
      <p class="big">${R.ok}/${R.cards.length}</p>
      <p class="muted">Le parole che sapevi torneranno tra più giorni, quelle sbagliate domani.</p>
      <div class="actions"><button class="primary" data-go="home">🏠 Home</button></div></section>`;
    return;
  }
  const [es, c] = R.cards[R.i];
  $('#main').innerHTML = `<section class="card center review">
    <p class="muted">Parola ${R.i + 1} di ${R.cards.length} · Lezione ${c.lesson} · Box ${c.box + 1}/${SRS_INTERVALS.length}</p>
    <p class="muted">Come si dice in spagnolo…</p>
    <p class="big">${esc(c.it)}</p>
    <form id="rf"><input id="rans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Scrivi la risposta (oppure premi Mostra)">
    <div class="actions"><button class="primary">Mostra</button></div></form>
    <div id="rfb"></div></section>`;
  $('#rans').focus();
  $('#rf').onsubmit = ev => {
    ev.preventDefault();
    const val = $('#rans').value, r = val.trim() ? check(val, variants(es)) : null;
    $('#rf').remove(); speak(es);
    $('#rfb').innerHTML = `<p class="big es">${esc(es)} ${spk(es)}</p>
      ${r ? `<div class="fb ${r}">${r === 'ok' ? '✅ Esatto!' : r === 'accent' ? '🟡 Quasi: occhio agli accenti' : `❌ Hai scritto: ${esc(val)}`}</div>` : ''}
      <div class="actions"><button id="no" class="bad">✗ Non la sapevo</button><button id="yes" class="primary">✓ La sapevo</button></div>`;
    (r === 'wrong' ? $('#no') : $('#yes')).focus();
    $('#yes').onclick = () => grade(true); $('#no').onclick = () => grade(false);
  };
}
function grade(knew) {
  const [es] = R.cards[R.i], c = state.cards[es];
  if (!R.practice) {
    c.box = knew ? Math.min(c.box + 1, SRS_INTERVALS.length - 1) : 0;
    c.due = addDays(today(), knew ? SRS_INTERVALS[c.box] : 1);
  }
  if (knew) R.ok++;
  R.i++; save(); showCard();
}

// --- Piano e impostazioni ---
function renderPlan() {
  const left = LESSONS.length - completedCount();
  const rows = Object.entries(RHYTHMS).map(([k, v]) => {
    const w = Math.ceil(left / k);
    return `<tr class="${+k === state.rhythm ? 'sel' : ''}"><td>${v}</td><td>${w} settimane</td><td>${fmtDate(addDays(today(), Math.ceil(left / k * 7)))}</td></tr>`;
  }).join('');
  // calendario ultime 8 settimane
  const ws = weekStart(); let cal = '';
  for (let w = -7; w <= 0; w++) {
    const s = addDays(ws, w * 7);
    cal += '<div class="week">' + [0, 1, 2, 3, 4, 5, 6].map(d => {
      const day = addDays(s, d), a = state.activity[day];
      const cls = a?.lessons ? 'l' : a?.reviews ? 'r' : day > today() ? 'f' : '';
      return `<span class="${cls}" title="${day}"></span>`;
    }).join('') + '</div>';
  }
  $('#main').innerHTML = `<section class="card"><h3>📅 Quanto ti manca</h3>
    <p>Lezioni rimanenti: <b>${left}</b> su ${LESSONS.length}.</p>
    <table class="plan"><tr><th>Ritmo</th><th>Durata</th><th>Fine prevista</th></tr>${rows}</table>
    <p class="muted">Dopo l'A2 trovi in <code>docs/piano-di-studio.md</code> come proseguire verso il B1.</p></section>
    <section class="card"><h3>Le tue ultime 8 settimane</h3>
    <div class="cal">${cal}</div>
    <p class="muted"><span class="dot l"></span> lezione &nbsp; <span class="dot r"></span> solo ripasso</p></section>
    <section class="card"><h3>💾 Backup dei progressi</h3>
    <p class="muted">I progressi sono salvati nel browser di questo dispositivo. Esportali per non perderli o per spostarli su un altro dispositivo.</p>
    <div class="actions"><button id="exp">⬇ Esporta</button><label class="btn">⬆ Importa<input type="file" id="imp" accept=".json" hidden></label>
    <button id="reset" class="bad">Azzera tutto</button></div></section>`;
  $('#exp').onclick = () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(state, null, 1)], { type: 'application/json' }));
    a.download = `spagnolo-progressi-${today()}.json`; a.click();
  };
  $('#imp').onchange = e => {
    const f = e.target.files[0]; if (!f) return;
    f.text().then(t => { try { state = Object.assign(defaultState(), JSON.parse(t)); save(); alert('Progressi importati!'); render('home'); } catch { alert('File non valido.'); } });
  };
  $('#reset').onclick = () => { if (confirm('Vuoi davvero cancellare tutti i progressi?')) { state = defaultState(); save(); render('home'); } };
}

// ---------- Navigazione ----------
document.addEventListener('click', e => {
  const g = e.target.closest('[data-go]');
  if (g) { e.preventDefault(); render(g.dataset.go, g.dataset.id); return; }
  const r = e.target.closest('[data-rhythm]');
  if (r) { state.rhythm = +r.dataset.rhythm; save(); renderHome(); return; }
  if (e.target.closest('[data-practice]')) renderReview(true);
});
document.querySelectorAll('nav button').forEach(b => b.onclick = () => render(b.dataset.view));
render('home');
