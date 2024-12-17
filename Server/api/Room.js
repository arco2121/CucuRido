
const {Deck,Card} = require('./Deck')
const {Guest, Admin} = require('./User')
const AnswerArr = [
    [
      "Una partita a Mario Cart irl con Steven Hawking",
      1
    ],
    [
      "Il B.D.S.M occultato",
      1
    ]
    [
      "Un aborto spontaneo",
      1
    ],
    [
      "La 114",
      1
    ],
    [
      "Un sex-toy per cani",
      1
    ],
    [
      "La mentalità ISIS",
      1
    ],
    [
      "Gli ebrei",
      1
    ],
    [
      "Lo sperma",
      1
    ],
    [
      "Un gelato allo sperma",
      1
    ],
    [
      "Il colpo di grazia ",
      1
    ],
    [
      "I bambini operai di shein",
      1
    ],
    [
      "Il governo meloni",
      1
    ],
    [
      "La tratta degli schiavi",
      1
    ],
    [
      "La morte di Bossetti ",
      1
    ],
    [
      "Essere sulla lista di PDiddy e non saperlo",
      1
    ],
    [
      "La borra",
      1
    ],
    [
      "Brumotti picchiato nelle periferie",
      1
    ],
    [
      "Andare a puttane",
      1
    ],
    [
      "Vendere dischi illegali di Gigi D'Alessio",
      1
    ],
    [
      "Un dito in culo",
      1
    ],
    [
      "Iniziare con un dito e finire con tutto il braccio",
      1
    ],
    [
      "La cappella del papa",
      1
    ],
    [
      "La salumeria privata del clero",
      1
    ],
    [
      "Ringraziare Beyoncé ",
      1
    ],
    [
      "La zia Ermenegilda",
      1
    ],
    [
      "I rom",
      1
    ],
    [
      "Un'esplorazione rettale",
      1
    ],
    [
      "Un limone appassionato dal dubbio consenso",
      1
    ],
    [
      "Lanciare una sedia al compagno di classe speciale",
      1
    ],
    [
      "Il ricatto sessuale",
      1
    ],
    [
      "Manomettere i freni di una sedia a rotelle",
      1
    ],
    [
      "Il comunismo",
      1
    ],
    [
      "Nani da giardino che mostrano il culo ai passanti",
      1
    ],
    [
      "Il discorso di mussolini",
      1
    ],
    [
      "I campi di cotone ripopolati",
      1
    ],
    [
      "Mettere i fiori sulla tomba di Mussolini ",
      1
    ],
    [
      "Bestemmiare in chiesa",
      1
    ],
    [
      "Chiedere a un bambino cieco quante dita ho alzate",
      1
    ],
    [
      "Diffondere il verbo di Geova in un ospedale di malati di cancro",
      1
    ],
    [
      "Dare fuoco ad un asilo nido",
      1
    ],
    [
      "Una gruccia al posto della pillola abortiva ",
      1
    ],
    [
      "L'economia africana ",
      1
    ],
    [
      "Lo sbarco in Normandia ",
      1
    ],
    [
      "Rievocare la marcia su Roma",
      1
    ],
    [
      "Premere il bottone rosso sulla scrivania di Kim Jong-Un",
      1
    ],
    [
      "Lo sverginamento anale brutale",
      1
    ],
    [
      "Riportare il fascismo in Italia ",
      1
    ],
    [
      "Baciare il mio Bro senza omosessualità ",
      1
    ],
    [
      "Pisciare dal buco del culo",
      1
    ],
    [
      "Le mani di Gianni Morandi",
      1
    ],
    [
      "lo scandalo Ferragni",
      1
    ],
    [
      "Aprire un Only Fans con i video della tua ex",
      1
    ],
    [
      "Una pillola di Viagra ",
      1
    ],
    [
      "Sborrarsi accidentalmente in bocca",
      1
    ],
    [
      "Gerry Scotty che spara al Gabibbo",
      1
    ],
    [
      "Il rapimento di Aldo Moro",
      1
    ],
    [
      "La vera identità del Gabibbo",
      1
    ],
    [
      "Ritrovarsi a partorire in un cesso pubblico ",
      1
    ],
    [
      "Volersi scopare la propria figlia adolescente ",
      1
    ],
    [
      "Servire una merda bollita a un ristorante stellato",
      1
    ],
    [
      "Sverginare la suora novizia nel confessionale ",
      1
    ],
    [
      "Offrire una sigaretta a un delfino",
      1
    ],
    [
      "Essere molestato da un piccione curioso",
      1
    ],
    [
      "Il pizzo",
      1
    ],
    [
      "Considerare terroni chi vive sotto il Po' ",
      1
    ],
    [
      "Insultare i neri per moda ",
      1
    ],
    [
      "Criticare l'outfit di un barbone",
      1
    ],
    [
      "Affittare un pony con la sindrome di down",
      1
    ],
    [
      "Un pigiama con le righe e una stella gialla ",
      1
    ],
    [
      "Non andare a prendere la propria fidanzata alle elementari perché ti ha tradito ",
      1
    ],
    [
      "Lezione pratica di educazione sessuale con un prete",
      1
    ],
    [
      "Un'orgia di frati benedettini",
      1
    ],
    [
      "Vivere come in 1984",
      1
    ],
    [
      "Salvare i pesci dall'annegamento",
      1
    ],
    [
      "Tagliare i capelli a qualcuno con una mietitrebbia ",
      1
    ],
    [
      "Il genocidio degli armeni",
      1
    ],
    [
      "Il cancro alla prostata all'ultimo stadio",
      1
    ],
    [
      "Avere la mononucleosi e sputare dal balcone ",
      1
    ],
    [
      "Riscrivere la bibbia",
      1
    ],
    [
      "Fare da chierichetto per fare colpo sulla suora",
      1
    ],
    [
      "L'undici settembre 2111",
      1
    ],
    [
      "Scoprire che il tuo idolo si è suicidato guardando un documentario sulla seconda guerra mondiale ",
      1
    ],
    [
      "Andare in coma etilico bevendo l'ACE Gentile ",
      1
    ],
    [
      "Il comeback di Mozart prima di GTA VI",
      1
    ],
    [
      "La scissione dell'impero romano",
      1
    ],
    [
      "Fare il saluto al sole",
      1
    ],
    [
      "Infornare il tuo figlio gay con patate e rosmarino",
      1
    ],
    [
      "Normalizzare sparare alle persone nere",
      1
    ],
    [
      "Reprimere con la violenza i flashmob",
      1
    ],
    [
      "Comprare il crocifischio dalla lidl",
      1
    ],
    [
      "Dire di essere sieropositivo dopo essere venuto dentro",
      1
    ],
    [
      "Tingersi i peli pubici",
      1
    ],
    [
      "Comprare un tanga con la faccia di Obama",
      1
    ],
    [
      "Usare il naso di pinocchio per altri scopi",
      1
    ],
    [
      "Una pastiglia di cianuro alla fragola per una dolce morte",
      1
    ],
    [
      "Il progetto Bavaro",
      1
    ],
    [
      "Finanziare il ponte sullo stretto",
      1
    ],
    [
      "Asfaltare le coste per evitare gli sbarchi di immigrati ",
      1
    ],
    [
      "Matteo Salvini",
      1
    ],
    [
      "La crescita di uno xenomorpho nel buco del culo",
      1
    ],
    [
      "Convincere l'Unione Europea a finanziare un filmino porno amatoriale",
      1
    ],
    [
      "Evadere le tasse per comprare bimbi all'ingrosso ",
      1
    ],
    [
      "Dei transgender sieropositivi ",
      1
    ],
    [
      "Picchiare il mare per far arrivare le onde",
      1
    ],
    [
      "Scoprire tua madre ad un orgia con suore in una casa di riposo ",
      1
    ],
    [
      "Applicare un razzo a motore ad una sedia a rotelle",
      1
    ],
    [
      "Essere belli come un cesso a pedali ",
      1
    ],
    [
      "Ingravidare una donna col fertilizzante per piante",
      1
    ],
    [
      "Fingersi normali alla cassa mentre si ha un vibratore in culo",
      1
    ],
    [
      "Mettersi un velo e urlare: 'Allah okbar' in aereo",
      1
    ],
    [
      "Accendere una sigaretta sul tetto di Notre Dame",
      1
    ],
    [
      "Il trapassato presente",
      1
    ],
    [
      "Dichiarare guerra alla ex Jugoslavia",
      1
    ],
    [
      "Causare accidentalmente un omicidio di massa",
      1
    ],
    [
      "Una zuppa di fagioli mentre si ha la diarrea fulminante",
      1
    ],
    [
      "Toodles che porta a Topolino una pizza con pesto, rucola e cocaina",
      1
    ],
    [
      "Lavorare con la colla di amianto",
      1
    ],
    [
      "Determinare la massa del sole usando Ruffini",
      1
    ],
    [
      "L'amianto ",
      1
    ],
    [
      "Infilarsi un termometro a mercurio nel culo",
      1
    ],
    [
      "Sciogliere i ghiacciai con un phon",
      1
    ],
    [
      "Urlare 'Pikachu scelgo te!' lanciando un criceto ",
      1
    ],
    [
      "Sbattere la testa sul pavimento da neonati",
      1
    ],
    [
      "Perry l'ornitorinco",
      1
    ],
    [
      "L'ipotenusa del triangolo rettangolo",
      1
    ],
    [
      "Il grande teorema di Pitagora ",
      1
    ],
    [
      "Sfidare leggi della fisica dall'ultimo piano del palazzo",
      1
    ],
    [
      "Leggere il Mein kamf in piazza ad alta voce",
      1
    ],
    [
      "Il trenino Thomas ",
      1
    ],
    [
      "L'aspirapolvere  del teletubbies",
      1
    ],
    [
      "L'infinita vastità del cazzo che me ne frega ",
      1
    ],
    [
      "Le tailandesi",
      1
    ],
    [
      "Duffy Duck che canticchia il motivetto fascista ",
      1
    ],
    [
      "Usare la nutella come lubrificante ",
      1
    ],
    [
      "Il revenge porn",
      1
    ],
    [
      "Il tumore al seno",
      1
    ],
    [
      "L'egemonia dell'Inghilterra sul mare",
      1
    ],
    [
      "Fare la fine di yara ",
      1
    ],
    [
      "Attentati violenti in casa di riposo",
      1
    ],
    [
      "Il cavallo di troia",
      1
    ],
    [
      "Avere dei busti di dubbia provenienza in casa",
      1
    ],
    [
      "Usare i soldi pubblici per insabbiare gli atti di pedofilia nella chiesa",
      1
    ],
    [
      "Fingersi un allievo dell'asilo quando si hanno 61 anni",
      1
    ],
    [
      "Evocare il drago shenron",
      1
    ],
    [
      "Avere 3 cromosomi 21",
      1
    ],
    [
      "Vantarsi di avere cromosomi in più ",
      1
    ],
    [
      "Mettere un cavallo al governo",
      1
    ],
    [
      "Fare un film porno con un cavallo",
      1
    ],
    [
      "Il dottore degli orifizi ",
      1
    ],
    [
      "Pucciare i biscotti nel latte materno",
      1
    ],
    [
      "L'attentato all'arciduca Francesco Ferdinando ",
      1
    ],
    [
      "Usare una palla di cannone in una partita di ping pong",
      1
    ],
    [
      "Una cosa a 3 con Loredana Bertè e Tiziano Ferro",
      1
    ],
    [
      "Attuare un genocidio per il meme",
      1
    ],
    [
      "Per il meme",
      1
    ],
    [
      "Il ventennio fascista",
      1
    ],
    [
      "Praticare sadomaso con Darth Vader",
      1
    ],
    [
      "Tirare fuori excalibur a letto",
      1
    ],
    [
      "Monaco amanuense",
      1
    ],
    [
      "Cantare faccetta nera davanti al parlamento",
      1
    ],
    [
      "Una torsione testicolare",
      1
    ],
    [
      "Le lesbiche",
      1
    ],
    [
      "I froci",
      1
    ],
    [
      "Accusare un trans di essere un transformer",
      1
    ],
    [
      "Usare i dolci per rapire i bimbi in un parco",
      1
    ],
    [
      "Investire bitcoin in una pornoattrice",
      1
    ],
    [
      "Peppa pig alla griglia ",
      1
    ],
    [
      "Buttarsi da un pallazzo per testare l'aerodinamicità del proprio corpo",
      1
    ],
    [
      "Essere bravi a infornare come i tedeschi negli anni 41",
      1
    ],
    [
      "I bravi di don Rodrigo",
      1
    ],
    [
      "1111 bottiglie di baby oil",
      1
    ],
    [
      "Il mostro di Firenze",
      1
    ],
    [
      "Usare un calibro per misurarsi il cazzo",
      1
    ],
    [
      "Sperimentare il paradosso del gatto di Schrodinger con il tuo cuginetto ",
      1
    ],
    [
      "I compagni di merende",
      1
    ],
    [
      "Dare un grissino sporco di merda a un bambino spacciandolo per un Mikado ",
      1
    ],
    [
      "L'elicottero col cazzo",
      1
    ],
    [
      "Evocare Belzebub",
      1
    ],
    [
      "Vestirsi da nazista ad un gay pride ",
      1
    ],
    [
      "Mettere I BTS a capo della Corea del Nord",
      1
    ],
    [
      "Un allegro weekend a Catanzaro",
      1
    ],
    [
      "Sborrare nella bocca di un'antilope",
      1
    ],
    [
      "La teoria dell'evoluzionismo",
      1
    ],
    [
      "Essere l'assassino di Hitler",
      1
    ],
    [
      "Usare la moltiplicazione del corpo di Naruto per entrare in tutti i buchi",
      1
    ],
    [
      "Vivere tutta la vita con un vibratore nel culo",
      1
    ],
    [
      "Anna calda a 3 cm da te",
      1
    ],
    [
      "Ha fatto anche cose buone",
      1
    ],
    [
      "Quando c'era lui i treni arrivavano in orario",
      1
    ],
    [
      "La madonna caraibica",
      1
    ],
    [
      "Invadere la Polonia",
      1
    ],
    [
      "L'impresa dei mille",
      1
    ],
    [
      "Nuclearizzare Foggia",
      1
    ],
    [
      "Il Vesuvio erutta a Napoli",
      1
    ],
    [
      "L'amore incondizionato dei fiorentini per i pisani",
      1
    ],
    [
      "Il comune emiliano di Sesso",
      1
    ],
    [
      "Rapire e uccidere Yara",
      1
    ],
    [
      "Essere innocente come Bossetti",
      1
    ],
    [
      "Jack lo Squirtatroie",
      1
    ],
    [
      "IT'S OVER NINE THOUSAND!!!!!",
      1
    ],
    [
      "Trovare un arto umano a casa del tipo conosciuto su tinder",
      1
    ],
    [
      "Evadere il fisco come Jeff Bezoz",
      1
    ],
    [
      "Sussurrare all'orecchio del vicino di urinatoio",
      1
    ],
    [
      "Occuparsi della fauna locale come il Trentino Alto Adige",
      1
    ],
    [
      "Le suffragette ",
      1
    ],
    [
      "Sessualizzare il demogorgone",
      1
    ],
    [
      "Il cast della melevisione in un video porno",
      1
    ],
    [
      "Circoncidersi con una pinzatrice rosa",
      1
    ],
    [
      "Bombardare il Vietnam col napalm",
      1
    ],
    [
      "Infilarsi un plug anale nella cappella",
      1
    ],
    [
      "Strizzare i capezzoli ad un toro",
      1
    ],
    [
      "Mungere il prof di matematica napoletano per la sufficienza ",
      1
    ],
    [
      "ll processo di Norimberga",
      1
    ],
    [
      "Esplodere come tuo zio musulmano ",
      1
    ],
    [
      "Rizzare le dodicenni ",
      1
    ],
    [
      "Diventare luterani per un giorno",
      1
    ],
    [
      "I diritti delle donne",
      1
    ],
    [
      "La fiera dell'est",
      1
    ],
    [
      "Vote Kamala for president ",
      1
    ],
    [
      "Trump come nuovo protagonosta di Matrix ",
      1
    ],
    [
      "Giocare a Risiko con eserciti veri",
      1
    ],
    [
      "Fare un bagno termale nel Vesuvio",
      1
    ],
    [
      "La durezza del mio pene quando canta Annalisa ",
      1
    ],
    [
      "Calcolare la dilatazione anale dopo il fisting con il teorema di Pitagora",
      1
    ],
    [
      "Una cenetta romantica ispirata a Jeffrey Dahmer",
      1
    ],
    [
      "Usare la borra al posto della crema pasticcera ",
      1
    ],
    [
      "Chiedere a un bimbo orfano dove sono i suoi genitori",
      1
    ],
    [
      "Le rule 34 di JoJo Siwa",
      1
    ],
    [
      "Liberare i bimbi dallo scantinato",
      1
    ],
    [
      "Raggiungere l'uguaglianza schiarendo la pelle ai neri",
      1
    ],
    [
      "Raggiungere l'orgasmo con due dita nel naso",
      1
    ],
    [
      "Ficcarsi due dita e una matita negli occhi ",
      1
    ],
    [
      "Sciacquarsi le palle nella bacinella dell'acqua santa",
      1
    ],
    [
      "Disegnare forme falliche sulle lapidi al cimitero ",
      1
    ],
    [
      "Un chilo di bamba ",
      1
    ],
    [
      "Dei lecca lecca al gusto gonorrea ",
      1
    ],
    [
      "Un clitoride placcato oro",
      1
    ],
    [
      "Tagliare il cordone ombelicale sbagliato al neonato",
      1
    ],
    [
      "Chiara Facchetti che salda il debito pubblico italiano",
      1
    ],
    [
      "Trombare un lampione in pieno giorno",
      1
    ],
    [
      "Bere le cristalline acque del Brenta",
      1
    ],
    [
      "Eiaculare tanto da farsi venire un'ernia ai coglioni",
      1
    ],
    [
      "Inzuppare il tampax nella vodka",
      1
    ],
    [
      "Togliersi il preservativo prima di venire ",
      1
    ],
    [
      "Regalare preservativi bucati",
      1
    ],
    [
      "Le zingare che rubano nella metro di Milano",
      1
    ],
    [
      "Cagare a spruzzo in un vicolo buio e malfamato",
      1
    ],
    [
      "Portare la classe dei bambini speciali in gita a Chernobyl",
      1
    ],
    [
      "Fingersi gay per toccare una tetta",
      1
    ],
    [
      "Disegnare cazzi anatomicamente accurati",
      1
    ],
    [
      "Ruttare sui polli",
      1
    ],
    [
      "Usare un tubo di pringles come sex toy",
      1
    ],
    [
      "Dirigere un bombardamento aereo contro la Moldavia ",
      1
    ],
    [
      "Risolvere il problema dell'immigrazione in Italia cancellando Lampedusa",
      1
    ],
    [
      "I bambini nascosti sotto il letto di Michael Jackson",
      1
    ],
    [
      "L'umidità della mia figa quando vedo Conte",
      1
    ],
    [
      "Scambiare pedopornografia nel parchetto cittadino",
      1
    ],
    [
      "Scopare con il datore di lavoro",
      1
    ],
    [
      "Lavarsi i genitali con vodka alla fragola e nitroglicerina",
      1
    ],
    [
      "Arrivare in ritardo al proprio funerale ",
      1
    ],
    [
      "Un pupazzo dei My Little Pony con un buco speciale ",
      1
    ],
    [
      "Un elefante tandem psichico da guerra ",
      1
    ],
    [
      "Far cadere la saponetta di proposito nelle docce della prigione",
      1
    ],
    [
      "Succhiare un cazzo fino a che non sborra",
      1
    ],
    [
      "Ficcarsi 3 procioni bel culo",
      1
    ],
    [
      "Usare la calcolatrice per fare 1+1",
      1
    ],
    [
      "Bere Jager dal bidè a casa della prozia",
      1
    ],
    [
      "Morire di diarrea fulminea",
      1
    ],
    [
      "Tornare indietro nel tempo solo per farsi fare un autografo da Hitler ",
      1
    ],
    [
      "Tornare indietro nel tempo per farsi fare un pompino da Marilyn Monroe",
      1
    ],
    [
      "Fumare la marijuana dal culo",
      1
    ],
    [
      "Sniffare le ceneri della nonna",
      1
    ],
    [
      "Usare le ceneri del cane come parmigiano ",
      1
    ],
    [
      "Praticare tuffi olimpici nella vasca da bagno",
      1
    ],
    [
      "Praticare il Kamasutra al pranzo di natale ",
      1
    ],
    [
      "Togliersi le costole per fare come D'Annunzio",
      1
    ],
    [
      "Orietta Berti ",
      1
    ],
    [
      "Anna Frank ",
      1
    ],
    [
      "Malgioglio",
      1
    ],
    [
      "Rocco Siffredi ",
      1
    ],
    [
      "Maria de Filippi ",
      1
    ],
    [
      "Alberto Angela ",
      1
    ],
    [
      "Inserire tua sorella nel database degli SCP",
      1
    ],
    [
      "Spiegare l'apologia cristiana suonando una vuvuzela",
      1
    ],
    [
      "Fabrizio Corona che si incula con un complesso sistema di leve e specchi",
      1
    ],
    [
      "Una ninna nanna suonata con un flauto dolce nel naso",
      1
    ],
    [
      "Uno spiedino ti topi fritti in pastella",
      1
    ],
    [
      "Strozzarsi con una mozzarella aromatizzata all'uranio ",
      1
    ],
    [
      "Prendere 3 pastiglie di viagra per inchiappettare un puffo",
      1
    ],
    [
      "Le attività extraconiugali ",
      1
    ],
    [
      "L'astinenza",
      1
    ],
    [
      "Gesù inculato dalla Madonna con un dildo rosa",
      1
    ],
    [
      "Usare la cocaina al posto della farina per preparare una torta per la vendita di beneficenza.",
      1
    ],
    [
      "L'ospedale pediatrico sotto attacco di israele ",
      1
    ],
    [
      "Un Charizard con tendenze neonaziste",
      1
    ],
    [
      "Sparare mensole dagli occhi",
      1
    ],
    [
      "Kaaaaaamehaaaaamehaaaaaa",
      1
    ],
    [
      "Fare sesso non protetto con la propria madre",
      1
    ],
    [
      "Unboxare falli di gomma su youtube kids",
      1
    ],
    [
      "Uscire le tette per curare i malati di Alzheimer ",
      1
    ],
    [
      "Mussolini che fa l'ahegao",
      1
    ],
    [
      "Lavarsi i capelli con l'olio della friggitrice",
      1
    ],
    [
      "Shrek",
      1
    ],
    [
      "Chiudere tua moglie incinta in balcone d'inverno ",
      1
    ],
    [
      "La fede in dio di Germano Mosconi ",
      1
    ],
    [
      "Clara di Heidi",
      1
    ],
    [
      "Il discorso del duce",
      1
    ],
    [
      "Bazinga",
      1
    ],
    [
      "Usare il mantello dell'invisibilità per segarsi nello spogliatoio delle ragazze",
      1
    ],
    [
      "Accorgersi di avere tendenze necrofile",
      1
    ],
    [
      "Attraversare l'autostrada per catturare un Pikachu ",
      1
    ],
    [
      "Uccidere il proprio figlio a badilate perché gli piace Peppa Pig",
      1
    ],
    [
      "Presentarsi armati ad un concorso di monache austriache",
      1
    ],
    [
      "Organizzare la corrida con i comunisti",
      1
    ],
    [
      "Far dichiarare bancarotta a un sexy shop",
      1
    ],
    [
      "Farsi un piercing al cazzo",
      1
    ],
    [
      "Infilare il proprio braccio nel culo",
      1
    ],
    [
      "Terrorizzare i bambini col costume di Berlusconi",
      1
    ],
    [
      "Proclamare lo stato d'assedio",
      1
    ],
    [
      "Avere un orgasmo dopo aver assaggiato la torta alle mele",
      1
    ],
    [
      "Un cosplay hentai",
      1
    ],
    [
      "Michael Jackson che si stringe le mani per ricreare la pubblicità dei ringo",
      1
    ],
    [
      "Igniettarsi la candeggina in vena per combattere il covid",
      1
    ],
    [
      "Il mio cazzo come emoji",
      1
    ],
    [
      "L'occhio di Sauron",
      1
    ],
    [
      "Organizzazione la corrida in un asilo nido",
      1
    ],
    [
      "Fare sogni bagnati su una babooshka ",
      1
    ],
    [
      "Farsi segare da una persona col parkinson ",
      1
    ],
    [
      "Saetta McQueen ",
      1
    ],
    [
      "Dio Portatore di Tuoni",
      1
    ],
    [
      "Usare Steve Hawking per il live action di cars",
      1
    ],
    [
      "dio bestia da soma in minia toma in minia soma in minia mosa in miniatura",
      1
    ],
    [
      "Utilizzare una moka per costruire un reattore nucleare",
      1
    ],
    [
      "L'odore di pube di topo",
      1
    ],
    [
      "I dossi davanti all'asilo",
      1
    ],
    [
      "Chiara Facchetti",
      1
    ],
    [
      "L'impero asburgico",
      1
    ],
    [
      "Le 23 pugnalate di Giulio Cesare",
      1
    ],
    [
      "Il nonnismo",
      1
    ],
    [
      "L'encefalite acuta",
      1
    ],
    [
      "Accendere il riscaldamento come Nerone ha fatto a Roma",
      1
    ],
    [
      "Diventare sborraman",
      1
    ],
    [
      "Infilarsi le due torri gemelle in culo",
      1
    ],
    [
      "Fare sesso non protetto con la nonna dei croods ",
      1
    ],
    [
      "Il trono di cazzi",
      1
    ],
    [
      "Perry l'ornitorinco",
      1
    ],
    [
      "Scopare il gemello del tuo fidanzato",
      1
    ],
    [
      "Scopare il gemello della tua fidanzata",
      1
    ],
    [
      "Lo sciopero contro i diritti delle donne",
      1
    ],
    [
      "Rifarsi le tette per fare un titjob migliore",
      1
    ],
    [
      "Tua madre",
      1
    ],
    [
      "Biancaneve e i 7 cazzi",
      1
    ],
    [
      "Armando(della Pimpa)",
      1
    ],
    [
      "Dormire in un letto da mezza piazza per evitare il sesso a sorpresa",
      1
    ],
    [
      "Freddy fazbear",
      1
    ],
    [
      "Kermit la rana",
      1
    ],
    [
      "Il bastone di Jack frost",
      1
    ],
    [
      "Un'ustione di quinto grado",
      1
    ],
    [
      "Svenire dopo aver visto una figa",
      1
    ],
    [
      "Una sega con i piedi",
      1
    ],
    [
      "Lucia Mondella",
      1
    ],
    [
      "Torquato Tasso",
      1
    ],
    [
      "Raggiungere le note di Ariana Grande mentre cavalchi un cazzo",
      1
    ],
    [
      "Sganciare una mega scoraggia in un'ascensore affollato ",
      1
    ],
    [
      "Gumball watterson",
      1
    ],
    [
      "Lavorare alle 3 di notte in autostrada",
      1
    ],
    [
      "Andare a disoneste",
      1
    ],
    [
      "Mettere in punizione i tuoi amici perché sono troppo freaky",
      1
    ],
    [
      "Il dissing dei me contro te",
      1
    ],
    [
      "Tatuarsi l'occhio degli illuminati sul buco del culo",
      1
    ],
    [
      "Dio aeroplano nella valle delle torri",
      1
    ],
    [
      "Riprendere fiume",
      1
    ],
    [
      "Il secondo triumvirato ",
      1
    ],
    [
      "Raccontare le proprie esperienze sessuali al club del libro",
      1
    ],
    [
      "Assaggiare i reagenti colorati nel laboratorio di chimica",
      1
    ],
    [
      "Avere un duello al funerale di tuo nonno",
      1
    ],
    [
      "Essere investiti da un aereo",
      1
    ],
    [
      "Eccitare il clitoride fino all'orgasmo",
      1
    ],
    [
      "L'ergastolo per aver rubato un pacchetto di carte pokemon",
      1
    ],
    [
      "Una lesbica futurista",
      1
    ],
    [
      "Essere ingravidati da Mahmood con lo sguardo",
      1
    ],
    [
      "Rosario muniz",
      1
    ],
    [
      "Un pandoro farcito con la sborra",
      1
    ],
    [
      "Dichiarare a guerra all'Algeria ",
      1
    ],
    [
      "Un orgasmo a mani libere",
      1
    ],
    [
      "Impalato dal dio bestia",
      1
    ],
    [
      "Un satanasso molto promiscuo ",
      1
    ],
    [
      "Ruttare come una principessa camionista",
      1
    ],
    [
      "Essere calpestato da un cazzone",
      1
    ],
    [
      "Un bagno termale nel Vesuvio ",
      1
    ],
    [
      "Napoli a fuoco",
      1
    ],
    [
      "Castrare i terroni",
      1
    ],
    [
      "Correre scalzi nei prati sotto l'effetto di droghe pesanti ",
      1
    ],
    [
      "Infilare le palle in un orologio a pendolo che ha al posto del pendolo un ascia",
      1
    ],
    [
      "Smerdarsi nei calzoni in classe",
      1
    ],
    [
      "Pomiciare con i paramedici venuti a soccorrere tuo padre",
      1
    ],
    [
      "Vomitare vodka e funghetti allucinogeni in corsia 2 al conad",
      1
    ],
    [
      "Togliersi la vita con una bottiglietta di plastica",
      1
    ],
    [
      "'Eh sì eh Marco eh B porterai minecreft?'",
      1
    ],
    [
      "Infilarsi del potassio puro su per il culo per diventare un razzo",
      1
    ],
    [
      "Evocare un demone per passare una seratina esotica",
      1
    ],
    [
      "Svegliarsi senza un rene dopo una seratina romantica ",
      1
    ],
    [
      "Farsi frati per non essere chiamati alle armi",
      1
    ],
    [
      "Farsi suora per non finire a letto con altri casi umani",
      1
    ],
    [
      "Gerry Scotti",
      1
    ],
    [
      "Un catetere",
      1
    ],
    [
      "Sniffare cocaina dal buco del culo",
      1
    ],
    [
      "Giocare a rugby con un neonato come palla",
      1
    ],
    [
      "Un'orgia con Meloni, Di Maio e Salvini",
      1
    ],
    [
      "Mangiare un peperoncino per sputare fiamme dal culo",
      1
    ],
    [
      "Maurizio Merluzzo in drag",
      1
    ],
    [
      "Eccitarsi alla vista del necrologio del giorno",
      1
    ],
    [
      "Usare il proprio jet privato per fare una passeggiatina con il cane",
      1
    ],
    [
      "Wanna Marchi",
      1
    ],
    [
      "Elenoire ferruzzi",
      1
    ],
    [
      "Pulirsi il culo con delle unghie da 51 cm",
      1
    ],
    [
      "Il phon accesso nella vasca da bagno",
      1
    ],
    [
      "Adorare le donne che sanno di merluzzo",
      1
    ],
    [
      "Il sesso non protetto nel giardino dell'Eden",
      1
    ],
    [
      "Portare ad ebollizione la sborra",
      1
    ],
    [
      "Francesca cipriani",
      1
    ],
    [
      "Paolo bonolis",
      1
    ],
    [
      "Donatella versace",
      1
    ],
    [
      "Blanco ",
      1
    ],
    [
      "Peppe Brescia ",
      1
    ],
    [
      "Peppe fetish",
      1
    ],
    [
      "Rita de Crescenzo ",
      1
    ],
    [
      "Il gelato al profilattico",
      1
    ],
    [
      "Essere dissati da favij",
      1
    ],
    [
      "Lo scandalo di Chiara Ferragni e il pandoro",
      1
    ],
    [
      "Le emorroidi a colazione",
      1
    ],
    [
      "Lo strumentopolo misterioso di Topolino",
      1
    ],
    [
      "Essere picchiati da papa Francesco ",
      1
    ],
    [
      "Una sfida a super smash bros con baby k",
      1
    ],
    [
      "Urlare 'maledettiiii!' davanti a un giornalista",
      1
    ],
    [
      "Urlare 'Teresaaaa' davanti a un giornalista",
      1
    ]
]
const QuestionsArr = [
    [
      "_ è buono, ma _ è molto meglio!",
      2
    ],
    [
      "_ è un ottimo rimedio per il cancro",
      1
    ],
    [
      "La felicità è _",
      1
    ],
    [
      "Pensare a _ ti farà solo soffrire",
      1
    ],
    [
      "_ è stata la cosa più bella della mia vita",
      1
    ],
    [
      "Non raggiungo l'orgasmo senza pensare a _",
      1
    ],
    [
      "Hai mai provato a _ ? Ti cambia la vita da così a così!",
      1
    ],
    [
      "Ti voglio bene ma capirai che _ non è una cosa accettabile",
      1
    ],
    [
      "_ è una cosa che viene tramandata con amore da padre in figlio da generazioni",
      1
    ],
    [
      "Il mio love language è _",
      1
    ],
    [
      "Chi cerca il benessere lo trova in _",
      1
    ],
    [
      "Pensare a _ è l'unica cosa che mi fa dormire seren*",
      1
    ],
    [
      "_ è un'esperienza che mi ha cambiato la vita",
      1
    ],
    [
      "Non ero attent* a lezione perché pensavo a _",
      1
    ],
    [
      "Ho piacevolmente discusso di _ con il mio prof di religione",
      1
    ],
    [
      "Per risolvere il suo problema ha solo bisogno di _",
      1
    ],
    [
      "Pensi che _ sia una leggitimazione per combattere _ ?",
      2
    ],
    [
      "Se fossi re donerei _ a tutta la popolazione",
      1
    ],
    [
      "Quando c'era lui bastava _ per essere felici",
      1
    ],
    [
      "Se continui ad evitare _ la conseguenza sarà _",
      2
    ],
    [
      "Nello spettacolo di ieri io ho interpretato _ che _ , il pubblico è stato così commosso che ha deciso di _",
      3
    ],
    [
      "La mancia della nonna mi permetterà di prendere _",
      1
    ],
    [
      "Non capisco la lingua dei segni, non è che per caso potresti _?",
      1
    ],
    [
      "Penso che _ sia un fattore fondante della società moderna, ma senza _ questa non sarebbe nata",
      2
    ],
    [
      "È inutile che mi dici di _ , la mia idea di _ è sempre la migliore",
      2
    ],
    [
      "Dovevi esserci quando Michael Jackson ha fatto la sua iconica performance con _",
      1
    ],
    [
      "Dovevo studiare, ma ho preferito _",
      1
    ],
    [
      "_ , i soldi sono soldi",
      1
    ],
    [
      "_ sono il nemico della società, basterebbe _ e il mondo sarebbe migliore",
      2
    ],
    [
      "Come osi criticare _ , senza non saresti qui",
      1
    ],
    [
      "La NASA ha inviato nello spazio _",
      1
    ],
    [
      "Quella ragazza trema, deve aver visto _",
      1
    ],
    [
      "Preferiresti _ per tutta la vita oppure avere _ nell'armadio",
      2
    ],
    [
      "Quando andavo all'asilo mi divertivo a _",
      1
    ],
    [
      "Come compito per casa devo _",
      1
    ],
    [
      "Ieri ho visto _ , sembrava più felice del solito",
      1
    ],
    [
      "Il mio roman empire è _",
      1
    ],
    [
      "Secondo l'oroscopo è l'ora di _ , ma preferisco rimanere a casa mia con  _",
      2
    ],
    [
      "_ è un modo per fermare la guerra",
      1
    ],
    [
      "Non mi piace il pene ma per _ un pompino lo farei",
      1
    ],
    [
      "Il bottone rosso nella Casa Bianca serve per _",
      1
    ],
    [
      "Sei così stupid* che saresti in grado di _",
      1
    ],
    [
      "_ . Aura +9999",
      1
    ],
    [
      "Venderei la prof di inglese per _",
      1
    ],
    [
      "Ardua scelta: _ o _",
      2
    ],
    [
      "Per lavarmi la coscienza ho deciso di _",
      1
    ],
    [
      "Per essere il migliore serve _",
      1
    ],
    [
      "Il nemico numero uno di Carlo Conti è _",
      1
    ],
    [
      "_ è stata la cosa più brutta degli ultimi tempi",
      1
    ],
    [
      "Non è un venerdì sera senza _",
      1
    ],
    [
      "Questo weekend il solito: venerdì sera _ , sabato _ e domenica mattina _",
      3
    ],
    [
      "_ : i ricordi del Vietnam",
      1
    ],
    [
      "Contattare c'è Posta Per Te per _",
      1
    ],
    [
      "_ è andat* ad Amici",
      1
    ],
    [
      "_ dovrebbe essere integrato nel programma scolastico ",
      1
    ],
    [
      "_ ! Ne hanno parlato a Forum",
      1
    ],
    [
      "Soluzione per un appartamento perfetto? _",
      1
    ],
    [
      "Dopo 30 anni di matrimonio io e mio marito abbiamo trovato un modo per mantenere viva la passione: _",
      1
    ],
    [
      "Ogni brava moglie cristiana sa che è necessario _",
      1
    ],
    [
      "_ ha causato l'esplosione del Titan",
      1
    ],
    [
      "_ è il motivo per cui dio ha fatto estinguere i dinosauri",
      1
    ],
    [
      "Sono cresciut* con Pokémon, Yu-Gi-Oh e _",
      1
    ],
    [
      "Ho scoperto un subreddit a tema _ . Quante risate!",
      1
    ],
    [
      "Spareresti al tuo migliore amico in cambio di _",
      1
    ],
    [
      "_ può capitare",
      1
    ],
    [
      "La cosa che amo più delle ragazze è _",
      1
    ],
    [
      "_ lo dico tutte le mattine appena svegliat*!",
      1
    ],
    [
      "Spendida giornata per _",
      1
    ],
    [
      "Amanda mi ha regalato il nuovo profumo di chanel e _",
      1
    ],
    [
      "L'imputato, colpevole di aver _ , era in realtà innocente",
      1
    ],
    [
      "Nel nuovo film di inside out 3 l'emozione principale sarà _",
      1
    ],
    [
      "_ . Disse il mostro di Firenze in tribunale",
      1
    ],
    [
      "'Vai al supermercato, prendimi _ e _ , poi compra quel che vuoi' 'va bene, anche _?' 'va bene, i bisogni sono bisogni'",
      3
    ],
    [
      "Usare _ come giocattolo anale non è molto conveniente",
      1
    ],
    [
      "Divorzio di Chiara Ferragni e Fedez, sentiamo cosa ne pensa _ !",
      1
    ],
    [
      "Voglio _ adesso! In questo esatto istante!",
      1
    ],
    [
      "Se non hai mai provato _ , dovresti chiedere a suor Claudia, è un'esperta",
      1
    ],
    [
      "L'undicesimo comandamento, mai citato nei libri di chiesa, mi pare che sia riguardo a _, ma non ne sono certo",
      1
    ],
    [
      "I libri di storia descrivono l'ascesa di Mussoli come _",
      1
    ],
    [
      "Solo un vero critico letterario può capire che dietro la figura di Leopardi si celava _",
      1
    ],
    [
      "_ : perfetto per quando ho del tempo libero",
      1
    ],
    [
      "_ è una brutta abitudine",
      1
    ],
    [
      "Per buttare giù un po' di chili dovresti iniziare a _",
      1
    ],
    [
      "In Georgia usano _ per mangiare la zuppa",
      1
    ],
    [
      "'Topolino e _' il nuovo fumetto a soli 3,50€ in edicola",
      1
    ],
    [
      "_ , disse il poeta guardando il cielo stellato",
      1
    ],
    [
      "Ogni stagione ha i propri bisogni: primavera: _ , estate: _ , autunno:  _ e inverno: _",
      4
    ],
    [
      "Ho preso 3 perchè non ho saputo come _",
      1
    ],
    [
      "Il medico consiglia _ come lubrificante prima di un rapporto anale",
      1
    ],
    [
      "_ a 90° sul letto della pimpa",
      1
    ],
    [
      "_ , da aggiungere alla smash cake",
      1
    ],
    [
      "Ma solo io mi ricordo quell'episodio di Dora l'esploratrice intitolato _",
      1
    ],
    [
      "Sulla tomba voglio scrivere 'ho vissuto una vita fatta di sesso, droga e _'",
      1
    ],
    [
      "Il mio cane non smette di _",
      1
    ],
    [
      "Per problemi come _ digitare 1, se invece ha bisogno di _ digitare 2",
      2
    ],
    [
      "_ MA È INACETTABILE, DISONESTO, IL PEGGIO DEL PEGGIO!",
      1
    ],
    [
      "Non riesci a toglierti dalla mente _? Semplice, Bevi per dimenticare",
      1
    ],
    [
      "L'italia ha inviato _ per aiutare i bimbi afghani",
      1
    ],
    [
      "_ , è questo il motivo della mia diarrea dottore",
      1
    ],
    [
      "Non c'è pace prima di _",
      1
    ],
    [
      "Qual è il mio superpotere? _",
      1
    ],
    [
      "_ , il premio nobel per la scienza di quest'anno",
      1
    ],
    [
      "Il cast del film che ha vinto gli Oscar aveva _ e _ ,  era una storia d'amore, finita male",
      2
    ],
    [
      "Ho trovato come sorpresa nell'uovo di pasqua _",
      1
    ],
    [
      "Prendo l'happy meal solo per _",
      1
    ],
    [
      "_ , testato dai bambini, approvato dalle madri",
      1
    ],
    [
      "La voce nella mia testa mi dice di _",
      1
    ],
    [
      "I vicini continuano a _ da stamattina",
      1
    ],
    [
      "Alla fiera dell'est per due soldi _ mio padre comprò",
      1
    ],
    [
      "Il nuovo regolamento scolastico stabilisce che è vietato _",
      1
    ],
    [
      "Non sono riuscito a studiare per colpa di _",
      1
    ],
    [
      "Per mostrare solidarietà dopo le partite di calcio, il gesto dei calciatori è _",
      1
    ],
    [
      "Se la vita ti dà dei limoni, facci _",
      1
    ],
    [
      "Papà, io da grande voglio essere _",
      1
    ],
    [
      "Il tempo è _",
      1
    ],
    [
      "_ mi sembra un po' too much",
      1
    ],
    [
      "_ è demure",
      1
    ],
    [
      "_ non è demure, ma Brat",
      1
    ],
    [
      "_ non può mancare a Natale",
      1
    ],
    [
      "_ mi rende eccitatissim*",
      1
    ],
    [
      "Non ho tempo di cucinare, prenderò _ d'asporto",
      1
    ],
    [
      "Invece del carbone la befana porta ora ai bambini cattivi _",
      1
    ],
    [
      "_ buono fino all'ultima goccia",
      1
    ],
    [
      "_ fece finire la mia ultima relazione",
      1
    ],
    [
      "Allerta meteo! Sulla penisola potrebbe arrivare _",
      1
    ],
    [
      "Le persone anziane odorano di _",
      1
    ],
    [
      "Salvini preferirebbe _ ai neri",
      1
    ],
    [
      "_ fu la chiave di volta per il caso Orlandi",
      1
    ],
    [
      "Non so con cosa verrà combattuto la terza guerra mondiale, ma nella quarta si useranno _",
      1
    ],
    [
      "_ . Raccomando da 9 dentisti su 10",
      1
    ],
    [
      "Prossimamente su Rai sport 2: i mondiali di _",
      1
    ],
    [
      "Se dovesse finire il mondo vorrei solo un'ultima cosa: _",
      1
    ],
    [
      "Nel kit di soppravvivenza non può mancare _",
      1
    ],
    [
      "La scuola insegna anche a _",
      1
    ],
    [
      "Quali sono i 3 desideri che chiederesti al genio della lampada? _ , _ e _",
      3
    ],
    [
      "Mi son dimenticat* di _",
      1
    ],
    [
      "_ . Così è come voglio morire!",
      1
    ],
    [
      "In un mondo depredato da _ , il nostro unico conforto è _",
      2
    ],
    [
      "Ho un sacco di problemi, ma _ non è fra questi",
      1
    ],
    [
      "_ è la cosa più emo che abbiamo mai fatto",
      1
    ],
    [
      "_ non esiste, non può farti del male",
      1
    ],
    [
      "Dimenticate la ruota! L'invenzione più rivoluzionaria è _",
      1
    ],
    [
      "_ sarà il focus del prossimo DLC di The Sims 4",
      1
    ],
    [
      "Hear me out! _ e _",
      2
    ]
]
const Alpha = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890"
const points = 5

