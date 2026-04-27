const chapters = [
  { id: "00", title: "Inleiding en studie-aanpak", source: "PDF p. 8-11", accent: "#2f6f73" },
  { id: "01", title: "Sociologie: wetenschap van de samenleving", source: "PDF p. 12-32", accent: "#7b4f2a" },
  { id: "02", title: "Structuur, cultuur en diversiteit", source: "PDF p. 33-68", accent: "#5c5f8f" },
  { id: "03", title: "Instituties", source: "PDF p. 69-80", accent: "#8a4458" },
  { id: "04", title: "Socialisatie", source: "PDF p. 81-107", accent: "#3d6f4b" },
  { id: "05", title: "Sociale controle en deviantie", source: "PDF p. 108-140", accent: "#7a3f6a" },
  { id: "06", title: "Examenvoorbereiding", source: "PDF p. 141-146", accent: "#556b2f" },
];

const questionBank = [
  {
    id: "00-mc-1",
    chapter: "00",
    type: "mc",
    difficulty: "basis",
    prompt: "Wat is volgens de cursus de belangrijkste meerwaarde van sociologie voor sociaal werk?",
    options: [
      "Sociologie geeft kant-en-klare oplossingen voor sociale problemen.",
      "Sociologie helpt gedrag en problemen situeren binnen bredere verbanden.",
      "Sociologie vervangt individuele hulpverlening door statistiek.",
      "Sociologie gaat vooral over persoonlijkheidskenmerken.",
    ],
    answer: 1,
    explanation:
      "De cursus benadrukt dat sociologie geen pasklare oplossingen geeft, maar wel leert relativeren, relateren, situeren en verbanden leggen.",
  },
  {
    id: "00-open-1",
    chapter: "00",
    type: "open",
    difficulty: "examen",
    prompt:
      "Leg uit wat bedoeld wordt met relativeren, relateren en situeren. Toon ook waarom die drie belangrijk zijn voor een sociaal werker.",
    model:
      "Relativeren betekent beseffen dat wat vanzelfsprekend lijkt, historisch, cultureel of sociaal anders kan zijn. Relateren betekent gedrag verbinden met andere factoren zoals gezin, opleiding, buurt, beleid, economie of instituties. Situeren betekent een persoon of probleem plaatsen in een ruimere sociale context. Voor sociaal werkers voorkomt dit te snelle schuldverklaringen en helpt het om gerichter, rechtvaardiger en effectiever te handelen.",
    rubric: [
      "Je legt de drie begrippen afzonderlijk uit.",
      "Je verbindt ze met de sociologische blik.",
      "Je toont het belang voor sociaal werk met minstens een concreet voorbeeld.",
    ],
  },
  {
    id: "00-open-2",
    chapter: "00",
    type: "open",
    difficulty: "toepassing",
    prompt:
      "Hoe gebruik je de toetsvragen achteraan de cursus best om je examen voor te bereiden?",
    model:
      "Gebruik de toetsvragen actief. Definieer eerst het begrip in eigen woorden, verbind het daarna met andere begrippen uit de cursus en geef ten slotte een voorbeeld. Zo oefen je niet alleen reproductie, maar ook inzicht en toepassing. Dat is belangrijk omdat examenvragen vaak vragen om verbanden te leggen.",
    rubric: [
      "Je noemt actieve verwerking in plaats van alleen herlezen.",
      "Je vermeldt definitie, verband en voorbeeld.",
      "Je legt uit waarom toepassing belangrijk is.",
    ],
  },
  {
    id: "01-mc-1",
    chapter: "01",
    type: "mc",
    difficulty: "basis",
    prompt: "Wat betekent 'sociaal' in de sociologische betekenis van de cursus?",
    options: [
      "Vriendelijk, spontaan en gemakkelijk in omgang.",
      "Gedrag dat altijd moreel goed is.",
      "Gedrag en feiten die betrokken zijn op anderen en de samenleving.",
      "Alleen hulpverlening aan kwetsbare mensen.",
    ],
    answer: 2,
    explanation:
      "De cursus maakt expliciet onderscheid tussen sociaal als persoonskenmerk en het sociale als feitelijkheid die sociologisch onderzocht wordt.",
  },
  {
    id: "01-mc-2",
    chapter: "01",
    type: "mc",
    difficulty: "basis",
    prompt: "Welke uitspraak past het best bij het actorperspectief?",
    options: [
      "De samenleving bepaalt volledig wat mensen doen.",
      "Mensen geven betekenis aan situaties en vormen zo mee de sociale werkelijkheid.",
      "Alle gedrag is biologisch bepaald.",
      "Sociologie kijkt alleen naar grote maatschappelijke structuren.",
    ],
    answer: 1,
    explanation:
      "Het actorperspectief vertrekt van sociaal handelen en betekenisgeving: mensen maken mee de samenleving.",
  },
  {
    id: "01-mc-3",
    chapter: "01",
    type: "mc",
    difficulty: "inzicht",
    prompt: "Waarom gebruikt de cursus Durkheims onderzoek naar zelfmoord?",
    options: [
      "Om te tonen dat zelfmoord alleen psychologisch verklaard kan worden.",
      "Om te tonen dat zelfs heel persoonlijke handelingen sociale patronen kunnen vertonen.",
      "Om te bewijzen dat individuen geen keuzes maken.",
      "Om het verschil tussen subcultuur en tegencultuur uit te leggen.",
    ],
    answer: 1,
    explanation:
      "Durkheim toont het systeemperspectief: zelfs een schijnbaar individuele daad kan verband houden met sociale integratie en maatschappelijke context.",
  },
  {
    id: "01-open-1",
    chapter: "01",
    type: "open",
    difficulty: "examen",
    prompt:
      "Leg het verschil uit tussen actorperspectief en systeemperspectief. Gebruik in je antwoord de begrippen sociale constructie en sociale bepaaldheid.",
    model:
      "Het actorperspectief vertrekt van de actor: mensen, groepen of organisaties handelen, geven betekenis aan situaties en maken zo mee de samenleving. Dat noemen we sociale constructie. Het systeemperspectief vertrekt van het systeem: cultuur, structuur, posities en verwachtingen beïnvloeden wat mensen doen en kunnen doen. Dat noemen we sociale bepaaldheid. Sociologisch denken houdt beide tegelijk in beeld, omdat mensen de samenleving maken en tegelijk door die samenleving gevormd worden.",
    rubric: [
      "Je definieert actorperspectief correct.",
      "Je definieert systeemperspectief correct.",
      "Je gebruikt sociale constructie en sociale bepaaldheid juist.",
      "Je vermeldt de wisselwerking tussen beide.",
    ],
  },
  {
    id: "01-open-2",
    chapter: "01",
    type: "open",
    difficulty: "toepassing",
    prompt:
      "Pas micro-, meso- en macroniveau toe op gezondheid. Geef per niveau minstens twee factoren.",
    model:
      "Op microniveau kijk je naar individuele factoren, zoals voedingsgewoonten, beweging, rookgedrag of alcoholgebruik. Op mesoniveau kijk je naar directe leefcontexten zoals gezin, vriendenkring, buurt, werkzekerheid, fietspaden of toegang tot verse voeding. Op macroniveau kijk je naar beleid, welvaartsstaat, onderwijsbeleid, pensioensysteem, afvalbeleid, economische ongelijkheid of historische periode. De niveaus hangen samen en mogen niet los van elkaar bekeken worden.",
    rubric: [
      "Je onderscheidt micro, meso en macro correct.",
      "Je geeft per niveau minstens twee passende factoren.",
      "Je benoemt dat de niveaus samenhangen.",
    ],
  },
  {
    id: "01-case-1",
    chapter: "01",
    type: "case",
    difficulty: "toepassing",
    case:
      "Een student zegt: 'Wie niet verder studeert, heeft gewoon niet genoeg motivatie.'",
    prompt:
      "Reageer sociologisch op deze uitspraak. Gebruik het systeemperspectief en het voorbeeld van hoger onderwijs.",
    model:
      "Een sociologische reactie nuanceert deze individuele verklaring. Motivatie speelt mee, maar de kans om hoger onderwijs te volgen hangt ook samen met het opleidingsniveau en de beroepsstatus van ouders, financiële middelen, verwachtingen in het gezin, schoolcultuur en bredere kansenstructuren. Vanuit het systeemperspectief beïnvloedt de sociale positie van het gezin dus mee wat iemand als haalbaar of vanzelfsprekend ervaart.",
    rubric: [
      "Je vermijdt een puur individuele schuldverklaring.",
      "Je gebruikt het systeemperspectief correct.",
      "Je verwijst naar ouderlijk opleidingsniveau, beroepsstatus of sociale positie.",
    ],
  },
  {
    id: "02-mc-1",
    chapter: "02",
    type: "mc",
    difficulty: "basis",
    prompt: "Wat is een sociale positie?",
    options: [
      "De persoonlijke mening die iemand over zichzelf heeft.",
      "De plaats die iemand inneemt in een netwerk van sociale relaties.",
      "Een tijdelijke emotionele toestand.",
      "Een juridisch document dat iemands rechten bepaalt.",
    ],
    answer: 1,
    explanation:
      "Een sociale positie is iemands plaats in een netwerk van sociale relaties, bijvoorbeeld student, ouder, werknemer of cliënt.",
  },
  {
    id: "02-mc-2",
    chapter: "02",
    type: "mc",
    difficulty: "basis",
    prompt: "Wat is het verschil tussen sociale status en sociale rol?",
    options: [
      "Status is waardering; rol is het geheel van verwachtingen bij een positie.",
      "Status is biologisch; rol is juridisch.",
      "Status gaat alleen over inkomen; rol alleen over gezin.",
      "Er is geen verschil in de cursus.",
    ],
    answer: 0,
    explanation:
      "Status verwijst naar waardering of aanzien. Rol verwijst naar de verwachtingen die bij een sociale positie horen.",
  },
  {
    id: "02-mc-3",
    chapter: "02",
    type: "mc",
    difficulty: "inzicht",
    prompt: "Welke uitspraak past bij statusinconsistentie?",
    options: [
      "Alle statussen liggen in dezelfde lijn.",
      "Iemand heeft meerdere rollen binnen een positie.",
      "De waardering die bij iemands posities hoort, botst of loopt niet gelijk.",
      "Iemand gebruikt statussymbolen van een hogere groep.",
    ],
    answer: 2,
    explanation:
      "Statusinconsistentie ontstaat wanneer iemands statussen niet in dezelfde lijn liggen, bijvoorbeeld hooggeschoold maar werkloos.",
  },
  {
    id: "02-mc-4",
    chapter: "02",
    type: "mc",
    difficulty: "basis",
    prompt: "Wat zijn waarden?",
    options: [
      "Concrete wetten die altijd strafbaar zijn bij overtreding.",
      "Algemene opvattingen over wat goed, rechtvaardig en wenselijk is.",
      "Verwachtingen over wat waarschijnlijk zal gebeuren.",
      "De zichtbare buitenkant van een cultuur.",
    ],
    answer: 1,
    explanation:
      "Waarden zijn algemene principes. Normen vertalen waarden naar concreet gedrag.",
  },
  {
    id: "02-mc-5",
    chapter: "02",
    type: "mc",
    difficulty: "inzicht",
    prompt: "Wat is cultuurpluralisme volgens de cursus?",
    options: [
      "De eigen cultuur als hoogste norm nemen.",
      "Elke cultuur kritiekloos goedkeuren.",
      "Mensen centraal zetten en zoeken naar gelijkwaardigheid, dialoog en participatie.",
      "Culturele verschillen negeren omdat iedereen hetzelfde is.",
    ],
    answer: 2,
    explanation:
      "Cultuurpluralisme wil verschillen erkennen zonder ongelijkheid of kritiekloosheid: de mens, dialoog en participatie staan centraal.",
  },
  {
    id: "02-open-1",
    chapter: "02",
    type: "open",
    difficulty: "examen",
    prompt:
      "Leg de structurele dimensie van de samenleving uit. Gebruik de begrippen sociale positie, sociale goederen, macht, status en rol.",
    model:
      "De structurele dimensie gaat over de vorm van samenleven: de verhoudingen tussen mensen en groepen. Een sociale positie is iemands plaats in een netwerk van relaties. Aan posities hangt toegang tot sociale goederen zoals inkomen, kennis, prestige, contacten en macht. Macht gaat over invloed op anderen of op middelen. Sociale status is de waardering die aan een positie verbonden is. Sociale rollen zijn de verwachtingen die bij posities horen. Samen tonen deze begrippen hoe mensen verschillend geplaatst zijn in de samenleving.",
    rubric: [
      "Je omschrijft structuur als verhoudingen of vorm van samenleven.",
      "Je gebruikt minstens vier gevraagde begrippen correct.",
      "Je legt verband met ongelijkheid of kansen.",
    ],
  },
  {
    id: "02-open-2",
    chapter: "02",
    type: "open",
    difficulty: "examen",
    prompt:
      "Leg de culturele dimensie uit met de ijsbergmetafoor. Verbind dit met waarden, normen, doelen en verwachtingen.",
    model:
      "De culturele dimensie gaat over betekenisgeving: wat een groep normaal, juist, mooi of wenselijk vindt. De ijsbergmetafoor toont dat zichtbaar gedrag slechts een klein deel van cultuur is. Onder de zichtbare laag zitten waarden, normen, overtuigingen en verwachtingen. Waarden zijn algemene principes. Normen vertalen die naar regels. Doelen maken waarden concreter en meetbaar. Verwachtingen gaan over wat mensen denken dat werkelijk zal gebeuren of nageleefd worden.",
    rubric: [
      "Je definieert cultuur als betekenisgeving.",
      "Je legt zichtbaar en verborgen deel van cultuur uit.",
      "Je gebruikt waarden, normen, doelen en verwachtingen correct.",
    ],
  },
  {
    id: "02-open-3",
    chapter: "02",
    type: "open",
    difficulty: "inzicht",
    prompt:
      "Vergelijk dominante cultuur, subcultuur en tegencultuur. Geef voor elk een eigen voorbeeld.",
    model:
      "De dominante cultuur is het overheersende betekeniskader in een samenleving. Een subcultuur is een groep met eigen gewoontes, waarden of stijlen die deels afwijken maar het geheel niet noodzakelijk aanvallen. Een tegencultuur verwerpt belangrijke waarden van de dominante cultuur en gaat er actief tegenin. Voorbeelden moeten tonen of het gaat om overheersing, gedeeltelijke afwijking of verzet tegen centrale waarden.",
    rubric: [
      "Je onderscheidt de drie begrippen duidelijk.",
      "Je legt uit dat tegencultuur verder gaat dan subcultuur.",
      "Je voorbeelden passen bij de definities.",
    ],
  },
  {
    id: "02-case-1",
    chapter: "02",
    type: "case",
    difficulty: "toepassing",
    case:
      "Een student loopt stage in een organisatie waar cliënten soms te laat komen. Een collega noemt dat meteen respectloos.",
    prompt:
      "Analyseer deze situatie cultureel. Gebruik gedrag, betekenisgeving, waarden/normen en cultuurpluralisme.",
    model:
      "Een culturele analyse vraagt wat achter zichtbaar gedrag zit. Te laat komen is gedrag, maar de betekenis ervan kan verschillen. De collega vertrekt mogelijk vanuit een norm rond stiptheid en een waarde zoals respect of betrouwbaarheid. Cultuurpluralistisch werken betekent niet dat alles zomaar goedgekeurd wordt, maar wel dat je eerst probeert te begrijpen welke context, verwachtingen of betekenissen meespelen. Daarna kan je in dialoog duidelijke afspraken maken.",
    rubric: [
      "Je onderscheidt gedrag en betekenis.",
      "Je benoemt waarden of normen rond stiptheid.",
      "Je past cultuurpluralisme toe zonder kritiekloosheid.",
    ],
  },
  {
    id: "02-case-2",
    chapter: "02",
    type: "case",
    difficulty: "toepassing",
    case:
      "Iemand is tegelijk student, mantelzorger en werknemer. De opleiding verwacht voorbereiding, het werk flexibiliteit en het gezin dagelijkse beschikbaarheid.",
    prompt:
      "Analyseer dit met sociale positie, rollenset en rolconflict. Is dit intern of extern rolconflict?",
    model:
      "De persoon heeft meerdere sociale posities: student, mantelzorger en werknemer. Bij elke positie horen rollen en verwachtingen. De spanning ontstaat tussen verwachtingen die verbonden zijn aan verschillende posities. Daarom gaat het vooral om een extern rolconflict. De rollenset kan per positie ook complex zijn, maar de kern van de casus is de botsing tussen posities.",
    rubric: [
      "Je herkent meerdere sociale posities.",
      "Je legt rol en rollenset juist uit.",
      "Je noemt dit vooral een extern rolconflict en motiveert waarom.",
    ],
  },
  {
    id: "03-mc-1",
    chapter: "03",
    type: "mc",
    difficulty: "basis",
    prompt: "Wat is een institutie?",
    options: [
      "Een concrete organisatie met personeel en gebouw.",
      "Een gevestigde manier waarop een samenleving terugkerende behoeften regelt.",
      "Een individuele gewoonte die iemand privé ontwikkelt.",
      "Een tijdelijke trend zonder maatschappelijke functie.",
    ],
    answer: 1,
    explanation:
      "Instituties zijn bredere maatschappelijke regelpatronen rond basisbehoeften zoals zorg, onderwijs, recht, gezin en economie.",
  },
  {
    id: "03-mc-2",
    chapter: "03",
    type: "mc",
    difficulty: "inzicht",
    prompt: "Wat is het verschil tussen institutie en organisatie?",
    options: [
      "Een institutie is concreet; een organisatie is abstract.",
      "Een institutie is het bredere regelpatroon; een organisatie is de concrete vorm ervan.",
      "Een institutie bestaat alleen in gezinnen; een organisatie alleen in scholen.",
      "Er is geen verschil.",
    ],
    answer: 1,
    explanation:
      "Onderwijs is bijvoorbeeld een institutie; een specifieke school is een organisatie.",
  },
  {
    id: "03-mc-3",
    chapter: "03",
    type: "mc",
    difficulty: "basis",
    prompt: "Welke uitspraak over het gezin past bij de cursus?",
    options: [
      "Het westerse kerngezin is universeel.",
      "Het gezin heeft geen economische functie meer.",
      "Het gezin is een sociale institutie met functies zoals socialisatie, zorg en bescherming.",
      "Gezinsvormen worden uitsluitend biologisch bepaald.",
    ],
    answer: 2,
    explanation:
      "De cursus behandelt het gezin als institutie en benadrukt dat het westerse kerngezin niet universeel is.",
  },
  {
    id: "03-open-1",
    chapter: "03",
    type: "open",
    difficulty: "examen",
    prompt:
      "Leg uit waarom instituties menselijke historische constructies zijn. Waarom is dit inzicht belangrijk voor sociaal werk?",
    model:
      "Instituties zijn door mensen ontwikkelde manieren om basisbehoeften te regelen. Ze zijn historisch gegroeid en verschillen tussen samenlevingen en periodes. Ze lijken vanzelfsprekend omdat we erin opgroeien, maar ze zijn niet natuurgegeven. Voor sociaal werk is dat belangrijk omdat cliënten vaak vastlopen op kruispunten van instituties zoals gezin, school, zorg, recht en economie. De sociaal werker moet zien dat regelingen veranderlijk zijn en niet alle problemen puur individueel verklaren.",
    rubric: [
      "Je legt uit dat instituties menselijk gemaakt en historisch gegroeid zijn.",
      "Je noemt verschillen door tijd of samenleving.",
      "Je verbindt dit met sociaal werk of cliëntsituaties.",
    ],
  },
  {
    id: "03-open-2",
    chapter: "03",
    type: "open",
    difficulty: "inzicht",
    prompt:
      "Bespreek minstens vijf functies van het gezin als institutie.",
    model:
      "Het gezin regelt onder meer voortplanting, seksuele relaties, socialisatie, veiligheid en bescherming, zorg, economische consumptie en ondersteuning. Het gezin leert kinderen waarden, normen, taal en rollen. Het biedt zorg en bescherming, organiseert verwantschap en intieme relaties, en is vaak een belangrijke consumptie-eenheid. Door maatschappelijke veranderingen worden sommige functies gedeeld met school, kinderopvang, zorgorganisaties en de welvaartsstaat.",
    rubric: [
      "Je noemt minstens vijf functies.",
      "Je legt minstens drie functies kort uit.",
      "Je vermeldt functieverschuivingen of gedeelde verantwoordelijkheid.",
    ],
  },
  {
    id: "03-case-1",
    chapter: "03",
    type: "case",
    difficulty: "toepassing",
    case:
      "Een alleenstaande ouder krijgt hulp van kinderopvang, school, OCMW en een CAW. Iemand zegt: 'Dat gezin faalt gewoon.'",
    prompt:
      "Reageer sociologisch met het begrip institutie en functieverschuiving.",
    model:
      "Een sociologische reactie kijkt niet alleen naar het gezin. Zorg, opvoeding, inkomen en ondersteuning worden in moderne samenlevingen verdeeld over meerdere instituties en organisaties. Kinderopvang en school nemen mee socialisatie en opvoeding op, OCMW en CAW maken deel uit van zorg en welvaartsstaat. Dit wijst op functieverschuiving: het gezin draagt niet alle functies alleen. De uitspraak 'dat gezin faalt' is dus te individueel en te simplistisch.",
    rubric: [
      "Je benoemt meerdere betrokken instituties of organisaties.",
      "Je gebruikt functieverschuiving juist.",
      "Je nuanceert de individuele schuldverklaring.",
    ],
  },
  {
    id: "04-mc-1",
    chapter: "04",
    type: "mc",
    difficulty: "basis",
    prompt: "Wat is socialisatie?",
    options: [
      "Het proces waarbij mensen waarden, normen, rollen en gedrag leren.",
      "Een juridische straf voor normafwijking.",
      "Een puur biologisch rijpingsproces.",
      "Alleen de opvoeding door scholen.",
    ],
    answer: 0,
    explanation:
      "Socialisatie is het levenslange proces waarin mensen deel worden van een samenleving door waarden, normen, taal, rollen en verwachtingen te leren.",
  },
  {
    id: "04-mc-2",
    chapter: "04",
    type: "mc",
    difficulty: "basis",
    prompt: "Wat betekent interiorisatie?",
    options: [
      "Dat externe waarden en normen deel worden van iemands persoonlijkheid.",
      "Dat iemand elke sociale regel weigert.",
      "Dat regels alleen juridisch worden opgelegd.",
      "Dat socialisatie enkel via media gebeurt.",
    ],
    answer: 0,
    explanation:
      "Bij interiorisatie voelen waarden en normen niet meer alleen als regels van buitenaf, maar als iets van jezelf.",
  },
  {
    id: "04-mc-3",
    chapter: "04",
    type: "mc",
    difficulty: "basis",
    prompt: "Welke vorm van socialisatie verloopt vooral via massamedia?",
    options: ["Primaire socialisatie", "Secundaire socialisatie", "Tertiaire socialisatie", "Differentiële socialisatie"],
    answer: 2,
    explanation:
      "Tertiaire socialisatie verloopt via media, series, online omgevingen en publieke beeldvorming.",
  },
  {
    id: "04-mc-4",
    chapter: "04",
    type: "mc",
    difficulty: "inzicht",
    prompt: "Wat is de 'Me' bij Mead?",
    options: [
      "Het biologische lichaam.",
      "Het gesocialiseerde deel dat rekening houdt met normen en verwachtingen.",
      "Het spontane en impulsieve deel.",
      "De formele schoolloopbaan.",
    ],
    answer: 1,
    explanation:
      "De Me is het deel van het zelf dat gevormd wordt door socialisatie en rekening houdt met de blik van anderen.",
  },
  {
    id: "04-open-1",
    chapter: "04",
    type: "open",
    difficulty: "examen",
    prompt:
      "Leg primaire, secundaire en tertiaire socialisatie uit. Geef telkens een voorbeeld.",
    model:
      "Primaire socialisatie gebeurt vooral in het gezin en nabije relaties, vooral in kinder- en jeugdjaren. Ze is direct, informeel en emotioneel sterk. Secundaire socialisatie gebeurt in grotere en formelere contexten zoals school, opleiding, werk of vereniging, waar mensen specifieke rollen leren. Tertiaire socialisatie verloopt via massamedia en publieke communicatie, zoals series, sociale media of nieuwsbeelden, die ideeën over normaal gedrag en rollen mee vormen.",
    rubric: [
      "Je definieert de drie vormen correct.",
      "Je geeft bij elke vorm een passend voorbeeld.",
      "Je benoemt het verschil tussen informeel/nabij, formeel en media.",
    ],
  },
  {
    id: "04-open-2",
    chapter: "04",
    type: "open",
    difficulty: "examen",
    prompt:
      "Leg Mead uit: imitatie-, play- en gamefase, en daarna Self, I en Me.",
    model:
      "Volgens Mead ontstaat het zelf in sociale interactie. In de imitatiefase doet het kind anderen na zonder echt rolbegrip. In de playfase neemt het kind specifieke rollen op, bijvoorbeeld ouder of dokter. In de gamefase leert het kind meerdere rollen en algemene regels tegelijk begrijpen, met de generalized other. De Self is het zelfbewustzijn dat sociaal ontstaat. De Me is het gesocialiseerde deel dat rekening houdt met normen en verwachtingen. De I is het spontane, creatieve en impulsieve deel.",
    rubric: [
      "Je legt de drie fasen correct uit.",
      "Je gebruikt generalized other of algemene regels.",
      "Je onderscheidt Self, I en Me duidelijk.",
    ],
  },
  {
    id: "04-open-3",
    chapter: "04",
    type: "open",
    difficulty: "inzicht",
    prompt:
      "Leg differentiële socialisatie uit met gender en klasse als voorbeelden.",
    model:
      "Differentiële socialisatie betekent dat niet iedereen dezelfde lessen krijgt. Gender speelt mee wanneer jongens en meisjes andere verwachtingen krijgen rond zorg, risico, studie, emoties of ambitie. Klasse speelt mee omdat gezinnen verschillen in taal, middelen, opvoedingsstijlen, verwachtingen en vertrouwdheid met instellingen. Zo kunnen socialisatieprocessen bijdragen aan het reproduceren van ongelijkheid.",
    rubric: [
      "Je definieert differentiële socialisatie.",
      "Je bespreekt gender.",
      "Je bespreekt klasse.",
      "Je legt verband met ongelijkheid.",
    ],
  },
  {
    id: "04-open-4",
    chapter: "04",
    type: "open",
    difficulty: "examen",
    prompt:
      "Leg uit hoe Bourdieu en Passeron verklaren dat onderwijs ongelijkheid kan reproduceren.",
    model:
      "Bourdieu en Passeron tonen dat scholen vaak middenklassecodes veronderstellen. Kinderen met veel cultureel, sociaal en economisch kapitaal sluiten makkelijker aan bij de taal, houding, kennis en verwachtingen van de school. Kinderen uit gezinnen waar die codes minder vertrouwd zijn, kunnen sneller afstand ervaren en lagere verwachtingen internaliseren. Daardoor kan onderwijs ongelijkheid doorgeven, ook wanneer het formeel gelijke kansen aanbiedt.",
    rubric: [
      "Je gebruikt cultureel, sociaal of economisch kapitaal.",
      "Je legt uit dat school middenklassecodes kan veronderstellen.",
      "Je toont hoe ongelijkheid gereproduceerd wordt.",
    ],
  },
  {
    id: "04-case-1",
    chapter: "04",
    type: "case",
    difficulty: "toepassing",
    case:
      "Een kind krijgt thuis weinig boeken, weinig hulp bij schooltaal en ouders die zelf negatieve schoolervaringen hebben. Op school wordt het kind stil en onzeker.",
    prompt:
      "Analyseer dit met socialisatie, cultureel kapitaal en self-fulfilling prophecy.",
    model:
      "Het kind wordt thuis anders gesocialiseerd dan de school verwacht. Er is mogelijk minder cultureel kapitaal dat aansluit bij schooltaal en schoolcultuur. Daardoor kan het kind onzeker worden en het gevoel krijgen dat school niet voor hem of haar is. Als lage verwachtingen van leerkrachten, ouders of het kind zelf bevestigd worden door gedrag en prestaties, kan een self-fulfilling prophecy ontstaan.",
    rubric: [
      "Je koppelt thuiscontext aan socialisatie.",
      "Je gebruikt cultureel kapitaal correct.",
      "Je legt self-fulfilling prophecy uit in de casus.",
    ],
  },
  {
    id: "05-mc-1",
    chapter: "05",
    type: "mc",
    difficulty: "basis",
    prompt: "Wat is sociale controle?",
    options: [
      "Alleen politie en rechtbanken.",
      "Processen waardoor conform gedrag gestimuleerd wordt.",
      "Iedere vorm van afwijkend gedrag.",
      "Een biologische verklaring voor criminaliteit.",
    ],
    answer: 1,
    explanation:
      "Sociale controle omvat interne en externe, positieve en negatieve sancties waardoor mensen meestal conform handelen.",
  },
  {
    id: "05-mc-2",
    chapter: "05",
    type: "mc",
    difficulty: "basis",
    prompt: "Welke sanctie is een interne negatieve sanctie?",
    options: ["Een compliment", "Een boete", "Schuldgevoel", "Een promotie"],
    answer: 2,
    explanation:
      "Schuldgevoel is intern en negatief: iemand sanctioneert zichzelf vanuit verinnerlijkte normen.",
  },
  {
    id: "05-mc-3",
    chapter: "05",
    type: "mc",
    difficulty: "inzicht",
    prompt: "Wat betekent deviantie sociologisch?",
    options: [
      "Elke vorm van biologisch afwijkend gedrag.",
      "Een onderkende afwijking van culturele normen.",
      "Alle gedrag dat juridisch strafbaar is.",
      "Gedrag dat altijd maatschappelijk schadelijk is.",
    ],
    answer: 1,
    explanation:
      "Deviantie is relatief en sociaal gedefinieerd: het gaat om een onderkende afwijking van culturele normen.",
  },
  {
    id: "05-mc-4",
    chapter: "05",
    type: "mc",
    difficulty: "inzicht",
    prompt: "Wat is secundaire deviantie in de labelingtheorie?",
    options: [
      "De eerste normovertreding.",
      "Gedrag dat ontstaat als reactie op labeling, stigma en uitsluiting.",
      "Een biologische aanleg tot misdaad.",
      "Conform gedrag na straf.",
    ],
    answer: 1,
    explanation:
      "Secundaire deviantie ontstaat wanneer iemand naar een deviant label gaat leven of reageert op de gevolgen ervan.",
  },
  {
    id: "05-mc-5",
    chapter: "05",
    type: "mc",
    difficulty: "examen",
    prompt: "Welke combinatie past bij Mertons straintheorie?",
    options: [
      "Innovatie: doelen verwerpen en middelen aanvaarden.",
      "Ritualisme: doelen blijven nastreven met illegale middelen.",
      "Conformiteit: doelen en legitieme middelen aanvaarden.",
      "Retreatisme: doelen vervangen door nieuwe maatschappelijke doelen.",
    ],
    answer: 2,
    explanation:
      "Conformiteit aanvaardt zowel culturele doelen als legitieme middelen. Innovatie aanvaardt doelen maar gebruikt andere middelen; ritualisme volgt middelen zonder doelen; retreatisme verwerpt beide; rebellie vervangt beide.",
  },
  {
    id: "05-open-1",
    chapter: "05",
    type: "open",
    difficulty: "examen",
    prompt:
      "Leg het verschil uit tussen morele orde en politieke orde als vormen van sociale controle.",
    model:
      "In een morele orde gedragen mensen zich conform omdat waarden en normen gedeeld en verinnerlijkt zijn. Controle werkt via overtuiging, geweten, schaamte, trots en sociale verbondenheid. In een politieke orde wordt conform gedrag sterker afgedwongen via regels, toezicht, formele sancties en machtsuitoefening. In de praktijk zijn beide vaak verweven.",
    rubric: [
      "Je legt morele orde correct uit.",
      "Je legt politieke orde correct uit.",
      "Je noemt interne/verinnerlijkte versus externe/formele controle.",
      "Je vermeldt dat beide in de praktijk verweven kunnen zijn.",
    ],
  },
  {
    id: "05-open-2",
    chapter: "05",
    type: "open",
    difficulty: "examen",
    prompt:
      "Bespreek drie kenmerken van deviant gedrag volgens de cursus.",
    model:
      "Deviantie is relatief: wat afwijkend is, verschilt door tijd, plaats, groep en context. Mensen worden deviant wanneer anderen hen als zodanig definiëren en behandelen. Macht speelt een grote rol: sommige groepen worden sneller gecontroleerd, gelabeld of bestraft, en niet alle normovertredingen worden even zichtbaar of even zwaar beoordeeld.",
    rubric: [
      "Je noemt relativiteit van deviantie.",
      "Je noemt sociale definitie of labeling.",
      "Je bespreekt macht, zichtbaarheid of ongelijke bestraffing.",
    ],
  },
  {
    id: "05-open-3",
    chapter: "05",
    type: "open",
    difficulty: "examen",
    prompt:
      "Leg Mertons straintheorie uit en bespreek de vijf reacties op strain.",
    model:
      "Merton vertrekt van spanning tussen culturele doelen en legitieme middelen. Wanneer een samenleving succesdoelen benadrukt maar middelen ongelijk verdeelt, ontstaat strain. Conformiteit aanvaardt doelen en middelen. Innovatie aanvaardt doelen maar gebruikt andere of illegale middelen. Ritualisme volgt middelen zonder nog in doelen te geloven. Retreatisme verwerpt doelen en middelen. Rebellie wil doelen en middelen vervangen.",
    rubric: [
      "Je legt de spanning tussen doelen en middelen uit.",
      "Je bespreekt alle vijf reacties.",
      "Je verbindt de theorie met ongelijkheid of kansenstructuur.",
    ],
  },
  {
    id: "05-open-4",
    chapter: "05",
    type: "open",
    difficulty: "examen",
    prompt:
      "Vergelijk Cohen, Hirschi en Becker als sociologische verklaringen voor deviant gedrag.",
    model:
      "Cohen verklaart delinquentie via statusfrustratie en deviante subculturen, vooral bij jongeren uit lagere sociale lagen. Hirschi vraagt waarom mensen zich conform gedragen en wijst op bindingen met de conventionele samenleving: attachment, commitment, involvement en belief. Becker focust op labeling: gedrag wordt deviant door sociale reactie, stigma en labels, waardoor secundaire deviantie en een deviante loopbaan kunnen ontstaan.",
    rubric: [
      "Je legt Cohen correct uit.",
      "Je legt Hirschi en de bindingen correct uit.",
      "Je legt Becker en labeling correct uit.",
      "Je vergelijkt de focus van de theorieën.",
    ],
  },
  {
    id: "05-case-1",
    chapter: "05",
    type: "case",
    difficulty: "toepassing",
    case:
      "Twee jongeren nemen iets mee uit een winkel zonder te betalen. De ene wordt gezien als 'verstrooid', de andere als 'crimineel'.",
    prompt:
      "Analyseer dit met Becker en de labelingtheorie.",
    model:
      "Becker zou de aandacht richten op de sociale reactie. Hetzelfde primaire deviante gedrag wordt verschillend gedefinieerd. Bij de ene jongere wordt het gedrag verzacht, bij de andere gelabeld als crimineel. Dat label kan leiden tot stigma, uitsluiting en secundaire deviantie als de jongere naar dat label gaat leven. De casus toont ook de rol van macht, beeldvorming en ongelijke behandeling.",
    rubric: [
      "Je gebruikt primaire deviantie.",
      "Je legt labeling en ongelijke definitie uit.",
      "Je bespreekt mogelijke secundaire deviantie.",
      "Je benoemt macht of stigma.",
    ],
  },
  {
    id: "05-case-2",
    chapter: "05",
    type: "case",
    difficulty: "toepassing",
    case:
      "Een jongere met weinig schoolbinding, weinig vrijetijdsactiviteiten en weinig vertrouwen in regels wordt gevraagd om drugs te dealen.",
    prompt:
      "Analyseer dit met Hirschi's controletheorie.",
    model:
      "Volgens Hirschi verkleint sterke binding met de conventionele samenleving de kans op deviant gedrag. In de casus lijken attachment, commitment, involvement en belief zwak. Er is weinig binding met belangrijke anderen of instellingen, weinig investering in conventionele doelen, weinig betrokkenheid bij reguliere activiteiten en weinig geloof in regels. Daardoor is er volgens Hirschi minder sociale controle die deviant gedrag afremt.",
    rubric: [
      "Je noemt de vier bindingen.",
      "Je past minstens drie bindingen op de casus toe.",
      "Je legt uit waarom zwakke bindingen risico verhogen.",
    ],
  },
  {
    id: "06-mc-1",
    chapter: "06",
    type: "mc",
    difficulty: "basis",
    prompt: "Wat is een sterke aanpak voor een open examenvraag?",
    options: [
      "Alleen de definitie opschrijven.",
      "Definiëren, verband leggen en toepassen met een voorbeeld.",
      "Zo veel mogelijk namen opsommen zonder uitleg.",
      "Een persoonlijke mening geven zonder cursusbegrippen.",
    ],
    answer: 1,
    explanation:
      "De cursus en studie-aanpak vragen om begrippen in eigen woorden, verbanden en toepassingen.",
  },
  {
    id: "06-open-1",
    chapter: "06",
    type: "open",
    difficulty: "examen",
    prompt:
      "Maak een schema in woorden dat de hele cursus verbindt: actor/systeem, structuur/cultuur, instituties, socialisatie, sociale controle en deviantie.",
    model:
      "Actoren handelen binnen een systeem. Dat systeem bestaat uit structuur en cultuur. Structuur gaat over posities, relaties, macht, status en rollen. Cultuur gaat over waarden, normen, betekenissen en verwachtingen. Instituties geven structuur en cultuur vaste maatschappelijke vormen, zoals gezin, onderwijs, recht en zorg. Via socialisatie leren mensen de waarden, normen en rollen van dat systeem. Sociale controle stimuleert conform gedrag. Deviantie toont wat gebeurt wanneer normen worden overschreden, betwist of verschillend toegepast.",
    rubric: [
      "Je gebruikt alle gevraagde kernbegrippen.",
      "Je legt de volgorde of samenhang duidelijk uit.",
      "Je toont dat de cursus een geheel vormt.",
    ],
  },
  {
    id: "06-open-2",
    chapter: "06",
    type: "open",
    difficulty: "examen",
    prompt:
      "Beantwoord deze examenvraag: Waarom is een puur individuele verklaring vaak onvoldoende in sociaal werk?",
    model:
      "Een puur individuele verklaring kijkt vooral naar keuze, motivatie, karakter of schuld. De sociologische cursus toont dat gedrag ook samenhangt met sociale positie, cultuur, structuur, instituties, socialisatie, kansen, beperkingen, sociale controle en labels. Voor sociaal werk is een bredere blik nodig om niet te snel te moraliseren en om passende ondersteuning te bieden. Dat betekent niet dat individuen geen verantwoordelijkheid hebben, maar wel dat verantwoordelijkheid altijd in context bekeken moet worden.",
    rubric: [
      "Je benoemt de beperking van puur individuele verklaringen.",
      "Je gebruikt meerdere cursusbegrippen.",
      "Je verbindt dit met sociaal werk.",
      "Je nuanceert verantwoordelijkheid.",
    ],
  },
];

