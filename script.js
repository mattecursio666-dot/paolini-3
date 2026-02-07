const topics = [
  {
    id:'nouns',
    title:'Sostantivi (Nomen)',
    html:`<p>I sostantivi latini hanno genere (maschile, femminile, neutro), numero (singolare, plurale) e declinazione. La forma base si trova spesso nel nominativo singolare; la radice si ricava dal genitivo.</p>
    <div class="specchio">
      <strong>Specchietto: esempi di declinazione (1ª, 2ª, 3ª)</strong>
      <table class="table"><thead><tr><th>Cas</th><th>1ª (rosa)</th><th>2ª (servus)</th><th>3ª (rex)</th></tr></thead>
      <tbody>
      <tr><td>Nominativo</td><td>rosa</td><td>servus</td><td>rex</td></tr>
      <tr><td>Genitivo</td><td>rosae</td><td>servi</td><td>regis</td></tr>
      <tr><td>Dativo</td><td>rosae</td><td>servo</td><td>regi</td></tr>
      <tr><td>Accusativo</td><td>rosam</td><td>servum</td><td>regem</td></tr>
      <tr><td>Ablativo</td><td>rosa</td><td>servo</td><td>rege</td></tr>
      </tbody></table>
    </div>
    <div class="curiosity"><strong>Curiosità:</strong> molti sostantivi della 3ª declinazione cambiano radicale tra nominativo e genitivo (rex → reg-).</div>`
  },
  {
    id:'declensions',
    title:'Declinazioni (1ª–5ª)',
    html:`<p>Le cinque declinazioni principali organizzano i modelli di desinenze dei sostantivi. Ogni declinazione ha caratteristiche proprie e regole di genere.</p>
    <div class="specchio"><strong>Riepilogo essenziale</strong>
    <table class="table"><thead><tr><th>Decl.</th><th>Indicazione</th><th>Esempio (Nom/Gen)</th></tr></thead>
    <tbody>
    <tr><td>1ª</td><td>femminile -a</td><td>rosa / rosae</td></tr>
    <tr><td>2ª</td><td>maschile/neutro -us/-um</td><td>servus / servi</td></tr>
    <tr><td>3ª</td><td>variabile</td><td>rex / regis</td></tr>
    <tr><td>4ª</td><td>dominanza -us (masc)</td><td>manus / manus</td></tr>
    <tr><td>5ª</td><td>in -es (femminile)</td><td>dies / diei</td></tr>
    </tbody></table></div>
    <div class="curiosity"><strong>Curiosità:</strong> la 5ª declinazione è nata da sviluppi fonetici del latino arcaico e ha pochi lemmi comuni.</div>`
  },
  {
    id:'cases',
    title:'Casi e loro usi (panoramica)',
    html:`<p>Il latino usa sei casi principali: nominativo, genitivo, dativo, accusativo, ablativo e vocativo (più il locativo per nomi limitati). Ciascun caso ha funzioni sintattiche precise.</p>
    <ul>
      <li><strong>Nominativo</strong>: soggetto e predicato nominale.</li>
      <li><strong>Genitivo</strong>: possesso, partitivo, dipendenze nominali.</li>
      <li><strong>Dativo</strong>: complemento di termine, beneficiario.</li>
      <li><strong>Accusativo</strong>: complemento oggetto, moto a luogo, estensione.</li>
      <li><strong>Ablativo</strong>: mezzo, causa, modo, compito da preposizioni.</li>
      <li><strong>Vocativo</strong>: invocazione.</li>
    </ul>
    <div class="curiosity"><strong>Curiosità:</strong> il locativo sopravvive in nomi di città e piccole isole (Roma → Romae).</div>`
  },
  {
    id:'nominative',
    title:'Nominativo — funzioni e note',
    html:`<p>Il nominativo indica il soggetto e il predicato nominale. In latino spesso la desinenza è la più breve e riconoscibile; attenzione ai plurali neutri (-a).</p>
    <div class="curiosity"><strong>Curiosità:</strong> i neutri hanno sempre il nominativo uguale all'accusativo e plurale in -a (corpus → corpora).</div>`
  },
  {
    id:'genitive',
    title:'Genitivo — possesso e dipendenze',
    html:`<p>Il genitivo esprime possesso, qualità o relazione. Può essere usato anche in funzione partitiva (pars urbis = parte della città).</p>
    <div class="curiosity"><strong>Curiosità:</strong> in latino classico è frequente il genitivo soggettivo e oggettivo per sostantivi astratti (amor patris = amore del padre).</div>`
  },
  {
    id:'dative',
    title:'Dativo — destinatario e interesse',
    html:`<p>Il dativo indica il destinatario o l'interesse (do ut des). È usato con verbi come credere, parere, imperare e con aggettivi che richiedono termine.</p>
    <div class="curiosity"><strong>Curiosità:</strong> il dativo può esprimere anche giudizio o posizione preferenziale (mihi placet = a me piace).</div>`
  },
  {
    id:'accusative',
    title:'Accusativo — oggetto e moto',
    html:`<p>L'accusativo segna il complemento oggetto e molte localizzazioni: moto a luogo (ad urbem) e estensione temporale.</p>
    <div class="curiosity"><strong>Curiosità:</strong> alcune preposizioni richiedono l'accusativo per il moto verso e l'ablativo per il luogo dove.</div>`
  },
  {
    id:'ablative',
    title:'Ablativo — molte funzioni',
    html:`<p>L'ablativo è un caso multifunzionale: mezzo, causa, modo, compagnia, causa efficiente, comparazione (con i comparativi), e con molte preposizioni.</p>
    <div class="curiosity"><strong>Curiosità:</strong> l'ablativo assoluto è una costruzione sintattica autonoma molto usata nella prosa classica.</div>`
  },
  {
    id:'vocative',
    title:'Vocativo — invocazione',
    html:`<p>Il vocativo serve per rivolgersi direttamente a qualcuno: "Marce!". Nella 2ª declinazione maschile singolare spesso coincide con il nominativo (servus → serve).</p>
    <div class="curiosity"><strong>Curiosità:</strong> il vocativo conserva spesso forme arcaiche o poetiche nei testi.</div>`
  },
  {
    id:'adjectives',
    title:'Aggettivi e gradi di comparazione',
    html:`<p>Gli aggettivi concordano con il nome in genere, numero e caso. Esistono aggettivi 1ª/2ª declinazione e 3ª declinazione; i gradi sono positivo, comparativo e superlativo.</p>
    <div class="specchio"><strong>Esempio gradi</strong><table class="table"><thead><tr><th>Pos.</th><th>Comp.</th><th>Sup.</th></tr></thead><tbody><tr><td>fortis</td><td>fortior</td><td>fortissimus</td></tr></tbody></table></div>
    <div class="curiosity"><strong>Curiosità:</strong> alcuni superlativi possono avere valore assoluto o relativo, e alcuni aggettivi hanno forme irr. (bonus → melior → optimus).</div>`
  },
  {
    id:'verbs',
    title:'Verbi e coniugazioni',
    html:`<p>I verbi latini si dividono in quattro coniugazioni principali più verbi irregolari e deponenti. Hanno persone, numeri, tempi, modi e voci.</p>
    <div class="specchio"><strong>Specchietto: presente attivo (esemplificativo)</strong>
    <table class="table"><thead><tr><th>Pers</th><th>1ª coniug</th><th>2ª</th><th>3ª</th><th>4ª</th></tr></thead>
    <tbody>
    <tr><td>1s</td><td>amo</td><td>moneo</td><td>mitto</td><td>audi(o)</td></tr>
    <tr><td>2s</td><td>amas</td><td>mones</td><td>mittis</td><td>audis</td></tr>
    <tr><td>3s</td><td>amat</td><td>monet</td><td>mittit</td><td>audit</td></tr>
    </tbody></table></div>
    <div class="curiosity"><strong>Curiosità:</strong> i verbi deponenti hanno forme passive ma senso attivo (loquor = dico).</div>`
  },
  {
    id:'conjugations',
    title:'Coniugazioni (1ª–4ª)',
    html:`<p>Le coniugazioni si distinguono per la vocale tematica: -ā-, -ē-, -e-, -ī-. Questo influisce su formazione dei tempi e desinenze.</p>
    <div class="curiosity"><strong>Curiosità:</strong> la 3ª coniugazione è la più varia e richiede attenzione alle radici in -i e -u.</div>`
  },
  {
    id:'tenses',
    title:'Tempi verbali (panoramica)',
    html:`<p>I principali tempi indicativi: presente, imperfetto, futuro, perfetto, piuccheperfetto, futuro anteriore. I tempi perfettivi si formano da temi (ppp) e desinenze esterne.</p>
    <div class="curiosity"><strong>Curiosità:</strong> il perfetto latino è spesso reso in italiano con passato remoto o passato prossimo a seconda del contesto storico-letterario.</div>`
  },
  {
    id:'moods',
    title:'Modi: indicativo, congiuntivo, imperativo, infinito',
    html:`<p>Il congiuntivo esprime possibilità, volizione o dubbio; l'imperativo è il comando; l'infinito è forma nominale del verbo e ha funzioni sintattiche importanti.</p>
    <div class="curiosity"><strong>Curiosità:</strong> il congiuntivo era usato frequentemente in latino classico per condizioni e finalità e differisce spesso dall'uso moderno.</div>`
  },
  {
    id:'voices',
    title:'Voci verbali: attiva e passiva',
    html:`<p>La forma passiva si costruisce con desinenze passive o con perifrasi (passive periphrastic). Alcuni verbi sono inerentemente deponenti (solo forma passiva).</p>
    <div class="curiosity"><strong>Curiosità:</strong> l'uso di "-r" nelle desinenze passive è eredità delle forme indoeuropee.</div>`
  },
  {
    id:'participles',
    title:'Participi e gerundi',
    html:`<p>I participi (presente, perfetto, futuro) hanno ruolo aggettivale e verbale. Il gerundio e il gerundivo esprimono azione nominalizzata o necessità.</p>
    <div class="specchio"><strong>Participio perfetto passivo</strong><div>amatus, -a, -um ("amato")</div></div>
    <div class="curiosity"><strong>Curiosità:</strong> il gerundivo indica obbligo o necessità quando si usa con il verbo "esse" (Gerundivum necessitatis).</div>`
  },
  {
    id:'infinitives',
    title:'Infinito e suoi usi',
    html:`<p>L'infinito latino ha ruoli sostantivi e si usa per costruire tempi composti, discorsi indiretti e come complemento soggettivo/oggettivo.</p>
    <div class="curiosity"><strong>Curiosità:</strong> l'infinito perfetto attivo (amavisse) è comune in oratio obliqua.</div>`
  },
  {
    id:'supine',
    title:'Supino',
    html:`<p>Il supino è una forma verbale usata principalmente per esprimere scopo (ad + accusativo) e nella formazione di certi aggettivi. È raro e tipico del latino classico.</p>
    <div class="curiosity"><strong>Curiosità:</strong> il supino è spesso considerato una traccia arcaica del latino verbale.</div>`
  },
  {
    id:'periphrastic',
    title:'Perifrastiche e costruzioni composte',
    html:`<p>Le perifrasi servono a esprimere aspetti verbali (perifrastica progressiva) o passività obbligatoria (periphrastic passive).</p>
    <div class="curiosity"><strong>Curiosità:</strong> la perifrastica passiva con gerundivo esprime obbligo (Carthago delenda est).</div>`
  },
  {
    id:'deponents',
    title:'Verbi deponenti e semi-deponenti',
    html:`<p>I verbi deponenti hanno forme passive ma significato attivo: loquor (parlare). I semi-deponenti hanno forme attive in alcuni tempi e passive in altri.</p>
    <div class="curiosity"><strong>Curiosità:</strong> deponenti comuni: loquor, sequor, proficiscor.</div>`
  },
  {
    id:'irregulars',
    title:'Verbi irregolari (sum, eo, fero, fio)',
    html:`<p>Alcuni verbi fondativi del latino sono irregolari: "sum" (essere), "eo" (andare), "fero" (portare), "fio" (divenire). Hanno paradigmi peculiari fondamentali per la lingua.</p>
    <div class="curiosity"><strong>Curiosità:</strong> "sum" forma molte costruzioni perifrastiche e tempi composti.</div>`
  },
  {
    id:'prepositions',
    title:'Preposizioni e casi governati',
    html:`<p>Le preposizioni governano casi diversi (ad + acc., in + abl./acc.). È essenziale memorizzare quale caso richiede ciascuna preposizione.</p>
    <div class="curiosity"><strong>Curiosità:</strong> alcune preposizioni hanno origine nelle particelle pronominali arcaiche e si sono stabilizzate col tempo.</div>`
  },
  {
    id:'conjunctions',
    title:'Congiunzioni e coordinazione',
    html:`<p>Le congiunzioni collegano frasi e proposizioni: et, sed, autem, quod, ut, cum. Alcune introducono subordinate congiuntive (ut, ne).</p>
    <div class="curiosity"><strong>Curiosità:</strong> "autem" e "vero" spesso occupano posizione mediana nella frase per marcatura retorica.</div>`
  },
  {
    id:'syntax',
    title:'Sintassi: accordo e ordine delle parole',
    html:`<p>Il latino è relativamente flessibile nell'ordine delle parole grazie alle desinenze; tuttavia l'ordine ha valore pragmatico e stilistico (tema/rema, enfasi).</p>
    <div class="curiosity"><strong>Curiosità:</strong> nella poesia il posizionamento può esprimere relazioni semantiche e sonore privilegiate.</div>`
  },
  {
    id:'subordinate',
    title:'Proposizioni subordinate (tipi principali)',
    html:`<p>Tipi: temporali, causali, finali, consecutive, concessive, relative, interrogative indirette, completive. Ognuna ha marcatori e concetti modali distinti.</p>
    <div class="curiosity"><strong>Curiosità:</strong> il congiuntivo è frequentemente usato nelle subordinate finali e consecutiviche.</div>`
  },
  {
    id:'ablative-absolute',
    title:'Ablativo assoluto',
    html:`<p>Composizione nominale + participio in ablativo che forma una proposizione secondaria indipendente (Ablativo assoluto): "Urbe capta, milites discesserunt".</p>
    <div class="curiosity"><strong>Curiosità:</strong> è una costruzione tipica del latino classico e molto elegante nello stile narrativo.</div>`
  },
  {
    id:'comparative',
    title:'Comparazione (comparativo e superlativo)',
    html:`<p>Formazione e uso del comparativo (fortior) e superlativo (fortissimus). Confronti: quam, ablativo di comparazione, quam + nominativo.</p>
    <div class="curiosity"><strong>Curiosità:</strong> latino usa costruzioni compar. speciali come "maior natu" per l'età.</div>`
  },
  {
    id:'conditionals',
    title:'Frasi condizionali (periodi ipotetici)',
    html:`<p>Tipi: reali (indicativo), potenziali (congiuntivo/conditionales), irreali (contrafattuali). La scelta del modo e del tempo è cruciale per il significato.</p>
    <div class="curiosity"><strong>Curiosità:</strong> Cicerone e Cesare sfruttano spesso contrafattuali retorici per effetti persuasivi.</div>`
  },
  {
    id:'pronouns',
    title:'Pronomi (personali, relativi, dimostrativi, indefiniti)',
    html:`<p>I pronomi coprono funzione referenziale e sostituzione nominale. Tipologie: personali, riflessivi, relativi, dimostrativi, interrogativi, indefiniti.</p>
    <div class="curiosity"><strong>Curiosità:</strong> il pronome relativo spesso manca di un antecedente esplicito in latino poetico, creando figure sintattiche sofisticate.</div>`
  },
  {
    id:'numerals',
    title:'Numerali (cardinali e ordinali)',
    html:`<p>Numerali cardinali (unus, duo, tres) e ordinali (primus, secundus). Alcuni numerali hanno forme irregolari e si declinano come aggettivi o sostantivi.</p>
    <div class="curiosity"><strong>Curiosità:</strong> i numerali "duo" e "tres" hanno forme particolari per genere e caso.</div>`
  },
  {
    id:'particles',
    title:'Particelle e avverbi',
    html:`<p>Le particelle (enim, autem, vero) e gli avverbi (bene, male, saepe) svolgono ruoli connettivi, modali e quantitativi; spesso influenzano l'intonazione del periodo.</p>
    <div class="curiosity"><strong>Curiosità:</strong> alcune particelle hanno origine in forme pronominali arcaiche e si sono grammaticalizzate.</div>`
  },
  {
    id:'interjections',
    title:'Interiezioni e formule fisse',
    html:`<p>Interiezioni come "vae!", "eheu!", "heus!" e formule rituali (ave!, veni, vidi) appaiono nella lingua parlata e scritta con valore emotivo.</p>
    <div class="curiosity"><strong>Curiosità:</strong> molte interiezioni sono trasmesse direttamente nel latino letterario senza cambiamenti.</div>`
  }
];