class RoomPool
{
    constructor()
    {
        this.rooms = []
    }

    Create(adminName,adminid)
    {
        while(true)
        {
            const room = new Room(adminName,adminid)
            if(this.Find(room.id) == -1)
            {
                this.rooms.push(room)
                return room
            }
        }
    }

    Destroy(roomid)
    {
        const i = this.Find(roomid)
        if(i != -1)
        {
            let temp = []
            for(let j = 0; j<this.rooms.length;j++)
            {
                if(j != i)
                {
                    temp.push(this.rooms[j])
                }
            }
            this.rooms = temp
        }
    }

    Find(roomid)
    {
        for(let i = 0; i<this.rooms.length;i++)
        {
            if(roomid == this.rooms[i].id)
            {
                return i
            }
        }
        return -1
    }

    FindRoom(roomid)
    {
        for(let i = 0; i<this.rooms.length;i++)
        {
            if(roomid == this.rooms[i].id)
            {
                return this.rooms[i]
            }
        }
        return null
    }

    FindRoomByUser(socketId) 
    {
      for (let i = 0; i<this.rooms.length;i++)
      {
          const user = this.rooms[i].FindUser(socketId)
          if (user) 
          {
              return this.rooms[i]
          }
      }
      return null
    }
}

class Room
{
    constructor(adminName,adminid) 
    {
        this.id = this.RandomId(20)
        this.admin = new Admin(adminName,adminid)
        let i = 0
        this.Questions = new Deck(QuestionsArr.map(ele => {
          new Card(ele[0],i,ele[1]);
          i++;
        }));
        i = 0;
        this.Answers = new Deck(AnswerArr.map(ele => {
          new Card(ele[0],i,ele[1]);
          i++;
        }))
        this.admin.cards.Insert(this.Answers.Pick(11))
        this.users = [this.admin]
        this.RoundNumber = 1;
        this.Asker = this.admin
        this.LastAsker = this.admin
        this.CurrentRound = {
            count: 0,
            question: null,
            answers: [],
            isRound: false,
        }
    }

