

/* DATA (Your Chapters with questions) */
const CHAPTERS = [
  {
    id: "ivc",
    name: "Indus Valley Civilization",
    icon: "🏛️",
    color: "#7F77DD",
    desc: "Harappa, Mohenjo-daro, and Urban Planning",
    questions: [
      {q:"Who first discovered Harappa?", options:["R.D Banerjee","Dayaram Sahni","John Marshall","Alexander Cunningham"], answer:1, topic:"IVC"},
  {q:"Who discovered Mohenjo-daro?", options:["Dayaram Sahni","John Marshall","R.D Banerjee","Charles Mason"], answer:2, topic:"IVC"},
  {q:"Who is known as the Father of Indus Valley Civilization?", options:["John Marshall","Alexander Cunningham","Dayaram Sahni","R.D Banerjee"], answer:0, topic:"IVC"},
  {q:"IVC belongs to which period?", options:["Prehistory","Protohistory","Historic","Modern"], answer:1, topic:"IVC"},
  {q:"Time period of IVC (as per your notes)?", options:["2600–1900 BC","2300–1750 BC","1500–500 BC","3000–1000 BC"], answer:1, topic:"IVC"},
  {q:"Main script of IVC?", options:["Alphabetic","Pictographic","Numeric","Sanskrit"], answer:1, topic:"IVC"},
  {q:"Writing style used in IVC?", options:["Left to Right","Right to Left","Boustrophedon","Vertical"], answer:2, topic:"IVC"},
  {q:"Main occupation of IVC people?", options:["Hunting","Fishing","Agriculture","War"], answer:2, topic:"IVC"},
  {q:"IVC traded mainly with?", options:["China","Mesopotamia","Egypt","Rome"], answer:1, topic:"IVC"},
  {q:"Mesopotamians called IVC people?", options:["Aryans","Meluha","Indians","Dravidians"], answer:1, topic:"IVC"},
  {q:"Who set up Archaeological Survey of India?", options:["John Marshall","Alexander Cunningham","Mason","Banerjee"], answer:1, topic:"IVC"},
  {q:"ASI was established in?", options:["1857","1861","1901","1921"], answer:1, topic:"IVC"},
  {q:"Charles Mason discovered Harappa in?", options:["1826","1921","1861","1905"], answer:0, topic:"IVC"},
  {q:"Burnt bricks were mainly used for?", options:["Decoration","Standard construction","Art","Weapons"], answer:1, topic:"IVC"},
  {q:"Who coined the term Indus Valley Civilization?", options:["Cunningham","John Marshall","Sahni","Banerjee"], answer:1, topic:"IVC"},
  {q:"Harappa is located near which river?", options:["Indus","Ravi","Beas","Chenab"], answer:1, topic:"IVC"},
  {q:"Mohenjo-daro is located near?", options:["Ravi","Indus","Beas","Satluj"], answer:1, topic:"IVC"},
  {q:"Sutkagendor lies in which direction?", options:["North","South","East","West"], answer:3, topic:"IVC"},
  {q:"Alamgirpur lies in which direction?", options:["East","West","North","South"], answer:0, topic:"IVC"},
  {q:"Daimabad lies in?", options:["Punjab","Gujarat","Maharashtra","Rajasthan"], answer:2, topic:"IVC"},
  {q:"Nature worship in IVC is called?", options:["Animism","Totemism","Spiritualism","Naturalism"], answer:0, topic:"IVC"},
  {q:"Which tree was worshipped?", options:["Neem","Peepal","Banyan","Mango"], answer:1, topic:"IVC"},
  {q:"Main deity of IVC?", options:["Shiva","Mother Goddess","Indra","Agni"], answer:1, topic:"IVC"},
  {q:"Pashupati seal represents?", options:["Vishnu","Shiva","Indra","Brahma"], answer:1, topic:"IVC"},
  {q:"Which animal appears on seals frequently?", options:["Horse","Elephant","Unicorn","Tiger"], answer:2, topic:"IVC"},
  {q:"How many types of burial found?", options:["2","3","4","5"], answer:1, topic:"IVC"},
  {q:"Which is NOT a burial type?", options:["Complete","Fractional","Post-cremation","Water burial"], answer:3, topic:"IVC"},
  {q:"Burial ground found at?", options:["Harappa","Lothal","Kalibangan","Dholavira"], answer:0, topic:"IVC"},
  {q:"Seals were made of?", options:["Iron","Copper","Steatite","Gold"], answer:2, topic:"IVC"},
  {q:"Purpose of seals?", options:["Decoration","Property transfer","Weapons","Trade only"], answer:1, topic:"IVC"},
  {q:"Square seals contain?", options:["Only writing","Picture + writing","Only picture","Nothing"], answer:1, topic:"IVC"},
  {q:"Circular seals show?", options:["Animals","Dot in middle","Gods","Trees"], answer:1, topic:"IVC"},
  {q:"Cylindrical seals found in?", options:["IVC","China","Mesopotamia","Egypt"], answer:2, topic:"IVC"},
  {q:"Main source of economy?", options:["War","Agriculture & Trade","Fishing","Hunting"], answer:1, topic:"IVC"},
  {q:"First cotton cultivated in?", options:["Egypt","China","IVC","Rome"], answer:2, topic:"IVC"},
  {q:"Cotton was called?", options:["Sindon","Cottonus","Linen","Silk"], answer:0, topic:"IVC"},
  {q:"Trade name used for IVC in Mesopotamia?", options:["Meluha","Sindon","Indica","Dravida"], answer:0, topic:"IVC"},
  {q:"IVC had no trade relation with?", options:["Mesopotamia","China","Persia","Arab"], answer:1, topic:"IVC"},
  {q:"Upper town is called?", options:["Lower town","Citadel","Fort","Colony"], answer:1, topic:"IVC"},
  {q:"Lower town was for?", options:["Rich people","Poor people","Priests","Kings"], answer:1, topic:"IVC"},
  {q:"Unique feature of IVC cities?", options:["Temples","Drainage system","Forts","Markets"], answer:1, topic:"IVC"},
  {q:"Doors of houses faced?", options:["Main road","Side lanes","Backyard","River"], answer:1, topic:"IVC"},
  {q:"Streets were?", options:["Curved","Irregular","Grid pattern","Circular"], answer:2, topic:"IVC"},
  {q:"Harappa discovered in?", options:["1921","1922","1900","1850"], answer:0, topic:"IVC"},
  {q:"Modern location of Harappa?", options:["India","Pakistan","Afghanistan","Nepal"], answer:1, topic:"IVC"},
  {q:"Great Granary found at?", options:["Harappa","Lothal","Kalibangan","Dholavira"], answer:0, topic:"IVC"},
  {q:"Cemetery R-37 found at?", options:["Harappa","Lothal","Mohenjo-daro","Dholavira"], answer:0, topic:"IVC"},
  {q:"Harappa lies on which side of Ravi?", options:["Right","Left","North","South"], answer:1, topic:"IVC"},
  {q:"Mohenjo-daro means?", options:["City of gold","Mound of dead","City of gods","Ancient city"], answer:1, topic:"IVC"},
  {q:"Mohenjo-daro discovered in?", options:["1921","1922","1901","1857"], answer:1, topic:"IVC"},
  {q:"Great Bath found at?", options:["Harappa","Lothal","Mohenjo-daro","Kalibangan"], answer:2, topic:"IVC"},
  {q:"Priest King statue found at?", options:["Harappa","Mohenjo-daro","Lothal","Dholavira"], answer:1, topic:"IVC"},
  {q:"Dancing girl statue made of?", options:["Stone","Gold","Bronze","Copper"], answer:2, topic:"IVC"},
  {q:"Kalibangan is in?", options:["Punjab","Rajasthan","Gujarat","Haryana"], answer:1, topic:"IVC"},
  {q:"River near Kalibangan?", options:["Indus","Ravi","Ghaggar","Beas"], answer:2, topic:"IVC"},
  {q:"Evidence of ploughed field found at?", options:["Harappa","Lothal","Kalibangan","Dholavira"], answer:2, topic:"IVC"},
  {q:"Fire altars found at?", options:["Kalibangan","Lothal","Harappa","Mohenjo-daro"], answer:0, topic:"IVC"},
  {q:"Drainage system absent in?", options:["Harappa","Mohenjo-daro","Kalibangan","Lothal"], answer:2, topic:"IVC"},
  {q:"Lothal located in?", options:["Punjab","Gujarat","Rajasthan","Haryana"], answer:1, topic:"IVC"},
  {q:"Lothal is famous for?", options:["Temple","Dockyard","Granary","Palace"], answer:1, topic:"IVC"},
  {q:"Artificial port found at?", options:["Harappa","Lothal","Kalibangan","Dholavira"], answer:1, topic:"IVC"},
  {q:"Rice husk found at?", options:["Lothal","Harappa","Kalibangan","Rakhigarhi"], answer:0, topic:"IVC"},
  {q:"Evidence of chess found at?", options:["Lothal","Harappa","Mohenjo-daro","Dholavira"], answer:0, topic:"IVC"},
  {q:"Dholavira located in?", options:["Punjab","Gujarat","Rajasthan","Haryana"], answer:1, topic:"IVC"},
  {q:"Unique feature of Dholavira?", options:["Dockyard","Stone architecture","Fire altar","Granary"], answer:1, topic:"IVC"},
  {q:"Dholavira divided into how many parts?", options:["2","3","4","5"], answer:1, topic:"IVC"},
  {q:"UNESCO declared Dholavira heritage in?", options:["2020","2021","2019","2018"], answer:1, topic:"IVC"},
  {q:"Signboard inscription found at?", options:["Dholavira","Harappa","Lothal","Kalibangan"], answer:0, topic:"IVC"},
  {q:"Chanhudaro is famous for?", options:["Granary","Beads factory","Temple","Dockyard"], answer:1, topic:"IVC"},
  {q:"Rakhigarhi is located in?", options:["Punjab","Haryana","Gujarat","UP"], answer:1, topic:"IVC"},
  {q:"Largest IVC site?", options:["Harappa","Mohenjo-daro","Rakhigarhi","Dholavira"], answer:2, topic:"IVC"},
  {q:"Ropar located in?", options:["Punjab","Haryana","Gujarat","Rajasthan"], answer:0, topic:"IVC"},
  {q:"Amri located in?", options:["India","Pakistan","Nepal","China"], answer:1, topic:"IVC"},
  {q:"IVC script is?", options:["Fully decoded","Partially decoded","Undeciphered","Latin"], answer:2, topic:"IVC"},
  {q:"IVC cities lacked?", options:["Drainage","Planning","Temples","Bricks"], answer:2, topic:"IVC"},
  {q:"Horse evidence in IVC?", options:["Clear","Partial","Absent","Dominant"], answer:2, topic:"IVC"},
  {q:"Metal mainly used in IVC?", options:["Iron","Copper","Bronze","Gold"], answer:2, topic:"IVC"},
  {q:"IVC people used iron?", options:["Yes","No","Partially","Unknown"], answer:1, topic:"IVC"},
  {q:"Granaries indicate?", options:["War","Storage system","Religion","Art"], answer:1, topic:"IVC"},
  {q:"Dockyard indicates?", options:["War","Trade","Religion","Agriculture"], answer:1, topic:"IVC"},
  {q:"Grid planning shows?", options:["Chaos","Urban planning","Rural life","War"], answer:1, topic:"IVC"},
  {q:"Standard bricks show?", options:["Art","Uniformity","Religion","Decoration"], answer:1, topic:"IVC"},
  {q:"Seals indicate?", options:["Trade","War","Agriculture","Religion"], answer:0, topic:"IVC"},
  {q:"Mother goddess represents?", options:["War","Fertility","Death","Rain"], answer:1, topic:"IVC"},
  {q:"Pashupati seal shows?", options:["War","Meditation","Dance","Trade"], answer:1, topic:"IVC"},
  {q:"Fire altars indicate?", options:["Religion","Trade","War","Agriculture"], answer:0, topic:"IVC"},
  {q:"Ploughed field indicates?", options:["Trade","Agriculture","War","Religion"], answer:1, topic:"IVC"},
  {q:"Granary indicates?", options:["Storage","War","Temple","House"], answer:0, topic:"IVC"},
  {q:"Drainage system shows?", options:["Poor planning","Advanced engineering","War","Trade"], answer:1, topic:"IVC"},
  {q:"Citadel indicates?", options:["Poor people","Rich/elite","Animals","Farmers"], answer:1, topic:"IVC"},
  {q:"Lower town indicates?", options:["Elite","Common people","Kings","Priests"], answer:1, topic:"IVC"},
  {q:"Burnt bricks indicate?", options:["Temporary","Permanent construction","Decoration","Art"], answer:1, topic:"IVC"},
  {q:"IVC cities were?", options:["Rural","Urban","Nomadic","Tribal"], answer:1, topic:"IVC"},
  {q:"Which Indus site is known for water management system?", options:["Harappa","Mohenjo-daro","Dholavira","Kalibangan"], answer:2, topic:"IVC"},
  {q:"Which site shows evidence of lipstick?", options:["Lothal","Chanhudaro","Harappa","Dholavira"], answer:1, topic:"IVC"},
  {q:"Which IVC site had no citadel?", options:["Harappa","Mohenjo-daro","Chanhudaro","Kalibangan"], answer:2, topic:"IVC"},
  {q:"Which site is known as 'Manchester of IVC'?", options:["Harappa","Lothal","Mohenjo-daro","Dholavira"], answer:1, topic:"IVC"},
  {q:"Which animal bones found at Kalibangan?", options:["Horse","Camel","Elephant","Tiger"], answer:1, topic:"IVC"},
  {q:"Which material was NOT used by IVC people?", options:["Copper","Bronze","Iron","Gold"], answer:2, topic:"IVC"},
  {q:"Which site shows evidence of double burial?", options:["Harappa","Lothal","Kalibangan","Dholavira"], answer:1, topic:"IVC"}
    ]
  },
  {
    id: "vedic",
    name: "Vedic Age",
    icon: "📖",
    color: "#EF9F27",
    desc: "Rigveda, Aryan society and religion",
    questions: [
      {q:"Rigveda contains how many hymns?", options:["1028","1000","512","2000"], answer:0, topic:"Early Vedic"},
{q:"The chief deity of the Rigveda is?", options:["Vishnu","Shiva","Indra","Brahma"], answer:2, topic:"Early Vedic"},
{q:"The Vedic Civilization is also known as?", options:["Dravidian","Aryan","Harappan","Greek"], answer:1, topic:"Basics"},
{q:"Early Vedic people settled in?", options:["Ganga Valley","Sapta Sindhu","Deccan","South India"], answer:1, topic:"Geography"},
{q:"Main economic activity in early Vedic period?", options:["Agriculture","Pastoralism","Trade","Craft"], answer:1, topic:"Economy"},
{q:"Rigveda is a collection of?", options:["Laws","Hymns","Stories","Codes"], answer:1, topic:"Texts"},
{q:"Number of Vedas?", options:["2","3","4","5"], answer:2, topic:"Texts"},
{q:"Oldest Veda?", options:["Yajur","Sama","Rig","Atharva"], answer:2, topic:"Texts"},
{q:"Later Vedic age is marked by use of?", options:["Copper","Bronze","Iron","Gold"], answer:2, topic:"Later Vedic"},
{q:"King in early Vedic age was called?", options:["Bhupati","Rajan","Samrat","Gopati"], answer:3, topic:"Polity"},

{q:"Sapta Sindhu refers to?", options:["7 hills","7 rivers","7 tribes","7 kingdoms"], answer:1, topic:"Geography"},
{q:"Indra is the god of?", options:["Fire","Rain/Thunder","Wind","Sun"], answer:1, topic:"Religion"},
{q:"Agni is the god of?", options:["Wind","Fire","Water","Sky"], answer:1, topic:"Religion"},
{q:"Varuna is the god of?", options:["War","Water","Fire","Sky"], answer:1, topic:"Religion"},
{q:"Total Vedic gods mentioned?", options:["10","100","33","108"], answer:2, topic:"Religion"},
{q:"Gayatri Mantra is found in which Mandala?", options:["I","II","III","X"], answer:2, topic:"Texts"},
{q:"Gayatri Mantra was composed by?", options:["Vashishta","Vishwamitra","Valmiki","Vyasa"], answer:1, topic:"Texts"},
{q:"Battle of Ten Kings took place on river?", options:["Ganga","Yamuna","Ravi","Indus"], answer:2, topic:"History"},
{q:"Who won the Battle of Ten Kings?", options:["Sudasa","Indra","Vashishta","Aryans"], answer:0, topic:"History"},
{q:"Purusha Sukta is found in?", options:["Mandala V","Mandala VII","Mandala X","Mandala II"], answer:2, topic:"Texts"},

{q:"Purusha Sukta explains?", options:["War","Trade","Caste system","Agriculture"], answer:2, topic:"Society"},
{q:"Brahmins originated from?", options:["Feet","Arms","Mouth","Thighs"], answer:2, topic:"Society"},
{q:"Kshatriyas originated from?", options:["Mouth","Arms","Feet","Thighs"], answer:1, topic:"Society"},
{q:"Vaishyas originated from?", options:["Thighs","Feet","Head","Arms"], answer:0, topic:"Society"},
{q:"Shudras originated from?", options:["Feet","Head","Arms","Thighs"], answer:0, topic:"Society"},

{q:"Sama Veda is related to?", options:["War","Music","Medicine","Trade"], answer:1, topic:"Texts"},
{q:"Yajur Veda deals with?", options:["Music","War","Rituals","Trade"], answer:2, topic:"Texts"},
{q:"Atharva Veda deals with?", options:["Music","Black magic","Trade","Law"], answer:1, topic:"Texts"},

{q:"Ayurveda is associated with?", options:["Rig Veda","Yajur Veda","Sama Veda","Atharva Veda"], answer:0, topic:"Upveda"},
{q:"Dhanurveda is related to?", options:["Medicine","War","Music","Art"], answer:1, topic:"Upveda"},
{q:"Gandharva Veda deals with?", options:["Music","War","Trade","Law"], answer:0, topic:"Upveda"},
{q:"Shilpa Veda deals with?", options:["Art","War","Medicine","Music"], answer:0, topic:"Upveda"},

{q:"Sabha performed which function?", options:["Army","Judiciary","Trade","Tax"], answer:1, topic:"Polity"},
{q:"Samiti was known as?", options:["Least popular","Most popular assembly","Army","Religious body"], answer:1, topic:"Polity"},
{q:"Vidath was?", options:["Newest assembly","Oldest assembly","Trade group","Army unit"], answer:1, topic:"Polity"},

{q:"Which assembly elected the king?", options:["Sabha","Samiti","Vidath","None"], answer:1, topic:"Polity"},
{q:"Common drink in Vedic period?", options:["Milk","Wine","Soma & Sura","Water"], answer:2, topic:"Culture"},
{q:"Main food habit?", options:["Rice","Milk products","Wheat","Meat"], answer:1, topic:"Culture"},

{q:"Barley was called?", options:["Yava","Vrihi","Anna","Tandul"], answer:0, topic:"Agriculture"},
{q:"Rice was called?", options:["Yava","Vrihi","Anna","Dhanya"], answer:1, topic:"Agriculture"},

{q:"Mana and Nishka were?", options:["Weapons","Coins","Clothes","Tools"], answer:1, topic:"Economy"},
{q:"Gomath refers to?", options:["Poor","Rich","Priest","Farmer"], answer:1, topic:"Economy"},

{q:"Krishna Ayas means?", options:["Gold","Silver","Copper","Iron"], answer:3, topic:"Metals"},
{q:"Total Upanishads?", options:["18","108","64","32"], answer:1, topic:"Philosophy"},
{q:"Upanishads are also called?", options:["Vedanta","Shruti","Smriti","Veda"], answer:0, topic:"Philosophy"},

{q:"Nyaya philosophy founder?", options:["Kapil","Gautam","Patanjali","Kanad"], answer:1, topic:"Philosophy"},
{q:"Sankhya philosophy founder?", options:["Kapil","Gautam","Kanad","Jaimini"], answer:0, topic:"Philosophy"},
{q:"Yoga philosophy founder?", options:["Patanjali","Kapil","Kanad","Gautam"], answer:0, topic:"Philosophy"},

{q:"Total number of Puranas?", options:["10","18","20","25"], answer:1, topic:"Texts"},
{q:"Mahabharata original name?", options:["Bharata","Jai Samhita","Ramayana","Purana"], answer:1, topic:"Epics"},
{q:"Ramayana was written by?", options:["Vyasa","Valmiki","Kalidasa","Tulsidas"], answer:1, topic:"Epics"},

// HARD SECTION CONTINUES

{q:"Arya is a concept of?", options:["Race","Language","Religion","Caste"], answer:1, topic:"Concept"},
{q:"Indo-European languages include?", options:["Chinese","Latin","Greek","Arabic"], answer:2, topic:"Language"},
{q:"Max Muller supported which homeland?", options:["India","Central Asia","Arctic","Tibet"], answer:1, topic:"Origin"},
{q:"Tilak supported which homeland?", options:["Central Asia","Arctic","India","Europe"], answer:1, topic:"Origin"},

{q:"Rigveda has how many Mandalas?", options:["8","10","12","14"], answer:1, topic:"Texts"},
{q:"Atharva Veda is also known as?", options:["Sacred Veda","Non-Aryan Veda","War Veda","Music Veda"], answer:1, topic:"Texts"},

{q:"Women could participate in?", options:["Sabha","Samiti","Both","None"], answer:1, topic:"Society"},
{q:"Sabha consisted of?", options:["Children","Women","Elders","Slaves"], answer:2, topic:"Society"},

{q:"Sati system started in?", options:["Early Vedic","Later Vedic","Mauryan","Gupta"], answer:1, topic:"Society"},
{q:"Child marriage started in?", options:["Early Vedic","Later Vedic","Harappan","None"], answer:1, topic:"Society"},

{q:"Polygamy existed in?", options:["Early Vedic","Later Vedic","Both","None"], answer:1, topic:"Society"},
{q:"Widow remarriage was?", options:["Present later","Present early","Never present","Illegal"], answer:1, topic:"Society"},

{q:"Brahmavadini were?", options:["Warriors","Scholars","Traders","Farmers"], answer:1, topic:"Society"},
{q:"Sadyovadhu were?", options:["Unmarried scholars","Married women","Widows","Queens"], answer:1, topic:"Society"},

{q:"Gargi and Maitreyi belong to?", options:["Early Vedic","Later Vedic","Harappan","Mauryan"], answer:1, topic:"Society"},

{q:"Yajur Veda divided into?", options:["2 parts","3 parts","4 parts","5 parts"], answer:0, topic:"Texts"},
{q:"Krishna Yajur Veda is?", options:["Poetry","Prose","Mixed","None"], answer:1, topic:"Texts"},
{q:"Shukla Yajur Veda is?", options:["Poetry","Prose","Mixed","None"], answer:0, topic:"Texts"},

{q:"Brahman texts explain?", options:["Songs","Rituals","War","Trade"], answer:1, topic:"Texts"},
{q:"Aranyakas are called?", options:["War books","Forest books","Law books","Trade books"], answer:1, topic:"Texts"},

{q:"Upanishads deal with?", options:["War","Philosophy","Trade","Music"], answer:1, topic:"Texts"},
{q:"Meaning of Upanishad?", options:["Sit near teacher","Fight","Trade","Sing"], answer:0, topic:"Texts"},

{q:"Oldest political assembly?", options:["Sabha","Samiti","Vidath","None"], answer:2, topic:"Polity"},
{q:"Samiti was most?", options:["Powerful","Popular","Old","Weak"], answer:1, topic:"Polity"},

// ---- FINAL 25 VEDIC QUESTIONS ----

{q:"Which Veda is considered the source of Indian music?", options:["Rig Veda","Sama Veda","Yajur Veda","Atharva Veda"], answer:1, topic:"Texts"},
{q:"Which Veda contains charms and spells?", options:["Rig Veda","Sama Veda","Yajur Veda","Atharva Veda"], answer:3, topic:"Texts"},
{q:"Which Veda is mainly for sacrificial formulas?", options:["Rig Veda","Sama Veda","Yajur Veda","Atharva Veda"], answer:2, topic:"Texts"},

{q:"Which priest recited hymns in rituals?", options:["Adhvaryu","Hotri","Udgatri","Brahman"], answer:1, topic:"Religion"},
{q:"Which priest performed sacrifices?", options:["Hotri","Adhvaryu","Udgatri","None"], answer:1, topic:"Religion"},
{q:"Which priest sang hymns?", options:["Hotri","Adhvaryu","Udgatri","Brahman"], answer:2, topic:"Religion"},
{q:"Which priest supervised rituals?", options:["Hotri","Adhvaryu","Udgatri","Brahman"], answer:3, topic:"Religion"},

{q:"Which river is most mentioned in Rigveda?", options:["Ganga","Yamuna","Saraswati","Indus"], answer:2, topic:"Geography"},
{q:"Which river was considered sacred but later disappeared?", options:["Ganga","Saraswati","Yamuna","Godavari"], answer:1, topic:"Geography"},

{q:"Which animal was most important in Vedic economy?", options:["Horse","Cow","Elephant","Goat"], answer:1, topic:"Economy"},
{q:"Term for cow wealth?", options:["Gomath","Gopati","Goshala","Grahapati"], answer:0, topic:"Economy"},

{q:"Ashvamedha sacrifice was related to?", options:["Agriculture","War/Power","Marriage","Trade"], answer:1, topic:"Religion"},
{q:"Rajasuya sacrifice was performed by?", options:["Priest","King","Farmer","Trader"], answer:1, topic:"Religion"},
{q:"Vajapeya sacrifice symbolized?", options:["War","Victory & power","Trade","Marriage"], answer:1, topic:"Religion"},

{q:"Which system became rigid in later Vedic period?", options:["Varna system","Trade system","Military","Religion"], answer:0, topic:"Society"},
{q:"Which Varna had lowest status?", options:["Brahmin","Kshatriya","Vaishya","Shudra"], answer:3, topic:"Society"},

{q:"Who were called Dasa/Dasyu?", options:["Aryans","Enemies","Priests","Traders"], answer:1, topic:"Society"},
{q:"Which group was non-Aryan?", options:["Arya","Dasa","Brahmin","Kshatriya"], answer:1, topic:"Society"},

{q:"What was the unit of family called?", options:["Kula","Grama","Vis","Jana"], answer:0, topic:"Polity"},
{q:"Village was called?", options:["Kula","Grama","Vis","Jana"], answer:1, topic:"Polity"},
{q:"Clan was called?", options:["Kula","Grama","Vis","Jana"], answer:2, topic:"Polity"},
{q:"Tribe was called?", options:["Kula","Grama","Vis","Jana"], answer:3, topic:"Polity"},

{q:"Who was head of village?", options:["Rajan","Gramni","Purohit","Senani"], answer:1, topic:"Polity"},
{q:"Who was commander of army?", options:["Gramni","Senani","Purohit","Rajan"], answer:1, topic:"Polity"},

{q:"Which metal was first used in early Vedic age?", options:["Iron","Copper","Gold","Silver"], answer:1, topic:"Metals"},
{q:"Which metal dominated later Vedic age?", options:["Copper","Bronze","Iron","Gold"], answer:2, topic:"Metals"}

    ]
  },
  {
    id: "mahajanapada",
    name: "Mahajanapadas & Magadha",
    icon: "⚔️",
    color: "#E67E22",
    desc: "16 Mahajanapadas, Rise of Magadha, Dynasties & Buddhist Councils",
    questions: [

{q:"Which Mahajanapada became most powerful in 6th century BC?", options:["Kosala","Magadha","Vatsa","Avanti"], answer:1, topic:"Magadha"},
{q:"Reason for rise of Magadha?", options:["Iron resources","Weak rulers","No enemies","Desert"], answer:0, topic:"Magadha"},
{q:"Magadha had advantage of?", options:["Mountains","Rivers","Desert","Forest"], answer:1, topic:"Magadha"},
{q:"Which river helped Magadha trade?", options:["Indus","Ganga","Yamuna","Godavari"], answer:1, topic:"Magadha"},

{q:"Who was contemporary of Buddha?", options:["Ashoka","Bimbisara","Akbar","Chandragupta"], answer:1, topic:"Magadha"},
{q:"Who was contemporary of Mahavira?", options:["Bimbisara","Ashoka","Harsha","Bindusara"], answer:0, topic:"Magadha"},

{q:"Which Mahajanapada had republican system?", options:["Magadha","Vrijji","Kosala","Avanti"], answer:1, topic:"Republic"},
{q:"Assembly of Vrijji was called?", options:["Sabha","Gana","Samiti","Parishad"], answer:1, topic:"Republic"},

{q:"Capital of Avanti (second)?", options:["Mahishmati","Rajgir","Mathura","Vaishali"], answer:0, topic:"Avanti"},
{q:"Famous king of Avanti?", options:["Pradyota","Bimbisara","Ajatashatru","Udayan"], answer:0, topic:"Avanti"},

{q:"Which Mahajanapada was divided into two parts?", options:["Magadha","Avanti","Kosala","Anga"], answer:1, topic:"Avanti"},
{q:"Northern capital of Avanti?", options:["Ujjain","Mathura","Rajgir","Taxila"], answer:0, topic:"Avanti"},

{q:"Which Mahajanapada was famous for trade?", options:["Anga","Kosala","Malla","Kuru"], answer:0, topic:"Anga"},
{q:"River near Champa?", options:["Ganga","Champa","Yamuna","Godavari"], answer:1, topic:"Anga"},

{q:"Which ruler annexed Anga?", options:["Bimbisara","Ajatashatru","Nanda","Ashoka"], answer:0, topic:"Anga"},

{q:"Capital of Vrijji confederacy?", options:["Vaishali","Rajgir","Ujjain","Mathura"], answer:0, topic:"Vrijji"},
{q:"Vrijji consisted of how many clans?", options:["5","7","8","10"], answer:2, topic:"Vrijji"},

{q:"Which clan belonged to Buddha?", options:["Lichchhavi","Sakya","Malla","Kuru"], answer:1, topic:"Vrijji"},

{q:"Which Mahajanapada had dual capitals?", options:["Magadha","Avanti","Kosala","Anga"], answer:1, topic:"Advanced"},
{q:"Which was most fertile region?", options:["Punjab","Ganga valley","Deccan","Desert"], answer:1, topic:"Geography"},

{q:"What was main crop?", options:["Wheat","Rice","Barley","Millet"], answer:1, topic:"Economy"},
{q:"Use of iron helped in?", options:["War only","Agriculture","Trade","Religion"], answer:1, topic:"Economy"},

{q:"Which city became major trade center?", options:["Taxila","Pataliputra","Mathura","All"], answer:3, topic:"Trade"},
{q:"Which route connected trade?", options:["Silk Route","Uttarapatha","Dakshinapatha","Both"], answer:3, topic:"Trade"},

{q:"Who shifted capital to Pataliputra permanently?", options:["Bimbisara","Ajatashatru","Udayin","Ashoka"], answer:2, topic:"Magadha"},
{q:"Location of Pataliputra?", options:["Near sea","Near Ganga-Son confluence","Desert","Hill"], answer:1, topic:"Magadha"},

{q:"Which dynasty followed Haryanka?", options:["Maurya","Shishunaga","Nanda","Gupta"], answer:1, topic:"Dynasty"},
{q:"Which dynasty followed Shishunaga?", options:["Nanda","Maurya","Gupta","Haryanka"], answer:0, topic:"Dynasty"},

{q:"Kalashoka belonged to?", options:["Haryanka","Nanda","Shishunaga","Maurya"], answer:2, topic:"Dynasty"},
{q:"Second Buddhist council happened during?", options:["Bimbisara","Kalashoka","Ashoka","Ajatashatru"], answer:1, topic:"Council"},

{q:"Which Mahajanapada is in Deccan?", options:["Asmaka","Magadha","Kosala","Anga"], answer:0, topic:"Asmaka"},
{q:"Asmaka capital was?", options:["Potali","Rajgir","Mathura","Ujjain"], answer:0, topic:"Asmaka"},

{q:"Which Mahajanapada was in NW India?", options:["Kamboja","Kosala","Magadha","Vatsa"], answer:0, topic:"Kamboja"},
{q:"Kamboja famous for?", options:["Trade","Horses","Agriculture","Iron"], answer:1, topic:"Kamboja"},

{q:"Gandhara capital Taxila was known for?", options:["War","Education","Trade","Religion"], answer:1, topic:"Gandhara"},
{q:"Taxila located on?", options:["Trade route","River bank","Forest","Hill"], answer:0, topic:"Gandhara"},

{q:"Which Mahajanapada was linked to Mahabharata?", options:["Kuru","Magadha","Kosala","Anga"], answer:0, topic:"Kuru"},
{q:"Indraprastha belongs to?", options:["Kuru","Panchala","Magadha","Kosala"], answer:0, topic:"Kuru"},

{q:"Ahichhatra was capital of?", options:["Panchala","Chedi","Avanti","Kuru"], answer:0, topic:"Panchala"},
{q:"Panchala located in?", options:["UP","MP","Bihar","Punjab"], answer:0, topic:"Panchala"},

{q:"Chedi located in?", options:["MP & UP","Bihar","Punjab","Rajasthan"], answer:0, topic:"Chedi"},
{q:"Capital of Chedi?", options:["Suktimati","Mathura","Rajgir","Ujjain"], answer:0, topic:"Chedi"},

{q:"Which Mahajanapada had capital Viratnagar?", options:["Matsya","Kuru","Kosala","Magadha"], answer:0, topic:"Matsya"},
{q:"Matsya known from?", options:["Ramayana","Mahabharata","Vedas","None"], answer:1, topic:"Matsya"},

{q:"Which Mahajanapada located in Haryana?", options:["Kuru","Magadha","Kosala","Anga"], answer:0, topic:"Kuru"},
{q:"Which Mahajanapada located in Rajasthan?", options:["Matsya","Magadha","Kosala","Vatsa"], answer:0, topic:"Matsya"},

{q:"Which dynasty introduced large army?", options:["Nanda","Maurya","Gupta","Haryanka"], answer:0, topic:"Nanda"},
{q:"Nanda dynasty known for?", options:["Religion","Wealth","Trade","Education"], answer:1, topic:"Nanda"},

{q:"Which ruler called 'Ekrat'?", options:["Ashoka","Mahapadma Nanda","Bimbisara","Ajatashatru"], answer:1, topic:"Nanda"},
{q:"Meaning of Ekrat?", options:["King of kings","One ruler","Warrior","Priest"], answer:1, topic:"Nanda"},

{q:"Who destroyed Nanda dynasty?", options:["Ashoka","Chandragupta Maurya","Bimbisara","Ajatashatru"], answer:1, topic:"Maurya"},
{q:"Advisor of Chandragupta Maurya?", options:["Chanakya","Kalidasa","Aryabhatta","Varahamihira"], answer:0, topic:"Maurya"},

{q:"Which empire replaced Mahajanapadas?", options:["Gupta","Maurya","Nanda","Mughal"], answer:1, topic:"Transition"},
{q:"Time of Mahajanapadas?", options:["1500 BC","600 BC","300 BC","1000 BC"], answer:1, topic:"Timeline"},

{q:"Which religion spread during this period?", options:["Hinduism","Buddhism & Jainism","Islam","Christianity"], answer:1, topic:"Religion"},
{q:"Urbanization increased due to?", options:["War","Trade & agriculture","Religion","Kings"], answer:1, topic:"Economy"},

// ---- QUESTIONS 57 to 100 ----

{q:"Which Mahajanapada controlled the Ganga trade route?", options:["Magadha","Kosala","Vatsa","Avanti"], answer:0, topic:"Magadha"},
{q:"Natural defense of Magadha included?", options:["Mountains","Rivers","Forests","All"], answer:3, topic:"Magadha"},
{q:"Rajgir was surrounded by?", options:["Rivers","Hills","Forests","Deserts"], answer:1, topic:"Magadha"},

{q:"Which king used matrimonial alliances?", options:["Ajatashatru","Bimbisara","Nanda","Ashoka"], answer:1, topic:"Magadha"},
{q:"Marriage alliance with Kosala was done by?", options:["Ajatashatru","Bimbisara","Udayin","Shishunaga"], answer:1, topic:"Magadha"},

{q:"Ajatashatru’s capital before Pataliputra?", options:["Rajgir","Vaishali","Mathura","Ujjain"], answer:0, topic:"Magadha"},
{q:"Ajatashatru fought against?", options:["Kosala","Vrijji","Both","None"], answer:2, topic:"Magadha"},

{q:"Which weapon was used by Ajatashatru?", options:["Sword","Mahashilakantaka","Gun","Bow"], answer:1, topic:"Magadha"},
{q:"Rathamusala was used for?", options:["Farming","War","Trade","Transport"], answer:1, topic:"Magadha"},

{q:"Udayin established capital at?", options:["Vaishali","Rajgir","Pataliputra","Ujjain"], answer:2, topic:"Magadha"},
{q:"Pataliputra located at confluence of?", options:["Ganga & Yamuna","Ganga & Son","Indus & Ravi","Godavari & Krishna"], answer:1, topic:"Magadha"},

{q:"Shishunaga captured which Mahajanapada?", options:["Kosala","Avanti","Vatsa","Kashi"], answer:1, topic:"Dynasty"},
{q:"Capital of Shishunaga initially?", options:["Vaishali","Rajgir","Pataliputra","Ujjain"], answer:0, topic:"Dynasty"},

{q:"Kalashoka shifted capital to?", options:["Vaishali","Pataliputra","Rajgir","Mathura"], answer:1, topic:"Dynasty"},
{q:"Second Buddhist Council presided by?", options:["Mahakassapa","Sabakami","Ashoka","Upali"], answer:1, topic:"Council"},

{q:"Mahapadma Nanda is called?", options:["Destroyer of Kshatriyas","Great warrior","Religious king","Scholar"], answer:0, topic:"Nanda"},
{q:"Nanda dynasty known for huge?", options:["Army","Temples","Trade","Books"], answer:0, topic:"Nanda"},

{q:"Dhanananda ruled from?", options:["Rajgir","Pataliputra","Ujjain","Mathura"], answer:1, topic:"Nanda"},
{q:"Chandragupta Maurya defeated?", options:["Bimbisara","Ajatashatru","Dhanananda","Ashoka"], answer:2, topic:"Maurya"},

{q:"Which Mahajanapada was located near Himalayas?", options:["Kosala","Magadha","Avanti","Anga"], answer:0, topic:"Geography"},
{q:"Which region had dense forests?", options:["Magadha","Kosala","Vatsa","All"], answer:3, topic:"Geography"},

{q:"Which Mahajanapada was famous for elephants?", options:["Magadha","Kosala","Avanti","Anga"], answer:0, topic:"Magadha"},
{q:"Elephants were used in?", options:["Trade","War","Farming","Transport"], answer:1, topic:"Military"},

{q:"Which republic had 8 clans?", options:["Vrijji","Malla","Kosala","Magadha"], answer:0, topic:"Republic"},
{q:"Malla was a?", options:["Monarchy","Republic","Empire","Clan"], answer:1, topic:"Malla"},

{q:"Buddha attained Mahaparinirvana at?", options:["Rajgir","Kushinagar","Vaishali","Sarnath"], answer:1, topic:"Religion"},
{q:"Mahavira attained Nirvana at?", options:["Pava","Rajgir","Vaishali","Mathura"], answer:0, topic:"Religion"},

{q:"Which Mahajanapada was strong rival of Magadha?", options:["Kosala","Avanti","Vatsa","All"], answer:3, topic:"Politics"},
{q:"Pradyota belonged to?", options:["Kosala","Avanti","Magadha","Anga"], answer:1, topic:"Avanti"},

{q:"Which Mahajanapada had capital Kausambi?", options:["Vatsa","Kosala","Magadha","Avanti"], answer:0, topic:"Vatsa"},
{q:"Kausambi was located near?", options:["Yamuna","Ganga","Godavari","Indus"], answer:0, topic:"Vatsa"},

{q:"Varanasi is located between rivers?", options:["Ganga & Yamuna","Varuna & Asi","Indus & Ravi","Godavari & Krishna"], answer:1, topic:"Kashi"},
{q:"Name Varanasi derived from?", options:["Kings","Rivers","Mountains","Tribes"], answer:1, topic:"Kashi"},

{q:"Which Mahajanapada later merged into Magadha?", options:["Anga","Kosala","Vatsa","All"], answer:3, topic:"Expansion"},
{q:"Magadha expansion started under?", options:["Bimbisara","Ajatashatru","Nanda","Ashoka"], answer:0, topic:"Expansion"},

{q:"Which Mahajanapada located in NW frontier?", options:["Gandhara","Kosala","Magadha","Anga"], answer:0, topic:"Gandhara"},
{q:"Gandhara linked with which empire later?", options:["Persian","Roman","Greek","Chinese"], answer:0, topic:"Gandhara"},

{q:"Kamboja known for?", options:["Agriculture","Horses","Trade","Iron"], answer:1, topic:"Kamboja"},
{q:"Kamboja located beyond?", options:["Himalayas","Indus","Vindhyas","Ganga"], answer:1, topic:"Kamboja"},

{q:"Which Mahajanapada located in central India?", options:["Avanti","Kosala","Magadha","Anga"], answer:0, topic:"Avanti"},
{q:"Ujjain later became capital of?", options:["Maurya","Gupta","Mughal","None"], answer:0, topic:"Avanti"},

{q:"Which factor led to second urbanization?", options:["Iron tools","Religion","War","Kings"], answer:0, topic:"Economy"},
{q:"Iron tools helped in?", options:["War","Agriculture","Trade","All"], answer:3, topic:"Economy"},

{q:"Coins used during this period?", options:["Punch-marked","Gold coins","Silver coins","None"], answer:0, topic:"Economy"},
{q:"Punch-marked coins made of?", options:["Gold","Silver","Copper","Iron"], answer:1, topic:"Economy"}

    ]
  },

 {
id:"maurya",
name:"Mauryan Empire",
icon:"🦁",
color:"#2C8C99",
desc:"Chandragupta, Ashoka, Administration & Edicts",
questions:[

// ===== BASICS (1–20) =====
{q:"Founder of Mauryan Empire?", options:["Ashoka","Chandragupta Maurya","Bindusara","Bimbisara"], answer:1, topic:"Basics"},
{q:"Mauryan Empire established in?", options:["322 BC","324 BC","300 BC","305 BC"], answer:1, topic:"Basics"},
{q:"Capital of Mauryan Empire?", options:["Taxila","Ujjain","Pataliputra","Vaishali"], answer:2, topic:"Basics"},
{q:"Last Nanda ruler defeated by Chandragupta?", options:["Mahapadma","Dhanananda","Bimbisara","Ajatashatru"], answer:1, topic:"Basics"},
{q:"Advisor of Chandragupta?", options:["Kalidasa","Chanakya","Megasthenes","Vishnugupta"], answer:1, topic:"Basics"},
{q:"Another name of Chanakya?", options:["Kalhana","Vishnugupta","Panini","Varahamihira"], answer:1, topic:"Basics"},
{q:"Book written by Chanakya?", options:["Indica","Arthashastra","Rigveda","Rajatarangini"], answer:1, topic:"Texts"},
{q:"Arthashastra deals with?", options:["Religion","Statecraft","Music","War"], answer:1, topic:"Texts"},
{q:"Greek ruler defeated by Chandragupta?", options:["Alexander","Seleucus","Antiochus","Philip"], answer:1, topic:"History"},
{q:"Battle year with Seleucus?", options:["326 BC","305 BC","300 BC","312 BC"], answer:1, topic:"History"},

// ===== CHANDRAGUPTA (21–40) =====
{q:"Chandragupta married daughter of?", options:["Alexander","Seleucus","Antiochus","Darius"], answer:1, topic:"Chandragupta"},
{q:"Name of Seleucus daughter?", options:["Roxana","Helena","Cleopatra","Sophia"], answer:1, topic:"Chandragupta"},
{q:"Megasthenes visited during whose reign?", options:["Ashoka","Bindusara","Chandragupta","Harsha"], answer:2, topic:"Foreign"},
{q:"Book written by Megasthenes?", options:["Indica","Arthashastra","Vedas","Rajtarangini"], answer:0, topic:"Foreign"},
{q:"Megasthenes described how many classes?", options:["4","5","6","7"], answer:3, topic:"Society"},
{q:"Which class NOT in Megasthenes list?", options:["Farmer","Philosopher","Trader","Brahmin"], answer:3, topic:"Society"},
{q:"Sudarshan Lake built by?", options:["Ashoka","Pushyagupta","Bindusara","Chanakya"], answer:1, topic:"Economy"},
{q:"Chandragupta followed which religion later?", options:["Buddhism","Jainism","Hinduism","Ajivika"], answer:1, topic:"Religion"},
{q:"Death place of Chandragupta?", options:["Pataliputra","Taxila","Shravanabelagola","Ujjain"], answer:2, topic:"Chandragupta"},
{q:"Death method?", options:["War","Poison","Fasting","Execution"], answer:2, topic:"Chandragupta"},

// ===== BINDUSARA (41–55) =====
{q:"Bindusara ruled from?", options:["300–273 BC","324–300 BC","273–232 BC","250–200 BC"], answer:0, topic:"Bindusara"},
{q:"Title of Bindusara?", options:["Devanampiya","Amitraghata","Chakravartin","Rajadhiraj"], answer:1, topic:"Bindusara"},
{q:"Religion of Bindusara?", options:["Buddhism","Jainism","Ajivika","Hinduism"], answer:2, topic:"Bindusara"},
{q:"Greek ambassador to Bindusara?", options:["Megasthenes","Deimachus","Fa-Hien","Xuanzang"], answer:1, topic:"Foreign"},
{q:"Bindusara had relations with?", options:["China","Egypt","Rome","Japan"], answer:1, topic:"Foreign"},
{q:"Taxila revolt occurred in?", options:["Ashoka","Bindusara","Chandragupta","None"], answer:1, topic:"History"},
{q:"Governor sent to Taxila?", options:["Ashoka","Susima","Bindusara","Chanakya"], answer:0, topic:"History"},
{q:"Bindusara requested from Greeks?", options:["Gold","Wine & figs","Soldiers","Elephants"], answer:1, topic:"History"},
{q:"Prime minister of Bindusara?", options:["Chanakya","Radhagupta","Ashoka","Megasthenes"], answer:1, topic:"Administration"},
{q:"Bindusara expanded empire to?", options:["South India","North only","West Asia","China"], answer:0, topic:"Expansion"},

// ===== ASHOKA (56–85) =====
{q:"Ashoka ruled from?", options:["273–232 BC","300–273 BC","324–300 BC","250–200 BC"], answer:0, topic:"Ashoka"},
{q:"Kalinga war year?", options:["261 BC","250 BC","300 BC","273 BC"], answer:0, topic:"Ashoka"},
{q:"Ashoka converted to Buddhism after?", options:["War","Marriage","Birth","Death"], answer:0, topic:"Ashoka"},
{q:"Ashoka’s title?", options:["Rajadhiraj","Devanampiya","Chakravarti","Samrat"], answer:1, topic:"Ashoka"},
{q:"Ashoka inscriptions deciphered by?", options:["Max Muller","James Prinsep","Megasthenes","Panini"], answer:1, topic:"Sources"},
{q:"Language of inscriptions?", options:["Sanskrit","Prakrit","Greek","Pali"], answer:1, topic:"Sources"},
{q:"Script used?", options:["Brahmi","Kharosthi","Both","None"], answer:2, topic:"Sources"},
{q:"Major Rock Edict XIII deals with?", options:["Tax","Kalinga War","Trade","Religion"], answer:1, topic:"Edicts"},
{q:"Minor rock edict mentions?", options:["Ashoka name","War","Trade","Tax"], answer:0, topic:"Edicts"},
{q:"Ashoka’s dhamma means?", options:["War","Morality","Trade","Law"], answer:1, topic:"Dhamma"},

{q:"Third Buddhist Council held at?", options:["Vaishali","Rajgir","Pataliputra","Sanchi"], answer:2, topic:"Buddhism"},
{q:"President of 3rd council?", options:["Upagupta","Moggaliputta Tissa","Ananda","Mahakashyap"], answer:1, topic:"Buddhism"},
{q:"Ashoka sent missionaries to?", options:["China","Sri Lanka","Japan","Rome"], answer:1, topic:"Buddhism"},
{q:"Son of Ashoka?", options:["Mahendra","Rahul","Ajatashatru","Susima"], answer:0, topic:"Ashoka"},
{q:"Daughter of Ashoka?", options:["Sita","Sanghamitra","Devi","Gargi"], answer:1, topic:"Ashoka"},

// ===== ADMINISTRATION (86–95) =====
{q:"Head of state?", options:["Minister","King","Army","Priest"], answer:1, topic:"Admin"},
{q:"Empire divided into?", options:["Janapada","Provinces","States","Villages"], answer:1, topic:"Admin"},
{q:"Head of province?", options:["Rajuka","Kumara","Senani","Gramni"], answer:1, topic:"Admin"},
{q:"Village head?", options:["Gramni","Rajuka","Kumara","Amatya"], answer:0, topic:"Admin"},
{q:"Spies were called?", options:["Duta","Gudhapurusha","Senani","Amatya"], answer:1, topic:"Admin"},
{q:"Tax system was?", options:["Low","Moderate","High","None"], answer:2, topic:"Economy"},
{q:"Main revenue source?", options:["Trade","Agriculture","War","Mining"], answer:1, topic:"Economy"},
{q:"Army included?", options:["Infantry","Cavalry","Elephants","All"], answer:3, topic:"Army"},
{q:"War office had divisions?", options:["4","5","6","7"], answer:2, topic:"Army"},
{q:"City administration described by?", options:["Chanakya","Megasthenes","Ashoka","Bindusara"], answer:1, topic:"Admin"},

// ===== DECLINE (96–100) =====
{q:"Last Mauryan ruler?", options:["Ashoka","Dasharatha","Brihadratha","Samprati"], answer:2, topic:"Decline"},
{q:"Who killed last Mauryan ruler?", options:["Ashoka","Pushyamitra Shunga","Bindusara","Chanakya"], answer:1, topic:"Decline"},
{q:"Shunga dynasty founded by?", options:["Brihadratha","Pushyamitra","Ashoka","Samprati"], answer:1, topic:"Decline"},
{q:"Reason of decline?", options:["Weak rulers","Large empire","Both","None"], answer:2, topic:"Decline"},
{q:"Mauryan empire ended in?", options:["185 BC","232 BC","250 BC","300 BC"], answer:0, topic:"Decline"},
 // ===== EXTRA HARD (61–100) =====

{q:"Who was the teacher of Chandragupta Maurya?", options:["Chanakya","Megasthenes","Panini","Kalidasa"], answer:0, topic:"Chandragupta"},
{q:"Which region helped Chandragupta in revolt against Nanda?", options:["Punjab","Himalayan region","Deccan","Bengal"], answer:1, topic:"History"},
{q:"Which Greek historian described Mauryan India?", options:["Herodotus","Megasthenes","Strabo","Pliny"], answer:1, topic:"Foreign"},
{q:"Which city was described as largest by Megasthenes?", options:["Taxila","Pataliputra","Ujjain","Vaishali"], answer:1, topic:"Urban"},
{q:"Municipal administration in Pataliputra had how many committees?", options:["4","5","6","7"], answer:2, topic:"Admin"},
{q:"Each municipal committee had how many members?", options:["3","4","5","6"], answer:2, topic:"Admin"},
{q:"Which Mauryan ruler expanded empire southwards?", options:["Chandragupta","Bindusara","Ashoka","Brihadratha"], answer:1, topic:"Expansion"},
{q:"Bindusara was known as friend of which king?", options:["Antiochus I","Seleucus","Darius","Alexander"], answer:0, topic:"Foreign"},
{q:"Which place was governed by Ashoka before becoming king?", options:["Taxila","Ujjain","Pataliputra","Kalinga"], answer:1, topic:"Ashoka"},
{q:"Ashoka’s wife Devi belonged to?", options:["Kalinga","Vidisha","Magadha","Avanti"], answer:1, topic:"Ashoka"},

{q:"What was Ashoka’s original name meaning?", options:["Happy","Without sorrow","Warrior","King"], answer:1, topic:"Ashoka"},
{q:"Which edict mentions prohibition of animal sacrifice?", options:["Rock Edict I","Rock Edict II","Rock Edict XIII","Pillar Edict"], answer:0, topic:"Edicts"},
{q:"Which edict describes southern kingdoms?", options:["Rock Edict II","Rock Edict III","Rock Edict IV","Rock Edict V"], answer:0, topic:"Edicts"},
{q:"Which edict gives Ashoka’s personal name?", options:["Maski","Girnar","Kalsi","Sanchi"], answer:0, topic:"Edicts"},
{q:"Ashoka’s dhamma officers were called?", options:["Amatya","Rajuka","Dharma Mahamatra","Senani"], answer:2, topic:"Admin"},
{q:"Which council compiled Abhidhamma Pitaka?", options:["1st","2nd","3rd","4th"], answer:2, topic:"Buddhism"},
{q:"Where did Buddha die?", options:["Lumbini","Sarnath","Kushinagar","Bodhgaya"], answer:2, topic:"Context"},
{q:"Ashoka visited which birthplace of Buddha?", options:["Sarnath","Kushinagar","Lumbini","Rajgir"], answer:2, topic:"Ashoka"},
{q:"Ashoka reduced tax in Lumbini to?", options:["1/4","1/6","1/8","1/10"], answer:3, topic:"Economy"},
{q:"Ashoka’s inscriptions mainly found in?", options:["North India","South India","Across empire","Only Bihar"], answer:2, topic:"Sources"},

{q:"Which script used in NW region?", options:["Brahmi","Kharosthi","Nagari","Tamil"], answer:1, topic:"Sources"},
{q:"Kharosthi script derived from?", options:["Greek","Aramaic","Latin","Chinese"], answer:1, topic:"Sources"},
{q:"Which Mauryan king followed Ajivika strongly?", options:["Ashoka","Bindusara","Chandragupta","Dasharatha"], answer:1, topic:"Religion"},
{q:"Ajivika sect founded by?", options:["Mahavira","Gosala","Buddha","Panini"], answer:1, topic:"Religion"},
{q:"Arthashastra mentions how many elements of state?", options:["5","6","7","8"], answer:2, topic:"Theory"},
{q:"Which is NOT part of Saptanga theory?", options:["Swami","Amatya","Durga","Shudra"], answer:3, topic:"Theory"},
{q:"Mauryan espionage system was?", options:["Weak","Moderate","Highly developed","Absent"], answer:2, topic:"Admin"},
{q:"Who controlled trade and commerce?", options:["King","State","Merchants","Foreigners"], answer:1, topic:"Economy"},
{q:"Punch-marked coins used in?", options:["Vedic age","Mauryan age","Gupta age","Delhi Sultanate"], answer:1, topic:"Economy"},
{q:"Which sector was state controlled?", options:["Agriculture","Mining","Trade","All"], answer:3, topic:"Economy"},

{q:"Which road connected Pataliputra to NW?", options:["Dakshinapatha","Uttarapatha","Silk route","Royal road"], answer:1, topic:"Trade"},
{q:"Ashoka’s empire divided into how many parts after death?", options:["2","3","4","5"], answer:0, topic:"Decline"},
{q:"Western part capital after division?", options:["Taxila","Ujjain","Pataliputra","Sanchi"], answer:1, topic:"Decline"},
{q:"Eastern capital after division?", options:["Taxila","Pataliputra","Ujjain","Kalinga"], answer:1, topic:"Decline"},
{q:"Who succeeded Ashoka?", options:["Samprati","Dasharatha","Kunal","Brihadratha"], answer:1, topic:"Succession"},
{q:"Which Mauryan ruler supported Jainism?", options:["Ashoka","Bindusara","Chandragupta","Samprati"], answer:3, topic:"Religion"},
{q:"Which dynasty replaced Mauryas?", options:["Gupta","Shunga","Kushan","Satavahana"], answer:1, topic:"Decline"},
{q:"Pushyamitra Shunga was?", options:["King","General","Minister","Governor"], answer:1, topic:"Decline"},
{q:"Mauryan administration was?", options:["Decentralized","Centralized","Feudal","Democratic"], answer:1, topic:"Admin"},
{q:"Mauryan empire is known for?", options:["Urban planning","Centralized rule","Temple building","Literature"], answer:1, topic:"Summary"}
]
} ,
{
id:"gupta",
name:"Gupta Age",
icon:"🏹",
color:"#E67E22",
desc:"Golden Age of India – Chandragupta I, Samudragupta, Chandragupta II",
questions:[
// ===== GUPTA AGE (200 MCQs) =====

{q:"Original homeland of Guptas?", options:["Magadha","Saket","Ujjain","Pataliputra"], answer:1, topic:"Gupta Age"},
{q:"Caste of Guptas?", options:["Kshatriya","Vaishya","Brahmin","Shudra"], answer:2, topic:"Gupta Age"},
{q:"First Gupta ruler?", options:["Chandragupta I","Samudragupta","Sri Gupta","Ram Gupta"], answer:2, topic:"Gupta Age"},
{q:"Founder of Gupta dynasty?", options:["Chandragupta I","Samudragupta","Sri Gupta","Skandagupta"], answer:2, topic:"Gupta Age"},
{q:"Title of early Gupta rulers?", options:["Maharaja","Rajadhiraj","Chakravarti","Samrat"], answer:0, topic:"Gupta Age"},

// ---- Chandragupta I ----
{q:"Real founder of Gupta Empire?", options:["Sri Gupta","Ghatotkacha","Chandragupta I","Samudragupta"], answer:2, topic:"Gupta Age"},
{q:"Title of Chandragupta I?", options:["Maharaja","Rajadhiraj","Chakravarti","Samrat"], answer:1, topic:"Gupta Age"},
{q:"Gupta Era started in?", options:["300 AD","319 AD","250 AD","400 AD"], answer:1, topic:"Gupta Age"},
{q:"Chandragupta I married?", options:["Dharuva Devi","Kumara Devi","Prabhavati","Lichchhavi princess"], answer:1, topic:"Gupta Age"},
{q:"Symbol on Gupta coins?", options:["Lion","Garuda","Elephant","Bull"], answer:1, topic:"Gupta Age"},

// ---- Samudragupta ----
{q:"Period of Samudragupta?", options:["319-335","335-380","380-414","414-455"], answer:1, topic:"Gupta Age"},
{q:"Allahabad inscription related to?", options:["Chandragupta I","Samudragupta","Skandagupta","Kumaragupta"], answer:1, topic:"Gupta Age"},
{q:"Author of Allahabad Prashasti?", options:["Kalidasa","Harisena","Banabhatta","Megasthenes"], answer:1, topic:"Gupta Age"},
{q:"Samudragupta policy?", options:["Digvijaya","Ahimsa","Expansion only","Isolation"], answer:0, topic:"Gupta Age"},
{q:"Samudragupta defeated how many South kings?", options:["9","10","12","15"], answer:2, topic:"Gupta Age"},

{q:"Samudragupta defeated how many North kings?", options:["5","9","12","15"], answer:1, topic:"Gupta Age"},
{q:"Samudragupta defeated how many frontier states?", options:["3","5","7","9"], answer:1, topic:"Gupta Age"},
{q:"Samudragupta called?", options:["Napoleon of India","Alexander of India","Ashoka of India","Lion of India"], answer:0, topic:"Gupta Age"},
{q:"Court poet of Samudragupta?", options:["Kalidasa","Harisena","Banabhatta","Varahamihira"], answer:1, topic:"Gupta Age"},
{q:"Religion of Samudragupta?", options:["Buddhism","Jainism","Vaishnavism","Shaivism"], answer:2, topic:"Gupta Age"},

// ---- Chandragupta II ----
{q:"Period of Chandragupta II?", options:["319-335","335-380","380-414","414-455"], answer:2, topic:"Gupta Age"},
{q:"Chandragupta II defeated?", options:["Huns","Sakas","Kushans","Greeks"], answer:1, topic:"Gupta Age"},
{q:"Title Vikramaditya given to?", options:["Samudragupta","Chandragupta II","Kumaragupta","Skandagupta"], answer:1, topic:"Gupta Age"},
{q:"Capital of Chandragupta II?", options:["Delhi","Ujjain","Pataliputra","Taxila"], answer:1, topic:"Gupta Age"},
{q:"Chinese traveler during his reign?", options:["Fa-Hien","Hiuen Tsang","Ibn Battuta","Megasthenes"], answer:0, topic:"Gupta Age"},

// ---- Fa-Hien ----
{q:"Fa-Hien came to India for?", options:["Trade","Religion","War","Education"], answer:1, topic:"Gupta Age"},
{q:"Fa-Hien visited during reign of?", options:["Samudragupta","Chandragupta II","Skandagupta","Ashoka"], answer:1, topic:"Gupta Age"},
{q:"Fa-Hien book?", options:["Indica","Fo-Kuo-Ki","Rajatarangini","Arthashastra"], answer:1, topic:"Gupta Age"},

// ---- Kumaragupta ----
{q:"Title of Kumaragupta?", options:["Vikramaditya","Mahendraditya","Chakravarti","Samrat"], answer:1, topic:"Gupta Age"},
{q:"Kumaragupta established?", options:["Nalanda University","Taxila","Vikramshila","Ujjain"], answer:0, topic:"Gupta Age"},
{q:"Religion of Kumaragupta?", options:["Buddhism","Jainism","Vaishnavism","Shaivism"], answer:2, topic:"Gupta Age"},

// ---- Skandagupta ----
{q:"Last powerful Gupta ruler?", options:["Chandragupta II","Kumaragupta","Skandagupta","Ramagupta"], answer:2, topic:"Gupta Age"},
{q:"Skandagupta defeated?", options:["Greeks","Huns","Sakas","Persians"], answer:1, topic:"Gupta Age"},
{q:"Title Savior of India given to?", options:["Ashoka","Samudragupta","Skandagupta","Harsha"], answer:2, topic:"Gupta Age"},

// ---- Coins ----
{q:"Gold coins of Guptas called?", options:["Dinar","Rupya","Tanka","Pana"], answer:0, topic:"Gupta Age"},
{q:"Silver coins called?", options:["Dinar","Rupaka","Tanka","Pana"], answer:1, topic:"Gupta Age"},
{q:"First gold coins in India by?", options:["Mauryas","Guptas","Kushans","Mughals"], answer:2, topic:"Gupta Age"},

// ---- Literature ----
{q:"Greatest poet of Gupta age?", options:["Kalidasa","Banabhatta","Tulsidas","Kabir"], answer:0, topic:"Gupta Age"},
{q:"Abhijnana Shakuntalam written by?", options:["Kalidasa","Sudraka","Dandin","Bhasa"], answer:0, topic:"Gupta Age"},
{q:"Meghaduta written by?", options:["Kalidasa","Sudraka","Dandin","Bhasa"], answer:0, topic:"Gupta Age"},
{q:"Panchatantra written by?", options:["Kalidasa","Vishnu Sharma","Sudraka","Banabhatta"], answer:1, topic:"Gupta Age"},
{q:"Mudrarakshasa written by?", options:["Sudraka","Vishakhadatta","Kalidasa","Dandin"], answer:1, topic:"Gupta Age"},

// ---- Science ----
{q:"Aryabhata known for?", options:["Medicine","Astronomy","Politics","War"], answer:1, topic:"Gupta Age"},
{q:"Surya Siddhanta written by?", options:["Aryabhata","Varahamihira","Charaka","Sushruta"], answer:0, topic:"Gupta Age"},
{q:"Varahamihira wrote?", options:["Brihat Samhita","Arthashastra","Indica","Rajatarangini"], answer:0, topic:"Gupta Age"},

// ---- Art ----
{q:"Ajanta caves belong to?", options:["Maurya","Gupta","Mughal","Delhi Sultanate"], answer:1, topic:"Gupta Age"},
{q:"Dashavatara temple located at?", options:["Delhi","Deogarh","Ujjain","Mathura"], answer:1, topic:"Gupta Age"},

// ---- Economy ----
{q:"Main source of revenue?", options:["Trade","Land revenue","Tax","War"], answer:1, topic:"Gupta Age"},
{q:"Land tax called?", options:["Bhag","Kar","Bali","Shulka"], answer:0, topic:"Gupta Age"},
{q:"Land tax rate?", options:["1/4","1/6","1/8","1/10"], answer:1, topic:"Gupta Age"},

// ---- Administration ----
{q:"Official language?", options:["Prakrit","Sanskrit","Pali","Hindi"], answer:1, topic:"Gupta Age"},
{q:"Gupta age known as?", options:["Dark age","Golden age","Modern age","Ancient age"], answer:1, topic:"Gupta Age"},
{q:"Empire divided into?", options:["States","Villages","Cities","All"], answer:3, topic:"Gupta Age"},
// ===== GUPTA AGE (81–200) =====

// ---- Samudragupta Deep ----
{q:"Samudragupta followed which policy for South India?", options:["Annexation","Pragmatic policy","Direct rule","Isolation"], answer:1, topic:"Gupta Age"},
{q:"Forest states were treated by Samudragupta as?", options:["Enemies","Allies","Subordinates","Ignored"], answer:2, topic:"Gupta Age"},
{q:"Frontier states policy?", options:["Direct annexation","Tributary","Ignored","Destroyed"], answer:1, topic:"Gupta Age"},
{q:"Allahabad pillar inscription originally belonged to?", options:["Guptas","Mauryas","Mughals","Delhi Sultanate"], answer:1, topic:"Gupta Age"},
{q:"Ashokan inscription found along with Gupta inscription at?", options:["Delhi","Allahabad","Patna","Ujjain"], answer:1, topic:"Gupta Age"},

// ---- Ramagupta ----
{q:"Elder son of Samudragupta?", options:["Chandragupta II","Ramagupta","Kumaragupta","Skandagupta"], answer:1, topic:"Gupta Age"},
{q:"Ramagupta story found in?", options:["Arthashastra","Devi Chandraguptam","Indica","Rajatarangini"], answer:1, topic:"Gupta Age"},
{q:"Ramagupta lost to which ruler?", options:["Huns","Sakas","Kushans","Greeks"], answer:1, topic:"Gupta Age"},

// ---- Chandragupta II Deep ----
{q:"Chandragupta II married which dynasty princess?", options:["Maurya","Naga","Gupta","Kushan"], answer:1, topic:"Gupta Age"},
{q:"Daughter of Chandragupta II?", options:["Kumara Devi","Prabhavati Gupta","Dharuva Devi","Gautami"], answer:1, topic:"Gupta Age"},
{q:"Prabhavati Gupta ruled which kingdom?", options:["Magadha","Vakataka","Kushan","Maurya"], answer:1, topic:"Gupta Age"},
{q:"Marriage alliance helped Gupta expansion in?", options:["North","South","West","East"], answer:2, topic:"Gupta Age"},

// ---- Saka Defeat ----
{q:"Last Saka ruler defeated?", options:["Rudrasimha I","Rudrasimha II","Rudrasimha III","Rudrasena"], answer:2, topic:"Gupta Age"},
{q:"After defeating Sakas, Chandragupta II took title?", options:["Samrat","Vikramaditya","Chakravarti","Maharaja"], answer:1, topic:"Gupta Age"},

// ---- Titles ----
{q:"Param Bhagavata means?", options:["Follower of Shiva","Follower of Vishnu","Follower of Buddha","Follower of Jainism"], answer:1, topic:"Gupta Age"},
{q:"Title used by Samudragupta?", options:["Param Bhagavata","Mahendraditya","Vikramaditya","Ashwamedha"], answer:0, topic:"Gupta Age"},

// ---- Coins Advanced ----
{q:"Coins depicting Ashwamedha sacrifice belong to?", options:["Chandragupta I","Samudragupta","Kumaragupta","Skandagupta"], answer:1, topic:"Gupta Age"},
{q:"Coins show king playing veena?", options:["Chandragupta I","Samudragupta","Skandagupta","Kumaragupta"], answer:1, topic:"Gupta Age"},
{q:"Gold coins indicate?", options:["Poor economy","Strong economy","War","Trade decline"], answer:1, topic:"Gupta Age"},

// ---- Literature Advanced ----
{q:"Ritusamhara is written by?", options:["Kalidasa","Sudraka","Dandin","Bhasa"], answer:0, topic:"Gupta Age"},
{q:"Malavikagnimitram written by?", options:["Kalidasa","Sudraka","Bhasa","Dandin"], answer:0, topic:"Gupta Age"},
{q:"Mrichchhakatika written by?", options:["Kalidasa","Sudraka","Bhasa","Dandin"], answer:1, topic:"Gupta Age"},
{q:"Niti Shastra written by?", options:["Kautilya","Kamandaka","Kalidasa","Banabhatta"], answer:1, topic:"Gupta Age"},

// ---- Science Advanced ----
{q:"Aryabhata proposed?", options:["Earth flat","Earth rotates","Sun revolves","Stars fixed"], answer:1, topic:"Gupta Age"},
{q:"Varahamihira contributed in?", options:["Medicine","Astronomy","War","Trade"], answer:1, topic:"Gupta Age"},

// ---- Administration ----
{q:"Province called?", options:["Janapada","Bhukti","Desh","Rajya"], answer:1, topic:"Gupta Age"},
{q:"Head of province?", options:["King","Uparika","Minister","Senapati"], answer:1, topic:"Gupta Age"},
{q:"District called?", options:["Vishaya","Bhukti","Janapada","Grama"], answer:0, topic:"Gupta Age"},
{q:"Village head?", options:["Gramika","Senapati","Uparika","Amatya"], answer:0, topic:"Gupta Age"},

// ---- Religion ----
{q:"Guptas mainly followed?", options:["Buddhism","Jainism","Vaishnavism","Islam"], answer:2, topic:"Gupta Age"},
{q:"Religious tolerance seen in?", options:["Maurya","Gupta","Mughal","Delhi Sultanate"], answer:1, topic:"Gupta Age"},

// ---- Economy ----
{q:"Agriculture supported by?", options:["Rain only","Irrigation","Trade","War"], answer:1, topic:"Gupta Age"},
{q:"Trade declined during?", options:["Maurya","Gupta","Mughal","British"], answer:1, topic:"Gupta Age"},

// ---- Art ----
{q:"Gupta art known for?", options:["Rough","Refined","Simple","Primitive"], answer:1, topic:"Gupta Age"},
{q:"Buddha statues of Gupta age found at?", options:["Mathura","Sarnath","Both","None"], answer:2, topic:"Gupta Age"},

// ---- Nalanda ----
{q:"Nalanda located in?", options:["UP","Bihar","MP","Gujarat"], answer:1, topic:"Gupta Age"},
{q:"Nalanda famous for?", options:["Trade","Education","War","Art"], answer:1, topic:"Gupta Age"},

// ---- Fa-Hien Deep ----
{q:"Fa-Hien stayed in India for?", options:["1 year","3 years","5 years","10 years"], answer:2, topic:"Gupta Age"},
{q:"Fa-Hien returned via?", options:["Land","Sea","Air","None"], answer:1, topic:"Gupta Age"},

// ---- Huns ----
{q:"Huna invasion during?", options:["Chandragupta I","Samudragupta","Skandagupta","Ashoka"], answer:2, topic:"Gupta Age"},
{q:"Hunas weakened which empire?", options:["Maurya","Gupta","Mughal","Delhi Sultanate"], answer:1, topic:"Gupta Age"},

// ---- Decline ----
{q:"Reason for decline?", options:["Weak rulers","Hunas","Economic decline","All"], answer:3, topic:"Gupta Age"},
{q:"Last ruler of Gupta?", options:["Skandagupta","Vishnugupta","Kumaragupta","Samudragupta"], answer:1, topic:"Gupta Age"},

// ---- Misc ----
{q:"Golden age due to?", options:["Art","Science","Literature","All"], answer:3, topic:"Gupta Age"},
{q:"Garuda symbol represents?", options:["Shiva","Vishnu","Brahma","Indra"], answer:1, topic:"Gupta Age"},

// ===== EXTRA 100 GUPTA MCQs =====

// ---- Basic Foundation ----
{q:"Gupta dynasty rose after which empire?", options:["Maurya","Kushan","Satavahana","Mughal"], answer:1, topic:"Gupta Age"},
{q:"Gupta rule mainly covered?", options:["North India","South India","East India","Whole India"], answer:0, topic:"Gupta Age"},
{q:"Capital of early Guptas?", options:["Pataliputra","Ujjain","Delhi","Mathura"], answer:0, topic:"Gupta Age"},
{q:"Language used in Gupta inscriptions?", options:["Prakrit","Sanskrit","Pali","Hindi"], answer:1, topic:"Gupta Age"},
{q:"Gupta kings considered as?", options:["God","Divine rulers","Elected rulers","Nomads"], answer:1, topic:"Gupta Age"},

// ---- Sri Gupta ----
{q:"Sri Gupta built monastery for?", options:["Indian traders","Chinese pilgrims","Greek soldiers","Persian traders"], answer:1, topic:"Gupta Age"},
{q:"Sri Gupta mentioned in writings of?", options:["Fa-Hien","I-Tsing","Hiuen Tsang","Megasthenes"], answer:1, topic:"Gupta Age"},

// ---- Ghatotkacha ----
{q:"Ghatotkacha title?", options:["Maharaja","Rajadhiraj","Samrat","Chakravarti"], answer:0, topic:"Gupta Age"},
{q:"Ghatotkacha was son of?", options:["Samudragupta","Sri Gupta","Chandragupta I","Ramagupta"], answer:1, topic:"Gupta Age"},

// ---- Chandragupta I Advanced ----
{q:"Alliance with Lichchhavis strengthened?", options:["Military","Political power","Trade","Religion"], answer:1, topic:"Gupta Age"},
{q:"Kumara Devi belonged to?", options:["Maurya","Lichchhavi","Naga","Kushan"], answer:1, topic:"Gupta Age"},

// ---- Samudragupta Advanced ----
{q:"Samudragupta known as?", options:["King of kings","Conqueror","Napoleon of India","Great emperor"], answer:2, topic:"Gupta Age"},
{q:"Ashwamedha yajna performed by?", options:["Chandragupta I","Samudragupta","Kumaragupta","Skandagupta"], answer:1, topic:"Gupta Age"},
{q:"Samudragupta patron of?", options:["Music","War","Trade","Religion"], answer:0, topic:"Gupta Age"},
{q:"Samudragupta depicted as?", options:["Warrior only","Musician only","Warrior & musician","Priest"], answer:2, topic:"Gupta Age"},

// ---- Policies ----
{q:"Policy towards frontier states?", options:["Destroy","Annex","Tributary","Ignore"], answer:2, topic:"Gupta Age"},
{q:"Policy towards forest tribes?", options:["Destroy","Ignore","Control indirectly","Convert"], answer:2, topic:"Gupta Age"},

// ---- Chandragupta II Advanced ----
{q:"Second capital of Chandragupta II?", options:["Delhi","Ujjain","Patna","Varanasi"], answer:1, topic:"Gupta Age"},
{q:"Chandragupta II promoted?", options:["Trade","War","Religion","Agriculture"], answer:0, topic:"Gupta Age"},

// ---- Administration Deep ----
{q:"Central government headed by?", options:["Minister","King","Council","Army"], answer:1, topic:"Gupta Age"},
{q:"Village administration handled by?", options:["King","Gramika","Uparika","Senapati"], answer:1, topic:"Gupta Age"},
{q:"City called?", options:["Nagara","Grama","Bhukti","Vishaya"], answer:0, topic:"Gupta Age"},

// ---- Economy Deep ----
{q:"Agriculture tax collected in form of?", options:["Cash","Kind","Gold","Silver"], answer:1, topic:"Gupta Age"},
{q:"Guild system called?", options:["Shreni","Sabha","Samiti","Sangha"], answer:0, topic:"Gupta Age"},

// ---- Society ----
{q:"Society divided into?", options:["Classes","Varna system","Castes only","None"], answer:1, topic:"Gupta Age"},
{q:"Position of women?", options:["Equal","Declined","Improved","Highest"], answer:1, topic:"Gupta Age"},

// ---- Religion ----
{q:"Guptas supported?", options:["Hinduism","Buddhism","Jainism","All"], answer:3, topic:"Gupta Age"},
{q:"Temple construction increased in?", options:["Maurya","Gupta","Mughal","Delhi Sultanate"], answer:1, topic:"Gupta Age"},

// ---- Art ----
{q:"Gupta sculpture known for?", options:["Beauty","Realism","Spirituality","All"], answer:3, topic:"Gupta Age"},
{q:"Sarnath Buddha statues represent?", options:["War","Peace","Power","Trade"], answer:1, topic:"Gupta Age"},

// ---- Literature ----
{q:"Sudraka wrote?", options:["Meghaduta","Mrichchhakatika","Shakuntalam","Ritusamhara"], answer:1, topic:"Gupta Age"},
{q:"Dandin wrote?", options:["Dashakumaracharita","Arthashastra","Indica","Rajatarangini"], answer:0, topic:"Gupta Age"},

// ---- Science ----
{q:"Zero concept developed in?", options:["Maurya","Gupta","Mughal","British"], answer:1, topic:"Gupta Age"},
{q:"Decimal system used in?", options:["Gupta period","Maurya period","Mughal period","None"], answer:0, topic:"Gupta Age"},

// ---- Huns ----
{q:"Hunas came from?", options:["Central Asia","Europe","Africa","China"], answer:0, topic:"Gupta Age"},
{q:"Huna attack weakened?", options:["Trade","Army","Empire","Religion"], answer:2, topic:"Gupta Age"},

// ---- Decline ----
{q:"Gupta decline started after?", options:["Samudragupta","Chandragupta II","Kumaragupta","Skandagupta"], answer:2, topic:"Gupta Age"},
{q:"Internal conflict caused?", options:["Growth","Decline","War","Trade"], answer:1, topic:"Gupta Age"},

// ---- Misc Important ----
{q:"Garuda symbol associated with?", options:["Shiva","Vishnu","Indra","Agni"], answer:1, topic:"Gupta Age"},
{q:"Golden age reason?", options:["Peace","Prosperity","Art & Science","All"], answer:3, topic:"Gupta Age"},

// ---- Tricky ----
{q:"Which was NOT Gupta ruler?", options:["Samudragupta","Skandagupta","Ashoka","Kumaragupta"], answer:2, topic:"Gupta Age"},
{q:"Which traveler NOT from Gupta period?", options:["Fa-Hien","Hiuen Tsang","None","Both"], answer:1, topic:"Gupta Age"},



]
}];
let activeChapter = null;
let selectedTopics = new Set();
let quizQuestions = [];
let cQ = 0, score = 0, streak = 0, attempted = 0;
let answered = [];
let mistakeTracker = [];

