

/* DATA (Your Chapters with questions) */
const SUBJECTS = [
  {
    id: "isat",
    name: "ISAT",
    icon: "📜",
    color: "#7F77DD",
    chapters: [
      {
        id: "isat",
        name: "Practise test",
        icon: "🏛️",
        color: "#7F77DD",
        desc: "Exam",
        questions: [
            {q:"Which statement, if true, most weakens the claim that online learning is always better than classroom learning?",options:["Many students perform better with face-to-face interaction","Online courses are available worldwide","Computers are becoming cheaper","Schools use digital tools"],answer:0,topic:"Critical Reasoning"},
{q:"A car travels 240 km in 4 hours. What is its average speed?",options:["50 km/h","55 km/h","60 km/h","65 km/h"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which organ pumps blood throughout the human body?",options:["Liver","Heart","Kidney","Lung"],answer:1,topic:"Biology"},
{q:"If all doctors are educated and some educated people are researchers, which conclusion must be true?",options:["All researchers are doctors","Some doctors are researchers","All doctors are educated","No doctors are researchers"],answer:2,topic:"Logic"},
{q:"Which gas is most abundant in Earth's atmosphere?",options:["Carbon dioxide","Nitrogen","Oxygen","Hydrogen"],answer:1,topic:"Science"},
{q:"A shop gives a 20% discount on a $150 jacket. What is the sale price?",options:["$110","$120","$130","$125"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which action best strengthens an argument?",options:["Adding unrelated facts","Providing supporting evidence","Changing the topic","Ignoring objections"],answer:1,topic:"Critical Reasoning"},
{q:"What is the largest planet in our Solar System?",options:["Earth","Saturn","Jupiter","Mars"],answer:2,topic:"Science"},
{q:"Which blood cells help fight infections?",options:["Red blood cells","White blood cells","Platelets","Plasma"],answer:1,topic:"Biology"},
{q:"If 8 workers finish a job in 15 days, how many days will 12 workers take at the same rate?",options:["12","10","8","15"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which statement is an opinion rather than a fact?",options:["Water boils at 100°C","The Earth revolves around the Sun","Summer is the best season","Humans need oxygen"],answer:2,topic:"Critical Reasoning"},
{q:"Which vitamin is mainly produced in the skin using sunlight?",options:["Vitamin A","Vitamin C","Vitamin D","Vitamin K"],answer:2,topic:"Biology"},
{q:"What is 25% of 320?",options:["70","75","80","90"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which conclusion follows logically? All birds have feathers. A sparrow is a bird.",options:["A sparrow can swim","A sparrow has feathers","A sparrow is a mammal","A sparrow cannot fly"],answer:1,topic:"Logic"},
{q:"Which planet is known as the Red Planet?",options:["Venus","Mars","Mercury","Neptune"],answer:1,topic:"Science"},
{q:"A train moves at 90 km/h. How far will it travel in 2.5 hours?",options:["200 km","210 km","225 km","250 km"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which statement best supports the importance of exercise?",options:["Exercise improves physical fitness","Exercise is difficult","Some people dislike sports","Gyms are expensive"],answer:0,topic:"Critical Reasoning"},
{q:"Which part of the plant carries water from roots to leaves?",options:["Phloem","Xylem","Flower","Leaf"],answer:1,topic:"Biology"},
{q:"If 5 pens cost $20, what is the cost of 8 pens?",options:["$30","$32","$36","$40"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which is a renewable source of energy?",options:["Coal","Natural gas","Solar energy","Petroleum"],answer:2,topic:"Science"},
{q:"Which statement is most likely based on evidence?",options:["Chocolate is the tastiest food","Research shows regular sleep improves memory","Blue is the best color","Everyone should own a pet"],answer:1,topic:"Critical Reasoning"},
{q:"The human brain is part of which body system?",options:["Digestive","Respiratory","Nervous","Circulatory"],answer:2,topic:"Biology"},
{q:"If x + 12 = 35, what is x?",options:["21","22","23","24"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet has the most prominent ring system?",options:["Earth","Saturn","Mars","Mercury"],answer:1,topic:"Science"},
{q:"Which option is the best assumption for a fair experiment?",options:["Changing several variables","Keeping all variables constant except one","Ignoring measurements","Guessing the result"],answer:1,topic:"Scientific Reasoning"},
{q:"A rectangle has length 12 cm and width 7 cm. What is its area?",options:["72 cm²","84 cm²","96 cm²","98 cm²"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which organ is mainly responsible for gas exchange?",options:["Heart","Lungs","Kidneys","Brain"],answer:1,topic:"Biology"},
{q:"If every athlete exercises daily and Mia is an athlete, what follows?",options:["Mia exercises daily","Mia is a doctor","Mia never runs","Mia dislikes sports"],answer:0,topic:"Logic"},
{q:"Which statement weakens the claim that all technology improves productivity?",options:["Some software is difficult to use","Technology is widely available","Computers are fast","Most offices have internet"],answer:0,topic:"Critical Reasoning"},
{q:"What is the square root of 144?",options:["10","11","12","13"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet is closest to the Sun?",options:["Venus","Mercury","Earth","Mars"],answer:1,topic:"Science"},
{q:"What carries oxygen in human blood?",options:["Platelets","Red blood cells","White blood cells","Plasma"],answer:1,topic:"Biology"},
{q:"If a product costs $80 after a 20% discount, what was its original price?",options:["$90","$95","$100","$120"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which statement is the strongest conclusion from repeated scientific experiments?",options:["It is always correct","It is supported by evidence","It is someone's opinion","It cannot be questioned"],answer:1,topic:"Scientific Reasoning"},
{q:"Which gas do plants absorb during photosynthesis?",options:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],answer:2,topic:"Biology"},
{q:"A book costs $24 after a 20% discount. What was the original price?",options:["$28","$30","$32","$36"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which statement best strengthens the argument that recycling should be encouraged?",options:["Recycling reduces landfill waste","Plastic is colorful","Some bins are expensive","Many people ignore rules"],answer:0,topic:"Critical Reasoning"},
{q:"Which blood vessel carries blood away from the heart?",options:["Vein","Artery","Capillary","Valve"],answer:1,topic:"Biology"},
{q:"What is 15% of 400?",options:["50","55","60","65"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet is famous for its Great Red Spot?",options:["Jupiter","Saturn","Venus","Mars"],answer:0,topic:"Science"},
{q:"If all engineers know mathematics and Ravi is an engineer, which statement must be true?",options:["Ravi teaches math","Ravi knows mathematics","Ravi is a scientist","Ravi dislikes numbers"],answer:1,topic:"Logic"},
{q:"Which statement most weakens the claim that longer meetings always improve teamwork?",options:["Some teams work better with shorter meetings","Meetings are common","Managers schedule meetings","Employees attend meetings"],answer:0,topic:"Critical Reasoning"},
{q:"How many minutes are there in 2.5 hours?",options:["120","130","140","150"],answer:3,topic:"Quantitative Reasoning"},
{q:"Which organ stores bile?",options:["Pancreas","Gallbladder","Kidney","Stomach"],answer:1,topic:"Biology"},
{q:"Which type of graph is best for showing changes over time?",options:["Pie chart","Line graph","Bar graph","Table"],answer:1,topic:"Data Interpretation"},
{q:"If a number is divisible by both 3 and 4, it must also be divisible by:",options:["6","8","12","24"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which statement is most likely a hypothesis?",options:["Plants need sunlight to grow","The experiment is complete","Plants may grow faster under blue light","The results are published"],answer:2,topic:"Scientific Reasoning"},
{q:"Which part of the eye controls the amount of light entering?",options:["Retina","Pupil","Cornea","Lens"],answer:1,topic:"Biology"},
{q:"A bag contains 5 red, 3 blue and 2 green balls. What is the probability of drawing a blue ball?",options:["1/2","3/10","2/5","1/5"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which statement provides the strongest evidence for a scientific claim?",options:["Personal opinion","One observation","Repeated experimental results","A rumor"],answer:2,topic:"Scientific Reasoning"},
{q:"Which statement best weakens the claim that increasing homework always improves academic performance?",options:["Some students improve with less homework","Homework is given every week","Teachers assign different subjects","Schools follow a curriculum"],answer:0,topic:"Critical Reasoning"},
{q:"A cyclist rides 180 km in 6 hours. What is the average speed?",options:["25 km/h","30 km/h","35 km/h","40 km/h"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which organ produces insulin?",options:["Liver","Pancreas","Kidney","Stomach"],answer:1,topic:"Biology"},
{q:"If all roses are flowers and all flowers are plants, which statement must be true?",options:["All plants are roses","All roses are plants","Some plants are roses","No flowers are plants"],answer:1,topic:"Logic"},
{q:"Which planet is known for having the longest day?",options:["Mercury","Venus","Mars","Jupiter"],answer:1,topic:"Science"},
{q:"A laptop priced at $800 is discounted by 15%. What is the sale price?",options:["$660","$680","$700","$720"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which statement provides the strongest support for banning plastic bags?",options:["Plastic bags come in many colors","Plastic pollution harms wildlife","People enjoy shopping","Paper bags are expensive"],answer:1,topic:"Critical Reasoning"},
{q:"Which part of the cell contains genetic material?",options:["Cell membrane","Nucleus","Cytoplasm","Ribosome"],answer:1,topic:"Biology"},
{q:"If 12 notebooks cost $48, what is the cost of 7 notebooks?",options:["$24","$26","$28","$30"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet is the smallest in the Solar System?",options:["Mars","Mercury","Venus","Earth"],answer:1,topic:"Science"},
{q:"Which statement is most likely a conclusion rather than evidence?",options:["Several experiments produced the same result","The data suggest the medicine is effective","Researchers collected 500 samples","The test was repeated three times"],answer:1,topic:"Critical Reasoning"},
{q:"Which vitamin helps blood clotting?",options:["Vitamin A","Vitamin C","Vitamin D","Vitamin K"],answer:3,topic:"Biology"},
{q:"What is 18% of 250?",options:["40","45","50","55"],answer:1,topic:"Quantitative Reasoning"},
{q:"If every musician is creative and Emma is a musician, what follows?",options:["Emma is famous","Emma is creative","Emma sings professionally","Emma teaches music"],answer:1,topic:"Logic"},
{q:"Which gas is released during photosynthesis?",options:["Carbon dioxide","Nitrogen","Oxygen","Hydrogen"],answer:2,topic:"Biology"},
{q:"A bus travels 420 km in 7 hours. What is its average speed?",options:["50 km/h","55 km/h","60 km/h","65 km/h"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which statement most weakens the argument that exams always measure intelligence?",options:["Many intelligent students perform poorly under stress","Exams are conducted every year","Students study before exams","Teachers prepare question papers"],answer:0,topic:"Critical Reasoning"},
{q:"Which planet has the largest number of known moons?",options:["Mars","Earth","Saturn","Mercury"],answer:2,topic:"Science"},
{q:"Which blood component helps in clotting?",options:["Plasma","Platelets","White blood cells","Red blood cells"],answer:1,topic:"Biology"},
{q:"If a shirt costs $45 after a 10% discount, what was its original price?",options:["$48","$49","$50","$52"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which statement best supports the idea that exercise benefits mental health?",options:["Research links exercise to reduced stress","Gyms are expensive","Sports require equipment","Many people exercise outdoors"],answer:0,topic:"Critical Reasoning"},
{q:"Which organ is responsible for filtering waste from blood?",options:["Lungs","Kidney","Heart","Liver"],answer:1,topic:"Biology"},
{q:"If x/5 = 18, what is x?",options:["80","85","90","95"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet has the strongest gravity?",options:["Earth","Jupiter","Neptune","Saturn"],answer:1,topic:"Science"},
{q:"A good scientific hypothesis should be:",options:["Impossible to test","Based only on opinions","Testable and measurable","Always correct"],answer:2,topic:"Scientific Reasoning"},
{q:"A rectangle has length 16 cm and width 9 cm. What is its perimeter?",options:["46 cm","48 cm","50 cm","52 cm"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which organ produces bile?",options:["Liver","Gallbladder","Pancreas","Stomach"],answer:0,topic:"Biology"},
{q:"If all artists are imaginative and Leo is an artist, which is true?",options:["Leo is imaginative","Leo paints landscapes","Leo is famous","Leo sells artwork"],answer:0,topic:"Logic"},
{q:"Which statement weakens the claim that technology reduces social interaction?",options:["Many people use technology to communicate daily","Technology is expensive","Computers require electricity","Phones need charging"],answer:0,topic:"Critical Reasoning"},
{q:"What is 35% of 200?",options:["60","65","70","75"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet is often called Earth's twin because of its size?",options:["Mars","Venus","Mercury","Neptune"],answer:1,topic:"Science"},
{q:"Which type of blood vessel has the thinnest walls?",options:["Arteries","Veins","Capillaries","Aorta"],answer:2,topic:"Biology"},
{q:"If a toy costs $72 after a 20% discount, what was the original price?",options:["$85","$88","$90","$95"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which statement provides the strongest evidence for climate change?",options:["Long-term temperature records","Personal opinions","Weather yesterday","A newspaper headline"],answer:0,topic:"Scientific Reasoning"},
{q:"Which organ helps maintain body balance?",options:["Cerebellum","Liver","Pancreas","Kidney"],answer:0,topic:"Biology"},
{q:"A class has 18 boys and 12 girls. What percentage of the class are girls?",options:["35%","40%","45%","50%"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which statement best strengthens the claim that reading improves vocabulary?",options:["Studies show frequent readers know more words","Books have colorful covers","Libraries are quiet","Reading takes time"],answer:0,topic:"Critical Reasoning"},
{q:"Which planet takes the longest time to orbit the Sun?",options:["Saturn","Jupiter","Neptune","Mars"],answer:2,topic:"Science"},
{q:"Which cell organelle produces energy?",options:["Nucleus","Mitochondria","Golgi body","Lysosome"],answer:1,topic:"Biology"},
{q:"If 4 machines produce 200 items in one hour, how many items will 6 machines produce?",options:["250","275","300","325"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which statement is most likely an inference?",options:["The experiment used 50 samples","The treatment may improve recovery","Data were collected daily","The graph contains four bars"],answer:1,topic:"Critical Reasoning"},
{q:"Which gas is essential for human respiration?",options:["Carbon dioxide","Nitrogen","Oxygen","Helium"],answer:2,topic:"Biology"},
{q:"What is the cube of 4?",options:["16","32","64","128"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which type of chart best compares values among categories?",options:["Line graph","Pie chart","Bar chart","Scatter plot"],answer:2,topic:"Data Interpretation"},
{q:"If all teachers are graduates and some graduates are writers, which statement must be true?",options:["Some teachers are writers","All teachers are graduates","All writers are teachers","No graduates are teachers"],answer:1,topic:"Logic"},
{q:"Which statement weakens the claim that electric cars produce no environmental impact?",options:["Battery production requires mining","Electric cars are quiet","Charging stations are increasing","Many countries encourage electric vehicles"],answer:0,topic:"Critical Reasoning"},
{q:"A number is increased by 25% to become 100. What was the original number?",options:["75","80","85","90"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which part of the digestive system absorbs most nutrients?",options:["Stomach","Small intestine","Large intestine","Esophagus"],answer:1,topic:"Biology"},
{q:"Which statement best describes a controlled experiment?",options:["Changing multiple variables","Testing one variable while keeping others constant","Guessing the outcome","Repeating without recording data"],answer:1,topic:"Scientific Reasoning"},
{q:"If a die is rolled once, what is the probability of getting an even number?",options:["1/2","1/3","1/4","2/3"],answer:0,topic:"Quantitative Reasoning"},
{q:"Which statement best weakens the claim that larger cities always provide a better quality of life?",options:["Many people prefer quieter rural areas","Cities have more buildings","Urban populations are increasing","Roads are often busy"],answer:0,topic:"Critical Reasoning"},
{q:"A train covers 360 km in 4.5 hours. What is its average speed?",options:["70 km/h","75 km/h","80 km/h","85 km/h"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which organ stores urine before it leaves the body?",options:["Kidney","Bladder","Liver","Pancreas"],answer:1,topic:"Biology"},
{q:"If all mammals are warm-blooded and whales are mammals, what must be true?",options:["Whales are fish","Whales are warm-blooded","All warm-blooded animals are whales","Whales lay eggs"],answer:1,topic:"Logic"},
{q:"Which planet is tilted on its side, causing unusual seasons?",options:["Neptune","Uranus","Saturn","Mars"],answer:1,topic:"Science"},
{q:"A television costing $1200 is discounted by 25%. What is the final price?",options:["$850","$900","$950","$1000"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which statement best supports the claim that public transport should be improved?",options:["Many commuters experience daily traffic congestion","Cars are available in different colors","Fuel prices change frequently","Roads are repaired every year"],answer:0,topic:"Critical Reasoning"},
{q:"Which part of a plant absorbs water from the soil?",options:["Stem","Leaves","Roots","Flowers"],answer:2,topic:"Biology"},
{q:"If 15 books cost $225, what is the cost of 8 books?",options:["$100","$110","$120","$130"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet has the highest average surface temperature?",options:["Mercury","Venus","Mars","Earth"],answer:1,topic:"Science"},
{q:"Which statement is based on measurable evidence?",options:["This restaurant is the best","The bridge is 2 km long","Blue is the nicest color","Summer feels happier"],answer:1,topic:"Critical Reasoning"},
{q:"Which mineral is essential for strong bones and teeth?",options:["Iron","Calcium","Potassium","Sodium"],answer:1,topic:"Biology"},
{q:"What is 40% of 250?",options:["90","95","100","105"],answer:2,topic:"Quantitative Reasoning"},
{q:"If every pilot has a license and Sarah is a pilot, which statement must be true?",options:["Sarah owns a plane","Sarah has a license","Sarah flies internationally","Sarah teaches flying"],answer:1,topic:"Logic"},
{q:"Which gas makes up about 21% of Earth's atmosphere?",options:["Nitrogen","Carbon dioxide","Oxygen","Argon"],answer:2,topic:"Science"},
{q:"A car travels 525 km in 7 hours. What is its average speed?",options:["70 km/h","72 km/h","75 km/h","78 km/h"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which statement weakens the claim that video games always reduce academic performance?",options:["Some gamers achieve excellent grades","Games are popular","Consoles are expensive","Students play on weekends"],answer:0,topic:"Critical Reasoning"},
{q:"Which blood type is known as the universal donor?",options:["AB+","O-","A+","B-"],answer:1,topic:"Biology"},
{q:"If a bicycle costs $360 after a 10% discount, what was the original price?",options:["$390","$395","$400","$405"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet has the shortest year?",options:["Mercury","Venus","Earth","Mars"],answer:0,topic:"Science"},
{q:"Which statement best supports the importance of vaccination?",options:["Vaccines help prevent infectious diseases","Hospitals treat many patients","Doctors study medicine","Medicine can be expensive"],answer:0,topic:"Critical Reasoning"},
{q:"Which organ controls voluntary muscle movement?",options:["Cerebellum","Heart","Liver","Kidney"],answer:0,topic:"Biology"},
{q:"If y - 17 = 45, what is y?",options:["60","61","62","63"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet is famous for its blue appearance due to methane?",options:["Mars","Mercury","Neptune","Venus"],answer:2,topic:"Science"},
{q:"A scientific theory is best described as:",options:["A random guess","A well-tested explanation","An opinion","A single observation"],answer:1,topic:"Scientific Reasoning"},
{q:"A rectangle has length 18 cm and width 5 cm. What is its area?",options:["80 cm²","85 cm²","90 cm²","95 cm²"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which organ produces digestive enzymes as well as insulin?",options:["Pancreas","Gallbladder","Liver","Small intestine"],answer:0,topic:"Biology"},
{q:"If all poets are writers and some writers are teachers, what must be true?",options:["Some poets are teachers","All poets are writers","All teachers are poets","No writers are teachers"],answer:1,topic:"Logic"},
{q:"Which statement weakens the claim that working from home always increases productivity?",options:["Some employees are distracted at home","Many companies use computers","Internet access is common","Meetings are held online"],answer:0,topic:"Critical Reasoning"},
{q:"What is 12.5% of 160?",options:["15","18","20","22"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet is the second largest in the Solar System?",options:["Jupiter","Saturn","Neptune","Earth"],answer:1,topic:"Science"},
{q:"Which chamber of the heart pumps oxygen-rich blood to the body?",options:["Right atrium","Left ventricle","Right ventricle","Left atrium"],answer:1,topic:"Biology"},
{q:"If a phone costs $680 after a 15% discount, what was the original price?",options:["$750","$780","$800","$820"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which evidence most strongly supports a scientific conclusion?",options:["One person's opinion","A repeated experiment with consistent results","A rumor","A single observation"],answer:1,topic:"Scientific Reasoning"},
{q:"Which part of the brain is responsible for thinking and reasoning?",options:["Cerebrum","Medulla","Cerebellum","Spinal cord"],answer:0,topic:"Biology"},
{q:"A class has 24 boys and 16 girls. What fraction of the class are girls?",options:["2/5","1/2","3/5","1/4"],answer:0,topic:"Quantitative Reasoning"},
{q:"Which statement best strengthens the claim that renewable energy should replace fossil fuels?",options:["Renewable energy reduces greenhouse gas emissions","Coal has been used for centuries","Oil prices fluctuate","Cars require maintenance"],answer:0,topic:"Critical Reasoning"},
{q:"Which planet has the most visible ring system?",options:["Mars","Saturn","Earth","Mercury"],answer:1,topic:"Science"},
{q:"Which blood vessels carry blood back to the heart?",options:["Arteries","Veins","Capillaries","Aorta"],answer:1,topic:"Biology"},
{q:"If 9 workers complete a project in 20 days, how many days will 12 workers need?",options:["12","14","15","18"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which statement is an inference rather than a direct observation?",options:["The solution changed color","The reaction may have produced heat","The thermometer read 25°C","The liquid was blue"],answer:1,topic:"Critical Reasoning"},
{q:"Which gas is primarily responsible for the greenhouse effect?",options:["Nitrogen","Carbon dioxide","Oxygen","Hydrogen"],answer:1,topic:"Science"},
{q:"What is the value of 9²?",options:["72","80","81","90"],answer:2,topic:"Quantitative Reasoning"},
{q:"If every engineer studies mathematics and John studies mathematics, which conclusion must be true?",options:["John is an engineer","John may be an engineer","John is not an engineer","No conclusion can be drawn"],answer:3,topic:"Logic"},
{q:"Which part of the digestive system begins chemical digestion?",options:["Stomach","Mouth","Small intestine","Esophagus"],answer:1,topic:"Biology"},
{q:"Which graph is most suitable for showing proportions of a whole?",options:["Line graph","Scatter plot","Pie chart","Histogram"],answer:2,topic:"Data Interpretation"},
{q:"Which statement most weakens the claim that high salaries always lead to job satisfaction?",options:["Many people value work-life balance more than salary","Companies pay salaries monthly","Managers supervise employees","Jobs require training"],answer:0,topic:"Critical Reasoning"},
{q:"A number is multiplied by 4 and becomes 196. What is the original number?",options:["46","47","48","49"],answer:3,topic:"Quantitative Reasoning"},
{q:"Which organ removes carbon dioxide from the bloodstream?",options:["Heart","Liver","Lungs","Kidneys"],answer:2,topic:"Biology"},
{q:"A fair coin is tossed twice. What is the probability of getting two heads?",options:["1/2","1/3","1/4","3/4"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which statement best weakens the claim that social media always improves communication?",options:["Some people feel more isolated despite using social media","Most smartphones have internet access","Social media apps are free","Many people own smartphones"],answer:0,topic:"Critical Reasoning"},
{q:"A bus travels 315 km in 4.5 hours. What is its average speed?",options:["65 km/h","70 km/h","75 km/h","80 km/h"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which organ is responsible for producing urine?",options:["Bladder","Kidney","Liver","Pancreas"],answer:1,topic:"Biology"},
{q:"If all reptiles are cold-blooded and snakes are reptiles, what must be true?",options:["Snakes are mammals","Snakes are cold-blooded","All cold-blooded animals are snakes","Snakes have fur"],answer:1,topic:"Logic"},
{q:"Which planet has the strongest winds in the Solar System?",options:["Saturn","Neptune","Mars","Venus"],answer:1,topic:"Science"},
{q:"A watch priced at $240 is sold at a 25% discount. What is the sale price?",options:["$170","$180","$190","$200"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which statement best supports building more public parks?",options:["Green spaces improve physical and mental well-being","Some parks charge entry fees","Parks require maintenance","Trees shed leaves"],answer:0,topic:"Critical Reasoning"},
{q:"Which part of the human eye focuses incoming light?",options:["Retina","Lens","Cornea","Pupil"],answer:1,topic:"Biology"},
{q:"If 20 pens cost $150, what is the cost of 12 pens?",options:["$85","$90","$95","$100"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which planet is farthest from the Sun?",options:["Uranus","Saturn","Neptune","Jupiter"],answer:2,topic:"Science"},
{q:"Which statement is a fact rather than an opinion?",options:["Chocolate is the best dessert","Mount Everest is the tallest mountain above sea level","Summer is the nicest season","Reading is the most enjoyable hobby"],answer:1,topic:"Critical Reasoning"},
{q:"Which vitamin is essential for healthy vision?",options:["Vitamin A","Vitamin B12","Vitamin C","Vitamin E"],answer:0,topic:"Biology"},
{q:"What is 45% of 400?",options:["160","170","180","190"],answer:2,topic:"Quantitative Reasoning"},
{q:"If every accountant understands mathematics and Priya is an accountant, what must be true?",options:["Priya teaches mathematics","Priya understands mathematics","Priya is an engineer","Priya owns a business"],answer:1,topic:"Logic"},
{q:"Which gas is most responsible for ozone layer formation?",options:["Oxygen","Hydrogen","Nitrogen","Carbon dioxide"],answer:0,topic:"Science"},
{q:"A truck covers 560 km in 8 hours. What is its average speed?",options:["65 km/h","68 km/h","70 km/h","72 km/h"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which statement weakens the claim that smartphones reduce productivity?",options:["Many people use smartphones for work and education","Smartphones are portable","Most phones have cameras","Phone batteries require charging"],answer:0,topic:"Critical Reasoning"},
{q:"Which blood group is known as the universal recipient?",options:["O-","AB+","A+","B+"],answer:1,topic:"Biology"},
{q:"If a bicycle costs $540 after a 10% discount, what was the original price?",options:["$580","$590","$600","$620"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet has the greatest mass?",options:["Earth","Saturn","Jupiter","Neptune"],answer:2,topic:"Science"},
{q:"Which statement best supports eating a balanced diet?",options:["Balanced diets provide essential nutrients","Healthy food is colorful","Restaurants serve many meals","Cooking takes time"],answer:0,topic:"Critical Reasoning"},
{q:"Which organ stores and concentrates bile?",options:["Liver","Gallbladder","Pancreas","Small intestine"],answer:1,topic:"Biology"},
{q:"If x + 38 = 91, what is x?",options:["51","52","53","54"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet rotates the fastest?",options:["Mars","Earth","Jupiter","Mercury"],answer:2,topic:"Science"},
{q:"A scientific model is mainly used to:",options:["Replace experiments permanently","Explain or predict observations","Prove every hypothesis true","Avoid collecting data"],answer:1,topic:"Scientific Reasoning"},
{q:"A square has a side length of 14 cm. What is its perimeter?",options:["52 cm","54 cm","56 cm","58 cm"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which organ helps regulate blood sugar levels by producing insulin?",options:["Liver","Pancreas","Kidney","Gallbladder"],answer:1,topic:"Biology"},
{q:"If all professors are graduates and Anita is a professor, which statement must be true?",options:["Anita is a graduate","Anita teaches science","Anita has a PhD","Anita is retired"],answer:0,topic:"Logic"},
{q:"Which statement weakens the argument that longer vacations always improve productivity?",options:["Some employees lose focus after long breaks","Vacations are enjoyable","Air travel is popular","Hotels are expensive"],answer:0,topic:"Critical Reasoning"},
{q:"What is 30% of 450?",options:["125","130","135","140"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet has the largest volcano in the Solar System?",options:["Mars","Venus","Earth","Mercury"],answer:0,topic:"Science"},
{q:"Which blood vessels carry oxygen-rich blood from the lungs to the heart?",options:["Pulmonary arteries","Pulmonary veins","Aorta","Capillaries"],answer:1,topic:"Biology"},
{q:"If a tablet costs $850 after a 15% discount, what was the original price?",options:["$980","$1000","$1020","$1050"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which evidence provides the strongest support for a scientific claim?",options:["A viral social media post","Independent experiments with consistent results","One person's opinion","A single observation"],answer:1,topic:"Scientific Reasoning"},
{q:"Which part of the brain controls heartbeat and breathing?",options:["Cerebrum","Medulla oblongata","Cerebellum","Hypothalamus"],answer:1,topic:"Biology"},
{q:"A class has 36 students, and 15 are boys. What fraction are girls?",options:["5/12","7/12","3/5","2/3"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which statement best strengthens the claim that libraries remain important today?",options:["Libraries provide free access to information","Books have different cover designs","Many people enjoy silence","Buildings require maintenance"],answer:0,topic:"Critical Reasoning"},
{q:"Which planet is known for its bright appearance in the night sky?",options:["Venus","Mars","Saturn","Neptune"],answer:0,topic:"Science"},
{q:"Which blood cells transport oxygen throughout the body?",options:["Platelets","Red blood cells","White blood cells","Plasma"],answer:1,topic:"Biology"},
{q:"If 14 workers complete a task in 12 days, how many days will 21 workers require?",options:["6","7","8","9"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which statement is an inference?",options:["The thermometer reads 30°C","The chemical reaction probably released energy","The liquid is blue","The experiment lasted 10 minutes"],answer:1,topic:"Critical Reasoning"},
{q:"Which gas is essential for combustion?",options:["Carbon dioxide","Nitrogen","Oxygen","Helium"],answer:2,topic:"Science"},
{q:"What is the value of 13 × 12?",options:["144","150","156","160"],answer:2,topic:"Quantitative Reasoning"},
{q:"If all lawyers are graduates and Rohan is a lawyer, what must be true?",options:["Rohan owns a law firm","Rohan is a graduate","Rohan is a judge","Rohan teaches law"],answer:1,topic:"Logic"},
{q:"Which organ absorbs most water from undigested food?",options:["Small intestine","Large intestine","Stomach","Esophagus"],answer:1,topic:"Biology"},
{q:"Which graph is most suitable for showing trends over several years?",options:["Pie chart","Line graph","Bar graph","Histogram"],answer:1,topic:"Data Interpretation"},
{q:"Which statement most weakens the claim that money is the only source of happiness?",options:["Many people value health and relationships more than wealth","People spend money every day","Banks store money safely","Currencies differ between countries"],answer:0,topic:"Critical Reasoning"},
{q:"A number is divided by 8 to get 24. What is the original number?",options:["180","184","192","196"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which organ removes excess water and salts from the blood?",options:["Heart","Kidney","Liver","Pancreas"],answer:1,topic:"Biology"},
{q:"A bag contains 8 red, 5 blue, and 7 green balls. What is the probability of drawing a green ball?",options:["5/20","7/20","8/20","12/20"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which statement best weakens the claim that artificial intelligence will replace all human jobs?",options:["Many jobs require creativity and emotional intelligence","Computers process data quickly","AI is used in many industries","Technology continues to improve"],answer:0,topic:"Critical Reasoning"},
{q:"A train travels 540 km in 6 hours. What is its average speed?",options:["80 km/h","85 km/h","90 km/h","95 km/h"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which organ is primarily responsible for detoxifying harmful substances in the body?",options:["Kidney","Liver","Heart","Pancreas"],answer:1,topic:"Biology"},
{q:"If all engineers are graduates and all graduates are educated, what must be true?",options:["All educated people are engineers","All engineers are educated","Some graduates are engineers","No engineers are graduates"],answer:1,topic:"Logic"},
{q:"Which planet has the largest diameter?",options:["Earth","Jupiter","Saturn","Neptune"],answer:1,topic:"Science"},
{q:"A jacket costing $320 is sold with a 15% discount. What is the sale price?",options:["$262","$272","$282","$292"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which statement best supports building more bicycle lanes?",options:["Cycling reduces traffic congestion and pollution","Bicycles come in different colors","Roads need maintenance","Cars travel faster"],answer:0,topic:"Critical Reasoning"},
{q:"Which part of the digestive system is responsible for most nutrient absorption?",options:["Stomach","Small intestine","Large intestine","Esophagus"],answer:1,topic:"Biology"},
{q:"If 18 notebooks cost $126, what is the cost of 10 notebooks?",options:["$65","$70","$75","$80"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which planet is often called the 'Morning Star'?",options:["Mars","Venus","Mercury","Saturn"],answer:1,topic:"Science"},
{q:"Which statement is based on scientific evidence?",options:["Exercise reduces the risk of heart disease","Summer is the happiest season","Blue is the best color","Coffee tastes better than tea"],answer:0,topic:"Critical Reasoning"},
{q:"Which vitamin helps the body absorb calcium?",options:["Vitamin A","Vitamin D","Vitamin C","Vitamin B12"],answer:1,topic:"Biology"},
{q:"What is 35% of 600?",options:["180","190","200","210"],answer:3,topic:"Quantitative Reasoning"},
{q:"If every scientist is curious and Maya is a scientist, what must be true?",options:["Maya is curious","Maya is famous","Maya works in a laboratory","Maya teaches science"],answer:0,topic:"Logic"},
{q:"Which gas is produced during respiration?",options:["Oxygen","Hydrogen","Carbon dioxide","Nitrogen"],answer:2,topic:"Biology"},
{q:"A plane flies 1800 km in 2.5 hours. What is its average speed?",options:["680 km/h","700 km/h","720 km/h","740 km/h"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which statement weakens the claim that electric vehicles completely eliminate pollution?",options:["Electricity generation may still produce emissions","Electric cars are quiet","Many countries promote EVs","Charging stations are increasing"],answer:0,topic:"Critical Reasoning"},
{q:"Which blood cells are responsible for carrying oxygen?",options:["White blood cells","Platelets","Red blood cells","Plasma"],answer:2,topic:"Biology"},
{q:"If a television costs $765 after a 15% discount, what was its original price?",options:["$850","$880","$900","$920"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet has the shortest rotation period?",options:["Earth","Mars","Jupiter","Saturn"],answer:2,topic:"Science"},
{q:"Which statement best supports the importance of sleep?",options:["Adequate sleep improves memory and concentration","Beds are available in many sizes","People sleep at night","Dreams can be interesting"],answer:0,topic:"Critical Reasoning"},
{q:"Which organ produces red blood cells in adults?",options:["Bone marrow","Liver","Kidney","Heart"],answer:0,topic:"Biology"},
{q:"If x × 7 = 343, what is x?",options:["47","48","49","50"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet is known for its thick atmosphere of carbon dioxide?",options:["Earth","Venus","Mars","Mercury"],answer:1,topic:"Science"},
{q:"Which characteristic is essential for a scientific experiment?",options:["Random guessing","Repeatability","Ignoring data","Changing all variables"],answer:1,topic:"Scientific Reasoning"},
{q:"A triangle has sides of 6 cm, 8 cm, and 10 cm. What type of triangle is it?",options:["Equilateral","Isosceles","Right-angled","Obtuse"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which organ stores glucose in the form of glycogen?",options:["Liver","Pancreas","Heart","Kidney"],answer:0,topic:"Biology"},
{q:"If all musicians are artists and Alex is a musician, what must be true?",options:["Alex paints pictures","Alex is an artist","Alex sings professionally","Alex owns a guitar"],answer:1,topic:"Logic"},
{q:"Which statement weakens the argument that higher salaries always increase motivation?",options:["Many employees value recognition more than money","Companies pay salaries monthly","Managers evaluate workers","Bonuses are common"],answer:0,topic:"Critical Reasoning"},
{q:"What is 22% of 500?",options:["100","105","110","115"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet has the coldest average temperature?",options:["Mars","Neptune","Uranus","Saturn"],answer:2,topic:"Science"},
{q:"Which part of the heart receives oxygen-rich blood from the lungs?",options:["Right atrium","Left atrium","Right ventricle","Left ventricle"],answer:1,topic:"Biology"},
{q:"If a mobile phone costs $595 after a 15% discount, what was the original price?",options:["$680","$690","$700","$710"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which type of evidence is most reliable in science?",options:["A personal opinion","A newspaper article","Peer-reviewed experimental results","A social media post"],answer:2,topic:"Scientific Reasoning"},
{q:"Which part of the nervous system connects the brain to the rest of the body?",options:["Spinal cord","Heart","Liver","Lungs"],answer:0,topic:"Biology"},
{q:"A class has 50 students. If 18 are girls, what percentage are boys?",options:["60%","62%","64%","68%"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which statement best strengthens the argument that forests should be protected?",options:["Forests support biodiversity and regulate climate","Trees are tall","Wood is useful","Forests attract tourists"],answer:0,topic:"Critical Reasoning"},
{q:"Which planet has the highest number of confirmed moons?",options:["Jupiter","Saturn","Earth","Mars"],answer:1,topic:"Science"},
{q:"Which blood vessel carries oxygen-rich blood from the heart to the body?",options:["Vein","Aorta","Capillary","Pulmonary vein"],answer:1,topic:"Biology"},
{q:"If 24 workers complete a job in 10 days, how many days will 15 workers need?",options:["14","15","16","18"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which statement is an inference?",options:["The water boiled at 100°C","The experiment suggests the fertilizer improved growth","The plant was 15 cm tall","The leaves were green"],answer:1,topic:"Critical Reasoning"},
{q:"Which gas is used by plants during photosynthesis?",options:["Oxygen","Carbon dioxide","Nitrogen","Helium"],answer:1,topic:"Science"},
{q:"What is the value of 17 × 9?",options:["143","153","163","173"],answer:1,topic:"Quantitative Reasoning"},
{q:"If all chefs can cook and David is a chef, what must be true?",options:["David owns a restaurant","David can cook","David is famous","David teaches cooking"],answer:1,topic:"Logic"},
{q:"Which organ secretes hydrochloric acid during digestion?",options:["Liver","Stomach","Pancreas","Small intestine"],answer:1,topic:"Biology"},
{q:"Which graph is best for comparing the population of different countries?",options:["Pie chart","Bar graph","Line graph","Scatter plot"],answer:1,topic:"Data Interpretation"},
{q:"Which statement most weakens the claim that expensive schools always provide better education?",options:["Many low-cost schools achieve excellent academic results","Private schools charge higher fees","School buildings differ in size","Students wear uniforms"],answer:0,topic:"Critical Reasoning"},
{q:"A number multiplied by 9 equals 567. What is the number?",options:["61","62","63","64"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which organ filters approximately 180 liters of blood-derived fluid daily?",options:["Liver","Kidney","Heart","Pancreas"],answer:1,topic:"Biology"},
{q:"A box contains 6 red, 9 blue, and 5 yellow balls. What is the probability of drawing a yellow ball?",options:["5/20","6/20","9/20","11/20"],answer:0,topic:"Quantitative Reasoning"},
{q:"Which statement best weakens the claim that working longer hours always increases productivity?",options:["Tired employees often make more mistakes","Most offices open at 9 a.m.","Many companies use computers","Managers assign daily tasks"],answer:0,topic:"Critical Reasoning"},
{q:"A car travels 450 km in 5 hours. What is its average speed?",options:["80 km/h","85 km/h","90 km/h","95 km/h"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which organ produces bile for digestion?",options:["Gallbladder","Pancreas","Liver","Stomach"],answer:2,topic:"Biology"},
{q:"If all teachers are educated and Priya is a teacher, what must be true?",options:["Priya is educated","Priya is a principal","Priya teaches mathematics","Priya has a PhD"],answer:0,topic:"Logic"},
{q:"Which planet is called the Blue Planet?",options:["Neptune","Earth","Uranus","Venus"],answer:1,topic:"Science"},
{q:"A bicycle costs $480 and is sold with a 20% discount. What is the sale price?",options:["$364","$374","$384","$394"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which statement best supports planting more trees in cities?",options:["Trees improve air quality and provide shade","Trees lose leaves in autumn","Many parks have benches","Wood is useful for furniture"],answer:0,topic:"Critical Reasoning"},
{q:"Which part of the body contains alveoli?",options:["Heart","Lungs","Kidneys","Liver"],answer:1,topic:"Biology"},
{q:"If 16 pencils cost $64, what is the cost of 9 pencils?",options:["$32","$34","$36","$38"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet is famous for Olympus Mons?",options:["Mars","Venus","Earth","Mercury"],answer:0,topic:"Science"},
{q:"Which statement is a scientific observation?",options:["The liquid turned blue after heating","This chemical is dangerous","The experiment was exciting","The result was surprising"],answer:0,topic:"Scientific Reasoning"},
{q:"Which mineral is essential for making hemoglobin?",options:["Iron","Calcium","Zinc","Sodium"],answer:0,topic:"Biology"},
{q:"What is 15% of 800?",options:["100","110","120","130"],answer:2,topic:"Quantitative Reasoning"},
{q:"If every doctor is licensed and Rahul is a doctor, what must be true?",options:["Rahul owns a hospital","Rahul is licensed","Rahul is wealthy","Rahul is a surgeon"],answer:1,topic:"Logic"},
{q:"Which gas is released by green plants during photosynthesis?",options:["Carbon dioxide","Nitrogen","Hydrogen","Oxygen"],answer:3,topic:"Biology"},
{q:"A bus travels 390 km in 6 hours. What is its average speed?",options:["60 km/h","62 km/h","65 km/h","68 km/h"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which statement weakens the claim that school uniforms always improve discipline?",options:["Some schools without uniforms report excellent discipline","Uniforms are available in many sizes","Students wear uniforms daily","Schools have dress codes"],answer:0,topic:"Critical Reasoning"},
{q:"Which blood cells produce antibodies?",options:["Red blood cells","White blood cells","Platelets","Plasma"],answer:1,topic:"Biology"},
{q:"If a computer costs $1020 after a 15% discount, what was its original price?",options:["$1150","$1180","$1200","$1250"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet has the highest gravity among the terrestrial planets?",options:["Mars","Earth","Venus","Mercury"],answer:1,topic:"Science"},
{q:"Which statement best supports the importance of regular exercise?",options:["Exercise reduces the risk of many diseases","Gyms sell sports equipment","Many people enjoy walking","Exercise clothes are colorful"],answer:0,topic:"Critical Reasoning"},
{q:"Which organ stores excess glucose as glycogen?",options:["Heart","Liver","Kidney","Lung"],answer:1,topic:"Biology"},
{q:"If y × 9 = 441, what is y?",options:["47","48","49","50"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet has the longest orbital period around the Sun?",options:["Saturn","Uranus","Neptune","Jupiter"],answer:2,topic:"Science"},
{q:"Which feature is essential in a fair scientific experiment?",options:["Changing several variables","Using a control group","Ignoring unusual results","Predicting the outcome"],answer:1,topic:"Scientific Reasoning"},
{q:"A square has an area of 196 cm². What is the length of one side?",options:["12 cm","13 cm","14 cm","15 cm"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which organ produces digestive juices containing enzymes?",options:["Pancreas","Gallbladder","Liver","Spleen"],answer:0,topic:"Biology"},
{q:"If all programmers understand coding and Mia is a programmer, what must be true?",options:["Mia develops games","Mia understands coding","Mia works remotely","Mia is a teacher"],answer:1,topic:"Logic"},
{q:"Which statement weakens the argument that online shopping is always cheaper?",options:["Shipping fees can increase the final price","Online stores are open 24 hours","Many people shop online","Websites offer discounts"],answer:0,topic:"Critical Reasoning"},
{q:"What is 18% of 450?",options:["78","80","81","84"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which planet has the greatest number of visible rings?",options:["Jupiter","Saturn","Neptune","Uranus"],answer:1,topic:"Science"},
{q:"Which chamber pumps oxygen-poor blood to the lungs?",options:["Left atrium","Right ventricle","Left ventricle","Right atrium"],answer:1,topic:"Biology"},
{q:"If a laptop costs $1360 after a 15% discount, what was its original price?",options:["$1550","$1580","$1600","$1650"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which evidence is most reliable for a scientific conclusion?",options:["One experiment","A friend's opinion","Repeated peer-reviewed studies","A newspaper article"],answer:2,topic:"Scientific Reasoning"},
{q:"Which part of the nervous system controls voluntary movement?",options:["Medulla","Cerebrum","Spinal cord","Brain stem"],answer:1,topic:"Biology"},
{q:"A class has 45 students. If 18 are girls, what percentage are girls?",options:["35%","40%","45%","50%"],answer:1,topic:"Quantitative Reasoning"},
{q:"Which statement best strengthens the argument that recycling is beneficial?",options:["Recycling conserves natural resources","Plastic comes in many colors","Recycling bins are expensive","People throw away waste"],answer:0,topic:"Critical Reasoning"},
{q:"Which planet has the fastest winds ever recorded?",options:["Saturn","Neptune","Mars","Venus"],answer:1,topic:"Science"},
{q:"Which blood vessel carries deoxygenated blood from the heart to the lungs?",options:["Pulmonary vein","Pulmonary artery","Aorta","Vena cava"],answer:1,topic:"Biology"},
{q:"If 30 workers finish a project in 12 days, how many days will 20 workers need?",options:["16","17","18","20"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which statement is an inference?",options:["The solution may contain acid","The solution turned red","The temperature reached 80°C","The mass was 25 g"],answer:0,topic:"Critical Reasoning"},
{q:"Which gas is most abundant in dry air?",options:["Oxygen","Nitrogen","Carbon dioxide","Argon"],answer:1,topic:"Science"},
{q:"What is the value of 18 × 14?",options:["242","252","262","272"],answer:1,topic:"Quantitative Reasoning"},
{q:"If all lawyers know the law and Arjun is a lawyer, what must be true?",options:["Arjun is a judge","Arjun knows the law","Arjun works in court","Arjun is wealthy"],answer:1,topic:"Logic"},
{q:"Which organ begins protein digestion?",options:["Small intestine","Stomach","Mouth","Large intestine"],answer:1,topic:"Biology"},
{q:"Which graph is most suitable for showing monthly sales over one year?",options:["Pie chart","Bar graph","Line graph","Scatter plot"],answer:2,topic:"Data Interpretation"},
{q:"Which statement most weakens the claim that expensive medicines are always more effective?",options:["Many low-cost generic medicines work equally well","Medicines are sold in pharmacies","Doctors prescribe medicines","Drug companies advertise products"],answer:0,topic:"Critical Reasoning"},
{q:"A number divided by 12 equals 36. What is the number?",options:["420","426","432","438"],answer:2,topic:"Quantitative Reasoning"},
{q:"Which organ helps regulate water balance by producing urine?",options:["Kidney","Heart","Liver","Pancreas"],answer:0,topic:"Biology"},
{q:"A bag contains 4 red, 6 blue, and 10 green balls. What is the probability of drawing a blue ball?",options:["1/5","3/10","2/5","1/2"],answer:1,topic:"Quantitative Reasoning"}
        ]
      }
    ]
  }
];

/* DATA (Your Chapters with questions) */
let activeSubject = null;
let activeChapter = null;
let selectedTopics = new Set();
let quizQuestions = [];
let cQ = 0, score = 0, streak = 0, attempted = 0;
let answered = [];
let mistakeTracker = [];

/* ══════════════════════════════════════════
   2. NAVIGTION & BREADCRUMBS
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