    Add(name,id)
    {
        if(this.CurrentRound.isRound)
        {
            return null
        }
        const user = new Guest(name,id)
        user.cards.Insert(this.Answers.Pick(11))
        this.users.push(user)
        return user
    }

    StartRound()
    {
        if(this.users.length > 0)
        {
          this.RoundNumber++
          this.CurrentRound.isRound = true
          const question = this.Questions.Pick(1)
          console.log(question)
          this.CurrentRound.question = question
          return true
        }
        else
        {
          return false
        }
    }

    GetAnswers()
    {
        if(this.CurrentRound.count == this.users.length && this.CurrentRound.isRound)
        {
            return this.CurrentRound.answers
        }
        else 
        {
            return null
        }
    }

    EndRound(idunic)
    {
        const user = this.FindUser(idunic)
        user.point += points
        this.Asker.IsAsking = false
        this.LastAsker = this.Asker
        this.Asker = user
        this.Asker.IsAsking = true
        this.CurrentRound = {
            count: 0,
            question: null,
            answers: [],
            isRound: false,
        }
    }

    ResultGame()
    {
        const maxPoints = Math.max(...this.users.map(user => user.point))
        return this.users.filter(user => user.point == maxPoints)
    }

    ReceiveAnswer(idunic,indexcards)
    {
        const use = this.FindUser(idunic)
        if(!use || this.CurrentRound.answers.find(ele => ele[0].unicid == idunic))
        {
            return null
        }
        const card = use.cards.PickCard(indexcards)
        const y = this.Answers.Pick(indexcards.length)
        if(!y)
        {
            return null
        }
        use.cards.Insert(y)
        this.Answers.Insert(card)
        this.CurrentRound.answers.push([use,card])
        this.CurrentRound.count++
    }