/* ══════════════════════════════════════════
   2. NAVIGATION & BREADCRUMBS
══════════════════════════════════════════ */
function show(id) {
    ["home", "topics", "quiz", "result"].forEach(s => {
        const el = document.getElementById("screen-" + s);
        if (el) el.style.display = s === id ? "block" : "none";
    });
}

function goHome() {
    activeChapter = null;
    show("home");
    setBreadcrumb([{ label: "Home", active: true }]);
}

function setBreadcrumb(items) {
    const bc = document.getElementById("breadcrumb");
    if (!bc) return;
    bc.innerHTML = items.map((item, i) =>
        item.active ? `<span class="crumb active">${item.label}</span>` : `<span class="crumb" onclick="${item.fn}()">${item.label}</span><span class="sep">›</span>`
    ).join("");
}

/* ══════════════════════════════════════════
   3. CHAPTER & TOPIC RENDERING
══════════════════════════════════════════ */
function renderChapters() {
    const grid = document.getElementById("chapter-grid");
    if (!grid) return;
    grid.innerHTML = "";
    CHAPTERS.forEach(ch => {
        const card = document.createElement("div");
        card.className = "chapter-card";
        // Updated structure to support top-right arrow and boxed icon
        card.innerHTML = `
            <div class="chapter-icon" style="background:${ch.color}22; color:${ch.color}">
                ${ch.icon}
            </div>
            <div class="chapter-name">${ch.name}</div>
            <div class="chapter-meta">${ch.questions.length} Questions</div>
            <span class="chapter-arrow">→</span>
        `;
        card.onclick = () => openChapter(ch);
        grid.appendChild(card);
    });
}

