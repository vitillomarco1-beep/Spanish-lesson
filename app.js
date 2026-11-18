// ¡Aprende Español! — logica dell'app (nessuna dipendenza, funziona offline)
// Progettata sui principi della scienza dell'apprendimento: vedi docs/neuroscienze-apprendimento.md
'use strict';

const STORE_KEY = 'spanish-course-v1';
const PASS = 0.7;           // 70% al primo tentativo per superare una lezione
const SESSION_MAX = 40;     // carte per sessione di ripasso (si può continuare)
const RHYTHMS = { 2: '2 lezioni a settimana', 3: '3 lezioni a settimana', 5: '5 lezioni a settimana', 7: 'Ogni giorno' };

// ---------- Ripetizione dilazionata: algoritmo FSRS (Free Spaced Repetition Scheduler, v4.5) ----------
// Modella per ogni elemento la "stabilità" della memoria (S, giorni) e la "difficoltà" (D, 1-10)
// e programma il ripasso quando la probabilità di ricordo scende al 90%.
const W = [0.4872, 1.4003, 3.7145, 13.8206, 5.1618, 1.2298, 0.8604, 0.01, 1.4801, 0.1544, 1.0071, 1.9395, 0.11, 0.29, 2.2698, 0.2315, 2.9898];
const DECAY = -0.5, FACTOR = 19 / 81, RETENTION = 0.9, MAX_IVL = 365;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const D0 = g => clamp(W[4] - (g - 3) * W[5], 1, 10);
const recall = (t, S) => Math.pow(1 + FACTOR * t / S, DECAY);
const ivlOf = S => clamp(Math.round(S / FACTOR * (Math.pow(RETENTION, 1 / DECAY) - 1)), 1, MAX_IVL);
function fsrs(card, g) { // g: 1=Di nuovo, 2=Difficile, 3=Bene, 4=Facile
  if (!card.reps) return { S: W[g - 1], D: D0(g) };
  const t = Math.max(0, daysBetween(card.last, today()));
  const R = recall(t, card.S), D = card.D, S = card.S;
  const nD = clamp(W[7] * D0(3) + (1 - W[7]) * (D - W[6] * (g - 3)), 1, 10);
  const nS = g === 1
    ? Math.min(S, W[11] * Math.pow(D, -W[12]) * (Math.pow(S + 1, W[13]) - 1) * Math.exp(W[14] * (1 - R)))
    : S * (1 + Math.exp(W[8]) * (11 - D) * Math.pow(S, -W[9]) * (Math.exp(W[10] * (1 - R)) - 1) * (g === 2 ? W[15] : 1) * (g === 4 ? W[16] : 1));
  return { S: Math.max(0.1, nS), D: nD };
}
function schedule(card, g) {
  const { S, D } = fsrs(card, g);
  const ivl = g === 1 ? 1 : ivlOf(S);
  Object.assign(card, { S, D, last: today(), due: addDays(today(), ivl), reps: (card.reps || 0) + 1, lapses: (card.lapses || 0) + (g === 1 ? 1 : 0) });
}
const previewIvl = (card, g) => g === 1 ? 1 : ivlOf(fsrs(card, g).S);
const fmtIvl = d => d === 1 ? 'domani' : d < 31 ? `${d} gg` : d < 365 ? `${Math.round(d / 30)} mesi` : '1 anno';

// ---------- Stato ----------
const defaultState = () => ({
  rhythm: 2, startDate: today(), unlockAll: false,
  lessons: {},   // id -> {best, done, date, attempts}
  cards: {},     // chiave -> {type:'v'|'p'|'x', es, it, lesson, idx, S, D, due, last, reps, lapses}
  activity: {},  // 'YYYY-MM-DD' -> {lessons, reviews}
  diary: []      // frasi personali scritte dall'utente
});
let state = load();

function load() {
  let s;
  try { s = Object.assign(defaultState(), JSON.parse(localStorage.getItem(STORE_KEY)) || {}); }
  catch { s = defaultState(); }
  // migrazione dal vecchio sistema a "box" (versione 1)
  const old = [0, 1, 3, 7, 14, 30, 60];
  for (const [k, c] of Object.entries(s.cards)) {
    if (c.box !== undefined && !k.includes(':')) {
      delete s.cards[k];
      s.cards['v:' + k] = { type: 'v', es: k, it: c.it, lesson: c.lesson, S: Math.max(1, old[c.box] || 1), D: 5, due: c.due, last: c.due, reps: c.box + 1, lapses: 0 };
    }
  }
  return s;
}
function save() { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }

// ---------- Utilità ----------
function today(d = new Date()) {
  const z = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
}
function addDays(iso, n) { const d = new Date(iso + 'T12:00:00'); d.setDate(d.getDate() + n); return today(d); }
function daysBetween(a, b) { return Math.round((new Date(b + 'T12:00:00') - new Date(a + 'T12:00:00')) / 864e5); }
function fmtDate(iso) { return new Date(iso + 'T12:00:00').toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }); }
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