const extraMc = [
  ["01", "basis", "In welk voorbeeld is er volgens de cursus geen sprake van sociaal handelen?", ["Jan geeft Piet in woede een klap.", "Je leert je hond zindelijk te zijn.", "Je negeert bewust een vriend omdat je kwaad bent.", "Je bedankt iemand voor een fijne avond."], 1, "Sociaal handelen is betrokken op andere mensen. Een hond zindelijk leren is geen sociaal handelen in de sociologische betekenis."],
  ["01", "inzicht", "Wat leert de vergelijking tussen arbeidsomstandigheden in 1920 en 2020 over sociale werkelijkheid?", ["Dat sociale werkelijkheid onveranderlijk is.", "Dat sociale werkelijkheid historisch veranderlijk en sociaal gemaakt is.", "Dat arbeid alleen biologisch bepaald wordt.", "Dat sociologie geen historische vergelijking gebruikt."], 1, "De cursus gebruikt zulke vergelijkingen om te tonen dat wat normaal lijkt historisch verandert."],
  ["01", "toepassing", "Een renovatiepremie van de Vlaamse overheid om gezondheidsproblemen door slechte woningen te verminderen situeert zich vooral op welk niveau?", ["Microniveau", "Mesoniveau", "Macroniveau", "Geen van de drie"], 2, "Het gaat om beleidsingrijpen door de overheid en dus om macroniveau."],
  ["01", "basis", "Wat is de beste omschrijving van sociale interactie?", ["Een persoonlijke karaktertrek.", "Een biologische reflex.", "Wederzijds op elkaar betrokken reageren.", "Een individueel plan zonder anderen."], 2, "Sociale interactie ontstaat wanneer mensen op elkaar reageren en elkaars gedrag betekenis geeft."],
  ["01", "inzicht", "Waarom is de metafoor van vissen in water belangrijk?", ["Omdat sociologie vooral natuurwetenschap is.", "Omdat het sociale zo vanzelfsprekend is dat we het vaak niet zien.", "Omdat mensen niet zonder technologie kunnen.", "Omdat sociale regels altijd zichtbaar zijn."], 1, "Het sociale omgeeft ons voortdurend en wordt daardoor vaak vanzelfsprekend."],
  ["01", "basis", "Welke combinatie is juist?", ["Actor = structuur; systeem = individu.", "Actor = wie handelt; systeem = cultuur en structuur.", "Actor = wetgeving; systeem = emoties.", "Actor = macro; systeem = micro."], 1, "De actor handelt; het systeem vormt de culturele en structurele context."],
  ["01", "inzicht", "Waarom is hoger onderwijs een goed voorbeeld van systeemperspectief?", ["Omdat enkel motivatie telt.", "Omdat sociale herkomst mee beïnvloedt wie start aan hoger onderwijs.", "Omdat onderwijs geen sociale structuur heeft.", "Omdat studenten geen actoren zijn."], 1, "Opleidingsniveau en beroepsstatus van ouders hangen samen met onderwijskansen."],
  ["01", "toepassing", "Welke factor hoort het meest bij mesoniveau in een gezondheidsanalyse?", ["Rookgedrag", "Fietspaden en buurtvoorzieningen", "Nationaal pensioensysteem", "Historische periode"], 1, "Meso verwijst naar directe leefcontexten zoals buurt, school, gezin, werk en netwerk."],
  ["02", "basis", "Wat is een positieset?", ["Alle waarden van een samenleving.", "Het geheel van sociale posities dat iemand bekleedt.", "Een verzameling wettelijke normen.", "De totale cultuur van een gezin."], 1, "Iemand is tegelijk bijvoorbeeld student, vriend, kind, werknemer en buur."],
  ["02", "basis", "Wat is een toegewezen positie?", ["Een positie waarvoor iemand inspanning leverde.", "Een positie die iemand zonder eigen inspanning krijgt.", "Een positie die altijd tijdelijk is.", "Een positie zonder sociale betekenis."], 1, "Voorbeelden zijn leeftijd, afkomst of bepaalde familieposities."],
  ["02", "basis", "Wat is een verworven positie?", ["Een positie die biologisch gegeven is.", "Een positie die men verkrijgt via inspanning of prestatie.", "Een positie zonder status.", "Een positie die nooit verandert."], 1, "Diploma, beroep of bestuursfunctie kunnen verworven posities zijn."],
  ["02", "inzicht", "Wat is sociale imitatie?", ["Een intern rolconflict.", "Statussymbolen gebruiken van een groep waartoe men wil behoren.", "Een vorm van primaire socialisatie.", "Een juridische sanctie."], 1, "Sociale imitatie gaat over het overnemen van statussymbolen."],
  ["02", "basis", "Wat is een rollenset?", ["Alle rollen die bij één sociale positie horen.", "Alle instituten van een samenleving.", "Alle statussen van een persoon.", "Alle subculturen samen."], 0, "Bij één positie horen meerdere verwachtingen en rollen."],
  ["02", "inzicht", "Wanneer spreken we van een intern rolconflict?", ["Wanneer rollen uit verschillende posities botsen.", "Wanneer verwachtingen binnen één positie botsen.", "Wanneer iemand geen rol heeft.", "Wanneer de status van iemand laag is."], 1, "Intern rolconflict speelt binnen één sociale positie."],
  ["02", "inzicht", "Wanneer spreken we van een extern rolconflict?", ["Wanneer verwachtingen tussen verschillende posities botsen.", "Wanneer één verwachting onduidelijk is.", "Wanneer een norm juridisch wordt.", "Wanneer iemand statusconsistent is."], 0, "Extern rolconflict ontstaat tussen bijvoorbeeld ouderrol en werknemersrol."],
  ["02", "basis", "Welke reeks hoort bij de normatieve component van cultuur?", ["Waarden, normen, doelen en verwachtingen.", "Alleen inkomen en macht.", "Alleen organisaties en instituties.", "Alleen biologische kenmerken."], 0, "De cursus verbindt waarden, normen, doelstellingen en verwachtingen."],
  ["02", "inzicht", "Wat is het verschil tussen norm en verwachting?", ["Een norm zegt wat hoort; een verwachting zegt wat men denkt dat zal gebeuren.", "Een verwachting is altijd wettelijk afdwingbaar.", "Een norm is altijd onzichtbaar.", "Er is geen verschil."], 0, "Normen sturen gedrag; verwachtingen gaan over vermoedelijke naleving of uitkomst."],
  ["02", "basis", "Wat is een taboe?", ["Een lichte omgangsvorm.", "Een zeer sterk geladen norm waarvan overtreding zware afkeuring oproept.", "Een statuspositie.", "Een vorm van sociale imitatie."], 1, "Taboes zijn zware normen, bijvoorbeeld rond incest of kindermishandeling."],
  ["02", "inzicht", "Wat betekent intraculturele diversiteit?", ["Verschillen tussen landen.", "Verschillen binnen eenzelfde dominante cultuur.", "Alleen religieuze verschillen.", "Afwezigheid van cultuur."], 1, "Intraculturele diversiteit gaat over variatie binnen een samenleving of cultuur."],
  ["02", "inzicht", "Wat betekent interculturele diversiteit?", ["Verschillen tussen culturen.", "Verschillen tussen rollen binnen één gezin.", "Statusinconsistentie.", "Een intern rolconflict."], 0, "Interculturele diversiteit verwijst naar verschillen tussen culturele groepen."],
  ["02", "basis", "Welke reactie op diversiteit zegt: 'anders is minder'?", ["Cultuurabsolutisme", "Cultuurrelativisme", "Cultuurpluralisme", "Sociale imitatie"], 0, "Cultuurabsolutisme neemt de eigen cultuur als maatstaf."],
  ["02", "inzicht", "Wat is het risico van doorgeschoten cultuurrelativisme?", ["Te weinig begrip voor context.", "Geen ruimte meer voor kritiek.", "Altijd juridisch straffen.", "Geen aandacht voor cultuur."], 1, "Relativisme kan doorschieten wanneer alles kritiekloos aanvaard wordt."],
  ["02", "basis", "Welke Hofstede-dimensie gaat over acceptatie van ongelijke machtsverdeling?", ["Machtsafstand", "Onzekerheidsvermijding", "Individualisme", "Toegeeflijkheid"], 0, "Machtsafstand beschrijft hoe normaal hiërarchie en ongelijke macht gevonden worden."],
  ["02", "basis", "Welke Hofstede-dimensie contrasteert persoonlijke autonomie met groepsgerichtheid?", ["Masculiniteit", "Individualisme versus collectivisme", "Onzekerheidsvermijding", "Lange termijn"], 1, "Individualistische culturen leggen meer nadruk op het individu; collectivistische op groep en verbondenheid."],
  ["03", "basis", "Waarom geven instituties zekerheid en voorspelbaarheid?", ["Ze zorgen dat mensen telkens alles opnieuw moeten uitvinden.", "Ze bieden vaste patronen voor terugkerende maatschappelijke behoeften.", "Ze maken alle keuzes onmogelijk.", "Ze vervangen alle organisaties."], 1, "Instituties leiden gedrag langs gebaande wegen."],
  ["03", "inzicht", "Waarom kan de uitspraak 'instituties verminderen keuzestress' juist zijn?", ["Ze nemen elke vrijheid weg.", "Ze bieden vaste verwachtingen en regelingen waardoor niet alles opnieuw beslist moet worden.", "Ze bestaan alleen in de politiek.", "Ze zijn altijd biologisch."], 1, "Instituties maken samenleven voorspelbaarder."],
  ["03", "basis", "Welke institutie regelt in de cursus vooral voortplanting en primaire socialisatie?", ["Economie", "Gezin", "Parlement", "Massamedia"], 1, "Het gezin is een centrale institutie voor voortplanting, zorg en socialisatie."],
  ["03", "basis", "Welke organisatie is een concrete uitwerking van de institutie onderwijs?", ["Een school", "Het begrip socialisatie", "Een waarde", "Een subcultuur"], 0, "Onderwijs is de institutie; de school is een organisatie."],
  ["03", "inzicht", "Wat betekent functieverschuiving binnen het gezin?", ["Dat het gezin geen functies meer heeft.", "Dat functies deels verschuiven naar school, opvang, overheid of zorgorganisaties.", "Dat alleen vaders opvoeden.", "Dat instituties verdwijnen."], 1, "Moderne samenlevingen verdelen gezinsfuncties over meerdere instituties en organisaties."],
  ["04", "basis", "Wat toont het verhaal van Genie vooral aan?", ["Dat taal en sociaal gedrag zonder interactie vanzelf volledig ontwikkelen.", "Dat socialisatie fundamenteel is om menselijk sociaal functioneren te ontwikkelen.", "Dat media belangrijker zijn dan gezin.", "Dat deviantie altijd crimineel is."], 1, "De casus toont de noodzaak van interactie, taal, zorg en betekenisoverdracht."],
  ["04", "basis", "Welke socialisatievorm vindt vooral plaats in gezin en nabije relaties?", ["Primaire socialisatie", "Secundaire socialisatie", "Tertiaire socialisatie", "Politieke orde"], 0, "Primaire socialisatie is direct, informeel en emotioneel sterk."],
  ["04", "basis", "Welke socialisatievorm vindt vooral plaats in school, werk en opleiding?", ["Primaire socialisatie", "Secundaire socialisatie", "Tertiaire socialisatie", "Labeling"], 1, "Secundaire socialisatie speelt in formelere contexten."],
  ["04", "inzicht", "Wat is de generalized other bij Mead?", ["Een concrete ouder.", "Het besef van de bredere groep en algemene verwachtingen.", "Het biologische lichaam.", "Een juridische sanctie."], 1, "In de gamefase leert het kind rekening houden met algemene regels en verwachtingen."],
  ["04", "basis", "Wat is de I bij Mead?", ["Het gesocialiseerde deel.", "Het spontane, creatieve en impulsieve deel.", "De schoolcultuur.", "De dominante cultuur."], 1, "De I reageert spontaan en kan vernieuwing of afwijking brengen."],
  ["04", "basis", "Wat is gender volgens de cursus?", ["Het biologische verschil tussen mannen en vrouwen.", "De sociaal-culturele betekenis van mannelijkheid en vrouwelijkheid.", "Een juridisch sanctiesysteem.", "Een vorm van tertiaire socialisatie."], 1, "Sekse verwijst naar biologisch verschil; gender naar sociaal-culturele betekenis."],
  ["04", "inzicht", "Wat is een cultuurfilter?", ["Het gezin van herkomst kleurt je blik op de wereld.", "Een wettelijk verbod op diversiteit.", "Een type organisatie.", "Een vorm van formele straf."], 0, "Primaire socialisatie beïnvloedt hoe je de wereld interpreteert."],
  ["04", "basis", "Welk begrip past bij onbewust meer aandacht geven aan leerlingen van wie men meer verwacht?", ["Pygmalion-effect", "Machtsafstand", "Retreatisme", "Cultuurabsolutisme"], 0, "Het Pygmalion-effect verwijst naar verwachtingen die prestaties mee beïnvloeden."],
  ["04", "basis", "Wat bedoelt Bourdieu met cultureel kapitaal in deze cursuscontext?", ["Alleen geld.", "Kennis, taal, houdingen en culturele codes die aansluiten bij instituties zoals school.", "Een strafmaat.", "Een biologisch kenmerk."], 1, "Cultureel kapitaal helpt verklaren waarom sommige kinderen beter aansluiten bij schoolcultuur."],
  ["04", "inzicht", "Wat is symbolisch geweld?", ["Fysieke straf.", "Het opleggen van dominante betekenissen alsof ze vanzelfsprekend en neutraal zijn.", "Een externe sanctie door politie.", "Een vorm van biologische deviantie."], 1, "Bourdieu gebruikt dit om subtiele machtswerking van dominante cultuur te duiden."],
  ["05", "basis", "Welke sanctie is extern positief?", ["Schuldgevoel", "Schaamte", "Beloning of status", "Geweten"], 2, "Externe positieve sancties komen van buitenaf en belonen gewenst gedrag."],
  ["05", "basis", "Welke sanctie is extern negatief?", ["Trots", "Schuldgevoel", "Afkeurende blik of straf", "Innerlijke overtuiging"], 2, "Afkeuring, uitsluiting, boete of straf zijn externe negatieve sancties."],
  ["05", "inzicht", "Welke uitspraak past bij de morele orde?", ["Mensen doen wat moet vooral uit angst voor straf.", "Mensen handelen conform vanuit verinnerlijkte waarden en gedeelde overtuiging.", "Er is alleen formele wetgeving.", "Controle gebeurt uitsluitend door politie."], 1, "De morele orde steunt op verinnerlijking en gedeelde normen."],
  ["05", "inzicht", "Welke uitspraak past bij de politieke orde?", ["Controle via formele regels, toezicht en sancties staat centraal.", "Er zijn geen machtsverschillen.", "Mensen handelen enkel spontaan goed.", "Normen bestaan niet."], 0, "De politieke orde benadrukt afdwinging via regels en sancties."],
  ["05", "basis", "Waarom is deviantie relatief?", ["Omdat elke overtreding overal hetzelfde betekent.", "Omdat wat deviant is verschilt door tijd, plaats, groep en cultuur.", "Omdat er geen normen bestaan.", "Omdat alleen de wet telt."], 1, "De cursus benadrukt de tijds- en plaatsgebondenheid van deviantie."],
  ["05", "basis", "Wat is primaire deviantie?", ["De eerste normovertreding of afwijkende handeling.", "Naar een label gaan leven.", "Een politieke orde.", "Een positieve sanctie."], 0, "Primaire deviantie verwijst naar het oorspronkelijke afwijkende gedrag."],
  ["05", "inzicht", "Welke verklaring zoekt oorzaken van deviant gedrag vooral in persoonlijkheid of psychische processen?", ["Biologische verklaring", "Psychologische verklaring", "Labelingtheorie", "Strain"], 1, "Psychologische modellen zoeken verklaringen in persoonlijkheid, trauma of psychische processen."],
  ["05", "inzicht", "Welke verklaring zoekt oorzaken vooral in lichamelijke of erfelijke kenmerken?", ["Biologische verklaring", "Hirschi", "Becker", "Cultuurpluralisme"], 0, "Biologische modellen zoeken oorzaken in biologische kenmerken, al behandelt de cursus die kritisch."],
  ["05", "basis", "Wat is innovatie bij Merton?", ["Doelen en middelen aanvaarden.", "Doelen aanvaarden maar andere of illegale middelen gebruiken.", "Doelen en middelen verwerpen.", "Nieuwe doelen en middelen invoeren."], 1, "Innovatie houdt vast aan maatschappelijk succesdoel maar gebruikt afwijkende middelen."],
  ["05", "basis", "Wat is ritualisme bij Merton?", ["Middelen blijven volgen zonder nog sterk in doelen te geloven.", "Doelen en middelen aanvaarden.", "Alles verwerpen.", "Een nieuw systeem willen."], 0, "Ritualisme volgt regels, maar de achterliggende doelen zijn losgelaten."],
  ["05", "basis", "Wat is retreatisme bij Merton?", ["Doelen en middelen verwerpen.", "Doelen aanvaarden en middelen verwerpen.", "Middelen volgen zonder doel.", "Doelen en middelen vervangen."], 0, "Retreatisme trekt zich terug uit zowel doelen als middelen."],
  ["05", "basis", "Wat is rebellie bij Merton?", ["Doelen en middelen aanvaarden.", "Doelen en middelen verwerpen en vervangen door nieuwe.", "Alleen middelen volgen.", "Alleen primaire deviantie."], 1, "Rebellie wil een alternatief systeem van doelen en middelen."],
  ["05", "inzicht", "Welke socioloog hoort bij de delinquente subcultuurtheorie?", ["Cohen", "Hirschi", "Becker", "Durkheim"], 0, "Cohen verklaart delinquentie via statusfrustratie en deviante subculturen."],
  ["05", "inzicht", "Welke socioloog hoort bij de sociale controletheorie?", ["Merton", "Hirschi", "Hofstede", "Kohn"], 1, "Hirschi focust op bindingen met de conventionele samenleving."],
  ["05", "inzicht", "Welke socioloog hoort bij de labelingtheorie?", ["Becker", "Kohn", "Bourdieu", "Durkheim"], 0, "Becker focust op sociale reactie, labeling en stigma."],
];