function openChapter(ch) {
    activeChapter = ch;
    selectedTopics.clear();
    
    // Update the topic screen header
    const titleDisplay = document.getElementById("chapter-title-display");
    if (titleDisplay) titleDisplay.textContent = ch.icon + " " + ch.name;
    
    renderTopics();
    show("topics");
    setBreadcrumb([{ label: "Home", fn: "goHome" }, { label: ch.name, active: true }]);
    updateStartBtn();
}

function renderTopics() {
    const grid = document.getElementById("topic-grid");
    if (!grid) return;
    grid.innerHTML = "";
    
    // Updates the screen title with the icon and larger text
    const titleDisplay = document.getElementById("chapter-title-display");
    if (titleDisplay) {
        titleDisplay.className = "screen-title"; 
        titleDisplay.innerHTML = `${activeChapter.icon} ${activeChapter.name}`;
    }

    const topics = [...new Set(activeChapter.questions.map(q => q.topic))];
    
    topics.forEach(t => {
        const isSelected = selectedTopics.has(t);
        const count = activeChapter.questions.filter(q => q.topic === t).length;
        const card = document.createElement("div");
        
        card.className = `topic-card ${isSelected ? 'selected' : ''}`;
        card.innerHTML = `
            <div class="topic-name">${t}</div>
            <div class="topic-count">${count} questions</div>`;
            
        card.onclick = () => {
            if (selectedTopics.has(t)) {
                selectedTopics.delete(t);
            } else {
                selectedTopics.add(t);
            }
            card.classList.toggle("selected");
            updateStartBtn();
        };
        grid.appendChild(card);
    });
}

