// Corso di spagnolo per italiani — livelli A1 → A2 (Quadro Comune Europeo)
// Ogni lezione: ~20-30 minuti. Formato esercizi:
//   {t:'mc',   q:'domanda', o:['opzioni'], a:indice_corretto}
//   {t:'fill', q:'frase con ___', a:['risposte accettate'], h:'suggerimento'}
//   {t:'tr',   q:'frase in italiano', a:['traduzioni accettate']}
// Gli esercizi di vocabolario vengono generati automaticamente da "vocab".

const LESSONS = [
// ===================== LIVELLO A1 =====================
{
  id: 1, level: 'A1', title: 'Saluti e presentazioni',
  goal: 'Salutare, dire come ti chiami e chiedere il nome a qualcuno.',
  vocab: [
    ['hola', 'ciao'], ['buenos días', 'buongiorno'], ['buenas tardes', 'buon pomeriggio'],
    ['buenas noches', 'buonasera / buonanotte'], ['adiós', 'arrivederci'], ['hasta luego', 'a dopo'],
    ['por favor', 'per favore'], ['gracias', 'grazie'], ['de nada', 'prego (risposta a grazie)'],
    ['sí', 'sì'], ['no', 'no'], ['encantado / encantada', 'piacere']
  ],
  grammar: `
<p>Le domande e le esclamazioni in spagnolo si aprono con un <b>punto rovesciato</b>: <b>¿</b>Cómo te llamas<b>?</b> — <b>¡</b>Hola<b>!</b></p>
<table>
<tr><th>Spagnolo</th><th>Italiano</th></tr>
<tr><td>¿Cómo te llamas?</td><td>Come ti chiami?</td></tr>
<tr><td>Me llamo Marco.</td><td>Mi chiamo Marco.</td></tr>
<tr><td>¿Cómo se llama usted?</td><td>Come si chiama (Lei)?</td></tr>
<tr><td>Mucho gusto.</td><td>Molto piacere.</td></tr>
</table>
<p><b>Usted</b> è il "Lei" di cortesia: si usa con il verbo alla 3ª persona, come in italiano.</p>
<p>⚠️ <b>Buenas noches</b> si usa sia per "buonasera" (dopo cena, ~dalle 21) sia per "buonanotte". Il pomeriggio in Spagna dura fino a sera: <i>buenas tardes</i> va bene fino alle 20-21.</p>`,
  phrases: [
    ['¡Hola! ¿Qué tal?', 'Ciao! Come va?'],
    ['Me llamo Marco, ¿y tú?', 'Mi chiamo Marco, e tu?'],
    ['Encantado de conocerte.', 'Piacere di conoscerti.'],
    ['¡Hasta mañana!', 'A domani!']
  ],
  exercises: [
    {t:'mc', q:'Come rispondi a "Gracias"?', o:['De nada','Por favor','Adiós','Hola'], a:0},
    {t:'fill', q:'¿Cómo te ___?', a:['llamas'], h:'verbo "llamarse", tu'},
    {t:'fill', q:'Me ___ Ana.', a:['llamo'], h:'verbo "llamarse", io'},
    {t:'tr', q:'Buongiorno, come va?', a:['buenos días, ¿qué tal?','buenos dias que tal','buenos días, ¿cómo estás?','buenos días, ¿cómo va?']},
    {t:'mc', q:'Alle 22:00 entri in un ristorante. Dici:', o:['Buenas noches','Buenos días','Buenas tardes','Hasta luego'], a:0}
  ],
  tip: 'Spagnolo e italiano condividono circa l\'80% del lessico di base: sfrutta questo vantaggio, ma attento ai "falsi amici" che vedrai nelle lezioni.'
},
{
  id: 2, level: 'A1', title: 'Pronuncia, alfabeto e numeri 0-10',
  goal: 'Pronunciare correttamente le lettere difficili e contare fino a 10.',
  vocab: [
    ['cero', 'zero'], ['uno', 'uno'], ['dos', 'due'], ['tres', 'tre'], ['cuatro', 'quattro'],
    ['cinco', 'cinque'], ['seis', 'sei'], ['siete', 'sette'], ['ocho', 'otto'], ['nueve', 'nove'], ['diez', 'dieci']
  ],
  grammar: `
<table>
<tr><th>Lettera</th><th>Si pronuncia</th><th>Esempio</th></tr>
<tr><td>j, ge, gi</td><td>"h" aspirata forte (come in tedesco "Bach")</td><td>jamón, gente</td></tr>
<tr><td>ll</td><td>come la "gl" di "gli" semplificata, oggi quasi come "i" (ya)</td><td>llamar, calle</td></tr>
<tr><td>ñ</td><td>come "gn" di "gnocchi"</td><td>España, mañana</td></tr>
<tr><td>z, ce, ci</td><td>come "th" inglese di "think" (in Spagna); "s" in America Latina</td><td>zapato, cinco</td></tr>
<tr><td>h</td><td>muta, non si pronuncia</td><td>hola = "ola"</td></tr>
<tr><td>v</td><td>quasi come la "b"</td><td>vino ≈ "bino"</td></tr>
<tr><td>ch</td><td>come "ci" di "ciao"</td><td>chico, ocho</td></tr>
<tr><td>qu</td><td>come "ch" di "chilo" (la u è muta)</td><td>queso, quince</td></tr>
</table>
<p><b>Niente doppie!</b> Lo spagnolo non ha consonanti doppie (tranne rr, ll, cc): <i>possibile → posible</i>, <i>bello → bello</i> (ma ll ha un altro suono!). È l'errore più tipico degli italiani.</p>
<p><b>Accento scritto</b> (´): indica la sillaba tonica — mamá, árbol, teléfono. Si inclina sempre verso destra (´), mai al contrario come in italiano (è).</p>`,
  phrases: [
    ['¿Cómo se escribe?', 'Come si scrive?'],
    ['¿Puedes repetir, por favor?', 'Puoi ripetere, per favore?'],
    ['Más despacio, por favor.', 'Più lentamente, per favore.'],
    ['No entiendo.', 'Non capisco.']
  ],
  exercises: [
    {t:'mc', q:'Come si pronuncia la "h" di "hola"?', o:['Non si pronuncia','Come una "h" aspirata','Come la "j"','Come "ch"'], a:0},
    {t:'mc', q:'Quale parola è scritta correttamente in spagnolo?', o:['posible','possibile','possible','posibile'], a:0},
    {t:'fill', q:'tres + cuatro = ___', a:['siete']},
    {t:'fill', q:'diez - dos = ___', a:['ocho']},
    {t:'tr', q:'Non capisco.', a:['no entiendo','no comprendo']}
  ],
  tip: 'Clicca sull\'icona 🔊 accanto alle parole per ascoltarle. Ripeti ad alta voce: la pronuncia si impara con la bocca, non con gli occhi.'
},
{
  id: 3, level: 'A1', title: 'Il verbo SER: nazionalità e professioni',
  goal: 'Dire chi sei, da dove vieni e che lavoro fai.',
  vocab: [
    ['italiano / italiana', 'italiano / italiana'], ['español / española', 'spagnolo / spagnola'],
    ['el profesor / la profesora', 'il professore / la professoressa'], ['el médico / la médica', 'il medico'],
    ['el estudiante', 'lo studente'], ['el abogado', 'l\'avvocato'], ['el camarero', 'il cameriere'],
    ['el ingeniero', 'l\'ingegnere'], ['de dónde', 'di dove'], ['Italia', 'Italia'], ['España', 'Spagna']
  ],
  grammar: `
<p>Pronomi soggetto e presente di <b>SER</b> (essere — identità, origine, professione):</p>
<table>
<tr><th>Pronome</th><th>SER</th><th>Italiano</th></tr>
<tr><td>yo</td><td>soy</td><td>io sono</td></tr>
<tr><td>tú</td><td>eres</td><td>tu sei</td></tr>
<tr><td>él / ella / usted</td><td>es</td><td>lui / lei / Lei è</td></tr>
<tr><td>nosotros/as</td><td>somos</td><td>noi siamo</td></tr>
<tr><td>vosotros/as</td><td>sois</td><td>voi siete</td></tr>
<tr><td>ellos / ellas / ustedes</td><td>son</td><td>loro sono</td></tr>
</table>
<p>Come in italiano, il pronome si omette quasi sempre: <i>Soy italiano</i>.</p>
<p>Le professioni <b>non</b> vogliono l'articolo dopo ser: <i>Soy ingeniero</i> (non "soy un ingeniero").</p>
<p>⚠️ Falso amico: <b>burro</b> in spagnolo = asino! Il burro si dice <b>mantequilla</b>.</p>`,
  phrases: [
    ['¿De dónde eres?', 'Di dove sei?'],
    ['Soy de Italia, de Roma.', 'Sono italiano, di Roma.'],
    ['¿A qué te dedicas?', 'Che lavoro fai?'],
    ['Soy ingeniero.', 'Sono ingegnere.']
  ],
  exercises: [
    {t:'fill', q:'Yo ___ italiano.', a:['soy']},
    {t:'fill', q:'Nosotros ___ estudiantes.', a:['somos']},
    {t:'fill', q:'¿Tú ___ español?', a:['eres']},
    {t:'fill', q:'Vosotros ___ de Madrid.', a:['sois']},
    {t:'mc', q:'"Burro" in spagnolo significa…', o:['asino','burro','borsa','torre'], a:0},
    {t:'tr', q:'Di dove sei?', a:['¿de dónde eres?','de donde eres']}
  ],
  tip: 'Presentati ad alta voce ogni giorno: nome, città, lavoro. Bastano 30 secondi.'
},
{
  id: 4, level: 'A1', title: 'Articoli, genere e plurale',
  goal: 'Usare correttamente gli articoli e formare il plurale.',
  vocab: [
    ['la casa', 'la casa'], ['el coche', 'la macchina'], ['el libro', 'il libro'], ['la mesa', 'il tavolo'],
    ['la silla', 'la sedia'], ['el perro', 'il cane'], ['el gato', 'il gatto'], ['la ciudad', 'la città'],
    ['el día', 'il giorno'], ['la mano', 'la mano'], ['el agua', 'l\'acqua'], ['la leche', 'il latte']
  ],
  grammar: `
<table>
<tr><th></th><th>Maschile</th><th>Femminile</th></tr>
<tr><td>Determinativo sing.</td><td><b>el</b> libro</td><td><b>la</b> casa</td></tr>
<tr><td>Determinativo plur.</td><td><b>los</b> libros</td><td><b>las</b> casas</td></tr>
<tr><td>Indeterminativo sing.</td><td><b>un</b> libro</td><td><b>una</b> casa</td></tr>
<tr><td>Indeterminativo plur.</td><td><b>unos</b> libros (dei)</td><td><b>unas</b> casas (delle)</td></tr>
</table>
<p>Lo spagnolo ha solo <b>el / la / los / las</b>: niente "lo, gli, l'".</p>
<p><b>Plurale</b>: vocale → +s (casa → casas); consonante → +es (ciudad → ciudades); z → ces (lápiz → lápices).</p>
<p>⚠️ Genere diverso dall'italiano: <b>la leche</b> (il latte), <b>la sal</b> (il sale), <b>la miel</b> (il miele), <b>el árbol</b> (l'albero ✓), <b>la nariz</b> (il naso), <b>el color</b>, <b>el puente</b> (il ponte ✓), <b>la sangre</b> (il sangue).</p>
<p><b>El agua</b>: le parole femminili che iniziano con "a" tonica usano <i>el</i> al singolare, ma restano femminili: <i>el agua fría, las aguas</i>.</p>`,
  phrases: [
    ['Tengo un perro y dos gatos.', 'Ho un cane e due gatti.'],
    ['La leche está fría.', 'Il latte è freddo.'],
    ['Las ciudades españolas son bonitas.', 'Le città spagnole sono belle.']
  ],
  exercises: [
    {t:'mc', q:'Il latte →', o:['la leche','el leche','lo leche','il leche'], a:0},
    {t:'fill', q:'___ libros (i libri)', a:['los']},
    {t:'fill', q:'una ciudad → dos ___', a:['ciudades']},
    {t:'fill', q:'un lápiz → dos ___', a:['lápices']},
    {t:'mc', q:'"Gli amici" in spagnolo:', o:['los amigos','gli amigos','las amigos','lo amigos'], a:0},
    {t:'tr', q:'Ho un cane.', a:['tengo un perro']}
  ],
  tip: 'Impara sempre i sostantivi CON l\'articolo (la leche, el día): così memorizzi anche il genere.'
},
{
  id: 5, level: 'A1', title: 'Il verbo ESTAR: stati d\'animo e luoghi',
  goal: 'Chiedere e dire come stai e dove si trova qualcosa. Prima distinzione ser/estar.',
  vocab: [
    ['bien', 'bene'], ['mal', 'male'], ['cansado', 'stanco'], ['contento', 'contento'],
    ['triste', 'triste'], ['enfermo', 'malato'], ['ocupado', 'occupato'], ['aquí', 'qui'],
    ['allí', 'lì'], ['en casa', 'a casa'], ['cerca', 'vicino'], ['lejos', 'lontano']
  ],
  grammar: `
<table>
<tr><th>Pronome</th><th>ESTAR</th></tr>
<tr><td>yo</td><td>estoy</td></tr><tr><td>tú</td><td>estás</td></tr>
<tr><td>él/ella/usted</td><td>está</td></tr><tr><td>nosotros</td><td>estamos</td></tr>
<tr><td>vosotros</td><td>estáis</td></tr><tr><td>ellos/ustedes</td><td>están</td></tr>
</table>
<p><b>SER</b> = cosa/chi è (identità, caratteristiche permanenti, origine, professione).<br>
<b>ESTAR</b> = come/dove sta (stati temporanei, emozioni, posizione).</p>
<p><i>Soy</i> alto (caratteristica) — <i>Estoy</i> cansado (stato). <i>Madrid es</i> grande — <i>Madrid está</i> en España.</p>
<p>Trucco: se in italiano puoi dire "stare" o indichi un luogo → quasi sempre <b>estar</b>.</p>`,
  phrases: [
    ['¿Cómo estás?', 'Come stai?'],
    ['Estoy muy bien, gracias.', 'Sto molto bene, grazie.'],
    ['¿Dónde está el baño?', 'Dov\'è il bagno?'],
    ['Está allí, a la derecha.', 'È lì, a destra.']
  ],
  exercises: [
    {t:'fill', q:'Yo ___ cansado.', a:['estoy']},
    {t:'fill', q:'Roma ___ en Italia.', a:['está']},
    {t:'mc', q:'María ___ médica.', o:['es','está'], a:0},
    {t:'mc', q:'Hoy nosotros ___ contentos.', o:['estamos','somos'], a:0},
    {t:'mc', q:'¿Dónde ___ las llaves?', o:['están','son'], a:0},
    {t:'tr', q:'Dov\'è il bagno?', a:['¿dónde está el baño?','dónde está el baño']}
  ],
  tip: 'Ser/estar è il tema più importante dello spagnolo per un italiano: tornerà spesso. Non preoccuparti se all\'inizio sbagli.'
},
{
  id: 6, level: 'A1', title: 'Numeri 11-100, età e il verbo TENER',
  goal: 'Dire la tua età, il tuo numero di telefono e cosa possiedi.',
  vocab: [
    ['once', 'undici'], ['doce', 'dodici'], ['quince', 'quindici'], ['dieciséis', 'sedici'],
    ['veinte', 'venti'], ['veintiuno', 'ventuno'], ['treinta', 'trenta'], ['cuarenta', 'quaranta'],
    ['cincuenta', 'cinquanta'], ['sesenta', 'sessanta'], ['setenta', 'settanta'],
    ['ochenta', 'ottanta'], ['noventa', 'novanta'], ['cien', 'cento']
  ],
  grammar: `
<p>Da 16 a 29 si scrivono attaccati: diecisiete, dieciocho, veintidós, veintitrés… Da 31 in poi con <b>y</b>: treinta <b>y</b> uno, cuarenta <b>y</b> cinco.</p>
<table>
<tr><th>Pronome</th><th>TENER (avere)</th></tr>
<tr><td>yo</td><td>tengo</td></tr><tr><td>tú</td><td>tienes</td></tr>
<tr><td>él/ella/usted</td><td>tiene</td></tr><tr><td>nosotros</td><td>tenemos</td></tr>
<tr><td>vosotros</td><td>tenéis</td></tr><tr><td>ellos/ustedes</td><td>tienen</td></tr>
</table>
<p>L'età si dice con tener: <i>Tengo treinta años</i>. Anche: tener hambre (fame), sed (sete), frío (freddo), calor (caldo), sueño (sonno), prisa (fretta).</p>
<p>⚠️ <b>Haber</b> NON significa "avere" (è solo ausiliare): "ho un libro" = <i>tengo</i> un libro.</p>`,
  phrases: [
    ['¿Cuántos años tienes?', 'Quanti anni hai?'],
    ['Tengo treinta y dos años.', 'Ho trentadue anni.'],
    ['Tengo hambre.', 'Ho fame.'],
    ['¿Cuál es tu número de teléfono?', 'Qual è il tuo numero di telefono?']
  ],
  exercises: [
    {t:'fill', q:'Yo ___ veinticinco años.', a:['tengo']},
    {t:'fill', q:'¿Cuántos años ___ (tú)?', a:['tienes']},
    {t:'mc', q:'45 si scrive:', o:['cuarenta y cinco','cuarentacinco','cuarenta e cinco','cuaranta y cinco'], a:0},
    {t:'mc', q:'Ho sete →', o:['Tengo sed','Estoy sed','Soy sed','He sed'], a:0},
    {t:'fill', q:'diez + diez = ___', a:['veinte']},
    {t:'tr', q:'Ho fame.', a:['tengo hambre']}
  ],
  tip: 'Leggi ad alta voce in spagnolo i numeri che vedi nella giornata: targhe, prezzi, orari.'
},
{
  id: 7, level: 'A1', title: 'La famiglia e i possessivi',
  goal: 'Parlare della tua famiglia.',
  vocab: [
    ['el padre', 'il padre'], ['la madre', 'la madre'], ['los padres', 'i genitori'],
    ['el hermano', 'il fratello'], ['la hermana', 'la sorella'], ['el hijo', 'il figlio'],
    ['la hija', 'la figlia'], ['el abuelo', 'il nonno'], ['la abuela', 'la nonna'],
    ['el marido / el esposo', 'il marito'], ['la mujer / la esposa', 'la moglie'],
    ['el novio / la novia', 'il fidanzato / la fidanzata'], ['el primo', 'il cugino'], ['el tío', 'lo zio']
  ],
  grammar: `
<table>
<tr><th>Persona</th><th>Singolare</th><th>Plurale</th></tr>
<tr><td>mio</td><td>mi</td><td>mis</td></tr>
<tr><td>tuo</td><td>tu</td><td>tus</td></tr>
<tr><td>suo / Suo</td><td>su</td><td>sus</td></tr>
<tr><td>nostro</td><td>nuestro/a</td><td>nuestros/as</td></tr>
<tr><td>vostro</td><td>vuestro/a</td><td>vuestros/as</td></tr>
<tr><td>loro</td><td>su</td><td>sus</td></tr>
</table>
<p>Differenza dall'italiano: <b>niente articolo</b> davanti al possessivo! "La mia casa" = <i>mi casa</i>; "mio padre" = <i>mi padre</i>.</p>
<p><i>Tu</i> (tuo) non ha accento; <i>tú</i> (pronome tu) sì.</p>
<p>⚠️ <b>Los padres</b> = i genitori (anche "i padri"). <b>El primo</b> = il cugino (primo = "primero").</p>`,
  phrases: [
    ['Tengo dos hermanos.', 'Ho due fratelli.'],
    ['Mi madre se llama Lucía.', 'Mia madre si chiama Lucia.'],
    ['¿Tienes hijos?', 'Hai figli?'],
    ['Nuestros abuelos viven en Sevilla.', 'I nostri nonni vivono a Siviglia.']
  ],
  exercises: [
    {t:'mc', q:'"La mia casa" →', o:['mi casa','la mi casa','la mía casa','mía casa'], a:0},
    {t:'fill', q:'___ hermanos (i miei fratelli)', a:['mis']},
    {t:'fill', q:'___ casa (la nostra casa)', a:['nuestra']},
    {t:'mc', q:'"Mi primo" significa…', o:['mio cugino','il mio primo','mio zio','mio fratello'], a:0},
    {t:'tr', q:'Mio padre si chiama Paolo.', a:['mi padre se llama paolo','mi padre se llama pablo']}
  ],
  tip: 'Disegna il tuo albero genealogico e scrivi una frase per ogni persona: "Mi tía Ana es profesora".'
},
{
  id: 8, level: 'A1', title: 'Presente dei verbi in -AR',
  goal: 'Coniugare i verbi regolari della 1ª coniugazione e parlare di attività quotidiane.',
  vocab: [
    ['hablar', 'parlare'], ['trabajar', 'lavorare'], ['estudiar', 'studiare'], ['comprar', 'comprare'],
    ['escuchar', 'ascoltare'], ['mirar', 'guardare'], ['cocinar', 'cucinare'], ['viajar', 'viaggiare'],
    ['necesitar', 'avere bisogno di'], ['tomar', 'prendere'], ['llegar', 'arrivare'], ['buscar', 'cercare']
  ],
  grammar: `
<table>
<tr><th>Pronome</th><th>HABLAR</th><th>Desinenza</th></tr>
<tr><td>yo</td><td>habl<b>o</b></td><td>-o</td></tr>
<tr><td>tú</td><td>habl<b>as</b></td><td>-as</td></tr>
<tr><td>él/ella/usted</td><td>habl<b>a</b></td><td>-a</td></tr>
<tr><td>nosotros</td><td>habl<b>amos</b></td><td>-amos</td></tr>
<tr><td>vosotros</td><td>habl<b>áis</b></td><td>-áis</td></tr>
<tr><td>ellos/ustedes</td><td>habl<b>an</b></td><td>-an</td></tr>
</table>
<p>Molto simile all'italiano! Attenzione al <b>tú</b>: -<b>as</b> (non -i): <i>tú hablas</i> = tu parli.</p>
<p><b>Tomar</b> = prendere (un caffè, l'autobus): <i>tomo un café</i>.</p>`,
  phrases: [
    ['¿Hablas inglés?', 'Parli inglese?'],
    ['Trabajo en una oficina.', 'Lavoro in un ufficio.'],
    ['Estudiamos español los lunes.', 'Studiamo spagnolo il lunedì.'],
    ['¿Qué buscas?', 'Cosa cerchi?']
  ],
  exercises: [
    {t:'fill', q:'Yo ___ en Milán. (trabajar)', a:['trabajo']},
    {t:'fill', q:'Tú ___ muy bien. (cocinar)', a:['cocinas']},
    {t:'fill', q:'Nosotros ___ música. (escuchar)', a:['escuchamos']},
    {t:'fill', q:'Ellos ___ mucho. (viajar)', a:['viajan']},
    {t:'fill', q:'Vosotros ___ español. (estudiar)', a:['estudiáis']},
    {t:'tr', q:'Parli spagnolo?', a:['¿hablas español?','hablas español','¿hablas castellano?']}
  ],
  tip: 'Scegli 3 verbi della lezione e scrivi 3 frasi vere sulla tua vita. Le frasi personali si ricordano molto meglio.'
},
{
  id: 9, level: 'A1', title: 'Presente dei verbi in -ER e -IR',
  goal: 'Coniugare la 2ª e 3ª coniugazione.',
  vocab: [
    ['comer', 'mangiare'], ['beber', 'bere'], ['leer', 'leggere'], ['aprender', 'imparare'],
    ['comprender', 'capire'], ['correr', 'correre'], ['vivir', 'vivere / abitare'], ['escribir', 'scrivere'],
    ['abrir', 'aprire'], ['recibir', 'ricevere'], ['subir', 'salire'], ['decidir', 'decidere']
  ],
  grammar: `
<table>
<tr><th>Pronome</th><th>COMER</th><th>VIVIR</th></tr>
<tr><td>yo</td><td>com<b>o</b></td><td>viv<b>o</b></td></tr>
<tr><td>tú</td><td>com<b>es</b></td><td>viv<b>es</b></td></tr>
<tr><td>él/ella/usted</td><td>com<b>e</b></td><td>viv<b>e</b></td></tr>
<tr><td>nosotros</td><td>com<b>emos</b></td><td>viv<b>imos</b></td></tr>
<tr><td>vosotros</td><td>com<b>éis</b></td><td>viv<b>ís</b></td></tr>
<tr><td>ellos/ustedes</td><td>com<b>en</b></td><td>viv<b>en</b></td></tr>
</table>
<p>-ER e -IR si differenziano solo in <i>nosotros</i> e <i>vosotros</i>.</p>
<p>⚠️ Falsi amici: <b>subir</b> = salire (non subire); <b>salir</b> = uscire; <b>aprender</b> = imparare (non apprendere notizie, che è "enterarse").</p>`,
  phrases: [
    ['¿Dónde vives?', 'Dove abiti?'],
    ['Vivo en Turín.', 'Abito a Torino.'],
    ['No como carne.', 'Non mangio carne.'],
    ['Aprendemos español.', 'Impariamo lo spagnolo.']
  ],
  exercises: [
    {t:'fill', q:'Nosotros ___ en Roma. (vivir)', a:['vivimos']},
    {t:'fill', q:'Tú ___ mucho café. (beber)', a:['bebes']},
    {t:'fill', q:'Ella ___ un libro. (leer)', a:['lee']},
    {t:'fill', q:'Vosotros ___ una carta. (escribir)', a:['escribís']},
    {t:'mc', q:'"Subir" significa…', o:['salire','subire','uscire','scendere'], a:0},
    {t:'tr', q:'Dove abiti?', a:['¿dónde vives?','dónde vives','donde vives']}
  ],
  tip: 'Metti il telefono in spagnolo: è un\'immersione gratuita di 5 minuti al giorno.'
},
{
  id: 10, level: 'A1', title: 'L\'ora e i giorni della settimana',
  goal: 'Chiedere e dire l\'ora, parlare dei giorni.',
  vocab: [
    ['lunes', 'lunedì'], ['martes', 'martedì'], ['miércoles', 'mercoledì'], ['jueves', 'giovedì'],
    ['viernes', 'venerdì'], ['sábado', 'sabato'], ['domingo', 'domenica'], ['hoy', 'oggi'],
    ['mañana', 'domani'], ['ayer', 'ieri'], ['la semana', 'la settimana'], ['el fin de semana', 'il fine settimana']
  ],
  grammar: `
<p><b>¿Qué hora es?</b> — Che ore sono?</p>
<table>
<tr><td>1:00</td><td>Es <b>la</b> una.</td></tr>
<tr><td>2:00</td><td>Son <b>las</b> dos.</td></tr>
<tr><td>3:15</td><td>Son las tres <b>y cuarto</b>.</td></tr>
<tr><td>4:30</td><td>Son las cuatro <b>y media</b>.</td></tr>
<tr><td>5:45</td><td>Son las seis <b>menos cuarto</b>.</td></tr>
<tr><td>7:10</td><td>Son las siete y diez.</td></tr>
</table>
<p>"A che ora…?" = <b>¿A qué hora…?</b> → <i>A las ocho.</i></p>
<p>Giorni: <i>el lunes</i> = lunedì (prossimo); <i>los lunes</i> = di lunedì (ogni lunedì).</p>
<p>⚠️ <b>Mañana</b> = domani, ma <b>la mañana</b> = la mattina. "Domani mattina" = <i>mañana por la mañana</i>.</p>`,
  phrases: [
    ['¿Qué hora es?', 'Che ore sono?'],
    ['Son las nueve y media.', 'Sono le nove e mezza.'],
    ['¿A qué hora empieza?', 'A che ora comincia?'],
    ['Nos vemos el sábado.', 'Ci vediamo sabato.']
  ],
  exercises: [
    {t:'mc', q:'1:00 →', o:['Es la una','Son las una','Es el uno','Son la una'], a:0},
    {t:'fill', q:'4:30 → Son las cuatro y ___', a:['media']},
    {t:'fill', q:'8:45 → Son las nueve ___ cuarto', a:['menos']},
    {t:'mc', q:'"Mañana por la mañana" significa…', o:['domani mattina','stamattina','ogni mattina','ieri mattina'], a:0},
    {t:'tr', q:'Che ore sono?', a:['¿qué hora es?','qué hora es','que hora es']}
  ],
  tip: 'In Spagna si mangia tardi: pranzo 14-15, cena 21-22. "La tarde" va dalle 14 alle 20-21 circa.'
},
{
  id: 11, level: 'A1', title: 'La routine e i verbi riflessivi',
  goal: 'Descrivere la tua giornata tipo.',
  vocab: [
    ['levantarse', 'alzarsi'], ['despertarse', 'svegliarsi'], ['ducharse', 'farsi la doccia'],
    ['vestirse', 'vestirsi'], ['acostarse', 'andare a letto'], ['desayunar', 'fare colazione'],
    ['almorzar / comer', 'pranzare'], ['cenar', 'cenare'], ['siempre', 'sempre'],
    ['a veces', 'a volte'], ['nunca', 'mai'], ['temprano', 'presto'], ['tarde', 'tardi']
  ],
  grammar: `
<table>
<tr><th>Pronome</th><th>LEVANTARSE</th></tr>
<tr><td>yo</td><td><b>me</b> levanto</td></tr><tr><td>tú</td><td><b>te</b> levantas</td></tr>
<tr><td>él/ella/usted</td><td><b>se</b> levanta</td></tr><tr><td>nosotros</td><td><b>nos</b> levantamos</td></tr>
<tr><td>vosotros</td><td><b>os</b> levantáis</td></tr><tr><td>ellos/ustedes</td><td><b>se</b> levantan</td></tr>
</table>
<p>Come in italiano. Attenzione: <b>os</b> per "vi".</p>
<p>Alcuni verbi cambiano la vocale della radice: desp<b>ie</b>rto, ac<b>ue</b>sto, v<b>i</b>sto, alm<b>ue</b>rzo (lo vedremo meglio nella lezione 15).</p>
<p>Frequenza: <i>siempre, normalmente, a veces, casi nunca, nunca</i>.</p>`,
  phrases: [
    ['Me levanto a las siete.', 'Mi alzo alle sette.'],
    ['Desayuno un café con leche.', 'Faccio colazione con un caffellatte.'],
    ['Nunca me acuesto temprano.', 'Non vado mai a letto presto.'],
    ['¿A qué hora te duchas?', 'A che ora ti fai la doccia?']
  ],
  exercises: [
    {t:'fill', q:'Yo ___ levanto a las ocho.', a:['me']},
    {t:'fill', q:'Vosotros ___ ducháis por la mañana.', a:['os']},
    {t:'fill', q:'Ellos ___ acuestan tarde.', a:['se']},
    {t:'mc', q:'"Desayunar" significa…', o:['fare colazione','pranzare','digiunare','cenare'], a:0},
    {t:'tr', q:'Mi alzo alle sette.', a:['me levanto a las siete']}
  ],
  tip: 'Stasera racconta la tua giornata in spagnolo a voce alta, in 5 frasi.'
},
{
  id: 12, level: 'A1', title: 'La città: HAY e le indicazioni',
  goal: 'Chiedere e dare indicazioni stradali.',
  vocab: [
    ['la calle', 'la via'], ['la plaza', 'la piazza'], ['el banco', 'la banca'], ['la farmacia', 'la farmacia'],
    ['el supermercado', 'il supermercato'], ['la estación', 'la stazione'], ['el museo', 'il museo'],
    ['a la derecha', 'a destra'], ['a la izquierda', 'a sinistra'], ['todo recto', 'sempre dritto'],
    ['la esquina', 'l\'angolo'], ['al lado de', 'accanto a'], ['enfrente de', 'di fronte a']
  ],
  grammar: `
<p><b>HAY</b> = c'è / ci sono (invariabile!): <i>Hay un banco. Hay dos farmacias.</i></p>
<p><b>HAY</b> vs <b>ESTÁ</b>:</p>
<ul>
<li>HAY + un/una/numero/niente articolo → esistenza: <i>¿Hay una farmacia por aquí?</i></li>
<li>ESTÁ/ESTÁN + el/la/los/las → posizione di qualcosa di specifico: <i>¿Dónde está la farmacia?</i></li>
</ul>
<p>Preposizioni articolate: <b>a + el = al</b>, <b>de + el = del</b> (le uniche due!). <i>Al lado del banco.</i></p>
<p>⚠️ Falso amico: <b>la esquina</b> = l'angolo (non "schiena", che è <i>la espalda</i>).</p>`,
  phrases: [
    ['Perdone, ¿hay un banco por aquí?', 'Scusi, c\'è una banca qui vicino?'],
    ['Siga todo recto y gire a la derecha.', 'Prosegua dritto e giri a destra.'],
    ['Está al lado del museo.', 'È accanto al museo.'],
    ['¿Está lejos?', 'È lontano?']
  ],
  exercises: [
    {t:'mc', q:'¿___ un supermercado cerca?', o:['Hay','Está','Es','Son'], a:0},
    {t:'mc', q:'¿Dónde ___ la estación?', o:['está','hay','es','son'], a:0},
    {t:'fill', q:'Está al lado ___ banco. (del/de el)', a:['del']},
    {t:'mc', q:'"La esquina" significa…', o:['l\'angolo','la schiena','la scala','la strada'], a:0},
    {t:'tr', q:'Giri a sinistra.', a:['gire a la izquierda','gira a la izquierda']}
  ],
  tip: 'Apri Google Maps su una città spagnola e "passeggia" con Street View descrivendo cosa vedi.'
},
{
  id: 13, level: 'A1', title: 'Al bar e al ristorante',
  goal: 'Ordinare da mangiare e da bere, chiedere il conto.',
  vocab: [
    ['el café con leche', 'il caffellatte'], ['la cerveza', 'la birra'], ['el vino tinto', 'il vino rosso'],
    ['el agua con gas', 'l\'acqua frizzante'], ['el pan', 'il pane'], ['el pescado', 'il pesce (cibo)'],
    ['la carne', 'la carne'], ['el pollo', 'il pollo'], ['la ensalada', 'l\'insalata'],
    ['el postre', 'il dolce / dessert'], ['la cuenta', 'il conto'], ['la tapa', 'lo stuzzichino'],
    ['la carta', 'il menù']
  ],
  grammar: `
<p>Ordinare in modo cortese:</p>
<ul>
<li><b>Quiero</b>… (voglio — normale in Spagna, non è scortese)</li>
<li><b>Me pone</b>… / <b>Ponme</b>… (mi dà… — molto spagnolo, al bar)</li>
<li><b>Quería</b>… / <b>Me gustaría</b>… (vorrei — più formale)</li>
<li><b>Para mí</b>… (per me…)</li>
</ul>
<p><b>De primero / de segundo / de postre</b> = come primo / secondo / dessert (menú del día).</p>
<p>⚠️ <b>Pescado</b> = pesce da mangiare; <b>pez</b> = pesce vivo. <b>Carta</b> = menù (e lettera); la carta = <i>el papel</i>. <b>Salir</b> = uscire.</p>`,
  phrases: [
    ['Una caña, por favor.', 'Una birra piccola alla spina, per favore.'],
    ['Para mí, el menú del día.', 'Per me, il menù del giorno.'],
    ['¿Qué me recomienda?', 'Cosa mi consiglia?'],
    ['La cuenta, por favor.', 'Il conto, per favore.'],
    ['¿Se puede pagar con tarjeta?', 'Si può pagare con la carta?']
  ],
  exercises: [
    {t:'mc', q:'Il pesce nel piatto →', o:['el pescado','el pez','el pesce','la pesca'], a:0},
    {t:'mc', q:'"La carta, por favor" — cosa chiedi?', o:['il menù','un foglio di carta','il conto','la carta di credito'], a:0},
    {t:'fill', q:'La ___, por favor. (il conto)', a:['cuenta']},
    {t:'tr', q:'Un caffè con latte, per favore.', a:['un café con leche, por favor','un cafe con leche por favor']},
    {t:'tr', q:'Cosa mi consiglia?', a:['¿qué me recomienda?','qué me recomienda','que me recomienda']}
  ],
  tip: 'Guarda un video di qualcuno che ordina in un bar spagnolo (cerca "pedir en un bar en España") e ripeti le frasi.'
},
{
  id: 14, level: 'A1', title: 'Il verbo GUSTAR',
  goal: 'Esprimere gusti e preferenze.',
  vocab: [
    ['gustar', 'piacere'], ['encantar', 'piacere moltissimo'], ['el deporte', 'lo sport'],
    ['el fútbol', 'il calcio'], ['la música', 'la musica'], ['el cine', 'il cinema'],
    ['bailar', 'ballare'], ['nadar', 'nuotare'], ['leer', 'leggere'], ['también', 'anche'],
    ['tampoco', 'neanche'], ['mucho', 'molto'], ['nada', 'niente / per niente']
  ],
  grammar: `
<p>Funziona esattamente come "piacere" in italiano:</p>
<table>
<tr><td>(a mí)</td><td><b>me</b> gusta</td><td>mi piace</td></tr>
<tr><td>(a ti)</td><td><b>te</b> gusta</td><td>ti piace</td></tr>
<tr><td>(a él/ella/usted)</td><td><b>le</b> gusta</td><td>gli/le piace</td></tr>
<tr><td>(a nosotros)</td><td><b>nos</b> gusta</td><td>ci piace</td></tr>
<tr><td>(a vosotros)</td><td><b>os</b> gusta</td><td>vi piace</td></tr>
<tr><td>(a ellos)</td><td><b>les</b> gusta</td><td>gli piace (a loro)</td></tr>
</table>
<p><b>gusta</b> + singolare o verbo; <b>gustan</b> + plurale: <i>Me gusta el cine. Me gustan los gatos.</i></p>
<p>Si dice: <i>Me gusta <b>el</b> fútbol</i> (con l'articolo!).</p>
<p>Accordo/disaccordo: <i>A mí también</i> (anche a me) — <i>A mí tampoco</i> (neanche a me) — <i>A mí sí / A mí no</i>.</p>`,
  phrases: [
    ['¿Te gusta bailar?', 'Ti piace ballare?'],
    ['Me encanta la comida española.', 'Adoro il cibo spagnolo.'],
    ['No me gustan nada las películas de terror.', 'Non mi piacciono per niente i film horror.'],
    ['—Me gusta el café. —A mí también.', '—Mi piace il caffè. —Anche a me.']
  ],
  exercises: [
    {t:'mc', q:'Me ___ los perros.', o:['gustan','gusta'], a:0},
    {t:'mc', q:'Nos ___ viajar.', o:['gusta','gustan'], a:0},
    {t:'fill', q:'¿A ti ___ gusta el fútbol?', a:['te']},
    {t:'fill', q:'A mis padres ___ gusta la música clásica.', a:['les']},
    {t:'mc', q:'—No me gusta el té. —A mí ___.', o:['tampoco','también','sí','nunca'], a:0},
    {t:'tr', q:'Mi piace molto il cinema.', a:['me gusta mucho el cine']}
  ],
  tip: 'Scrivi 5 cose che ti piacciono e 5 che non ti piacciono. Ottimo per conversazioni con tutor.'
},
{
  id: 15, level: 'A1', title: 'Verbi irregolari: e→ie, o→ue, IR, HACER',
  goal: 'Usare i verbi irregolari più frequenti al presente.',
  vocab: [
    ['querer', 'volere / voler bene'], ['poder', 'potere'], ['pensar', 'pensare'], ['empezar', 'cominciare'],
    ['dormir', 'dormire'], ['volver', 'tornare'], ['pedir', 'chiedere / ordinare'], ['ir', 'andare'],
    ['hacer', 'fare'], ['salir', 'uscire'], ['venir', 'venire'], ['decir', 'dire']
  ],
  grammar: `
<p><b>Verbi "a scarpa"</b>: cambiano la radice in tutte le persone tranne nosotros e vosotros.</p>
<table>
<tr><th></th><th>e→ie QUERER</th><th>o→ue PODER</th><th>e→i PEDIR</th></tr>
<tr><td>yo</td><td>qu<b>ie</b>ro</td><td>p<b>ue</b>do</td><td>p<b>i</b>do</td></tr>
<tr><td>tú</td><td>qu<b>ie</b>res</td><td>p<b>ue</b>des</td><td>p<b>i</b>des</td></tr>
<tr><td>él</td><td>qu<b>ie</b>re</td><td>p<b>ue</b>de</td><td>p<b>i</b>de</td></tr>
<tr><td>nosotros</td><td>queremos</td><td>podemos</td><td>pedimos</td></tr>
<tr><td>vosotros</td><td>queréis</td><td>podéis</td><td>pedís</td></tr>
<tr><td>ellos</td><td>qu<b>ie</b>ren</td><td>p<b>ue</b>den</td><td>p<b>i</b>den</td></tr>
</table>
<table>
<tr><th></th><th>IR</th><th>HACER</th><th>SALIR</th><th>VENIR</th></tr>
<tr><td>yo</td><td>voy</td><td>hago</td><td>salgo</td><td>vengo</td></tr>
<tr><td>tú</td><td>vas</td><td>haces</td><td>sales</td><td>vienes</td></tr>
<tr><td>él</td><td>va</td><td>hace</td><td>sale</td><td>viene</td></tr>
<tr><td>nosotros</td><td>vamos</td><td>hacemos</td><td>salimos</td><td>venimos</td></tr>
<tr><td>vosotros</td><td>vais</td><td>hacéis</td><td>salís</td><td>venís</td></tr>
<tr><td>ellos</td><td>van</td><td>hacen</td><td>salen</td><td>vienen</td></tr>
</table>
<p>⚠️ <b>Te quiero</b> = ti voglio bene / ti amo.</p>`,
  phrases: [
    ['¿Puedes ayudarme?', 'Puoi aiutarmi?'],
    ['Quiero ir a la playa.', 'Voglio andare in spiaggia.'],
    ['¿Qué haces el fin de semana?', 'Cosa fai nel fine settimana?'],
    ['Salgo con mis amigos.', 'Esco con i miei amici.']
  ],
  exercises: [
    {t:'fill', q:'Yo no ___ ir hoy. (poder)', a:['puedo']},
    {t:'fill', q:'¿Tú ___ un café? (querer)', a:['quieres']},
    {t:'fill', q:'Nosotros ___ a Madrid. (ir)', a:['vamos']},
    {t:'fill', q:'Yo ___ deporte. (hacer)', a:['hago']},
    {t:'fill', q:'Ellos ___ ocho horas. (dormir)', a:['duermen']},
    {t:'fill', q:'La clase ___ a las diez. (empezar)', a:['empieza']},
    {t:'tr', q:'Cosa fai oggi?', a:['¿qué haces hoy?','qué haces hoy','que haces hoy']}
  ],
  tip: 'Questi 12 verbi coprono una grandissima parte delle conversazioni quotidiane. Ripassali spesso.'
},
{
  id: 16, level: 'A1', title: 'Il futuro prossimo: IR A + infinito. Mesi e date',
  goal: 'Parlare di piani e date.',
  vocab: [
    ['enero', 'gennaio'], ['febrero', 'febbraio'], ['marzo', 'marzo'], ['abril', 'aprile'],
    ['mayo', 'maggio'], ['junio', 'giugno'], ['julio', 'luglio'], ['agosto', 'agosto'],
    ['septiembre', 'settembre'], ['octubre', 'ottobre'], ['noviembre', 'novembre'], ['diciembre', 'dicembre'],
    ['el cumpleaños', 'il compleanno'], ['las vacaciones', 'le vacanze']
  ],
  grammar: `
<p><b>IR + A + infinito</b> = sto per / ho intenzione di (il modo più comune per parlare del futuro):</p>
<p><i>Voy a estudiar.</i> — Studierò / Ho intenzione di studiare.<br>
<i>¿Qué vas a hacer mañana?</i> — Cosa farai domani?<br>
<i>Vamos a viajar a México.</i> — Andremo in Messico.</p>
<p>Date: <i>Hoy es <b>el</b> 15 <b>de</b> marzo <b>de</b> 2026.</i> — "Il primo maggio" = <i>el uno (o primero) de mayo</i>.</p>
<p>Espressioni di futuro: <i>esta tarde, esta noche, mañana, pasado mañana (dopodomani), la semana que viene, el año próximo</i>.</p>`,
  phrases: [
    ['¿Cuándo es tu cumpleaños?', 'Quando è il tuo compleanno?'],
    ['Es el doce de julio.', 'È il dodici luglio.'],
    ['Este verano voy a ir a Barcelona.', 'Quest\'estate andrò a Barcellona.'],
    ['Vamos a cenar fuera esta noche.', 'Stasera ceniamo fuori.']
  ],
  exercises: [
    {t:'fill', q:'Mañana yo ___ a trabajar. (ir a)', a:['voy']},
    {t:'fill', q:'¿Qué ___ a hacer tú esta noche?', a:['vas']},
    {t:'fill', q:'Nosotros vamos ___ comer paella.', a:['a']},
    {t:'mc', q:'"Pasado mañana" significa…', o:['dopodomani','ieri l\'altro','domani passato','la settimana scorsa'], a:0},
    {t:'tr', q:'Il mio compleanno è il 3 maggio.', a:['mi cumpleaños es el tres de mayo','mi cumpleaños es el 3 de mayo']}
  ],
  tip: 'Scrivi in spagnolo i tuoi piani per la prossima settimana usando "voy a…".'
},
{
  id: 17, level: 'A1', title: 'Vestiti, colori, negozi e dimostrativi',
  goal: 'Fare acquisti e descrivere oggetti.',
  vocab: [
    ['la camisa', 'la camicia'], ['la camiseta', 'la maglietta'], ['los pantalones', 'i pantaloni'],
    ['los zapatos', 'le scarpe'], ['la falda', 'la gonna'], ['el abrigo', 'il cappotto'],
    ['rojo', 'rosso'], ['azul', 'blu / azzurro'], ['verde', 'verde'], ['negro', 'nero'],
    ['blanco', 'bianco'], ['amarillo', 'giallo'], ['caro', 'caro'], ['barato', 'economico']
  ],
  grammar: `
<table>
<tr><th></th><th>vicino a me</th><th>vicino a te</th><th>lontano</th></tr>
<tr><td>masch. sing.</td><td>este</td><td>ese</td><td>aquel</td></tr>
<tr><td>femm. sing.</td><td>esta</td><td>esa</td><td>aquella</td></tr>
<tr><td>masch. plur.</td><td>estos</td><td>esos</td><td>aquellos</td></tr>
<tr><td>femm. plur.</td><td>estas</td><td>esas</td><td>aquellas</td></tr>
</table>
<p><i>Esta camisa</i> = questa camicia; <i>esa falda</i> = quella gonna (lì vicino a te); <i>aquel edificio</i> = quell'edificio (laggiù).</p>
<p>⚠️ Falsi amici: <b>la camisa</b> = camicia (la camicia da notte = <i>el camisón</i>); <b>el vaso</b> = il bicchiere; <b>la tienda</b> = il negozio (e la tenda da campeggio).</p>`,
  phrases: [
    ['¿Cuánto cuesta esta camiseta?', 'Quanto costa questa maglietta?'],
    ['¿Tiene una talla más grande?', 'Ha una taglia più grande?'],
    ['¿Puedo probármelo?', 'Posso provarlo?'],
    ['Me lo llevo.', 'Lo prendo.']
  ],
  exercises: [
    {t:'fill', q:'___ zapatos (questi)', a:['estos']},
    {t:'fill', q:'___ camisa (questa)', a:['esta']},
    {t:'mc', q:'"La tienda" significa…', o:['il negozio','la tenda della finestra','la tenuta','la tinta'], a:0},
    {t:'mc', q:'"Barato" significa…', o:['economico','baratto','caro','brutto'], a:0},
    {t:'tr', q:'Quanto costa?', a:['¿cuánto cuesta?','cuánto cuesta','cuanto cuesta','¿cuánto es?']}
  ],
  tip: 'Guardando i tuoi vestiti al mattino, nominali in spagnolo con il colore: "una camiseta azul".'
},
{
  id: 18, level: 'A1', title: 'Il tempo atmosferico e le stagioni',
  goal: 'Parlare del tempo e delle stagioni.',
  vocab: [
    ['la primavera', 'la primavera'], ['el verano', 'l\'estate'], ['el otoño', 'l\'autunno'],
    ['el invierno', 'l\'inverno'], ['el sol', 'il sole'], ['la lluvia', 'la pioggia'], ['llover', 'piovere'],
    ['nevar', 'nevicare'], ['el viento', 'il vento'], ['la nube', 'la nuvola'], ['el calor', 'il caldo'],
    ['el frío', 'il freddo']
  ],
  grammar: `
<p>Il tempo si descrive con <b>HACER</b>, <b>ESTAR</b> e <b>HAY</b>:</p>
<ul>
<li><b>Hace</b> sol / calor / frío / viento / buen tiempo / mal tiempo</li>
<li><b>Está</b> nublado (nuvoloso) / despejado (sereno)</li>
<li><b>Hay</b> niebla (nebbia) / tormenta (temporale)</li>
<li><b>Llueve</b> (piove) / <b>Nieva</b> (nevica) / <b>Está lloviendo</b> (sta piovendo)</li>
</ul>
<p><b>Estar + gerundio</b> = stare + gerundio: habl<b>ando</b>, com<b>iendo</b>, viv<b>iendo</b>. <i>¿Qué estás haciendo?</i></p>
<p>⚠️ <b>Tener calor</b> = avere caldo (persona); <b>hacer calor</b> = fare caldo (tempo); <b>estar caliente</b> = essere caldo (oggetto).</p>`,
  phrases: [
    ['¿Qué tiempo hace hoy?', 'Che tempo fa oggi?'],
    ['Hace mucho calor.', 'Fa molto caldo.'],
    ['Está lloviendo.', 'Sta piovendo.'],
    ['En invierno nieva en la montaña.', 'D\'inverno nevica in montagna.']
  ],
  exercises: [
    {t:'mc', q:'Fa freddo →', o:['Hace frío','Es frío','Tiene frío','Está frío'], a:0},
    {t:'mc', q:'Ho caldo →', o:['Tengo calor','Hago calor','Soy caliente','Estoy calor'], a:0},
    {t:'fill', q:'Hoy está ___. (nuvoloso)', a:['nublado']},
    {t:'fill', q:'Estoy com___ (mangiando)', a:['iendo']},
    {t:'tr', q:'Che tempo fa oggi?', a:['¿qué tiempo hace hoy?','qué tiempo hace hoy','que tiempo hace hoy']}
  ],
  tip: 'Controlla il meteo su un sito spagnolo (es. aemet.es) e descrivi il tempo di domani.'
},
{
  id: 19, level: 'A1', title: '🏁 Ripasso generale A1',
  goal: 'Verificare di aver consolidato il livello A1 prima di passare all\'A2.',
  vocab: [
    ['el amigo', 'l\'amico'], ['el trabajo', 'il lavoro'], ['la playa', 'la spiaggia'],
    ['la montaña', 'la montagna'], ['el tiempo libre', 'il tempo libero'], ['pronto', 'presto / tra poco'],
    ['todavía', 'ancora'], ['ya', 'già'], ['muy', 'molto (davanti ad aggettivo)'], ['pero', 'ma']
  ],
  grammar: `
<p>Checklist A1 — se riesci a fare tutto questo, sei pronto per l'A2:</p>
<ul>
<li>✅ Presentarti (nome, età, origine, lavoro, famiglia)</li>
<li>✅ Usare ser / estar / hay / tener</li>
<li>✅ Coniugare il presente regolare e i principali irregolari</li>
<li>✅ Dire l'ora, le date, i giorni</li>
<li>✅ Ordinare al bar, fare acquisti, chiedere indicazioni</li>
<li>✅ Esprimere gusti con gustar</li>
<li>✅ Parlare di progetti con ir a + infinito</li>
</ul>
<p><b>Muy</b> vs <b>mucho</b>: <i>muy</i> + aggettivo/avverbio (muy bonito, muy bien); <i>mucho</i> + nome/verbo (mucho trabajo, trabajo mucho).</p>
<p>⚠️ <b>Pronto</b> = presto/tra poco (¡Hasta pronto!), non "pronto?" al telefono, che è <i>¿Diga?</i> / <i>¿Sí?</i>. Pronto (aggettivo) = <i>listo</i>.</p>`,
  phrases: [
    ['Hola, me llamo Marco, soy italiano y tengo treinta años.', 'Ciao, mi chiamo Marco, sono italiano e ho trent\'anni.'],
    ['Vivo en Milán y trabajo en un banco.', 'Abito a Milano e lavoro in banca.'],
    ['Me gusta mucho viajar.', 'Mi piace molto viaggiare.'],
    ['El año que viene voy a ir a España.', 'L\'anno prossimo andrò in Spagna.']
  ],
  exercises: [
    {t:'mc', q:'Mi hermana ___ enfermera y hoy ___ cansada.', o:['es / está','está / es','es / es','está / está'], a:0},
    {t:'mc', q:'En mi barrio ___ dos supermercados.', o:['hay','están','son','tienen'], a:0},
    {t:'fill', q:'Es ___ bonito. (molto)', a:['muy']},
    {t:'fill', q:'Trabajo ___. (molto)', a:['mucho']},
    {t:'fill', q:'A nosotros nos ___ los gatos.', a:['gustan']},
    {t:'fill', q:'Yo ___ con mis amigos el viernes. (salir)', a:['salgo']},
    {t:'fill', q:'Son las tres y ___ (3:30)', a:['media']},
    {t:'tr', q:'Quanti anni hai?', a:['¿cuántos años tienes?','cuántos años tienes','cuantos años tienes','cuantos anos tienes']},
    {t:'tr', q:'Domani vado al cinema.', a:['mañana voy al cine','mañana voy a ir al cine']},
    {t:'mc', q:'Al telefono, rispondi:', o:['¿Diga?','¿Pronto?','¿Listo?','¿Hola qué?'], a:0}
  ],
  tip: 'Complimenti! Questo è un buon momento per fare la prima conversazione con un tutor (italki/Preply) o in uno scambio linguistico (Tandem/HelloTalk).'
},

// ===================== LIVELLO A2 =====================
{
  id: 20, level: 'A2', title: 'Il pretérito perfecto (passato prossimo)',
  goal: 'Raccontare cosa hai fatto oggi / questa settimana / nella vita.',
  vocab: [
    ['hecho', 'fatto'], ['dicho', 'detto'], ['visto', 'visto'], ['escrito', 'scritto'],
    ['puesto', 'messo'], ['vuelto', 'tornato'], ['abierto', 'aperto'], ['roto', 'rotto'],
    ['esta mañana', 'stamattina'], ['alguna vez', 'qualche volta / mai (nelle domande)'],
    ['todavía no', 'non ancora'], ['ya', 'già']
  ],
  grammar: `
<p><b>HABER</b> (presente) + participio:</p>
<table>
<tr><td>yo</td><td>he</td><td rowspan="6">habl<b>ado</b> / com<b>ido</b> / viv<b>ido</b></td></tr>
<tr><td>tú</td><td>has</td></tr><tr><td>él/ella</td><td>ha</td></tr>
<tr><td>nosotros</td><td>hemos</td></tr><tr><td>vosotros</td><td>habéis</td></tr><tr><td>ellos</td><td>han</td></tr>
</table>
<p>⚠️ <b>Sempre e solo HABER</b>, mai "ser": <i>He ido</i> (sono andato), <i>me he levantado</i> (mi sono alzato). Il participio <b>non si accorda</b>: <i>Ella ha ido</i> (lei è andata).</p>
<p>Si usa con periodi di tempo non ancora terminati: <i>hoy, esta mañana, esta semana, este año, alguna vez, nunca, ya, todavía no</i>.</p>
<p>Irregolari: hacer→hecho, decir→dicho, ver→visto, escribir→escrito, poner→puesto, volver→vuelto, abrir→abierto, romper→roto, morir→muerto.</p>`,
  phrases: [
    ['¿Has estado alguna vez en España?', 'Sei mai stato in Spagna?'],
    ['Hoy he trabajado mucho.', 'Oggi ho lavorato molto.'],
    ['Esta mañana me he levantado tarde.', 'Stamattina mi sono alzato tardi.'],
    ['Todavía no he comido.', 'Non ho ancora mangiato.']
  ],
  exercises: [
    {t:'fill', q:'Hoy yo ___ ido al gimnasio.', a:['he']},
    {t:'fill', q:'Ella ha ___ al mercado. (ir — participio)', a:['ido']},
    {t:'fill', q:'¿Qué has ___ hoy? (hacer)', a:['hecho']},
    {t:'fill', q:'Nosotros ___ visto la película.', a:['hemos']},
    {t:'mc', q:'"Siamo arrivati" →', o:['Hemos llegado','Somos llegados','Estamos llegados','Hemos llegados'], a:0},
    {t:'tr', q:'Non ho ancora mangiato.', a:['todavía no he comido','todavia no he comido','no he comido todavía','aún no he comido']}
  ],
  tip: 'Ogni sera scrivi 3 frasi su cosa hai fatto oggi con il pretérito perfecto.'
},
{
  id: 21, level: 'A2', title: 'Il pretérito indefinido (passato remoto) — regolari',
  goal: 'Raccontare fatti conclusi nel passato (ieri, l\'anno scorso…).',
  vocab: [
    ['ayer', 'ieri'], ['anoche', 'ieri sera'], ['anteayer', 'l\'altro ieri'], ['la semana pasada', 'la settimana scorsa'],
    ['el año pasado', 'l\'anno scorso'], ['hace dos días', 'due giorni fa'], ['en 2020', 'nel 2020'],
    ['conocer', 'conoscere'], ['nacer', 'nascere'], ['visitar', 'visitare'], ['terminar', 'finire'], ['empezar', 'cominciare']
  ],
  grammar: `
<table>
<tr><th></th><th>-AR (hablar)</th><th>-ER/-IR (comer, vivir)</th></tr>
<tr><td>yo</td><td>habl<b>é</b></td><td>com<b>í</b></td></tr>
<tr><td>tú</td><td>habl<b>aste</b></td><td>com<b>iste</b></td></tr>
<tr><td>él/ella</td><td>habl<b>ó</b></td><td>com<b>ió</b></td></tr>
<tr><td>nosotros</td><td>habl<b>amos</b></td><td>com<b>imos</b></td></tr>
<tr><td>vosotros</td><td>habl<b>asteis</b></td><td>com<b>isteis</b></td></tr>
<tr><td>ellos</td><td>habl<b>aron</b></td><td>com<b>ieron</b></td></tr>
</table>
<p>In spagnolo l'indefinido è <b>vivissimo nel parlato</b> (come il passato remoto in Sicilia): si usa per azioni concluse in un tempo finito: <i>ayer, anoche, el lunes pasado, en 2019, hace un año</i>.</p>
<p><b>Perfecto vs indefinido</b>: <i>Hoy <b>he comido</b> paella</i> (oggi, periodo non finito) — <i>Ayer <b>comí</b> paella</i> (ieri, finito).</p>
<p>Attenzione agli accenti: <i>hablo</i> (io parlo) ≠ <i>habló</i> (lui parlò).</p>`,
  phrases: [
    ['Ayer cené con mis amigos.', 'Ieri sera ho cenato con i miei amici.'],
    ['¿Dónde naciste?', 'Dove sei nato?'],
    ['Nací en Nápoles en 1990.', 'Sono nato a Napoli nel 1990.'],
    ['El año pasado visitamos Granada.', 'L\'anno scorso abbiamo visitato Granada.']
  ],
  exercises: [
    {t:'fill', q:'Ayer yo ___ mucho. (trabajar)', a:['trabajé']},
    {t:'fill', q:'¿Tú ___ la carta? (escribir)', a:['escribiste']},
    {t:'fill', q:'Él ___ en 1985. (nacer)', a:['nació']},
    {t:'fill', q:'Ellos ___ Madrid. (visitar)', a:['visitaron']},
    {t:'mc', q:'___ he visto a Juan. / ___ vi a Juan.', o:['Hoy / Ayer','Ayer / Hoy','Ayer / Ayer','Hoy / Hoy'], a:0},
    {t:'tr', q:'Ieri ho mangiato una paella.', a:['ayer comí una paella','ayer comí paella','ayer comi una paella']}
  ],
  tip: 'Racconta in 5 frasi cosa hai fatto lo scorso fine settimana.'
},
{
  id: 22, level: 'A2', title: 'L\'indefinido — verbi irregolari',
  goal: 'Usare gli irregolari più comuni al passato.',
  vocab: [
    ['fui', 'fui / andai (ser e ir)'], ['tuve', 'ebbi'], ['estuve', 'stetti / sono stato'], ['hice', 'feci'],
    ['pude', 'potei'], ['puse', 'misi'], ['quise', 'volli'], ['vine', 'venni'], ['dije', 'dissi'],
    ['traje', 'portai'], ['di', 'diedi'], ['vi', 'vidi']
  ],
  grammar: `
<p><b>SER e IR</b> hanno lo stesso indefinido (il contesto chiarisce): fui, fuiste, fue, fuimos, fuisteis, fueron.</p>
<p>Irregolari "forti" (senza accento!) con desinenze: <b>-e, -iste, -o, -imos, -isteis, -ieron</b></p>
<table>
<tr><th>Infinito</th><th>Radice</th><th>Esempio</th></tr>
<tr><td>tener</td><td>tuv-</td><td>tuve, tuviste, tuvo…</td></tr>
<tr><td>estar</td><td>estuv-</td><td>estuve, estuvo…</td></tr>
<tr><td>hacer</td><td>hic-</td><td>hice, hiciste, <b>hizo</b>…</td></tr>
<tr><td>poder</td><td>pud-</td><td>pude, pudo…</td></tr>
<tr><td>poner</td><td>pus-</td><td>puse, puso…</td></tr>
<tr><td>querer</td><td>quis-</td><td>quise, quiso…</td></tr>
<tr><td>venir</td><td>vin-</td><td>vine, vino…</td></tr>
<tr><td>decir</td><td>dij-</td><td>dije, dijo, <b>dijeron</b></td></tr>
</table>
<p>Altri: dar → di, diste, dio; ver → vi, viste, vio.</p>`,
  phrases: [
    ['¿Qué hiciste el fin de semana?', 'Cosa hai fatto nel fine settimana?'],
    ['Fui a la playa con mi novia.', 'Sono andato al mare con la mia ragazza.'],
    ['Estuvimos en Madrid tres días.', 'Siamo stati a Madrid tre giorni.'],
    ['No pude venir.', 'Non sono potuto venire.']
  ],
  exercises: [
    {t:'fill', q:'Ayer yo ___ al cine. (ir)', a:['fui']},
    {t:'fill', q:'¿Qué ___ tú ayer? (hacer)', a:['hiciste']},
    {t:'fill', q:'Ella ___ los deberes. (hacer)', a:['hizo']},
    {t:'fill', q:'Nosotros ___ en Sevilla. (estar)', a:['estuvimos']},
    {t:'fill', q:'Ellos me lo ___. (decir)', a:['dijeron']},
    {t:'fill', q:'Yo no ___ ir. (poder)', a:['pude']},
    {t:'tr', q:'Sono stato a Barcellona l\'anno scorso.', a:['estuve en barcelona el año pasado','el año pasado estuve en barcelona','fui a barcelona el año pasado']}
  ],
  tip: 'Usa flashcard (anche il ripasso di questa app) per i 12 irregolari: vanno saputi a memoria.'
},
{
  id: 23, level: 'A2', title: 'Il pretérito imperfecto',
  goal: 'Descrivere il passato e abitudini passate ("quando ero piccolo…").',
  vocab: [
    ['cuando era pequeño', 'quando ero piccolo'], ['de niño', 'da bambino'], ['antes', 'prima'],
    ['normalmente', 'normalmente'], ['todos los días', 'tutti i giorni'], ['jugar', 'giocare'],
    ['el pueblo', 'il paese'], ['el colegio', 'la scuola'], ['soler', 'essere solito'], ['mientras', 'mentre']
  ],
  grammar: `
<table>
<tr><th></th><th>-AR (hablar)</th><th>-ER/-IR (comer/vivir)</th></tr>
<tr><td>yo</td><td>habl<b>aba</b></td><td>com<b>ía</b></td></tr>
<tr><td>tú</td><td>habl<b>abas</b></td><td>com<b>ías</b></td></tr>
<tr><td>él/ella</td><td>habl<b>aba</b></td><td>com<b>ía</b></td></tr>
<tr><td>nosotros</td><td>habl<b>ábamos</b></td><td>com<b>íamos</b></td></tr>
<tr><td>vosotros</td><td>habl<b>abais</b></td><td>com<b>íais</b></td></tr>
<tr><td>ellos</td><td>habl<b>aban</b></td><td>com<b>ían</b></td></tr>
</table>
<p>Solo 3 irregolari! <b>ser</b>: era, eras, era, éramos, erais, eran — <b>ir</b>: iba, ibas, iba, íbamos, ibais, iban — <b>ver</b>: veía…</p>
<p>Si usa come l'imperfetto italiano: descrizioni, abitudini, azioni in corso nel passato.</p>
<p>⚠️ <b>El colegio</b> = la scuola (elementare/media), non il collegio. <b>El pueblo</b> = il paese/villaggio (e il popolo).</p>`,
  phrases: [
    ['Cuando era pequeño, vivía en un pueblo.', 'Quando ero piccolo, vivevo in un paese.'],
    ['Todos los veranos íbamos a la playa.', 'Ogni estate andavamo al mare.'],
    ['Antes fumaba, pero ahora no.', 'Prima fumavo, ma ora no.'],
    ['Mi abuela cocinaba muy bien.', 'Mia nonna cucinava benissimo.']
  ],
  exercises: [
    {t:'fill', q:'De niño yo ___ al fútbol. (jugar)', a:['jugaba']},
    {t:'fill', q:'Nosotros ___ en Roma. (vivir)', a:['vivíamos']},
    {t:'fill', q:'Cuando ___ joven, ella era muy alta. (ser)', a:['era']},
    {t:'fill', q:'Todos los días (yo) ___ al colegio a pie. (ir)', a:['iba']},
    {t:'mc', q:'"El colegio" significa…', o:['la scuola','il collegio','il collega','la colla'], a:0},
    {t:'tr', q:'Quando ero piccolo giocavo molto.', a:['cuando era pequeño jugaba mucho','cuando era niño jugaba mucho','de niño jugaba mucho']}
  ],
  tip: 'Descrivi in spagnolo la casa dove abitavi da bambino: com\'era, cosa facevi.'
},
{
  id: 24, level: 'A2', title: 'Indefinido o imperfecto? Raccontare una storia',
  goal: 'Combinare i tempi passati per raccontare.',
  vocab: [
    ['de repente', 'all\'improvviso'], ['entonces', 'allora'], ['después', 'dopo'], ['al final', 'alla fine'],
    ['primero', 'prima / per primo'], ['luego', 'poi'], ['pasar', 'succedere / passare'], ['llamar', 'chiamare'],
    ['encontrar', 'trovare'], ['perder', 'perdere']
  ],
  grammar: `
<p>Funziona come in italiano tra <b>passato prossimo/remoto</b> e <b>imperfetto</b>:</p>
<ul>
<li><b>Imperfecto</b> = lo sfondo, la descrizione, ciò che era in corso: <i>Hacía sol, yo caminaba por la calle…</i></li>
<li><b>Indefinido</b> = l'azione puntuale, l'evento: <i>…y de repente <b>vi</b> a Pedro.</i></li>
</ul>
<p><i>Mientras <b>cocinaba</b>, <b>sonó</b> el teléfono.</i> — Mentre cucinavo, squillò il telefono.</p>
<p>Se in italiano diresti "facevo/era/stavo facendo" → imperfecto. Se diresti "ho fatto/feci" (fatto concluso a ieri o prima) → indefinido.</p>`,
  phrases: [
    ['¿Qué pasó?', 'Cosa è successo?'],
    ['Estaba en casa cuando me llamaste.', 'Ero a casa quando mi hai chiamato.'],
    ['Llovía mucho, así que nos quedamos en el hotel.', 'Pioveva molto, quindi siamo rimasti in hotel.'],
    ['De repente, se fue la luz.', 'All\'improvviso è andata via la luce.']
  ],
  exercises: [
    {t:'mc', q:'Mientras yo ___, llegó mi hermano.', o:['dormía','dormí'], a:0},
    {t:'mc', q:'Ayer ___ a mi amiga en el supermercado.', o:['encontré','encontraba'], a:0},
    {t:'mc', q:'La casa ___ grande y tenía jardín.', o:['era','fue'], a:0},
    {t:'mc', q:'Cuando ___ el teléfono, estaba en la ducha.', o:['sonó','sonaba'], a:0},
    {t:'fill', q:'¿Qué ___ ayer? (pasar)', a:['pasó']},
    {t:'tr', q:'Pioveva quando sono uscito.', a:['llovía cuando salí']}
  ],
  tip: 'Racconta la trama del tuo film preferito in spagnolo: è l\'esercizio perfetto per i due passati.'
},
{
  id: 25, level: 'A2', title: 'I pronomi complemento (lo, la, le, se lo…)',
  goal: 'Evitare ripetizioni usando i pronomi diretti e indiretti.',
  vocab: [
    ['dar', 'dare'], ['regalar', 'regalare'], ['enviar / mandar', 'inviare / mandare'], ['prestar', 'prestare'],
    ['traer', 'portare (qui)'], ['llevar', 'portare (lì) / indossare'], ['el regalo', 'il regalo'],
    ['las llaves', 'le chiavi'], ['el mensaje', 'il messaggio'], ['enseñar', 'insegnare / mostrare']
  ],
  grammar: `
<table>
<tr><th>Persona</th><th>Diretto</th><th>Indiretto</th></tr>
<tr><td>yo</td><td>me</td><td>me</td></tr>
<tr><td>tú</td><td>te</td><td>te</td></tr>
<tr><td>él / ella / usted</td><td>lo / la</td><td>le</td></tr>
<tr><td>nosotros</td><td>nos</td><td>nos</td></tr>
<tr><td>vosotros</td><td>os</td><td>os</td></tr>
<tr><td>ellos / ellas</td><td>los / las</td><td>les</td></tr>
</table>
<p><i>¿Tienes el libro? — Sí, <b>lo</b> tengo.</i> &nbsp; <i><b>Le</b> escribo a María.</i></p>
<p>Ordine: indiretto + diretto: <i>Me lo das</i> (me lo dai).</p>
<p>⚠️ <b>le/les + lo/la → SE lo / SE la</b>: <i>Le doy el libro → <b>Se lo</b> doy</i> (glielo do). Mai "le lo".</p>
<p>Con infinito/gerundio si attaccano: <i>Quiero verlo. Estoy haciéndolo.</i></p>
<p>Lo spagnolo usa la <b>"a" personale</b> davanti a complementi oggetto di persona: <i>Veo <b>a</b> María.</i></p>`,
  phrases: [
    ['¿Me lo puedes prestar?', 'Me lo puoi prestare?'],
    ['Se lo he dicho a Juan.', 'L\'ho detto a Juan. (Gliel\'ho detto)'],
    ['Te quiero mucho.', 'Ti voglio molto bene.'],
    ['¿Las llaves? No las encuentro.', 'Le chiavi? Non le trovo.']
  ],
  exercises: [
    {t:'fill', q:'¿El café? Sí, ___ tomo sin azúcar.', a:['lo']},
    {t:'fill', q:'¿Las fotos? ___ veo mañana.', a:['las']},
    {t:'fill', q:'___ doy el regalo a mi madre. (glielo — a lei)', a:['se lo']},
    {t:'mc', q:'"Glielo dico" →', o:['Se lo digo','Le lo digo','Gli lo digo','Lo le digo'], a:0},
    {t:'mc', q:'Conosco Pedro →', o:['Conozco a Pedro','Conozco Pedro','Conozco de Pedro','Lo conozco Pedro'], a:0},
    {t:'tr', q:'Me lo dai?', a:['¿me lo das?','me lo das']}
  ],
  tip: 'I pronomi si imparano ascoltando: cerca podcast per livello A2 (es. "Españolistos", "Coffee Break Spanish").'
},
{
  id: 26, level: 'A2', title: 'Comparativi e superlativi',
  goal: 'Confrontare persone, cose e luoghi.',
  vocab: [
    ['mejor', 'migliore / meglio'], ['peor', 'peggiore / peggio'], ['mayor', 'maggiore / più vecchio'],
    ['menor', 'minore / più giovane'], ['grande', 'grande'], ['pequeño', 'piccolo'], ['alto', 'alto'],
    ['bajo', 'basso'], ['rápido', 'veloce'], ['lento', 'lento'], ['fácil', 'facile'], ['difícil', 'difficile']
  ],
  grammar: `
<ul>
<li><b>más</b> … <b>que</b> = più … di: <i>Madrid es más grande que Sevilla.</i></li>
<li><b>menos</b> … <b>que</b> = meno … di</li>
<li><b>tan</b> … <b>como</b> = tanto … quanto: <i>Es tan alto como su padre.</i></li>
<li><b>tanto/a/os/as</b> + nome + <b>como</b>: <i>Tengo tantos libros como tú.</i></li>
</ul>
<p>Superlativo relativo: <i>el/la más</i> … <b>de</b>: <i>Es el edificio más alto <b>de</b> la ciudad.</i></p>
<p>Assoluto: <b>-ísimo</b>: <i>guapísimo, carísimo, buenísimo</i> = bellissimo, carissimo, buonissimo.</p>
<p>⚠️ Davanti ai numeri: <b>más de</b>: <i>más de diez personas</i>.</p>`,
  phrases: [
    ['Mi hermano es mayor que yo.', 'Mio fratello è più grande di me.'],
    ['Este restaurante es mejor que el otro.', 'Questo ristorante è migliore dell\'altro.'],
    ['¡La paella está buenísima!', 'La paella è buonissima!'],
    ['El español no es tan difícil como el alemán.', 'Lo spagnolo non è difficile quanto il tedesco.']
  ],
  exercises: [
    {t:'fill', q:'Roma es más grande ___ Florencia.', a:['que']},
    {t:'fill', q:'Ana es tan alta ___ Luis.', a:['como']},
    {t:'fill', q:'Es el mejor restaurante ___ la ciudad.', a:['de']},
    {t:'mc', q:'"Più buono" →', o:['mejor','más bueno','más mejor','buenísimo'], a:0},
    {t:'fill', q:'muy caro = car___', a:['ísimo','isimo']},
    {t:'tr', q:'Mia sorella è più giovane di me.', a:['mi hermana es menor que yo','mi hermana es más joven que yo']}
  ],
  tip: 'Confronta in spagnolo la tua città con un\'altra che conosci: 5 frasi.'
},
{
  id: 27, level: 'A2', title: 'L\'imperativo (tú / usted)',
  goal: 'Dare istruzioni, consigli, ricette e indicazioni.',
  vocab: [
    ['coger / tomar', 'prendere'], ['girar', 'girare'], ['seguir', 'seguire / proseguire'], ['cruzar', 'attraversare'],
    ['añadir', 'aggiungere'], ['cortar', 'tagliare'], ['mezclar', 'mescolare'], ['esperar', 'aspettare'],
    ['ten cuidado', 'stai attento'], ['ven', 'vieni']
  ],
  grammar: `
<p><b>Imperativo affermativo TÚ</b> = 3ª persona del presente: habla, come, escribe, gira.</p>
<p>Irregolari tú: <b>ven</b> (venir), <b>ten</b> (tener), <b>pon</b> (poner), <b>sal</b> (salir), <b>haz</b> (hacer), <b>di</b> (decir), <b>ve</b> (ir), <b>sé</b> (ser).</p>
<p><b>USTED</b>: si scambia la vocale: -ar → <b>-e</b> (hable, gire); -er/-ir → <b>-a</b> (coma, escriba). Irregolari: <i>venga, tenga, haga, diga, vaya, siga</i>.</p>
<p>I pronomi si attaccano: <i>Dime</i> (dimmi), <i>siéntate</i> (siediti), <i>dígame</i> (mi dica).</p>
<p>Negativo tú (cenni): <i>no hables, no comas, no vayas</i> — si basa sul congiuntivo, lo approfondirai al B1.</p>
<p>⚠️ <b>Coger</b> in Spagna = prendere; in America Latina è volgare! Lì usa <b>tomar/agarrar</b>.</p>`,
  phrases: [
    ['Siga recto y tome la segunda a la izquierda.', 'Prosegua dritto e prenda la seconda a sinistra.'],
    ['Pasa, pasa, siéntate.', 'Entra, entra, siediti.'],
    ['Dime la verdad.', 'Dimmi la verità.'],
    ['Perdone, ¿me puede ayudar?', 'Scusi, mi può aiutare?']
  ],
  exercises: [
    {t:'fill', q:'¡___ aquí! (venir, tú)', a:['ven']},
    {t:'fill', q:'¡___ los deberes! (hacer, tú)', a:['haz']},
    {t:'fill', q:'___ la verdad. (decir, tú — dimmi)', a:['dime']},
    {t:'fill', q:'___ a la derecha, por favor. (girar, usted)', a:['gire']},
    {t:'mc', q:'Dove "coger" può risultare volgare?', o:['In gran parte dell\'America Latina','In Spagna','Ovunque','Da nessuna parte'], a:0},
    {t:'tr', q:'Aspetta un momento.', a:['espera un momento','espera un momentito']}
  ],
  tip: 'Cerca una ricetta in spagnolo (es. tortilla de patatas) e cucinala seguendo le istruzioni!'
},
{
  id: 28, level: 'A2', title: 'Viaggiare: hotel, trasporti, aeroporto',
  goal: 'Cavartela in viaggio in un paese ispanofono.',
  vocab: [
    ['el billete', 'il biglietto'], ['ida y vuelta', 'andata e ritorno'], ['el andén', 'il binario'],
    ['el vuelo', 'il volo'], ['la maleta', 'la valigia'], ['la reserva', 'la prenotazione'],
    ['la habitación doble', 'la camera doppia'], ['el desayuno incluido', 'colazione inclusa'],
    ['el autobús', 'l\'autobus'], ['el metro', 'la metropolitana'], ['el retraso', 'il ritardo'],
    ['la salida / la llegada', 'la partenza / l\'arrivo']
  ],
  grammar: `
<p>Richieste utili con <b>poder</b> + infinito e il condizionale di cortesia:</p>
<ul>
<li><i>¿<b>Podría</b> darme…?</i> — Potrebbe darmi…?</li>
<li><i>¿<b>Me podría</b> decir a qué hora sale el tren?</i></li>
<li><i><b>Quería</b> reservar una habitación.</i> — Vorrei prenotare una camera.</li>
</ul>
<p><b>Por</b> vs <b>para</b> (base): <b>para</b> = destinazione/scopo (<i>un billete para Madrid</i>, <i>para ti</i>); <b>por</b> = causa, attraverso, mezzo, prezzo (<i>por la mañana, paseo por el centro, por 20 euros, gracias por todo</i>).</p>
<p>⚠️ <b>Billete</b> = biglietto (anche banconota); <b>la entrada</b> = biglietto per musei/concerti. <b>Salida</b> = uscita/partenza.</p>`,
  phrases: [
    ['Tengo una reserva a nombre de Rossi.', 'Ho una prenotazione a nome Rossi.'],
    ['Un billete de ida y vuelta para Toledo, por favor.', 'Un biglietto di andata e ritorno per Toledo, per favore.'],
    ['¿De qué andén sale el tren?', 'Da quale binario parte il treno?'],
    ['El vuelo tiene retraso.', 'Il volo è in ritardo.'],
    ['¿A qué hora es el desayuno?', 'A che ora è la colazione?']
  ],
  exercises: [
    {t:'mc', q:'Un biglietto per il museo →', o:['una entrada','un billete','una tarjeta','un boleto de ida'], a:0},
    {t:'fill', q:'Un billete ___ Sevilla. (per — destinazione)', a:['para']},
    {t:'fill', q:'Gracias ___ todo.', a:['por']},
    {t:'fill', q:'Paseamos ___ el centro.', a:['por']},
    {t:'mc', q:'"El andén" è…', o:['il binario','l\'andata','il bagaglio','il corridoio'], a:0},
    {t:'tr', q:'Vorrei prenotare una camera doppia.', a:['quería reservar una habitación doble','quisiera reservar una habitación doble','me gustaría reservar una habitación doble','quiero reservar una habitación doble']}
  ],
  tip: 'Prima del tuo prossimo viaggio, fai un role-play con un tutor: check-in in hotel e acquisto di un biglietto.'
},
{
  id: 29, level: 'A2', title: 'Salute e corpo: dal medico',
  goal: 'Descrivere sintomi e capire consigli medici.',
  vocab: [
    ['la cabeza', 'la testa'], ['el estómago', 'lo stomaco'], ['la espalda', 'la schiena'],
    ['la garganta', 'la gola'], ['el brazo', 'il braccio'], ['la pierna', 'la gamba'], ['el pie', 'il piede'],
    ['la fiebre', 'la febbre'], ['la tos', 'la tosse'], ['el resfriado', 'il raffreddore'],
    ['la receta', 'la ricetta (medica e di cucina)'], ['la pastilla', 'la pastiglia']
  ],
  grammar: `
<p><b>DOLER</b> (o→ue) funziona come gustar: <i>Me <b>duele</b> la cabeza</i> (mi fa male la testa) — <i>Me <b>duelen</b> los pies</i>.</p>
<p>Anche: <i>Tengo dolor de cabeza / de estómago</i>.</p>
<p>Consigli: <b>tener que</b> + infinito (dovere) e <b>hay que</b> (bisogna):<br>
<i>Tienes que descansar.</i> — Devi riposare. <i>Hay que beber mucha agua.</i></p>
<p>⚠️ Falso amico famoso: <b>embarazada</b> = incinta (non imbarazzata, che è <i>avergonzada</i>). <b>Constipado</b> = raffreddato (non stitico, che è <i>estreñido</i>).</p>`,
  phrases: [
    ['Me duele la garganta.', 'Mi fa male la gola.'],
    ['Tengo fiebre desde ayer.', 'Ho la febbre da ieri.'],
    ['Necesito ir al médico.', 'Devo andare dal medico.'],
    ['¿Hay una farmacia de guardia?', 'C\'è una farmacia di turno?']
  ],
  exercises: [
    {t:'mc', q:'Me ___ las piernas.', o:['duelen','duele'], a:0},
    {t:'mc', q:'"Estoy embarazada" significa…', o:['Sono incinta','Sono imbarazzata','Sono ammalata','Sono stanca'], a:0},
    {t:'mc', q:'"Estoy constipado" significa…', o:['Sono raffreddato','Sono stitico','Sono stanco','Sono costipato di lavoro'], a:0},
    {t:'fill', q:'Tienes ___ descansar.', a:['que']},
    {t:'tr', q:'Mi fa male la testa.', a:['me duele la cabeza','tengo dolor de cabeza']}
  ],
  tip: 'Conoscere queste frasi può davvero servirti in viaggio. Ripassale prima di partire.'
},
{
  id: 30, level: 'A2', title: 'Futuro semplice, condizionale e falsi amici',
  goal: 'Fare previsioni, ipotesi e richieste cortesi. Evitare gli errori tipici degli italiani.',
  vocab: [
    ['el rato', 'il momento / un po\' di tempo'], ['la salida', 'l\'uscita'], ['largo', 'lungo'],
    ['la oficina', 'l\'ufficio'], ['el éxito', 'il successo'], ['quitar', 'togliere'],
    ['contestar', 'rispondere'], ['acordarse', 'ricordarsi'], ['la cena', 'la cena'],
    ['exquisito', 'squisito'], ['guapo', 'bello (persona)'], ['caliente', 'caldo (oggetto)']
  ],
  grammar: `
<p><b>Futuro</b>: infinito + <b>-é, -ás, -á, -emos, -éis, -án</b>: <i>hablaré, comerás, vivirá</i>.<br>
<b>Condizionale</b>: infinito + <b>-ía, -ías, -ía, -íamos, -íais, -ían</b>: <i>hablaría, comería</i>.</p>
<p>Radici irregolari (uguali per entrambi): tendr-, podr-, saldr-, vendr-, pondr-, har-, dir-, querr-, sabr-, habr-.</p>
<p><i>Mañana lloverá.</i> — <i>Me gustaría ir.</i> — <i>¿Podrías ayudarme?</i></p>
<h4>Falsi amici da non dimenticare</h4>
<table>
<tr><th>Spagnolo</th><th>Significa</th><th>NON significa</th></tr>
<tr><td>largo</td><td>lungo</td><td>largo (= ancho)</td></tr>
<tr><td>el éxito</td><td>il successo</td><td>l'esito (= resultado)</td></tr>
<tr><td>salir</td><td>uscire</td><td>salire (= subir)</td></tr>
<tr><td>contestar</td><td>rispondere</td><td>contestare (= protestar)</td></tr>
<tr><td>la oficina</td><td>l'ufficio</td><td>l'officina (= el taller)</td></tr>
<tr><td>quitar</td><td>togliere</td><td>quietare</td></tr>
<tr><td>el rato</td><td>il momento</td><td>il ratto (= la rata)</td></tr>
<tr><td>burro</td><td>asino</td><td>burro (= mantequilla)</td></tr>
<tr><td>embarazada</td><td>incinta</td><td>imbarazzata</td></tr>
<tr><td>guardar</td><td>conservare</td><td>guardare (= mirar)</td></tr>
<tr><td>la tapa</td><td>coperchio / stuzzichino</td><td>la tappa (= la etapa)</td></tr>
<tr><td>la firma</td><td>la firma ✓</td><td>— (questo è un amico vero!)</td></tr>
</table>`,
  phrases: [
    ['¿Qué harás el año que viene?', 'Cosa farai l\'anno prossimo?'],
    ['Me gustaría vivir en España.', 'Mi piacerebbe vivere in Spagna.'],
    ['¿Podrías hablar más despacio?', 'Potresti parlare più lentamente?'],
    ['Espera un rato.', 'Aspetta un momento.']
  ],
  exercises: [
    {t:'fill', q:'Mañana yo ___ más temprano. (salir, futuro)', a:['saldré']},
    {t:'fill', q:'¿___ ayudarme? (poder, tú, condizionale)', a:['podrías']},
    {t:'fill', q:'Ellos ___ en verano. (venir, futuro)', a:['vendrán']},
    {t:'mc', q:'"Il film è stato un successo" →', o:['La película fue un éxito','La película fue un suceso','La película fue un exito resultado','La película salió'], a:0},
    {t:'mc', q:'"Una strada larga" →', o:['una calle ancha','una calle larga','una calle grande','una calle lunga'], a:0},
    {t:'mc', q:'"Guardar" significa…', o:['conservare','guardare','aspettare','guadagnare'], a:0},
    {t:'tr', q:'Mi piacerebbe andare in Messico.', a:['me gustaría ir a méxico','me gustaria ir a mexico']}
  ],
  tip: 'Tieni una lista personale di falsi amici: ogni volta che ne scopri uno, aggiungilo.'
},
{
  id: 31, level: 'A2', title: '🏆 Ripasso finale A2',
  goal: 'Verificare il livello A2 e preparare il passaggio al B1.',
  vocab: [
    ['aprobar', 'superare (un esame)'], ['suspender', 'bocciare / non superare'], ['el examen', 'l\'esame'],
    ['el nivel', 'il livello'], ['mejorar', 'migliorare'], ['practicar', 'esercitarsi / praticare'],
    ['seguir aprendiendo', 'continuare a imparare'], ['el objetivo', 'l\'obiettivo']
  ],
  grammar: `
<p>Checklist A2 — se sai fare tutto questo, sei pronto per il B1 (e per il DELE A2):</p>
<ul>
<li>✅ Raccontare il passato con perfecto, indefinido e imperfecto</li>
<li>✅ Usare i pronomi diretti e indiretti (se lo, me la…)</li>
<li>✅ Fare confronti, dare istruzioni con l'imperativo</li>
<li>✅ Cavartela in viaggio, al ristorante, dal medico</li>
<li>✅ Parlare del futuro e fare richieste cortesi col condizionale</li>
<li>✅ Riconoscere i principali falsi amici</li>
</ul>
<p><b>Prossimi passi (B1)</b>: il congiuntivo presente (quiero que vengas), por/para approfondito, il trapassato, il discorso indiretto. Consulta <code>docs/piano-di-studio.md</code> per le risorse consigliate.</p>`,
  phrases: [
    ['El verano pasado fui a Valencia y me encantó.', 'L\'estate scorsa sono andato a Valencia e mi è piaciuta moltissimo.'],
    ['Cuando era niño, no me gustaban las verduras.', 'Quando ero bambino, non mi piacevano le verdure.'],
    ['Se lo he explicado varias veces.', 'Gliel\'ho spiegato varie volte.'],
    ['Quiero seguir aprendiendo español.', 'Voglio continuare a imparare lo spagnolo.']
  ],
  exercises: [
    {t:'mc', q:'Esta mañana ___ un café. / Ayer ___ un té.', o:['he tomado / tomé','tomé / he tomado','tomaba / tomé','he tomado / tomaba'], a:0},
    {t:'mc', q:'Cuando ___ pequeño, ___ en Bari.', o:['era / vivía','fui / viví','era / viví','fui / vivía'], a:0},
    {t:'fill', q:'¿El libro? Ya ___ he dado a Ana. (glielo)', a:['se lo']},
    {t:'fill', q:'Ayer ella no ___ venir. (poder)', a:['pudo']},
    {t:'fill', q:'¡___ la puerta, por favor! (abrir, tú)', a:['abre']},
    {t:'fill', q:'Me ___ mucho los pies.', a:['duelen']},
    {t:'fill', q:'Valencia es más pequeña ___ Madrid.', a:['que']},
    {t:'mc', q:'"He salido de la oficina" significa…', o:['Sono uscito dall\'ufficio','Sono salito in officina','Sono uscito dall\'officina','Sono salito in ufficio'], a:0},
    {t:'tr', q:'Ieri sono andato al mare.', a:['ayer fui a la playa']},
    {t:'tr', q:'Mi piacerebbe migliorare il mio spagnolo.', a:['me gustaría mejorar mi español','me gustaria mejorar mi español','me gustaría mejorar mi espanol']}
  ],
  tip: '¡Enhorabuena! Hai completato il corso A1-A2. Ora alterna: input comprensibile (podcast, serie con sottotitoli in spagnolo), conversazione con tutor 1-2 volte a settimana e un corso B1.'
}
];