const extraOpen = [
  ["01", "examen", "Bespreek waarom sociologie het alledaagse en vanzelfsprekende onderzoekt.", "Sociologie onderzoekt wat mensen vaak als normaal en vanzelfsprekend ervaren: omgangsvormen, regels, verwachtingen, rollen en instituties. Omdat we zelf deel uitmaken van de samenleving, merken we die sociale werkelijkheid niet altijd op. De sociologische blik maakt zichtbaar hoe gedrag samenhangt met cultuur, structuur en historische context.", ["Je legt uit wat vanzelfsprekendheid betekent.", "Je verbindt dit met cultuur en structuur.", "Je toont waarom dit relevant is voor sociaal werk."]],
  ["01", "examen", "Leg uit wat sociaal handelen is en geef twee voorbeelden uit de cursuslogica.", "Sociaal handelen is handelen waarbij iemand rekening houdt met anderen of hun mogelijke reactie. Een vriend bewust negeren is sociaal handelen omdat het gericht is op die vriend. Iemand bedanken voor een fijne avond is dat ook. Een hond zindelijk maken is geen sociaal handelen in deze betekenis, omdat het niet gaat om betekenisvolle menselijke betrokkenheid.", ["Je definieert sociaal handelen.", "Je geeft minstens twee juiste voorbeelden.", "Je kan ook een niet-voorbeeld benoemen."]],
  ["01", "toepassing", "Analyseer een schoolloopbaan vanuit actor- én systeemperspectief.", "Vanuit actorperspectief kijk je naar keuzes, motivatie, inzet en betekenisgeving van de student. Vanuit systeemperspectief kijk je naar ouderlijk opleidingsniveau, beroepsstatus, financiële ruimte, verwachtingen, schoolcultuur en kansenstructuur. Een goede sociologische analyse combineert beide: studenten handelen zelf, maar niet vanuit gelijke uitgangsposities.", ["Je bespreekt beide perspectieven.", "Je gebruikt minstens drie systeemfactoren.", "Je vermijdt een eenzijdige verklaring."]],
  ["02", "examen", "Leg uit waarom structuur en cultuur in de realiteit onlosmakelijk verbonden zijn.", "Structuur gaat over posities, relaties, sociale goederen, macht, status en rollen. Cultuur gaat over waarden, normen, betekenissen en verwachtingen. In de realiteit hangen ze samen: posities krijgen betekenis door cultuur, en cultuur wordt beleefd vanuit sociale posities. Een sociaal werker moet daarom tegelijk naar iemands plaats in de samenleving en naar betekenisgeving kijken.", ["Je definieert structuur.", "Je definieert cultuur.", "Je legt hun samenhang uit."]],
  ["02", "basis", "Omschrijf sociale goederen en geef minstens vier voorbeelden.", "Sociale goederen zijn middelen die in een samenleving waardevol zijn en ongelijk verdeeld kunnen zijn. Voorbeelden zijn inkomen, bezit, kennis, diploma's, macht, prestige, contacten, vertrouwen en toegang tot hulpbronnen. Ze beïnvloeden iemands positie en kansen.", ["Je definieert sociale goederen.", "Je geeft minstens vier voorbeelden.", "Je verbindt met ongelijkheid of kansen."]],
  ["02", "examen", "Leg statusconsistentie en statusinconsistentie uit met telkens een voorbeeld.", "Statusconsistentie betekent dat de waardering verbonden aan iemands posities in dezelfde lijn ligt, bijvoorbeeld hoog diploma, hoog inkomen en veel aanzien. Statusinconsistentie betekent dat statussen botsen, bijvoorbeeld hooggeschoold maar werkloos, of een belangrijk beroep met weinig maatschappelijke waardering.", ["Je definieert beide begrippen.", "Je geeft twee passende voorbeelden.", "Je gebruikt sociale status correct."]],
  ["02", "examen", "Leg uit hoe statussymbolen en sociale imitatie werken.", "Statussymbolen zijn zichtbare tekenen waarmee mensen tonen wie ze zijn, waar ze bij horen of hoe ze gezien willen worden. Sociale imitatie ontstaat wanneer mensen symbolen gebruiken die horen bij een groep waartoe ze willen behoren. Dit toont dat status niet alleen objectief bezit is, maar ook sociaal getoond en geïnterpreteerd wordt.", ["Je definieert statussymbolen.", "Je definieert sociale imitatie.", "Je legt de link met waardering en groepslidmaatschap."]],
  ["02", "toepassing", "Geef een voorbeeld van een intern rolconflict en een extern rolconflict in sociaal werk.", "Een intern rolconflict kan ontstaan wanneer een sociaal werker binnen één functie tegelijk controleur en ondersteuner moet zijn. Een extern rolconflict kan ontstaan wanneer dezelfde persoon als werknemer beschikbaar moet zijn, maar als ouder thuis nodig is. Intern speelt binnen één positie; extern tussen verschillende posities.", ["Je geeft twee voorbeelden.", "Je motiveert intern versus extern.", "Je koppelt aan rolverwachtingen."]],
  ["02", "examen", "Bespreek waarden, normen, doelen en verwachtingen aan de hand van de waarde gelijkheid.", "Gelijkheid is een waarde: een algemeen principe over wat rechtvaardig is. Een norm kan zijn dat discriminatie niet mag. Een doel kan zijn om inkomensongelijkheid te verkleinen of onderwijskansen te verbeteren. Een verwachting gaat over de vraag of mensen denken dat die norm of dat doel werkelijk gerealiseerd wordt.", ["Je gebruikt alle vier begrippen.", "Je past ze toe op gelijkheid.", "Je maakt het onderscheid concreet."]],
  ["02", "examen", "Leg Hofstede uit en formuleer een kritische bedenking.", "Hofstede ordent cultuurverschillen via dimensies zoals machtsafstand, individualisme versus collectivisme, masculien versus feminien, onzekerheidsvermijding, lange- of kortetermijngerichtheid en toegeeflijkheid versus terughoudendheid. Het model is nuttig als denkkader, maar moet voorzichtig gebruikt worden omdat het individuen kan reduceren tot nationale cultuur en interne diversiteit kan onderschatten.", ["Je noemt meerdere dimensies.", "Je legt de functie van het model uit.", "Je geeft een kritische bedenking."]],
  ["02", "examen", "Vergelijk cultuurabsolutisme, cultuurrelativisme en cultuurpluralisme.", "Cultuurabsolutisme beoordeelt andere culturen vanuit de eigen cultuur en ziet anders vaak als minder. Cultuurrelativisme probeert cultuur in haar eigen context te begrijpen, maar kan doorschieten in kritiekloosheid. Cultuurpluralisme erkent verschil én gelijkwaardigheid en zoekt dialoog, participatie en gedeelde menselijkheid.", ["Je bespreekt alle drie.", "Je benoemt risico's.", "Je toont waarom pluralisme belangrijk is."]],
  ["03", "basis", "Geef drie instituties uit je levensloop en leg hun voorspelbare werking uit.", "Voorbeelden kunnen zijn gezin, kinderopvang, school, gezondheidszorg, recht, economie of arbeid. Een gezin biedt rollen en verwachtingen rond zorg en opvoeding. School organiseert leren via vaste regels, jaren en diploma's. Zorginstellingen maken hulpverlening voorspelbaar via procedures en functies.", ["Je noemt drie instituties.", "Je legt per institutie voorspelbaarheid uit.", "Je onderscheidt institutie van organisatie waar mogelijk."]],
  ["03", "examen", "Leg uit hoe instituties gedrag langs gebaande wegen leiden.", "Instituties bieden vaste patronen voor terugkerende maatschappelijke behoeften. Daardoor weten mensen wat verwacht wordt bij geboorte, opvoeding, onderwijs, zorg, werk, recht of politieke besluitvorming. Ze beperken keuzestress en maken samenwerking mogelijk, maar kunnen ook druk, uitsluiting of ongelijkheid meebrengen.", ["Je definieert instituties.", "Je legt zekerheid/voorspelbaarheid uit.", "Je nuanceert met mogelijke nadelen."]],
  ["03", "examen", "Bespreek het incesttaboe als voorbeeld van sociaal geregelde intimiteit.", "Het incesttaboe toont dat zelfs seksuele relaties en verwantschap sociaal en cultureel geregeld worden. Samenlevingen bepalen wie met wie een seksuele of partnerrelatie mag aangaan. Dit bewijst dat gezins- en verwantschapsvormen niet louter biologisch zijn, maar institutioneel en cultureel georganiseerd.", ["Je legt incesttaboe uit.", "Je verbindt met gezin als institutie.", "Je toont dat intimiteit sociaal geregeld is."]],
  ["03", "toepassing", "Waarom is het voor sociaal werkers belangrijk om gezin, onderwijs, zorg en recht samen te bekijken?", "Cliëntsituaties bevinden zich vaak op kruispunten van instituties. Een gezinsprobleem kan samenhangen met school, inkomen, gezondheid, justitie of huisvesting. Door instituties samen te bekijken vermijdt de sociaal werker een te individuele verklaring en kan hij of zij beter zien welke organisaties en regels meespelen.", ["Je noemt meerdere instituties.", "Je legt kruispunten uit.", "Je verbindt met sociaal werk."]],
  ["04", "examen", "Leg uit waarom socialisatie tegelijk inpassing en aanpassing is.", "Socialisatie is inpassing omdat mensen leren wat binnen een samenleving normaal, gepast en verwacht is. Ze nemen waarden, normen en rollen op. Tegelijk is socialisatie aanpassing omdat mensen die regels interpreteren, ermee omgaan en er soms verandering in brengen. Actor en systeem werken dus samen.", ["Je legt inpassing uit.", "Je legt aanpassing uit.", "Je verbindt met actor en systeem."]],
  ["04", "examen", "Bespreek de rol van massamedia in tertiaire socialisatie.", "Massamedia en online media brengen beelden, verhalen en normen over hoe mensen leven, relaties aangaan, werken, consumeren en met verschil omgaan. Er is geen rechtstreeks persoonlijk contact nodig. Media kunnen primaire en secundaire socialisatie versterken, nuanceren of tegenwerken.", ["Je definieert tertiaire socialisatie.", "Je geeft mediavoorbeelden.", "Je legt invloed op normen/beelden uit."]],
  ["04", "examen", "Leg Kohns onderscheid tussen repressief en participatief opvoedingspatroon uit.", "Een repressief opvoedingspatroon legt meer nadruk op gehoorzaamheid, negatieve sancties, afhankelijkheid, niet-verbale of eenrichtingscommunicatie en oudergerichte socialisatie. Een participatief opvoedingspatroon legt meer nadruk op positieve en symbolische sancties, zelfstandigheid, verbale communicatie, interactie en kindgerichte socialisatie. Kohn verbindt dit met de sociale positie en werkomstandigheden van ouders.", ["Je bespreekt beide patronen.", "Je noemt meerdere kenmerken.", "Je verbindt met klasse of werkpositie."]],
  ["04", "examen", "Leg uit waarom onderwijs formeel gelijke kansen kan bieden en toch ongelijkheid reproduceren.", "Formeel kan elk kind toegang hebben tot onderwijs, maar kinderen starten niet met hetzelfde cultureel, sociaal en economisch kapitaal. Schoolcultuur sluit vaak beter aan bij middenklassecodes. Daardoor voelen sommige kinderen zich vanzelfsprekender thuis in onderwijs dan andere, en kunnen verschillen in verwachtingen en prestaties worden gereproduceerd.", ["Je noemt formele gelijkheid.", "Je noemt ongelijke startpositie.", "Je gebruikt kapitaal of schoolcultuur."]],
  ["04", "toepassing", "Leg uit waarom primaire socialisatie je blik kleurt maar je niet volledig bepaalt.", "Primaire socialisatie in het gezin geeft taal, waarden, normen, verwachtingen en vanzelfsprekendheden mee. Ze werkt als cultuurfilter. Toch worden mensen later ook beïnvloed door school, werk, vrienden, media en eigen ervaringen. Bovendien hebben actoren handelingsruimte. Daarom beïnvloedt primaire socialisatie sterk, maar bepaalt ze niet volledig.", ["Je legt cultuurfilter uit.", "Je noemt latere socialisatie.", "Je nuanceert determinisme."]],
  ["05", "examen", "Bespreek de vier soorten sociale sancties met voorbeelden.", "Sancties kunnen intern of extern en positief of negatief zijn. Intern positief is trots of tevredenheid. Intern negatief is schuld of schaamte. Extern positief is compliment, beloning, status of geld. Extern negatief is afkeuring, uitsluiting, roddel, boete of straf. Samen dragen ze bij aan sociale controle.", ["Je onderscheidt intern/extern.", "Je onderscheidt positief/negatief.", "Je geeft voorbeelden van alle vier."]],
  ["05", "examen", "Leg uit waarom deviantie ook functionele gevolgen kan hebben.", "Deviantie kan grenzen verduidelijken, solidariteit versterken, flexibiliteit van regels tonen, misstanden signaleren en maatschappelijke verandering mogelijk maken. Afwijkend gedrag is dus niet alleen bedreigend of dysfunctioneel. Het kan ook zichtbaar maken dat normen onduidelijk, onrechtvaardig of aan verandering toe zijn.", ["Je noemt minstens drie functionele gevolgen.", "Je nuanceert negatieve kijk op deviantie.", "Je geeft eventueel een voorbeeld."]],
  ["05", "examen", "Waarom behandelt de cursus biologische en psychologische verklaringen kritisch?", "Biologische en psychologische verklaringen kunnen sommige factoren belichten, maar ze zoeken oorzaken vooral in individu, lichaam of persoonlijkheid. Sociologie kijkt naar de organisatie en werking van de samenleving, sociale normen, machtsverhoudingen, kansenstructuren en labeling. De kritiek is dat individuele verklaringen de sociale context kunnen onderschatten.", ["Je beschrijft biologische/psychologische focus.", "Je beschrijft sociologische focus.", "Je noemt het risico van contextverlies."]],
  ["05", "examen", "Leg de delinquente subcultuurtheorie van Cohen uit.", "Cohen stelt dat delinquentie vooral kan ontstaan bij jongeren uit lagere sociale lagen die statusfrustratie ervaren. Wanneer dominante succescriteria moeilijk bereikbaar zijn, kan een subcultuur ontstaan waarin andere waarden status geven. Gedrag dat dominant als negatief geldt, kan binnen de groep erkenning opleveren.", ["Je noemt statusfrustratie.", "Je noemt lagere sociale lagen of jongeren.", "Je legt deviante subcultuur uit."]],
  ["05", "examen", "Bespreek Hirschi's vier bindingen met concrete voorbeelden.", "Attachment is binding aan belangrijke anderen, zoals ouders, leerkrachten of begeleiders. Commitment is investering in conventionele doelen, zoals opleiding of werk. Involvement is betrokkenheid bij reguliere activiteiten, zoals sport, school of vrijwilligerswerk. Belief is geloof in normen en regels. Hoe sterker die bindingen, hoe groter de sociale controle.", ["Je noemt alle vier bindingen.", "Je geeft concrete voorbeelden.", "Je legt verband met minder deviantie."]],
  ["05", "examen", "Leg Beckers idee van een deviante loopbaan uit.", "Volgens Becker wordt een deviante loopbaan gevormd door sociale reactie. Een eerste normovertreding kan worden betrapt en gelabeld. Door stigma, uitsluiting en beperkte kansen kan iemand zich meer met het label identificeren of aansluiting zoeken bij deviante groepen. Zo kan secundaire deviantie ontstaan.", ["Je noemt primair gedrag.", "Je noemt label/stigma.", "Je legt secundaire deviantie of loopbaan uit."]],
  ["05", "toepassing", "Waarom is het fout te zeggen dat iedereen evenveel kans maakt om voor deviantie afgestraft te worden?", "Deviantie en bestraffing zijn machtsgevoelig. Sociale positie, zichtbaarheid, klasse, etniciteit, status en institutionele aandacht beïnvloeden wie gecontroleerd, gelabeld of bestraft wordt. Sommige overtredingen van machtige groepen blijven minder zichtbaar of worden anders benoemd dan overtredingen van kwetsbare groepen.", ["Je zegt duidelijk dat de bewering fout is.", "Je bespreekt sociale positie/macht.", "Je legt ongelijke labeling of bestraffing uit."]],
  ["06", "examen", "Maak een voorbeeldantwoord voor: 'Wat is het nut van sociologie voor sociaal werk?'", "Sociologie helpt sociaal werkers om individueel gedrag te verbinden met sociale context. Ze maakt zichtbaar hoe structuur, cultuur, instituties, socialisatie, sociale controle en labeling invloed hebben. Daardoor vermijdt de sociaal werker te snelle schuldverklaringen en kan hij of zij problemen relationeel, historisch en maatschappelijk situeren.", ["Je noemt sociaal werk.", "Je gebruikt meerdere cursusbegrippen.", "Je legt uit waarom dit praktisch helpt."]],
  ["06", "examen", "Welke begrippen zou je zeker verbinden in een examenvraag over ongelijkheid?", "Bij ongelijkheid kan je sociale positie, sociale goederen, macht, status, klassegebonden socialisatie, cultureel kapitaal, onderwijs, instituties, systeemperspectief en sociale bepaaldheid verbinden. Sterk is ook om te tonen hoe ongelijkheid via socialisatie en onderwijs gereproduceerd kan worden.", ["Je noemt begrippen uit meerdere hoofdstukken.", "Je legt verband met reproductie.", "Je toont cursusoverzicht."]],
];

