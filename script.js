/* DATA (Grouped by Subject) */
const SUBJECTS = {
  history: {
    name: "History",
    icon: "📜",
    color: "#7F77DD",
    // Your massive original array moves right inside here!
    chapters: [
      {
        id: "ivc",
        name: "Indus Valley Civilization",
        icon: "🏛️",
        color: "#7F77DD",
        desc: "Harappa, Mohenjo-daro, and Urban Planning",
        questions: [ {q:"Who first discovered Harappa?", options:["R.D Banerjee","Dayaram Sahni","John Marshall","Alexander Cunningham"], answer:1, topic:"IVC"},
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
      {q:"Rigveda contains how many hymns?", options:["1028","1000","512","2000"], answer:0, topic:"Vedic"},
{q:"The chief deity of the Rigveda is?", options:["Vishnu","Shiva","Indra","Brahma"], answer:2, topic:"Vedic"},
{q:"The Vedic Civilization is also known as?", options:["Dravidian","Aryan","Harappan","Greek"], answer:1, topic:"Vedic"},
{q:"Early Vedic people settled in?", options:["Ganga Valley","Sapta Sindhu","Deccan","South India"], answer:1, topic:"Vedic"},
{q:"Main economic activity in early Vedic period?", options:["Agriculture","Pastoralism","Trade","Craft"], answer:1, topic:"Vedic"},
{q:"Rigveda is a collection of?", options:["Laws","Hymns","Stories","Codes"], answer:1, topic:"Vedic"},
{q:"Number of Vedas?", options:["2","3","4","5"], answer:2, topic:"Vedic"},
{q:"Oldest Veda?", options:["Yajur","Sama","Rig","Atharva"], answer:2, topic:"Vedic"},
{q:"Later Vedic age is marked by use of?", options:["Copper","Bronze","Iron","Gold"], answer:2, topic:"Vedic"},
{q:"King in early Vedic age was called?", options:["Bhupati","Rajan","Samrat","Gopati"], answer:3, topic:"Vedic"},

{q:"Sapta Sindhu refers to?", options:["7 hills","7 rivers","7 tribes","7 kingdoms"], answer:1, topic:"Vedic"},
{q:"Indra is the god of?", options:["Fire","Rain/Thunder","Wind","Sun"], answer:1, topic:"Vedic"},
{q:"Agni is the god of?", options:["Wind","Fire","Water","Sky"], answer:1, topic:"Vedic"},
{q:"Varuna is the god of?", options:["War","Water","Fire","Sky"], answer:1, topic:"Vedic"},
{q:"Total Vedic gods mentioned?", options:["10","100","33","108"], answer:2, topic:"Vedic"},
{q:"Gayatri Mantra is found in which Mandala?", options:["I","II","III","X"], answer:2, topic:"Vedic"},
{q:"Gayatri Mantra was composed by?", options:["Vashishta","Vishwamitra","Valmiki","Vyasa"], answer:1, topic:"Vedic"},
{q:"Battle of Ten Kings took place on river?", options:["Ganga","Yamuna","Ravi","Indus"], answer:2, topic:"Vedic"},
{q:"Who won the Battle of Ten Kings?", options:["Sudasa","Indra","Vashishta","Aryans"], answer:0, topic:"Vedic"},
{q:"Purusha Sukta is found in?", options:["Mandala V","Mandala VII","Mandala X","Mandala II"], answer:2, topic:"Vedic"},

{q:"Purusha Sukta explains?", options:["War","Trade","Caste system","Agriculture"], answer:2, topic:"Vedic"},
{q:"Brahmins originated from?", options:["Feet","Arms","Mouth","Thighs"], answer:2, topic:"Vedic"},
{q:"Kshatriyas originated from?", options:["Mouth","Arms","Feet","Thighs"], answer:1, topic:"Vedic"},
{q:"Vaishyas originated from?", options:["Thighs","Feet","Head","Arms"], answer:0, topic:"Vedic"},
{q:"Shudras originated from?", options:["Feet","Head","Arms","Thighs"], answer:0, topic:"Vedic"},

{q:"Sama Veda is related to?", options:["War","Music","Medicine","Trade"], answer:1, topic:"Vedic"},
{q:"Yajur Veda deals with?", options:["Music","War","Rituals","Trade"], answer:2, topic:"Vedic"},
{q:"Atharva Veda deals with?", options:["Music","Black magic","Trade","Law"], answer:1, topic:"Vedic"},

{q:"Ayurveda is associated with?", options:["Rig Veda","Yajur Veda","Sama Veda","Atharva Veda"], answer:0, topic:"Vedic"},
{q:"Dhanurveda is related to?", options:["Medicine","War","Music","Art"], answer:1, topic:"Vedic"},
{q:"Gandharva Veda deals with?", options:["Music","War","Trade","Law"], answer:0, topic:"Vedic"},
{q:"Shilpa Veda deals with?", options:["Art","War","Medicine","Music"], answer:0, topic:"Vedic"},

{q:"Sabha performed which function?", options:["Army","Judiciary","Trade","Tax"], answer:1, topic:"Vedic"},
{q:"Samiti was known as?", options:["Least popular","Most popular assembly","Army","Religious body"], answer:1, topic:"Vedic"},
{q:"Vidath was?", options:["Newest assembly","Oldest assembly","Trade group","Army unit"], answer:1, topic:"Vedic"},

{q:"Which assembly elected the king?", options:["Sabha","Samiti","Vidath","None"], answer:1, topic:"Vedic"},
{q:"Common drink in Vedic period?", options:["Milk","Wine","Soma & Sura","Water"], answer:2, topic:"Vedic"},
{q:"Main food habit?", options:["Rice","Milk products","Wheat","Meat"], answer:1, topic:"Vedic"},

{q:"Barley was called?", options:["Yava","Vrihi","Anna","Tandul"], answer:0, topic:"Vedic"},
{q:"Rice was called?", options:["Yava","Vrihi","Anna","Dhanya"], answer:1, topic:"Vedic"},

{q:"Mana and Nishka were?", options:["Weapons","Coins","Clothes","Tools"], answer:1, topic:"Vedic"},
{q:"Gomath refers to?", options:["Poor","Rich","Priest","Farmer"], answer:1, topic:"Vedic"},

{q:"Krishna Ayas means?", options:["Gold","Silver","Copper","Iron"], answer:3, topic:"Vedic"},
{q:"Total Upanishads?", options:["18","108","64","32"], answer:1, topic:"Vedic"},
{q:"Upanishads are also called?", options:["Vedanta","Shruti","Smriti","Veda"], answer:0, topic:"Vedic"},

{q:"Nyaya philosophy founder?", options:["Kapil","Gautam","Patanjali","Kanad"], answer:1, topic:"Vedic"},
{q:"Sankhya philosophy founder?", options:["Kapil","Gautam","Kanad","Jaimini"], answer:0, topic:"Vedic"},
{q:"Yoga philosophy founder?", options:["Patanjali","Kapil","Kanad","Gautam"], answer:0, topic:"Vedic"},

{q:"Total number of Puranas?", options:["10","18","20","25"], answer:1, topic:"Vedic"},
{q:"Mahabharata original name?", options:["Bharata","Jai Samhita","Ramayana","Purana"], answer:1, topic:"Vedic"},
{q:"Ramayana was written by?", options:["Vyasa","Valmiki","Kalidasa","Tulsidas"], answer:1, topic:"Vedic"},

// HARD SECTION CONTINUES

{q:"Arya is a concept of?", options:["Race","Language","Religion","Caste"], answer:1, topic:"Vedic"},
{q:"Indo-European languages include?", options:["Chinese","Latin","Greek","Arabic"], answer:2, topic:"Vedic"},
{q:"Max Muller supported which homeland?", options:["India","Central Asia","Arctic","Tibet"], answer:1, topic:"Vedic"},
{q:"Tilak supported which homeland?", options:["Central Asia","Arctic","India","Europe"], answer:1, topic:"Vedic"},

{q:"Rigveda has how many Mandalas?", options:["8","10","12","14"], answer:1, topic:"Vedic"},
{q:"Atharva Veda is also known as?", options:["Sacred Veda","Non-Aryan Veda","War Veda","Music Veda"], answer:1, topic:"Vedic"},

{q:"Women could participate in?", options:["Sabha","Samiti","Both","None"], answer:1, topic:"Vedic"},
{q:"Sabha consisted of?", options:["Children","Women","Elders","Slaves"], answer:2, topic:"Vedic"},

{q:"Sati system started in?", options:["Early Vedic","Later Vedic","Mauryan","Gupta"], answer:1, topic:"Vedic"},
{q:"Child marriage started in?", options:["Early Vedic","Later Vedic","Harappan","None"], answer:1, topic:"Vedic"},

{q:"Polygamy existed in?", options:["Early Vedic","Later Vedic","Both","None"], answer:1, topic:"Vedic"},
{q:"Widow remarriage was?", options:["Present later","Present early","Never present","Illegal"], answer:1, topic:"Vedic"},

{q:"Brahmavadini were?", options:["Warriors","Scholars","Traders","Farmers"], answer:1, topic:"Vedic"},
{q:"Sadyovadhu were?", options:["Unmarried scholars","Married women","Widows","Queens"], answer:1, topic:"Vedic"},

{q:"Gargi and Maitreyi belong to?", options:["Early Vedic","Later Vedic","Harappan","Mauryan"], answer:1, topic:"Vedic"},

{q:"Yajur Veda divided into?", options:["2 parts","3 parts","4 parts","5 parts"], answer:0, topic:"Vedic"},
{q:"Krishna Yajur Veda is?", options:["Poetry","Prose","Mixed","None"], answer:1, topic:"Vedic"},
{q:"Shukla Yajur Veda is?", options:["Poetry","Prose","Mixed","None"], answer:0, topic:"Vedic"},

{q:"Brahman texts explain?", options:["Songs","Rituals","War","Trade"], answer:1, topic:"Vedic"},
{q:"Aranyakas are called?", options:["War books","Forest books","Law books","Trade books"], answer:1, topic:"Vedic"},

{q:"Upanishads deal with?", options:["War","Philosophy","Trade","Music"], answer:1, topic:"Vedic"},
{q:"Meaning of Upanishad?", options:["Sit near teacher","Fight","Trade","Sing"], answer:0, topic:"Vedic"},

{q:"Oldest political assembly?", options:["Sabha","Samiti","Vidath","None"], answer:2, topic:"Vedic"},
{q:"Samiti was most?", options:["Powerful","Popular","Old","Weak"], answer:1, topic:"Vedic"},

// ---- FINAL 25 VEDIC QUESTIONS ----

{q:"Which Veda is considered the source of Indian music?", options:["Rig Veda","Sama Veda","Yajur Veda","Atharva Veda"], answer:1, topic:"Vedic"},
{q:"Which Veda contains charms and spells?", options:["Rig Veda","Sama Veda","Yajur Veda","Atharva Veda"], answer:3, topic:"Vedic"},
{q:"Which Veda is mainly for sacrificial formulas?", options:["Rig Veda","Sama Veda","Yajur Veda","Atharva Veda"], answer:2, topic:"Vedic"},

{q:"Which priest recited hymns in rituals?", options:["Adhvaryu","Hotri","Udgatri","Brahman"], answer:1, topic:"Vedic"},
{q:"Which priest performed sacrifices?", options:["Hotri","Adhvaryu","Udgatri","None"], answer:1, topic:"Vedic"},
{q:"Which priest sang hymns?", options:["Hotri","Adhvaryu","Udgatri","Brahman"], answer:2, topic:"Vedic"},
{q:"Which priest supervised rituals?", options:["Hotri","Adhvaryu","Udgatri","Brahman"], answer:3, topic:"Vedic"},

{q:"Which river is most mentioned in Rigveda?", options:["Ganga","Yamuna","Saraswati","Indus"], answer:2, topic:"Vedic"},
{q:"Which river was considered sacred but later disappeared?", options:["Ganga","Saraswati","Yamuna","Godavari"], answer:1, topic:"Vedic"},

{q:"Which animal was most important in Vedic economy?", options:["Horse","Cow","Elephant","Goat"], answer:1, topic:"Vedic"},
{q:"Term for cow wealth?", options:["Gomath","Gopati","Goshala","Grahapati"], answer:0, topic:"Vedic"},

{q:"Ashvamedha sacrifice was related to?", options:["Agriculture","War/Power","Marriage","Trade"], answer:1, topic:"Vedic"},
{q:"Rajasuya sacrifice was performed by?", options:["Priest","King","Farmer","Trader"], answer:1, topic:"Vedic"},
{q:"Vajapeya sacrifice symbolized?", options:["War","Victory & power","Trade","Marriage"], answer:1, topic:"Vedic"},

{q:"Which system became rigid in later Vedic period?", options:["Varna system","Trade system","Military","Religion"], answer:0, topic:"Vedic"},
{q:"Which Varna had lowest status?", options:["Brahmin","Kshatriya","Vaishya","Shudra"], answer:3, topic:"Vedic"},

{q:"Who were called Dasa/Dasyu?", options:["Aryans","Enemies","Priests","Traders"], answer:1, topic:"Vedic"},
{q:"Which group was non-Aryan?", options:["Arya","Dasa","Brahmin","Kshatriya"], answer:1, topic:"Vedic"},

{q:"What was the unit of family called?", options:["Kula","Grama","Vis","Jana"], answer:0, topic:"Vedic"},
{q:"Village was called?", options:["Kula","Grama","Vis","Jana"], answer:1, topic:"Vedic"},
{q:"Clan was called?", options:["Kula","Grama","Vis","Jana"], answer:2, topic:"Vedic"},
{q:"Tribe was called?", options:["Kula","Grama","Vis","Jana"], answer:3, topic:"Vedic"},

{q:"Who was head of village?", options:["Rajan","Gramni","Purohit","Senani"], answer:1, topic:"Vedic"},
{q:"Who was commander of army?", options:["Gramni","Senani","Purohit","Rajan"], answer:1, topic:"Vedic"},

{q:"Which metal was first used in early Vedic age?", options:["Iron","Copper","Gold","Silver"], answer:1, topic:"Vedic"},
{q:"Which metal dominated later Vedic age?", options:["Copper","Bronze","Iron","Gold"], answer:2, topic:"Vedic"}

    ]
  },
      // ... Keep all your other history chapters exactly as they were ...
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
},
{
id:"medieval_india",
name:"Medieval India",
icon:"🕌",
color:"#8E44AD",
desc:"Islam, Arab Conquest of Sindh, Ghazni, Ghori & Delhi Sultanate",
questions:[

{q:"Islam originated in which century?", options:["5th","6th","7th","8th"], answer:2, topic:"Medieval India"},
{q:"Birthplace of Islam?", options:["Baghdad","Mecca","Medina","Jerusalem"], answer:1, topic:"Medieval India"},
{q:"Founder of Islam?", options:["Ali","Abu Bakr","Prophet Muhammad","Umar"], answer:2, topic:"Medieval India"},
{q:"Holy city of Islam?", options:["Baghdad","Medina","Mecca","Damascus"], answer:2, topic:"Medieval India"},
{q:"First Muslims came to India through?", options:["Delhi","Punjab","Malabar Coast","Sindh"], answer:2, topic:"Medieval India"},

{q:"First Muslim attack on India took place in?", options:["711 AD","712 AD","1000 AD","1192 AD"], answer:0, topic:"Medieval India"},
{q:"Who led the Arab invasion of Sindh?", options:["Mahmud Ghazni","Muhammad Ghori","Muhammad Bin Qasim","Qutbuddin Aibak"], answer:2, topic:"Medieval India"},
{q:"King of Sindh during Arab invasion?", options:["Jaipal","Dahir","Prithviraj","Anangpal"], answer:1, topic:"Medieval India"},
{q:"Battle between Dahir and Muhammad Bin Qasim?", options:["Tarain","Rawar","Panipat","Waihind"], answer:1, topic:"Medieval India"},
{q:"Battle of Rawar fought in?", options:["711-712 AD","1000 AD","1025 AD","1192 AD"], answer:0, topic:"Medieval India"},

{q:"Result of Battle of Rawar?", options:["Dahir won","Muhammad Bin Qasim won","Draw","Ghori won"], answer:1, topic:"Medieval India"},
{q:"After Rawar, which region came under Muslim control?", options:["Punjab","Delhi","Sindh","Bengal"], answer:2, topic:"Medieval India"},
{q:"Main source for Arab conquest of Sindh?", options:["Indica","Chachnama","Rajatarangini","Tarikh-i-Hind"], answer:1, topic:"Medieval India"},
{q:"Author of Chachnama?", options:["Al-Biruni","Unknown","Utbi","Firdausi"], answer:1, topic:"Medieval India"},
{q:"Persian translator of Chachnama?", options:["Utbi","Abu Bakr","Ali Kufi","Firdausi"], answer:2, topic:"Medieval India"},

{q:"Muhammad Bin Qasim captured which port first?", options:["Surat","Debal","Goa","Cambay"], answer:1, topic:"Medieval India"},
{q:"Governor of Iraq who supported invasion of Sindh?", options:["Harun","Al-Hajjaj","Abu Bakr","Ali"], answer:1, topic:"Medieval India"},
{q:"Arab invasion came through?", options:["Arabian Sea","Bay of Bengal","Red Sea","Mediterranean"], answer:0, topic:"Medieval India"},
{q:"King Dahir belonged to?", options:["Sindh","Delhi","Punjab","Gujarat"], answer:0, topic:"Medieval India"},
{q:"Arab conquest established Muslim rule first in?", options:["Delhi","Punjab","Sindh","Bengal"], answer:2, topic:"Medieval India"},

{q:"Founder of Ghazni dynasty?", options:["Mahmud","Alaptigin","Sabuktigin","Ghori"], answer:1, topic:"Medieval India"},
{q:"Founder established Ghazni in?", options:["962 AD","1000 AD","998 AD","1025 AD"], answer:0, topic:"Medieval India"},
{q:"Second ruler of Ghazni dynasty?", options:["Mahmud","Sabuktigin","Ghori","Aibak"], answer:1, topic:"Medieval India"},
{q:"Sabuktigin fought against?", options:["Rajputs","Hindu Shahi rulers","Mughals","Marathas"], answer:1, topic:"Medieval India"},
{q:"Capital of Hindu Shahi kingdom?", options:["Lahore","Delhi","Waihind","Ajmer"], answer:2, topic:"Medieval India"},

{q:"Greatest ruler of Ghazni dynasty?", options:["Sabuktigin","Mahmud","Ghori","Aibak"], answer:1, topic:"Medieval India"},
{q:"Period of Mahmud Ghazni?", options:["962-998","998-1030","1191-1206","1206-1210"], answer:1, topic:"Medieval India"},
{q:"How many times did Mahmud attack India?", options:["12","15","17","20"], answer:2, topic:"Medieval India"},
{q:"First Indian ruler defeated by Mahmud?", options:["Dahir","Jaipal","Prithviraj","Anangpal"], answer:1, topic:"Medieval India"},
{q:"Battle of Waihind fought in?", options:["1000 AD","1001 AD","1025 AD","1192 AD"], answer:1, topic:"Medieval India"},

{q:"Mahmud destroyed which famous temple?", options:["Kashi Vishwanath","Somnath","Konark","Khajuraho"], answer:1, topic:"Medieval India"},
{q:"Somnath temple is in?", options:["Rajasthan","Punjab","Gujarat","UP"], answer:2, topic:"Medieval India"},
{q:"Somnath attack took place in?", options:["1001","1018","1025","1027"], answer:2, topic:"Medieval India"},
{q:"Ruler of Gujarat during Somnath attack?", options:["Bhima I","Dahir","Jaipal","Prithviraj"], answer:0, topic:"Medieval India"},
{q:"Last attack of Mahmud was against?", options:["Rajputs","Jats","Cholas","Palas"], answer:1, topic:"Medieval India"},

{q:"Last attack of Mahmud occurred in?", options:["1025","1027","1030","1192"], answer:1, topic:"Medieval India"},
{q:"Court poet of Mahmud?", options:["Utbi","Firdausi","Al-Biruni","Hasan"], answer:1, topic:"Medieval India"},
{q:"Famous work of Firdausi?", options:["Shahnama","Tarikh-i-Hind","Chachnama","Indica"], answer:0, topic:"Medieval India"},
{q:"Court historian of Mahmud?", options:["Firdausi","Utbi","Ghori","Aibak"], answer:1, topic:"Medieval India"},
{q:"Utbi described Mahmud's battles as?", options:["Holy War","Trade War","Civil War","Rajput War"], answer:0, topic:"Medieval India"},

{q:"Who came to India with Mahmud?", options:["Firdausi","Al-Biruni","Utbi","Ghori"], answer:1, topic:"Medieval India"},
{q:"Real name of Al-Biruni?", options:["Abu Rayhan","Ali","Hasan","Utbi"], answer:0, topic:"Medieval India"},
{q:"Title Al-Biruni means?", options:["Warrior","Knowledgeable Person","King","Poet"], answer:1, topic:"Medieval India"},
{q:"Book written by Al-Biruni?", options:["Shahnama","Kitab-ul-Hind","Indica","Rajatarangini"], answer:1, topic:"Medieval India"},
{q:"Al-Biruni studied mainly?", options:["China","India","Persia","Arabia"], answer:1, topic:"Medieval India"},

{q:"Founder of Ghor Empire?", options:["Mahmud","Muhammad Ghori","Muhammad Ghori's family","Muhammad of Ghor"], answer:3, topic:"Medieval India"},
{q:"Muhammad Ghori first attacked India in?", options:["1001","1025","1191","1175"], answer:3, topic:"Medieval India"},
{q:"Who defeated Ghori in First Battle of Tarain?", options:["Jaipal","Prithviraj Chauhan","Dahir","Aibak"], answer:1, topic:"Medieval India"},
{q:"First Battle of Tarain fought in?", options:["1191","1192","1206","1025"], answer:0, topic:"Medieval India"},
{q:"Second Battle of Tarain fought in?", options:["1191","1192","1206","1001"], answer:1, topic:"Medieval India"},

{q:"Who won Second Battle of Tarain?", options:["Prithviraj","Ghori","Jaichand","Aibak"], answer:1, topic:"Medieval India"},
{q:"Victory in Second Tarain opened way for?", options:["Mughal Empire","Delhi Sultanate","Maratha Empire","Gupta Empire"], answer:1, topic:"Medieval India"},
{q:"Prithviraj Chauhan belonged to?", options:["Rajput dynasty","Maurya","Gupta","Chola"], answer:0, topic:"Medieval India"},
{q:"Source for Prithviraj Chauhan?", options:["Indica","Prithviraj Raso","Kitab-ul-Hind","Shahnama"], answer:1, topic:"Medieval India"},
{q:"Author of Prithviraj Raso?", options:["Firdausi","Chand Bardai","Utbi","Kalhana"], answer:1, topic:"Medieval India"},

{q:"Muhammad Ghori had how many famous slaves?", options:["2","3","4","5"], answer:2, topic:"Medieval India"},
{q:"Most famous slave of Ghori?", options:["Yildiz","Qubacha","Bakhtiyar Khilji","Qutbuddin Aibak"], answer:3, topic:"Medieval India"},
{q:"Qutbuddin Aibak was appointed as?", options:["King","Governor","Poet","Historian"], answer:1, topic:"Medieval India"},
{q:"Delhi Sultanate was established in?", options:["1192","1206","1290","1320"], answer:1, topic:"Medieval India"},
{q:"Founder of Delhi Sultanate?", options:["Aibak","Ghori","Balban","Iltutmish"], answer:0, topic:"Medieval India"},

{q:"Aibak founded which dynasty?", options:["Khilji","Slave Dynasty","Tughlaq","Lodi"], answer:1, topic:"Medieval India"},
{q:"Meaning of Aibak?", options:["Warrior","Moon Lord","Slave","Commander"], answer:1, topic:"Medieval India"},
{q:"Bakhtiyar Khilji conquered?", options:["Punjab","Bihar & Bengal","Sindh","Gujarat"], answer:1, topic:"Medieval India"},
{q:"Nasiruddin Qubacha ruled?", options:["Sindh","Delhi","Ajmer","Bengal"], answer:0, topic:"Medieval India"},
{q:"Tajuddin Yildiz controlled?", options:["Ghazni","Delhi","Ajmer","Multan"], answer:0, topic:"Medieval India"},

{q:"First successful Muslim invasion of India was by?", options:["Mahmud","Ghori","Muhammad Bin Qasim","Aibak"], answer:2, topic:"Medieval India"},
{q:"Arab conquest mainly affected?", options:["South India","Sindh","Bengal","Delhi"], answer:1, topic:"Medieval India"},
{q:"Which sea route connected Arabs to India?", options:["Arabian Sea","Mediterranean","Pacific","Atlantic"], answer:0, topic:"Medieval India"},
{q:"King of Ceylon exchanged gifts with?", options:["Dahir","Caliph","Ghori","Mahmud"], answer:1, topic:"Medieval India"},
{q:"Present day Ceylon is?", options:["Maldives","Sri Lanka","Nepal","Bhutan"], answer:1, topic:"Medieval India"},

// 35 more MCQs

{q:"Capital of Ghazni Empire?", options:["Delhi","Kabul","Ghazni","Lahore"], answer:2, topic:"Medieval India"},
{q:"Mahmud's empire was centered in?", options:["India","Afghanistan","Iran","Iraq"], answer:1, topic:"Medieval India"},
{q:"Tarain is located in present-day?", options:["Haryana","Punjab","UP","Rajasthan"], answer:0, topic:"Medieval India"},
{q:"Prithviraj Chauhan ruled from?", options:["Delhi-Ajmer","Kannauj","Gujarat","Lahore"], answer:0, topic:"Medieval India"},
{q:"Jaichand belonged to?", options:["Gahadavala dynasty","Chola","Chalukya","Paramara"], answer:0, topic:"Medieval India"},

{q:"Who helped Ghori against Prithviraj?", options:["Jaichand","Dahir","Bhima","Jaipal"], answer:0, topic:"Medieval India"},
{q:"Muhammad Ghori died in?", options:["1206","1192","1027","1211"], answer:0, topic:"Medieval India"},
{q:"Qutbuddin Aibak became Sultan after death of?", options:["Mahmud","Ghori","Balban","Iltutmish"], answer:1, topic:"Medieval India"},
{q:"Slave Dynasty is also called?", options:["Mamluk Dynasty","Khilji","Tughlaq","Lodi"], answer:0, topic:"Medieval India"},
{q:"Delhi Sultanate started in which century?", options:["10th","11th","12th","13th"], answer:3, topic:"Medieval India"},

{q:"Kitab-ul-Hind deals with?", options:["India","Persia","Arabia","China"], answer:0, topic:"Medieval India"},
{q:"Al-Biruni was expert in?", options:["Science","History","Mathematics","All"], answer:3, topic:"Medieval India"},
{q:"Firdausi belonged to?", options:["India","Persia","China","Arabia"], answer:1, topic:"Medieval India"},
{q:"Utbi wrote about?", options:["Ashoka","Mahmud","Ghori","Aibak"], answer:1, topic:"Medieval India"},
{q:"Debal was a famous?", options:["Temple","Port","Capital","Fort"], answer:1, topic:"Medieval India"},

{q:"Sindh conquest happened under which Caliphate?", options:["Abbasid","Umayyad","Ottoman","Fatimid"], answer:1, topic:"Medieval India"},
{q:"Arab conquest brought which religion?", options:["Buddhism","Islam","Christianity","Jainism"], answer:1, topic:"Medieval India"},
{q:"Who is considered first Turk ruler to attack India?", options:["Mahmud","Sabuktigin","Ghori","Aibak"], answer:1, topic:"Medieval India"},
{q:"Mahmud attacked India mainly for?", options:["Trade","Religion and wealth","Agriculture","Colonies"], answer:1, topic:"Medieval India"},
{q:"Number of years Mahmud attacked India?", options:["10","15","27","30"], answer:2, topic:"Medieval India"},

{q:"Mahmud died in?", options:["1025","1027","1030","1192"], answer:2, topic:"Medieval India"},
{q:"Prithviraj Chauhan belonged to which clan?", options:["Chauhan","Sisodia","Paramara","Tomara"], answer:0, topic:"Medieval India"},
{q:"Aibak's rule began in?", options:["1206","1210","1192","1220"], answer:0, topic:"Medieval India"},
{q:"Muhammad Bin Qasim belonged to?", options:["Arab","Turk","Persian","Afghan"], answer:0, topic:"Medieval India"},
{q:"Rawar battle was fought in?", options:["Punjab","Sindh","Delhi","Gujarat"], answer:1, topic:"Medieval India"},

{q:"Chachnama mainly describes?", options:["Mauryas","Arab conquest of Sindh","Guptas","Mughals"], answer:1, topic:"Medieval India"},
{q:"Who captured Sindh?", options:["Ghori","Mahmud","Muhammad Bin Qasim","Aibak"], answer:2, topic:"Medieval India"},
{q:"Which invasion marked permanent Muslim foothold?", options:["Mahmud","Ghori","Qasim","Aibak"], answer:2, topic:"Medieval India"},
{q:"Delhi Sultanate's first ruler?", options:["Ghori","Aibak","Iltutmish","Balban"], answer:1, topic:"Medieval India"},
{q:"Muhammad Ghori belonged to?", options:["Ghor","Ghazni","Delhi","Arabia"], answer:0, topic:"Medieval India"}
]},
{
id:"delhi_sultanate",
name:"Delhi Sultanate",
icon:"🏰",
color:"#C0392B",
desc:"Slave, Khilji, Tughlaq, Sayyid & Lodhi Dynasties",
questions: [

{q:"Who founded the Delhi Sultanate?",options:["Iltutmish","Balban","Qutbuddin Aibak","Muhammad Ghori"],answer:2},
{q:"Delhi Sultanate was founded in?",options:["1192","1206","1211","1290"],answer:1},
{q:"Qutbuddin Aibak belonged to which dynasty?",options:["Khilji","Slave","Tughlaq","Lodhi"],answer:1},
{q:"The Slave Dynasty is also known as?",options:["Sayyid","Mamluk","Lodhi","Tughlaq"],answer:1},
{q:"Capital of Qutbuddin Aibak?",options:["Delhi","Agra","Lahore","Ajmer"],answer:2},
{q:"Qutbuddin Aibak was known as?",options:["Iron Man","Lakh Baksh","Sultan-i-Azam","Sikander-i-Sani"],answer:1},
{q:"Qutb Minar was started by?",options:["Iltutmish","Balban","Qutbuddin Aibak","Firoz Shah"],answer:2},
{q:"Qutb Minar was completed by?",options:["Balban","Iltutmish","Razia","Alauddin"],answer:1},
{q:"Qutb Minar was reconstructed by?",options:["Firoz Shah Tughlaq","Balban","Razia","Ghiyasuddin"],answer:0},
{q:"Quwwat-ul-Islam Mosque is located at?",options:["Delhi","Agra","Ajmer","Lahore"],answer:0},

{q:"Qutbuddin Aibak died while playing?",options:["Chess","Polo","Football","Hockey"],answer:1},
{q:"Qutbuddin Aibak died in?",options:["1206","1210","1211","1229"],answer:1},
{q:"Who succeeded Qutbuddin Aibak?",options:["Iltutmish","Aram Shah","Balban","Razia"],answer:1},
{q:"Aram Shah ruled for approximately?",options:["8 months","8 years","2 years","5 years"],answer:0},
{q:"Who became Sultan after Aram Shah?",options:["Balban","Razia","Iltutmish","Nasiruddin"],answer:2},

{q:"Iltutmish ruled during?",options:["1206-1210","1211-1236","1236-1240","1266-1287"],answer:1},
{q:"Iltutmish was originally a slave of?",options:["Balban","Qutbuddin Aibak","Ghori","Aram Shah"],answer:1},
{q:"Iltutmish married whose daughter?",options:["Razia's","Ghori's","Aibak's","Balban's"],answer:2},
{q:"Iltutmish was appointed governor of?",options:["Delhi","Ajmer","Badayun","Lahore"],answer:2},
{q:"Who gave Iltutmish the title Sultan-i-Azam?",options:["Balban","Caliph","Razia","Aibak"],answer:1},

{q:"Iltutmish received recognition from Caliph in?",options:["1211","1229","1236","1240"],answer:1},
{q:"Silver coin introduced by Iltutmish?",options:["Jital","Tanka","Rupiya","Dinar"],answer:1},
{q:"Copper coin introduced by Iltutmish?",options:["Jital","Tanka","Mohur","Dam"],answer:0},
{q:"Who is called the real founder of Delhi Sultanate?",options:["Aibak","Iltutmish","Balban","Razia"],answer:1},
{q:"Which institution was formed by Iltutmish?",options:["Chalisa","Diwan-i-Arz","Barid","Mansabdari"],answer:0},

{q:"Chalisa consisted of?",options:["20 nobles","30 nobles","40 nobles","50 nobles"],answer:2},
{q:"Who faced the Mongol threat first?",options:["Balban","Iltutmish","Aibak","Razia"],answer:1},
{q:"Who was the daughter of Iltutmish?",options:["Nur Jahan","Razia","Jahanara","Mumtaz"],answer:1},
{q:"Razia ruled during?",options:["1236-1240","1240-1246","1266-1287","1290-1296"],answer:0},
{q:"Razia was the first _____ ruler of India.",options:["Hindu","Muslim","Female Muslim","Rajput"],answer:2},

{q:"Razia appointed whom as Amir-i-Akhur?",options:["Yakut","Balban","Altunia","Aibak"],answer:0},
{q:"Yakut belonged to?",options:["Turk","Persian","Abyssinian","Arab"],answer:2},
{q:"Who revolted against Razia?",options:["Altunia","Ghori","Aibak","Mahmud"],answer:0},
{q:"Razia died in?",options:["1240","1236","1266","1290"],answer:0},
{q:"After Razia who became Sultan?",options:["Bahram Shah","Balban","Nasiruddin","Aibak"],answer:0},

{q:"Who was called Ulugh Khan?",options:["Balban","Aibak","Iltutmish","Razia"],answer:0},
{q:"Balban ruled during?",options:["1266-1287","1290-1296","1320-1325","1351-1388"],answer:0},
{q:"Balban belonged to which dynasty?",options:["Khilji","Slave","Tughlaq","Sayyid"],answer:1},
{q:"Balban's theory of kingship emphasized?",options:["Democracy","Divine Right","Republic","Federalism"],answer:1},
{q:"Balban adopted the title?",options:["Zill-i-Ilahi","Sultan-i-Azam","Lakh Baksh","Padshah"],answer:0},

{q:"Meaning of Zill-i-Ilahi?",options:["Shadow of God","Servant of God","King of Kings","Caliph"],answer:0},
{q:"Which practices were introduced by Balban?",options:["Sijda and Paibos","Jizya and Kharaj","Iqta and Jagir","Tanka and Jital"],answer:0},
{q:"Balban set up which spy department?",options:["Barid","Diwan-i-Arz","Chalisa","Iqta"],answer:0},
{q:"Balban's famous son was?",options:["Muhammad","Nasiruddin","Yakut","Altunia"],answer:0},
{q:"Muhammad died fighting against?",options:["Rajputs","Mongols","Marathas","British"],answer:1},

{q:"Who is called greatest ruler of Khilji Dynasty?",options:["Jalaluddin","Alauddin","Mubarak Shah","Khusrau Shah"],answer:1},
{q:"Alauddin Khilji ruled during?",options:["1296-1316","1290-1296","1320-1325","1351-1388"],answer:0},
{q:"Alauddin Khilji was known as?",options:["Lakh Baksh","Sikander-i-Sani","Zill-i-Ilahi","Padshah"],answer:1},
{q:"Who founded Khilji Dynasty?",options:["Alauddin","Jalaluddin Khilji","Balban","Mubarak"],answer:1},
{q:"Alauddin Khilji was the first Sultan to expand into?",options:["Punjab","South India","Bengal","Sindh"],answer:1},


{q:"Alauddin Khilji captured the throne in?",options:["1290","1296","1303","1316"],answer:1},
{q:"Alauddin killed whom to become Sultan?",options:["Balban","Jalaluddin Khilji","Mubarak Shah","Ghiyasuddin"],answer:1},
{q:"Capital city established by Alauddin?",options:["Tughlaqabad","Siri","Firozabad","Agra"],answer:1},
{q:"Alauddin's famous general?",options:["Yakut","Malik Kafur","Altunia","Khusrau Khan"],answer:1},
{q:"Who conquered Gujarat for Alauddin?",options:["Malik Kafur","Nusrat Khan and Ulugh Khan","Balban","Yakut"],answer:1},

{q:"Ruler of Gujarat defeated by Alauddin?",options:["Bhima I","Rai Karan","Dahir","Ram Chandra"],answer:1},
{q:"Which temple was destroyed during Gujarat campaign?",options:["Konark","Somnath","Jagannath","Kashi"],answer:1},
{q:"Who became Alauddin's queen from Gujarat?",options:["Padmavati","Kamala Devi","Razia","Nur Jahan"],answer:1},
{q:"Malik Kafur was purchased from Gujarat for?",options:["100 Dinars","500 Dinars","1000 Dinars","5000 Dinars"],answer:2},
{q:"Malik Kafur was known as?",options:["Hazar Dinari","Amir-ul-Umara","Ulugh Khan","Khan-i-Khanan"],answer:0},

{q:"Ruler of Ranthambore defeated by Alauddin?",options:["Pratap Rudradev","Rana Hammir Dev","Ram Chandra Dev","Rai Karan"],answer:1},
{q:"Women of Ranthambore performed?",options:["Sati","Jauhar","Purdah","Hijrat"],answer:1},
{q:"Chittor was ruled by?",options:["Rana Ratan Singh","Ram Chandra","Pratap Rudradev","Dahir"],answer:0},
{q:"Who defeated Chittor?",options:["Balban","Alauddin Khilji","Iltutmish","Babur"],answer:1},
{q:"Padmavati is associated with?",options:["Chittor","Delhi","Devagiri","Warangal"],answer:0},

{q:"Source of Padmavati story?",options:["Akbarnama","Padmavat","Tarikh-i-Firozshahi","Tabaqat"],answer:1},
{q:"Author of Padmavat?",options:["Amir Khusrau","Malik Muhammad Jayasi","Barani","Ibn Battuta"],answer:1},
{q:"After capturing Chittor, Alauddin renamed it?",options:["Khizrabad","Siri","Firozabad","Tughlaqabad"],answer:0},
{q:"Devagiri belonged to which dynasty?",options:["Kakatiya","Yadava","Pala","Chola"],answer:1},
{q:"Ruler of Devagiri during Alauddin's invasion?",options:["Ram Chandra Dev","Ratan Singh","Rudradev","Bhima"],answer:0},

{q:"Warangal belonged to which dynasty?",options:["Yadava","Kakatiya","Chola","Pala"],answer:1},
{q:"Ruler of Warangal defeated by Malik Kafur?",options:["Rudradev II","Dahir","Rai Karan","Ratan Singh"],answer:0},
{q:"Kohinoor Diamond was obtained from?",options:["Gujarat","Delhi","Warangal","Madurai"],answer:2},
{q:"Malik Kafur defeated which southern kingdom?",options:["Madurai","Warangal","Devagiri","All of these"],answer:3},
{q:"Which temple was destroyed in Madurai campaign?",options:["Somnath","Nataraja","Jagannath","Kashi"],answer:1},

{q:"Alauddin established which intelligence department?",options:["Barid","Chalisa","Mansabdari","Iqta"],answer:0},
{q:"Secret spy organization founded by Alauddin?",options:["Chalisa","Majlis-i-Khas","Barid","Mongol Board"],answer:2},
{q:"Main purpose of intelligence system?",options:["Collect taxes","Prevent revolts","Trade","Religion"],answer:1},
{q:"Alauddin banned?",options:["Alcohol","Noble marriages","Feasts without permission","All of these"],answer:3},
{q:"Alauddin's market control policy was called?",options:["Dagh","Mandi System","Iqta","Kharaj"],answer:1},

{q:"Market control helped mainly in?",options:["Trade","Maintaining army","Religion","Architecture"],answer:1},
{q:"Horse branding system was called?",options:["Huliya","Dagh","Iqta","Barid"],answer:1},
{q:"Identification of soldiers system?",options:["Huliya","Dagh","Sijda","Paibos"],answer:0},
{q:"Largest standing army maintained by?",options:["Balban","Alauddin","Razia","Aibak"],answer:1},
{q:"Maximum Mongol attacks occurred during whose reign?",options:["Balban","Alauddin","Iltutmish","Firoz"],answer:1},

{q:"How many major Mongol attacks occurred during Alauddin's reign?",options:["3","5","7","10"],answer:2},
{q:"Alauddin separated religion from?",options:["Army","Administration","Trade","Taxation"],answer:1},
{q:"Who said 'Kingship knows no kinship'?",options:["Balban","Alauddin","Iltutmish","Babur"],answer:1},
{q:"Court poet of Alauddin?",options:["Barani","Amir Khusrau","Firdausi","Jayasi"],answer:1},
{q:"Amir Khusrau was disciple of?",options:["Nizamuddin Auliya","Moinuddin Chishti","Bakhtiyar Kaki","Salim Chishti"],answer:0},

{q:"Amir Khusrau was called?",options:["Parrot of India","Akbar of India","Sultan of Poets","Prince of Builders"],answer:0},
{q:"Amir Khusrau introduced?",options:["Tabla","Sitar","Qawwali","All of these"],answer:3},
{q:"Alauddin constructed which gateway?",options:["Buland Darwaza","Alai Darwaza","India Gate","Lahori Gate"],answer:1},
{q:"Alauddin started construction of?",options:["Alai Minar","Qutb Minar","Charminar","Gol Gumbaz"],answer:0},
{q:"Who succeeded Alauddin Khilji?",options:["Mubarak Shah","Balban","Ghiyasuddin","Nasiruddin"],answer:0},

{q:"Last ruler of Khilji dynasty?",options:["Alauddin","Mubarak Shah","Khusrau Shah","Jalaluddin"],answer:2},
{q:"Who ended the Khilji dynasty?",options:["Babur","Ghiyasuddin Tughlaq","Balban","Iltutmish"],answer:1},
{q:"Founder of Tughlaq dynasty?",options:["Muhammad bin Tughlaq","Ghiyasuddin Tughlaq","Firoz Shah","Nasiruddin"],answer:1},
{q:"Tughlaq dynasty was established in?",options:["1290","1320","1351","1414"],answer:1},
{q:"Ghiyasuddin Tughlaq founded which city?",options:["Siri","Tughlaqabad","Agra","Firozabad"],answer:1},
// MCQ SET 3 (101–150) : Tughlaq Dynasty, Muhammad Bin Tughlaq, Firoz Shah Tughlaq

{q:"Muhammad Bin Tughlaq ruled during?",options:["1320-1325","1325-1351","1351-1388","1414-1451"],answer:1},
{q:"Muhammad Bin Tughlaq was the son of?",options:["Balban","Ghiyasuddin Tughlaq","Firoz Shah","Alauddin"],answer:1},
{q:"Real name of Muhammad Bin Tughlaq?",options:["Junakhan","Khizr Khan","Ulugh Khan","Nasir Khan"],answer:0},
{q:"Muhammad Bin Tughlaq was called?",options:["Wise King","Mad King","Parrot of India","Lakh Baksh"],answer:1},
{q:"Another title of Muhammad Bin Tughlaq?",options:["Prince of Moneyers","Sultan-i-Azam","Zill-i-Ilahi","Sikander-i-Sani"],answer:0},

{q:"Muhammad Bin Tughlaq shifted capital from Delhi to?",options:["Warangal","Daulatabad","Agra","Lahore"],answer:1},
{q:"Earlier name of Daulatabad was?",options:["Devagiri","Siri","Tughlaqabad","Khizrabad"],answer:0},
{q:"Capital transfer took place mainly to?",options:["Control South India","Trade","Religion","Agriculture"],answer:0},
{q:"After how many years was capital shifted back to Delhi?",options:["1","2","5","10"],answer:1},
{q:"Capital transfer caused?",options:["Prosperity","Heavy loss of life","Victory over Mongols","Revenue increase"],answer:1},

{q:"Muhammad Bin Tughlaq introduced?",options:["Token Currency","Iqta","Mansabdari","Dagh"],answer:0},
{q:"Token currency was made of?",options:["Gold","Silver","Copper","Iron"],answer:2},
{q:"Token currency was inspired by ruler of?",options:["China","Persia","Arabia","Turkey"],answer:0},
{q:"Chinese ruler who inspired token currency?",options:["Kublai Khan","Genghis Khan","Timur","Ogedei"],answer:0},
{q:"Result of token currency experiment?",options:["Success","Failure","Partial Success","Unknown"],answer:1},

{q:"Muhammad Bin Tughlaq increased revenue in?",options:["Punjab","Doab","Bengal","Sindh"],answer:1},
{q:"Increase in Doab revenue coincided with?",options:["Flood","Drought","War","Prosperity"],answer:1},
{q:"Department of Agriculture founded by him?",options:["Diwan-i-Arz","Diwan-i-Kohi","Barid","Chalisa"],answer:1},
{q:"Head of Diwan-i-Kohi?",options:["Amir Kohi","Malik Kafur","Yakut","Barani"],answer:0},
{q:"Diwan-i-Kohi provided?",options:["Loans to farmers","Military training","Religious education","Trade permits"],answer:0},

{q:"Loan for Rabi crops was called?",options:["Takavi","Sondhar","Kharaj","Jizya"],answer:1},
{q:"Loan for Kharif crops was called?",options:["Takavi","Sondhar","Tanka","Iqta"],answer:0},
{q:"Muhammad Bin Tughlaq adopted which policy against Mongols?",options:["War","Appeasement","Alliance","None"],answer:1},
{q:"Which foreign traveler visited his court?",options:["Al-Biruni","Ibn Battuta","Marco Polo","Fa-Hien"],answer:1},
{q:"Ibn Battuta belonged to?",options:["Morocco","China","Persia","Turkey"],answer:0},

{q:"Muhammad Bin Tughlaq gave Ibn Battuta the title?",options:["Qazi","Amir","Khan","Wazir"],answer:0},
{q:"Book written by Ibn Battuta?",options:["Rihla","Akbarnama","Baburnama","Tarikh"],answer:0},
{q:"Khorasan expedition of Muhammad Bin Tughlaq was?",options:["Successful","Failed","Partially successful","Not attempted"],answer:1},
{q:"Karakhal expedition resulted in?",options:["Victory","Heavy loss","Alliance","Trade"],answer:1},
{q:"Muhammad Bin Tughlaq died in?",options:["1351","1325","1388","1414"],answer:0},

{q:"During Muhammad Bin Tughlaq's reign which kingdoms emerged?",options:["Vijayanagar & Bahmani","Mughal & Maratha","Gupta & Vakataka","Chola & Chera"],answer:0},
{q:"Vijayanagar Empire was founded in?",options:["1336","1347","1351","1398"],answer:0},
{q:"Founders of Vijayanagar?",options:["Harihara and Bukka","Krishna Deva Raya","Sangama","Rama Raya"],answer:0},
{q:"Bahmani Kingdom was founded in?",options:["1336","1347","1398","1451"],answer:1},
{q:"Founder of Bahmani Kingdom?",options:["Alauddin Hasan Bahman Shah","Harihara","Bukka","Timur"],answer:0},

{q:"Firoz Shah Tughlaq ruled during?",options:["1351-1388","1325-1351","1414-1451","1451-1526"],answer:0},
{q:"Firoz Shah Tughlaq was related to Muhammad Bin Tughlaq as?",options:["Brother","Cousin","Father","Son"],answer:1},
{q:"Firoz Shah is called?",options:["Akbar of Delhi Sultanate","Mad King","Parrot of India","Lakh Baksh"],answer:0},
{q:"Firoz Shah established?",options:["Public Works Department","Mansabdari","Iqta","Chalisa"],answer:0},
{q:"Hospital department founded by Firoz Shah?",options:["Diwan-i-Khairat","Dar-ul-Shafa","Barid","Diwan-i-Arz"],answer:1},

{q:"Charitable department founded by Firoz Shah?",options:["Diwan-i-Khairat","Dar-ul-Shafa","Barid","Kohi"],answer:0},
{q:"Department for slaves founded by Firoz Shah?",options:["Diwan-i-Bandagan","Chalisa","Barid","Iqta"],answer:0},
{q:"Firoz Shah abolished how many taxes?",options:["18","20","24","28"],answer:3},
{q:"Land revenue tax was called?",options:["Kharaj","Jizya","Khams","Zakat"],answer:0},
{q:"War booty tax was called?",options:["Khams","Kharaj","Jizya","Zakat"],answer:0},

{q:"Tax paid by Muslims was?",options:["Jizya","Zakat","Kharaj","Khams"],answer:1},
{q:"Religious tax on non-Muslims?",options:["Jizya","Khams","Zakat","Kharaj"],answer:0},
{q:"Irrigation tax introduced by Firoz Shah?",options:["Haq-i-Sharb","Khams","Kharaj","Jizya"],answer:0},
{q:"Maximum irrigation development occurred under?",options:["Alauddin","Firoz Shah","Balban","Aibak"],answer:1},
{q:"Coin introduced by Firoz Shah?",options:["Adha and Bikh","Tanka and Jital","Dam and Rupiya","Mohur and Dam"],answer:0},
// MCQ SET 4 (151–200) : Timur, Sayyid, Lodhi Dynasty, Panipat

{q:"Who invaded India in 1398?",options:["Babur","Timur","Nadir Shah","Ghori"],answer:1},
{q:"Timur belonged to?",options:["Persia","Samarkand","Turkey","Arabia"],answer:1},
{q:"Timur attacked Delhi during reign of?",options:["Firoz Shah","Nasiruddin Mahmud Shah","Ibrahim Lodhi","Khizr Khan"],answer:1},
{q:"Timur stayed in Delhi for?",options:["7 days","14 days","21 days","40 days"],answer:1},
{q:"Timur's invasion weakened?",options:["Mughals","Delhi Sultanate","Marathas","Guptas"],answer:1},

{q:"Before leaving India Timur appointed whom as governor?",options:["Khizr Khan","Bahlol Lodhi","Daulat Khan","Alam Shah"],answer:0},
{q:"Khizr Khan was governor of?",options:["Delhi","Punjab, Multan & Dipalpur","Bengal","Sindh"],answer:1},
{q:"Last ruler of Tughlaq dynasty?",options:["Firoz Shah","Nasiruddin Mahmud Shah","Muhammad Bin Tughlaq","Ghiyasuddin"],answer:1},
{q:"Tughlaq dynasty ended in?",options:["1398","1414","1451","1526"],answer:1},
{q:"Who founded the Sayyid Dynasty?",options:["Khizr Khan","Mubarak Shah","Alam Shah","Bahlol Lodhi"],answer:0},

{q:"Sayyid Dynasty ruled from?",options:["1320-1414","1414-1451","1451-1526","1206-1290"],answer:1},
{q:"Founder of Sayyid Dynasty was?",options:["Khizr Khan","Mubarak Shah","Alam Shah","Ibrahim"],answer:0},
{q:"First ruler of Sayyid Dynasty?",options:["Khizr Khan","Mubarak Shah","Muhammad Shah","Alam Shah"],answer:0},
{q:"Last ruler of Sayyid Dynasty?",options:["Khizr Khan","Muhammad Shah","Alam Shah","Mubarak Shah"],answer:2},
{q:"Alam Shah was murdered by?",options:["Babur","Bahlol Lodhi","Timur","Khizr Khan"],answer:1},

{q:"Who founded Lodhi Dynasty?",options:["Sikandar Lodhi","Ibrahim Lodhi","Bahlol Lodhi","Daulat Khan"],answer:2},
{q:"Lodhi Dynasty ruled from?",options:["1414-1451","1451-1526","1526-1556","1206-1290"],answer:1},
{q:"Lodhi Dynasty was the first _____ dynasty in India.",options:["Turkish","Arab","Afghan","Persian"],answer:2},
{q:"Bahlol Lodhi introduced which coin?",options:["Tanka","Jital","Bahloli","Dam"],answer:2},
{q:"Bahlol Lodhi became Sultan in?",options:["1414","1451","1489","1526"],answer:1},

{q:"Greatest ruler of Lodhi Dynasty?",options:["Bahlol Lodhi","Sikandar Lodhi","Ibrahim Lodhi","Daulat Khan"],answer:1},
{q:"Real name of Sikandar Lodhi?",options:["Nizam Khan","Ibrahim Khan","Khizr Khan","Daulat Khan"],answer:0},
{q:"Sikandar Lodhi ruled during?",options:["1451-1489","1489-1517","1517-1526","1414-1451"],answer:1},
{q:"Pen name of Sikandar Lodhi?",options:["Gulrukhi","Jayasi","Khusrau","Barani"],answer:0},
{q:"Meaning of Gulrukhi?",options:["Rose-faced","Brave King","Shadow of God","Lion King"],answer:0},

{q:"Sikandar Lodhi founded which city?",options:["Delhi","Agra","Lahore","Jaunpur"],answer:1},
{q:"Agra was founded in?",options:["1451","1489","1504","1526"],answer:2},
{q:"Sikandar Lodhi made _____ his capital.",options:["Delhi","Agra","Lahore","Ajmer"],answer:1},
{q:"Land measurement unit introduced by Sikandar?",options:["Gaz-i-Sikandari","Bigha","Jarib","Tanka"],answer:0},
{q:"Famous saint contemporary of Sikandar Lodhi?",options:["Nizamuddin Auliya","Kabir","Moinuddin Chishti","Bakhtiyar Kaki"],answer:1},

{q:"Who succeeded Sikandar Lodhi?",options:["Bahlol Lodhi","Ibrahim Lodhi","Daulat Khan","Babur"],answer:1},
{q:"Ibrahim Lodhi ruled during?",options:["1451-1489","1489-1517","1517-1526","1526-1530"],answer:2},
{q:"Last ruler of Delhi Sultanate?",options:["Alam Shah","Ibrahim Lodhi","Sikandar Lodhi","Bahlol Lodhi"],answer:1},
{q:"Who defeated Ibrahim Lodhi?",options:["Timur","Babur","Sher Shah","Humayun"],answer:1},
{q:"Battle in which Ibrahim Lodhi died?",options:["Tarain","Panipat","Khanwa","Haldighati"],answer:1},

{q:"First Battle of Panipat fought in?",options:["1525","1526","1527","1530"],answer:1},
{q:"Opponent of Babur at Panipat?",options:["Sikandar Lodhi","Ibrahim Lodhi","Daulat Khan","Alam Shah"],answer:1},
{q:"Result of First Battle of Panipat?",options:["Lodhi Victory","Babur Victory","Draw","Timur Victory"],answer:1},
{q:"Which empire was established after Panipat?",options:["Delhi Sultanate","Mughal Empire","Maratha Empire","Bahmani Empire"],answer:1},
{q:"Which dynasty ended after Panipat?",options:["Khilji","Tughlaq","Lodhi","Sayyid"],answer:2},

{q:"Who is considered the last Sultan of Delhi Sultanate?",options:["Sikandar Lodhi","Ibrahim Lodhi","Alam Shah","Bahlol Lodhi"],answer:1},
{q:"Delhi Sultanate existed from?",options:["1206-1526","1192-1526","1211-1526","1206-1556"],answer:0},
{q:"Total number of dynasties in Delhi Sultanate?",options:["3","4","5","6"],answer:2},
{q:"Correct order of dynasties?",options:["Slave-Khilji-Tughlaq-Sayyid-Lodhi","Slave-Tughlaq-Khilji-Sayyid-Lodhi","Khilji-Slave-Tughlaq-Lodhi-Sayyid","Slave-Khilji-Lodhi-Tughlaq-Sayyid"],answer:0},
{q:"Which dynasty ruled longest?",options:["Slave","Khilji","Tughlaq","Lodhi"],answer:2},

{q:"Who built Tughlaqabad?",options:["Muhammad Bin Tughlaq","Ghiyasuddin Tughlaq","Firoz Shah","Alauddin"],answer:1},
{q:"Who built Siri city?",options:["Balban","Alauddin Khilji","Firoz Shah","Aibak"],answer:1},
{q:"Who built Agra?",options:["Babur","Sikandar Lodhi","Ibrahim Lodhi","Sher Shah"],answer:1},
{q:"Who introduced Dagh system?",options:["Balban","Alauddin Khilji","Firoz Shah","Aibak"],answer:1},
{q:"Who introduced Huliya system?",options:["Balban","Alauddin Khilji","Iltutmish","Firoz Shah"],answer:1},

{q:"Who introduced Token Currency?",options:["Alauddin","Muhammad Bin Tughlaq","Firoz Shah","Balban"],answer:1},
{q:"Who transferred capital to Daulatabad?",options:["Muhammad Bin Tughlaq","Alauddin","Balban","Iltutmish"],answer:0},
{q:"Who started maximum irrigation works?",options:["Balban","Firoz Shah","Alauddin","Aibak"],answer:1},
{q:"Who established Diwan-i-Bandagan?",options:["Balban","Firoz Shah","Muhammad Bin Tughlaq","Aibak"],answer:1},
{q:"Who established Dar-ul-Shafa?",options:["Balban","Alauddin","Firoz Shah","Iltutmish"],answer:2}

]},
{
id:"protestant_religion",
name:"Protestant Religion",
icon:"🕉️",
color:"#8E44AD",
desc:"Charvaka, Ajivika, Jainism and Buddhism",
questions:[

{q:"Which factor contributed to the rise of protest religions?",options:["Rigid caste system","Industrialization","Colonial rule","Printing press"],answer:0},
{q:"Which factor contributed to the growth of protest religions?",options:["Difficult language of Vedas","Sea trade","Gunpowder","Railways"],answer:0},
{q:"The growth of which economy encouraged protest religions?",options:["Agricultural","Industrial","Digital","Marine"],answer:0},
{q:"Which is NOT a protest religion?",options:["Charvaka","Ajivika","Jainism","Vaishnavism"],answer:3},
{q:"Charvaka philosophy is based on?",options:["Materialism","Spiritualism","Idealism","Mysticism"],answer:0},

{q:"Founder of Charvaka sect?",options:["Charvaka","Mahavira","Buddha","Goshala"],answer:0},
{q:"Ajivika sect was founded by?",options:["Mahavira","Buddha","Goshala","Parshvanatha"],answer:2},
{q:"Ajivika philosophy was based on?",options:["Destiny","Karma","Bhakti","Yoga"],answer:0},
{q:"Who was a follower of Ajivika sect?",options:["Ashoka","Bindusara","Kanishka","Harsha"],answer:1},
{q:"Ashoka donated which caves to Ajivikas?",options:["Ajanta","Ellora","Barabar","Karla"],answer:2},

{q:"Barabar caves are located in?",options:["Bihar","UP","MP","Odisha"],answer:0},
{q:"Founder of Buddhism?",options:["Mahavira","Gautama Buddha","Parshvanatha","Goshala"],answer:1},
{q:"Original name of Buddha?",options:["Rahul","Siddhartha","Ananda","Devadatta"],answer:1},
{q:"Father of Gautama Buddha?",options:["Bimbisara","Suddhodana","Ajatashatru","Bindusara"],answer:1},
{q:"Mother of Gautama Buddha?",options:["Mahamaya","Yashodhara","Gautami","Trishala"],answer:0},

{q:"Buddha belonged to which clan?",options:["Maurya","Shakya","Lichchhavi","Malla"],answer:1},
{q:"Birthplace of Buddha?",options:["Kapilavastu","Lumbini","Rajgir","Vaishali"],answer:1},
{q:"Buddha was born in?",options:["563 BC","599 BC","540 BC","483 BC"],answer:0},
{q:"Foster mother of Buddha?",options:["Mahamaya","Yashodhara","Gautami","Amrapali"],answer:2},
{q:"Wife of Buddha?",options:["Yashodhara","Trishala","Priyadarshana","Mahamaya"],answer:0},

{q:"Son of Buddha?",options:["Rahul","Ananda","Jamali","Ajatashatru"],answer:0},
{q:"Horse of Buddha?",options:["Kanthaka","Uchchaihshravas","Chetak","Bucephalus"],answer:0},
{q:"Charioteer of Buddha?",options:["Channa","Ananda","Rahul","Devadatta"],answer:0},
{q:"Which was NOT among the four great sights?",options:["Old man","Sick man","Monk","King"],answer:3},
{q:"Great Renunciation is known as?",options:["Mahaparinirvana","Mahabhinishkramana","Nirvana","Sangha"],answer:1},

{q:"At what age did Buddha leave home?",options:["29","30","35","25"],answer:0},
{q:"Who met Buddha at Rajagriha?",options:["Ajatashatru","Bimbisara","Ashoka","Harsha"],answer:1},
{q:"At Vaishali Buddha met?",options:["Two teachers","Ashoka","Kanishka","Harsha"],answer:0},
{q:"Where did Buddha attain enlightenment?",options:["Sarnath","Rajgir","Gaya","Vaishali"],answer:2},
{q:"River near Bodh Gaya?",options:["Ganga","Yamuna","Nairanjana","Godavari"],answer:2},

{q:"Modern name of Nairanjana river?",options:["Falgu","Son","Kosi","Gandak"],answer:0},
{q:"Under which tree did Buddha attain enlightenment?",options:["Neem","Peepal","Mango","Sal"],answer:1},
{q:"Who offered Kheer to Buddha?",options:["Yashodhara","Sujata","Gautami","Amrapali"],answer:1},
{q:"How many days did Buddha meditate before enlightenment?",options:["49","40","30","21"],answer:0},
{q:"Where was the first sermon delivered?",options:["Rajgir","Sarnath","Vaishali","Pataliputra"],answer:1},

{q:"The first sermon is called?",options:["Dharma Chakra Pravartana","Mahaparinirvana","Nirvana","Tripitaka"],answer:0},
{q:"Where did Buddha attain Mahaparinirvana?",options:["Kushinagar","Rajgir","Sarnath","Vaishali"],answer:0},
{q:"Enemy of Buddha?",options:["Devadatta","Ananda","Rahul","Ashoka"],answer:0},
{q:"Language of Buddhist literature?",options:["Prakrit","Pali","Sanskrit","Tamil"],answer:1},
{q:"Meaning of Pitaka?",options:["Temple","Basket","Book","Prayer"],answer:1},

{q:"Vinaya Pitaka deals with?",options:["Rules of monks","Stories","Philosophy","Medicine"],answer:0},
{q:"Abhidhamma Pitaka deals with?",options:["History","Philosophy","Trade","Politics"],answer:1},
{q:"How many Jataka tales are there?",options:["547","108","18","12"],answer:0},
{q:"Who wrote Buddhacharita?",options:["Ashvaghosha","Nagarjuna","Kalidasa","Banabhatta"],answer:0},
{q:"Dipavamsa describes history of?",options:["India","China","Ceylon","Persia"],answer:2},

{q:"Mahavamsa describes history of?",options:["Ceylon","India","Nepal","Tibet"],answer:0},
{q:"Which ruler patronized Buddhism?",options:["Ashoka","Harsha","Kanishka","All of these"],answer:3},
{q:"Last dynasty to patronize Buddhism?",options:["Gupta","Pala","Maurya","Kushan"],answer:1},
{q:"The Three Jewels of Buddhism are?",options:["Buddha,Dharma,Sangha","Truth,Faith,Love","Karma,Dharma,Moksha","None"],answer:0},
{q:"Buddhist religion later divided into?",options:["Mahayana and Hinayana","Shaiva and Vaishnava","Digambara and Svetambara","Ajivika and Charvaka"],answer:0},

{q:"Who was the president of the First Buddhist Council?",options:["Mahakashyapa","Upali","Ananda","Moggaliputta Tissa"],answer:0},
{q:"First Buddhist Council was held at?",options:["Vaishali","Rajagriha","Pataliputra","Kundalvana"],answer:1},
{q:"First Buddhist Council was held in?",options:["483 BC","383 BC","250 BC","72 AD"],answer:0},
{q:"The king during the First Buddhist Council was?",options:["Bimbisara","Ajatashatru","Ashoka","Kanishka"],answer:1},
{q:"Which texts were compiled in the First Buddhist Council?",options:["Vinaya & Sutta Pitaka","Abhidhamma only","Jataka","Tripitaka"],answer:0},

{q:"Second Buddhist Council was held at?",options:["Rajgir","Vaishali","Pataliputra","Sarnath"],answer:1},
{q:"Second Buddhist Council was held in?",options:["383 BC","483 BC","250 BC","72 AD"],answer:0},
{q:"King during the Second Buddhist Council?",options:["Ajatashatru","Kalashoka","Ashoka","Kanishka"],answer:1},
{q:"President of Second Buddhist Council?",options:["Sabakami","Mahakashyapa","Tissa","Vasumitra"],answer:0},
{q:"Second Buddhist Council divided Buddhism into?",options:["Mahayana-Hinayana","Sthaviravadins-Mahasanghikas","Digambara-Svetambara","None"],answer:1},

{q:"Third Buddhist Council was held at?",options:["Rajgir","Vaishali","Pataliputra","Kundalvana"],answer:2},
{q:"Third Buddhist Council was held under?",options:["Ashoka","Ajatashatru","Kanishka","Harsha"],answer:0},
{q:"President of Third Buddhist Council?",options:["Vasumitra","Tissa","Mahakashyapa","Sabakami"],answer:1},
{q:"Major achievement of Third Buddhist Council?",options:["Compilation of Abhidhamma Pitaka","Division of Buddhism","First sermon","Jataka tales"],answer:0},
{q:"Fourth Buddhist Council was held at?",options:["Pataliputra","Rajgir","Kundalvana","Vaishali"],answer:2},

{q:"Fourth Buddhist Council was held under?",options:["Ashoka","Harsha","Kanishka","Bimbisara"],answer:2},
{q:"President of Fourth Buddhist Council?",options:["Vasumitra","Tissa","Ananda","Upali"],answer:0},
{q:"Vice-President of Fourth Buddhist Council?",options:["Ashvaghosha","Kalidasa","Nagarjuna","Banabhatta"],answer:0},
{q:"Fourth Buddhist Council took place in?",options:["1st Century AD","250 BC","483 BC","383 BC"],answer:0},
{q:"Mahayana Buddhism worships Buddha as?",options:["Teacher","God","King","Monk"],answer:1},

{q:"Hinayana Buddhism considers Buddha as?",options:["God","Prophet","Teacher","King"],answer:2},
{q:"The symbol of Buddha's birth is?",options:["Lotus","Horse","Tree","Stupa"],answer:0},
{q:"The symbol of Mahabhinishkramana is?",options:["Horse","Tree","Lotus","Wheel"],answer:0},
{q:"The symbol of Nirvana is?",options:["Bodhi Tree","Lotus","Horse","Bull"],answer:0},
{q:"The symbol of Mahaparinirvana is?",options:["Stupa","Horse","Wheel","Lion"],answer:0},

{q:"Founder of Jainism according to tradition?",options:["Mahavira","Parshvanatha","Rishabhanatha","Ajitanatha"],answer:2},
{q:"How many Tirthankaras are there in Jainism?",options:["12","18","24","27"],answer:2},
{q:"Meaning of Jina?",options:["Victory","Truth","Peace","Knowledge"],answer:0},
{q:"Followers of Jina are called?",options:["Buddhists","Ajivikas","Jains","Shaivas"],answer:2},
{q:"The earlier name of Jainism was?",options:["Nirgrantha","Sanatan","Vedic","Ajivika"],answer:0},

{q:"First Tirthankara of Jainism?",options:["Mahavira","Parshvanatha","Rishabhanatha","Neminatha"],answer:2},
{q:"Another name of Rishabhanatha?",options:["Adinatha","Ajitanatha","Parshvanatha","Mahavira"],answer:0},
{q:"Symbol of Rishabhanatha?",options:["Bull","Lion","Snake","Conch"],answer:0},
{q:"Birthday of Rishabhanatha is celebrated as?",options:["Mahavir Jayanti","Akshaya Tritiya","Buddha Purnima","Diwali"],answer:1},
{q:"Second Tirthankara was?",options:["Ajitanatha","Mahavira","Parshvanatha","Neminatha"],answer:0},

{q:"Symbol of Ajitanatha?",options:["Bull","White Elephant","Lion","Snake"],answer:1},
{q:"The only female Tirthankara was?",options:["Mallinatha","Parshvanatha","Mahavira","Ajitanatha"],answer:0},
{q:"Symbol of Mallinatha?",options:["Pot","Snake","Lion","Conch"],answer:0},
{q:"22nd Tirthankara was?",options:["Neminatha","Parshvanatha","Mahavira","Ajitanatha"],answer:0},
{q:"Symbol of Neminatha?",options:["Conch","Bull","Snake","Pot"],answer:0},

{q:"23rd Tirthankara was?",options:["Parshvanatha","Mahavira","Neminatha","Ajitanatha"],answer:0},
{q:"Birthplace of Parshvanatha?",options:["Vaishali","Varanasi","Rajgir","Pataliputra"],answer:1},
{q:"Father of Parshvanatha?",options:["Ashvasena","Siddhartha","Bimbisara","Chetaka"],answer:0},
{q:"Symbol of Parshvanatha?",options:["Lion","Bull","Snake","Conch"],answer:2},
{q:"Parshvanatha died at?",options:["Sammed Shikhar","Pawapuri","Rajgir","Vaishali"],answer:0},

{q:"How many vows were taught by Parshvanatha?",options:["3","4","5","8"],answer:1},
{q:"Which vow was added later by Mahavira?",options:["Satya","Aparigraha","Brahmacharya","Ahimsa"],answer:2},
{q:"The first Jain vow is?",options:["Satya","Ahimsa","Asteya","Aparigraha"],answer:1},
{q:"The second Jain vow is?",options:["Satya","Ahimsa","Aparigraha","Asteya"],answer:0},
{q:"The doctrine of eternal truth is called?",options:["Syadvada","Anekantavada","Triratna","Sallekhana"],answer:1},

// MCQ 101–150

{q:"24th and last Tirthankara was?",options:["Parshvanatha","Mahavira","Neminatha","Rishabhanatha"],answer:1},
{q:"Original name of Mahavira?",options:["Siddhartha","Vardhamana","Ajita","Nemi"],answer:1},
{q:"Symbol of Mahavira?",options:["Bull","Snake","Lion","Conch"],answer:2},
{q:"Father of Mahavira?",options:["Ashvasena","Siddhartha","Bimbisara","Chetaka"],answer:1},
{q:"Mother of Mahavira?",options:["Mahamaya","Trishala","Yashodhara","Gautami"],answer:1},

{q:"Mahavira belonged to which clan?",options:["Shakya","Lichchhavi","Malla","Maurya"],answer:1},
{q:"Birthplace of Mahavira?",options:["Vaishali","Kundagrama","Rajgir","Pawapuri"],answer:1},
{q:"Mahavira was born in?",options:["599 BC","563 BC","540 BC","527 BC"],answer:0},
{q:"Wife of Mahavira?",options:["Trishala","Yashoda","Amrapali","Sujata"],answer:1},
{q:"Daughter of Mahavira?",options:["Priyadarshana","Rahula","Gautami","Trishala"],answer:0},

{q:"Son-in-law of Mahavira?",options:["Jamali","Ananda","Rahula","Ajatashatru"],answer:0},
{q:"At what age did Mahavira renounce home?",options:["29","30","35","40"],answer:1},
{q:"Mahavira attained Kaivalya at?",options:["Pawapuri","Jrimbhikagrama","Rajgir","Vaishali"],answer:1},
{q:"At what age did Mahavira attain Kaivalya?",options:["30","42","48","72"],answer:1},
{q:"Under which tree did Mahavira attain Kaivalya?",options:["Sal","Peepal","Shala","Neem"],answer:2},

{q:"First follower of Mahavira?",options:["Jamali","Ananda","Rahula","Sudatta"],answer:0},
{q:"Mahavira attained Nirvana at?",options:["Rajgir","Pawapuri","Vaishali","Kushinagar"],answer:1},
{q:"Mahavira attained Nirvana in?",options:["527 BC","483 BC","599 BC","468 BC"],answer:0},
{q:"Capital of Malla kingdom?",options:["Rajgir","Pawapuri","Vaishali","Pataliputra"],answer:1},
{q:"Language of Jain literature?",options:["Pali","Prakrit","Sanskrit","Tamil"],answer:1},

{q:"Ardha-Magadhi was the language of?",options:["Buddhist texts","Jain texts","Vedas","Puranas"],answer:1},
{q:"Who wrote Jain Bhagavati Sutra?",options:["Bhadrabahu","Hemachandra","Marutunga","Kalhana"],answer:0},
{q:"Who wrote Jain Kalpa Sutra?",options:["Hemachandra","Bhadrabahu","Nagarjuna","Banabhatta"],answer:1},
{q:"Who wrote Parishishta Parvan?",options:["Bhadrabahu","Hemachandra","Marutunga","Ashvaghosha"],answer:1},
{q:"Who wrote Chandragupta Katha?",options:["Hemachandra","Kalidasa","Banabhatta","Bhadrabahu"],answer:0},

{q:"Who wrote Prabandha Chintamani?",options:["Hemachandra","Marutunga","Kalhana","Ashvaghosha"],answer:1},
{q:"Oldest Jain literature is called?",options:["Purva","Tripitaka","Agama","Veda"],answer:0},
{q:"How many Angas were compiled in Jainism?",options:["12","18","24","14"],answer:0},
{q:"How many Upangas were compiled?",options:["18","12","24","14"],answer:1},
{q:"First Jain Council was held at?",options:["Vaishali","Pataliputra","Rajgir","Vallabhi"],answer:1},

{q:"First Jain Council was held in?",options:["300 BC","483 BC","383 BC","512 AD"],answer:0},
{q:"King during First Jain Council?",options:["Ashoka","Chandragupta Maurya","Ajatashatru","Kanishka"],answer:1},
{q:"President of First Jain Council?",options:["Sthulabhadra","Bhadrabahu","Hemachandra","Jamali"],answer:0},
{q:"Major result of First Jain Council?",options:["Compilation of 12 Angas","Tripitaka","Jataka","Mahavamsa"],answer:0},
{q:"Jainism divided into which two sects?",options:["Mahayana-Hinayana","Digambara-Svetambara","Shaiva-Vaishnava","None"],answer:1},

{q:"Leader of Digambara sect?",options:["Bhadrabahu","Sthulabhadra","Hemachandra","Jamali"],answer:0},
{q:"Digambara sect became popular in?",options:["North India","South India","East India","West India"],answer:1},
{q:"Leader of Svetambara sect?",options:["Bhadrabahu","Sthulabhadra","Hemachandra","Mahavira"],answer:1},
{q:"Svetambara sect became popular in?",options:["South India","North India","Sri Lanka","Nepal"],answer:1},
{q:"Second Jain Council was held at?",options:["Pataliputra","Rajgir","Vallabhi","Vaishali"],answer:2},

{q:"Second Jain Council was held in?",options:["512 AD","300 BC","250 BC","72 AD"],answer:0},
{q:"King during Second Jain Council?",options:["Ashoka","Kanishka","Dhruvasena","Harsha"],answer:2},
{q:"President of Second Jain Council?",options:["Bhadrabahu","Devardhi Kshamashramana","Sthulabhadra","Hemachandra"],answer:1},
{q:"Major achievement of Second Jain Council?",options:["Compilation of 12 Upangas","Tripitaka","Jataka","Mahavamsa"],answer:0},
{q:"Bahubali statue is located at?",options:["Mount Abu","Shravanabelagola","Pawapuri","Rajgir"],answer:1},

{q:"Bahubali was the son of?",options:["Mahavira","Parshvanatha","Rishabhanatha","Neminatha"],answer:2},
{q:"Dilwara Jain Temples are located at?",options:["Udaipur","Mount Abu","Jodhpur","Ajmer"],answer:1},
{q:"Dilwara Temples are famous for?",options:["Granite work","Marble carvings","Paintings","Bronze statues"],answer:1},
{q:"Which dynasty built Dilwara Temples?",options:["Maurya","Solanki","Gupta","Pala"],answer:1},
{q:"Sallekhana means?",options:["Meditation","Death by fasting","Pilgrimage","Renunciation"],answer:1},

{q:"Anuvrata refers to?",options:["Common followers","Monks","Kings","Priests"],answer:0},
{q:"Mahavrata refers to?",options:["Ordinary followers","Monks and ascetics","Kings","Women"],answer:1},
{q:"Triratna means?",options:["Three Jewels","Three Vedas","Three Councils","Three Gods"],answer:0},
{q:"Which is NOT part of Triratna?",options:["Right Faith","Right Knowledge","Right Conduct","Right Sacrifice"],answer:3},
{q:"Syadvada is associated with?",options:["Metaphysics","Economics","Politics","Medicine"],answer:0},
{q:"Anekantavada means?",options:["Eternal truth","Non-violence","Meditation","Liberation"],answer:0}
]
},
{
id:"advent_europeans",
name:"Advent of Europeans",
icon:"🚢",
color:"#3498DB",
desc:"Portuguese, Dutch, English & French in India",
questions:[

// 1-20 Vasco da Gama & Portuguese Arrival

{q:"Who was the first European to reach India by sea route?",options:["Columbus","Vasco da Gama","Cabral","Almeida"],answer:1},
{q:"Vasco da Gama reached India in?",options:["1492","1498","1500","1505"],answer:1},
{q:"Vasco da Gama landed at?",options:["Goa","Calicut","Cochin","Surat"],answer:1},
{q:"Present name of Calicut is?",options:["Kochi","Kozhikode","Mangalore","Kannur"],answer:1},
{q:"Ruler of Calicut when Vasco da Gama arrived?",options:["Shah Jahan","Zamorin","Krishnadevaraya","Akbar"],answer:1},
{q:"Vasco da Gama started from?",options:["London","Paris","Lisbon","Madrid"],answer:2},
{q:"Cape of Good Hope is located in?",options:["Africa","Asia","Europe","America"],answer:0},
{q:"Vasco da Gama reached India through which sea route?",options:["Pacific","Arctic","Cape Route","Suez Canal"],answer:2},
{q:"Who welcomed Vasco da Gama in Calicut?",options:["Akbar","Zamorin","Albuquerque","Jahangir"],answer:1},
{q:"Vasco da Gama returned to Portugal after?",options:["Monsoon ended","War","Treaty","Pilgrimage"],answer:0},

{q:"Who came to India in 1500?",options:["Cabral","Almeida","Hawkins","Roe"],answer:0},
{q:"Pedro Cabral discovered?",options:["America","Brazil","Australia","Japan"],answer:1},
{q:"Cabral established first Portuguese factory at?",options:["Goa","Calicut","Surat","Madras"],answer:0},
{q:"Arab traders burnt the Portuguese factory at?",options:["Goa","Calicut","Bombay","Hooghly"],answer:1},
{q:"Vasco da Gama revisited India in?",options:["1498","1501","1502","1510"],answer:2},
{q:"Which spice gave huge profit to Vasco da Gama?",options:["Tea","Coffee","Black Pepper","Cotton"],answer:2},
{q:"Another profitable spice traded by Vasco da Gama?",options:["Cardamom","Cinnamon","Clove","Nutmeg"],answer:1},
{q:"Vasco da Gama earned nearly how many times profit?",options:["10","20","40","60"],answer:3},
{q:"Portuguese were the first Europeans to establish trade with?",options:["China","India","Japan","Persia"],answer:1},
{q:"Main aim of Portuguese arrival was?",options:["Tourism","Spice Trade","Education","Religion only"],answer:1},

// 21-40 Portuguese Governors

{q:"First Portuguese Governor in India?",options:["Albuquerque","Almeida","Cabral","Nino da Cunha"],answer:1},
{q:"Francisco de Almeida served during?",options:["1505-1509","1498-1500","1510-1515","1529-1538"],answer:0},
{q:"Almeida introduced which policy?",options:["Forward Policy","Blue Water Policy","Divide Rule","Subsidiary Alliance"],answer:1},
{q:"Blue Water Policy emphasized?",options:["Sea Power","Land Revenue","Education","Army"],answer:0},
{q:"Almeida defeated combined Arab-Egypt-Turkey force in?",options:["1509","1498","1510","1526"],answer:0},
{q:"Who succeeded Almeida?",options:["Roe","Albuquerque","Hawkins","Clive"],answer:1},
{q:"Alfonso de Albuquerque captured Goa in?",options:["1498","1505","1510","1526"],answer:2},
{q:"Goa was captured from?",options:["Bahmani","Bijapur","Mughal","Vijayanagara"],answer:1},
{q:"Albuquerque is known as?",options:["Founder of Portuguese Empire in India","Founder of Mughal Empire","Founder of Dutch Empire","Founder of French Empire"],answer:0},
{q:"Albuquerque encouraged Portuguese to marry?",options:["European women","Indian women","Arab women","Persian women"],answer:1},

{q:"Who stopped Sati in Goa?",options:["Almeida","Albuquerque","Hawkins","Roe"],answer:1},
{q:"Who made Goa the headquarters of Portuguese India?",options:["Almeida","Nino da Cunha","Roe","Cabral"],answer:1},
{q:"Vasco da Gama died at?",options:["Calicut","Cochin","Goa","Bombay"],answer:1},
{q:"Portuguese established a trade center at?",options:["Madras","Hooghly","Surat","Bombay"],answer:1},
{q:"Portuguese introduced which crop?",options:["Potato","Rice","Wheat","Barley"],answer:0},
{q:"Portuguese introduced?",options:["Tea","Coffee","Tobacco","Jute"],answer:2},
{q:"Portuguese introduced?",options:["Chilli","Cotton","Sugarcane","Millet"],answer:0},
{q:"First printing press in India was set up by?",options:["Dutch","Portuguese","English","French"],answer:1},
{q:"Portuguese spread which religion?",options:["Islam","Christianity","Buddhism","Jainism"],answer:1},
{q:"Famous missionary sent by Portuguese?",options:["St. Francis Xavier","Thomas Roe","Hawkins","Bernier"],answer:0},

// 41-60 Portuguese Decline & Dutch

{q:"Cartaz system means?",options:["Tax collection on sea trade","Land tax","Income tax","Road tax"],answer:0},
{q:"A major reason for Portuguese decline?",options:["Cartaz system","Education","Agriculture","Industry"],answer:0},
{q:"Bombay came to English as?",options:["Gift","Dowry","War Prize","Purchase"],answer:1},
{q:"Bombay was given in dowry in?",options:["1498","1510","1600","1661"],answer:3},
{q:"Portuguese princess married?",options:["James I","Charles II","Akbar","Jahangir"],answer:1},
{q:"Actual name of Dutch homeland?",options:["Belgium","Netherlands","Norway","Denmark"],answer:0},
{q:"Dutch East India Company was founded in?",options:["1600","1602","1664","1498"],answer:1},
{q:"Dutch East India Company was the first?",options:["Private Company","Joint Stock Company","Bank","University"],answer:1},
{q:"Initially Netherlands was under?",options:["France","Portugal","Spain","England"],answer:2},
{q:"Who stole Portuguese navigation maps?",options:["Hudson","Huygen","Roe","Cabral"],answer:1},

{q:"Dutch mainly traded in?",options:["Cotton","Tea","Coffee","Iron"],answer:0},
{q:"Dutch headquarters in India?",options:["Fort William","Fort Geldria","Fort St George","Fort William"],answer:1},
{q:"Dutch fort was established at?",options:["Pulicat","Bombay","Madras","Surat"],answer:0},
{q:"Pulicat is in?",options:["Kerala","Tamil Nadu","Punjab","Bengal"],answer:1},
{q:"Dutch established settlement at?",options:["Masulipatnam","Delhi","Agra","Lahore"],answer:0},
{q:"Dutch were mainly interested in?",options:["Territory","Trade","Religion","Education"],answer:1},
{q:"Battle of Colachel took place in?",options:["1641","1741","1757","1764"],answer:1},
{q:"Dutch were defeated by?",options:["Shivaji","Marthanda Varma","Akbar","Clive"],answer:1},
{q:"Battle of Bidara was fought between?",options:["Dutch-English","Dutch-Portuguese","French-English","French-Dutch"],answer:0},
{q:"Dutch decline started after defeat at?",options:["Panipat","Colachel","Plassey","Buxar"],answer:1},

// 61-80 English East India Company

{q:"English East India Company was established in?",options:["1498","1600","1602","1664"],answer:1},
{q:"Which Queen granted permission?",options:["Victoria","Elizabeth I","Mary","Anne"],answer:1},
{q:"Company was managed by?",options:["Board of Governors","Court of Directors","Parliament","Governor General"],answer:1},
{q:"How many directors were elected?",options:["12","18","24","30"],answer:2},
{q:"First English captain sent to Mughal court?",options:["Roe","Hawkins","Clive","Cook"],answer:1},
{q:"Hawkins reached Jahangir's court in?",options:["1608","1600","1615","1661"],answer:0},
{q:"Jahangir gave Hawkins title of?",options:["Khan","English Khan","Nawab","Sir"],answer:1},
{q:"Hawkins first sought permission for trade at?",options:["Surat","Bombay","Madras","Calcutta"],answer:0},
{q:"Who came to India in 1615?",options:["Roe","Hawkins","Clive","Cabral"],answer:0},
{q:"Thomas Roe came during reign of?",options:["Akbar","Jahangir","Aurangzeb","Shah Jahan"],answer:1},

{q:"Thomas Roe obtained permission to?",options:["Conquer India","Set up factories","Collect taxes","Rule Bengal"],answer:1},
{q:"First English factory was established at?",options:["Surat","Bombay","Madras","Calcutta"],answer:0},
{q:"Bombay Presidency was established in?",options:["1661","1690","1600","1757"],answer:0},
{q:"Madras Presidency originated from?",options:["Madraspatnam","Delhi","Bombay","Goa"],answer:0},
{q:"Who purchased land for Madras?",options:["Francis Day","Clive","Roe","Hawkins"],answer:0},
{q:"Fort established at Madras?",options:["Fort William","Fort St George","Fort Geldria","Red Fort"],answer:1},
{q:"Madras was renamed from?",options:["Madraspatnam","Pulicat","Goa","Bombay"],answer:0},
{q:"Bengal Presidency was established in?",options:["1691","1661","1757","1600"],answer:0},
{q:"Who purchased three villages in Bengal?",options:["Job Charnock","Clive","Roe","Hastings"],answer:0},
{q:"Which village was among the three purchased?",options:["Sutanuti","Agra","Delhi","Madurai"],answer:0},

// 81-100 Presidencies & Mixed

{q:"Another village purchased by Job Charnock?",options:["Govindapur","Jaipur","Kanpur","Patna"],answer:0},
{q:"Third village purchased by Job Charnock?",options:["Kalikata","Lucknow","Delhi","Pune"],answer:0},
{q:"Fort William was established in?",options:["Madras","Bombay","Calcutta","Goa"],answer:2},
{q:"European power first to reach India by sea?",options:["French","Dutch","Portuguese","English"],answer:2},
{q:"European power first to establish factory in India?",options:["Dutch","Portuguese","English","French"],answer:0},
{q:"European power first to establish printing press?",options:["English","French","Portuguese","Dutch"],answer:2},
{q:"Which European power introduced potato?",options:["Dutch","Portuguese","French","English"],answer:0},
{q:"Which European power introduced tobacco?",options:["Portuguese","Dutch","English","French"],answer:0},
{q:"Who captured Goa?",options:["Almeida","Albuquerque","Roe","Cabral"],answer:1},
{q:"Capital of Portuguese India?",options:["Goa","Bombay","Madras","Surat"],answer:0},

{q:"Who visited Jahangir's court first?",options:["Roe","Hawkins","Clive","Dupleix"],answer:1},
{q:"Who secured trade privileges from Jahangir?",options:["Hawkins","Roe","Clive","Cornwallis"],answer:1},
{q:"English East India Company received charter in?",options:["1600","1498","1602","1664"],answer:0},
{q:"Dutch East India Company received charter in?",options:["1600","1602","1664","1690"],answer:1},
{q:"Main English trading center before Bombay?",options:["Surat","Delhi","Madras","Agra"],answer:0},
{q:"Fort St George is located in?",options:["Bombay","Madras","Goa","Surat"],answer:1},
{q:"Fort William is located in?",options:["Madras","Bombay","Calcutta","Goa"],answer:2},
{q:"Fort Geldria is associated with?",options:["Portuguese","Dutch","French","English"],answer:1},
{q:"Which European power declined after Battle of Colachel?",options:["French","Dutch","English","Portuguese"],answer:1},
{q:"Which European powers arrived before English?",options:["Portuguese & Dutch","French only","Dutch only","French & English"],answer:0}
]
},
{
id:"land_revenue_system",
name:"Land Revenue System",
icon:"🌾",
color:"#27AE60",
desc:"Permanent, Ryotwari & Mahalwari Settlements",
questions:[

{q:"The Land Revenue System was introduced by whom?",options:["Mughals","East India Company","French","Portuguese"],answer:1},
{q:"Allahabad Treaty was signed in?",options:["1757","1764","1765","1773"],answer:2},
{q:"Allahabad Treaty was signed between East India Company and?",options:["Akbar II","Bahadur Shah","Shah Alam II","Aurangzeb"],answer:2},
{q:"Through the Allahabad Treaty, EIC got the right to collect revenue from?",options:["Punjab","Bengal, Bihar and Odisha","Madras","Bombay"],answer:1},
{q:"The right to collect revenue is called?",options:["Diwani","Jagirdari","Mansabdari","Ryotwari"],answer:0},
{q:"Which Governor faced the Great Bengal Famine?",options:["Cornwallis","Warren Hastings","Clive","Dalhousie"],answer:1},
{q:"The Great Bengal Famine occurred in?",options:["1757","1765","1770","1793"],answer:2},
{q:"The Bengal Famine is mentioned in which novel?",options:["Durgeshnandini","Anandamath","Kapalkundala","Devi Chaudhurani"],answer:1},
{q:"Who wrote Anandamath?",options:["Rabindranath Tagore","Bankim Chandra","Sarat Chandra","Michael Madhusudan"],answer:1},
{q:"After the famine, EIC sent whom to reform revenue administration?",options:["Clive","Warren Hastings","Curzon","Ripon"],answer:1},

{q:"Warren Hastings introduced which settlement first?",options:["Permanent Settlement","5-Year Settlement","Ryotwari","Mahalwari"],answer:1},
{q:"The 5-Year Settlement started in?",options:["1765","1772","1793","1822"],answer:1},
{q:"The 5-Year Settlement is also known as?",options:["Permanent Settlement","Ijardari System","Ryotwari","Mahalwari"],answer:1},
{q:"Under the 5-Year Settlement, revenue collectors were called?",options:["Ryots","Ijardars","Patels","Amins"],answer:1},
{q:"The 5-Year Settlement failed due to?",options:["High rainfall","No responsibility of Zamindars","War","Low production"],answer:1},
{q:"After failure of 5-Year Settlement, Hastings introduced?",options:["Permanent Settlement","1-Year Settlement","Ryotwari","Mahalwari"],answer:1},
{q:"The 1-Year Settlement was introduced in?",options:["1777-78","1793","1820","1822"],answer:0},
{q:"The 1-Year Settlement also failed because?",options:["Same reasons as before","Flood","War","Famine"],answer:0},
{q:"Who succeeded Warren Hastings?",options:["Cornwallis","Clive","Wellesley","Curzon"],answer:0},
{q:"Cornwallis is associated with which settlement?",options:["Ryotwari","Permanent Settlement","Mahalwari","Ijardari"],answer:1},

{q:"Permanent Settlement was introduced in?",options:["1772","1785","1793","1822"],answer:2},
{q:"Permanent Settlement is also called?",options:["Zamindari Settlement","Ryotwari Settlement","Village Settlement","Ijardari"],answer:0},
{q:"Permanent Settlement was introduced by?",options:["Warren Hastings","Cornwallis","Munro","Bentinck"],answer:1},
{q:"Permanent Settlement was first implemented in?",options:["Punjab","Bombay","Bengal","Madras"],answer:2},
{q:"Permanent Settlement covered Bengal, Bihar and?",options:["Punjab","Odisha","Assam","Delhi"],answer:1},
{q:"Under Permanent Settlement, revenue responsibility was given to?",options:["Farmers","Village Head","Zamindars","Nawabs"],answer:2},
{q:"Permanent Settlement initially fixed revenue for?",options:["5 years","10 years","20 years","Permanent"],answer:1},
{q:"The temporary phase before Permanent Settlement lasted?",options:["5 years","10 years","20 years","15 years"],answer:1},
{q:"The 10-Year Settlement ran from?",options:["1780-89","1789-98","1793-1803","1772-77"],answer:1},
{q:"A Zamindar became permanent owner if revenue was paid regularly for?",options:["5 years","10 years","15 years","20 years"],answer:1},

{q:"Under Permanent Settlement, revenue had to be paid before?",options:["Midnight","Sunrise","Sunset","Noon"],answer:2},
{q:"Which date is associated with revenue payment under Permanent Settlement?",options:["31 December","1 January","15 August","26 January"],answer:0},
{q:"Who benefited most under Permanent Settlement?",options:["Ryots","Zamindars","Laborers","Artisans"],answer:1},
{q:"Who suffered most under Permanent Settlement?",options:["Zamindars","Ryots","British","Merchants"],answer:1},
{q:"Permanent Settlement was mainly introduced in which presidency?",options:["Bengal Presidency","Bombay Presidency","Madras Presidency","Punjab"],answer:0},
{q:"Ryot means?",options:["Zamindar","Farmer","Trader","Soldier"],answer:1},
{q:"Ryotwari Settlement was introduced in?",options:["Bengal","Bombay and Madras","Punjab","Odisha"],answer:1},
{q:"Ryotwari Settlement was introduced around?",options:["1820","1793","1765","1857"],answer:0},
{q:"Who introduced Ryotwari Settlement?",options:["Cornwallis","Thomas Munro","Curzon","Dalhousie"],answer:1},
{q:"Another officer associated with Ryotwari Settlement?",options:["Reed","Ripon","Clive","Hastings"],answer:0},

{q:"Under Ryotwari Settlement, revenue was collected directly from?",options:["Zamindars","Farmers","Village Head","Nawab"],answer:1},
{q:"Ryotwari Settlement removed the role of?",options:["Farmers","Zamindars","British Officers","Village Heads"],answer:1},
{q:"Ryotwari Settlement was mainly popular in?",options:["South India","North India","East India","West India"],answer:0},
{q:"Madras Presidency followed which settlement?",options:["Permanent","Ryotwari","Mahalwari","Ijardari"],answer:1},
{q:"Bombay Presidency mainly followed?",options:["Permanent","Ryotwari","Mahalwari","Zamindari"],answer:1},
{q:"Mahal means?",options:["Farmer","Village/Area","King","Landlord"],answer:1},
{q:"Mahalwari Settlement was introduced in?",options:["1793","1822","1857","1765"],answer:1},
{q:"Who introduced Mahalwari Settlement?",options:["Cornwallis","Munro","Holt Mackenzie","Dalhousie"],answer:2},
{q:"Another officer associated with Mahalwari Settlement?",options:["R.M. Bird","Clive","Curzon","Ripon"],answer:0},
{q:"Mahalwari Settlement was mainly introduced in?",options:["Punjab & North-West Provinces","Madras","Bombay","Bengal"],answer:0},

{q:"Mahalwari Settlement was common in Punjab, Agra and?",options:["Haryana Region","Bengal","Odisha","Madras"],answer:0},
{q:"Under Mahalwari Settlement, revenue was collected by?",options:["Village Head","Zamindar","Nawab","Governor"],answer:0},
{q:"Mahalwari Settlement was a mixture of?",options:["Permanent & Ryotwari","Permanent & Ijardari","Ryotwari & Ijardari","Permanent & Mughal"],answer:0},
{q:"Responsibility under Mahalwari Settlement was?",options:["Individual","Collective","No responsibility","Military"],answer:1},
{q:"If one farmer failed, who paid under Mahalwari?",options:["British","Only Zamindar","Entire Village","Nawab"],answer:2},
{q:"Which settlement had collective responsibility?",options:["Permanent","Ryotwari","Mahalwari","Ijardari"],answer:2},
{q:"Approximate distribution of Ryotwari in India was?",options:["20%","31%","51%","70%"],answer:2},
{q:"Approximate distribution of Permanent Settlement was?",options:["19%","40%","60%","80%"],answer:0},
{q:"Approximate distribution of Mahalwari Settlement was?",options:["10%","20%","40%","60%"],answer:1},
{q:"Which settlement covered the largest area?",options:["Permanent","Mahalwari","Ryotwari","Ijardari"],answer:2},

{q:"Permanent Settlement is popularly known as?",options:["Village System","Zamindari System","Farmer System","Mahal System"],answer:1},
{q:"Ryotwari Settlement is popularly known as?",options:["Farmer Settlement","Village Settlement","Zamindari Settlement","Jagirdari"],answer:0},
{q:"Mahalwari Settlement is popularly known as?",options:["Village/Area Settlement","Farmer Settlement","Zamindari Settlement","Military Settlement"],answer:0},
{q:"Who fixed revenue permanently?",options:["Munro","Cornwallis","Hastings","Bird"],answer:1},
{q:"Who established direct relation between government and cultivator?",options:["Cornwallis","Thomas Munro","Clive","Hastings"],answer:1},
{q:"Which settlement strengthened Zamindars?",options:["Permanent Settlement","Ryotwari","Mahalwari","Ijardari"],answer:0},
{q:"Which settlement bypassed Zamindars?",options:["Permanent","Ryotwari","Mahalwari","None"],answer:1},
{q:"Which settlement was introduced last?",options:["Permanent","Ryotwari","Mahalwari","Ijardari"],answer:2},
{q:"The Land Revenue System is also called?",options:["Economic Exploitation","Military Reform","Judicial Reform","Educational Reform"],answer:0},
{q:"The main objective of British land revenue policies was?",options:["Farmer Welfare","Revenue Collection","Industrial Growth","Religious Reform"],answer:1}

]
},
{
id:"tribal_movements",
name:"Tribal Movements",
icon:"🏹",
color:"#8E44AD",
desc:"Tribal and Peasant Revolts against British Rule",
questions:[

{q:"The Santhal Revolt took place in?",options:["1857","1855","1831","1899"],answer:1},
{q:"The Santhal Revolt started in?",options:["Rajmahal","Chotanagpur","Jangalmahal","Assam"],answer:0},
{q:"Who was one of the leaders of the Santhal Revolt?",options:["Birsa Munda","Tirut Singh","Sidhu","Budhu Bhagat"],answer:2},
{q:"The Santhal Revolt was mainly against?",options:["Missionaries","Moneylenders and Zamindars","Mughals","French"],answer:1},

{q:"The Munda Revolt took place in?",options:["1899","1855","1828","1846"],answer:0},
{q:"Who led the Munda Revolt?",options:["Chittur Singh","Birsa Munda","Karim Shah","Velu Tampi"],answer:1},
{q:"Birsa Munda was popularly known as?",options:["Lokmanya","Dharti Aba","Sher-e-Punjab","Netaji"],answer:1},
{q:"Birsa Munda was born in?",options:["1875","1855","1899","1828"],answer:0},

{q:"The Chuar Revolt occurred during?",options:["1763-1800","1798-1799","1825-1850","1819"],answer:1},
{q:"The literal meaning of 'Chuar' is?",options:["Warrior","Pig","Farmer","Hunter"],answer:1},
{q:"The Chuar Revolt took place in?",options:["Rajmahal","Odisha","Jangalmahal","Assam"],answer:2},
{q:"Who was appointed as Zamindar by the British in Jangalmahal?",options:["Durjan Singh","Sidhu","Karim Shah","Tirut Singh"],answer:0},

{q:"The Kondh Revolt took place in?",options:["1828","1846","1899","1819"],answer:1},
{q:"The Kondh tribe belonged mainly to?",options:["Odisha","Punjab","Bengal","Assam"],answer:0},
{q:"The Kondhs revolted under the leadership of?",options:["Birsa Munda","Budhu Bhagat","Raja Chakra Bisoi","Velu Tampi"],answer:2},
{q:"The British opposed which Kondh practice?",options:["Kuthi System","Mariya System","Paikan Land","Ulgulan"],answer:1},

{q:"The Sanyasi Revolt lasted from?",options:["1763-1800","1798-1799","1831-1832","1825-1850"],answer:0},
{q:"The Sanyasi Revolt was inspired by exploitation of?",options:["French","Mughals","East India Company","Marathas"],answer:2},
{q:"Who was a Hindu leader of the Sanyasi Revolt?",options:["Bhawani Pathak","Tirut Singh","Karim Shah","Chittur Singh"],answer:0},
{q:"Which novel is associated with the Sanyasi Revolt?",options:["Gitanjali","Anandamath","Durgeshnandini","Kapalkundala"],answer:1},

{q:"The Khasi Revolt took place in?",options:["1831","1828","1823","1855"],answer:2},
{q:"The Khasi tribe belonged to?",options:["Odisha","Meghalaya","Jharkhand","Bihar"],answer:1},
{q:"Who led the Khasi Revolt?",options:["Sidhu","Birsa Munda","Tirut Singh","Budhu Bhagat"],answer:2},
{q:"The Khasi Revolt began due to construction of a?",options:["Canal","Railway","Fort","Road"],answer:3},

{q:"The Ahom Revolt took place in?",options:["1828","1846","1899","1819"],answer:0},
{q:"The Ahom region was located in present-day?",options:["Punjab","Assam","Odisha","Tamil Nadu"],answer:1},
{q:"The First Anglo-Burmese War started in?",options:["1828","1824","1855","1819"],answer:1},
{q:"Who led the Ahom Revolt?",options:["Gomdhar Konwar","Karim Shah","Tirut Singh","Durjan Singh"],answer:0},

{q:"The Pagal Panthi Movement lasted from?",options:["1825-1850","1763-1800","1798-1799","1831-1832"],answer:0},
{q:"Who founded the Pagal Panthi Movement?",options:["Tipu Shah","Karim Shah","Birsa Munda","Budhu Bhagat"],answer:1},
{q:"Who led the movement after Karim Shah?",options:["Sidhu","Tipu Shah","Raja Chakra Bisoi","Velu Tampi"],answer:1},
{q:"The Pagal Panthis were active in present-day?",options:["Bangladesh region","Punjab","Gujarat","Kerala"],answer:0},

{q:"The Kol Revolt took place in?",options:["1831-1832","1855","1899","1828"],answer:0},
{q:"The Kol Revolt occurred in?",options:["Rajmahal","Chotanagpur","Assam","Travancore"],answer:1},
{q:"Who was one of the leaders of the Kol Revolt?",options:["Budhu Bhagat","Karim Shah","Tirut Singh","Velu Tampi"],answer:0},
{q:"The term 'Diku' referred to?",options:["British officer","Outsider exploiter","Tribal chief","Farmer"],answer:1},

{q:"The Bhil Revolt started in?",options:["1819","1828","1846","1855"],answer:0},
{q:"The Bhils mainly lived in?",options:["Eastern Ghats","Western Ghats","Rajmahal Hills","Khasi Hills"],answer:1},
{q:"Who was a leader of the Bhil Revolt?",options:["Hiriya","Birsa Munda","Sidhu","Karim Shah"],answer:0},
{q:"The Bhils depended on?",options:["Fishing","Agriculture and loot","Trade","Mining"],answer:1},

{q:"The Waghera Revolt took place during?",options:["1818-1820","1831-32","1855","1899"],answer:0},
{q:"The Waghera Revolt was connected with the aftermath of?",options:["Anglo-Sikh War","Anglo-Burmese War","3rd Anglo-Maratha War","1857 Revolt"],answer:2},
{q:"Who led the Waghera Revolt according to your notes?",options:["Tirut Singh","Okha Mandal","Budhu Bhagat","Durjan Singh"],answer:1},
{q:"The Wagheras revolted against increase in?",options:["Trade tax","Salt tax","Land revenue","Road tax"],answer:2},

{q:"The Ramosi Movement began in?",options:["1819","1822","1828","1846"],answer:1},
{q:"Who led the Ramosi Movement?",options:["Chittur Singh","Karim Shah","Velu Tampi","Gomdhar Konwar"],answer:0},
{q:"The Ramosis were also known as?",options:["Paikas","Siladars","Sanyasis","Dikus"],answer:1},
{q:"The Ramosi Movement was related to loss of?",options:["Trade rights","Military employment","Forest rights","Religious freedom"],answer:1},

{q:"The Poligar Movement took place in?",options:["Andhra Pradesh","Kerala","Tamil Nadu","Odisha"],answer:2},
{q:"The Poligar Movement lasted from?",options:["1795-1805","1819-1820","1825-1850","1831-1832"],answer:0},
{q:"Who led the Poligar Movement?",options:["Kotta Boman Nayak","Velu Tampi","Birsa Munda","Sidhu"],answer:0},
{q:"The Poligar Movement belonged to which region?",options:["South India","Eastern India","Western India","North India"],answer:0},

{q:"The Velu Tampi Revolt took place in?",options:["1822","1805","1855","1899"],answer:1},
{q:"Velu Tampi Revolt occurred in?",options:["Travancore","Rajmahal","Jangalmahal","Assam"],answer:0},
{q:"Who led the Velu Tampi Revolt?",options:["Tipu Shah","Velu Tampi","Tirut Singh","Budhu Bhagat"],answer:1},
{q:"Travancore is located in present-day?",options:["Tamil Nadu","Andhra Pradesh","Kerala","Odisha"],answer:2},

{q:"The Rampa Revolt took place in?",options:["1922","1899","1855","1828"],answer:0},
{q:"The Rampa Revolt occurred in?",options:["Tamil Nadu","Andhra Pradesh","Assam","Odisha"],answer:1},
{q:"Who was the famous leader of the Rampa Revolt?",options:["Alluri Sitarama Raju","Birsa Munda","Karim Shah","Sidhu"],answer:0},
{q:"The Rampa Revolt belongs to which region?",options:["Eastern India","South India","Western India","North India"],answer:1},

{q:"Which revolt is also known as Ulgulan?",options:["Santhal Revolt","Kol Revolt","Munda Revolt","Khasi Revolt"],answer:2},
{q:"Which revolt was violently suppressed by the British?",options:["Santhal Revolt","Rampa Revolt","Khasi Revolt","All of these"],answer:3},
{q:"Which tribal movement was against forced conversion to Christianity?",options:["Munda Revolt","Sanyasi Revolt","Ramosi Movement","Waghera Revolt"],answer:0},
{q:"Which revolt involved nearly 10,000 Santhals according to notes?",options:["Kol Revolt","Santhal Revolt","Khasi Revolt","Bhil Revolt"],answer:1},



{q:"The Santhal Revolt was also known as?",options:["Hul","Ulgulan","Pagal Panthi","Moplah"],answer:0},
{q:"The Santhal Revolt was primarily against?",options:["British army","Moneylenders","French traders","Portuguese"],answer:1},
{q:"Which tree was considered sacred by the Santhals?",options:["Neem","Sal","Peepal","Banyan"],answer:1},
{q:"Bhognadih was associated with which revolt?",options:["Kol Revolt","Khasi Revolt","Santhal Revolt","Ahom Revolt"],answer:2},

{q:"Who among the following was NOT a Santhal leader?",options:["Sidhu","Kanhu","Chand","Birsa"],answer:3},
{q:"The British created a separate district after which revolt?",options:["Khasi Revolt","Santhal Revolt","Bhil Revolt","Ramosi Revolt"],answer:1},
{q:"The Munda Revolt took place in which region?",options:["Rajmahal","Chotanagpur","Travancore","Jangalmahal"],answer:1},
{q:"Birsa Munda died in?",options:["1898","1900","1905","1899"],answer:1},

{q:"The slogan of Birsa Munda's movement was directed against?",options:["Forest laws","Missionaries and Zamindars","French traders","Marathas"],answer:1},
{q:"The traditional Munda land system was called?",options:["Khuntkatti","Ryotwari","Mahalwari","Paikan"],answer:0},
{q:"The British replaced the Khuntkatti system with?",options:["Jagirdari","Zamindari","Mansabdari","Iqta"],answer:1},
{q:"Ulgulan literally means?",options:["Freedom","Great Tumult","Forest","Justice"],answer:1},

{q:"Which revolt occurred in Jangalmahal?",options:["Santhal","Kol","Chuar","Khasi"],answer:2},
{q:"The Chuar Revolt was triggered by inability to pay tax under?",options:["Doctrine of Lapse","Sunset Law","Subsidiary Alliance","Regulating Act"],answer:1},
{q:"Durjan Singh belonged to which revolt?",options:["Chuar Revolt","Kol Revolt","Khasi Revolt","Bhil Revolt"],answer:0},
{q:"The Chuar people were mainly from?",options:["Punjab","Jangalmahal","Travancore","Assam"],answer:1},

{q:"The Kondhs practiced which ritual according to notes?",options:["Mariya","Ulgulan","Hul","Dhamma"],answer:0},
{q:"The Kondh Revolt was led by?",options:["Budhu Bhagat","Raja Chakra Bisoi","Gomdhar Konwar","Karim Shah"],answer:1},
{q:"The Kondhs were mainly located in?",options:["Odisha","Meghalaya","Bihar","Tamil Nadu"],answer:0},
{q:"Which policy angered the Kondhs?",options:["Road construction","Stopping Mariya practice","Salt tax","Railway tax"],answer:1},

{q:"The Sanyasi Revolt began after which event?",options:["1770 Famine","1857 Revolt","Permanent Settlement","Partition of Bengal"],answer:0},
{q:"The Sanyasis depended on?",options:["Trade","Agriculture","Alms","Industry"],answer:2},
{q:"Which Muslim leader was associated with the Sanyasi Revolt?",options:["Karim Shah","Majnu Shah","Tirut Singh","Birsa"],answer:1},
{q:"Debi Chaudhurani was linked with?",options:["Khasi Revolt","Sanyasi Revolt","Kol Revolt","Ahom Revolt"],answer:1},

{q:"The Khasi Revolt was led by?",options:["Tirut Singh","Sidhu","Chittur Singh","Budhu Bhagat"],answer:0},
{q:"The Khasi Hills are located in?",options:["Jharkhand","Meghalaya","Odisha","Assam"],answer:1},
{q:"The British wanted to connect Sylhet with?",options:["Punjab","Brahmaputra Valley","Bombay","Madras"],answer:1},
{q:"Which project caused Khasi resentment?",options:["Railway","Road construction","Dam building","Mining"],answer:1},

{q:"The Ahom Revolt took place after?",options:["1st Anglo-Maratha War","1st Anglo-Burmese War","1857 Revolt","2nd Anglo-Sikh War"],answer:1},
{q:"Who led the Ahom Revolt?",options:["Budhu Bhagat","Gomdhar Konwar","Karim Shah","Sidhu"],answer:1},
{q:"The Ahom kingdom was located in?",options:["Assam","Punjab","Bihar","Kerala"],answer:0},
{q:"The British refused to restore power to?",options:["Tirut Singh","Gomdhar Konwar","Durjan Singh","Majnu Shah"],answer:1},

{q:"Karim Shah was associated with?",options:["Pagal Panthi","Kol Revolt","Munda Revolt","Khasi Revolt"],answer:0},
{q:"Tipu Shah belonged to?",options:["Khasi Revolt","Pagal Panthi Movement","Ahom Revolt","Santhal Revolt"],answer:1},
{q:"The Pagal Panthi movement was strongest in?",options:["Eastern Bengal","Punjab","Odisha","Tamil Nadu"],answer:0},
{q:"Pagal Panthis were criticized as?",options:["Warriors","Mad-faith","Outsiders","Dikus"],answer:1},

{q:"The Kol Revolt occurred in?",options:["1831-32","1855","1819","1828"],answer:0},
{q:"Which tribes participated in the Kol Revolt?",options:["Munda, Ho, Oraon","Khasi, Garo","Bhil, Ramosi","Santhal, Munda"],answer:0},
{q:"The word Diku means?",options:["Tribal chief","Outsider exploiter","Priest","Warrior"],answer:1},
{q:"Which leader was associated with the Kol Revolt?",options:["Budhu Bhagat","Majnu Shah","Velu Tampi","Tirut Singh"],answer:0},

{q:"The Bhils lived mainly in?",options:["Western Ghats","Rajmahal Hills","Khasi Hills","Assam Valley"],answer:0},
{q:"The Bhils revolted in?",options:["1855","1819","1831","1846"],answer:1},
{q:"One leader of the Bhil Revolt was?",options:["Hiriya","Sidhu","Kanhu","Birsa"],answer:0},
{q:"The British increased which burden on Bhils?",options:["Religious tax","Land revenue","Water tax","Trade duty"],answer:1},

{q:"The Waghera Revolt occurred after?",options:["3rd Anglo-Maratha War","1857 Revolt","1st Anglo-Burmese War","Permanent Settlement"],answer:0},
{q:"The Wagheras opposed increase in?",options:["Trade","Land Revenue","Salt","Forest"],answer:1},
{q:"Who is mentioned as leader of the Waghera movement?",options:["Okha Mandal","Birsa Munda","Karim Shah","Budhu Bhagat"],answer:0},
{q:"The Waghera movement belongs to?",options:["Eastern India","Western India","Southern India","Northern India"],answer:1},

{q:"The Ramosi Movement began in?",options:["1822","1831","1819","1846"],answer:0},
{q:"Who led the Ramosi Movement?",options:["Tirut Singh","Chittur Singh","Karim Shah","Sidhu"],answer:1},
{q:"Ramosis were also known as?",options:["Siladars","Paikas","Dikus","Mundas"],answer:0},
{q:"The Ramosis lost their occupation after?",options:["Road building","Wars ended","Famine","Missionary activity"],answer:1},

{q:"The Poligar Movement took place in?",options:["Kerala","Tamil Nadu","Odisha","Assam"],answer:1},
{q:"Who led the Poligar Movement?",options:["Kotta Boman Nayak","Velu Tampi","Birsa","Sidhu"],answer:0},
{q:"The Poligar Movement lasted till?",options:["1805","1819","1828","1832"],answer:0},
{q:"The Poligars were local?",options:["Merchants","Chiefs","Priests","Farmers"],answer:1},

{q:"Velu Tampi Revolt took place in?",options:["1805","1822","1855","1899"],answer:0},
{q:"Travancore is associated with?",options:["Santhal Revolt","Velu Tampi Revolt","Kol Revolt","Khasi Revolt"],answer:1},
{q:"Who led the Travancore uprising?",options:["Velu Tampi","Birsa","Majnu Shah","Durjan Singh"],answer:0},
{q:"Travancore is in present-day?",options:["Tamil Nadu","Kerala","Odisha","Punjab"],answer:1},

{q:"The Rampa Revolt took place in?",options:["1922","1899","1831","1828"],answer:0},
{q:"The Rampa Revolt occurred in?",options:["Andhra Pradesh","Tamil Nadu","Kerala","Bihar"],answer:0},
{q:"Who was the famous leader of Rampa Revolt?",options:["Alluri Sitarama Raju","Birsa","Sidhu","Budhu Bhagat"],answer:0},
{q:"Rampa Revolt belonged to which region?",options:["South India","West India","North India","East India"],answer:0},

{q:"Which revolt is called Hul?",options:["Santhal Revolt","Khasi Revolt","Kol Revolt","Bhil Revolt"],answer:0},
{q:"Which revolt is called Ulgulan?",options:["Munda Revolt","Santhal Revolt","Kol Revolt","Ahom Revolt"],answer:0},
{q:"Who was called Dharti Aba?",options:["Budhu Bhagat","Birsa Munda","Sidhu","Karim Shah"],answer:1},
{q:"Which revolt was related to Khuntkatti rights?",options:["Khasi","Munda","Kol","Santhal"],answer:1},

{q:"Which revolt was linked with forced religious conversion?",options:["Munda Revolt","Ahom Revolt","Waghera Revolt","Ramosi Movement"],answer:0},
{q:"Which revolt involved Budhu Bhagat?",options:["Kol Revolt","Khasi Revolt","Santhal Revolt","Ahom Revolt"],answer:0},
{q:"The British called tribal outsiders by which term?",options:["Diku","Paika","Ryot","Talukdar"],answer:0},
{q:"Which revolt is associated with Chotanagpur?",options:["Munda Revolt","Khasi Revolt","Waghera Revolt","Velu Tampi Revolt"],answer:0},
{q:"Which revolt was started by the Santhals in 1855?",options:["Ulgulan","Hul","Kol Uprising","Paika Rebellion"],answer:1},
{q:"Who among the following was NOT a leader of the Santhal Revolt?",options:["Sidhu","Kanhu","Chand","Birsa Munda"],answer:3},
{q:"The Santhal Revolt took place mainly in the region of?",options:["Rajmahal Hills","Khasi Hills","Western Ghats","Travancore"],answer:0},
{q:"The immediate cause of the Santhal Revolt was exploitation by?",options:["Moneylenders","French Traders","Portuguese Missionaries","Sikhs"],answer:0},

{q:"Which tribal movement is associated with the slogan 'Abua Raj'?",options:["Kol Revolt","Munda Revolt","Khasi Revolt","Bhil Revolt"],answer:1},
{q:"Birsa Munda launched Ulgulan in?",options:["1895","1897","1899","1905"],answer:2},
{q:"The Munda Revolt was directed against which land system?",options:["Khuntkatti","Ryotwari","Zamindari","Mahalwari"],answer:2},
{q:"Birsa Munda died in British custody due to?",options:["Malaria","Cholera","Plague","Smallpox"],answer:1},

{q:"The Khasi Revolt was mainly against British plans to construct?",options:["Railway","Canal","Road","Port"],answer:2},
{q:"Which revolt was led by Tirut Singh?",options:["Khasi Revolt","Kol Revolt","Santhal Revolt","Rampa Revolt"],answer:0},
{q:"The Khasi tribe belonged to present-day?",options:["Jharkhand","Odisha","Meghalaya","Punjab"],answer:2},

{q:"The Kol Revolt broke out in?",options:["1828","1831","1846","1855"],answer:1},
{q:"Which of the following tribes participated in the Kol Revolt?",options:["Munda and Ho","Khasi and Garo","Bhil and Ramosi","Santhal and Kondh"],answer:0},
{q:"The main target of the Kol rebels were?",options:["Missionaries","British courts and moneylenders","French traders","Mughal officers"],answer:1},
{q:"Which revolt forced the British to introduce administrative reforms in Chotanagpur?",options:["Kol Revolt","Khasi Revolt","Waghera Revolt","Ahom Revolt"],answer:0},
]
},
{
id:"revolt_1857",
name:"Revolt of 1857",
icon:"⚔️",
color:"#C0392B",
desc:"Causes, Leaders, Centers & Consequences of Revolt of 1857",
questions:[

{q:"The Revolt of 1857 began in which city?",options:["Delhi","Meerut","Kanpur","Lucknow"],answer:1},
{q:"The Revolt of 1857 is also known as?",options:["Civil Revolt","Sepoy Mutiny","Tribal Revolt","Peasant Revolt"],answer:1},
{q:"The immediate cause of the Revolt of 1857 was?",options:["Doctrine of Lapse","Heavy Taxes","Enfield Rifle","Subsidiary Alliance"],answer:2},
{q:"The cartridges of Enfield Rifle were rumored to be greased with?",options:["Cow and Pig Fat","Sheep Fat","Goat Fat","Buffalo Fat"],answer:0},
{q:"Who was the Governor-General during the Revolt of 1857?",options:["Lord Curzon","Lord Dalhousie","Lord Canning","Lord Ripon"],answer:2},

{q:"Who was declared the leader of the Revolt at Delhi?",options:["Bahadur Shah II","Nana Sahib","Tatya Tope","Kunwar Singh"],answer:0},
{q:"Bahadur Shah II belonged to which dynasty?",options:["Maurya","Mughal","Maratha","Lodhi"],answer:1},
{q:"The military leader at Delhi was?",options:["Bakht Khan","Tantia Tope","Birjis Qadir","Azimullah Khan"],answer:0},
{q:"Bakht Khan originally came from?",options:["Lucknow","Kanpur","Bareilly","Jhansi"],answer:2},
{q:"Bahadur Shah II was exiled to?",options:["Nepal","Burma","Sri Lanka","Afghanistan"],answer:1},

{q:"Who led the revolt at Kanpur?",options:["Tatya Tope","Bahadur Shah II","Nana Sahib","Kunwar Singh"],answer:2},
{q:"Nana Sahib was the adopted son of?",options:["Baji Rao II","Shivaji","Baji Rao I","Madhav Rao"],answer:0},
{q:"Nana Sahib declared himself as the?",options:["Peshwa","Nawab","Sultan","Governor"],answer:0},
{q:"Who was Nana Sahib's close associate?",options:["Bakht Khan","Tatya Tope","Birjis Qadir","Mangal Pandey"],answer:1},
{q:"The British commander who fought against Nana Sahib was?",options:["Hugh Rose","Colin Campbell","Nicholson","Outram"],answer:1},

{q:"Who led the revolt in Jhansi?",options:["Begum Hazrat Mahal","Rani Lakshmibai","Avantibai","Jhalkari Bai"],answer:1},
{q:"The husband of Rani Lakshmibai was?",options:["Gangadhar Rao","Ranjit Singh","Shivaji Rao","Baji Rao"],answer:0},
{q:"The adopted son of Rani Lakshmibai was?",options:["Birjis Qadir","Damodar Rao","Anand Rao","Narayan Rao"],answer:1},
{q:"Jhansi was annexed under which policy?",options:["Subsidiary Alliance","Doctrine of Lapse","Dual Government","Ring Fence"],answer:1},
{q:"The British general who fought Rani Lakshmibai was?",options:["Hugh Rose","Colin Campbell","Dalhousie","Nicholson"],answer:0},

{q:"Who led the revolt in Lucknow?",options:["Begum Hazrat Mahal","Rani Lakshmibai","Annie Besant","Sarojini Naidu"],answer:0},
{q:"The ruler of Awadh before annexation was?",options:["Wajid Ali Shah","Bahadur Shah II","Shuja-ud-Daula","Safdar Jang"],answer:0},
{q:"The son of Begum Hazrat Mahal was?",options:["Damodar Rao","Birjis Qadir","Azimullah","Bakht Khan"],answer:1},
{q:"Awadh was annexed on the grounds of?",options:["Doctrine of Lapse","Misgovernment","War","Treaty"],answer:1},
{q:"Begum Hazrat Mahal later moved to?",options:["Burma","Nepal","Delhi","Kanpur"],answer:1},

{q:"Who led the revolt at Bareilly?",options:["Bakht Khan","Khan Bahadur Khan","Kunwar Singh","Tatya Tope"],answer:1},
{q:"Who was the leader of Arrah?",options:["Tatya Tope","Kunwar Singh","Bakht Khan","Azimullah Khan"],answer:1},
{q:"Kunwar Singh belonged to present-day?",options:["Punjab","Bihar","Odisha","Assam"],answer:1},
{q:"Who led the revolt at Faizabad?",options:["Maulvi Ahmadullah Shah","Bakht Khan","Tatya Tope","Nana Sahib"],answer:0},
{q:"Who led the revolt at Sambalpur?",options:["Surendra Sai","Kunwar Singh","Tatya Tope","Nana Sahib"],answer:0},

{q:"Who fired the first shot of the Revolt?",options:["Bakht Khan","Mangal Pandey","Tatya Tope","Azimullah Khan"],answer:1},
{q:"Mangal Pandey belonged to which regiment?",options:["34th Bengal Native Infantry","19th Regiment","22nd Regiment","44th Regiment"],answer:0},
{q:"Mangal Pandey revolted at?",options:["Meerut","Barrackpore","Delhi","Kanpur"],answer:1},
{q:"Mangal Pandey was executed on?",options:["8 April 1857","10 May 1857","11 May 1857","15 August 1857"],answer:0},
{q:"The Revolt officially started at Meerut on?",options:["8 April 1857","10 May 1857","15 May 1857","1 June 1857"],answer:1},

{q:"Which policy was mainly responsible for angering Indian rulers?",options:["Doctrine of Lapse","Permanent Settlement","Ryotwari","Mahalwari"],answer:0},
{q:"Who introduced the Doctrine of Lapse?",options:["Lord Canning","Lord Dalhousie","Lord Ripon","Lord Curzon"],answer:1},
{q:"Which class suffered due to British economic policies?",options:["Artisans","Only Soldiers","Only Traders","Only Zamindars"],answer:0},
{q:"Indian traders suffered because British goods were?",options:["Taxed heavily","Cheaper","Banned","Destroyed"],answer:1},
{q:"Farmers were exploited mainly through?",options:["Education Policy","Land Revenue Systems","Judicial Reforms","Army Recruitment"],answer:1},

{q:"Which revenue system fixed land revenue permanently?",options:["Ryotwari","Permanent Settlement","Mahalwari","Jagirdari"],answer:1},
{q:"Who among the following did NOT participate widely in the revolt?",options:["Educated Middle Class","Soldiers","Farmers","Princes"],answer:0},
{q:"One major reason for failure of the revolt was?",options:["National Unity","Poor Organization","Strong Leadership","Modern Weapons"],answer:1},
{q:"The revolt lacked?",options:["Leaders","Unified Ideology","Soldiers","Public Support"],answer:1},
{q:"The rebels were weak in?",options:["Manpower","Arms and Ammunition","Leadership","Courage"],answer:1},

{q:"Who wrote 'Eighteen Fifty Seven'?",options:["S.N. Sen","R.C. Majumdar","Savarkar","Nehru"],answer:0},
{q:"Who wrote 'The Indian War of Independence'?",options:["S.N. Sen","Savarkar","R.C. Majumdar","Bipan Chandra"],answer:1},
{q:"Who wrote 'Asbab-e-Baghawat-e-Hind'?",options:["Bahadur Shah II","Sayyid Ahmad Khan","Savarkar","Nehru"],answer:1},
{q:"Who argued that it was not the First War of Independence?",options:["Savarkar","R.C. Majumdar","S.N. Sen","Subhas Bose"],answer:1},
{q:"The Revolt of 1857 ended the rule of?",options:["British Crown","East India Company","Mughals","Marathas"],answer:1},
{q:"The Revolt of 1857 is often called the First War of?",options:["Religion","Independence","Trade","Succession"],answer:1},
{q:"Who became the symbolic leader of the revolt?",options:["Nana Sahib","Tatya Tope","Bahadur Shah II","Kunwar Singh"],answer:2},
{q:"The headquarters of Bahadur Shah II during the revolt was?",options:["Agra","Delhi","Kanpur","Lucknow"],answer:1},
{q:"Which Mughal emperor supported the rebels?",options:["Akbar II","Bahadur Shah II","Shah Alam II","Aurangzeb"],answer:1},
{q:"Bakht Khan was originally a?",options:["Farmer","Artisan","Soldier","Trader"],answer:2},

{q:"Tatya Tope was associated with?",options:["Nana Sahib","Bahadur Shah II","Wajid Ali Shah","Mangal Pandey"],answer:0},
{q:"Who continued guerrilla warfare after the fall of Kanpur?",options:["Kunwar Singh","Tatya Tope","Bakht Khan","Azimullah Khan"],answer:1},
{q:"Tatya Tope was finally?",options:["Exiled","Hanged","Released","Crowned"],answer:1},
{q:"Rani Lakshmibai died during the battle of?",options:["Kanpur","Gwalior","Delhi","Lucknow"],answer:1},
{q:"Rani Lakshmibai became a symbol of?",options:["Submission","Bravery","Trade","Diplomacy"],answer:1},

{q:"Begum Hazrat Mahal fought against the British in?",options:["Awadh","Punjab","Bengal","Bombay"],answer:0},
{q:"Who was declared ruler of Awadh by Begum Hazrat Mahal?",options:["Damodar Rao","Birjis Qadir","Nana Sahib","Bakht Khan"],answer:1},
{q:"Kunwar Singh belonged to the district of?",options:["Jagdishpur","Lucknow","Jhansi","Meerut"],answer:0},
{q:"Kunwar Singh was approximately how old during the revolt?",options:["30","45","80","60"],answer:2},
{q:"Maulvi Ahmadullah Shah was associated with?",options:["Faizabad","Delhi","Kanpur","Meerut"],answer:0},

{q:"Who led the revolt in Bareilly?",options:["Khan Bahadur Khan","Tatya Tope","Nana Sahib","Bakht Khan"],answer:0},
{q:"The revolt spread rapidly across?",options:["South India only","North and Central India","Entire India","Eastern India only"],answer:1},
{q:"Which city witnessed the first major military uprising?",options:["Delhi","Meerut","Kanpur","Jhansi"],answer:1},
{q:"The sepoys marched from Meerut to?",options:["Lucknow","Delhi","Kanpur","Agra"],answer:1},
{q:"The distance between Meerut and Delhi is approximately?",options:["58 km","100 km","200 km","25 km"],answer:0},

{q:"Which Governor-General succeeded after the revolt?",options:["Lord Ripon","Lord Canning","Lord Curzon","Lord Mayo"],answer:1},
{q:"The Revolt of 1857 ended in?",options:["1859","1858","1860","1857"],answer:1},
{q:"After the revolt, India came under the rule of?",options:["East India Company","British Crown","French","Portuguese"],answer:1},
{q:"Which Act transferred power from EIC to the Crown?",options:["Charter Act","Government of India Act 1858","Pitt's India Act","Regulating Act"],answer:1},
{q:"The title of Governor-General was combined with?",options:["Prime Minister","Viceroy","Commander","Governor"],answer:1},

{q:"The Revolt failed mainly because?",options:["Poor leadership coordination","Lack of courage","Lack of soldiers","No grievances"],answer:0},
{q:"The educated middle class generally?",options:["Supported actively","Remained neutral","Led the revolt","Funded rebels"],answer:1},
{q:"Moneylenders generally?",options:["Supported rebels","Stayed neutral","Supported British","Led revolts"],answer:2},
{q:"Merchants mostly?",options:["Supported British","Led rebels","Joined soldiers","Joined peasants"],answer:0},
{q:"The revolt lacked a common?",options:["Language","Religion","Ideology","Leader"],answer:2},

{q:"Which group formed the backbone of the revolt?",options:["Sepoys","Lawyers","Teachers","Doctors"],answer:0},
{q:"The old rifle used before Enfield was?",options:["Brown Bess","AK-47","Lee Enfield","Musket"],answer:0},
{q:"Enfield cartridges had to be opened by?",options:["Cutting","Burning","Biting","Pulling"],answer:2},
{q:"The cartridge issue offended both?",options:["Hindus and Muslims","Christians and Sikhs","Buddhists and Jains","Traders and Farmers"],answer:0},
{q:"The revolt was strongest in?",options:["Punjab","North India","Kerala","Tamil Nadu"],answer:1},

{q:"Who was the last Mughal emperor?",options:["Akbar II","Bahadur Shah II","Shah Alam","Jahandar Shah"],answer:1},
{q:"Bahadur Shah II died in?",options:["Delhi","Lucknow","Rangoon","Kanpur"],answer:2},
{q:"Bahadur Shah II was deported after the revolt to?",options:["Nepal","Rangoon","London","Calcutta"],answer:1},
{q:"Which British general captured Delhi?",options:["Colin Campbell","John Nicholson","Hugh Rose","Outram"],answer:1},
{q:"Who defeated Rani Lakshmibai?",options:["Nicholson","Hugh Rose","Campbell","Dalhousie"],answer:1},

{q:"Which city became a major center under Nana Sahib?",options:["Delhi","Kanpur","Lucknow","Jhansi"],answer:1},
{q:"The annexation of Awadh occurred in?",options:["1856","1855","1857","1854"],answer:0},
{q:"The ruler removed from Awadh was?",options:["Birjis Qadir","Wajid Ali Shah","Safdar Jang","Shuja-ud-Daula"],answer:1},
{q:"Wajid Ali Shah was sent to?",options:["Bombay","Madras","Calcutta","Delhi"],answer:2},
{q:"Doctrine of Lapse mainly affected?",options:["Princely States","Farmers","Traders","Artisans"],answer:0},

{q:"Which class suffered due to decline of handicrafts?",options:["Artisans","Soldiers","Princes","Zamindars"],answer:0},
{q:"British goods flooded Indian markets because?",options:["Lower import duties","Higher taxes","No transport","War"],answer:0},
{q:"Indian exports suffered due to?",options:["Increased export duties","No demand","Good harvest","Support from EIC"],answer:0},
{q:"The revolt of 1857 is also called?",options:["Peasant Revolt","Sepoy Mutiny","Santhal Revolt","Munda Revolt"],answer:1},
{q:"Which historian called it the First War of Independence?",options:["R.C. Majumdar","V.D. Savarkar","S.N. Sen","Nehru"],answer:1}
]
},
{
id:"indian_national_congress",
name:"Indian National Congress",
icon:"🇮🇳",
color:"#1F618D",
desc:"Formation, Sessions, Presidents, Resolutions, Movements, Moderates, Extremists & Freedom Struggle",
questions:[
{q:"Who is regarded as the founder of the Indian National Congress?",options:["Dadabhai Naoroji","A.O. Hume","Surendranath Banerjee","W.C. Bonnerjee"],answer:1},
{q:"In which year was the Indian National Congress founded?",options:["1883","1884","1885","1886"],answer:2},
{q:"The first session of INC was held at?",options:["Calcutta","Poona","Bombay","Madras"],answer:2},
{q:"The venue of the first INC session was?",options:["Albert Hall","Town Hall","Gokuldas Tejpal Sanskrit College","Presidency College"],answer:2},
{q:"Who presided over the first session of INC?",options:["Dadabhai Naoroji","W.C. Bonnerjee","A.O. Hume","Surendranath Banerjee"],answer:1},
{q:"How many delegates attended the first INC session?",options:["52","62","72","82"],answer:2},
{q:"Who was the Viceroy of India when INC was founded?",options:["Lord Ripon","Lord Dufferin","Lord Curzon","Lord Lytton"],answer:1},
{q:"Lord Dufferin described INC as a?",options:["National Body","Mass Organization","Microscopic Minority","People's Parliament"],answer:2},
{q:"Before INC, which organization acted as its forerunner?",options:["Poona Sarvajanik Sabha","Indian National Conference","East India Association","Indian Association"],answer:1},
{q:"Who organized the Indian National Conference in 1883?",options:["A.O. Hume","Surendranath Banerjee","MG Ranade","Dadabhai Naoroji"],answer:1},
{q:"The Indian National Conference was held at?",options:["Bombay","Madras","Albert Hall, Calcutta","Poona"],answer:2},
{q:"Which controversy created a demand for an all-India political organization?",options:["Partition of Bengal","Ilbert Bill Controversy","Rowlatt Act","Simon Commission"],answer:1},
{q:"The Vernacular Press Act was passed by?",options:["Lord Ripon","Lord Mayo","Lord Lytton","Lord Curzon"],answer:2},
{q:"The Arms Act of 1878 was passed during whose tenure?",options:["Lord Ripon","Lord Mayo","Lord Dufferin","Lord Lytton"],answer:3},
{q:"The Safety Valve Theory of INC was first propounded by?",options:["Rajani Palme Dutt","William Wedderburn","Lala Lajpat Rai","Bipan Chandra"],answer:1},
{q:"Who later called INC a 'Safety Valve'?",options:["Tilak","Lala Lajpat Rai","Gokhale","Naoroji"],answer:1},
{q:"Which Marxist historian called INC a British conspiracy?",options:["R.C. Majumdar","Rajani Palme Dutt","Bipan Chandra","Tara Chand"],answer:1},
{q:"The first General Secretary of INC was?",options:["A.O. Hume","W.C. Bonnerjee","Dadabhai Naoroji","Dinshaw Wacha"],answer:0},
{q:"The first session of INC was originally planned at?",options:["Bombay","Madras","Poona","Calcutta"],answer:2},
{q:"Why was the first INC session shifted from Poona to Bombay?",options:["Political unrest","Epidemic outbreak","Lack of delegates","Government ban"],answer:1},
{q:"Who was known as the Father of Indian Nationalism?",options:["Tilak","Gokhale","Surendranath Banerjee","Dadabhai Naoroji"],answer:2},
{q:"Who was called the Crownless King of Bengal?",options:["R.C. Dutt","Surendranath Banerjee","Bipin Chandra Pal","Aurobindo Ghosh"],answer:1},
{q:"Who was the first Indian dismissed from ICS?",options:["Surendranath Banerjee","R.C. Dutt","W.C. Bonnerjee","A.O. Hume"],answer:0},
{q:"Who founded the Indian Association?",options:["MG Ranade","Surendranath Banerjee","Naoroji","Tilak"],answer:1},
{q:"The second session of INC was held at?",options:["Bombay","Madras","Calcutta","Allahabad"],answer:2},
{q:"Who presided over the 1886 session?",options:["Dadabhai Naoroji","Badruddin Tyabji","George Yule","Pherozeshah Mehta"],answer:0},
{q:"Who was the first Parsi President of INC?",options:["Dinshaw Wacha","Dadabhai Naoroji","Pherozeshah Mehta","Feroz Shah"],answer:1},
{q:"Who joined the INC in the 1886 session?",options:["Tilak","S.N. Banerjee","Gokhale","Lajpat Rai"],answer:1},
{q:"The 1887 session of INC was held at?",options:["Madras","Bombay","Allahabad","Calcutta"],answer:0},
{q:"Who became the first Muslim President of INC?",options:["Rahimtulla Sayani","Badruddin Tyabji","Maulana Azad","M.A. Jinnah"],answer:1},
{q:"The 1888 session of INC was held at?",options:["Allahabad","Bombay","Madras","Poona"],answer:0},
{q:"Who was the first non-Indian President of INC?",options:["Alfred Webb","George Yule","Henry Cotton","Wedderburn"],answer:1},
{q:"The British Committee of INC was formed in?",options:["1886","1887","1888","1889"],answer:2},
{q:"Who established the British Committee of INC in London?",options:["Wedderburn","A.O. Hume","Naoroji","Digby"],answer:0},
{q:"The official journal of the British Committee of INC was?",options:["Kesari","The Hindu","India","Bengalee"],answer:2},
{q:"Who edited the newspaper 'India'?",options:["William Digby","Naoroji","Wedderburn","Tyabji"],answer:0},
{q:"The 1889 session of INC was held at?",options:["Bombay","Calcutta","Madras","Allahabad"],answer:0},
{q:"Who presided over the 1889 session?",options:["George Yule","William Wedderburn","Pherozeshah Mehta","Naoroji"],answer:1},
{q:"The first women participants in INC were?",options:["Sarojini Naidu and Annie Besant","Pandita Ramabai and Swarnakumari Devi","Nellie Sengupta and Kamaladevi","Vijayalakshmi Pandit and Sucheta Kripalani"],answer:1},
{q:"The 1890 session was held at?",options:["Calcutta","Bombay","Madras","Allahabad"],answer:0},
{q:"Who presided over the 1890 session?",options:["Naoroji","Pherozeshah Mehta","Tyabji","Wedderburn"],answer:1},
{q:"Kadambini Ganguly attended INC in which year?",options:["1888","1889","1890","1891"],answer:2},
{q:"Kadambini Ganguly is remembered as?",options:["First woman president","First woman speaker in INC","First Muslim woman","First foreign woman"],answer:1},
{q:"The 1896 session was held at?",options:["Bombay","Calcutta","Madras","Lucknow"],answer:1},
{q:"Who presided over the 1896 session?",options:["Rahimtulla Sayani","Naoroji","Mehta","Tyabji"],answer:0},
{q:"'Vande Mataram' was sung for the first time in INC session of?",options:["1894","1895","1896","1897"],answer:2},
{q:"Who sang Vande Mataram at the 1896 session?",options:["Bankim Chandra","Rabindranath Tagore","Dwijendralal Roy","Aurobindo"],answer:1},
{q:"Vande Mataram was taken from which novel?",options:["Anandamath","Durgeshnandini","Kapalkundala","Devi Chaudhurani"],answer:0},
{q:"The 1899 session was held at?",options:["Madras","Lucknow","Bombay","Lahore"],answer:1},
{q:"Who presided over the 1899 session?",options:["R.C. Dutt","Naoroji","Mehta","Tyabji"],answer:0},
{q:"R.C. Dutt is known as the?",options:["Father of Indian Nationalism","Father of Indian Economy","Father of Extremism","Father of Congress"],answer:1},
{q:"The 1901 INC session was held at?",options:["Bombay","Calcutta","Madras","Lahore"],answer:1},
{q:"Who attended INC for the first time in 1901?",options:["Subhas Bose","Mahatma Gandhi","Jawaharlal Nehru","Rajendra Prasad"],answer:1},
{q:"The 1905 INC session was held at?",options:["Banaras","Calcutta","Surat","Madras"],answer:0},
{q:"Who presided over the 1905 session?",options:["Tilak","Naoroji","Gopal Krishna Gokhale","Lajpat Rai"],answer:2},
{q:"Which issue dominated the 1905 session?",options:["Simon Commission","Partition of Bengal","Rowlatt Act","Lucknow Pact"],answer:1},
{q:"The Swadeshi and Boycott resolution was passed in?",options:["1905 Banaras Session","1906 Calcutta Session","1907 Surat Session","1911 Calcutta Session"],answer:0},
{q:"The 1906 session was held at?",options:["Bombay","Calcutta","Surat","Madras"],answer:1},
{q:"Who presided over the 1906 session?",options:["Tilak","Dadabhai Naoroji","Gokhale","Lajpat Rai"],answer:1},
{q:"The term 'Swaraj' was first officially used in INC at?",options:["1905","1906","1907","1908"],answer:1},
{q:"Who was called the Grand Old Man of India?",options:["Gokhale","Tilak","Dadabhai Naoroji","Ranade"],answer:2},
{q:"The 1907 session was held at?",options:["Bombay","Surat","Calcutta","Madras"],answer:1},
{q:"Who presided over the Surat Session?",options:["Rash Behari Ghosh","Tilak","Naoroji","Lajpat Rai"],answer:0},
{q:"The Surat Split divided Congress into?",options:["Congress and League","Moderates and Extremists","Liberals and Socialists","Gandhians and Revolutionaries"],answer:1},
{q:"The extremist leader known as Lokmanya was?",options:["Bipin Chandra Pal","Lala Lajpat Rai","Bal Gangadhar Tilak","Aurobindo Ghosh"],answer:2},
{q:"Who formed the Lal-Bal-Pal trio?",options:["Lajpat Rai, Tilak, Pal","Pal, Bose, Gandhi","Tilak, Gokhale, Naoroji","Pal, Nehru, Das"],answer:0},
{q:"The 1911 session was held at?",options:["Bombay","Delhi","Calcutta","Madras"],answer:2},
{q:"Jana Gana Mana was first sung at the INC session of?",options:["1910","1911","1912","1913"],answer:1},
{q:"Who presided over the 1911 session?",options:["Bishan Narayan Dhar","Naoroji","Malaviya","Besant"],answer:0},
{q:"The 1916 session was held at?",options:["Lucknow","Bombay","Calcutta","Madras"],answer:0},
{q:"Who presided over the Lucknow Session?",options:["Ambika Charan Mazumdar","Tilak","Besant","Naoroji"],answer:0},
{q:"The Lucknow Pact was signed between?",options:["INC and British","INC and Muslim League","INC and Swaraj Party","INC and Home Rule League"],answer:1},
{q:"Who played a major role in the Lucknow Pact?",options:["Tilak","Curzon","Irwin","Chelmsford"],answer:0},
{q:"Sarojini Naidu called whom the 'Ambassador of Hindu-Muslim Unity'?",options:["Tilak","Jinnah","Gandhi","Azad"],answer:1},
{q:"The Moderates and Extremists reunited in which session?",options:["1915 Bombay","1916 Lucknow","1917 Calcutta","1918 Delhi"],answer:1},
{q:"The 1917 session was held at?",options:["Bombay","Madras","Calcutta","Lucknow"],answer:2},
{q:"Who became the first woman President of INC?",options:["Sarojini Naidu","Nellie Sengupta","Annie Besant","Vijayalakshmi Pandit"],answer:2},
{q:"Annie Besant originally belonged to?",options:["France","Ireland","England","Scotland"],answer:1},
{q:"The 1918 Special Session was held at?",options:["Bombay","Delhi","Calcutta","Madras"],answer:0},
{q:"Who presided over the 1918 Special Session?",options:["Madan Mohan Malaviya","Syed Hasan Imam","Annie Besant","Naoroji"],answer:1},
{q:"The 1918 Special Session demanded?",options:["Purna Swaraj","Dominion Status","Complete Independence","Partition"],answer:1},
{q:"Which movement was launched by Annie Besant in 1916?",options:["Khilafat Movement","Home Rule Movement","Civil Disobedience Movement","Quit India Movement"],answer:1},
{q:"Who launched the Home Rule League from Poona?",options:["Tilak","Gokhale","Naoroji","Pal"],answer:0},
{q:"Who launched the Home Rule League from Madras?",options:["Sarojini Naidu","Annie Besant","Nellie Sengupta","Kamaladevi"],answer:1},
{q:"The Rowlatt Act was passed in?",options:["1917","1918","1919","1920"],answer:2},
{q:"Which act was called the Black Act?",options:["Government of India Act","Rowlatt Act","Pitt's India Act","Regulating Act"],answer:1},
{q:"The first all-India Satyagraha launched by Gandhi was against?",options:["Partition of Bengal","Rowlatt Act","Simon Commission","Salt Tax"],answer:1},
{q:"The Jallianwala Bagh massacre took place on?",options:["13 April 1919","15 August 1919","26 January 1920","6 April 1919"],answer:0},
{q:"Who ordered the firing at Jallianwala Bagh?",options:["Curzon","O'Dwyer","General Dyer","Irwin"],answer:2},
{q:"Jallianwala Bagh is located in?",options:["Delhi","Lahore","Amritsar","Kanpur"],answer:2},
{q:"Who returned his knighthood after the Jallianwala Bagh massacre?",options:["Gandhi","Nehru","Rabindranath Tagore","Tilak"],answer:2},
{q:"The Non-Cooperation Movement was launched in?",options:["1919","1920","1921","1922"],answer:1},
{q:"The special session of 1920 was held at?",options:["Bombay","Calcutta","Madras","Delhi"],answer:1},
{q:"Who presided over the Calcutta Special Session of 1920?",options:["Lala Lajpat Rai","Tilak","Gandhi","Malaviya"],answer:0},
{q:"The annual session of 1920 was held at?",options:["Nagpur","Bombay","Lahore","Calcutta"],answer:0},
{q:"Who presided over the Nagpur Session of 1920?",options:["Vijayaraghavachariar","Gandhi","Lajpat Rai","Das"],answer:0},
{q:"At Nagpur session, Congress adopted?",options:["Purna Swaraj","Provincial Reorganization on Linguistic Basis","Separate Electorates","Dominion Status"],answer:1},
{q:"The Chauri Chaura incident occurred in?",options:["1920","1921","1922","1923"],answer:2},
{q:"Chauri Chaura is located in present-day?",options:["Punjab","Uttar Pradesh","Bihar","Madhya Pradesh"],answer:1},
{q:"How many policemen were killed in the Chauri Chaura incident?",options:["18","20","22","24"],answer:2},
{q:"After Chauri Chaura, Gandhi withdrew?",options:["Civil Disobedience Movement","Quit India Movement","Non-Cooperation Movement","Khilafat Movement"],answer:2},
{q:"The Gaya Session of Congress was held in?",options:["1921","1922","1923","1924"],answer:1},
{q:"Who presided over the Gaya Session?",options:["Motilal Nehru","Chittaranjan Das","Gandhi","Azad"],answer:1},
{q:"Who led the Pro-Changers group?",options:["Gandhi","Rajendra Prasad","C.R. Das","Patel"],answer:2},
{q:"Who led the No-Changers group?",options:["Gandhi","Das","Motilal Nehru","Subhas Bose"],answer:0},
{q:"The Swaraj Party was founded in?",options:["1922","1923","1924","1925"],answer:1},
{q:"Who founded the Swaraj Party?",options:["Motilal Nehru and C.R. Das","Gandhi and Patel","Nehru and Bose","Azad and Ansari"],answer:0},
{q:"Who became the first President of Swaraj Party?",options:["Motilal Nehru","Subhas Bose","C.R. Das","Lajpat Rai"],answer:2},
{q:"Who became Secretary of Swaraj Party?",options:["Jawaharlal Nehru","Motilal Nehru","Subhas Bose","Patel"],answer:1},
{q:"The Delhi Session of 1923 was presided over by?",options:["Maulana Azad","Motilal Nehru","Das","Patel"],answer:0},
{q:"Maulana Abul Kalam Azad became Congress President at the age of?",options:["30","35","40","45"],answer:1},
{q:"Who was the youngest President of INC before independence?",options:["Nehru","Azad","Bose","Patel"],answer:1},
{q:"Which book was written by Maulana Azad?",options:["India Wins Freedom","Discovery of India","Glimpses of World History","Hind Swaraj"],answer:0},
{q:"The Belgaum Session of 1924 was presided over by?",options:["Nehru","Gandhi","Patel","Das"],answer:1},
{q:"Mahatma Gandhi became INC President for?",options:["Twice","Three times","Only once","Never"],answer:2},
{q:"The Kanpur Session of 1925 was presided over by?",options:["Annie Besant","Sarojini Naidu","Nellie Sengupta","Sucheta Kripalani"],answer:1},
{q:"Who was the first Indian woman President of INC?",options:["Annie Besant","Sarojini Naidu","Nellie Sengupta","Kamaladevi"],answer:1},
{q:"Sarojini Naidu is popularly known as?",options:["Bulbul-e-Hind","Nightingale of India","Bharat Kokila","Both 2 and 3"],answer:3},
{q:"The Gauhati Session of 1926 was presided over by?",options:["S. Srinivasa Iyengar","Patel","Nehru","Azad"],answer:0},
{q:"The first INC session in Northeast India was held at?",options:["Shillong","Agartala","Gauhati","Imphal"],answer:2},
{q:"The Simon Commission was appointed in?",options:["1926","1927","1928","1929"],answer:1},
{q:"The Simon Commission arrived in India in?",options:["1927","1928","1929","1930"],answer:1},
{q:"How many members were there in the Simon Commission?",options:["5","6","7","8"],answer:2},
{q:"The Simon Commission consisted of?",options:["All Indians","All Europeans","Mixed Members","British and Americans"],answer:1},
{q:"The slogan raised against Simon Commission was?",options:["Quit India","Vande Mataram","Simon Go Back","Inquilab Zindabad"],answer:2},
{q:"Who was injured during the protest against Simon Commission and later died?",options:["Tilak","Lala Lajpat Rai","Bipin Chandra Pal","C.R. Das"],answer:1},
{q:"Lala Lajpat Rai was popularly known as?",options:["Punjab Kesari","Lokmanya","Grand Old Man","Deshbandhu"],answer:0},
{q:"Who headed the committee that prepared the Nehru Report?",options:["Jawaharlal Nehru","Motilal Nehru","Tej Bahadur Sapru","Subhas Bose"],answer:1},
{q:"The Nehru Report was published in?",options:["1927","1928","1929","1930"],answer:1},
{q:"The Nehru Report demanded?",options:["Complete Independence","Dominion Status","Partition","Separate Nation"],answer:1},
{q:"Who rejected the Nehru Report and proposed Fourteen Points?",options:["Jinnah","Iqbal","Azad","Ansari"],answer:0},
{q:"The Lahore Session of INC was held in?",options:["1928","1929","1930","1931"],answer:1},
{q:"Who presided over the Lahore Session?",options:["Motilal Nehru","Jawaharlal Nehru","Subhas Bose","Patel"],answer:1},
{q:"At Lahore Session, INC adopted the goal of?",options:["Dominion Status","Purna Swaraj","Responsible Government","Separate Electorate"],answer:1},
{q:"Purna Swaraj means?",options:["Dominion Status","Provincial Autonomy","Complete Independence","Federal System"],answer:2},
{q:"Which date was declared as Independence Day by the Lahore Session?",options:["15 August","26 January","2 October","13 April"],answer:1},
{q:"The first Independence Day was celebrated on?",options:["26 January 1930","15 August 1947","31 December 1929","26 January 1931"],answer:0},
{q:"The Civil Disobedience Movement began in?",options:["1928","1929","1930","1931"],answer:2},
{q:"The Civil Disobedience Movement started with?",options:["Dandi March","Quit India","Khilafat","Home Rule"],answer:0},
{q:"The Dandi March started from?",options:["Wardha","Sabarmati Ashram","Porbandar","Ahmedabad"],answer:1},
{q:"The destination of Dandi March was?",options:["Surat","Dandi","Bombay","Karachi"],answer:1},
{q:"The Dandi March began on?",options:["12 March 1930","26 January 1930","6 April 1930","15 August 1930"],answer:0},
{q:"The Salt Law was broken on?",options:["12 March","6 April","26 January","31 December"],answer:1},
{q:"The Karachi Session was held in?",options:["1930","1931","1932","1933"],answer:1},
{q:"Who presided over the Karachi Session?",options:["Jawaharlal Nehru","Sardar Patel","Subhas Bose","Rajendra Prasad"],answer:1},
{q:"The Karachi Resolution emphasized?",options:["Fundamental Rights and Economic Policy","Partition","Dominion Status","Separate Electorates"],answer:0},
{q:"The Gandhi-Irwin Pact was signed in?",options:["1929","1930","1931","1932"],answer:2},
{q:"The Gandhi-Irwin Pact was signed between Gandhi and?",options:["Curzon","Irwin","Wavell","Linlithgow"],answer:1},
{q:"Gandhi attended which Round Table Conference?",options:["First","Second","Third","All"],answer:1},
{q:"The Second Round Table Conference was held in?",options:["1930","1931","1932","1933"],answer:1},
{q:"The Communal Award was announced in?",options:["1930","1931","1932","1933"],answer:2},
{q:"Who announced the Communal Award?",options:["MacDonald","Irwin","Linlithgow","Curzon"],answer:0},
{q:"The Poona Pact was signed in?",options:["1931","1932","1933","1934"],answer:1},
{q:"The Poona Pact was signed between Gandhi and?",options:["Nehru","Ambedkar","Jinnah","Patel"],answer:1},
{q:"The 1933 Session of INC was held at?",options:["Delhi","Calcutta","Bombay","Lucknow"],answer:1},
{q:"Who presided over the 1933 Session?",options:["Sarojini Naidu","Nellie Sengupta","Annie Besant","Kamaladevi"],answer:1},
{q:"Nellie Sengupta was the first?",options:["Woman President","Bengali Woman President of INC","Foreign President","Muslim Woman President"],answer:1},
{q:"The Government of India Act was passed in?",options:["1933","1934","1935","1936"],answer:2},
{q:"Provincial Autonomy was introduced by?",options:["Act 1919","Act 1935","Act 1909","Act 1947"],answer:1},
{q:"The Faizpur Session was held in?",options:["1936","1937","1938","1939"],answer:1},
{q:"Who presided over the Faizpur Session?",options:["Subhas Bose","Jawaharlal Nehru","Patel","Azad"],answer:1},
{q:"Faizpur Session is famous for?",options:["Agricultural Policy","Purna Swaraj","Quit India","Poona Pact"],answer:0},
{q:"The Haripura Session of INC was held in?",options:["1937","1938","1939","1940"],answer:1},
{q:"Who presided over the Haripura Session?",options:["Jawaharlal Nehru","Subhas Chandra Bose","Rajendra Prasad","Maulana Azad"],answer:1},
{q:"At Haripura Session, National Planning Committee was proposed by?",options:["Patel","Subhas Bose","Rajendra Prasad","Azad"],answer:1},
{q:"Who became Chairman of the National Planning Committee?",options:["Subhas Bose","Jawaharlal Nehru","Patel","Rajendra Prasad"],answer:1},
{q:"The Tripuri Session was held in?",options:["1938","1939","1940","1941"],answer:1},
{q:"Tripuri Session was held in present-day?",options:["Uttar Pradesh","Madhya Pradesh","Bihar","Jharkhand"],answer:1},
{q:"Who was elected President at the Tripuri Session?",options:["Patel","Nehru","Subhas Bose","Azad"],answer:2},
{q:"Whom did Subhas Bose defeat in the 1939 presidential election?",options:["Patel","Rajendra Prasad","Sitaramayya","Azad"],answer:2},
{q:"Who was Gandhi's nominee defeated by Bose?",options:["Nehru","Sitaramayya","Patel","Prasad"],answer:1},
{q:"After Tripuri Session, Subhas Bose resigned from?",options:["Forward Bloc","Congress Presidency","Muslim League","Cabinet Mission"],answer:1},
{q:"Subhas Bose founded the Forward Bloc in?",options:["1938","1939","1940","1941"],answer:1},
{q:"Who became working President after Bose resigned?",options:["Patel","Rajendra Prasad","Azad","Nehru"],answer:1},
{q:"Who wrote 'History of the Indian National Congress'?",options:["Nehru","Pattabhi Sitaramayya","Azad","Prasad"],answer:1},
{q:"The Ramgarh Session was held in?",options:["1940","1941","1942","1943"],answer:0},
{q:"Who presided over the Ramgarh Session?",options:["Rajendra Prasad","Subhas Bose","Maulana Abul Kalam Azad","Patel"],answer:2},
{q:"Who remained INC President from 1940 to 1945?",options:["Nehru","Azad","Patel","Prasad"],answer:1},
{q:"Why did Maulana Azad remain President for six years?",options:["Emergency","World War II","Partition","Quit India"],answer:1},
{q:"The Quit India Movement was launched in?",options:["1940","1941","1942","1943"],answer:2},
{q:"The Quit India Resolution was passed at?",options:["Wardha","Bombay","Delhi","Allahabad"],answer:1},
{q:"The Quit India Movement began on?",options:["8 August 1942","9 August 1942","15 August 1942","26 January 1942"],answer:0},
{q:"The famous slogan 'Do or Die' was given by?",options:["Subhas Bose","Patel","Gandhi","Nehru"],answer:2},
{q:"Quit India Movement is also known as?",options:["August Revolution","October Revolution","Salt Revolution","National Revolution"],answer:0},
{q:"Who gave the slogan 'Jai Hind'?",options:["Gandhi","Subhas Bose","Patel","Nehru"],answer:1},
{q:"Who gave the slogan 'Delhi Chalo'?",options:["Patel","Nehru","Subhas Bose","Azad"],answer:2},
{q:"INA stands for?",options:["Indian National Army","Indian Navy Association","Indian National Association","Indian New Army"],answer:0},
{q:"Who founded the INA?",options:["Subhas Bose","Rash Behari Bose","Mohan Singh","Azad"],answer:2},
{q:"Who reorganized the INA?",options:["Patel","Subhas Bose","Nehru","Rajendra Prasad"],answer:1},
{q:"The Azad Hind Government was established in?",options:["1942","1943","1944","1945"],answer:1},
{q:"The headquarters of Azad Hind Government was initially at?",options:["Tokyo","Singapore","Bangkok","Rangoon"],answer:1},
{q:"The women's regiment of INA was called?",options:["Lakshmi Regiment","Jhansi Regiment","Rani of Jhansi Regiment","Durga Regiment"],answer:2},
{q:"Who led the Rani of Jhansi Regiment?",options:["Aruna Asaf Ali","Lakshmi Sahgal","Sarojini Naidu","Sucheta Kripalani"],answer:1},
{q:"Who was called Netaji?",options:["Patel","Nehru","Subhas Bose","Azad"],answer:2},
{q:"The Cabinet Mission came to India in?",options:["1945","1946","1947","1948"],answer:1},
{q:"The Cabinet Mission consisted of how many members?",options:["2","3","4","5"],answer:1},
{q:"The Meerut Session of INC was held in?",options:["1945","1946","1947","1948"],answer:1},
{q:"Who presided over the Meerut Session?",options:["Patel","J.B. Kripalani","Nehru","Azad"],answer:1},
{q:"Who was the last President of INC before Independence?",options:["Nehru","Patel","Kripalani","Azad"],answer:2},
{q:"Who became the first President of INC after Independence?",options:["Kripalani","Patel","Nehru","Rajendra Prasad"],answer:0},
{q:"The Interim Government was formed in?",options:["1945","1946","1947","1948"],answer:1},
{q:"Who headed the Interim Government?",options:["Patel","Nehru","Rajendra Prasad","Kripalani"],answer:1},
{q:"The early phase of INC (1885-1905) is known as the age of?",options:["Extremists","Moderates","Revolutionaries","Gandhians"],answer:1},
{q:"Who is known as the Political Guru of Mahatma Gandhi?",options:["Tilak","Gokhale","Naoroji","Ranade"],answer:1},
{q:"Who founded the Servants of India Society?",options:["Tilak","Naoroji","Gokhale","Ranade"],answer:2},
{q:"The Servants of India Society was founded in?",options:["1903","1904","1905","1906"],answer:2},
{q:"Who is known as the Father of the Indian Unrest?",options:["Lajpat Rai","Tilak","Bipin Pal","Aurobindo"],answer:1},
{q:"The slogan 'Swaraj is my birthright and I shall have it' was given by?",options:["Gandhi","Tilak","Bose","Nehru"],answer:1},
{q:"Who started the newspaper Kesari?",options:["Tilak","Gokhale","Naoroji","Pal"],answer:0},
{q:"Kesari was published in which language?",options:["Hindi","English","Marathi","Bengali"],answer:2},
{q:"The English newspaper started by Tilak was?",options:["Young India","Maratha","Kesari","Hindu"],answer:1},
{q:"Who was known as Lokmanya?",options:["Pal","Tilak","Lajpat Rai","Aurobindo"],answer:1},
{q:"Who was known as Punjab Kesari?",options:["Tilak","Pal","Lajpat Rai","Bose"],answer:2},
{q:"Who was known as the Father of Revolutionary Thought?",options:["Tilak","Aurobindo","Pal","Savarkar"],answer:1},
{q:"The Lal-Bal-Pal trio consisted of?",options:["Lajpat Rai, Tilak, Bipin Pal","Pal, Bose, Gandhi","Tilak, Gokhale, Naoroji","Lajpat Rai, Bose, Nehru"],answer:0},
{q:"Who started the newspaper New India?",options:["Annie Besant","Tilak","Naoroji","Pal"],answer:0},
{q:"Who started the newspaper Commonweal?",options:["Annie Besant","Tilak","Pal","Gokhale"],answer:0},
{q:"Who founded the Home Rule League in Madras?",options:["Tilak","Besant","Pal","Nehru"],answer:1},
{q:"Who founded the Home Rule League in Poona?",options:["Tilak","Besant","Pal","Das"],answer:0},
{q:"Who is known as the Grand Old Man of India?",options:["Tilak","Naoroji","Gokhale","Ranade"],answer:1},
{q:"Who propounded the Drain Theory?",options:["Tilak","Naoroji","Ranade","Pal"],answer:1},
{q:"Which book was written by Dadabhai Naoroji?",options:["Poverty and Un-British Rule in India","India Wins Freedom","Discovery of India","Hind Swaraj"],answer:0},
{q:"Who is known as the Father of Indian Economics?",options:["Naoroji","R.C. Dutt","Ranade","Gokhale"],answer:1},
{q:"Who wrote Economic History of India?",options:["Naoroji","R.C. Dutt","Tilak","Pal"],answer:1},
{q:"Who founded the East India Association?",options:["Naoroji","Ranade","Tilak","Banerjee"],answer:0},
{q:"The East India Association was founded in?",options:["1865","1866","1867","1868"],answer:1},
{q:"Who founded the Poona Sarvajanik Sabha?",options:["Ranade","Tilak","Naoroji","Besant"],answer:0},
{q:"Poona Sarvajanik Sabha was founded in?",options:["1867","1870","1872","1875"],answer:1},
{q:"Who is regarded as the Father of Local Self Government in India?",options:["Lord Mayo","Lord Ripon","Lord Lytton","Lord Dufferin"],answer:1},
{q:"The Ilbert Bill controversy occurred during whose tenure?",options:["Ripon","Lytton","Curzon","Mayo"],answer:0},
{q:"Who prepared the Ilbert Bill?",options:["Ripon","Courtenay Ilbert","Macaulay","Dufferin"],answer:1},
{q:"The Ilbert Bill aimed at removing discrimination between?",options:["Hindus and Muslims","Indians and Europeans","Men and Women","British and French"],answer:1},
{q:"The Vernacular Press Act is also known as?",options:["Black Act","Gagging Act","Press Act","Emergency Act"],answer:1},
{q:"Which newspaper first suffered under the Vernacular Press Act?",options:["Kesari","Amrita Bazar Patrika","Hindu Patriot","Bengalee"],answer:1},
{q:"Who founded Amrita Bazar Patrika?",options:["Motilal Ghosh and Sisir Kumar Ghosh","Tilak and Agarkar","Banerjee and Dutt","Naoroji and Mehta"],answer:0},
{q:"The Indian National Association was founded in?",options:["1875","1876","1877","1878"],answer:1},
{q:"Who founded the Indian National Association?",options:["Banerjee and Bose","Tilak and Ranade","Naoroji and Mehta","Besant and Gokhale"],answer:0},
{q:"The Indian National Association merged with INC in?",options:["1885","1886","1887","1888"],answer:1},
{q:"Who wrote 'A Nation in Making'?",options:["Naoroji","Banerjee","Tilak","Ranade"],answer:1},
{q:"Which newspaper was started by Surendranath Banerjee?",options:["Kesari","The Bengalee","Maratha","Young India"],answer:1},
{q:"Who was the first Muslim President of INC?",options:["Rahimtulla Sayani","Badruddin Tyabji","Azad","Ansari"],answer:1},
{q:"Who was the second Muslim President of INC?",options:["Rahimtulla Sayani","Tyabji","Azad","Ansari"],answer:0},
{q:"Which INC session adopted the goal of Purna Swaraj?",options:["Calcutta 1928","Lahore 1929","Karachi 1931","Lucknow 1916"],answer:1},
{q:"Who presided over the Lahore Session of 1929?",options:["Motilal Nehru","Jawaharlal Nehru","Subhas Bose","Patel"],answer:1},
{q:"At which session was 26 January declared Independence Day?",options:["Karachi 1931","Lahore 1929","Faizpur 1937","Tripuri 1939"],answer:1},
{q:"The first Independence Day was celebrated on?",options:["15 August 1947","26 January 1930","31 December 1929","26 January 1950"],answer:1},
{q:"Who unfurled the tricolour on the banks of Ravi in 1929?",options:["Gandhi","Jawaharlal Nehru","Subhas Bose","Patel"],answer:1},
{q:"The Karachi Session of INC was held in?",options:["1930","1931","1932","1933"],answer:1},
{q:"Who presided over the Karachi Session?",options:["Jawaharlal Nehru","Sardar Patel","Rajendra Prasad","Subhas Bose"],answer:1},
{q:"The Karachi Resolution dealt mainly with?",options:["Partition","Fundamental Rights","Dominion Status","Federal Structure"],answer:1},
{q:"Which session endorsed Fundamental Rights for the first time?",options:["Lahore","Karachi","Tripuri","Haripura"],answer:1},
{q:"The Gandhi-Irwin Pact was approved in which session?",options:["Lahore","Karachi","Lucknow","Bombay"],answer:1},
{q:"Who was the first woman President of INC?",options:["Sarojini Naidu","Annie Besant","Nellie Sengupta","Sucheta Kripalani"],answer:1},
{q:"Annie Besant presided over the INC session of?",options:["1916","1917","1918","1919"],answer:1},
{q:"Who was the first Indian woman President of INC?",options:["Annie Besant","Sarojini Naidu","Nellie Sengupta","Aruna Asaf Ali"],answer:1},
{q:"Sarojini Naidu presided over which session?",options:["Kanpur 1925","Madras 1927","Karachi 1931","Lucknow 1916"],answer:0},
{q:"Who was known as the Nightingale of India?",options:["Annie Besant","Sarojini Naidu","Kamaladevi","Nellie Sengupta"],answer:1},
{q:"The Madras Session of 1927 is famous for demanding?",options:["Dominion Status","Complete Independence","Separate Electorates","Provincial Autonomy"],answer:1},
{q:"Who presided over the Madras Session of 1927?",options:["Dr. M.A. Ansari","Motilal Nehru","Patel","Rajendra Prasad"],answer:0},
{q:"The Nehru Report was submitted in?",options:["1927","1928","1929","1930"],answer:1},
{q:"Who chaired the Nehru Report Committee?",options:["Jawaharlal Nehru","Motilal Nehru","Tej Bahadur Sapru","Subhas Bose"],answer:1},
{q:"Which leader opposed the Nehru Report and announced Fourteen Points?",options:["Iqbal","Jinnah","Azad","Liaquat Ali Khan"],answer:1},
{q:"The Faizpur Session of 1937 was significant because it was held in a?",options:["Capital City","Village","University","Hill Station"],answer:1},
{q:"Who presided over the Faizpur Session?",options:["Subhas Bose","Jawaharlal Nehru","Patel","Rajendra Prasad"],answer:1},
{q:"The Haripura Session was held in?",options:["1937","1938","1939","1940"],answer:1},
{q:"Who presided over the Haripura Session?",options:["Nehru","Subhas Bose","Patel","Azad"],answer:1},
{q:"The National Planning Committee was set up after which session?",options:["Haripura","Tripuri","Ramgarh","Faizpur"],answer:0},
{q:"Who chaired the National Planning Committee?",options:["Subhas Bose","Jawaharlal Nehru","Patel","Rajendra Prasad"],answer:1},
{q:"The Tripuri Session was held in?",options:["1938","1939","1940","1941"],answer:1},
{q:"Subhas Bose defeated whom in the presidential election at Tripuri?",options:["Patel","Rajendra Prasad","Pattabhi Sitaramayya","Azad"],answer:2},
{q:"Who said 'Pattabhi's defeat is my defeat'?",options:["Nehru","Patel","Gandhi","Azad"],answer:2},
{q:"After resigning from Congress presidency, Bose founded?",options:["INA","Forward Bloc","Swaraj Party","Congress Socialist Party"],answer:1},
{q:"The Forward Bloc was founded in?",options:["1938","1939","1940","1941"],answer:1},
{q:"The Ramgarh Session of INC was held in?",options:["1939","1940","1941","1942"],answer:1},
{q:"Who presided over the Ramgarh Session?",options:["Azad","Patel","Rajendra Prasad","Nehru"],answer:0},
{q:"Who remained INC President from 1940 to 1946?",options:["Patel","Nehru","Azad","Prasad"],answer:2},
{q:"The longest-serving Congress President during the freedom struggle was?",options:["Gandhi","Azad","Nehru","Patel"],answer:1},
{q:"The Quit India Resolution was passed at Bombay in?",options:["1940","1941","1942","1943"],answer:2},
{q:"Which session is associated with the Quit India Movement?",options:["Bombay AICC Session 1942","Tripuri Session","Ramgarh Session","Haripura Session"],answer:0},
{q:"Who gave the slogan 'Do or Die'?",options:["Nehru","Patel","Gandhi","Bose"],answer:2},
{q:"Who presided over the Meerut Session of 1946?",options:["Azad","Patel","Kripalani","Nehru"],answer:2},
{q:"Who was the last Congress President before Independence?",options:["Azad","Patel","Kripalani","Nehru"],answer:2},
{q:"Who was the first Englishman to preside over the INC?",options:["George Yule","Alfred Webb","Henry Cotton","William Wedderburn"],answer:0},
{q:"Who was the first Irish President of INC?",options:["George Yule","Alfred Webb","Henry Cotton","Wedderburn"],answer:1},
{q:"Who was the first President of INC from Britain?",options:["George Yule","Alfred Webb","Naoroji","Cotton"],answer:0},
{q:"Which INC President later became the founder of the Home Rule Movement in India?",options:["Annie Besant","Naoroji","Tilak","Gokhale"],answer:0},
{q:"Who wrote 'Poverty and Un-British Rule in India'?",options:["R.C. Dutt","Dadabhai Naoroji","Ranade","Gokhale"],answer:1},
{q:"Who wrote the book 'India Wins Freedom'?",options:["Jawaharlal Nehru","Maulana Abul Kalam Azad","Rajendra Prasad","Patel"],answer:1},
{q:"Who wrote 'Discovery of India'?",options:["Subhas Bose","Jawaharlal Nehru","Azad","Gandhi"],answer:1},
{q:"Who wrote 'Glimpses of World History'?",options:["Patel","Nehru","Rajendra Prasad","Azad"],answer:1},
{q:"Who wrote 'Hind Swaraj'?",options:["Tilak","Gandhi","Naoroji","Bose"],answer:1},
{q:"Which Congress leader founded the newspaper 'Young India'?",options:["Gandhi","Tilak","Nehru","Pal"],answer:0},
{q:"Which newspaper was started by Bal Gangadhar Tilak?",options:["Young India","Harijan","Kesari","National Herald"],answer:2},
{q:"Who started the newspaper 'National Herald'?",options:["Patel","Subhas Bose","Jawaharlal Nehru","Azad"],answer:2},
{q:"Who gave the slogan 'Inquilab Zindabad'?",options:["Bhagat Singh","Hasrat Mohani","Subhas Bose","Azad"],answer:0},
{q:"Who first demanded Complete Independence before the Lahore Session?",options:["Hasrat Mohani","Tilak","Naoroji","Gokhale"],answer:0},
{q:"Who coined the slogan 'Jai Hind'?",options:["Abid Hasan","Subhas Bose","Rash Behari Bose","Lakshmi Sahgal"],answer:0},
{q:"Which Congress President was known as 'Deshbandhu'?",options:["Motilal Nehru","C.R. Das","Patel","Rajendra Prasad"],answer:1},
{q:"Who presided over the special Calcutta Session of 1920?",options:["Lala Lajpat Rai","Gandhi","Motilal Nehru","C.R. Das"],answer:0},
{q:"Which INC session approved the formation of linguistic provinces within Congress?",options:["Lahore 1929","Nagpur 1920","Karachi 1931","Lucknow 1916"],answer:1},
{q:"Who was the first Congress President after India attained Independence?",options:["J.B. Kripalani","Rajendra Prasad","Patel","Nehru"],answer:0},
{q:"Which Congress session is considered the most important because it adopted Purna Swaraj as the final goal?",options:["Karachi 1931","Lucknow 1916","Lahore 1929","Tripuri 1939"],answer:2},
{q:"The Indigo Revolt took place in?",options:["1857","1858","1859","1860"],answer:2},
{q:"Indigo was popularly known as?",options:["White Gold","Blue Gold","Black Gold","Green Gold"],answer:1},
{q:"The Indigo Revolt mainly occurred in which region?",options:["Punjab","Bengal","Bombay","Madras"],answer:1},
{q:"The Indigo cultivators revolted against?",options:["British Soldiers","Indigo Planters","Zamindars","Missionaries"],answer:1},
{q:"Why did peasants oppose Indigo cultivation?",options:["Low Market Demand","Reduced Soil Fertility","High Rainfall","Lack of Labour"],answer:1},
{q:"What was 'Dadan' in Indigo cultivation?",options:["Tax System","Advance Loan to Peasants","Land Revenue","Trade License"],answer:1},
{q:"The European demand for Indigo increased due to?",options:["French Revolution","Industrial Revolution","American War","World War"],answer:1},
{q:"Which system forced peasants to cultivate Indigo on their land?",options:["Ryotwari System","Ryoti System","Mahalwari System","Permanent Settlement"],answer:1},
{q:"The Indigo Revolt is also known as?",options:["Blue Rebellion","White Rebellion","Peasant War","Bengal Revolt"],answer:0},
{q:"The Indigo Revolt is regarded as one of the earliest?",options:["Tribal Revolts","Peasant Movements","Worker Movements","Religious Movements"],answer:1},
{q:"Who was the last Governor-General of India under the East India Company?",options:["Lord Dalhousie","Lord Canning","Lord Curzon","Lord Ripon"],answer:1},
{q:"After the Revolt of 1857, British rule in India came under?",options:["East India Company","British Parliament","British Crown","Governor-General"],answer:2},
{q:"The British Crown officially took control of India on?",options:["10 May 1857","1 November 1858","15 August 1858","1 January 1859"],answer:1},
{q:"The rule established after 1858 was known as?",options:["Company Rule","Mughal Rule","British Raj","Governor Rule"],answer:2},
{q:"The Grand Darbar of 1858 was held at?",options:["Delhi","Calcutta","Allahabad","Lucknow"],answer:2},
{q:"Who read the Queen's Proclamation at the Grand Darbar?",options:["Lord Dalhousie","Lord Canning","Lord Ripon","Lord Curzon"],answer:1},
{q:"Queen's Proclamation was announced on?",options:["1 November 1858","1 January 1858","10 May 1857","15 August 1858"],answer:0},
{q:"The Queen's Proclamation marked the beginning of?",options:["Company Rule","British Raj","Mughal Revival","Dual Government"],answer:1},
{q:"Which policy was abolished by the Queen's Proclamation?",options:["Permanent Settlement","Subsidiary Alliance","Doctrine of Lapse","Ryotwari System"],answer:2},
{q:"After 1858, the East India Company's army became part of the?",options:["French Army","Mughal Army","Government Army","Company Army"],answer:2},
{q:"In which district of Bengal did the Indigo Revolt start in 1859?",options:["Nadia district","Hooghly district","Murshidabad district","Burdwan district"],answer:0},
{q:"Who were the prominent leaders of the Indigo Revolt mentioned in the notes?",options:["Biswas Brothers","Tagore Brothers","Roy Brothers","Mitra Brothers"],answer:0},
{q:"Which newspaper was published by Haris Chandra Mukherjee to explain the plight of Indigo farmers?",options:["The Bengalee","Hindu Patriot","Amrita Bazar Patrika","Indian Mirror"],answer:1},
{q:"What is the popular name of Gandharva Narayan Mitra?",options:["Dinabandhu Mitra","Madhusudan Dutta","Haris Chandra","James Long"],answer:0},
{q:"What was the name of the famous drama written by Dinabandhu Mitra regarding the Indigo crisis?",options:["Anandamath","Nil Darpan","Gitanjali","Devdas"],answer:1},
{q:"Who translated the drama 'Nil Darpan' into English?",options:["James Long","Haris Chandra","Michael Madhusudan Dutta","Lord Canning"],answer:2},
{q:"In whose name was the English translation of 'Nil Darpan' published?",options:["Reverend James Long","Lord Stanley","Michael Madhusudan Dutta","Haris Chandra"],answer:0},
{q:"In which year did the Government set up the Indigo Commission?",options:["1858","1859","1860","1861"],answer:2},
{q:"What did the Indigo Commission declare regarding peasant farmers?",options:["They should pay double tax","They should cultivate more indigo","They should not be forced to cultivate indigo","They must leave Bengal"],answer:2},
{q:"Which act started the portfolio system in India?",options:["Government of India Act 1858","Indian Council Act 1861","Indigo Commission Act 1860","Regulating Act"],answer:1},
{q:"According to the Government of India Act 1858, how many members were in the executive council acting as an advisory body?",options:["2 members","4 members","5 members","15 members"],answer:1},
{q:"Under the Government of India Act 1861, how many members were in the executive council?",options:["3 members","4 members","5 members","6 members"],answer:2},
{q:"Which of the following portfolios was added as the 'New member' in the 1861 Executive Council?",options:["Military","Law","Revenue","Finance"],answer:3},
{q:"What was the actual official name of the Government of India Act 1858?",options:["Act for Good Government 1858","Indian Councils Act 1858","East India Company Abolition Act","The Charter Act 1858"],answer:0},
{q:"Which entity's rule officially ended in India due to the Government of India Act 1858?",options:["French East India Company","Mughal Empire","East India Company","Portuguese Empire"],answer:2},
{q:"Which body under the East India Company stayed in London and used to look after economics?",options:["Board of Control","Court of Directors","Indian Council","Executive Council"],answer:1},
{q:"Who was the last Governor-General of India under the East India Company?",options:["Lord Stanley","Lord Wellesley","Lord Canning","Lord Dalhousie"],answer:2},
{q:"Who was appointed as the first Viceroy of India after the 1858 Act?",options:["Lord Stanley","Lord Canning","James Long","Haris Chandra"],answer:1},
{q:"Who was the first Secretary of State for India, acting as a Cabinet minister in London?",options:["Lord Canning","Lord Stanley","Dinabandhu Mitra","James Long"],answer:1},
{q:"How many members were there in the 'Indian Council' created to assist the Secretary of State?",options:["5 members","10 members","15 members","20 members"],answer:2}

]
}
]
},
  geography: {
    name: "Geography",
    icon: "🌍",
    color: "#1D9E75",
    chapters: [] // Empty for now, ready for later!
  },
  english: {
    name: "English",
    icon: "✍️",
    color: "#EF9F27",
    chapters: [] // Empty for now, ready for later!
  }
}; // <-- Make sure to close the object brace here!