function toggleSelectAll() {
    const topics = [...new Set(activeChapter.questions.map(q => q.topic))];
    const btn = document.getElementById("sel-all-btn");
    
    if (selectedTopics.size === topics.length) {
        selectedTopics.clear();
        if (btn) btn.textContent = "Select all topics";
    } else {
        topics.forEach(t => selectedTopics.add(t));
        if (btn) btn.textContent = "Deselect all";
    }
    
    renderTopics();
    updateStartBtn();
}

function updateStartBtn() {
    const startBtn = document.getElementById("start-btn");
    const selCountText = document.getElementById("sel-count");
    
    const totalSelectedQuestions = activeChapter.questions.filter(q => 
        selectedTopics.has(q.topic)
    ).length;

    if (selCountText) {
        selCountText.textContent = `${selectedTopics.size} topics · ${totalSelectedQuestions} questions`;
    }
    
    if (startBtn) {
        startBtn.disabled = selectedTopics.size === 0;
    }
}

/* ══════════════════════════════════════════
/* ══════════════════════════════════════════
   4. QUIZ ENGINE
══════════════════════════════════════════ */
let timerInterval = null;
let totalSeconds = 0;

function startTimer() {
    stopTimer(); // Clear any zombie timers
    totalSeconds = 0;
    
    // Update UI immediately to 00:00 so there is no delay
    const timerEl = document.getElementById("sq-timer");
    if (timerEl) timerEl.textContent = "00:00";

    timerInterval = setInterval(() => {
        totalSeconds++;
        if (timerEl) timerEl.textContent = formatTime(totalSeconds);
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startQuiz() {
    quizQuestions = activeChapter.questions.filter(q => selectedTopics.has(q.topic));
    quizQuestions.sort(() => Math.random() - 0.5); // Shuffle
    mistakeTracker = []; 
    cQ = 0; score = 0; streak = 0; attempted = 0; answered = [];
    
    show("quiz");
    
    // CRITICAL: You must call startTimer() here!
    startTimer(); 
    
    loadQ();
}
function loadQ() {
    const q = quizQuestions[cQ];
    document.getElementById("prog").style.width = ((cQ / quizQuestions.length) * 100) + "%";
    document.getElementById("sq-num").textContent = (cQ + 1) + "/" + quizQuestions.length;
    document.getElementById("qtopic").textContent = q.topic;
    document.getElementById("qnum").textContent = `Question ${cQ + 1} of ${quizQuestions.length}`;
    document.getElementById("qtext").textContent = q.q;
    document.getElementById("feed").textContent = "";
    document.getElementById("next-btn").disabled = true;

    const optsDiv = document.getElementById("opts");
    optsDiv.innerHTML = "";
    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.className = "opt-btn";
        btn.innerHTML = `<span class="opt-ltr">${String.fromCharCode(65 + i)}</span><span>${opt}</span>`;
        btn.onclick = () => handleSelect(i);
        optsDiv.appendChild(btn);
    });
}

function handleSelect(idx) {
    if (!document.getElementById("next-btn").disabled) return;
    const q = quizQuestions[cQ];
    const isCorrect = idx === q.answer;
    answered[cQ] = idx;
    attempted++;

    if (isCorrect) {
        score++;
        streak++;
        if (streak % 5 === 0) showToast(`🔥 ${streak} Streak!`);
    } else {
        streak = 0;
        mistakeTracker.push({
            question: q.q,
            yourAnswer: q.options[idx],
            correctAnswer: q.options[q.answer]
        });
    }

    const btns = document.getElementById("opts").querySelectorAll(".opt-btn");
    btns.forEach((b, i) => {
        b.style.pointerEvents = "none";
        if (i === q.answer) b.classList.add(i === idx ? "correct" : "reveal");
        else if (i === idx) b.classList.add("wrong");
    });

    document.getElementById("sq-score").textContent = score;
    document.getElementById("sq-streak").textContent = streak;
    document.getElementById("sq-acc").textContent = Math.round((score / attempted) * 100) + "%";
    document.getElementById("next-btn").disabled = false;
    document.getElementById("feed").textContent = isCorrect ? "✓ Correct!" : "✗ Incorrect";
    document.getElementById("feed").style.color = isCorrect ? "var(--green-light)" : "var(--red-light)";
}

function nextQ() {
    cQ++;
    if (cQ < quizQuestions.length) loadQ(); else showResults();
}

function showResults() {
    show("result");
    const pct = Math.round((score / quizQuestions.length) * 100);
    document.getElementById("score-big").textContent = score;
    document.getElementById("res-label").textContent = `You scored ${score} / ${quizQuestions.length} (${pct}%)`;

    const pill = document.getElementById("res-grade-pill");
    if (pct >= 80) { pill.textContent = "🏆 Excellent!"; pill.className = "grade-pill grade-A"; }
    else if (pct >= 50) { pill.textContent = "👍 Good Job!"; pill.className = "grade-pill grade-B"; }
    else { pill.textContent = "📖 Keep Practicing!"; pill.className = "grade-pill grade-D"; }

    // Render Mistakes
    const reviewContainer = document.getElementById("review-container");
    const reviewList = document.getElementById("review-list");
    if (mistakeTracker.length > 0) {
        reviewContainer.style.display = "block";
        reviewList.innerHTML = mistakeTracker.map(m => `
            <div class="review-item">
                <div class="review-q">${m.question}</div>
                <div class="review-ans">
                    <i>${m.yourAnswer}</i> Correct: <b>${m.correctAnswer}</b>
                </div>
            </div>
        `).join('');
    } else {
        reviewContainer.style.display = "none";
    }

    setTimeout(() => {
        const ring = document.getElementById("ring-fill");
        if (ring) ring.style.strokeDashoffset = 408 - (408 * (pct / 100));
    }, 200);
}

function restartSameTopics() { startQuiz(); }

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.style.opacity = "1";
    setTimeout(() => { toast.style.opacity = "0"; }, 2000);
}

