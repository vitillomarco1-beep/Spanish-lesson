# 🇪🇸 ¡Aprende Español! — corso di spagnolo per italiani

Un corso completo **dal livello zero all'A2**, pensato per chi parla italiano e lavora nella **consulenza ambientale / carbon farming**, che funziona **offline** nel browser, senza account né installazioni.

## Come si usa

1. Scarica la repository (oppure *Code → Download ZIP* su GitHub) ed estrai i file.
2. Apri **`index.html`** con un doppio clic: si apre nel browser (Chrome, Edge, Safari o Firefox).
3. Scegli il tuo ritmo (**2, 3 o 5 volte a settimana, oppure ogni giorno**) e inizia la Lezione 1.

I progressi restano salvati nel browser. Puoi esportarli o importarli dalla sezione **📅 Piano**.

## Cosa contiene

| | |
|---|---|
| 📚 **31 lezioni passo dopo passo** | 19 lezioni A1 + 12 lezioni A2: vocabolario con audio, grammatica spiegata in italiano, frasi utili ed esercizi |
| ✍️ **Oltre 500 esercizi** | Scelta multipla, completamento, traduzione, dettato e pronuncia con riconoscimento vocale. Correzione immediata (riconosce anche gli errori di accento); gli errori tornano a fine lezione |
| 🔁 **Ripasso con FSRS** | Parole, frasi e regole di grammatica tornano quando la probabilità di ricordarle scende al 90% (lo stesso algoritmo adottato da Anki) |
| 🧠 **Metodo basato sulla scienza** | Effetto test, ripetizione dilazionata, pratica intercalata, pre-test, effetto produzione, autoriferimento, consolidamento nel sonno: vedi [`docs/neuroscienze-apprendimento.md`](docs/neuroscienze-apprendimento.md) |
| 🔊 **Pronuncia** | Sintesi vocale in spagnolo di Spagna, ascolto lento/normale e *shadowing* |
| 📅 **Piano flessibile** | Obiettivo settimanale, serie di giorni 🔥, data di fine prevista in base al tuo ritmo |
| 💼 **Spagnolo per il lavoro** | Ogni lezione include parole, frasi ed esercizi di consulenza ambientale e carbon farming, più 8 lezioni professionali (P1-P8): presentarsi, suolo e pratiche agricole, zootecnia ed emissioni, boschi e campionamento, crediti di carbonio e CRCF, email e riunioni, presentare dati, networking. Si può disattivare con "Solo vita quotidiana" |
| ⚠️ **Falsi amici** | Gli errori tipici degli italiani (burro, embarazada, salir, éxito…) |

Ogni lezione ha 6 fasi: **Indovina** (pre-test sul vocabolario) → **Grammatica** → **Ascolta e ripeti** → **Esercizi** (mescolati con domande delle lezioni precedenti) → **Frasi tue** (diario) → **Risultato**.
Il pulsante **▶ Sessione di oggi** fa partire prima il ripasso e poi la lezione nuova.
Una lezione si supera con almeno il 70% di risposte giuste al primo tentativo, e così si sblocca la successiva. Se conosci già un po' di spagnolo, puoi sbloccare tutte le lezioni.

## Documenti

- [`docs/confronto-piattaforme.md`](docs/confronto-piattaforme.md): confronto tra Duolingo, Babbel, Busuu, italki, Preply, Dreaming Spanish, Anki e altre, con la combinazione consigliata.
- [`docs/neuroscienze-apprendimento.md`](docs/neuroscienze-apprendimento.md): cosa dice la ricerca su come si impara, come è applicato nell'app, con bibliografia.
- [`docs/piano-di-studio.md`](docs/piano-di-studio.md): calendario per ogni ritmo, le tappe e come proseguire verso il B1.

## Struttura

```
index.html       → interfaccia e stile
app.js           → logica (lezioni, esercizi, ripasso, piano)
lessons.js       → contenuti del corso generale (facili da modificare o ampliare)
lessons-work.js  → contenuti 💼 per il lavoro e lezioni professionali P1-P8
docs/            → basi scientifiche, confronto piattaforme e piano di studio
```