const extraCases = [
  ["01", "toepassing", "Een buurt organiseert protest tegen te weinig speelruimte. Na maanden actie beslist de gemeente een plein herin te richten.", "Analyseer dit vanuit actorperspectief en sociale constructie.", "Buurtbewoners zijn actoren die betekenis geven aan een situatie: te weinig speelruimte wordt als probleem gedefinieerd. Door collectief handelen beïnvloeden ze beleid en veranderen ze de sociale werkelijkheid. Dit illustreert sociale constructie: mensen maken mee de samenleving.", ["Je benoemt actoren.", "Je legt betekenisgeving uit.", "Je verbindt met sociale constructie."]],
  ["01", "toepassing", "Een cliënt eet ongezond. De hulpverlener zegt: 'Dat is gewoon een slechte keuze.' De cliënt woont in een buurt zonder betaalbare verse voeding en heeft onregelmatige werkuren.", "Analyseer op micro-, meso- en macroniveau.", "Micro gaat over individueel eetgedrag en keuzes. Meso gaat over buurt, werkuren, gezin en beschikbaarheid van voeding. Macro gaat over beleid, inkomensongelijkheid, arbeidsmarkt en voedselprijzen. De casus toont dat gezondheid niet alleen individuele keuze is.", ["Je gebruikt drie niveaus.", "Je past ze concreet toe.", "Je nuanceert individuele schuld."]],
  ["02", "toepassing", "Een chirurg en een poetsmedewerker werken in hetzelfde ziekenhuis, maar krijgen heel andere waardering en beslissingsmacht.", "Analyseer met positie, status, macht en sociale goederen.", "Beiden hebben een sociale positie in het ziekenhuis, maar de status en macht verschillen. De chirurg heeft doorgaans meer prestige, beslissingsruimte, inkomen en toegang tot sociale goederen. Dit toont hoe structurele verhoudingen ongelijkheid organiseren.", ["Je gebruikt positie.", "Je gebruikt status en macht.", "Je verbindt met sociale goederen."]],
  ["02", "toepassing", "Een school wil hoofddoeken volledig verbieden omdat 'onze cultuur nu eenmaal de norm is'.", "Welke diversiteitshouding herken je en hoe zou cultuurpluralisme anders kijken?", "De uitspraak vertrekt vanuit cultuurabsolutisme: de eigen cultuur wordt maatstaf. Cultuurpluralisme zou vertrekken van gelijkwaardigheid, dialoog en participatie. Dat betekent niet dat er geen regels mogen zijn, maar wel dat betrokkenen gehoord worden en dat verschillen niet automatisch als minderwaardig gelden.", ["Je herkent absolutisme.", "Je legt pluralisme uit.", "Je nuanceert regels en dialoog."]],
  ["02", "toepassing", "Een gezin verwacht dat oudste dochter veel huishoudelijke taken opneemt, terwijl haar broer vooral moet studeren.", "Analyseer met waarden, normen en genderspecifieke socialisatie.", "Het gezin hanteert waarden en normen over genderrollen. De dochter en broer krijgen verschillende lessen over zorg, verantwoordelijkheid en studie. Dit is genderspecifieke socialisatie en toont hoe cultuur via dagelijkse verwachtingen gedrag stuurt.", ["Je gebruikt waarden/normen.", "Je gebruikt gender.", "Je legt socialisatie uit."]],
  ["03", "toepassing", "Een jongere wordt begeleid door school, CLB, jeugdhulp en jeugdrechter.", "Analyseer dit als kruispunt van instituties.", "De casus raakt meerdere instituties: onderwijs, zorg/hulpverlening en recht. Elke institutie heeft eigen regels, rollen en organisaties. Voor sociaal werk is het belangrijk die samenhang te zien, omdat de jongere niet alleen individueel maar ook institutioneel gepositioneerd is.", ["Je noemt meerdere instituties.", "Je onderscheidt organisaties.", "Je verbindt met sociaal werk."]],
  ["03", "toepassing", "Een koppel vindt het vanzelfsprekend dat kinderopvang mee opvoedt, terwijl grootouders zeggen dat opvoeding vroeger vooral thuis gebeurde.", "Analyseer dit met functieverschuiving.", "De casus toont dat functies van het gezin doorheen de tijd verschuiven. Opvoeding en zorg worden meer gedeeld met kinderopvang, school en andere organisaties. Instituties zijn historisch veranderlijk; wat vanzelfsprekend is, verschilt per periode.", ["Je gebruikt functieverschuiving.", "Je benoemt historische verandering.", "Je noemt gezin en opvang/school."]],
  ["04", "toepassing", "Een kind speelt 'schooltje' en wisselt tussen de rol van juf en leerling.", "In welke fase van Mead past dit vooral en waarom?", "Dit past vooral bij de playfase. Het kind neemt specifieke rollen op en speelt die na, bijvoorbeeld juf en leerling. Het begrijpt nog niet noodzakelijk het volledige systeem van alle rollen en regels zoals in de gamefase.", ["Je noemt playfase.", "Je legt rolname uit.", "Je onderscheidt van gamefase."]],
  ["04", "toepassing", "Een student wil roepen uit frustratie maar doet het niet omdat iedereen vreemd zou kijken.", "Analyseer met I en Me.", "De impuls om te roepen komt van de I: het spontane en impulsieve deel. De Me vangt die impuls op en houdt rekening met sociale verwachtingen en mogelijke reacties van anderen. Daardoor past de student het gedrag aan.", ["Je benoemt I.", "Je benoemt Me.", "Je past beide correct toe."]],
  ["04", "toepassing", "Een leerling zegt: 'School is niet voor mensen zoals wij.'", "Analyseer met Bourdieu, symbolisch geweld en self-fulfilling prophecy.", "De uitspraak kan wijzen op geïnternaliseerde afstand tot schoolcultuur. Volgens Bourdieu kan school middenklassecodes opleggen alsof ze neutraal zijn; dat kan symbolisch geweld zijn. Als de leerling daardoor minder inzet toont en lagere verwachtingen bevestigd worden, ontstaat een self-fulfilling prophecy.", ["Je gebruikt Bourdieu.", "Je legt symbolisch geweld uit.", "Je gebruikt self-fulfilling prophecy."]],
  ["05", "toepassing", "Een organisatie heeft strikte regels, maar medewerkers wijken soms af om cliënten menselijk te helpen.", "Bespreek functionele deviantie.", "Afwijken van regels kan functioneel zijn wanneer regels niet passen bij concrete situaties. Deviantie kan flexibiliteit tonen en signaleren dat regels moeten worden herbekeken. Tegelijk moet men kritisch blijven voor mogelijke risico's.", ["Je legt functionele deviantie uit.", "Je past toe op regels.", "Je nuanceert."]],
  ["05", "toepassing", "Een jongere pleegt vandalisme omdat hij via school en werk geen status ervaart, maar in zijn groep wel aanzien krijgt voor stoer gedrag.", "Analyseer met Cohen.", "Volgens Cohen kan statusfrustratie bij jongeren leiden tot een deviante subcultuur. Wat in de dominante cultuur afgekeurd wordt, kan binnen de groep aanzien opleveren. Vandalisme krijgt dan een andere betekenis binnen de subcultuur.", ["Je noemt statusfrustratie.", "Je noemt deviante subcultuur.", "Je past betekenis in de groep toe."]],
  ["05", "toepassing", "Een volwassene blijft strikt alle procedures volgen op het werk, ook al gelooft hij niet meer in de doelen van de organisatie.", "Welke reactie bij Merton herken je?", "Dit is ritualisme. De persoon blijft de legitieme middelen of procedures volgen, maar gelooft niet meer in de achterliggende doelen.", ["Je noemt ritualisme.", "Je legt middelen versus doelen uit.", "Je past toe op de casus."]],
  ["05", "toepassing", "Een activist verwerpt bestaande succesdoelen en middelen en wil een volledig andere maatschappelijke orde.", "Welke reactie bij Merton herken je?", "Dit is rebellie. Rebellie verwerpt bestaande culturele doelen en legitieme middelen en wil ze vervangen door nieuwe doelen en middelen.", ["Je noemt rebellie.", "Je legt vervanging van doelen en middelen uit.", "Je past toe op activisme."]],
  ["05", "toepassing", "Een hulpverlener spreekt consequent over 'een jongere die een fout maakte' in plaats van 'een crimineel'.", "Analyseer dit met labelingtheorie en sociaal werk.", "De hulpverlener probeert te vermijden dat de persoon samenvalt met een deviant label. Vanuit Becker kan labeling stigma en secundaire deviantie versterken. Door gedrag te benoemen zonder identiteit vast te pinnen, kan sociaal werk helpen een deviante loopbaan te doorbreken.", ["Je gebruikt labeling.", "Je noemt stigma/secundaire deviantie.", "Je verbindt met sociaal werk."]],
];