function showResults() {
    show("result");
    const pct = Math.round((score / quizQuestions.length) * 100);
    
    // Update text labels
    document.getElementById("score-big").textContent = score;
    document.getElementById("res-label").textContent = `You scored ${score} / ${quizQuestions.length} (${pct}%)`;
    
    // Progress Ring logic: Calculation based on ~408 circumference
    const ring = document.getElementById("ring-fill");
    if (ring) {
        // 1. Reset the ring to empty state immediately
        ring.style.transition = 'none'; 
        ring.style.strokeDashoffset = '408'; 
        
        // 2. Force a reflow so the browser recognizes the reset before animating
        ring.getBoundingClientRect(); 
        
        // 3. Apply the animation after a small delay
        setTimeout(() => {
            ring.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
            const offset = 408 - (408 * (pct / 100));
            ring.style.strokeDashoffset = offset;
        }, 50);
    }
    
    // Grade Pill logic
    const pill = document.getElementById("res-grade-pill");
    if (pct >= 80) {
        pill.textContent = "🏆 Excellent!";
        pill.className = "grade-pill grade-A";
    } else if (pct >= 50) {
        pill.textContent = "👍 Good Job!";
        pill.className = "grade-pill grade-B";
    } else {
        pill.textContent = "📖 Keep Practicing!";
        pill.className = "grade-pill grade-D";
    }

    // Mistakes Review Section logic
    const reviewContainer = document.getElementById("review-container");
    const reviewList = document.getElementById("review-list");
    
    if (mistakeTracker.length > 0) {
        reviewContainer.style.display = "block";
        reviewList.innerHTML = mistakeTracker.map(m => `
            <div class="review-item">
                <div class="review-q">${m.question}</div>
                <div class="review-ans">
                    <i>${m.yourAnswer}</i> Correct: <b>${m.correctAnswer}</b>
                </div>
            </div>
        `).join('');
    } else {
        reviewContainer.style.display = "none";
    }
}

/* ══════════════════════════════════════════
   5. INITIALIZE
══════════════════════════════════════════ */
renderChapters();
goHome();