function $(sel){return document.querySelector(sel)}

function renderList(){
  const list = $('#topicsList');
  list.innerHTML = '';
  topics.forEach(t =>{
    const a = document.createElement('a');
    a.className='topic-item';
    a.href='#'+t.id;
    a.dataset.id = t.id;
    a.innerText = t.title;
    a.addEventListener('click', e =>{e.preventDefault(); showTopic(t.id);});
    list.appendChild(a);
  });
}

function showTopic(id){
  const topic = topics.find(t=>t.id===id);
  if(!topic) return;
  const content = $('#content');
  content.innerHTML = `<h2>${topic.title}</h2>` + topic.html;
  document.querySelectorAll('.topic-item').forEach(el=>el.classList.toggle('active', el.dataset.id===id));
  location.hash = id;
}

function initSearch(){
  const input = $('#search');
  input.addEventListener('input', ()=>{
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll('.topic-item').forEach(it=>{
      it.style.display = it.innerText.toLowerCase().includes(q) ? 'block' : 'none';
    });
  });
}

function initFromHash(){
  if(location.hash){
    const id = location.hash.slice(1);
    setTimeout(()=> showTopic(id),100);
  }
}

document.addEventListener('DOMContentLoaded', ()=>{renderList();initSearch();initFromHash();});
