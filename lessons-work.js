// 💼 Spagnolo per il lavoro: consulenza ambientale e carbon farming
// (agricoltura, zootecnia, imboschimento, crediti di carbonio, certificazione CRCF, clienti, report).
//
// WORK[idLezione]   → contenuti professionali aggiunti alla lezione generale, con la stessa grammatica.
// PRO_LESSONS       → lezioni professionali dedicate, inserite nel percorso dopo la lezione "after".

const WORK = {
1: {
  vocab: [['el cliente / la clienta', 'il cliente / la cliente'], ['la empresa', 'l\'azienda / la società'], ['el agricultor / la agricultora', 'l\'agricoltore / l\'agricoltrice'], ['el ganadero / la ganadera', 'l\'allevatore / l\'allevatrice']],
  phrases: [['Buenos días, me llamo Marco y trabajo en consultoría ambiental.', 'Buongiorno, mi chiamo Marco e lavoro nella consulenza ambientale.'], ['Encantado de conocerle.', 'Piacere di conoscerLa.']],
  exercises: [
    {t:'mc', q:'Per salutare un nuovo cliente in modo formale dici:', o:['Encantado de conocerle.','¿Qué pasa, tío?','¡Hasta luego!','¡Hola, guapo!'], a:0},
    {t:'fill', q:'Encantado de ___. (conoscerLa)', a:['conocerle','conocerla']}
  ]
},
2: {
  vocab: [['el carbono', 'il carbonio'], ['el suelo', 'il suolo / il pavimento'], ['la hectárea', 'l\'ettaro'], ['el dióxido de carbono', 'l\'anidride carbonica (CO₂)']],
  phrases: [['¿Me puede deletrear su apellido, por favor?', 'Mi può fare lo spelling del suo cognome, per favore?'], ['Son diez hectáreas.', 'Sono dieci ettari.']],
  exercises: [
    {t:'mc', q:'"Suelo" in un contesto agricolo significa…', o:['suolo','solo','sole','soglia'], a:0},
    {t:'fill', q:'cinco + cinco = ___ hectáreas', a:['diez']}
  ]
},
3: {
  vocab: [['el consultor / la consultora', 'il consulente / la consulente'], ['el agrónomo / la agrónoma', 'l\'agronomo'], ['la consultoría', 'la consulenza (società di consulenza)'], ['el sector agrícola', 'il settore agricolo']],
  phrases: [['Soy consultor de agricultura de carbono.', 'Sono consulente di carbon farming.'], ['Trabajo con explotaciones agrarias y ganaderas.', 'Lavoro con aziende agricole e zootecniche.']],
  exercises: [
    {t:'fill', q:'Yo ___ consultor ambiental.', a:['soy']},
    {t:'tr', q:'Sono agronomo.', a:['soy agrónomo','soy agronomo','soy agrónoma']}
  ]
},
4: {
  vocab: [['el árbol', 'l\'albero'], ['el cultivo', 'la coltura / la coltivazione'], ['la emisión', 'l\'emissione'], ['el clima', 'il clima']],
  phrases: [['Las emisiones de la explotación son bajas.', 'Le emissioni dell\'azienda sono basse.'], ['El clima es seco.', 'Il clima è secco.']],
  exercises: [
    {t:'mc', q:'Il clima →', o:['el clima','la clima','lo clima','los clima'], a:0},
    {t:'fill', q:'una emisión → dos ___', a:['emisiones']}
  ]
},
5: {
  vocab: [['la explotación agraria', 'l\'azienda agricola'], ['la finca', 'il podere / la tenuta'], ['la parcela', 'l\'appezzamento / la particella'], ['el campo', 'il campo / la campagna']],
  phrases: [['La finca está cerca de Toledo.', 'Il podere è vicino a Toledo.'], ['El suelo está muy seco.', 'Il suolo è molto secco.']],
  exercises: [
    {t:'mc', q:'La parcela ___ en la provincia de Cuenca.', o:['está','es','hay'], a:0},
    {t:'mc', q:'El cliente ___ muy contento con el informe.', o:['está','es'], a:0}
  ]
},
6: {
  vocab: [['la tonelada', 'la tonnellata'], ['el por ciento', 'il per cento'], ['el dato', 'il dato'], ['la vaca lechera', 'la vacca da latte']],
  phrases: [['La explotación tiene cincuenta hectáreas.', 'L\'azienda ha cinquanta ettari.'], ['Tenemos noventa vacas lecheras.', 'Abbiamo novanta vacche da latte.']],
  exercises: [
    {t:'fill', q:'La finca ___ treinta hectáreas.', a:['tiene']},
    {t:'tr', q:'Abbiamo cento vacche.', a:['tenemos cien vacas']}
  ]
},
7: {
  vocab: [['el socio / la socia', 'il socio / la socia'], ['el equipo', 'la squadra / il team'], ['el compañero de trabajo', 'il collega'], ['el jefe / la jefa', 'il capo']],
  phrases: [['Mi socio se encarga de los clientes.', 'Il mio socio si occupa dei clienti.'], ['Nuestro equipo es pequeño, pero muy técnico.', 'Il nostro team è piccolo, ma molto tecnico.']],
  exercises: [
    {t:'fill', q:'___ empresa (la nostra azienda)', a:['nuestra']},
    {t:'mc', q:'"El compañero de trabajo" è…', o:['il collega','il compagno di scuola','il socio in affari','il dipendente'], a:0}
  ]
},
8: {
  vocab: [['calcular', 'calcolare'], ['analizar', 'analizzare'], ['plantar', 'piantare'], ['presentar', 'presentare']],
  phrases: [['Calculamos las emisiones de la explotación.', 'Calcoliamo le emissioni dell\'azienda.'], ['Analizo los datos del suelo.', 'Analizzo i dati del suolo.']],
  exercises: [
    {t:'fill', q:'Nosotros ___ el carbono del suelo. (calcular)', a:['calculamos']},
    {t:'fill', q:'¿Usted ___ el informe hoy? (presentar)', a:['presenta']}
  ]
},
9: {
  vocab: [['el informe', 'il report / la relazione'], ['el requisito', 'il requisito'], ['cumplir', 'rispettare / soddisfare'], ['emitir', 'emettere']],
  phrases: [['Escribo el informe para el cliente.', 'Scrivo il report per il cliente.'], ['La explotación cumple los requisitos.', 'L\'azienda soddisfa i requisiti.']],
  exercises: [
    {t:'fill', q:'Las vacas ___ metano. (emitir)', a:['emiten']},
    {t:'mc', q:'"El informe" significa…', o:['il report / la relazione','l\'informatica','l\'informazione sbagliata','la forma'], a:0}
  ]
},
10: {
  vocab: [['la reunión', 'la riunione'], ['la cita', 'l\'appuntamento'], ['el plazo', 'la scadenza / il termine'], ['la agenda', 'l\'agenda']],
  phrases: [['¿Le va bien el martes a las diez?', 'Le va bene martedì alle dieci?'], ['El plazo termina el viernes.', 'La scadenza è venerdì.']],
  exercises: [
    {t:'mc', q:'"El plazo" significa…', o:['la scadenza','la piazza','il prezzo','il piano'], a:0},
    {t:'fill', q:'La reunión es ___ las once.', a:['a']}
  ]
},
11: {
  vocab: [['dedicarse a', 'occuparsi di (come lavoro)'], ['encargarse de', 'occuparsi di (un compito)'], ['reunirse', 'riunirsi / incontrarsi'], ['la visita de campo', 'il sopralluogo']],
  phrases: [['Me dedico a la consultoría ambiental.', 'Mi occupo di consulenza ambientale.'], ['Normalmente me reúno con los clientes por la mañana.', 'Di solito incontro i clienti la mattina.']],
  exercises: [
    {t:'fill', q:'¿A qué te ___? — Soy consultor. (dedicarse)', a:['dedicas']},
    {t:'fill', q:'Nos ___ con el cliente el lunes. (reunirse)', a:['reunimos']}
  ]
},
12: {
  vocab: [['la oficina', 'l\'ufficio'], ['la sede', 'la sede'], ['la cooperativa', 'la cooperativa'], ['el ayuntamiento', 'il comune (ente)']],
  phrases: [['¿Hay una cooperativa agrícola en el pueblo?', 'C\'è una cooperativa agricola in paese?'], ['Nuestra sede está en el centro.', 'La nostra sede è in centro.']],
  exercises: [
    {t:'mc', q:'Il comune (l\'ente) →', o:['el ayuntamiento','el común','la comunidad de vecinos','el comunal'], a:0},
    {t:'fill', q:'En la zona ___ muchas explotaciones ganaderas.', a:['hay']}
  ]
},
13: {
  vocab: [['la comida de negocios', 'il pranzo di lavoro'], ['invitar', 'invitare / offrire'], ['el brindis', 'il brindisi'], ['la sobremesa', 'la chiacchierata a tavola dopo il pasto']],
  phrases: [['Le invito a comer.', 'La invito a pranzo (offro io).'], ['Hablamos del proyecto en la sobremesa.', 'Parliamo del progetto dopo pranzo, a tavola.']],
  exercises: [
    {t:'mc', q:'"La sobremesa" è…', o:['il tempo passato a chiacchierare a tavola dopo il pasto','il dessert','la tovaglia','il tavolo di servizio'], a:0},
    {t:'mc', q:'In Spagna, al pranzo di lavoro, se dici "Te invito" significa…', o:['che paghi tu','che inviti l\'altro a venire','che chiedi il conto separato','che te ne vai'], a:0}
  ]
},
14: {
  vocab: [['el proyecto', 'il progetto'], ['la propuesta', 'la proposta'], ['interesar', 'interessare'], ['preocupar', 'preoccupare']],
  phrases: [['Nos interesa mucho su propuesta.', 'La sua proposta ci interessa molto.'], ['Al cliente le preocupan los costes.', 'Il cliente è preoccupato per i costi.']],
  exercises: [
    {t:'fill', q:'Nos ___ mucho el proyecto. (interesar)', a:['interesa']},
    {t:'mc', q:'A los agricultores les ___ las ayudas de la PAC.', o:['interesan','interesa'], a:0}
  ]
},
15: {
  vocab: [['el presupuesto', 'il preventivo / il budget'], ['la factura', 'la fattura'], ['medir', 'misurare'], ['reducir', 'ridurre']],
  phrases: [['¿Puede enviarme un presupuesto?', 'Può inviarmi un preventivo?'], ['Medimos el carbono orgánico del suelo.', 'Misuriamo il carbonio organico del suolo.']],
  exercises: [
    {t:'fill', q:'Yo le ___ un presupuesto. (hacer)', a:['hago']},
    {t:'fill', q:'Yo ___ las parcelas con GPS. (medir)', a:['mido']},
    {t:'mc', q:'"El presupuesto" significa…', o:['il preventivo','il presupposto','il presunto','il prestito'], a:0}
  ]
},
16: {
  vocab: [['la siembra', 'la semina'], ['la cosecha', 'il raccolto'], ['la campaña', 'la campagna (agraria)'], ['durar', 'durare']],
  phrases: [['Vamos a plantar dos mil árboles en marzo.', 'Pianteremo duemila alberi a marzo.'], ['El proyecto va a durar cinco años.', 'Il progetto durerà cinque anni.']],
  exercises: [
    {t:'fill', q:'Este año el cliente va ___ cambiar de cultivo.', a:['a']},
    {t:'tr', q:'Il raccolto è a luglio.', a:['la cosecha es en julio']}
  ]
},
17: {
  vocab: [['el crédito de carbono', 'il credito di carbonio'], ['el precio', 'il prezzo'], ['el comprador / el vendedor', 'l\'acquirente / il venditore'], ['el mercado voluntario', 'il mercato volontario']],
  phrases: [['¿Cuánto cuesta este crédito por tonelada?', 'Quanto costa questo credito a tonnellata?'], ['Estos créditos son de un proyecto forestal.', 'Questi crediti vengono da un progetto forestale.']],
  exercises: [
    {t:'fill', q:'___ créditos (questi)', a:['estos']},
    {t:'tr', q:'il credito di carbonio', a:['el crédito de carbono','crédito de carbono','el credito de carbono']}
  ]
},
18: {
  vocab: [['la sequía', 'la siccità'], ['el cambio climático', 'il cambiamento climatico'], ['el riego', 'l\'irrigazione'], ['las precipitaciones', 'le precipitazioni']],
  phrases: [['Este año hay mucha sequía.', 'Quest\'anno c\'è molta siccità.'], ['El cambio climático afecta a los cultivos.', 'Il cambiamento climatico colpisce le colture.']],
  exercises: [
    {t:'mc', q:'"La sequía" significa…', o:['la siccità','la seccatura','la segatura','la sequenza'], a:0},
    {t:'fill', q:'Hace mucho calor y no ___ desde mayo. (piovere)', a:['llueve']}
  ]
},
19: {
  vocab: [['el medio ambiente', 'l\'ambiente'], ['la sostenibilidad', 'la sostenibilità']],
  phrases: [['Soy consultor, trabajo con explotaciones agrarias en Italia y me interesa mucho el mercado español.', 'Sono consulente, lavoro con aziende agricole in Italia e il mercato spagnolo mi interessa molto.']],
  exercises: [
    {t:'mc', q:'La finca ___ grande y ___ cerca de Madrid.', o:['es / está','está / es','es / es','está / está'], a:0},
    {t:'fill', q:'En la explotación ___ cien vacas.', a:['hay']}
  ]
},
20: {
  vocab: [['el borrador', 'la bozza'], ['adjuntar', 'allegare'], ['revisar', 'rivedere / controllare'], ['el archivo', 'il file']],
  phrases: [['Le he enviado el informe esta mañana.', 'Le ho inviato il report stamattina.'], ['Todavía no hemos recibido los datos.', 'Non abbiamo ancora ricevuto i dati.']],
  exercises: [
    {t:'fill', q:'¿Ha ___ usted el borrador? (revisar)', a:['revisado']},
    {t:'fill', q:'Te ___ adjuntado el archivo.', a:['he']}
  ]
},
21: {
  vocab: [['la auditoría', 'l\'audit / la verifica'], ['el auditor', 'il verificatore / l\'auditor'], ['la verificación', 'la verifica'], ['firmar', 'firmare']],
  phrases: [['El año pasado plantamos veinte hectáreas de bosque.', 'L\'anno scorso abbiamo piantato venti ettari di bosco.'], ['La auditoría terminó en mayo.', 'L\'audit è terminato a maggio.']],
  exercises: [
    {t:'fill', q:'En 2024 la empresa ___ su primer proyecto. (empezar)', a:['empezó']},
    {t:'fill', q:'Ellos ___ las parcelas en abril. (visitar)', a:['visitaron']}
  ]
},
22: {
  vocab: [['el muestreo', 'il campionamento'], ['la muestra', 'il campione'], ['el laboratorio', 'il laboratorio'], ['el organismo de certificación', 'l\'organismo di certificazione']],
  phrases: [['Hicimos el muestreo del suelo en octubre.', 'Abbiamo fatto il campionamento del suolo a ottobre.'], ['Tuvimos una reunión con el organismo de certificación.', 'Abbiamo avuto una riunione con l\'organismo di certificazione.']],
  exercises: [
    {t:'fill', q:'Ayer (yo) ___ una reunión con el ganadero. (tener)', a:['tuve']},
    {t:'fill', q:'¿Quién ___ el análisis de las muestras? (hacer)', a:['hizo']}
  ]
},
23: {
  vocab: [['labrar / arar', 'arare'], ['el abono químico', 'il concime chimico'], ['el estiércol', 'il letame'], ['antes', 'prima']],
  phrases: [['Antes la explotación usaba mucho abono químico.', 'Prima l\'azienda usava molto concime chimico.'], ['Antes se labraba el suelo cada año.', 'Prima si arava il terreno ogni anno.']],
  exercises: [
    {t:'fill', q:'Antes los agricultores ___ más. (labrar)', a:['labraban']},
    {t:'tr', q:'Prima l\'azienda aveva più vacche.', a:['antes la explotación tenía más vacas','antes la explotacion tenia mas vacas']}
  ]
},
24: {
  vocab: [['el resultado', 'il risultato'], ['el error', 'l\'errore'], ['comprobar', 'verificare / controllare'], ['la línea de base', 'lo scenario di riferimento (baseline)']],
  phrases: [['Cuando llegamos a la finca, llovía mucho.', 'Quando siamo arrivati al podere, pioveva molto.'], ['Mientras analizábamos los datos, encontramos un error.', 'Mentre analizzavamo i dati, abbiamo trovato un errore.']],
  exercises: [
    {t:'mc', q:'Cuando ___ la visita, el ganadero ya nos esperaba.', o:['empezamos','empezábamos'], a:0},
    {t:'fill', q:'Mientras (yo) ___ el informe, me llamó el cliente. (escribir)', a:['escribía']}
  ]
},
25: {
  vocab: [['el contrato', 'il contratto'], ['el certificado', 'il certificato'], ['entregar', 'consegnare'], ['enviar', 'inviare']],
  phrases: [['¿El contrato? Se lo envío mañana.', 'Il contratto? Glielo invio domani.'], ['¿Me lo puede firmar, por favor?', 'Me lo può firmare, per favore?']],
  exercises: [
    {t:'fill', q:'¿El informe? Ya ___ he enviado al cliente. (glielo)', a:['se lo']},
    {t:'mc', q:'¿Los certificados del cliente? ___ entregamos el lunes.', o:['Se los','Le los','Los le','Se lo'], a:0}
  ]
},
26: {
  vocab: [['la siembra directa', 'la semina su sodo'], ['el laboreo convencional', 'la lavorazione convenzionale'], ['la cubierta vegetal', 'la copertura vegetale / cover crop'], ['rentable', 'redditizio']],
  phrases: [['La siembra directa emite menos que el laboreo convencional.', 'La semina su sodo emette meno della lavorazione convenzionale.'], ['Este método es más rentable que el anterior.', 'Questo metodo è più redditizio del precedente.']],
  exercises: [
    {t:'fill', q:'El bosque absorbe más CO₂ ___ el prado.', a:['que']},
    {t:'fill', q:'Es la práctica ___ eficaz de todas.', a:['más']}
  ]
},
27: {
  vocab: [['rellenar', 'compilare'], ['el formulario', 'il modulo'], ['el plano', 'la mappa / la planimetria'], ['comprobar', 'controllare']],
  phrases: [['Rellene el formulario, por favor.', 'Compili il modulo, per favore.'], ['Envíeme los datos antes del viernes.', 'Mi invii i dati entro venerdì.']],
  exercises: [
    {t:'fill', q:'___ el formulario, por favor. (rellenar, usted)', a:['rellene']},
    {t:'fill', q:'___ los datos antes del lunes. (enviar, tú)', a:['envía']}
  ]
},
28: {
  vocab: [['el viaje de trabajo', 'il viaggio di lavoro'], ['la feria', 'la fiera'], ['la sala de reuniones', 'la sala riunioni'], ['la tarjeta de visita', 'il biglietto da visita']],
  phrases: [['Tengo una reunión en Madrid y necesito un hotel cerca de la estación.', 'Ho una riunione a Madrid e mi serve un hotel vicino alla stazione.'], ['Voy a la feria para conocer clientes.', 'Vado alla fiera per conoscere clienti.']],
  exercises: [
    {t:'mc', q:'"La tarjeta de visita" è…', o:['il biglietto da visita','la carta d\'imbarco','l\'agenda delle visite','il badge'], a:0},
    {t:'fill', q:'Voy a la feria ___ conocer clientes.', a:['para']}
  ]
},
29: {
  vocab: [['la granja', 'la fattoria / l\'allevamento'], ['el veterinario', 'il veterinario'], ['el bienestar animal', 'il benessere animale'], ['el estrés térmico', 'lo stress da caldo']],
  phrases: [['El bienestar animal es un requisito importante.', 'Il benessere animale è un requisito importante.'], ['Con tanto calor, las vacas sufren estrés térmico.', 'Con tanto caldo, le vacche soffrono di stress da caldo.']],
  exercises: [
    {t:'mc', q:'"El bienestar animal" significa…', o:['il benessere animale','il bestiame','l\'allevamento intensivo','il veterinario'], a:0},
    {t:'fill', q:'Hay ___ cumplir las normas de bienestar animal.', a:['que']}
  ]
},
30: {
  vocab: [['el objetivo', 'l\'obiettivo'], ['la neutralidad climática', 'la neutralità climatica'], ['la normativa', 'la normativa'], ['absorber', 'assorbire']],
  phrases: [['En 2050 la Unión Europea será climáticamente neutra.', 'Nel 2050 l\'Unione Europea sarà climaticamente neutra.'], ['¿Le interesaría participar en el proyecto?', 'Le interesserebbe partecipare al progetto?']],
  exercises: [
    {t:'fill', q:'El bosque ___ 500 toneladas de CO₂. (absorber, futuro)', a:['absorberá']},
    {t:'fill', q:'¿Le ___ bien el jueves? (venir, condizionale)', a:['vendría']}
  ]
},
31: {
  vocab: [['la propuesta', 'la proposta'], ['el socio comercial', 'il partner commerciale']],
  phrases: [['Me gustaría presentarles nuestra propuesta de agricultura de carbono.', 'Vorrei presentarvi la nostra proposta di carbon farming.']],
  exercises: [
    {t:'tr', q:'Gliel\'ho inviato ieri.', a:['se lo envié ayer']},
    {t:'mc', q:'"Il report è pronto" →', o:['El informe está listo.','El informe es pronto.','El informe está pronto.','El informe es listo.'], a:0}
  ]
}
};