function norm(s, keepAccents) {
  s = String(s).toLowerCase().trim().replace(/[¿?¡!.,;:"«»—–-]/g, ' ').replace(/\s+/g, ' ').trim();
  if (!keepAccents) s = s.normalize('NFD').replace(/[̀-ͯ]/g, '');
  return s;
}
// 'ok' | 'accent' | 'wrong'
function check(input, answers) {
  if (answers.some(a => norm(a, true) === norm(input, true))) return 'ok';
  if (answers.some(a => norm(a) === norm(input))) return 'accent';
  return 'wrong';
}
// Varianti accettate: "encantado / encantada", "el médico / la médica" -> anche senza articolo
function variants(es) {
  const parts = es.split('/').map(s => s.trim()).filter(Boolean);
  const out = new Set([es, ...parts]);
  parts.forEach(p => out.add(p.replace(/^(el|la|los|las)\s+/i, '')));
  return [...out];
}

// ---------- Audio: sintesi vocale ----------
let esVoice = null;
function pickVoice() {
  const vs = speechSynthesis.getVoices();
  esVoice = vs.find(v => v.lang === 'es-ES') || vs.find(v => v.lang && v.lang.startsWith('es')) || null;
}
if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function utter(text, rate = 0.9) {
  const u = new SpeechSynthesisUtterance(text.replace(/\//g, ','));
  u.lang = 'es-ES'; u.rate = rate; if (esVoice) u.voice = esVoice; return u;
}
function speak(text, rate) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel(); speechSynthesis.speak(utter(text, rate));
}
const spk = t => `<button class="spk" title="Ascolta" data-say="${esc(t)}">🔊</button>`;

// ---------- Audio: riconoscimento vocale (per gli esercizi di pronuncia) ----------
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
function listen(cb) {
  const r = new SR(); r.lang = 'es-ES'; r.maxAlternatives = 5; r.interimResults = false;
  let got = false;
  r.onresult = ev => { got = true; cb(null, [...ev.results[0]].map(a => a.transcript)); };
  r.onerror = ev => { got = true; cb(ev.error); };
  r.onend = () => { if (!got) cb('no-speech'); };
  r.start(); return r;
}
// quota di parole della frase corretta riconosciute nella trascrizione
function spokenScore(target, transcripts) {
  const tw = norm(target).split(' ');
  return Math.max(0, ...transcripts.map(t => { const set = new Set(norm(t).split(' ')); return tw.filter(w => set.has(w)).length / tw.length; }));
}

// ---------- Motore degli esercizi (usato sia nelle lezioni sia nel ripasso) ----------
// e.t: 'mc' scelta multipla | 'fill' completamento | 'tr' traduzione | 'dict' dettato | 'say' pronuncia | 'card' flashcard
// onResult(result, actionsEl) con result: 'ok' | 'accent' | 'wrong' | 'skip'
function renderExercise(el, e, onResult) {
  let prompt, input = '';
  const textInput = ph => `<form class="exf"><input class="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${ph}">
      <div class="accents">${['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'].map(c => `<button type="button" class="acc">${c}</button>`).join('')}</div>
      <button class="primary">Verifica</button></form>`;
  switch (e.t) {
    case 'mc':
      prompt = e.q;
      input = `<div class="opts">${e.o.map((o, k) => `<button class="opt" data-k="${k}"><span class="key">${k + 1}</span> ${esc(o)}</button>`).join('')}</div>`;
      break;
    case 'fill':
      prompt = `Completa: <b>${esc(e.q)}</b>${e.h ? ` <span class="muted">(${esc(e.h)})</span>` : ''}`;
      input = textInput('Scrivi la parola mancante…'); break;
    case 'tr':
      prompt = `Traduci in spagnolo: <b>${e.q}</b>`;
      input = textInput('Scrivi in spagnolo…'); break;
    case 'dict':
      prompt = `🎧 <b>Ascolta e scrivi</b> ciò che senti`;
      input = `<div class="actions left"><button type="button" class="play">🔊 Ascolta</button><button type="button" class="play slow">🐢 Lento</button></div>` + textInput('Scrivi in spagnolo…');
      break;
    case 'say':
      prompt = `🎤 Dillo <b>ad alta voce</b> in spagnolo: <b>${esc(e.q)}</b>`;
      input = `<div class="actions">${SR ? '<button class="primary mic">🎤 Parla</button>' : ''}
        <button class="reveal">${SR ? 'Non posso parlare ora' : "L'ho detto: mostra la soluzione"}</button></div><p class="heard muted"></p>`;
      break;
  }
  el.innerHTML = `<p class="question">${prompt}</p>${input}<div class="fbx"></div>`;
  const fbx = el.querySelector('.fbx');

  function finish(result, correctHtml, sayText) {
    const msg = { ok: '✅ ¡Correcto!', accent: '🟡 Giusto, ma attenzione agli accenti:', wrong: '❌ Risposta corretta:', partial: '🟡 Quasi! La frase è:', skip: 'Soluzione:' }[result];
    fbx.innerHTML = `<div class="fb ${result}">${msg} ${result !== 'ok' ? `<b>${correctHtml}</b>` : ''} ${sayText ? spk(sayText) : ''}
      ${e.why && result !== 'ok' ? `<div class="why">💡 ${e.why}</div>` : ''}</div><div class="actions"></div>`;
    if (sayText) speak(sayText);
    onResult(result === 'partial' ? 'accent' : result, fbx.querySelector('.actions'));
  }

  if (e.t === 'mc') {
    const pick = k => {
      if (el.querySelector('.opt:disabled')) return;
      el.querySelectorAll('.opt').forEach((x, j) => { x.disabled = true; if (j === e.a) x.classList.add('right'); });
      if (k !== e.a) el.querySelectorAll('.opt')[k].classList.add('wrong');
      finish(k === e.a ? 'ok' : 'wrong', esc(e.o[e.a]), e.say ? e.o[e.a] : null);
    };
    el.querySelectorAll('.opt').forEach(b => b.onclick = () => pick(+b.dataset.k));
    keyHandler = ev => { const k = +ev.key - 1; if (k >= 0 && k < e.o.length) pick(k); };
  } else if (e.t === 'say') {
    const sol = esc(e.a[0]);
    const mic = el.querySelector('.mic');
    if (mic) mic.onclick = () => {
      mic.disabled = true; mic.textContent = '🎙️ Ti ascolto…';
      listen((err, tr) => {
        mic.disabled = false; mic.textContent = '🎤 Riprova';
        if (err) { el.querySelector('.heard').textContent = err === 'no-speech' ? 'Non ho sentito nulla, riprova.' : 'Microfono non disponibile: usa "mostra la soluzione".'; return; }
        const sc = spokenScore(e.a[0], tr);
        el.querySelector('.heard').textContent = `Ho capito: "${tr[0]}"`;
        el.querySelectorAll('.mic, .reveal').forEach(b => b.remove());
        finish(sc >= 0.8 ? 'ok' : sc >= 0.5 ? 'partial' : 'wrong', sol, e.a[0]);
      });
    };
    el.querySelector('.reveal').onclick = () => {
      el.querySelectorAll('.mic, .reveal').forEach(b => b.remove());
      // autovalutazione: dire la frase ad alta voce (effetto produzione) e poi confrontare
      fbx.innerHTML = `<div class="fb skip">La frase è: <b>${sol}</b> ${spk(e.a[0])}</div>
        <p class="muted">Ti era venuta in mente così?</p>
        <div class="actions"><button class="bad self-no">✗ No</button><button class="self-skip">Salta</button><button class="primary self-yes">✓ Sì</button></div>`;
      speak(e.a[0]);
      fbx.querySelector('.self-yes').onclick = () => finish('ok', sol, null);
      fbx.querySelector('.self-no').onclick = () => finish('wrong', sol, null);
      fbx.querySelector('.self-skip').onclick = () => finish('skip', sol, null);
    };
  } else {
    if (e.t === 'dict') {
      el.querySelector('.play:not(.slow)').onclick = () => speak(e.a[0], 0.9);
      el.querySelector('.play.slow').onclick = () => speak(e.a[0], 0.55);
      setTimeout(() => speak(e.a[0], 0.9), 300);
    }
    const inp = el.querySelector('.ans'); inp.focus();
    el.querySelectorAll('.acc').forEach(b => b.onclick = () => {
      const p = inp.selectionStart; inp.value = inp.value.slice(0, p) + b.textContent + inp.value.slice(inp.selectionEnd);
      inp.focus(); inp.setSelectionRange(p + 1, p + 1);
    });
    el.querySelector('.exf').onsubmit = ev => {
      ev.preventDefault(); if (!inp.value.trim()) return;
      inp.disabled = true; el.querySelector('.exf .primary').remove(); el.querySelector('.accents').remove();
      const r = check(inp.value, e.a);
      const shown = e.t === 'fill' ? esc(e.q).replace('___', `<u>${esc(e.a[0])}</u>`) : esc(e.a[0]);
      finish(r, shown, e.t === 'fill' ? e.q.replace('___', e.a[0]) : e.a[0]);
    };
  }
}

// ---------- Logica del corso ----------
const completedCount = () => LESSONS.filter(l => state.lessons[l.id]?.done).length;
const nextLesson = () => LESSONS.find(l => !state.lessons[l.id]?.done);
const isUnlocked = l => state.unlockAll || l.id === 1 || state.lessons[l.id - 1]?.done || state.lessons[l.id]?.done;
const dueCards = () => Object.entries(state.cards).filter(([, c]) => c.due <= today()).sort((a, b) => a[1].due < b[1].due ? -1 : 1);
const lessonsToday = () => state.activity[today()]?.lessons || 0;

function logActivity(kind) {
  const d = today(); state.activity[d] = state.activity[d] || { lessons: 0, reviews: 0 };
  state.activity[d][kind]++; save();
}
function streak() {
  let n = 0, d = today();
  if (!state.activity[d]) d = addDays(d, -1);
  while (state.activity[d]) { n++; d = addDays(d, -1); }
  return n;
}
function weekStart(iso = today()) { const d = new Date(iso + 'T12:00:00'); return addDays(iso, -((d.getDay() + 6) % 7)); }
function lessonsThisWeek() { const ws = weekStart(); let n = 0; for (let i = 0; i < 7; i++) n += state.activity[addDays(ws, i)]?.lessons || 0; return n; }
function estimatedEnd() { const left = LESSONS.length - completedCount(); return left ? addDays(today(), Math.ceil(left / state.rhythm * 7)) : null; }
// stima della memoria: probabilità media di ricordare oggi gli elementi studiati
function memoryHealth() {
  const cs = Object.values(state.cards).filter(c => c.reps);
  if (!cs.length) return null;
  return cs.reduce((s, c) => s + recall(Math.max(0, daysBetween(c.last, today())), c.S), 0) / cs.length;
}

// Ogni lezione superata genera elementi da ripassare: parole, frasi ed esercizi di grammatica.
function addCards(lesson) {
  const add = (key, c) => { if (!state.cards[key]) state.cards[key] = Object.assign(c, { lesson: lesson.id, due: addDays(today(), 1), reps: 0 }); };
  lesson.vocab.forEach(([es, it]) => add('v:' + es, { type: 'v', es, it }));
  lesson.phrases.forEach(([es, it]) => add('p:' + es, { type: 'p', es, it }));
  lesson.exercises.forEach((x, i) => add(`x:${lesson.id}:${i}`, { type: 'x', idx: i }));
}

// ---------- Viste ----------
let keyHandler = null;
document.addEventListener('keydown', ev => {
  if (ev.target.tagName === 'INPUT' || ev.target.tagName === 'TEXTAREA') return;
  if (keyHandler) keyHandler(ev);
});
function render(view, arg) {
  window.scrollTo(0, 0); keyHandler = null;
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  $$('nav button').forEach(b => b.classList.toggle('active', b.dataset.view === view));
  ({ home: renderHome, lessons: renderLessonList, lesson: renderLesson, review: renderReview, plan: renderPlan, today: startToday })[view](arg);
}

function startToday() {
  if (dueCards().length) renderReview({ thenLesson: true });
  else if (nextLesson()) renderLesson(nextLesson().id);
  else renderReview({ practice: true });
}

function renderHome() {
  const done = completedCount(), total = LESSONS.length, nl = nextLesson();
  const wk = lessonsThisWeek(), goal = state.rhythm, due = dueCards().length, end = estimatedEnd();
  const mh = memoryHealth(), lt = lessonsToday();
  let advice;
  if (!nl) advice = '🎉 Hai completato il corso! Continua il ripasso quotidiano: è quello che rende i ricordi permanenti.';
  else if (lt >= 2) advice = `Oggi hai già fatto ${lt} lezioni: ottimo! Il cervello consolida le informazioni nuove soprattutto <b>durante il sonno</b>, quindi da qui in poi rende di più ripassare. Se vuoi, puoi comunque continuare.`;
  else if (due) advice = `Inizia sempre dal <b>ripasso</b>: hai ${due} elementi che stai per dimenticare. Richiamarli ora li fissa molto più che rileggerli.`;
  else if (wk >= goal) advice = `Obiettivo settimanale raggiunto (${wk}/${goal}). Puoi andare avanti lo stesso: ogni lezione in più ti fa arrivare prima!`;
  else advice = `Ti mancano ${goal - wk} lezione/i per l'obiettivo di questa settimana.`;

  $('#main').innerHTML = `
    <section class="card hero">
      <h2>¡Hola! 👋</h2>
      <p>${advice}</p>
      <div class="stats">
        <div><b>${done}/${total}</b><span>lezioni</span></div>
        <div><b>${wk}/${goal}</b><span>questa settimana</span></div>
        <div><b>🔥 ${streak()}</b><span>giorni di fila</span></div>
        <div><b>${mh === null ? '—' : Math.round(mh * 100) + '%'}</b><span>memoria stimata</span></div>
      </div>
      <div class="bar"><div style="width:${done / total * 100}%"></div></div>
      ${end ? `<p class="muted">Al ritmo di <b>${RHYTHMS[state.rhythm].toLowerCase()}</b> finirai il livello A2 intorno al <b>${fmtDate(end)}</b>.</p>` : ''}
      <div class="actions">
        <button class="primary big-btn" data-go="today">▶ Sessione di oggi</button>
      </div>
      <p class="muted center small">${due ? `Ripasso (${Math.min(due, SESSION_MAX)} elementi) ` : ''}${due && nl ? '→ ' : ''}${nl ? `Lezione ${nl.id}: ${esc(nl.title)}` : ''}</p>
      <div class="actions">
        ${nl ? `<button data-go="lesson" data-id="${nl.id}">Solo lezione</button>` : ''}
        <button data-go="review">Solo ripasso (${due})</button>
      </div>
    </section>
    <section class="card">
      <h3>Il tuo ritmo</h3>
      <p class="muted">Puoi cambiarlo quando vuoi. Serve solo a calcolare l'obiettivo: puoi sempre fare più lezioni.</p>
      <div class="rhythms">${Object.entries(RHYTHMS).map(([k, v]) => `<button class="${+k === state.rhythm ? 'sel' : ''}" data-rhythm="${k}">${v}</button>`).join('')}</div>
    </section>
    <section class="card">
      <h3>🧠 Perché questo metodo funziona</h3>
      <ul class="science">
        <li><b>Ti interroghi invece di rileggere</b>: recuperare un ricordo lo rafforza molto più che rivederlo (<i>effetto test</i>).</li>
        <li><b>Ripassi al momento giusto</b>: l'algoritmo FSRS calcola quando stai per dimenticare ogni parola (<i>ripetizione dilazionata</i>).</li>
        <li><b>Mescoli argomenti vecchi e nuovi</b> negli esercizi (<i>pratica intercalata</i>).</li>
        <li><b>Provi a indovinare prima di studiare</b>: anche sbagliare prepara il cervello ad apprendere (<i>effetto pre-test</i>).</li>
        <li><b>Parli ad alta voce e scrivi frasi tue</b>: si ricorda ciò che si produce e ciò che riguarda noi (<i>effetto produzione</i> e <i>autoriferimento</i>).</li>
        <li><b>Dormi</b>: il sonno consolida ciò che hai imparato. Meglio poco ogni giorno che tanto una volta.</li>
      </ul>
      <p class="muted">Approfondimento con le fonti scientifiche: <code>docs/neuroscienze-apprendimento.md</code></p>
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

// ---------- Lezione ----------
// Sequenza: 1) indovina il vocabolario (pre-test) 2) grammatica 3) frasi: ascolta e ripeti
// 4) esercizi intercalati con ripasso di lezioni precedenti; gli errori tornano alla fine
// 5) scrivi frasi tue (generazione + autoriferimento) 6) risultato
let L = null;
const STEPS = ['Indovina', 'Grammatica', 'Ascolta e ripeti', 'Esercizi', 'Frasi tue', 'Risultato'];

function renderLesson(id) {
  const lesson = LESSONS.find(l => l.id === +id);
  if (!lesson || !isUnlocked(lesson)) return render('lessons');
  L = { lesson, step: 0, ex: buildExercises(lesson), i: 0, first: 0, firstOk: 0, mistakes: [], revealed: 0 };
  showStep();
}

function buildExercises(lesson) {
  const pool = LESSONS.flatMap(l => l.vocab);
  const vocab = shuffle(lesson.vocab), phrases = shuffle(lesson.phrases);
  const out = [];
  vocab.slice(0, 4).forEach(([es, it]) => {
    const wrong = shuffle(pool.filter(v => v[0] !== es)).slice(0, 3).map(v => v[0]);
    const o = shuffle([es, ...wrong]);
    out.push({ t: 'mc', q: `Come si dice "<b>${esc(it)}</b>"?`, o, a: o.indexOf(es), say: true });
  });
  vocab.slice(4, 7).forEach(([es, it]) => out.push({ t: 'tr', q: esc(it), a: variants(es) }));
  phrases.slice(0, 2).forEach(([es]) => out.push({ t: 'dict', a: [es] }));
  phrases.slice(2, 4).forEach(([es, it]) => out.push({ t: 'say', q: it, a: [es] }));
  lesson.exercises.forEach(x => out.push(x));
  // pratica intercalata: 3 esercizi da lezioni già superate
  const old = LESSONS.filter(l => l.id !== lesson.id && state.lessons[l.id]?.done)
    .flatMap(l => l.exercises.map(x => Object.assign({}, x, { from: l.id })));
  shuffle(old).slice(0, 3).forEach(x => out.push(x));
  // ordine mescolato, ma si parte con una domanda facile
  const s = shuffle(out), k = s.findIndex(x => x.t === 'mc' && !x.from);
  if (k > 0) s.unshift(s.splice(k, 1)[0]);
  return s;
}

function stepper() { return `<div class="stepper">${STEPS.map((s, i) => `<span class="${i === L.step ? 'cur' : i < L.step ? 'past' : ''}">${s}</span>`).join('')}</div>`; }

function showStep() {
  const l = L.lesson; keyHandler = null;
  const header = `<p class="muted"><a href="#" data-go="lessons">← Lezioni</a> · Livello ${l.level}</p>
    <h2>Lezione ${l.id}: ${esc(l.title)}</h2>${stepper()}`;
  const next = (label = 'Avanti →') => `<div class="actions"><button class="primary" id="next">${label}</button></div>`;
  let body = '';
  if (L.step === 0) {
    body = `<section class="card"><p>🎯 <b>Obiettivo:</b> ${esc(l.goal)}</p>
      <p class="tip">🧠 <b>Prova a indovinare</b> la parola spagnola prima di toccarla: lo spagnolo somiglia molto all'italiano!
      Anche se sbagli, lo sforzo di indovinare aiuta a ricordare. Poi <b>ripeti ad alta voce</b>.</p>
      <table class="vocab">${l.vocab.map(([es, it], k) => `<tr><td>${esc(it)}</td>
        <td><button class="hidden-word" data-k="${k}">❓ tocca per vedere</button></td></tr>`).join('')}</table>
      <div class="actions"><button id="showAll">Mostra tutte</button><button id="sayAll">🔊 Ascolta tutte</button></div>
      ${next()}</section>`;
  } else if (L.step === 1) {
    body = `<section class="card grammar">${l.grammar}
      <p class="tip">🧠 Non rileggere più volte: leggi una volta con attenzione, poi saranno gli esercizi a fissare le regole.</p>${next()}</section>`;
  } else if (L.step === 2) {
    body = `<section class="card"><p class="muted">Per ogni frase: <b>prova a dirla</b> guardando l'italiano, poi ascoltala (prima lenta, poi normale) e <b>ripetila ad alta voce</b> imitando l'intonazione (<i>shadowing</i>).</p>
      ${l.phrases.map(([es, it]) => `<div class="phrase"><span class="muted">${esc(it)}</span><br>
        <button class="shadow" data-es="${esc(es)}">🔁 Ascolta e ripeti</button> <b class="blur" tabindex="0">${esc(es)}</b></div>`).join('')}
      <p class="tip">💡 ${esc(l.tip)}</p>${next('Inizia gli esercizi →')}</section>`;
  } else if (L.step === 3) {
    return showExercise(header);
  } else if (L.step === 4) {
    body = `<section class="card"><p>✍️ Scrivi <b>1-3 frasi vere su di te</b> in spagnolo usando ciò che hai imparato oggi.</p>
      <p class="muted">Obiettivo della lezione: ${esc(l.goal)}<br>Le informazioni collegate a noi stessi si ricordano molto meglio. Non preoccuparti degli errori: se fai lezione con un tutor, mostragli il tuo diario.</p>
      <textarea id="diary" rows="4" placeholder="Es.: Me llamo… Vivo en… Me gusta…"></textarea>
      <div class="actions"><button id="skip">Salta</button><button class="primary" id="saveD">Salva e continua →</button></div></section>`;
  } else {
    return showResult(header);
  }
  $('#main').innerHTML = header + body;
  if (L.step === 4) {
    const go = () => { L.step++; showStep(); };
    $('#skip').onclick = go;
    $('#saveD').onclick = () => { const t = $('#diary').value.trim(); if (t) { state.diary.unshift({ date: today(), lesson: l.id, text: t }); save(); } go(); };
    return;
  }
  $('#next').onclick = () => { L.step++; showStep(); };
  if (L.step === 0) {
    const reveal = b => { if (b.classList.contains('shown')) return speak(l.vocab[b.dataset.k][0]); const [es] = l.vocab[b.dataset.k]; b.classList.add('shown'); b.innerHTML = `🔊 <b>${esc(es)}</b>`; speak(es); };
    $$('.hidden-word').forEach(b => b.onclick = () => reveal(b));
    $('#showAll').onclick = () => $$('.hidden-word').forEach(b => { if (!b.classList.contains('shown')) { b.classList.add('shown'); b.innerHTML = `🔊 <b>${esc(l.vocab[b.dataset.k][0])}</b>`; } });
    $('#sayAll').onclick = () => { speechSynthesis.cancel(); l.vocab.forEach(([es]) => speechSynthesis.speak(utter(es, 0.85))); };
  }
  if (L.step === 2) {
    $$('.shadow').forEach(b => b.onclick = () => {
      b.parentElement.querySelector('.blur').classList.add('shown');
      speechSynthesis.cancel(); speechSynthesis.speak(utter(b.dataset.es, 0.6)); speechSynthesis.speak(utter(b.dataset.es, 0.95));
    });
    $$('.blur').forEach(b => b.onclick = () => b.classList.add('shown'));
  }
}

function showExercise(header) {
  const e = L.ex[L.i], n = L.ex.length;
  $('#main').innerHTML = header + `<section class="card">
    <div class="bar small"><div style="width:${L.i / n * 100}%"></div></div>
    <p class="muted">Esercizio ${L.i + 1} di ${n}${e.retry ? ' · <b>🔄 riprova</b>' : ''}${e.from ? ` · <b>ripasso lezione ${e.from}</b>` : ''}</p>
    <div id="ex"></div></section>`;
  renderExercise($('#ex'), e, (result, actions) => {
    if (!e.retry && result !== 'skip') { L.first++; if (result !== 'wrong') L.firstOk++; }
    // gli errori vengono riproposti a fine lezione: il ricordo si fissa quando lo recuperi correttamente
    if (result === 'wrong') { L.mistakes.push(e); if (!e.retry) L.ex.push(Object.assign({}, e, { retry: true })); }
    actions.innerHTML = `<button class="primary">Continua →</button>`;
    const c = actions.querySelector('button'); c.focus();
    c.onclick = () => { L.i++; if (L.i >= L.ex.length) L.step = 4; showStep(); };
  });
}

function showResult(header) {
  const l = L.lesson, pct = L.first ? L.firstOk / L.first : 0, passed = pct >= PASS;
  const prev = state.lessons[l.id] || { best: 0, done: false, attempts: 0 };
  const firstPass = passed && !prev.done;
  state.lessons[l.id] = { best: Math.max(prev.best, pct), done: prev.done || passed, date: prev.date || (passed ? today() : null), attempts: prev.attempts + 1 };
  if (passed) addCards(l);
  if (firstPass) logActivity('lessons');
  save();
  const nl = nextLesson(), hour = new Date().getHours();
  const uniq = [...new Set(L.mistakes.filter(m => !m.retry))];
  const sleepTip = hour >= 18 ? '🌙 Ottimo momento: studiare la sera e dormire aiuta il cervello a consolidare. Domattina fai il ripasso!' :
    '⏰ Domani il ripasso ti riproporrà queste parole proprio quando staresti per dimenticarle.';
  $('#main').innerHTML = header + `<section class="card center">
    <h2>${passed ? '🎉 ¡Muy bien!' : '💪 Quasi!'}</h2>
    <p class="big">${Math.round(pct * 100)}%</p>
    <p class="muted">${L.firstOk}/${L.first} risposte giuste al primo tentativo</p>
    <p>${passed ? `Lezione superata! Parole, frasi ed esercizi sono stati aggiunti al ripasso.` : `Serve almeno il ${PASS * 100}% al primo tentativo. Riprova domani: dopo una notte di sonno andrà meglio, è dimostrato!`}</p>
    ${passed ? `<p class="tip">${sleepTip}</p>` : ''}
    ${uniq.length ? `<div class="mistakes"><h4>Da rivedere</h4>${uniq.map(m => `<div>• ${m.t === 'mc' ? m.q + ' → <b>' + esc(m.o[m.a]) + '</b>' : m.t === 'fill' ? esc(m.q) + ' → <b>' + esc(m.a[0]) + '</b>' : m.t === 'tr' ? m.q + ' → <b>' + esc(m.a[0]) + '</b>' : '<b>' + esc(m.a[0]) + '</b>'}</div>`).join('')}</div>` : ''}
    <div class="actions">
      <button data-go="lesson" data-id="${l.id}">↺ Ripeti lezione</button>
      ${passed && nl ? `<button class="primary" data-go="lesson" data-id="${nl.id}">Lezione successiva →</button>` : ''}
      <button data-go="home">🏠 Home</button>
    </div></section>`;
}

// ---------- Ripasso (FSRS) ----------
let R = null;
function renderReview(opts = {}) {
  let items = dueCards();
  if (opts.practice) items = shuffle(Object.entries(state.cards)).slice(0, 20);
  if (!items.length) {
    const total = Object.keys(state.cards).length, nl = nextLesson();
    $('#main').innerHTML = `<section class="card center"><h2>🔁 Ripasso</h2>
      <p>${total ? 'Nessun elemento da ripassare oggi. ¡Genial! Ripassare prima del necessario rende poco: meglio una lezione nuova.' : 'Completa la prima lezione per iniziare a ripassare.'}</p>
      <div class="actions">
        ${nl ? `<button class="primary" data-go="lesson" data-id="${nl.id}">Lezione ${nl.id} →</button>` : ''}
        ${total ? `<button data-practice="1">Esercitati comunque (20 a caso)</button>` : ''}
        <button data-go="home">🏠 Home</button></div></section>`;
    return;
  }
  // i più urgenti per primi, poi mescolati: tipi ed argomenti diversi si alternano (pratica intercalata)
  R = { queue: shuffle(items.slice(0, SESSION_MAX)), i: 0, ok: 0, n: 0, practice: !!opts.practice, thenLesson: opts.thenLesson, more: items.length - SESSION_MAX };
  showCard();
}

function cardToExercise(key, c) {
  if (c.type === 'x') {
    const ex = LESSONS.find(l => l.id === c.lesson)?.exercises[c.idx];
    if (ex) return ex;
  }
  if (c.type === 'p') {
    return Math.random() < 0.5 && c.reps >= 1 ? { t: 'dict', a: [c.es] } : { t: 'say', q: c.it, a: [c.es] };
  }
  // parola: produzione (italiano → spagnolo) o, quando è già nota, ascolto
  if (c.reps >= 2 && Math.random() < 0.3) return { t: 'dict', a: variants(c.es) };
  return { t: 'tr', q: esc(c.it), a: variants(c.es) };
}

function showCard() {
  if (R.i >= R.queue.length) return reviewDone();
  const [key, c, relearn] = R.queue[R.i];
  const e = cardToExercise(key, c);
  const kind = { v: 'Parola', p: 'Frase', x: 'Grammatica' }[c.type];
  $('#main').innerHTML = `<section class="card review">
    <div class="bar small"><div style="width:${R.i / R.queue.length * 100}%"></div></div>
    <p class="muted">${R.i + 1} di ${R.queue.length} · ${kind} · Lezione ${c.lesson}${relearn ? ' · <b>🔄 di nuovo</b>' : ''}${c.reps ? ` · memoria ${Math.round(recall(Math.max(0, daysBetween(c.last, today())), c.S) * 100)}%` : ''}</p>
    <div id="ex"></div></section>`;
  renderExercise($('#ex'), e, (result, actions) => {
    const suggested = result === 'wrong' ? 1 : result === 'accent' || result === 'skip' ? 2 : 3;
    if (R.practice || relearn) {
      actions.innerHTML = `<button class="primary">Continua →</button>`;
      const b = actions.querySelector('button'); b.focus();
      b.onclick = () => { if (!relearn) { R.n++; if (result !== 'wrong') R.ok++; } R.i++; showCard(); };
      return;
    }
    const labels = ['Di nuovo', 'Difficile', 'Bene', 'Facile'];
    actions.innerHTML = `<p class="muted small" style="width:100%;text-align:center">Quanto è stato facile ricordarlo?</p>` +
      labels.map((lb, k) => `<button class="grade g${k + 1} ${k + 1 === suggested ? 'primary' : ''}" data-g="${k + 1}">${lb}<small>${fmtIvl(previewIvl(c, k + 1))}</small></button>`).join('');
    actions.querySelector(`[data-g="${suggested}"]`).focus();
    const grade = g => {
      keyHandler = null;
      schedule(c, g); R.n++; if (g > 1) R.ok++;
      if (g === 1) R.queue.push([key, c, true]); // riproposto a fine sessione
      save(); R.i++; showCard();
    };
    actions.querySelectorAll('.grade').forEach(b => b.onclick = () => grade(+b.dataset.g));
    keyHandler = ev => { if (['1', '2', '3', '4'].includes(ev.key)) grade(+ev.key); };
  });
}

function reviewDone() {
  if (!R.practice) logActivity('reviews');
  const nl = nextLesson();
  $('#main').innerHTML = `<section class="card center"><h2>✅ Ripasso completato</h2>
    <p class="big">${R.ok}/${R.n}</p>
    <p class="muted">Gli elementi facili torneranno tra molti giorni, quelli difficili presto. Così studi solo ciò che serve.</p>
    <div class="actions">
      ${R.more > 0 ? `<button data-go="review">Continua il ripasso (${R.more} rimasti)</button>` : ''}
      ${nl ? `<button class="primary" data-go="lesson" data-id="${nl.id}">${R.thenLesson ? 'Ora la lezione' : 'Lezione'} ${nl.id} →</button>` : ''}
      <button data-go="home">🏠 Home</button></div></section>`;
}

// ---------- Piano, diario e backup ----------
function renderPlan() {
  const left = LESSONS.length - completedCount();
  const rows = Object.entries(RHYTHMS).map(([k, v]) =>
    `<tr class="${+k === state.rhythm ? 'sel' : ''}"><td>${v}</td><td>${Math.ceil(left / k)} settimane</td><td>${fmtDate(addDays(today(), Math.ceil(left / k * 7)))}</td></tr>`).join('');
  const ws = weekStart(); let cal = '';
  for (let w = -7; w <= 0; w++) {
    const s = addDays(ws, w * 7);
    cal += '<div class="week">' + [0, 1, 2, 3, 4, 5, 6].map(d => {
      const day = addDays(s, d), a = state.activity[day];
      return `<span class="${a?.lessons ? 'l' : a?.reviews ? 'r' : day > today() ? 'f' : ''}" title="${day}"></span>`;
    }).join('') + '</div>';
  }
  // carico di ripasso dei prossimi 7 giorni
  const fc = [...Array(7)].map((_, i) => { const d = addDays(today(), i); return Object.values(state.cards).filter(c => i === 0 ? c.due <= d : c.due === d).length; });
  const mx = Math.max(1, ...fc);
  const cards = Object.values(state.cards);
  const mature = cards.filter(c => c.S >= 21).length;
  $('#main').innerHTML = `<section class="card"><h3>📅 Quanto ti manca</h3>
    <p>Lezioni rimanenti: <b>${left}</b> su ${LESSONS.length}.</p>
    <table class="plan"><tr><th>Ritmo</th><th>Durata</th><th>Fine prevista</th></tr>${rows}</table>
    <p class="muted">Dopo l'A2 trovi in <code>docs/piano-di-studio.md</code> come proseguire verso il B1.</p></section>
    <section class="card"><h3>🧠 La tua memoria</h3>
    <p>Elementi in ripasso: <b>${cards.length}</b> · consolidati (stabili per oltre 3 settimane): <b>${mature}</b></p>
    <p class="muted">Ripassi previsti nei prossimi 7 giorni:</p>
    <div class="forecast">${fc.map((n, i) => `<div><span style="height:${n / mx * 60 + 2}px"></span><b>${n}</b><small>${i ? new Date(addDays(today(), i) + 'T12:00:00').toLocaleDateString('it-IT', { weekday: 'short' }) : 'oggi'}</small></div>`).join('')}</div></section>
    <section class="card"><h3>Le tue ultime 8 settimane</h3>
    <div class="cal">${cal}</div>
    <p class="muted"><span class="dot l"></span> lezione &nbsp; <span class="dot r"></span> solo ripasso</p></section>
    <section class="card"><h3>✍️ Il tuo diario</h3>
    ${state.diary.length ? state.diary.map(d => `<div class="phrase"><small class="muted">${fmtDate(d.date)} · lezione ${d.lesson}</small><br>${esc(d.text).replace(/\n/g, '<br>')}</div>`).join('') : '<p class="muted">Le frasi che scrivi alla fine di ogni lezione compariranno qui. Mostrale a un tutor per farle correggere!</p>'}</section>
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
    f.text().then(t => { try { localStorage.setItem(STORE_KEY, JSON.stringify(JSON.parse(t))); state = load(); save(); alert('Progressi importati!'); render('home'); } catch { alert('File non valido.'); } });
  };
  $('#reset').onclick = () => { if (confirm('Vuoi davvero cancellare tutti i progressi?')) { state = defaultState(); save(); render('home'); } };
}

// ---------- Navigazione ----------
document.addEventListener('click', e => {
  const s = e.target.closest('[data-say]');
  if (s) { speak(s.dataset.say); return; }
  const g = e.target.closest('[data-go]');
  if (g) { e.preventDefault(); render(g.dataset.go, g.dataset.id); return; }
  const r = e.target.closest('[data-rhythm]');
  if (r) { state.rhythm = +r.dataset.rhythm; save(); renderHome(); return; }
  if (e.target.closest('[data-practice]')) renderReview({ practice: true });
});
$$('nav button').forEach(b => b.onclick = () => render(b.dataset.view));
save();
render('home');