    RandomId(len)
    {
        let temp = ""
        let prev = ""
        for(let i = 0; i<len;i++)
        {
            let letter = Alpha[Math.floor(Math.random() * Alpha.length)]
            while(letter == prev)
            {
                letter = Alpha[Math.floor(Math.random() * Alpha.length)]
            }
            temp += letter
            prev = letter
        }
        return temp
    }

    Find(userid)
    {
        for(let i = 0; i<this.users.length;i++)
        {
            if(userid == this.users[i].unicid)
            {
                return i
            }
        }
        return -1
    }

    FindUser(idunic) 
    {
        for(let i = 0; i < this.users.length; i++) 
        {
            if(idunic == this.users[i].unicid) 
            {
                return this.users[i]
            }
        }
        return null
    }

    DestroyUser(userid)
    {
        const i = this.Find(userid)
        if(i != -1)
        {
            let temp = []
            for(let j = 0; j<this.users.length;j++)
            {
                if(j != i)
                {
                    temp.push(this.users[j])
                }
            }
            this.users = temp
        }
        if(this.CurrentRound.isRound)
        {
            const l = this.CurrentRound.answers.findIndex(ele => ele[0].unicid == userid)
            if(l != -1)
            {
                let temp = []
                for(let j = 0; j<this.CurrentRound.answers.length;j++)
                {
                    if(j != l)
                    {
                        temp.push(this.CurrentRound.answers[j])
                    }
                }
                this.CurrentRound.answers = temp
                this.CurrentRound.count--
            }
        }
    }

    infoJSON()
    {
        return {
            id : this.id,
            users : this.users.map(u => u.toJSON()),
            asker : this.Asker.toJSON()
        }
    }
}

module.exports = { Room, RoomPool, QuestionsArr, AnswerArr };