// ---------- Percorso professionale ----------
const PRO_LESSONS = [
{
  id: 101, after: 9, level: 'PRO', title: '💼 Presentarsi nel lavoro: chi sono e cosa faccio',
  goal: 'Presentare te stesso, la tua attività di consulenza e i servizi di carbon farming in 30 secondi.',
  vocab: [
    ['la consultoría ambiental', 'la consulenza ambientale'], ['la agricultura de carbono', 'il carbon farming'],
    ['la huella de carbono', 'l\'impronta di carbonio'], ['el sector agroalimentario', 'il settore agroalimentare'],
    ['el servicio', 'il servizio'], ['ofrecer', 'offrire'], ['ayudar a', 'aiutare a'],
    ['la explotación ganadera', 'l\'azienda zootecnica'], ['el agricultor', 'l\'agricoltore'],
    ['la herramienta', 'lo strumento'], ['calcular', 'calcolare'], ['la sostenibilidad', 'la sostenibilità']
  ],
  grammar: `
<p><b>La presentazione in 30 secondi</b> (<i>elevator pitch</i>) — struttura:</p>
<ol>
<li><b>Chi sei</b>: <i>Me llamo Marco, soy consultor ambiental.</i></li>
<li><b>Cosa fai</b>: <i>Me dedico a la agricultura de carbono.</i></li>
<li><b>Per chi</b>: <i>Trabajo con explotaciones agrarias y ganaderas.</i></li>
<li><b>Che valore porti</b>: <i>Les ayudo a calcular y reducir sus emisiones y a generar créditos de carbono.</i></li>
<li><b>Chiusura</b>: <i>¿Le interesa? Le dejo mi tarjeta.</i></li>
</ol>
<p><b>Tú o usted?</b> In Spagna nel lavoro si passa al <b>tú</b> molto presto, spesso già al primo incontro: se l'altro ti dà del tu, ricambia. Con persone più anziane o in contesti istituzionali parti con <b>usted</b>. In America Latina l'<b>usted</b> è molto più frequente.</p>
<p><b>Ofrecer</b>: io <b>ofrezco</b> (come conocer → conozco).</p>
<p>⚠️ "Carbon farming" nei testi ufficiali UE in spagnolo è <b>agricultura de carbono</b>; nel parlato si sente spesso anche l'inglese.</p>`,
  phrases: [
    ['Me dedico a la agricultura de carbono.', 'Mi occupo di carbon farming.'],
    ['Ayudo a las explotaciones agrarias a reducir sus emisiones.', 'Aiuto le aziende agricole a ridurre le loro emissioni.'],
    ['Ofrecemos un servicio de cálculo de la huella de carbono.', 'Offriamo un servizio di calcolo dell\'impronta di carbonio.'],
    ['¿Podemos tutearnos?', 'Possiamo darci del tu?'],
    ['Le dejo mi tarjeta.', 'Le lascio il mio biglietto da visita.']
  ],
  exercises: [
    {t:'fill', q:'Yo ___ un servicio de consultoría. (ofrecer)', a:['ofrezco']},
    {t:'fill', q:'Me ___ a la agricultura de carbono. (dedicarse)', a:['dedico']},
    {t:'fill', q:'Ayudamos ___ los ganaderos ___ reducir emisiones. (a… a…)', a:['a a','a / a','a, a']},
    {t:'mc', q:'"L\'impronta di carbonio" →', o:['la huella de carbono','la impronta de carbono','la marca de carbono','el pie de carbono'], a:0},
    {t:'mc', q:'Un nuovo contatto spagnolo ti dà del tu. Tu…', o:['gli dai del tu anche tu','continui con usted per rispetto','usi vosotros','eviti i pronomi'], a:0},
    {t:'tr', q:'Mi occupo di consulenza ambientale.', a:['me dedico a la consultoría ambiental','me dedico a la consultoria ambiental']}
  ],
  tip: 'Scrivi la tua presentazione di 30 secondi e imparala a memoria: la userai a ogni fiera, riunione e cena.'
},
{
  id: 102, after: 12, level: 'PRO', title: '💼 Il suolo e le pratiche agricole',
  goal: 'Descrivere le pratiche di gestione del suolo che aumentano il carbonio organico.',
  vocab: [
    ['el carbono orgánico del suelo', 'il carbonio organico del suolo (SOC)'], ['la materia orgánica', 'la sostanza organica'],
    ['los cultivos de cobertura', 'le colture di copertura'], ['la siembra directa', 'la semina su sodo'],
    ['el laboreo mínimo', 'la lavorazione minima'], ['la rotación de cultivos', 'la rotazione colturale'],
    ['los restos de cosecha', 'i residui colturali'], ['el estiércol', 'il letame'],
    ['el regadío / el secano', 'l\'irriguo / il non irriguo'], ['la agroforestería', 'l\'agroforestazione'],
    ['el barbecho', 'il maggese'], ['el pasto / el prado', 'il pascolo / il prato']
  ],
  grammar: `
<p><b>"SE" impersonale / passivo</b> — fondamentale per descrivere procedure e metodi:</p>
<ul>
<li><i><b>Se mide</b> el carbono del suelo cada cinco años.</i> — Si misura il carbonio del suolo ogni cinque anni.</li>
<li><i><b>Se incorporan</b> los restos de cosecha.</i> — Si interrano i residui colturali. (plurale → verbo al plurale)</li>
<li><i>En esta zona <b>se cultiva</b> trigo de secano.</i> — In questa zona si coltiva grano non irriguo.</li>
</ul>
<p>Esattamente come in italiano: <b>se</b> + verbo alla 3ª persona, accordato con il soggetto.</p>
<p>⚠️ <b>Labrar / el laboreo</b> = lavorare il terreno / la lavorazione (non "laboratorio"). <b>La labor</b> = il lavoro/l'operazione agricola. <b>El campo</b> = anche "la campagna" in generale (<i>vivir en el campo</i>).</p>`,
  phrases: [
    ['Con la siembra directa, el suelo pierde menos carbono.', 'Con la semina su sodo il suolo perde meno carbonio.'],
    ['Se incorporan los restos de cosecha al suelo.', 'I residui colturali vengono interrati.'],
    ['Los cultivos de cobertura aumentan la materia orgánica.', 'Le colture di copertura aumentano la sostanza organica.'],
    ['¿Cada cuánto se hace la rotación?', 'Ogni quanto si fa la rotazione?']
  ],
  exercises: [
    {t:'fill', q:'___ mide el carbono orgánico cada cinco años.', a:['se']},
    {t:'mc', q:'Se ___ los restos de cosecha.', o:['incorporan','incorpora'], a:0},
    {t:'mc', q:'"La semina su sodo" →', o:['la siembra directa','la siembra seca','el laboreo profundo','el barbecho'], a:0},
    {t:'mc', q:'"El secano" è…', o:['un terreno coltivato senza irrigazione','un essiccatoio','la siccità','un campo arato'], a:0},
    {t:'tr', q:'il carbonio organico del suolo', a:['el carbono orgánico del suelo','carbono orgánico del suelo','el carbono organico del suelo']},
    {t:'tr', q:'la rotazione colturale', a:['la rotación de cultivos','rotación de cultivos','la rotacion de cultivos']}
  ],
  tip: 'Prendi un report della tua web app e prova a descrivere a voce, in spagnolo, le pratiche di un tuo cliente.'
},
{
  id: 103, after: 15, level: 'PRO', title: '💼 Zootecnia ed emissioni',
  goal: 'Parlare di allevamento, metano enterico, reflui e pratiche di mitigazione, con numeri e percentuali.',
  vocab: [
    ['la ganadería', 'la zootecnia / l\'allevamento'], ['el ganado vacuno', 'i bovini'], ['el ganado ovino', 'gli ovini'],
    ['el metano entérico', 'il metano enterico'], ['la fermentación entérica', 'la fermentazione enterica'],
    ['los purines', 'i liquami'], ['la gestión de estiércoles', 'la gestione delle deiezioni'],
    ['el pienso', 'il mangime'], ['el forraje', 'il foraggio'], ['la planta de biogás', 'l\'impianto di biogas'],
    ['el óxido nitroso', 'il protossido di azoto (N₂O)'], ['la producción de leche', 'la produzione di latte']
  ],
  grammar: `
<p><b>Numeri grandi e decimali</b></p>
<table>
<tr><td>1.000</td><td>mil</td></tr>
<tr><td>2.500</td><td>dos mil quinientos</td></tr>
<tr><td>100.000</td><td>cien mil</td></tr>
<tr><td>1.000.000</td><td>un millón <b>de</b> toneladas</td></tr>
<tr><td>6,5 %</td><td>seis <b>coma</b> cinco por ciento</td></tr>
<tr><td>CO₂eq</td><td>CO₂ equivalente ("ce o dos equivalente")</td></tr>
</table>
<p>Centinaia al femminile si accordano: <i>dosc<b>ientas</b> vacas, quinientas toneladas</i>. Attenzione: 500 = <b>quinientos</b>, 700 = <b>setecientos</b>, 900 = <b>novecientos</b>.</p>
<p><b>Reducir</b> (ridurre): reduzco, reduces, reduce… — "ridurre del 10%" = <i>reducir <b>un</b> 10 %</i> / <i>reducir <b>en</b> un 10 %</i>.</p>
<p>⚠️ <b>El pienso</b> = il mangime (e anche "io penso"!). <b>Purines</b> = liquami; <b>estiércol</b> = letame.</p>`,
  phrases: [
    ['La explotación tiene doscientas vacas lecheras.', 'L\'azienda ha duecento vacche da latte.'],
    ['El metano entérico representa la mayor parte de las emisiones.', 'Il metano enterico rappresenta la maggior parte delle emissioni.'],
    ['Con la planta de biogás reducimos un treinta por ciento las emisiones de los purines.', 'Con l\'impianto di biogas riduciamo del trenta per cento le emissioni dei liquami.'],
    ['¿Qué tipo de pienso usan?', 'Che tipo di mangime usate?']
  ],
  exercises: [
    {t:'mc', q:'200 vacche →', o:['doscientas vacas','doscientos vacas','dos cientas vacas','ducientas vacas'], a:0},
    {t:'fill', q:'6,5 % = seis ___ cinco por ciento', a:['coma']},
    {t:'fill', q:'Nosotros ___ las emisiones un 15 %. (reducir)', a:['reducimos']},
    {t:'fill', q:'Yo ___ las emisiones con mejores prácticas. (reducir)', a:['reduzco']},
    {t:'mc', q:'"Los purines" sono…', o:['i liquami','i purè','i cuccioli','le purghe'], a:0},
    {t:'tr', q:'il metano enterico', a:['el metano entérico','metano entérico','el metano enterico']}
  ],
  tip: 'Leggi ad alta voce in spagnolo i numeri di un tuo calcolo (capi, tonnellate, percentuali): i numeri sono la parte più difficile nelle riunioni.'
},
{
  id: 104, after: 18, level: 'PRO', title: '💼 Boschi, imboschimento e campionamento',
  goal: 'Descrivere un progetto forestale e un campionamento in campo.',
  vocab: [
    ['el bosque', 'il bosco'], ['la forestación', 'l\'imboschimento (su terreno non boscato)'], ['la reforestación', 'il rimboschimento'],
    ['la biomasa aérea', 'la biomassa epigea'], ['la biomasa subterránea', 'la biomassa ipogea'],
    ['el diámetro', 'il diametro'], ['la altura', 'l\'altezza'], ['la parcela de muestreo', 'l\'area di saggio'],
    ['el inventario forestal', 'l\'inventario forestale'], ['la especie', 'la specie'],
    ['la encina / el roble', 'il leccio / la quercia'], ['talar', 'abbattere (alberi)']
  ],
  grammar: `
<p><b>Misure e quantità</b></p>
<ul>
<li><i>¿Cuánto mide?</i> — Quanto misura? → <i>Mide veinte metros <b>de</b> altura.</i></li>
<li><b>por</b> hectárea = per ettaro: <i>mil árboles por hectárea</i></li>
<li><b>a</b> la altura del pecho = all'altezza del petto (diametro a 1,30 m)</li>
</ul>
<p><b>Medir</b> (e→i): mido, mides, mide, medimos, medís, miden.</p>
<p><b>Acabar de</b> + infinito = aver appena fatto: <i>Acabamos de plantar los árboles.</i> — Abbiamo appena piantato gli alberi.</p>
<p>⚠️ <b>El monte</b> in Spagna indica spesso anche il bosco/terreno boschivo, non solo la montagna.</p>`,
  phrases: [
    ['Medimos el diámetro a la altura del pecho.', 'Misuriamo il diametro all\'altezza del petto.'],
    ['Plantamos mil cien árboles por hectárea.', 'Piantiamo millecento alberi per ettaro.'],
    ['La especie principal es la encina.', 'La specie principale è il leccio.'],
    ['Acabamos de terminar el inventario forestal.', 'Abbiamo appena finito l\'inventario forestale.']
  ],
  exercises: [
    {t:'fill', q:'Nosotros ___ la altura de los árboles. (medir)', a:['medimos']},
    {t:'fill', q:'Ella ___ el diámetro. (medir)', a:['mide']},
    {t:'fill', q:'mil árboles ___ hectárea', a:['por']},
    {t:'mc', q:'L\'imboschimento di un terreno agricolo →', o:['la forestación','la deforestación','la tala','el monte bajo'], a:0},
    {t:'fill', q:'Acabamos ___ plantar los árboles.', a:['de']},
    {t:'tr', q:'il bosco', a:['el bosque']}
  ],
  tip: 'Al prossimo sopralluogo prova a descrivere mentalmente in spagnolo ciò che vedi: specie, altezze, densità.'
},
{
  id: 105, after: 21, level: 'PRO', title: '💼 Crediti di carbonio e certificazione',
  goal: 'Spiegare i concetti chiave della certificazione (CRCF, addizionalità, permanenza, verifica).',
  vocab: [
    ['la absorción de carbono', 'l\'assorbimento di carbonio'], ['la reducción de emisiones', 'la riduzione delle emissioni'],
    ['la adicionalidad', 'l\'addizionalità'], ['la permanencia', 'la permanenza'], ['las fugas', 'le fughe (leakage)'],
    ['el escenario de referencia', 'lo scenario di riferimento (baseline)'], ['el seguimiento', 'il monitoraggio'],
    ['la verificación', 'la verifica'], ['el registro', 'il registro'], ['la metodología', 'la metodologia'],
    ['el beneficio neto', 'il beneficio netto'], ['certificar', 'certificare']
  ],
  grammar: `
<p><b>Definire e spiegare concetti</b></p>
<ul>
<li><b>Se trata de</b> … — Si tratta di…: <i>Se trata de un marco voluntario de certificación.</i></li>
<li><b>Consiste en</b> … — Consiste nel…: <i>La adicionalidad consiste en demostrar que…</i></li>
<li><b>Es decir</b> — cioè; <b>por ejemplo</b>; <b>en cambio</b> — invece; <b>por lo tanto</b> — quindi.</li>
<li>Relativi: <b>que</b> (che), <b>donde</b> (dove), <b>lo que</b> (ciò che): <i>Lo que importa es la permanencia.</i></li>
</ul>
<p>Il <b>CRCF</b> (Reg. UE 2024/3012) in spagnolo: <i>marco de certificación de la Unión para las absorciones permanentes de carbono, la agricultura de carbono y el almacenamiento de carbono en productos</i>. In conversazione: <i>el reglamento CRCF</i>.</p>
<p>I 4 criteri "QU.A.L.ITY": <b>cuantificación</b>, <b>adicionalidad</b>, <b>almacenamiento a largo plazo</b> (permanencia), <b>sostenibilidad</b>.</p>`,
  phrases: [
    ['Se trata de un marco europeo de certificación voluntaria.', 'Si tratta di un quadro europeo di certificazione volontaria.'],
    ['La adicionalidad consiste en demostrar que la actividad va más allá de lo obligatorio.', 'L\'addizionalità consiste nel dimostrare che l\'attività va oltre ciò che è obbligatorio.'],
    ['Lo que se certifica es el beneficio neto de absorción.', 'Ciò che si certifica è il beneficio netto di assorbimento.'],
    ['Un organismo de certificación independiente verifica los datos.', 'Un organismo di certificazione indipendente verifica i dati.']
  ],
  exercises: [
    {t:'fill', q:'Se ___ de un reglamento europeo. (tratarse)', a:['trata']},
    {t:'fill', q:'La verificación consiste ___ comprobar los datos.', a:['en']},
    {t:'fill', q:'___ que importa es la permanencia. (ciò che)', a:['lo']},
    {t:'mc', q:'"Il monitoraggio" →', o:['el seguimiento','el monitoreo de seguido','la vigilancia penal','el control remoto'], a:0},
    {t:'mc', q:'"Le fughe" (leakage) →', o:['las fugas','las huidas','las pérdidas de agua','los escapes'], a:0},
    {t:'tr', q:'l\'addizionalità', a:['la adicionalidad','adicionalidad']}
  ],
  tip: 'Prova a spiegare in spagnolo, ad alta voce, la differenza tra assorbimento e riduzione delle emissioni, come faresti con un cliente.'
},
{
  id: 106, after: 23, level: 'PRO', title: '💼 Email, telefonate e riunioni',
  goal: 'Scrivere email professionali, gestire una telefonata e partecipare a una riunione.',
  vocab: [
    ['Estimado / Estimada', 'Gentile / Egregio'], ['Un saludo / Saludos cordiales', 'Cordiali saluti'],
    ['adjunto', 'in allegato'], ['quedo a la espera', 'resto in attesa'], ['quedar', 'accordarsi / vedersi'],
    ['la llamada', 'la telefonata'], ['el orden del día', 'l\'ordine del giorno'], ['el acta', 'il verbale'],
    ['contestar', 'rispondere'], ['la carpeta', 'la cartella'], ['el despacho', 'l\'ufficio (stanza)'], ['retomar', 'riprendere']
  ],
  grammar: `
<p><b>Struttura di una email</b></p>
<p><i>Estimado Sr. García:</i> (con i <b>due punti</b>, non la virgola!)<br>
<i>Le escribo para</i> enviarle el informe de la explotación.<br>
<i>Adjunto le envío</i> el documento con los resultados.<br>
<i>Quedo a la espera de</i> sus comentarios.<br>
<i>Un saludo,</i> / <i>Saludos cordiales,</i><br>Marco</p>
<p><b>Al telefono</b>: <i>¿Diga? / ¿Sí?</i> (pronto) — <i>¿De parte de quién?</i> (chi lo desidera?) — <i>Le paso.</i> (glielo passo) — <i>¿Puede repetir, por favor? Se corta.</i> (cade la linea)</p>
<p><b>Quedar</b>: <i>¿Quedamos el lunes?</i> (Ci vediamo lunedì?) — <i>Quedamos en eso.</i> (D'accordo così.)</p>
<p>⚠️ Falsi amici dell'ufficio: <b>contestar</b> = rispondere; <b>la carpeta</b> = la cartella; <b>el despacho</b> = l'ufficio/studio; <b>la firma</b> = la firma ✓; <b>el acta</b> = il verbale.</p>`,
  phrases: [
    ['Le escribo para enviarle el informe.', 'Le scrivo per inviarLe il report.'],
    ['Adjunto le envío el presupuesto.', 'In allegato Le invio il preventivo.'],
    ['Quedo a la espera de sus comentarios.', 'Resto in attesa dei suoi commenti.'],
    ['¿De parte de quién?', 'Chi lo desidera?'],
    ['¿Quedamos el jueves para revisar los datos?', 'Ci vediamo giovedì per rivedere i dati?']
  ],
  exercises: [
    {t:'mc', q:'Inizio formale di una email:', o:['Estimado Sr. López:','Querido López,','Hola López!!','Señor López.'], a:0},
    {t:'mc', q:'"Contestar un correo" significa…', o:['rispondere a una email','contestare una email','inoltrare una email','cancellare una email'], a:0},
    {t:'fill', q:'Quedo a la ___ de sus noticias.', a:['espera']},
    {t:'fill', q:'¿De parte de ___?', a:['quién','quien']},
    {t:'mc', q:'"La carpeta" è…', o:['la cartella','il tappeto','la cartina','la carta da lettere'], a:0},
    {t:'tr', q:'In allegato Le invio il report.', a:['adjunto le envío el informe','le adjunto el informe','adjunto le envio el informe']}
  ],
  tip: 'Scrivi la prossima email di lavoro prima in spagnolo (anche se poi la invii in italiano): è un esercizio perfetto.'
},
{
  id: 107, after: 26, level: 'PRO', title: '💼 Presentare dati, grafici e risultati',
  goal: 'Commentare risultati, tendenze e confronti durante una presentazione.',
  vocab: [
    ['el gráfico', 'il grafico'], ['la tabla', 'la tabella'], ['la diapositiva', 'la slide'],
    ['aumentar / el aumento', 'aumentare / l\'aumento'], ['disminuir / bajar', 'diminuire / scendere'],
    ['la media', 'la media'], ['aproximadamente', 'circa'], ['en comparación con', 'rispetto a'],
    ['el doble / la mitad', 'il doppio / la metà'], ['el ahorro', 'il risparmio'], ['la tendencia', 'la tendenza'], ['destacar', 'evidenziare']
  ],
  grammar: `
<p><b>Descrivere tendenze</b></p>
<ul>
<li><i>Las emisiones <b>han disminuido un</b> 12 %.</i> — sono diminuite del 12%</li>
<li><i>El carbono del suelo <b>ha pasado de</b> 40 <b>a</b> 46 toneladas por hectárea.</i></li>
<li><i>La producción <b>se ha mantenido estable</b>.</i></li>
<li><i><b>En comparación con</b> el escenario de referencia, …</i></li>
</ul>
<p><b>Disminuir</b>: disminu<b>y</b>o, disminu<b>y</b>es, disminu<b>y</b>e… (come construir, incluir).</p>
<p><b>Guidare la presentazione</b>: <i>En esta diapositiva vemos…</i> — <i>Como pueden ver…</i> — <i>Me gustaría destacar que…</i> — <i>Para terminar…</i> — <i>¿Tienen alguna pregunta?</i></p>`,
  phrases: [
    ['Como pueden ver en el gráfico, las emisiones han bajado un quince por ciento.', 'Come potete vedere nel grafico, le emissioni sono scese del quindici per cento.'],
    ['El carbono del suelo ha pasado de cuarenta a cuarenta y seis toneladas por hectárea.', 'Il carbonio del suolo è passato da quaranta a quarantasei tonnellate per ettaro.'],
    ['Me gustaría destacar el ahorro en fertilizantes.', 'Vorrei evidenziare il risparmio sui fertilizzanti.'],
    ['¿Tienen alguna pregunta?', 'Avete domande?']
  ],
  exercises: [
    {t:'fill', q:'Las emisiones han disminuido ___ 10 %.', a:['un']},
    {t:'fill', q:'Ha pasado ___ 40 ___ 46 toneladas. (da… a…)', a:['de a','de / a','de, a']},
    {t:'fill', q:'El nuevo método ___ las emisiones. (disminuir, presente, él)', a:['disminuye']},
    {t:'mc', q:'"La metà" →', o:['la mitad','la media','el medio','la meta'], a:0},
    {t:'mc', q:'"La diapositiva" è…', o:['la slide','la diapositiva fotografica soltanto','il proiettore','il grafico'], a:0},
    {t:'tr', q:'Avete domande?', a:['¿tienen alguna pregunta?','tienen alguna pregunta','¿tenéis alguna pregunta?','¿tienen preguntas?']}
  ],
  tip: 'Prendi un grafico di un tuo report e commentalo in spagnolo per 1 minuto, registrandoti con il telefono.'
},
{
  id: 108, after: 28, level: 'PRO', title: '💼 Networking: fiere, cene e vita sociale di lavoro',
  goal: 'Fare small talk, invitare, accettare e rifiutare con cortesia in contesti di lavoro e sociali.',
  vocab: [
    ['el congreso', 'il congresso'], ['el contacto', 'il contatto'], ['tutear', 'dare del tu'],
    ['¡Salud!', 'Salute! (brindisi)'], ['quedar para tomar algo', 'vedersi per bere qualcosa'], ['apetecer', 'avere voglia di'],
    ['el puente', 'il ponte (festivo)'], ['el vermut', 'l\'aperitivo (vermouth)'], ['la caña', 'la birra alla spina piccola'],
    ['el ambiente', 'l\'atmosfera'], ['pasarlo bien', 'divertirsi'], ['de acuerdo / vale', 'd\'accordo / ok']
  ],
  grammar: `
<p><b>Invitare, accettare, rifiutare</b></p>
<table>
<tr><th>Funzione</th><th>Spagnolo</th></tr>
<tr><td>Invitare</td><td><i>¿Te apetece tomar algo después?</i> — <i>¿Quedamos para cenar?</i></td></tr>
<tr><td>Accettare</td><td><i>¡Vale, genial!</i> — <i>Me encantaría.</i> — <i>¡Claro que sí!</i></td></tr>
<tr><td>Rifiutare con cortesia</td><td><i>Me encantaría, pero hoy no puedo. ¿Lo dejamos para otro día?</i></td></tr>
</table>
<p><b>Apetecer</b> funziona come gustar: <i>me apetece</i> un café, <i>¿te apetecen</i> unas tapas?</p>
<p><b>Small talk sicuro</b>: il viaggio (<i>¿Qué tal el viaje?</i>), la città, il cibo, la fiera. In Spagna gli orari sono tardi: cena di lavoro alle 21-22.</p>
<p>🌎 In America Latina: <i>tomar algo</i> ✓, ma <b>vale</b> è tipicamente spagnolo; in Messico si dice <i>sale / órale</i>, in Argentina <i>dale</i>.</p>`,
  phrases: [
    ['¿Qué tal el viaje?', 'Com\'è andato il viaggio?'],
    ['¿Te apetece tomar algo después de la feria?', 'Ti va di bere qualcosa dopo la fiera?'],
    ['Me encantaría, pero hoy no puedo. ¿Lo dejamos para mañana?', 'Mi piacerebbe molto, ma oggi non posso. Facciamo domani?'],
    ['¡Salud! Por un buen proyecto juntos.', 'Salute! A un buon progetto insieme.'],
    ['Ha sido un placer. Seguimos en contacto.', 'È stato un piacere. Restiamo in contatto.']
  ],
  exercises: [
    {t:'mc', q:'¿Te ___ unas tapas?', o:['apetecen','apetece'], a:0},
    {t:'fill', q:'Me ___, pero hoy no puedo. (mi piacerebbe molto — encantar)', a:['encantaría']},
    {t:'mc', q:'Per brindare dici:', o:['¡Salud!','¡Chin chin, señor!','¡Brindis!','¡A tu salud de hierro!'], a:0},
    {t:'fill', q:'Seguimos ___ contacto.', a:['en']},
    {t:'mc', q:'"Hacer puente" significa…', o:['fare il ponte tra una festa e il weekend','costruire un ponte','fare da intermediario','attraversare un ponte'], a:0},
    {t:'tr', q:'Ti va di bere qualcosa?', a:['¿te apetece tomar algo?','te apetece tomar algo','¿quieres tomar algo?']}
  ],
  tip: 'Le relazioni si costruiscono a tavola: impara 3 domande di small talk e 3 risposte su di te. Usale alla prossima occasione.'
}
];