/* DATA (Your Chapters with questions) */

  
 
let activeSubject = null;
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
    // Added "subjects" to the screen array loop
    ["subjects", "home", "topics", "quiz", "result"].forEach(s => {
        const el = document.getElementById("screen-" + s);
        if (el) el.style.display = s === id ? "block" : "none";
    });
}

function goBackToSubjects() {
    activeSubject = null;
    activeChapter = null;
    
    // Reset navbar brand title back to default if you modified it
    const navTitle = document.getElementById("nav-title");
    if (navTitle) navTitle.innerHTML = `📚 Study<span>Quiz</span>`;
    
    renderSubjects();
    show("subjects");
    setBreadcrumb([{ label: "Home", active: true }]);
}

function goHome() {
    // If a subject context exists, home button drops you back to its chapter list
    if (activeSubject) {
        activeChapter = null;
        renderChapters();
        show("home");
        setBreadcrumb([
            { label: "Home", fn: "goBackToSubjects" }, 
            { label: SUBJECTS[activeSubject].name, active: true }
        ]);
    } else {
        goBackToSubjects();
    }
}

function setBreadcrumb(items) {
    const bc = document.getElementById("breadcrumb");
    if (!bc) return;
    bc.innerHTML = items.map((item, i) =>
        item.active ? `<span class="crumb active">${item.label}</span>` : `<span class="crumb" onclick="${item.fn}()">${item.label}</span><span class="sep">›</span>`
    ).join("");
}