questionBank.push(
  ...extraMc.map(([chapter, difficulty, prompt, options, answer, explanation], index) => ({
    id: `x-mc-${String(index + 1).padStart(3, "0")}`,
    chapter,
    type: "mc",
    difficulty,
    prompt,
    options,
    answer,
    explanation,
  })),
  ...extraOpen.map(([chapter, difficulty, prompt, model, rubric], index) => ({
    id: `x-open-${String(index + 1).padStart(3, "0")}`,
    chapter,
    type: "open",
    difficulty,
    prompt,
    model,
    rubric,
  })),
  ...extraCases.map(([chapter, difficulty, caseText, prompt, model, rubric], index) => ({
    id: `x-case-${String(index + 1).padStart(3, "0")}`,
    chapter,
    type: "case",
    difficulty,
    case: caseText,
    prompt,
    model,
    rubric,
  })),
);

const app = document.querySelector("#app");
const storageKey = "sociologie-oefenapp-progress-v1";

let state = {
  mode: "oefenen",
  chapter: "all",
  type: "all",
  difficulty: "all",
  query: "",
  activeQuestionId: questionBank[0].id,
  examIds: [],
  examIndex: 0,
  answers: loadProgress(),
};

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(state.answers));
}

function chapterById(id) {
  return chapters.find((chapter) => chapter.id === id);
}