//new section
function renderSubjects() {
    const grid = document.getElementById("subject-grid");
    if (!grid) return;
    grid.innerHTML = "";
    
    Object.keys(SUBJECTS).forEach(key => {
        const sub = SUBJECTS[key];
        const card = document.createElement("div");
        card.className = "chapter-card"; // Reuse styles perfectly
        card.innerHTML = `
            <div class="chapter-icon" style="background:${sub.color}22; color:${sub.color}">
                ${sub.icon}
            </div>
            <div class="chapter-name">${sub.name}</div>
            <div class="chapter-meta">${sub.chapters.length} Chapters available</div>
            <span class="chapter-arrow">→</span>
        `;
        card.onclick = () => selectSubject(key);
        grid.appendChild(card);
    });
}

function selectSubject(subjectKey) {
    activeSubject = subjectKey;
    const sub = SUBJECTS[subjectKey];
    
    // Optional: Update navbar brand title to match the subject context
    const navTitle = document.getElementById("nav-title");
    if (navTitle) navTitle.innerHTML = `${sub.icon} ${sub.name}<span>Quiz</span>`;
    
    renderChapters();
    show("home");
    setBreadcrumb([
        { label: "Home", fn: "goBackToSubjects" }, 
        { label: sub.name, active: true }
    ]);
}
/* ══════════════════════════════════════════
   3. CHAPTER & TOPIC RENDERING
══════════════════════════════════════════ */
function renderChapters() {
    const grid = document.getElementById("chapter-grid");
    if (!grid) return;
    grid.innerHTML = "";
    
    // Read directly from the currently active subject's database
    const currentChapters = SUBJECTS[activeSubject].chapters;
    
    if (currentChapters.length === 0) {
        grid.innerHTML = `<div class="screen-sub" style="grid-column: 1/-1;">No chapters uploaded for this subject yet!</div>`;
        return;
    }

    currentChapters.forEach(ch => {
        const card = document.createElement("div");
        card.className = "chapter-card";
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



function restartSameTopics() { startQuiz(); }

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.style.opacity = "1";
    setTimeout(() => { toast.style.opacity = "0"; }, 2000);
}

function showResults() {
    // CRITICAL FIX: Stop the active background timer interval immediately!
    stopTimer(); 

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
renderSubjects();
show("subjects");
setBreadcrumb([{ label: "Home", active: true }]);