function questionsForCurrentFilters() {
  return questionBank.filter((question) => {
    const matchesChapter = state.chapter === "all" || question.chapter === state.chapter;
    const matchesType = state.type === "all" || question.type === state.type;
    const matchesDifficulty =
      state.difficulty === "all" || question.difficulty === state.difficulty;
    const haystack = `${question.prompt} ${question.model || ""} ${question.explanation || ""} ${question.case || ""}`.toLowerCase();
    const matchesQuery = !state.query || haystack.includes(state.query.toLowerCase());
    return matchesChapter && matchesType && matchesDifficulty && matchesQuery;
  });
}

function answeredQuestions() {
  return Object.values(state.answers).filter((answer) => answer.done);
}

function correctCount() {
  return Object.values(state.answers).filter((answer) => answer.correct).length;
}

function render() {
  app.innerHTML = `
    <div class="app-shell">
      ${renderSidebar()}
      <main class="main">
        ${renderTopbar()}
        ${renderToolbar()}
        ${renderMode()}
      </main>
    </div>
  `;
  bindEvents();
}

function renderSidebar() {
  const modes = [
    ["oefenen", "Oefenen", "vrij"],
    ["examen", "Examenmodus", "mix"],
    ["begrippen", "Begrippen", "drill"],
    ["overzicht", "Voortgang", "score"],
  ];

  return `
    <aside class="sidebar">
      <div class="brand">
        <h1>Bouwstenen van sociologie</h1>
        <p>Oefenapp met examengerichte vragen, casussen en modelantwoorden.</p>
      </div>

      <div class="nav-section">
        <p class="nav-label">Modus</p>
        <div class="mode-list">
          ${modes
            .map(
              ([id, label, count]) => `
                <button class="nav-button ${state.mode === id ? "active" : ""}" data-mode="${id}">
                  <span class="nav-title">${label}</span>
                  <span class="nav-count">${count}</span>
                </button>
              `,
            )
            .join("")}
        </div>
      </div>

      <div class="nav-section">
        <p class="nav-label">Hoofdstukken</p>
        <div class="chapter-list">
          <button class="nav-button ${state.chapter === "all" ? "active" : ""}" data-chapter="all">
            <span class="nav-title">Alle hoofdstukken</span>
            <span class="nav-count">${questionBank.length}</span>
          </button>
          ${chapters
            .map((chapter) => {
              const count = questionBank.filter((question) => question.chapter === chapter.id).length;
              return `
                <button class="nav-button ${state.chapter === chapter.id ? "active" : ""}" data-chapter="${chapter.id}">
                  <span class="nav-title">${chapter.id}. ${chapter.title}</span>
                  <span class="nav-count">${count}</span>
                </button>
              `;
            })
            .join("")}
        </div>
      </div>
    </aside>
  `;
}

function renderTopbar() {
  const filtered = questionsForCurrentFilters();
  const done = answeredQuestions().length;
  const correct = correctCount();
  const score = done ? Math.round((correct / done) * 100) : 0;
  const title =
    state.mode === "examen"
      ? "Examenmodus"
      : state.mode === "begrippen"
        ? "Begrippen trainen"
        : state.mode === "overzicht"
          ? "Voortgang"
          : "Oefenen per hoofdstuk";

  return `
    <div class="topbar">
      <div>
        <div class="eyebrow">Sociaal werk - sociologie</div>
        <h2>${title}</h2>
        <p>${introForMode()}</p>
      </div>
      <div class="stats">
        <div class="stat">
          <div class="stat-value">${filtered.length}</div>
          <div class="stat-label">vragen in selectie</div>
        </div>
        <div class="stat">
          <div class="stat-value">${done}</div>
          <div class="stat-label">beantwoord</div>
        </div>
        <div class="stat">
          <div class="stat-value">${score}%</div>
          <div class="stat-label">juist / afgevinkt</div>
        </div>
      </div>
    </div>
  `;
}

function introForMode() {
  if (state.mode === "examen") {
    return "Start een gemengde ronde met begrippen, vergelijkingen en casussen. Beantwoord eerst zelf, kijk dan pas naar feedback en modelantwoord.";
  }
  if (state.mode === "begrippen") {
    return "Gebruik deze drill om begrippen snel te herkennen en in eigen woorden uit te leggen.";
  }
  if (state.mode === "overzicht") {
    return "Bekijk per hoofdstuk waar je al sterk staat en welke onderdelen je nog opnieuw moet oefenen.";
  }
  return "Kies een hoofdstuk en vraagtype. De open vragen zijn bewust uitgebreid, omdat je op het examen vooral verbanden en toepassingen moet kunnen uitleggen.";
}

function renderToolbar() {
  if (state.mode === "overzicht") {
    return `
      <div class="toolbar">
        <button class="secondary" data-action="reset-progress">Reset voortgang</button>
        <button class="primary" data-action="start-exam">Start gemengde examenronde</button>
      </div>
    `;
  }

  return `
    <div class="toolbar">
      <select class="select" data-filter="type">
        ${option("all", "Alle vraagtypes", state.type)}
        ${option("mc", "Meerkeuze", state.type)}
        ${option("open", "Open vragen", state.type)}
        ${option("case", "Casussen", state.type)}
      </select>
      <select class="select" data-filter="difficulty">
        ${option("all", "Alle niveaus", state.difficulty)}
        ${option("basis", "Basis", state.difficulty)}
        ${option("inzicht", "Inzicht", state.difficulty)}
        ${option("toepassing", "Toepassing", state.difficulty)}
        ${option("examen", "Examen", state.difficulty)}
      </select>
      <input class="search" data-search placeholder="Zoek op begrip, modelantwoord of casus" value="${escapeHtml(state.query)}" />
      <button class="secondary" data-action="shuffle">Willekeurige vraag</button>
      <button class="primary" data-action="start-exam">Start examenronde</button>
    </div>
  `;
}

function option(value, label, current) {
  return `<option value="${value}" ${value === current ? "selected" : ""}>${label}</option>`;
}

function renderMode() {
  if (state.mode === "examen") return renderExam();
  if (state.mode === "begrippen") return renderTerms();
  if (state.mode === "overzicht") return renderOverview();
  return renderPractice();
}

function renderPractice() {
  const questions = questionsForCurrentFilters();
  if (!questions.length) return `<div class="card empty">Geen vragen gevonden met deze filters.</div>`;
  return `<div class="grid">${questions.map(renderQuestionCard).join("")}</div>`;
}

function renderQuestionCard(question) {
  const chapter = chapterById(question.chapter);
  const answer = state.answers[question.id] || {};
  const typeLabel = question.type === "mc" ? "meerkeuze" : question.type === "case" ? "casus" : "open vraag";
  return `
    <article class="card question-card" style="border-top: 5px solid ${chapter.accent}">
      <div class="question-meta">
        <span class="pill blue">Hoofdstuk ${question.chapter}</span>
        <span class="pill">${typeLabel}</span>
        <span class="pill amber">${question.difficulty}</span>
      </div>
      <h3 class="question-title">${question.prompt}</h3>
      ${question.case ? `<div class="case-box"><strong>Casus</strong><br>${question.case}</div>` : ""}
      ${question.type === "mc" ? renderMc(question, answer) : renderOpen(question, answer)}
    </article>
  `;
}

function renderMc(question, answer) {
  const show = answer.done;
  return `
    <div class="options">
      ${question.options
        .map((item, index) => {
          let cls = "";
          if (answer.selected === index) cls += " selected";
          if (show && index === question.answer) cls += " correct";
          if (show && answer.selected === index && index !== question.answer) cls += " wrong";
          return `
            <button class="option${cls}" data-answer-mc="${question.id}" data-index="${index}">
              <span class="option-letter">${String.fromCharCode(65 + index)}</span>
              <span>${item}</span>
            </button>
          `;
        })
        .join("")}
    </div>
    <div class="actions">
      <button class="primary" data-action="check-mc" data-id="${question.id}" ${answer.selected === undefined ? "disabled" : ""}>Controleer</button>
      <button class="ghost" data-action="clear-answer" data-id="${question.id}">Opnieuw</button>
    </div>
    ${
      show
        ? `<div class="feedback ${answer.correct ? "" : "warn"}"><strong>${answer.correct ? "Juist." : "Nog niet."}</strong>${question.explanation}</div>`
        : ""
    }
  `;
}

function renderOpen(question, answer) {
  const checked = answer.done;
  return `
    <textarea class="answer-box" data-open-answer="${question.id}" placeholder="Schrijf je antwoord in eigen woorden. Denk: definitie, verband, voorbeeld.">${escapeHtml(answer.text || "")}</textarea>
    <div class="actions">
      <button class="primary" data-action="show-model" data-id="${question.id}">Toon modelantwoord</button>
      <button class="ghost" data-action="clear-answer" data-id="${question.id}">Wis</button>
    </div>
    ${
      checked
        ? `
          <div class="feedback">
            <strong>Modelantwoord</strong>
            ${question.model}
            <div class="rubric">
              ${question.rubric
                .map(
                  (item, index) => `
                    <label>
                      <input type="checkbox" data-rubric="${question.id}" data-index="${index}" ${answer.rubric?.[index] ? "checked" : ""} />
                      <span>${item}</span>
                    </label>
                  `,
                )
                .join("")}
            </div>
          </div>
        `
        : ""
    }
  `;
}

function renderExam() {
  if (!state.examIds.length) {
    return `
      <div class="card">
        <h3 class="question-title">Gemengde examenronde</h3>
        <p>Je krijgt 15 vragen uit je huidige selectie: meerkeuze, open vragen en casussen. Bij open vragen score je jezelf met de rubric.</p>
        <div class="actions">
          <button class="primary" data-action="start-exam">Start ronde</button>
          <button class="secondary" data-action="start-full-exam">Start grote ronde</button>
        </div>
      </div>
    `;
  }

  const current = questionBank.find((question) => question.id === state.examIds[state.examIndex]);
  const answered = state.examIds.filter((id) => state.answers[id]?.done).length;
  return `
    <div class="score-banner">
      <div class="score-ring">${state.examIndex + 1}/${state.examIds.length}</div>
      <div>
        <h3>Examenronde bezig</h3>
        <p>${answered} van ${state.examIds.length} vragen afgewerkt. Neem je tijd: eerst zelf antwoorden, dan feedback bekijken.</p>
      </div>
    </div>
    ${renderQuestionCard(current)}
    <div class="toolbar">
      <button class="secondary" data-action="prev-exam" ${state.examIndex === 0 ? "disabled" : ""}>Vorige vraag</button>
      <button class="primary" data-action="next-exam" ${state.examIndex >= state.examIds.length - 1 ? "disabled" : ""}>Volgende vraag</button>
      <button class="ghost" data-action="finish-exam">Ronde afsluiten</button>
    </div>
  `;
}

function renderTerms() {
  const terms = [
    ["Sociaal handelen", "Handelen dat rekening houdt met anderen of hun mogelijke reactie.", "01"],
    ["Actor", "Individu, groep of organisatie die sociaal handelt.", "01"],
    ["Systeem", "Cultuur en structuur waarin actoren handelen.", "01"],
    ["Sociale constructie", "Het idee dat mensen door betekenisgeving en handelen sociale werkelijkheid maken.", "01"],
    ["Sociale bepaaldheid", "Het idee dat cultuur en structuur menselijk handelen mee bepalen.", "01"],
    ["Micro", "Niveau van individuen en dagelijkse interacties.", "01"],
    ["Meso", "Niveau van gezinnen, buurten, organisaties en netwerken.", "01"],
    ["Macro", "Niveau van samenleving, beleid, economie en historische context.", "01"],
    ["Sociale positie", "Plaats in een netwerk van sociale relaties.", "02"],
    ["Positieset", "Geheel van sociale posities dat iemand tegelijk bekleedt.", "02"],
    ["Sociale status", "Waardering die verbonden is aan een positie.", "02"],
    ["Rol", "Verwachtingen die bij een sociale positie horen.", "02"],
    ["Rolconflict", "Botsing tussen rolverwachtingen.", "02"],
    ["Cultuur", "Gedeelde betekenisgeving: waarden, normen, overtuigingen en verwachtingen.", "02"],
    ["Subcultuur", "Groep met eigen waarden of gewoontes binnen de dominante cultuur.", "02"],
    ["Tegencultuur", "Groep die centrale waarden van de dominante cultuur verwerpt.", "02"],
    ["Institutie", "Gevestigde manier waarop een samenleving basisbehoeften regelt.", "03"],
    ["Socialisatie", "Proces waarin mensen waarden, normen, rollen en gedrag leren.", "04"],
    ["Interiorisatie", "Proces waarbij externe regels deel worden van de persoonlijkheid.", "04"],
    ["Me", "Gesocialiseerde deel van het zelf bij Mead.", "04"],
    ["I", "Spontane, creatieve en impulsieve deel van het zelf bij Mead.", "04"],
    ["Differentiële socialisatie", "Verschillende lessen naargelang sociale kenmerken zoals gender of klasse.", "04"],
    ["Sociale controle", "Processen die conform gedrag stimuleren.", "05"],
    ["Deviantie", "Onderkende afwijking van culturele normen.", "05"],
    ["Labeling", "Proces waarbij gedrag of personen als deviant benoemd worden.", "05"],
    ["Secundaire deviantie", "Gedrag dat ontstaat als reactie op label, stigma of uitsluiting.", "05"],
    ["Strain", "Spanning tussen culturele doelen en legitieme middelen.", "05"],
  ].filter((term) => state.chapter === "all" || term[2] === state.chapter);

  return `
    <div class="grid">
      ${terms
        .map(
          ([term, definition, chapter]) => `
            <article class="card">
              <div class="question-meta">
                <span class="pill blue">Hoofdstuk ${chapter}</span>
                <span class="pill">begrip</span>
              </div>
              <h3 class="question-title">${term}</h3>
              <p>${definition}</p>
              <textarea class="answer-box" placeholder="Typ dit begrip in je eigen woorden en geef een voorbeeld."></textarea>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderOverview() {
  const rows = chapters.map((chapter) => {
    const questions = questionBank.filter((question) => question.chapter === chapter.id);
    const done = questions.filter((question) => state.answers[question.id]?.done).length;
    const correct = questions.filter((question) => state.answers[question.id]?.correct).length;
    const percent = questions.length ? Math.round((done / questions.length) * 100) : 0;
    return `
      <div class="summary-item">
        <strong>Hoofdstuk ${chapter.id} - ${chapter.title}</strong>
        <span>${done}/${questions.length} vragen afgewerkt, ${correct} zeker juist of afgevinkt.</span>
        <div class="progress-bar"><div class="progress-fill" style="width:${percent}%"></div></div>
      </div>
    `;
  });

  return `
    <div class="card">
      <h3 class="question-title">Studieoverzicht</h3>
      <p>Streef per hoofdstuk naar minstens 80% afgewerkte vragen en herhaal vooral de casussen en open examenvragen.</p>
      <div class="summary-list">${rows.join("")}</div>
    </div>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      render();
    });
  });

  document.querySelectorAll("[data-chapter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.chapter = button.dataset.chapter;
      state.examIds = [];
      render();
    });
  });

  document.querySelectorAll("[data-filter]").forEach((input) => {
    input.addEventListener("change", () => {
      state[input.dataset.filter] = input.value;
      state.examIds = [];
      render();
    });
  });

  const search = document.querySelector("[data-search]");
  if (search) {
    search.addEventListener("change", () => {
      state.query = search.value;
      render();
    });
  }

  document.querySelectorAll("[data-answer-mc]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.answerMc;
      state.answers[id] = { ...(state.answers[id] || {}), selected: Number(button.dataset.index), done: false };
      saveProgress();
      render();
    });
  });

  document.querySelectorAll("[data-open-answer]").forEach((textarea) => {
    textarea.addEventListener("input", () => {
      const id = textarea.dataset.openAnswer;
      state.answers[id] = { ...(state.answers[id] || {}), text: textarea.value };
      saveProgress();
    });
  });

  document.querySelectorAll("[data-rubric]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const id = checkbox.dataset.rubric;
      const answer = state.answers[id] || {};
      const rubric = answer.rubric || [];
      rubric[Number(checkbox.dataset.index)] = checkbox.checked;
      const question = questionBank.find((item) => item.id === id);
      const correct = rubric.filter(Boolean).length >= Math.ceil(question.rubric.length * 0.67);
      state.answers[id] = { ...answer, rubric, done: true, correct };
      saveProgress();
      render();
    });
  });

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => handleAction(button.dataset.action, button.dataset.id));
  });
}

function handleAction(action, id) {
  if (action === "check-mc") {
    const question = questionBank.find((item) => item.id === id);
    const answer = state.answers[id] || {};
    state.answers[id] = {
      ...answer,
      done: true,
      correct: answer.selected === question.answer,
    };
  }

  if (action === "show-model") {
    state.answers[id] = {
      ...(state.answers[id] || {}),
      done: true,
      correct: false,
    };
  }

  if (action === "clear-answer") {
    delete state.answers[id];
  }

  if (action === "shuffle") {
    const questions = questionsForCurrentFilters();
    if (questions.length) {
      const question = questions[Math.floor(Math.random() * questions.length)];
      state.query = question.prompt.slice(0, 46);
    }
  }

  if (action === "start-exam") {
    state.mode = "examen";
    state.examIds = shuffle(questionsForCurrentFilters()).slice(0, 15).map((question) => question.id);
    state.examIndex = 0;
  }

  if (action === "start-full-exam") {
    state.mode = "examen";
    state.examIds = shuffle(questionsForCurrentFilters()).map((question) => question.id);
    state.examIndex = 0;
  }

  if (action === "prev-exam") {
    state.examIndex = Math.max(0, state.examIndex - 1);
  }

  if (action === "next-exam") {
    state.examIndex = Math.min(state.examIds.length - 1, state.examIndex + 1);
  }

  if (action === "finish-exam") {
    state.mode = "overzicht";
  }

  if (action === "reset-progress") {
    if (confirm("Alle voortgang wissen?")) {
      state.answers = {};
    }
  }

  saveProgress();
  render();
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

render();
