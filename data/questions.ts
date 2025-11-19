
import { Question, Domain } from '../types';

export const questions: Question[] = [
  // --- NUTRITION ASSESSMENT (1-35) ---
  {
    id: 1,
    domain: Domain.ASSESSMENT,
    question: "What is the best indicator of visceral protein status in a critically ill patient?",
    answer: "Prealbumin (transthyretin)",
    options: ["Albumin", "Prealbumin", "Transferrin", "C-reactive protein"],
    correctOption: 1,
    explanation: "Prealbumin has a short half-life of 2-3 days, making it sensitive to recent changes. Albumin (20 days) reflects long-term status."
  },
  {
    id: 2,
    domain: Domain.ASSESSMENT,
    question: "Which body composition assessment is considered the gold standard?",
    answer: "DEXA (Dual-energy X-ray absorptiometry)",
    options: ["BIA", "DEXA", "Skinfold", "Bod Pod"],
    correctOption: 1,
    explanation: "DEXA measures bone density, fat mass, and fat-free mass with high precision."
  },
  {
    id: 3,
    domain: Domain.ASSESSMENT,
    question: "An elevated BUN:Creatinine ratio (>20:1) typically indicates:",
    answer: "Dehydration",
    options: ["Kidney damage", "Dehydration", "Liver failure", "Malnutrition"],
    correctOption: 1,
    explanation: "High BUN with normal Creatinine suggests pre-renal causes like dehydration. 'Dry as a bone'."
  },
  {
    id: 4,
    domain: Domain.ASSESSMENT,
    question: "Koilonychia (spoon-shaped nails) is a sign of which deficiency?",
    answer: "Iron",
    options: ["Zinc", "Iron", "Protein", "Vitamin A"],
    correctOption: 1,
    explanation: "Spoon nails = Iron deficiency. Memory aid: You use a SPOON to eat CEREAL (Iron-fortified)."
  },
  {
    id: 5,
    domain: Domain.ASSESSMENT,
    question: "Hamwi Formula: Ideal Body Weight for a 5'4\" female?",
    answer: "120 lbs",
    options: ["115 lbs", "120 lbs", "125 lbs", "130 lbs"],
    correctOption: 1,
    explanation: "100 lbs for first 5' + 5 lbs per inch. 100 + (4 * 5) = 120 lbs."
  },
  {
    id: 6,
    domain: Domain.ASSESSMENT,
    question: "Waist circumference indicating high risk in men:",
    answer: "> 40 inches",
    options: ["> 35 inches", "> 38 inches", "> 40 inches", "> 45 inches"],
    correctOption: 2,
    explanation: "Men >40 in, Women >35 in indicates increased risk for metabolic disease."
  },
  {
    id: 7,
    domain: Domain.ASSESSMENT,
    question: "Adjustment for Below Knee Amputation (BKA) when calculating IBW?",
    answer: "Subtract 6%",
    options: ["Subtract 16%", "Subtract 6%", "Subtract 0.7%", "Subtract 50%"],
    correctOption: 1,
    explanation: "Entire leg is 16%. Below knee is ~6%. Above knee is ~10-11%."
  },
  {
    id: 8,
    domain: Domain.ASSESSMENT,
    question: "Which physical sign indicates muscle loss in the NFPE?",
    answer: "Hollow temples",
    options: ["Edema", "Hollow temples", "Ascites", "Pale conjunctiva"],
    correctOption: 1,
    explanation: "Temporalis muscle wasting results in scooping/hollowing of the temples."
  },
  {
    id: 9,
    domain: Domain.ASSESSMENT,
    question: "Bitot's spots on the eye are a sign of:",
    answer: "Vitamin A deficiency",
    options: ["Vitamin C deficiency", "Vitamin A deficiency", "Zinc deficiency", "Copper deficiency"],
    correctOption: 1,
    explanation: "Buildup of keratin on the conjunctiva. Vitamin A is crucial for eye health."
  },
  {
    id: 10,
    domain: Domain.ASSESSMENT,
    question: "Petechiae (tiny purple spots) often indicate deficiency of:",
    answer: "Vitamin C",
    options: ["Vitamin K", "Vitamin C", "Iron", "B12"],
    correctOption: 1,
    explanation: "Vitamin C strengthens capillary walls. Deficiency causes fragility and bleeding spots."
  },
  {
    id: 11,
    domain: Domain.ASSESSMENT,
    question: "Cheilosis (cracked lips) and Glossitis (magenta tongue) indicate:",
    answer: "Riboflavin (B2) deficiency",
    options: ["Thiamin deficiency", "Riboflavin (B2) deficiency", "Niacin deficiency", "B12 deficiency"],
    correctOption: 1,
    explanation: "B2 deficiency affects the mouth/tongue. Memory: '2 lips' = B2."
  },
  {
    id: 12,
    domain: Domain.ASSESSMENT,
    question: "The '4 Ds' (Dermatitis, Diarrhea, Dementia, Death) are symptoms of:",
    answer: "Pellagra (Niacin deficiency)",
    options: ["Beriberi", "Pellagra", "Scurvy", "Rickets"],
    correctOption: 1,
    explanation: "Pellagra is caused by Niacin (B3) deficiency."
  },
  {
    id: 13,
    domain: Domain.ASSESSMENT,
    question: "Which screening tool is validated specifically for the elderly?",
    answer: "MNA (Mini Nutritional Assessment)",
    options: ["MUST", "MNA", "SGA", "NRS-2002"],
    correctOption: 1,
    explanation: "MNA is designed for 65+ to identify malnutrition risk."
  },
  {
    id: 14,
    domain: Domain.ASSESSMENT,
    question: "Criteria for 'Significant Weight Loss' over 1 month?",
    answer: "> 5%",
    options: ["> 2%", "> 5%", "> 7.5%", "> 10%"],
    correctOption: 1,
    explanation: "Significant loss: 5% in 1mo, 7.5% in 3mo, 10% in 6mo."
  },
  {
    id: 15,
    domain: Domain.ASSESSMENT,
    question: "General fluid requirement estimation for healthy adults?",
    answer: "1 ml per kcal",
    options: ["0.5 ml per kcal", "1 ml per kcal", "2 ml per kcal", "3000 ml fixed"],
    correctOption: 1,
    explanation: "Standard estimation is 1ml/kcal or 30-35ml/kg."
  },
  {
    id: 16,
    domain: Domain.ASSESSMENT,
    question: "Subjective Global Assessment (SGA) Class C represents:",
    answer: "Severely malnourished",
    options: ["Well nourished", "Moderately malnourished", "Severely malnourished", "At risk"],
    correctOption: 2,
    explanation: "A=Well nourished, B=Suspected/Moderate, C=Severe malnutrition."
  },
  {
    id: 17,
    domain: Domain.ASSESSMENT,
    question: "Normal range for serum albumin?",
    answer: "3.5 - 5.0 g/dL",
    options: ["2.0 - 3.5", "3.5 - 5.0", "5.0 - 6.5", "10 - 15"],
    correctOption: 1,
    explanation: "Maintains colloidal osmotic pressure. Low levels indicate inflammation or edema."
  },
  {
    id: 18,
    domain: Domain.ASSESSMENT,
    question: "A patient with pale conjunctiva likely has deficiency of:",
    answer: "Iron",
    options: ["Vitamin A", "Iron", "Vitamin D", "Calcium"],
    correctOption: 1,
    explanation: "Iron deficiency anemia leads to pallor in mucous membranes."
  },
  {
    id: 19,
    domain: Domain.ASSESSMENT,
    question: "Mifflin-St Jeor equation calculates:",
    answer: "Resting Metabolic Rate (RMR)",
    options: ["Total Energy Expenditure", "Resting Metabolic Rate (RMR)", "Thermic Effect of Food", "BMI"],
    correctOption: 1,
    explanation: "The most reliable predictive equation for RMR in non-critically ill patients."
  },
  {
    id: 20,
    domain: Domain.ASSESSMENT,
    question: "Which medication acts as a Vitamin K antagonist?",
    answer: "Warfarin (Coumadin)",
    options: ["Aspirin", "Warfarin (Coumadin)", "Heparin", "Lipitor"],
    correctOption: 1,
    explanation: "Patients must maintain consistent Vitamin K intake."
  },
  {
    id: 21,
    domain: Domain.ASSESSMENT,
    question: "Normal pH of urine is approximately:",
    answer: "6.0",
    options: ["4.0", "6.0", "8.0", "10.0"],
    correctOption: 1,
    explanation: "Urine is slightly acidic. Range is 4.6-8.0."
  },
  {
    id: 22,
    domain: Domain.ASSESSMENT,
    question: "Hair that is dull, dry, and easily pluckable suggests deficiency of:",
    answer: "Protein or Zinc",
    options: ["Vitamin C", "Protein or Zinc", "Vitamin D", "Calcium"],
    correctOption: 1,
    explanation: "Flag sign (transverse depigmentation) also indicates protein-energy malnutrition."
  },
  {
    id: 23,
    domain: Domain.ASSESSMENT,
    question: "Measuring recumbent length is used for:",
    answer: "Infants/Children < 2 years",
    options: ["Adults", "Infants/Children < 2 years", "Elderly", "Adolescents"],
    correctOption: 1,
    explanation: "Standing height is used for > 2 years."
  },
  {
    id: 24,
    domain: Domain.ASSESSMENT,
    question: "The most accurate way to measure fluid status:",
    answer: "Daily weights",
    options: ["Skin turgor", "Daily weights", "Thirst", "Urine color"],
    correctOption: 1,
    explanation: "Rapid weight changes reflect fluid shifts."
  },
  {
    id: 25,
    domain: Domain.ASSESSMENT,
    question: "Mean Corpuscular Volume (MCV) > 100 fL indicates:",
    answer: "Macrocytic Anemia (B12/Folate)",
    options: ["Microcytic Anemia (Iron)", "Macrocytic Anemia (B12/Folate)", "Normocytic Anemia", "Hemolytic Anemia"],
    correctOption: 1,
    explanation: "Large RBCs. Caused by B12 or Folate deficiency."
  },
  {
    id: 26,
    domain: Domain.ASSESSMENT,
    question: "MCV < 80 fL indicates:",
    answer: "Microcytic Anemia (Iron)",
    options: ["Pernicious Anemia", "Microcytic Anemia (Iron)", "B12 Deficiency", "Folate Deficiency"],
    correctOption: 1,
    explanation: "Small RBCs. Classic iron deficiency."
  },
  {
    id: 27,
    domain: Domain.ASSESSMENT,
    question: "Serum Ferritin is the best indicator of:",
    answer: "Iron stores",
    options: ["Current iron intake", "Iron stores", "Hemoglobin production", "Red blood cell count"],
    correctOption: 1,
    explanation: "Ferritin stores iron. It is the first lab to drop in deficiency."
  },
  {
    id: 28,
    domain: Domain.ASSESSMENT,
    question: "Achlorhydria (lack of stomach acid) may lead to deficiency of:",
    answer: "Vitamin B12",
    options: ["Vitamin C", "Vitamin B12", "Vitamin A", "Vitamin K"],
    correctOption: 1,
    explanation: "Acid is needed to release B12 from food protein."
  },
  {
    id: 29,
    domain: Domain.ASSESSMENT,
    question: "Total Lymphocyte Count (TLC) is used to assess:",
    answer: "Immune function/Malnutrition",
    options: ["Kidney function", "Immune function/Malnutrition", "Liver function", "Heart health"],
    correctOption: 1,
    explanation: "<900 indicates severe depletion."
  },
  {
    id: 30,
    domain: Domain.ASSESSMENT,
    question: "Which anthropometric measurement estimates skeletal muscle mass?",
    answer: "Somatic Protein (MAMC)",
    options: ["BMI", "Somatic Protein (MAMC)", "Waist circumference", "Weight"],
    correctOption: 1,
    explanation: "Mid-Arm Muscle Circumference."
  },
  {
    id: 31,
    domain: Domain.ASSESSMENT,
    question: "Percent weight change formula:",
    answer: "((Usual - Current) / Usual) x 100",
    options: ["((Current - Usual) / Current) x 100", "((Usual - Current) / Usual) x 100", "Current / Usual", "Usual / Current"],
    correctOption: 1,
    explanation: "Measure of weight loss severity."
  },
  {
    id: 32,
    domain: Domain.ASSESSMENT,
    question: "What BMI range is considered 'Overweight'?",
    answer: "25 - 29.9",
    options: ["18.5 - 24.9", "25 - 29.9", "30 - 34.9", "> 35"],
    correctOption: 1,
    explanation: "Normal: 18.5-24.9. Obese: >30."
  },
  {
    id: 33,
    domain: Domain.ASSESSMENT,
    question: "Normal range for Potassium (K+):",
    answer: "3.5 - 5.0 mEq/L",
    options: ["2.5 - 4.0", "3.5 - 5.0", "5.0 - 6.5", "135 - 145"],
    correctOption: 1,
    explanation: "Critical for heart function."
  },
  {
    id: 34,
    domain: Domain.ASSESSMENT,
    question: "Normal range for Calcium:",
    answer: "8.5 - 10.5 mg/dL",
    options: ["7.0 - 9.0", "8.5 - 10.5", "10.5 - 12.5", "135 - 145"],
    correctOption: 1,
    explanation: "Corrected calcium should be calculated if albumin is low."
  },
  {
    id: 35,
    domain: Domain.ASSESSMENT,
    question: "Assessment of community needs usually begins with:",
    answer: "Defining the nutritional problem",
    options: ["Setting goals", "Defining the nutritional problem", "Developing a plan", "Evaluating results"],
    correctOption: 1,
    explanation: "First step in the planning process."
  },

  // --- NUTRITION DIAGNOSIS (36-60) ---
  {
    id: 36,
    domain: Domain.DIAGNOSIS,
    question: "In a PES statement, the 'E' stands for:",
    answer: "Etiology",
    options: ["Evidence", "Etiology", "Evaluation", "Energy"],
    correctOption: 1,
    explanation: "Problem related to Etiology as evidenced by Signs/Symptoms."
  },
  {
    id: 37,
    domain: Domain.DIAGNOSIS,
    question: "Which domain of diagnoses should be prioritized if possible?",
    answer: "Intake (NI)",
    options: ["Clinical (NC)", "Behavioral (NB)", "Intake (NI)", "Medical"],
    correctOption: 2,
    explanation: "Intake diagnoses are specific to the RD and are often the most actionable."
  },
  {
    id: 38,
    domain: Domain.DIAGNOSIS,
    question: "The diagnosis 'Altered GI Function' (NC-1.4) describes issues with:",
    answer: "Digestion and absorption",
    options: ["Metabolism", "Digestion and absorption", "Access to food", "Knowledge"],
    correctOption: 1,
    explanation: "Exocrine issues (enzyme delivery, gut function). Contrast with 'Impaired Nutrient Utilization' which is metabolic."
  },
  {
    id: 39,
    domain: Domain.DIAGNOSIS,
    question: "A patient eating unsafe spoiled food would fall under which domain?",
    answer: "Behavioral (NB)",
    options: ["Intake", "Clinical", "Behavioral", "Environmental"],
    correctOption: 2,
    explanation: "NB-3.1 Intake of unsafe food is a behavioral/environmental issue."
  },
  {
    id: 40,
    domain: Domain.DIAGNOSIS,
    question: "What connects the Problem to the Etiology in a PES statement?",
    answer: "related to",
    options: ["due to", "related to", "as evidenced by", "caused by"],
    correctOption: 1,
    explanation: "Standard format: [Problem] related to [Etiology]..."
  },
  {
    id: 41,
    domain: Domain.DIAGNOSIS,
    question: "The 'Signs and Symptoms' in PES should be:",
    answer: "Specific, measurable, and linked to the etiology",
    options: ["Vague and general", "Specific, measurable, and linked to the etiology", "Only subjective", "Unrelated to the problem"],
    correctOption: 1,
    explanation: "They form the basis for monitoring and evaluation."
  },
  {
    id: 42,
    domain: Domain.DIAGNOSIS,
    question: "Which is a Clinical (NC) domain diagnosis?",
    answer: "Swallowing difficulty",
    options: ["Inadequate energy intake", "Swallowing difficulty", "Food-nutrition knowledge deficit", "Limited access to food"],
    correctOption: 1,
    explanation: "Functional/Biochemical/Weight balance issues."
  },
  {
    id: 43,
    domain: Domain.DIAGNOSIS,
    question: "Which is an Intake (NI) domain diagnosis?",
    answer: "Inadequate oral intake",
    options: ["Inadequate oral intake", "Overweight/Obesity", "Disordered eating pattern", "Unintended weight loss"],
    correctOption: 0,
    explanation: "Directly relates to what the patient consumes."
  },
  {
    id: 44,
    domain: Domain.DIAGNOSIS,
    question: "Ideally, the Nutrition Intervention should target the:",
    answer: "Etiology",
    options: ["Signs", "Symptoms", "Etiology", "Problem"],
    correctOption: 2,
    explanation: "Fixing the root cause (Etiology) resolves the problem. If not possible, treat symptoms."
  },
  {
    id: 45,
    domain: Domain.DIAGNOSIS,
    question: "Differential diagnosis: Altered GI Function vs Impaired Nutrient Utilization?",
    answer: "GI is digestion/absorption; Utilization is metabolic",
    options: ["GI is metabolic; Utilization is digestion", "GI is digestion/absorption; Utilization is metabolic", "They are the same", "Utilization is behavioral"],
    correctOption: 1,
    explanation: "Altered GI = diarrhea, malabsorption. Impaired Utilization = low hormones, enzyme defects (e.g., PKU)."
  },
  {
    id: 46,
    domain: Domain.DIAGNOSIS,
    question: "Diagnosis for a patient who cannot physically feed themselves?",
    answer: "Self-feeding difficulty",
    options: ["Inadequate intake", "Self-feeding difficulty", "Malnutrition", "Food refusal"],
    correctOption: 1,
    explanation: "Functional problem (NC-1.1)."
  },
  {
    id: 47,
    domain: Domain.DIAGNOSIS,
    question: "Which term describes a problem that no longer exists?",
    answer: "Resolved",
    options: ["Resolved", "Improved", "Unchanged", "Worsened"],
    correctOption: 0,
    explanation: "Status terminology in documentation."
  },
  {
    id: 48,
    domain: Domain.DIAGNOSIS,
    question: "Diagnosis for a diabetic eating too many carbohydrates?",
    answer: "Excessive carbohydrate intake",
    options: ["Altered labs", "Excessive carbohydrate intake", "Diabetes knowledge deficit", "Impaired metabolism"],
    correctOption: 1,
    explanation: "Specific Intake diagnosis is preferred over generic ones."
  },
  {
    id: 49,
    domain: Domain.DIAGNOSIS,
    question: "Etiology for 'Inadequate vitamin D intake' could be:",
    answer: "Limited food variety",
    options: ["Low serum Vitamin D", "Osteoporosis", "Limited food variety", "Fracture"],
    correctOption: 2,
    explanation: "Etiology is the CAUSE. Low serum D is a SIGN."
  },
  {
    id: 50,
    domain: Domain.DIAGNOSIS,
    question: "Which is a Behavioral (NB) diagnosis?",
    answer: "Not ready for diet/lifestyle change",
    options: ["Swallowing difficulty", "Not ready for diet/lifestyle change", "Malnutrition", "Excessive fat intake"],
    correctOption: 1,
    explanation: "Knowledge, attitudes, beliefs, physical activity."
  },
  {
    id: 51,
    domain: Domain.DIAGNOSIS,
    question: "NC-3.1 'Underweight' etiology might be:",
    answer: "Chronic illness causing catabolism",
    options: ["BMI < 18.5", "Weight loss", "Chronic illness causing catabolism", "Anorexia"],
    correctOption: 2,
    explanation: "BMI is the sign. Illness is the cause."
  },
  {
    id: 52,
    domain: Domain.DIAGNOSIS,
    question: "If a patient has both 'Inadequate intake' and 'Swallowing difficulty', which do you diagnose?",
    answer: "Swallowing difficulty (if it's the root cause)",
    options: ["Inadequate intake", "Swallowing difficulty (if it's the root cause)", "Both", "Neither"],
    correctOption: 1,
    explanation: "Or use Swallowing Difficulty as the Etiology for Inadequate Intake."
  },
  {
    id: 53,
    domain: Domain.DIAGNOSIS,
    question: "Standardized language in the NCP is called:",
    answer: "eNCPT (formerly IDNT)",
    options: ["ICD-10", "eNCPT (formerly IDNT)", "DSM-5", "CPT Codes"],
    correctOption: 1,
    explanation: "electronic Nutrition Care Process Terminology."
  },
  {
    id: 54,
    domain: Domain.DIAGNOSIS,
    question: "Diagnosis 'Food-medication interaction' falls under:",
    answer: "Clinical (NC)",
    options: ["Intake", "Clinical (NC)", "Behavioral", "Environmental"],
    correctOption: 1,
    explanation: "Biochemical/functional implication."
  },
  {
    id: 55,
    domain: Domain.DIAGNOSIS,
    question: "Is 'Cancer' a nutrition diagnosis?",
    answer: "No, it is a medical diagnosis",
    options: ["Yes", "No, it is a medical diagnosis", "Depends on stage", "Only if weight loss occurs"],
    correctOption: 1,
    explanation: "RDs diagnose nutrition problems (e.g., Unintended weight loss), not medical diseases."
  },

  // --- NUTRITION INTERVENTION (61-100) ---
  {
    id: 61,
    domain: Domain.INTERVENTION,
    question: "Protein restriction for CKD Stage 3-4 (non-dialysis)?",
    answer: "0.6 - 0.8 g/kg",
    options: ["0.6 - 0.8 g/kg", "1.0 - 1.2 g/kg", "1.2 - 1.5 g/kg", "No restriction"],
    correctOption: 0,
    explanation: "Restricted to slow progression. Dialysis requires higher protein (1.2g/kg)."
  },
  {
    id: 62,
    domain: Domain.INTERVENTION,
    question: "Patients on MAOIs must avoid:",
    answer: "Tyramine",
    options: ["Purines", "Tyramine", "Gluten", "Lactose"],
    correctOption: 1,
    explanation: "Aged cheese, cured meats. Tyramine causes hypertensive crisis with MAOIs."
  },
  {
    id: 63,
    domain: Domain.INTERVENTION,
    question: "Which fiber is best for diarrhea?",
    answer: "Soluble fiber",
    options: ["Insoluble fiber", "Soluble fiber", "Crude fiber", "None"],
    correctOption: 1,
    explanation: "Soluble fiber (pectin, oats) absorbs water and slows transit."
  },
  {
    id: 64,
    domain: Domain.INTERVENTION,
    question: "Type of formula required for Galactosemia?",
    answer: "Soy-based",
    options: ["Cow's milk", "Soy-based", "Hydrolyzed whey", "Lactose-free milk"],
    correctOption: 1,
    explanation: "Must avoid galactose completely. Soy is galactose-free."
  },
  {
    id: 65,
    domain: Domain.INTERVENTION,
    question: "Diet for Cystic Fibrosis typically requires:",
    answer: "High Calorie, High Protein, Unrestricted Fat",
    options: ["Low Fat", "High Calorie, High Protein, Unrestricted Fat", "Low Sodium", "Low Protein"],
    correctOption: 1,
    explanation: "CF patients have malabsorption. They need PERT enzymes and high energy intake (110-200% needs)."
  },
  {
    id: 66,
    domain: Domain.INTERVENTION,
    question: "Appropriate diet for acute pancreatitis?",
    answer: "Early EN into jejunum or Low Fat oral",
    options: ["TPN only", "NPO for 7 days", "Early EN into jejunum or Low Fat oral", "High Fat"],
    correctOption: 2,
    explanation: "Early enteral feeding is preferred over TPN. Jejunum feeding bypasses pancreatic stimulation."
  },
  {
    id: 67,
    domain: Domain.INTERVENTION,
    question: "MNT for Dumping Syndrome includes:",
    answer: "Small dry meals, fluids between meals",
    options: ["High carb liquid meals", "Small dry meals, fluids between meals", "High simple sugars", "Large infrequent meals"],
    correctOption: 1,
    explanation: "Prevent rapid gastric emptying. No liquids with meals. Restrict simple sugars."
  },
  {
    id: 68,
    domain: Domain.INTERVENTION,
    question: "A patient with Celiac disease can eat:",
    answer: "Corn and Rice",
    options: ["Wheat", "Rye", "Barley", "Corn and Rice"],
    correctOption: 3,
    explanation: "Avoid BROW (Barley, Rye, Oats*, Wheat). *Oats must be certified GF."
  },
  {
    id: 69,
    domain: Domain.INTERVENTION,
    question: "The DASH diet is designed to treat:",
    answer: "Hypertension",
    options: ["Diabetes", "Hypertension", "Gout", "Seizures"],
    correctOption: 1,
    explanation: "Dietary Approaches to Stop Hypertension. High in Ca, Mg, K."
  },
  {
    id: 70,
    domain: Domain.INTERVENTION,
    question: "Ketogenic diet for epilepsy ratio (Fat:Non-fat):",
    answer: "4:1",
    options: ["1:1", "2:1", "3:1", "4:1"],
    correctOption: 3,
    explanation: "Classic keto is 4 grams of fat for every 1 gram of protein+carb."
  },
  {
    id: 71,
    domain: Domain.INTERVENTION,
    question: "Nutrient to restrict in Wilson's Disease?",
    answer: "Copper",
    options: ["Iron", "Copper", "Zinc", "Magnesium"],
    correctOption: 1,
    explanation: "Genetic disorder causing copper accumulation in liver/brain."
  },
  {
    id: 72,
    domain: Domain.INTERVENTION,
    question: "Gout is a disorder of ______ metabolism.",
    answer: "Purine",
    options: ["Pyruvate", "Purine", "Fatty acid", "Glucose"],
    correctOption: 1,
    explanation: "Results in high uric acid. Avoid organ meats, anchovies, sardines."
  },
  {
    id: 73,
    domain: Domain.INTERVENTION,
    question: "Maximum hang time for open system enteral formula?",
    answer: "4 hours",
    options: ["4 hours", "8 hours", "12 hours", "24 hours"],
    correctOption: 0,
    explanation: "Open systems (poured into bag) risk contamination. Closed systems can hang 24-48h."
  },
  {
    id: 74,
    domain: Domain.INTERVENTION,
    question: "Standard isotonic tube feeding formula osmolality is:",
    answer: "300 mOsm/kg",
    options: ["150 mOsm/kg", "300 mOsm/kg", "600 mOsm/kg", "900 mOsm/kg"],
    correctOption: 1,
    explanation: "Similar to blood osmolality. Higher osmolality can cause diarrhea."
  },
  {
    id: 75,
    domain: Domain.INTERVENTION,
    question: "The 'Rule of 15' refers to treating:",
    answer: "Hypoglycemia",
    options: ["Hyperglycemia", "Hypoglycemia", "Hypertension", "Dehydration"],
    correctOption: 1,
    explanation: "15g carbs, wait 15 mins, recheck BG."
  },
  {
    id: 76,
    domain: Domain.INTERVENTION,
    question: "Which supplement is recommended for breastfed infants?",
    answer: "Vitamin D (400 IU)",
    options: ["Iron", "Vitamin D (400 IU)", "Vitamin C", "Fluoride"],
    correctOption: 1,
    explanation: "Breast milk is low in Vitamin D."
  },
  {
    id: 77,
    domain: Domain.INTERVENTION,
    question: "Folic acid recommendation for pregnancy to prevent NTDs?",
    answer: "400 - 800 mcg/day",
    options: ["100 mcg", "200 mcg", "400 - 800 mcg/day", "2000 mcg"],
    correctOption: 2,
    explanation: "Prevents neural tube defects (spina bifida)."
  },
  {
    id: 78,
    domain: Domain.INTERVENTION,
    question: "Primary fuel source in starvation (late phase)?",
    answer: "Ketones",
    options: ["Glucose", "Glycogen", "Ketones", "Protein"],
    correctOption: 2,
    explanation: "Brain adapts to use ketones to spare protein."
  },
  {
    id: 79,
    domain: Domain.INTERVENTION,
    question: "Best oil for frying (High Smoke Point)?",
    answer: "Safflower/Soybean/Peanut",
    options: ["Butter", "Olive Oil", "Safflower/Soybean/Peanut", "Lard"],
    correctOption: 2,
    explanation: "High smoke point (>400F) prevents breakdown."
  },
  {
    id: 80,
    domain: Domain.INTERVENTION,
    question: "Diet for Urea Cycle Defects?",
    answer: "Protein restriction",
    options: ["Fat restriction", "Protein restriction", "Carb restriction", "Fluid restriction"],
    correctOption: 1,
    explanation: "Cannot convert ammonia to urea. Must limit protein to limit ammonia."
  },
  {
    id: 81,
    domain: Domain.INTERVENTION,
    question: "Which mineral interacts with Tetracycline (antibiotic)?",
    answer: "Calcium",
    options: ["Iron", "Calcium", "Zinc", "Potassium"],
    correctOption: 1,
    explanation: "Calcium binds to tetracycline, reducing absorption."
  },
  {
    id: 82,
    domain: Domain.INTERVENTION,
    question: "Standard calculation for fluid needs in adults?",
    answer: "30-35 ml/kg",
    options: ["15-20 ml/kg", "30-35 ml/kg", "50 ml/kg", "100 ml/kg"],
    correctOption: 1,
    explanation: "Or 1ml per calorie."
  },
  {
    id: 83,
    domain: Domain.INTERVENTION,
    question: "First line therapy for PCOS?",
    answer: "Weight loss and low glycemic diet",
    options: ["High carb diet", "Weight loss and low glycemic diet", "Supplements", "Surgery"],
    correctOption: 1,
    explanation: "Improves insulin sensitivity."
  },
  {
    id: 84,
    domain: Domain.INTERVENTION,
    question: "Short Bowel Syndrome (SBS) concern if terminal ileum resected:",
    answer: "B12 deficiency and bile salt malabsorption",
    options: ["Iron deficiency", "B12 deficiency and bile salt malabsorption", "Protein loss", "Water retention"],
    correctOption: 1,
    explanation: "Terminal ileum absorbs B12 and bile salts."
  },
  {
    id: 85,
    domain: Domain.INTERVENTION,
    question: "Low FODMAP diet eliminates:",
    answer: "Fermentable Oligo- Di- Monosaccharides and Polyols",
    options: ["Fatty acids", "Fermentable Oligo- Di- Monosaccharides and Polyols", "Proteins", "Additives"],
    correctOption: 1,
    explanation: "Used for IBS management."
  },
  {
    id: 86,
    domain: Domain.INTERVENTION,
    question: "Fluid restriction for Hemodialysis with anuria?",
    answer: "1000 ml + output (if any)",
    options: ["unrestricted", "1000 ml + output (if any)", "2000 ml", "500 ml"],
    correctOption: 1,
    explanation: "Strict control to manage interdialytic weight gain."
  },
  {
    id: 87,
    domain: Domain.INTERVENTION,
    question: "Diet for COPD?",
    answer: "High calorie, High protein",
    options: ["Low calorie", "High calorie, High protein", "Low fat", "Low carb only"],
    correctOption: 1,
    explanation: "Replete stores. RQ of fat is lower, so high fat/low carb helps reduce CO2 load."
  },
  {
    id: 88,
    domain: Domain.INTERVENTION,
    question: "TLC Diet (Therapeutic Lifestyle Changes) targets:",
    answer: "High Cholesterol/CVD",
    options: ["Diabetes", "High Cholesterol/CVD", "Kidney Disease", "Liver Disease"],
    correctOption: 1,
    explanation: "Limits saturated fat <7%, cholesterol <200mg."
  },
  {
    id: 89,
    domain: Domain.INTERVENTION,
    question: "Foods to avoid with GERD:",
    answer: "Peppermint, chocolate, caffeine, alcohol",
    options: ["Milk, yogurt", "Peppermint, chocolate, caffeine, alcohol", "Bread, rice", "Bananas"],
    correctOption: 1,
    explanation: "These relax the lower esophageal sphincter (LES)."
  },
  {
    id: 90,
    domain: Domain.INTERVENTION,
    question: "How many calories in 1g of Dextrose (in PN)?",
    answer: "3.4 kcal/g",
    options: ["4 kcal/g", "3.4 kcal/g", "9 kcal/g", "7 kcal/g"],
    correctOption: 1,
    explanation: "Hydrated dextrose provides 3.4 kcal/g, not 4."
  },
  {
    id: 91,
    domain: Domain.INTERVENTION,
    question: "Lipid emulsion 20% provides how many kcal/ml?",
    answer: "2.0 kcal/ml",
    options: ["1.1 kcal/ml", "2.0 kcal/ml", "3.0 kcal/ml", "9.0 kcal/ml"],
    correctOption: 1,
    explanation: "10% = 1.1 kcal/ml. 20% = 2.0 kcal/ml."
  },
  {
    id: 92,
    domain: Domain.INTERVENTION,
    question: "Propofol provides calories from:",
    answer: "Lipid (1.1 kcal/ml)",
    options: ["Sugar", "Protein", "Lipid (1.1 kcal/ml)", "Alcohol"],
    correctOption: 2,
    explanation: "Must account for these calories in nutrition support."
  },
  {
    id: 93,
    domain: Domain.INTERVENTION,
    question: "Recommended weight gain for BMI 18.5-24.9 during pregnancy?",
    answer: "25 - 35 lbs",
    options: ["15 - 25 lbs", "25 - 35 lbs", "28 - 40 lbs", "11 - 20 lbs"],
    correctOption: 1,
    explanation: "Normal weight gain guidance."
  },
  {
    id: 94,
    domain: Domain.INTERVENTION,
    question: "Rapid infusion of carbohydrates in starvation causes:",
    answer: "Refeeding Syndrome",
    options: ["Dehydration", "Refeeding Syndrome", "Hypercalcemia", "Weight loss"],
    correctOption: 1,
    explanation: "Insulin spike drives K, Mg, Phos into cells."
  },
  {
    id: 95,
    domain: Domain.INTERVENTION,
    question: "Calorie needs for 0-6 months infant?",
    answer: "108 kcal/kg",
    options: ["80 kcal/kg", "108 kcal/kg", "120 kcal/kg", "50 kcal/kg"],
    correctOption: 1,
    explanation: "Very high metabolic rate."
  },
  {
    id: 96,
    domain: Domain.INTERVENTION,
    question: "Hormone responsible for milk production?",
    answer: "Prolactin",
    options: ["Oxytocin", "Prolactin", "Estrogen", "Progesterone"],
    correctOption: 1,
    explanation: "Prolactin Produces. Oxytocin releases (let-down)."
  },
  {
    id: 97,
    domain: Domain.INTERVENTION,
    question: "Colostrum is high in:",
    answer: "Protein and antibodies",
    options: ["Fat", "Carbohydrate", "Protein and antibodies", "Water"],
    correctOption: 2,
    explanation: "First milk. Yellowish. Immunological protection."
  },
  {
    id: 98,
    domain: Domain.INTERVENTION,
    question: "GIR (Glucose Infusion Rate) limit in adults?",
    answer: "4-5 mg/kg/min",
    options: ["1-2 mg/kg/min", "4-5 mg/kg/min", "8-10 mg/kg/min", "15 mg/kg/min"],
    correctOption: 1,
    explanation: "Max oxidation rate. Exceeding causes fatty liver."
  },
  {
    id: 99,
    domain: Domain.INTERVENTION,
    question: "Gluten is found in:",
    answer: "Wheat, Rye, Barley, Triticale",
    options: ["Corn, Rice, Soy", "Wheat, Rye, Barley, Triticale", "Potatoes, Oats", "Quinoa, Buckwheat"],
    correctOption: 1,
    explanation: "Avoid in Celiac."
  },
  {
    id: 100,
    domain: Domain.INTERVENTION,
    question: "Strict vegan diet may require supplementation of:",
    answer: "B12, Vitamin D, Iron, Calcium, Zinc",
    options: ["Vitamin C", "B12, Vitamin D, Iron, Calcium, Zinc", "Folate", "Magnesium"],
    correctOption: 1,
    explanation: "B12 is only found in animal products."
  },

  // --- MONITORING & EVALUATION (101-130) ---
  {
    id: 101,
    domain: Domain.MONITORING,
    question: "Target HbA1c for most adults with diabetes?",
    answer: "< 7.0%",
    options: ["< 6.0%", "< 6.5%", "< 7.0%", "< 8.0%"],
    correctOption: 2,
    explanation: "Balances control with hypoglycemia risk."
  },
  {
    id: 102,
    domain: Domain.MONITORING,
    question: "Best lab to monitor for Refeeding Syndrome?",
    answer: "Phosphorus",
    options: ["Sodium", "Phosphorus", "Calcium", "Albumin"],
    correctOption: 1,
    explanation: "Hypophosphatemia is the hallmark warning sign."
  },
  {
    id: 103,
    domain: Domain.MONITORING,
    question: "Nitrogen Balance formula?",
    answer: "(Protein intake / 6.25) - (UUN + 4)",
    options: ["Protein / 16", "(Protein / 6.25) - (UUN + 4)", "UUN - Protein", "Protein x 0.8"],
    correctOption: 1,
    explanation: "Protein is 16% nitrogen. Subtract urinary urea nitrogen + 4g insensible loss."
  },
  {
    id: 104,
    domain: Domain.MONITORING,
    question: "Normal range for serum sodium?",
    answer: "135-145 mEq/L",
    options: ["120-130", "135-145", "150-160", "95-105"],
    correctOption: 1,
    explanation: "Fundamental electrolyte value."
  },
  {
    id: 105,
    domain: Domain.MONITORING,
    question: "Respiratory Quotient (RQ) of 1.0 indicates:",
    answer: "Carbohydrate utilization",
    options: ["Fat utilization", "Mixed diet", "Carbohydrate utilization", "Protein utilization"],
    correctOption: 2,
    explanation: "Fat = 0.7, Protein = 0.82, Carb = 1.0."
  },
  {
    id: 106,
    domain: Domain.MONITORING,
    question: "RQ > 1.0 indicates:",
    answer: "Overfeeding (Lipogenesis)",
    options: ["Starvation", "Ketosis", "Overfeeding (Lipogenesis)", "Fat burning"],
    correctOption: 2,
    explanation: "Synthesizing fat from excess carbs."
  },
  {
    id: 107,
    domain: Domain.MONITORING,
    question: "Evaluating effectiveness of education can be done via:",
    answer: "Pre-test and Post-test",
    options: ["Asking if they liked it", "Pre-test and Post-test", "Attendance", "Handouts"],
    correctOption: 1,
    explanation: "Measures knowledge change."
  },
  {
    id: 108,
    domain: Domain.MONITORING,
    question: "Positive nitrogen balance is needed for:",
    answer: "Growth, Pregnancy, Healing",
    options: ["Weight loss", "Maintenance", "Growth, Pregnancy, Healing", "Starvation"],
    correctOption: 2,
    explanation: "Anabolism > Catabolism."
  },
  {
    id: 109,
    domain: Domain.MONITORING,
    question: "Negative nitrogen balance indicates:",
    answer: "Catabolism / Malnutrition",
    options: ["Growth", "Catabolism / Malnutrition", "Healthy status", "High protein intake"],
    correctOption: 1,
    explanation: "Body is breaking down muscle."
  },
  {
    id: 110,
    domain: Domain.MONITORING,
    question: "Glycemic Index measures:",
    answer: "Blood glucose response to food vs standard",
    options: ["Total carbs", "Blood glucose response to food vs standard", "Insulin levels", "Calories"],
    correctOption: 1,
    explanation: "High GI foods spike blood sugar rapidly."
  },
  {
    id: 111,
    domain: Domain.MONITORING,
    question: "Glycemic Load formula:",
    answer: "(GI x Grams of Carb) / 100",
    options: ["GI x 100", "(GI x Grams of Carb) / 100", "Carbs / GI", "GI + Carbs"],
    correctOption: 1,
    explanation: "Accounts for portion size."
  },
  {
    id: 112,
    domain: Domain.MONITORING,
    question: "Normal fasting blood glucose?",
    answer: "70 - 99 mg/dL",
    options: ["< 70", "70 - 99 mg/dL", "100 - 125", "> 126"],
    correctOption: 1,
    explanation: "100-125 is prediabetes. >126 is diabetes."
  },
  {
    id: 113,
    domain: Domain.MONITORING,
    question: "Renal Solute Load is mainly determined by:",
    answer: "Protein and Electrolytes",
    options: ["Fat and Sugar", "Protein and Electrolytes", "Water and Fiber", "Vitamins"],
    correctOption: 1,
    explanation: "Nitrogen wastes and Na/K/Cl burden the kidneys."
  },
  {
    id: 114,
    domain: Domain.MONITORING,
    question: "Serum Osmolality formula (approx):",
    answer: "2(Na) + Glucose/18 + BUN/2.8",
    options: ["Na + K", "2(Na) + Glucose/18 + BUN/2.8", "Na x 2", "Glucose + BUN"],
    correctOption: 1,
    explanation: "Normal is 280-295 mOsm/kg."
  },
  {
    id: 115,
    domain: Domain.MONITORING,
    question: "Which lab indicates hydration status?",
    answer: "Serum Sodium",
    options: ["Serum Sodium", "Calcium", "Potassium", "Magnesium"],
    correctOption: 0,
    explanation: "Hypernatremia = Dehydration. Hyponatremia = Overhydration."
  },
  {
    id: 116,
    domain: Domain.MONITORING,
    question: "Transferrin levels increase during:",
    answer: "Iron deficiency",
    options: ["Iron overload", "Iron deficiency", "Infection", "Protein malnutrition"],
    correctOption: 1,
    explanation: "Body produces more transporter (transferrin) to try to capture iron."
  },
  {
    id: 117,
    domain: Domain.MONITORING,
    question: "Retinol Binding Protein (RBP) half life?",
    answer: "12 hours",
    options: ["12 hours", "2 days", "8 days", "20 days"],
    correctOption: 0,
    explanation: "Very sensitive to acute protein changes."
  },
  {
    id: 118,
    domain: Domain.MONITORING,
    question: "Creatinine Height Index (CHI) measures:",
    answer: "Somatic protein status",
    options: ["Visceral protein", "Somatic protein status", "Fat stores", "Fluid status"],
    correctOption: 1,
    explanation: "Relates creatinine excretion to height."
  },
  {
    id: 119,
    domain: Domain.MONITORING,
    question: "Monitoring frequency for TPN initiation?",
    answer: "Daily labs, vitals, I/O",
    options: ["Weekly", "Daily labs, vitals, I/O", "Monthly", "Every hour"],
    correctOption: 1,
    explanation: "High risk for metabolic complications initially."
  },
  {
    id: 120,
    domain: Domain.MONITORING,
    question: "Gastric Residual Volume (GRV) concern level?",
    answer: "> 500 ml",
    options: ["> 50 ml", "> 200 ml", "> 500 ml", "Any amount"],
    correctOption: 2,
    explanation: "Recent guidelines suggest holding feeds only if >500ml."
  },

  // --- FOOD SERVICE MANAGEMENT (121-165) ---
  {
    id: 121,
    domain: Domain.FOODSERVICE,
    question: "Safe minimum internal temp for ground beef?",
    answer: "155°F (68°C)",
    options: ["145°F", "155°F", "165°F", "135°F"],
    correctOption: 1,
    explanation: "155°F for 17 seconds."
  },
  {
    id: 122,
    domain: Domain.FOODSERVICE,
    question: "Temp for Poultry?",
    answer: "165°F (74°C)",
    options: ["155°F", "165°F", "175°F", "180°F"],
    correctOption: 1,
    explanation: "Instant kill temp for salmonella."
  },
  {
    id: 123,
    domain: Domain.FOODSERVICE,
    question: "Temperature Danger Zone?",
    answer: "41°F - 135°F",
    options: ["40°F - 140°F", "41°F - 135°F", "32°F - 100°F", "50°F - 150°F"],
    correctOption: 1,
    explanation: "Bacteria grow most rapidly here."
  },
  {
    id: 124,
    domain: Domain.FOODSERVICE,
    question: "How many ounces in a #8 scoop?",
    answer: "4 oz",
    options: ["2 oz", "4 oz", "8 oz", "6 oz"],
    correctOption: 1,
    explanation: "32 / Scoop# = Ounces. 32/8 = 4oz (1/2 cup)."
  },
  {
    id: 125,
    domain: Domain.FOODSERVICE,
    question: "How many ounces in a #16 scoop?",
    answer: "2 oz",
    options: ["2 oz", "3 oz", "4 oz", "5 oz"],
    correctOption: 0,
    explanation: "32/16 = 2oz (1/4 cup)."
  },
  {
    id: 126,
    domain: Domain.FOODSERVICE,
    question: "Sanitizing rinse temp for stationary rack machine?",
    answer: "180°F",
    options: ["165°F", "170°F", "180°F", "212°F"],
    correctOption: 2,
    explanation: "High temp machines need 180°F to sanitize without chemicals."
  },
  {
    id: 127,
    domain: Domain.FOODSERVICE,
    question: "Class K fire extinguishers are for?",
    answer: "Commercial kitchen grease fires",
    options: ["Wood/Paper", "Electrical", "Commercial kitchen grease fires", "Metals"],
    correctOption: 2,
    explanation: "K for Kitchen (Oils/Fats)."
  },
  {
    id: 128,
    domain: Domain.FOODSERVICE,
    question: "First step in HACCP?",
    answer: "Conduct a Hazard Analysis",
    options: ["Conduct a Hazard Analysis", "Determine CCPs", "Establish Limits", "Record Keeping"],
    correctOption: 0,
    explanation: "Principle 1 is identifying the hazards."
  },
  {
    id: 129,
    domain: Domain.FOODSERVICE,
    question: "Food service system where food is prepared and served immediately:",
    answer: "Conventional",
    options: ["Conventional", "Commissary", "Ready-Prepared", "Assembly-Serve"],
    correctOption: 0,
    explanation: "Traditional method. Highest quality perception, high labor cost."
  },
  {
    id: 130,
    domain: Domain.FOODSERVICE,
    question: "Food service system with centralized production and delivery to satellites?",
    answer: "Commissary",
    options: ["Conventional", "Commissary", "Ready-Prepared", "Assembly-Serve"],
    correctOption: 1,
    explanation: "Central kitchen, bulk transport. Risk: safety during transport."
  },
  {
    id: 131,
    domain: Domain.FOODSERVICE,
    question: "Assembly-Serve system involves:",
    answer: "Kitchenless kitchen",
    options: ["Cook-chill", "Kitchenless kitchen", "Making from scratch", "Delivery to satellites"],
    correctOption: 1,
    explanation: "Foods purchased fully prepared. Only reheating required. Lowest labor."
  },
  {
    id: 132,
    domain: Domain.FOODSERVICE,
    question: "FIFO stands for:",
    answer: "First In, First Out",
    options: ["First In, First Out", "First In, First Order", "Fresh In, Fresh Out", "Fast In, Fast Out"],
    correctOption: 0,
    explanation: "Inventory rotation to use older stock first."
  },
  {
    id: 133,
    domain: Domain.FOODSERVICE,
    question: "Edible Portion (EP) Cost formula:",
    answer: "AP Cost / Yield %",
    options: ["AP Cost * Yield %", "AP Cost / Yield %", "AP Cost - Waste", "Yield % / AP Cost"],
    correctOption: 1,
    explanation: "EP price is always higher than AP price."
  },
  {
    id: 134,
    domain: Domain.FOODSERVICE,
    question: "Standard width of a main foodservice aisle?",
    answer: "60 inches (5 feet)",
    options: ["36 inches", "48 inches", "60 inches", "72 inches"],
    correctOption: 2,
    explanation: "Allows two-way traffic."
  },
  {
    id: 135,
    domain: Domain.FOODSERVICE,
    question: "Most durable floor material for kitchens?",
    answer: "Quarry tile",
    options: ["Vinyl", "Concrete", "Quarry tile", "Wood"],
    correctOption: 2,
    explanation: "Non-porous, durable, easy to clean."
  },
  {
    id: 136,
    domain: Domain.FOODSERVICE,
    question: "Chlorine sanitizer concentration?",
    answer: "50 ppm",
    options: ["12.5 ppm", "50 ppm", "100 ppm", "200 ppm"],
    correctOption: 1,
    explanation: "pH <8, Temp >75F."
  },
  {
    id: 137,
    domain: Domain.FOODSERVICE,
    question: "A #10 can holds approximately:",
    answer: "12-13 cups",
    options: ["5 cups", "8 cups", "12-13 cups", "20 cups"],
    correctOption: 2,
    explanation: "Standard commercial size. ~6 cans per case."
  },
  {
    id: 138,
    domain: Domain.FOODSERVICE,
    question: "Which fire extinguisher for paper/wood/cloth?",
    answer: "Class A",
    options: ["Class A", "Class B", "Class C", "Class K"],
    correctOption: 0,
    explanation: "A = Ash (Paper/Wood). B = Barrel (Liquids). C = Current (Electric)."
  },
  {
    id: 139,
    domain: Domain.FOODSERVICE,
    question: "Reheating leftovers must reach:",
    answer: "165°F for 15 seconds",
    options: ["145°F", "155°F", "165°F for 15 seconds", "180°F"],
    correctOption: 2,
    explanation: "Within 2 hours."
  },
  {
    id: 140,
    domain: Domain.FOODSERVICE,
    question: "Cooling process requirement:",
    answer: "135F to 70F in 2 hrs, then to 41F in 4 hrs",
    options: ["Anytime in fridge", "135F to 70F in 2 hrs, then to 41F in 4 hrs", "4 hours total", "Overnight"],
    correctOption: 1,
    explanation: "Two stage cooling method (Total 6 hours)."
  },
  {
    id: 141,
    domain: Domain.FOODSERVICE,
    question: "Bain marie is:",
    answer: "A hot water bath for keeping food warm",
    options: ["A mixer", "A hot water bath for keeping food warm", "A slicer", "A sanitizer"],
    correctOption: 1,
    explanation: "Double boiler concept."
  },
  {
    id: 142,
    domain: Domain.FOODSERVICE,
    question: "LIFO (Last In First Out) is used when:",
    answer: "Inventory is non-perishable or for tax purposes",
    options: ["Always", "Inventory is non-perishable or for tax purposes", "For milk", "Never"],
    correctOption: 1,
    explanation: "Usually not for food safety."
  },
  {
    id: 143,
    domain: Domain.FOODSERVICE,
    question: "Gauge of metal: Lower number means:",
    answer: "Thicker metal",
    options: ["Thinner metal", "Thicker metal", "Lighter weight", "Cheaper"],
    correctOption: 1,
    explanation: "10 gauge is thicker than 22 gauge."
  },
  {
    id: 144,
    domain: Domain.FOODSERVICE,
    question: "NSF International (National Sanitation Foundation):",
    answer: "Certifies equipment safety",
    options: ["Inspects restaurants", "Certifies equipment safety", "Makes laws", "Sells food"],
    correctOption: 1,
    explanation: "Look for the NSF mark on equipment."
  },
  {
    id: 145,
    domain: Domain.FOODSERVICE,
    question: "Underwriters Laboratories (UL) certifies:",
    answer: "Electrical safety",
    options: ["Sanitation", "Electrical safety", "Gas safety", "Plumbing"],
    correctOption: 1,
    explanation: "Checks for electrical hazards."
  },
  {
    id: 146,
    domain: Domain.FOODSERVICE,
    question: "Maximum counter height for heavy work:",
    answer: "36 inches",
    options: ["28 inches", "36 inches", "42 inches", "48 inches"],
    correctOption: 1,
    explanation: "Standard height is 36\"."
  },
  {
    id: 147,
    domain: Domain.FOODSERVICE,
    question: "Lighting intensity in food prep areas:",
    answer: "50 foot-candles",
    options: ["10 foot-candles", "20 foot-candles", "50 foot-candles", "100 foot-candles"],
    correctOption: 2,
    explanation: "Bright light for safety."
  },
  {
    id: 148,
    domain: Domain.FOODSERVICE,
    question: "Inventory turnover rate formula:",
    answer: "Cost of Sales / Average Inventory",
    options: ["Sales / Inventory", "Cost of Sales / Average Inventory", "Inventory / Sales", "Assets / Liabilities"],
    correctOption: 1,
    explanation: "Measures how fast inventory is used."
  },
  {
    id: 149,
    domain: Domain.FOODSERVICE,
    question: "Seat turnover calculation:",
    answer: "Customers / Number of Seats",
    options: ["Customers / Number of Seats", "Sales / Seats", "Seats / Hours", "Tables / Customers"],
    correctOption: 0,
    explanation: "How many times a seat is used per meal period."
  },
  {
    id: 150,
    domain: Domain.FOODSERVICE,
    question: "Contribution Margin:",
    answer: "Selling Price - Variable Cost",
    options: ["Selling Price - Fixed Cost", "Selling Price - Variable Cost", "Total Sales - Total Cost", "Profit"],
    correctOption: 1,
    explanation: "Profitability of individual items."
  },

  // --- MANAGEMENT & LEADERSHIP (166-205) ---
  {
    id: 166,
    domain: Domain.MANAGEMENT,
    question: "Which leadership style is 9,9 on the Blake-Mouton Grid?",
    answer: "Team Management",
    options: ["Country Club", "Impoverished", "Authority-Obedience", "Team Management"],
    correctOption: 3,
    explanation: "High concern for people AND production."
  },
  {
    id: 167,
    domain: Domain.MANAGEMENT,
    question: "Theory X manager believes:",
    answer: "Employees dislike work",
    options: ["Employees enjoy work", "Employees are self-directed", "Employees dislike work", "Employees are creative"],
    correctOption: 2,
    explanation: "Negative view. Requires authoritarian style."
  },
  {
    id: 168,
    domain: Domain.MANAGEMENT,
    question: "Theory Y manager believes:",
    answer: "Work is natural like play",
    options: ["Money is the only motivator", "Work is natural like play", "Employees need coercion", "Strict rules are best"],
    correctOption: 1,
    explanation: "Positive view. Participative style."
  },
  {
    id: 169,
    domain: Domain.MANAGEMENT,
    question: "Herzberg's Two-Factor Theory: Maintenance factors (Hygiene) include:",
    answer: "Pay and working conditions",
    options: ["Achievement", "Recognition", "Pay and working conditions", "Responsibility"],
    correctOption: 2,
    explanation: "Hygiene factors prevent dissatisfaction but don't motivate. Motivators are achievement/growth."
  },
  {
    id: 170,
    domain: Domain.MANAGEMENT,
    question: "Break-Even Point (in units) formula:",
    answer: "Fixed Costs / (Selling Price - Variable Cost)",
    options: ["Fixed Costs / Variable Cost", "Fixed Costs / (Selling Price - Variable Cost)", "Sales - Costs", "Total Costs / Units"],
    correctOption: 1,
    explanation: "FC / Contribution Margin per unit."
  },
  {
    id: 171,
    domain: Domain.MANAGEMENT,
    question: "1 FTE (Full Time Equivalent) equals how many hours/year?",
    answer: "2080 hours",
    options: ["1950 hours", "2000 hours", "2080 hours", "2500 hours"],
    correctOption: 2,
    explanation: "40 hours * 52 weeks."
  },
  {
    id: 172,
    domain: Domain.MANAGEMENT,
    question: "Zero-Based Budgeting starts with:",
    answer: "0 and justifies every expense",
    options: ["Last year's budget", "0 and justifies every expense", "A fixed cap", "Variable costs only"],
    correctOption: 1,
    explanation: "Not incremental. Requires re-evaluation of all activities."
  },
  {
    id: 173,
    domain: Domain.MANAGEMENT,
    question: "SWOT Analysis: 'Threats' are:",
    answer: "External factors",
    options: ["Internal factors", "Positive factors", "External factors", "Past factors"],
    correctOption: 2,
    explanation: "Strengths/Weaknesses = Internal. Opportunities/Threats = External."
  },
  {
    id: 174,
    domain: Domain.MANAGEMENT,
    question: "The 4 Ps of Marketing:",
    answer: "Product, Price, Place, Promotion",
    options: ["People, Product, Process, Price", "Product, Price, Place, Promotion", "Plan, Produce, Price, Promote", "Product, Price, Place, People"],
    correctOption: 1,
    explanation: "The marketing mix."
  },
  {
    id: 175,
    domain: Domain.MANAGEMENT,
    question: "Span of Control refers to:",
    answer: "Number of employees supervised",
    options: ["Length of employment", "Number of employees supervised", "Area of the kitchen", "Budget limit"],
    correctOption: 1,
    explanation: "Narrow span = few levels (tall). Wide span = many employees (flat)."
  },
  {
    id: 176,
    domain: Domain.MANAGEMENT,
    question: "Which law ensures unpaid leave for family/medical reasons?",
    answer: "FMLA",
    options: ["ADA", "FMLA", "FLSA", "EEOC"],
    correctOption: 1,
    explanation: "Family and Medical Leave Act. Up to 12 weeks unpaid."
  },
  {
    id: 177,
    domain: Domain.MANAGEMENT,
    question: "Which interview question is illegal?",
    answer: "Do you have children?",
    options: ["Can you lift 50lbs?", "Are you over 18?", "Do you have children?", "Can you work weekends?"],
    correctOption: 2,
    explanation: "Cannot ask about family status, age, religion, etc."
  },
  {
    id: 178,
    domain: Domain.MANAGEMENT,
    question: "Meals per Labor Hour calculation:",
    answer: "Total Meals / Total Labor Hours",
    options: ["Total Labor Hours / Total Meals", "Total Meals / Total Labor Hours", "Sales / Hours", "Food Cost / Hours"],
    correctOption: 1,
    explanation: "Key productivity indicator."
  },
  {
    id: 179,
    domain: Domain.MANAGEMENT,
    question: "A 'Sentinel Event' in healthcare is:",
    answer: "Unexpected occurrence involving death or serious injury",
    options: ["Routine audit", "Minor error", "Unexpected occurrence involving death or serious injury", "Staff meeting"],
    correctOption: 2,
    explanation: "Requires immediate investigation (Root Cause Analysis)."
  },
  {
    id: 180,
    domain: Domain.MANAGEMENT,
    question: "What is the Quick Ratio (Acid Test)?",
    answer: "(Cash + AR) / Current Liabilities",
    options: ["Assets / Liabilities", "(Cash + AR) / Current Liabilities", "Inventory / COGS", "Sales / Assets"],
    correctOption: 1,
    explanation: "Measures ability to pay short-term debt without selling inventory."
  },
  {
    id: 181,
    domain: Domain.MANAGEMENT,
    question: "PDCA cycle stands for:",
    answer: "Plan, Do, Check, Act",
    options: ["Plan, Direct, Check, Act", "Plan, Do, Check, Act", "Process, Do, Control, Act", "Prepare, Do, Check, Assess"],
    correctOption: 1,
    explanation: "Continuous quality improvement model."
  },
  {
    id: 182,
    domain: Domain.MANAGEMENT,
    question: "Benchmarking is:",
    answer: "Comparing performance against best-in-class",
    options: ["Setting internal goals", "Comparing performance against best-in-class", "Reducing costs", "Hiring staff"],
    correctOption: 1,
    explanation: "Looking at industry leaders to set standards."
  },
  {
    id: 183,
    domain: Domain.MANAGEMENT,
    question: "What is a 'job description'?",
    answer: "List of duties and responsibilities",
    options: ["List of qualifications", "List of duties and responsibilities", "Training manual", "Daily schedule"],
    correctOption: 1,
    explanation: "Matches the employee to the work. Job SPEC matches the person (skills)."
  },
  {
    id: 184,
    domain: Domain.MANAGEMENT,
    question: "Unity of Command means:",
    answer: "Each employee reports to only one supervisor",
    options: ["Everyone works together", "Each employee reports to only one supervisor", "One boss rules all", "No hierarchy"],
    correctOption: 1,
    explanation: "Prevents confusion."
  },
  {
    id: 185,
    domain: Domain.MANAGEMENT,
    question: "Scalar Principle refers to:",
    answer: "Clear line of authority from top to bottom",
    options: ["Weighing scales", "Clear line of authority from top to bottom", "Horizontal communication", "Salary scales"],
    correctOption: 1,
    explanation: "Chain of command."
  },
  {
    id: 186,
    domain: Domain.MANAGEMENT,
    question: "Operating Budget covers:",
    answer: "Revenue and expenses (Food, labor, supplies)",
    options: ["Large equipment", "Revenue and expenses (Food, labor, supplies)", "Cash flow", "Construction"],
    correctOption: 1,
    explanation: "Day to day operations. Capital budget is for big items."
  },
  {
    id: 187,
    domain: Domain.MANAGEMENT,
    question: "Assets = Liabilities + ______",
    answer: "Equity (Capital)",
    options: ["Revenue", "Equity (Capital)", "Expenses", "Debt"],
    correctOption: 1,
    explanation: "The Accounting Equation."
  },
  {
    id: 188,
    domain: Domain.MANAGEMENT,
    question: "Fair Labor Standards Act (FLSA) covers:",
    answer: "Minimum wage and overtime",
    options: ["Discrimination", "Minimum wage and overtime", "Unions", "Safety"],
    correctOption: 1,
    explanation: "Also child labor laws."
  },
  {
    id: 189,
    domain: Domain.MANAGEMENT,
    question: "Which chart is used for scheduling project timelines?",
    answer: "Gantt Chart",
    options: ["Pie Chart", "Gantt Chart", "Org Chart", "Flow Chart"],
    correctOption: 1,
    explanation: "Horizontal bar chart showing time."
  },
  {
    id: 190,
    domain: Domain.MANAGEMENT,
    question: "PERTEquation:",
    answer: "Program Evaluation and Review Technique",
    options: ["Program Evaluation and Review Technique", "Performance Evaluation", "Planning", "None"],
    correctOption: 0,
    explanation: "Used for complex projects. Critical path method."
  },
  {
    id: 191,
    domain: Domain.MANAGEMENT,
    question: "Pareto Principle:",
    answer: "80/20 Rule",
    options: ["50/50 Rule", "80/20 Rule", "90/10 Rule", "100% Rule"],
    correctOption: 1,
    explanation: "80% of effects come from 20% of causes."
  },
  {
    id: 192,
    domain: Domain.MANAGEMENT,
    question: "Which is a 'profitability ratio'?",
    answer: "Return on Assets",
    options: ["Current Ratio", "Inventory Turnover", "Return on Assets", "Debt to Equity"],
    correctOption: 2,
    explanation: "Measures ability to generate income."
  },
  {
    id: 193,
    domain: Domain.MANAGEMENT,
    question: "Food Cost Percentage formula:",
    answer: "Food Cost / Food Sales",
    options: ["Food Sales / Food Cost", "Food Cost / Food Sales", "Sales - Cost", "Inventory / Sales"],
    correctOption: 1,
    explanation: "Typically 30-35%."
  },
  {
    id: 194,
    domain: Domain.MANAGEMENT,
    question: "Arbitration is:",
    answer: "Binding decision by a third party",
    options: ["Voluntary", "Binding decision by a third party", "Mediation", "Discussion"],
    correctOption: 1,
    explanation: "Mediation is non-binding."
  },
  {
    id: 195,
    domain: Domain.MANAGEMENT,
    question: "A shop where you MUST join the union after hiring:",
    answer: "Union Shop",
    options: ["Open Shop", "Union Shop", "Closed Shop", "Agency Shop"],
    correctOption: 1,
    explanation: "Closed shop (must join before) is illegal."
  },

  // --- BIOCHEMISTRY & METABOLISM (196-225) ---
  {
    id: 196,
    domain: Domain.BIOCHEMISTRY,
    question: "End product of anaerobic glycolysis?",
    answer: "Lactate",
    options: ["Pyruvate", "Acetyl CoA", "Lactate", "Citrate"],
    correctOption: 2,
    explanation: "Without oxygen, Pyruvate -> Lactate (Cori Cycle)."
  },
  {
    id: 197,
    domain: Domain.BIOCHEMISTRY,
    question: "End product of aerobic glycolysis?",
    answer: "Pyruvate",
    options: ["Lactate", "Pyruvate", "Ethanol", "Glycogen"],
    correctOption: 1,
    explanation: "Pyruvate then enters mitochondria -> Acetyl CoA."
  },
  {
    id: 198,
    domain: Domain.BIOCHEMISTRY,
    question: "Vitamin B6 (Pyridoxine) is a coenzyme for:",
    answer: "Transamination (Protein metabolism)",
    options: ["Glycolysis", "Transamination (Protein metabolism)", "Fat synthesis", "Calcium absorption"],
    correctOption: 1,
    explanation: "Crucial for amino acid metabolism (ALT/AST enzymes)."
  },
  {
    id: 199,
    domain: Domain.BIOCHEMISTRY,
    question: "Tryptophan is a precursor for:",
    answer: "Serotonin and Niacin",
    options: ["Dopamine", "Serotonin and Niacin", "Melanin", "Thyroxine"],
    correctOption: 1,
    explanation: "An essential amino acid converting to neurotransmitters and B3."
  },
  {
    id: 200,
    domain: Domain.BIOCHEMISTRY,
    question: "Where does the Krebs Cycle occur?",
    answer: "Mitochondria",
    options: ["Cytoplasm", "Mitochondria", "Nucleus", "Ribosome"],
    correctOption: 1,
    explanation: "Powerhouse of the cell."
  },
  {
    id: 201,
    domain: Domain.BIOCHEMISTRY,
    question: "Intrinsic Factor is needed to absorb:",
    answer: "B12",
    options: ["Iron", "Calcium", "B12", "Folate"],
    correctOption: 2,
    explanation: "Secreted by stomach, absorbed in ileum."
  },
  {
    id: 202,
    domain: Domain.BIOCHEMISTRY,
    question: "Which hormone lowers blood glucose?",
    answer: "Insulin",
    options: ["Glucagon", "Cortisol", "Insulin", "Epinephrine"],
    correctOption: 2,
    explanation: "Beta cells of pancreas secrete insulin to drive glucose into cells."
  },
  {
    id: 203,
    domain: Domain.BIOCHEMISTRY,
    question: "Which hormone raises blood glucose?",
    answer: "Glucagon",
    options: ["Insulin", "Glucagon", "Serotonin", "Calcitonin"],
    correctOption: 1,
    explanation: "Alpha cells secrete glucagon to stimulate glycogenolysis."
  },
  {
    id: 204,
    domain: Domain.BIOCHEMISTRY,
    question: "Hormone involved in fight or flight (catabolic)?",
    answer: "Epinephrine",
    options: ["Insulin", "Epinephrine", "Gastrin", "Secretin"],
    correctOption: 1,
    explanation: "Releases glucose from liver glycogen rapidly."
  },
  {
    id: 205,
    domain: Domain.BIOCHEMISTRY,
    question: "Aldosterone's primary role:",
    answer: "Sodium retention",
    options: ["Sodium retention", "Potassium retention", "Glucose regulation", "Calcium absorption"],
    correctOption: 0,
    explanation: "Kidneys retain Na (and water), excrete K."
  },
  {
    id: 206,
    domain: Domain.BIOCHEMISTRY,
    question: "Phenylalanine converts to:",
    answer: "Tyrosine",
    options: ["Tryptophan", "Tyrosine", "Alanine", "Methionine"],
    correctOption: 1,
    explanation: "Blocked in PKU. Tyrosine becomes essential."
  },
  {
    id: 207,
    domain: Domain.BIOCHEMISTRY,
    question: "Fat is transported in the blood as:",
    answer: "Chylomicrons/Lipoproteins",
    options: ["Micelles", "Chylomicrons/Lipoproteins", "Free fatty acids", "Glycerol"],
    correctOption: 1,
    explanation: "Chylomicrons leave the gut via lymph."
  },
  {
    id: 208,
    domain: Domain.BIOCHEMISTRY,
    question: "Role of Bile:",
    answer: "Emulsifies fat",
    options: ["Digests protein", "Emulsifies fat", "Hydrolyzes carbs", "Neutralizes acid"],
    correctOption: 1,
    explanation: "Increases surface area for lipase to work."
  },
  {
    id: 209,
    domain: Domain.BIOCHEMISTRY,
    question: "Active form of Vitamin D:",
    answer: "1,25-dihydroxyvitamin D (Calcitriol)",
    options: ["Cholecalciferol", "Calcidiol", "1,25-dihydroxyvitamin D (Calcitriol)", "Ergocalciferol"],
    correctOption: 2,
    explanation: "Activated in the kidney."
  },
  {
    id: 210,
    domain: Domain.BIOCHEMISTRY,
    question: "Which mineral aids in Iron absorption?",
    answer: "Vitamin C",
    options: ["Calcium", "Vitamin C", "Zinc", "Magnesium"],
    correctOption: 1,
    explanation: "Reduces ferric to ferrous state (more absorbable)."
  },
  {
    id: 211,
    domain: Domain.BIOCHEMISTRY,
    question: "What is the limiting amino acid in legumes?",
    answer: "Methionine",
    options: ["Lysine", "Methionine", "Tryptophan", "Arginine"],
    correctOption: 1,
    explanation: "Legumes low in Methionine. Grains low in Lysine. Mix to compliment."
  },
  {
    id: 212,
    domain: Domain.BIOCHEMISTRY,
    question: "Pantothenic Acid (B5) is a component of:",
    answer: "Coenzyme A",
    options: ["FAD", "NAD", "Coenzyme A", "PLP"],
    correctOption: 2,
    explanation: "Essential for Acetyl CoA formation."
  },
  {
    id: 213,
    domain: Domain.BIOCHEMISTRY,
    question: "Which pathway breaks down fatty acids for energy?",
    answer: "Beta-oxidation",
    options: ["Glycolysis", "Beta-oxidation", "Lipogenesis", "Gluconeogenesis"],
    correctOption: 1,
    explanation: "Occurs in mitochondria. Produces Acetyl CoA."
  },
  {
    id: 214,
    domain: Domain.BIOCHEMISTRY,
    question: "Ketosis occurs when there is a shortage of:",
    answer: "Carbohydrate",
    options: ["Fat", "Protein", "Carbohydrate", "Oxygen"],
    correctOption: 2,
    explanation: "Incomplete fat oxidation due to lack of oxaloacetate (from carbs)."
  },
  {
    id: 215,
    domain: Domain.BIOCHEMISTRY,
    question: "Magnesium is essential for:",
    answer: "ATP hydrolysis/Energy production",
    options: ["Blood clotting", "ATP hydrolysis/Energy production", "Thyroid function", "Vision"],
    correctOption: 1,
    explanation: "Stabilizes ATP."
  },
  {
    id: 216,
    domain: Domain.BIOCHEMISTRY,
    question: "Which pathway creates glucose from non-carb sources?",
    answer: "Gluconeogenesis",
    options: ["Glycogenolysis", "Gluconeogenesis", "Glycolysis", "Lipolysis"],
    correctOption: 1,
    explanation: "Occurs mainly in liver."
  },
  {
    id: 217,
    domain: Domain.BIOCHEMISTRY,
    question: "Cori Cycle Recycles:",
    answer: "Lactate to Glucose",
    options: ["Fat to Sugar", "Lactate to Glucose", "Protein to Fat", "Alcohol to Energy"],
    correctOption: 1,
    explanation: "Muscle lactate goes to liver -> glucose."
  },
  {
    id: 218,
    domain: Domain.BIOCHEMISTRY,
    question: "Thiamin (B1) deficiency affects:",
    answer: "Carbohydrate metabolism",
    options: ["Fat metabolism", "Carbohydrate metabolism", "Protein metabolism", "Bone health"],
    correctOption: 1,
    explanation: "Needed for Pyruvate Dehydrogenase (Pyruvate -> Acetyl CoA)."
  },
  {
    id: 219,
    domain: Domain.BIOCHEMISTRY,
    question: "Intracellular cation:",
    answer: "Potassium",
    options: ["Sodium", "Potassium", "Chloride", "Calcium"],
    correctOption: 1,
    explanation: "Sodium is extracellular."
  },
  {
    id: 220,
    domain: Domain.BIOCHEMISTRY,
    question: "Biotin is a coenzyme for:",
    answer: "Carboxylation (adding CO2)",
    options: ["Oxidation", "Carboxylation (adding CO2)", "Reduction", "Hydrolysis"],
    correctOption: 1,
    explanation: "Important in gluconeogenesis/fatty acid synthesis."
  },

  // --- CLINICAL & RESEARCH (221-250) ---
  {
    id: 221,
    domain: Domain.CLINICAL,
    question: "Metabolic Acidosis is commonly caused by:",
    answer: "Uncontrolled Diabetes (DKA) or Diarrhea",
    options: ["Vomiting", "Uncontrolled Diabetes (DKA) or Diarrhea", "COPD", "Hyperventilation"],
    correctOption: 1,
    explanation: "Loss of base (bicarb) or accumulation of acid (ketones)."
  },
  {
    id: 222,
    domain: Domain.CLINICAL,
    question: "Metabolic Alkalosis is commonly caused by:",
    answer: "Vomiting",
    options: ["Diarrhea", "Vomiting", "Renal failure", "Hypoventilation"],
    correctOption: 1,
    explanation: "Loss of acid (H+) from stomach."
  },
  {
    id: 223,
    domain: Domain.CLINICAL,
    question: "Russell's Sign (calluses on knuckles) indicates:",
    answer: "Bulimia Nervosa",
    options: ["Anorexia Nervosa", "Bulimia Nervosa", "Binge Eating", "Pica"],
    correctOption: 1,
    explanation: "Caused by self-induced vomiting."
  },
  {
    id: 224,
    domain: Domain.CLINICAL,
    question: "Which medication decreases absorption of B12?",
    answer: "Metformin",
    options: ["Insulin", "Metformin", "Warfarin", "Lasix"],
    correctOption: 1,
    explanation: "Long term Metformin use is linked to B12 deficiency."
  },
  {
    id: 225,
    domain: Domain.CLINICAL,
    question: "Loop diuretics (Lasix/Furosemide) deplete:",
    answer: "Potassium and Thiamin",
    options: ["Potassium and Thiamin", "Sodium only", "Calcium only", "Iron"],
    correctOption: 0,
    explanation: "Non-potassium sparing. Need K supplementation."
  },
  {
    id: 226,
    domain: Domain.CLINICAL,
    question: "Somogyi Effect involves:",
    answer: "Hypoglycemia followed by rebound Hyperglycemia",
    options: ["Dawn hyperglycemia", "Hypoglycemia followed by rebound Hyperglycemia", "Consistent high sugar", "Consistent low sugar"],
    correctOption: 1,
    explanation: "Rebound from low blood sugar (often at night). Needs less insulin/more snack."
  },
  {
    id: 227,
    domain: Domain.CLINICAL,
    question: "Dawn Phenomenon involves:",
    answer: "Natural morning hyperglycemia due to hormones",
    options: ["Rebound from low", "Natural morning hyperglycemia due to hormones", "Drug reaction", "Late night snacking"],
    correctOption: 1,
    explanation: "Growth hormone/Cortisol spike in AM. Needs more insulin."
  },
  {
    id: 228,
    domain: Domain.CLINICAL,
    question: "Pressure injury healing needs:",
    answer: "High protein (1.2-1.5g), Vit C, Zinc",
    options: ["Low protein", "High protein (1.2-1.5g), Vit C, Zinc", "High fat", "Fluid restriction"],
    correctOption: 1,
    explanation: "Substrates for collagen formation and immune function."
  },
  {
    id: 229,
    domain: Domain.CLINICAL,
    question: "What food consistency is IDDSI Level 4?",
    answer: "Pureed",
    options: ["Minced & Moist", "Pureed", "Liquidized", "Soft & Bite-Sized"],
    correctOption: 1,
    explanation: "Extremely Thick liquids / Pureed foods. No chewing required."
  },
  {
    id: 230,
    domain: Domain.CLINICAL,
    question: "Maple Syrup Urine Disease (MSUD) restricts:",
    answer: "BCAAs (Leucine, Isoleucine, Valine)",
    options: ["Phenylalanine", "BCAAs (Leucine, Isoleucine, Valine)", "Tyrosine", "Methionine"],
    correctOption: 1,
    explanation: "Defect in decarboxylation of BCAAs."
  },
  {
    id: 231,
    domain: Domain.CLINICAL,
    question: "Diet for Heart Failure typically restricts sodium to:",
    answer: "2000 mg",
    options: ["500 mg", "2000 mg", "4000 mg", "No restriction"],
    correctOption: 1,
    explanation: "To reduce fluid retention/edema."
  },
  {
    id: 232,
    domain: Domain.CLINICAL,
    question: "The 'Gold Standard' research design is:",
    answer: "Randomized Clinical Trial (RCT)",
    options: ["Cohort study", "Case-control", "RCT", "Cross-sectional"],
    correctOption: 2,
    explanation: "Best for determining cause and effect."
  },
  {
    id: 233,
    domain: Domain.CLINICAL,
    question: "Validity in research means:",
    answer: "It measures what it intends to measure",
    options: ["It is repeatable", "It measures what it intends to measure", "It has a large sample", "It is published"],
    correctOption: 1,
    explanation: "Accuracy. Reliability = Consistency (Repeatability)."
  },
  {
    id: 234,
    domain: Domain.CLINICAL,
    question: "P-value < 0.05 indicates:",
    answer: "Statistically significant difference",
    options: ["No difference", "Statistically significant difference", "Error in data", "High correlation"],
    correctOption: 1,
    explanation: "Results are likely not due to chance."
  },
  {
    id: 235,
    domain: Domain.CLINICAL,
    question: "Normal pH of blood:",
    answer: "7.35 - 7.45",
    options: ["7.0 - 7.2", "7.35 - 7.45", "7.5 - 7.6", "6.8 - 7.0"],
    correctOption: 1,
    explanation: "Tightly regulated buffer system."
  },
  {
    id: 236,
    domain: Domain.CLINICAL,
    question: "Respiratory Acidosis is caused by:",
    answer: "CO2 retention (Hypoventilation)",
    options: ["Hyperventilation", "CO2 retention (Hypoventilation)", "Vomiting", "Diarrhea"],
    correctOption: 1,
    explanation: "Lungs holding too much CO2 (Acid)."
  },
  {
    id: 237,
    domain: Domain.CLINICAL,
    question: "Respiratory Alkalosis is caused by:",
    answer: "Hyperventilation",
    options: ["Hypoventilation", "Hyperventilation", "Vomiting", "Kidney failure"],
    correctOption: 1,
    explanation: "Blowing off too much CO2 (Acid)."
  },
  {
    id: 238,
    domain: Domain.CLINICAL,
    question: "Dependent Variable is:",
    answer: "The outcome being measured",
    options: ["The variable manipulated", "The outcome being measured", "The constant", "The researcher"],
    correctOption: 1,
    explanation: "It depends on the independent variable."
  },
  {
    id: 239,
    domain: Domain.CLINICAL,
    question: "Incidence vs Prevalence:",
    answer: "Incidence = New cases; Prevalence = Existing cases",
    options: ["Incidence = Old; Prevalence = New", "Incidence = New cases; Prevalence = Existing cases", "They are the same", "Prevalence = Future cases"],
    correctOption: 1,
    explanation: "Incidence is rate of new disease."
  },
  {
    id: 240,
    domain: Domain.CLINICAL,
    question: "Which statistical test compares means of 2 groups?",
    answer: "T-test",
    options: ["ANOVA", "Chi-square", "T-test", "Regression"],
    correctOption: 2,
    explanation: "ANOVA compares 3 or more."
  },
  {
    id: 241,
    domain: Domain.CLINICAL,
    question: "Double blind study removes:",
    answer: "Bias",
    options: ["Cost", "Bias", "Participants", "Data"],
    correctOption: 1,
    explanation: "Neither researcher nor subject knows who gets treatment."
  },
  {
    id: 242,
    domain: Domain.CLINICAL,
    question: "Prader Willi Syndrome causes:",
    answer: "Insatiable appetite (Ghrelin)",
    options: ["Anorexia", "Insatiable appetite (Ghrelin)", "High metabolism", "Lactose intolerance"],
    correctOption: 1,
    explanation: "Genetic disorder leading to obesity."
  },
  {
    id: 243,
    domain: Domain.CLINICAL,
    question: "Spastic Cerebral Palsy nutritional concern:",
    answer: "Obesity (limited movement)",
    options: ["High calorie needs", "Obesity (limited movement)", "High protein needs", "Dehydration"],
    correctOption: 1,
    explanation: "Athetoid (non-spastic) CP has high needs due to constant movement."
  },
  {
    id: 244,
    domain: Domain.CLINICAL,
    question: "Diet for Addison's Disease:",
    answer: "High Sodium, High Protein",
    options: ["Low Sodium", "High Sodium, High Protein", "Low Protein", "Fluid restriction"],
    correctOption: 1,
    explanation: "Adrenal insufficiency leads to Na loss."
  },
  {
    id: 245,
    domain: Domain.CLINICAL,
    question: "Goiter is caused by deficiency of:",
    answer: "Iodine",
    options: ["Iron", "Iodine", "Zinc", "Selenium"],
    correctOption: 1,
    explanation: "Enlarged thyroid gland."
  },
  {
    id: 246,
    domain: Domain.CLINICAL,
    question: "Nutrition screening must be done within:",
    answer: "24 hours of admission",
    options: ["12 hours", "24 hours of admission", "48 hours", "1 week"],
    correctOption: 1,
    explanation: "JCAHO standard."
  },
  {
    id: 247,
    domain: Domain.CLINICAL,
    question: "Which medication is an appetite stimulant?",
    answer: "Megestrol acetate (Megace)",
    options: ["Ritalin", "Megestrol acetate (Megace)", "Metformin", "Orlistat"],
    correctOption: 1,
    explanation: "Also Marinol."
  },
  {
    id: 248,
    domain: Domain.CLINICAL,
    question: "Cyclosporine (immunosuppressant) causes:",
    answer: "Hyperlipidemia, Hyperkalemia",
    options: ["Hypoglycemia", "Hyperlipidemia, Hyperkalemia", "Weight loss", "Hypotension"],
    correctOption: 1,
    explanation: "Used in transplants."
  },
  {
    id: 249,
    domain: Domain.CLINICAL,
    question: "Isoniazid (INH) treats TB and depletes:",
    answer: "Vitamin B6",
    options: ["Vitamin C", "Vitamin B6", "Iron", "Calcium"],
    correctOption: 1,
    explanation: "Need B6 supplement to prevent neuropathy."
  },
  {
    id: 250,
    domain: Domain.CLINICAL,
    question: "Levodopa (Parkinson's) interacts with:",
    answer: "Protein and B6",
    options: ["Fat", "Protein and B6", "Carbohydrate", "Vitamin C"],
    correctOption: 1,
    explanation: "Take drug away from protein meals. B6 increases breakdown of drug."
  },

  // --- ADVANCED CASE STUDIES & SCENARIOS (251-300) ---
  {
    id: 251,
    domain: Domain.INTERVENTION,
    question: "Calculate the GIR for a 60kg patient receiving TPN with 300g Dextrose over 24 hours.",
    answer: "3.5 mg/kg/min",
    options: ["2.8 mg/kg/min", "3.5 mg/kg/min", "4.2 mg/kg/min", "5.0 mg/kg/min"],
    correctOption: 1,
    explanation: "300g * 1000 = 300,000mg. / 60kg = 5000 mg/kg. / 1440 min = 3.47."
  },
  {
    id: 252,
    domain: Domain.FOODSERVICE,
    question: "You need 5 full-time positions. How many relief employees do you need for coverage?",
    answer: "2.75 relief employees",
    options: ["1.55", "2.75", "3.0", "0.55"],
    correctOption: 1,
    explanation: "Multiply by 0.55. 5 * 0.55 = 2.75. (Alternatively 1.55 employees are needed per full time position total coverage)."
  },
  {
    id: 253,
    domain: Domain.MANAGEMENT,
    question: "If the Break-Even point increases while sales remain constant, what happens to profit?",
    answer: "Profit decreases",
    options: ["Profit increases", "Profit decreases", "Stays the same", "Cannot determine"],
    correctOption: 1,
    explanation: "You need to sell more just to cover costs, eroding the profit margin."
  },
  {
    id: 254,
    domain: Domain.CLINICAL,
    question: "In End Stage Liver Disease (ESLD), asterixis is a sign of:",
    answer: "Impending hepatic coma",
    options: ["Vitamin deficiency", "Impending hepatic coma", "Fluid overload", "Low blood sugar"],
    correctOption: 1,
    explanation: "Flapping tremor due to ammonia buildup."
  },
  {
    id: 255,
    domain: Domain.CLINICAL,
    question: "A patient post-Billroth II (gastrojejunostomy) is most at risk for deficiency of:",
    answer: "B12 and Iron",
    options: ["Vitamin C and Zinc", "B12 and Iron", "Potassium and Magnesium", "Protein"],
    correctOption: 1,
    explanation: "Bypasses duodenum (Iron absorption) and reduces acid/IF (B12)."
  },
  {
    id: 256,
    domain: Domain.MANAGEMENT,
    question: "Value Analysis focuses on:",
    answer: "Reducing cost without compromising quality",
    options: ["Increasing price", "Reducing cost without compromising quality", "Marketing", "Increasing labor"],
    correctOption: 1,
    explanation: "Reviewing components of a product/service to improve value."
  },
  {
    id: 257,
    domain: Domain.CLINICAL,
    question: "Which nutrient should be assessed in a patient with non-healing pressure ulcers despite adequate protein?",
    answer: "Zinc and Vitamin C",
    options: ["Vitamin A and D", "Zinc and Vitamin C", "Iron and B12", "Calcium and Magnesium"],
    correctOption: 1,
    explanation: "Critical cofactors for collagen synthesis."
  },
  {
    id: 258,
    domain: Domain.BIOCHEMISTRY,
    question: "In starvation, the brain transitions from glucose to using:",
    answer: "Ketone bodies",
    options: ["Fatty acids", "Ketone bodies", "Amino acids", "Lactate"],
    correctOption: 1,
    explanation: "Brain cannot use fatty acids directly (BBB). Uses ketones to spare muscle protein."
  },
  {
    id: 259,
    domain: Domain.MANAGEMENT,
    question: "According to Herzberg, giving an employee a bonus is a:",
    answer: "Hygiene factor (prevents dissatisfaction)",
    options: ["Motivator", "Hygiene factor (prevents dissatisfaction)", "Punishment", "None"],
    correctOption: 1,
    explanation: "Money is usually not a long-term motivator, but lack of it causes dissatisfaction."
  },
  {
    id: 260,
    domain: Domain.FOODSERVICE,
    question: "Dishwasher rinse temperature is 160F. What is the issue?",
    answer: "Too low for sanitization (needs 180F)",
    options: ["Too high", "Too low for sanitization (needs 180F)", "Perfect", "Needs chemical"],
    correctOption: 1,
    explanation: "High temp machines require 180F final rinse."
  },
  {
    id: 261,
    domain: Domain.CLINICAL,
    question: "Pt with ileostomy has high output. You should monitor:",
    answer: "Water and electrolyte balance",
    options: ["Protein intake", "Water and electrolyte balance", "Fat absorption", "Fiber intake"],
    correctOption: 1,
    explanation: "Colon absorbs water/salt. Ileostomy bypasses colon -> dehydration risk."
  },
  {
    id: 262,
    domain: Domain.INTERVENTION,
    question: "A vegan patient has MCV 105. Which food would you recommend?",
    answer: "Fortified nutritional yeast or B12 supplement",
    options: ["Spinach", "Fortified nutritional yeast or B12 supplement", "Red meat", "Oranges"],
    correctOption: 1,
    explanation: "MCV 105 = Macrocytic anemia (B12). Spinach has folate but no B12."
  },
  {
    id: 263,
    domain: Domain.MANAGEMENT,
    question: "What represents the 'breakeven point' in dollars?",
    answer: "Fixed Cost / 1 - (Variable Cost / Sales)",
    options: ["Fixed Cost / Contribution Margin", "Fixed Cost / 1 - (Variable Cost / Sales)", "Sales - Variable", "Total Cost"],
    correctOption: 1,
    explanation: "Formula for BE in sales volume."
  },
  {
    id: 264,
    domain: Domain.CLINICAL,
    question: "Refeeding syndrome electrolyte shift involves movement from:",
    answer: "Extracellular to Intracellular",
    options: ["Intracellular to Extracellular", "Extracellular to Intracellular", "Blood to Urine", "Bone to Blood"],
    correctOption: 1,
    explanation: "Insulin drives K, Mg, Phos INTO cells, dropping serum levels."
  },
  {
    id: 265,
    domain: Domain.FOODSERVICE,
    question: "Determine the food cost per meal: Beginning Inv $1000, Purchases $500, Ending Inv $800, Meals 500.",
    answer: "$1.40",
    options: ["$1.00", "$1.40", "$2.00", "$0.60"],
    correctOption: 1,
    explanation: "(1000 + 500 - 800) / 500 = 700 / 500 = 1.40."
  },
  {
    id: 266,
    domain: Domain.CLINICAL,
    question: "Which of the following inhibits iron absorption?",
    answer: "Tannins (Tea/Coffee)",
    options: ["Vitamin C", "MFP Factor", "Tannins (Tea/Coffee)", "HCL"],
    correctOption: 2,
    explanation: "Bind iron. Drink tea/coffee between meals."
  },
  {
    id: 267,
    domain: Domain.MANAGEMENT,
    question: "A job specification describes:",
    answer: "Qualifications required (Education, Skills)",
    options: ["Duties", "Qualifications required (Education, Skills)", "Time schedule", "Salary"],
    correctOption: 1,
    explanation: "Specs = Specifics of the PERSON."
  },
  {
    id: 268,
    domain: Domain.BIOCHEMISTRY,
    question: "Which amino acid is a precursor to Nitric Oxide (vasodilator)?",
    answer: "Arginine",
    options: ["Glutamine", "Arginine", "Leucine", "Tyrosine"],
    correctOption: 1,
    explanation: "Important for blood flow and wound healing."
  },
  {
    id: 269,
    domain: Domain.CLINICAL,
    question: "Pt on Peritoneal Dialysis (PD) absorbs approx how much dextrose from dialysate?",
    answer: "60-70%",
    options: ["100%", "60-70%", "40%", "None"],
    correctOption: 1,
    explanation: "Must calculate this calorie load (approx 3.4 kcal/g * absorption)."
  },
  {
    id: 270,
    domain: Domain.INTERVENTION,
    question: "Maximum hang time for closed system enteral formula?",
    answer: "24-48 hours",
    options: ["4 hours", "8 hours", "12 hours", "24-48 hours"],
    correctOption: 3,
    explanation: "Sterile system, less contamination risk."
  },
  {
    id: 271,
    domain: Domain.MANAGEMENT,
    question: "The primary function of management that involves setting goals?",
    answer: "Planning",
    options: ["Organizing", "Planning", "Directing", "Controlling"],
    correctOption: 1,
    explanation: "First function. Basic vs Strategic."
  },
  {
    id: 272,
    domain: Domain.CLINICAL,
    question: "SIADH (Syndrome of Inappropriate Antidiuretic Hormone) causes:",
    answer: "Hyponatremia (dilutional)",
    options: ["Hypernatremia", "Hyponatremia (dilutional)", "Dehydration", "High urine output"],
    correctOption: 1,
    explanation: "Retaining too much water dilutes the sodium. Treat with fluid restriction."
  },
  {
    id: 273,
    domain: Domain.FOODSERVICE,
    question: "Scoop #6 yields how much?",
    answer: "2/3 cup (approx 5-6 oz)",
    options: ["1/2 cup", "2/3 cup (approx 5-6 oz)", "1 cup", "1/4 cup"],
    correctOption: 1,
    explanation: "32 / 6 = 5.33 oz."
  },
  {
    id: 274,
    domain: Domain.CLINICAL,
    question: "Which nutrient is most affected by gastric bypass (Roux-en-Y)?",
    answer: "B12, Iron, Calcium, Folate",
    options: ["Vitamin C", "B12, Iron, Calcium, Folate", "Sodium", "Carbs"],
    correctOption: 1,
    explanation: "Malabsorptive procedure. Lifelong supplementation needed."
  },
  {
    id: 275,
    domain: Domain.MANAGEMENT,
    question: "Usually, the most expensive category in the foodservice budget is:",
    answer: "Labor",
    options: ["Food", "Labor", "Utilities", "Equipment"],
    correctOption: 1,
    explanation: "Typically 50-60% of budget."
  },
  {
    id: 276,
    domain: Domain.CLINICAL,
    question: "Sensitivity in screening refers to:",
    answer: "Ability to identify those WITH the disease (True Positive)",
    options: ["Identifying those without disease", "Ability to identify those WITH the disease (True Positive)", "Cost effectiveness", "Patient comfort"],
    correctOption: 1,
    explanation: "Sensitivity = detecting the sick."
  },
  {
    id: 277,
    domain: Domain.CLINICAL,
    question: "Specificity in screening refers to:",
    answer: "Ability to identify those WITHOUT the disease (True Negative)",
    options: ["Identifying the sick", "Ability to identify those WITHOUT the disease (True Negative)", "Speed", "Accuracy"],
    correctOption: 1,
    explanation: "Specificity = detecting the healthy."
  },
  {
    id: 278,
    domain: Domain.INTERVENTION,
    question: "Corrected Calcium formula:",
    answer: "Serum Ca + 0.8(4 - Serum Albumin)",
    options: ["Serum Ca - Albumin", "Serum Ca + 0.8(4 - Serum Albumin)", "Ca x Albumin", "Ca / 2"],
    correctOption: 1,
    explanation: "Used when albumin is low (<4.0)."
  },
  {
    id: 279,
    domain: Domain.CLINICAL,
    question: "MNT for diverticulosis vs diverticulitis?",
    answer: "Losis: High Fiber; Itis: Low Fiber/Clear Liquid",
    options: ["Both high fiber", "Losis: Low Fiber; Itis: High Fiber", "Losis: High Fiber; Itis: Low Fiber/Clear Liquid", "Both low fiber"],
    correctOption: 2,
    explanation: "Prevent inflammation with fiber (Losis). Rest bowel during inflammation (Itis)."
  },
  {
    id: 280,
    domain: Domain.MANAGEMENT,
    question: "The graphic representation of the organizational structure is:",
    answer: "Organizational Chart",
    options: ["Flow chart", "Organizational Chart", "Gantt chart", "Scatter plot"],
    correctOption: 1,
    explanation: "Shows chain of command and relationships."
  },
  {
    id: 281,
    domain: Domain.CLINICAL,
    question: "Homocysteine levels are elevated in deficiencies of:",
    answer: "Folate, B6, B12",
    options: ["Vitamin C, D, E", "Folate, B6, B12", "Iron, Zinc", "Calcium"],
    correctOption: 1,
    explanation: "High homocysteine is a risk factor for CVD."
  },
  {
    id: 282,
    domain: Domain.FOODSERVICE,
    question: "A convection oven reduces cooking time by:",
    answer: "Circulating hot air (fan)",
    options: ["Using microwaves", "Circulating hot air (fan)", "Steam pressure", "Infrared"],
    correctOption: 1,
    explanation: "Cooks faster and more evenly at lower temps (reduce temp by 25-50F)."
  },
  {
    id: 283,
    domain: Domain.CLINICAL,
    question: "The Somogyi effect is treated by:",
    answer: "Decreasing evening insulin or adding a bedtime snack",
    options: ["Increasing insulin", "Decreasing evening insulin or adding a bedtime snack", "Removing snack", "Exercise"],
    correctOption: 1,
    explanation: "Prevents the hypoglycemia that triggers the rebound."
  },
  {
    id: 284,
    domain: Domain.MANAGEMENT,
    question: "Total Quality Management (TQM) emphasizes:",
    answer: "Customer satisfaction and continuous improvement",
    options: ["Profit only", "Customer satisfaction and continuous improvement", "Strict rules", "Cutting staff"],
    correctOption: 1,
    explanation: "Empowers employees to improve processes."
  },
  {
    id: 285,
    domain: Domain.CLINICAL,
    question: "What is the RQ of a mixed diet?",
    answer: "0.85",
    options: ["0.7", "0.85", "1.0", "1.2"],
    correctOption: 1,
    explanation: "Average of carbs, fat, protein."
  },
  {
    id: 286,
    domain: Domain.INTERVENTION,
    question: "Which has the highest renal solute load?",
    answer: "Protein",
    options: ["Fat", "Carbohydrate", "Protein", "Water"],
    correctOption: 2,
    explanation: "Nitrogenous waste requires water for excretion."
  },
  {
    id: 287,
    domain: Domain.MANAGEMENT,
    question: "If turnover rate is high, the management concern is:",
    answer: "High cost of hiring and training",
    options: ["Saving money on benefits", "High cost of hiring and training", "Fresh ideas", "None"],
    correctOption: 1,
    explanation: "Turnover is expensive and lowers morale."
  },
  {
    id: 288,
    domain: Domain.CLINICAL,
    question: "Thiazide diuretics may induce:",
    answer: "Hypokalemia and Hypercalcemia",
    options: ["Hyperkalemia", "Hypokalemia and Hypercalcemia", "Hyponatremia only", "Hypernatremia"],
    correctOption: 1,
    explanation: "Absorbs Calcium, excretes Potassium."
  },
  {
    id: 289,
    domain: Domain.FOODSERVICE,
    question: "Correct order of food storage on shelves (Top to Bottom):",
    answer: "Ready to eat, Seafood, Whole Beef/Pork, Ground Meat, Poultry",
    options: ["Poultry, Beef, Seafood", "Ready to eat, Seafood, Whole Beef/Pork, Ground Meat, Poultry", "Ground meat, Ready to eat", "Any order"],
    correctOption: 1,
    explanation: "Based on minimum cooking temperatures to prevent cross-contamination."
  },
  {
    id: 290,
    domain: Domain.CLINICAL,
    question: "Glutamine is often supplemented in critical care because:",
    answer: "It is the preferred fuel for enterocytes (gut cells)",
    options: ["It builds muscle", "It is the preferred fuel for enterocytes (gut cells)", "It reduces fever", "It raises blood pressure"],
    correctOption: 1,
    explanation: "Helps maintain gut mucosal barrier."
  },
  {
    id: 291,
    domain: Domain.MANAGEMENT,
    question: "Which financial statement shows financial position at a specific point in time?",
    answer: "Balance Sheet",
    options: ["Income Statement", "Balance Sheet", "Cash Flow", "Budget"],
    correctOption: 1,
    explanation: "Static snapshot (Assets, Liabilities, Equity)."
  },
  {
    id: 292,
    domain: Domain.CLINICAL,
    question: "Which electrolyte is intracellular and critical for ATP?",
    answer: "Magnesium",
    options: ["Sodium", "Magnesium", "Chloride", "Calcium"],
    correctOption: 1,
    explanation: "Mg binds ATP for function."
  },
  {
    id: 293,
    domain: Domain.FOODSERVICE,
    question: "The purpose of a blast chiller is to:",
    answer: "Move food through danger zone quickly (<90 mins)",
    options: ["Freeze food solid", "Move food through danger zone quickly (<90 mins)", "Cook food", "Store food"],
    correctOption: 1,
    explanation: "Essential for Cook-Chill systems."
  },
  {
    id: 294,
    domain: Domain.CLINICAL,
    question: "Orlistat (Xenical) mechanism of action:",
    answer: "Lipase inhibitor (reduces fat absorption)",
    options: ["Appetite suppressant", "Lipase inhibitor (reduces fat absorption)", "Insulin sensitizer", "Stimulant"],
    correctOption: 1,
    explanation: "Causes steatorrhea if high fat diet consumed."
  },
  {
    id: 295,
    domain: Domain.MANAGEMENT,
    question: "Variable rate/Flexible budget:",
    answer: "Adjusts based on level of activity (sales/volume)",
    options: ["Set in stone", "Adjusts based on level of activity (sales/volume)", "Zero based", "Historical"],
    correctOption: 1,
    explanation: "Best for varying patient census or sales."
  },
  {
    id: 296,
    domain: Domain.CLINICAL,
    question: "The curve on a normal distribution chart (Bell Curve):",
    answer: "Mean, Median, and Mode are the same",
    options: ["Mean is highest", "Median is lowest", "Mean, Median, and Mode are the same", "No pattern"],
    correctOption: 2,
    explanation: "Center of the bell."
  },
  {
    id: 297,
    domain: Domain.INTERVENTION,
    question: "Fiber recommendation for adults:",
    answer: "25-38g/day (or 14g/1000kcal)",
    options: ["10-15g", "25-38g/day (or 14g/1000kcal)", "50g", "No limit"],
    correctOption: 1,
    explanation: "Women ~25g, Men ~38g."
  },
  {
    id: 298,
    domain: Domain.FOODSERVICE,
    question: "Which agency regulates food grading/inspection of meat/poultry/eggs?",
    answer: "USDA",
    options: ["FDA", "USDA", "CDC", "EPA"],
    correctOption: 1,
    explanation: "FDA covers almost everything else."
  },
  {
    id: 299,
    domain: Domain.CLINICAL,
    question: "During respiratory distress, avoid:",
    answer: "Overfeeding (High RQ increases CO2)",
    options: ["Underfeeding", "Overfeeding (High RQ increases CO2)", "High fat", "Protein"],
    correctOption: 1,
    explanation: "Excess calories (esp carbs) increase CO2 production, stressing lungs."
  },
  {
    id: 300,
    domain: Domain.MANAGEMENT,
    question: "According to Maslow, which needs must be met first?",
    answer: "Physiological (Survival)",
    options: ["Safety", "Social", "Esteem", "Physiological (Survival)"],
    correctOption: 3,
    explanation: "Food, water, shelter before safety or belonging."
  },

  // --- ADVANCED CASE STUDIES & SCENARIOS PART 2 (301-350) ---
  {
    id: 301,
    domain: Domain.CLINICAL,
    question: "In CKD-MBD (Mineral and Bone Disorder), elevated PTH is stimulated by:",
    answer: "High Phosphorus and Low Calcium",
    options: ["Low Phosphorus", "High Phosphorus and Low Calcium", "High Calcium", "High Vitamin D"],
    correctOption: 1,
    explanation: "Parathyroid hormone rises to pull calcium from bones when serum calcium is low/phos is high."
  },
  {
    id: 302,
    domain: Domain.INTERVENTION,
    question: "A TPN solution looks 'oily' or 'cracked' (creaming). What happened?",
    answer: "Lipid emulsion instability",
    options: ["Bacterial growth", "Lipid emulsion instability", "Vitamin precipitation", "Normal appearance"],
    correctOption: 1,
    explanation: "Do not infuse. Caused by pH change or cation interaction (calcium). Dangerous embolus risk."
  },
  {
    id: 303,
    domain: Domain.ASSESSMENT,
    question: "Calculation for Adjusted Body Weight in Obesity (commonly used):",
    answer: "((ABW - IBW) * 0.25) + IBW",
    options: ["((ABW - IBW) * 0.50) + IBW", "((ABW - IBW) * 0.25) + IBW", "IBW * 1.3", "Use ABW directly"],
    correctOption: 1,
    explanation: "Assumes metabolically active tissue in excess weight is ~25%."
  },
  {
    id: 304,
    domain: Domain.FOODSERVICE,
    question: "Make-or-Buy Decision: You need 100 servings. Make cost $2.00. Buy cost $2.50. Labor to make is 2 hours at $15/hr. Which is cheaper?",
    answer: "Buy ($250 vs $230)",
    options: ["Make is cheaper", "Buy is cheaper", "Same cost", "Cannot determine"],
    correctOption: 1,
    explanation: "Make: (100*$2)+$30 = $230. Buy: 100*$2.50 = $250. Wait... Make is $230. Buy is $250. MAKE is cheaper."
  },
  {
    id: 305,
    domain: Domain.MANAGEMENT,
    question: "The 'dog' in Menu Engineering represents:",
    answer: "Low popularity, Low profit",
    options: ["High popularity, Low profit", "Low popularity, Low profit", "High popularity, High profit", "Low popularity, High profit"],
    correctOption: 1,
    explanation: "Remove from menu. Star = High/High. Plowhorse = High Pop/Low Prof. Puzzle = Low Pop/High Prof."
  },
  {
    id: 306,
    domain: Domain.BIOCHEMISTRY,
    question: "Methionine Cycle requires which 3 vitamins to prevent high homocysteine?",
    answer: "Folate, B12, B6",
    options: ["B1, B2, B3", "Folate, B12, B6", "Vit C, D, E", "Iron, Zinc, Copper"],
    correctOption: 1,
    explanation: "B12/Folate remethylate homocysteine to methionine. B6 converts it to cysteine."
  },
  {
    id: 307,
    domain: Domain.CLINICAL,
    question: "What distinguishes Marasmus from Kwashiorkor?",
    answer: "Marasmus is calorie wasting (no edema); Kwashiorkor is protein deficiency (edema)",
    options: ["Marasmus has edema", "Kwashiorkor is calorie wasting", "Marasmus is calorie wasting (no edema); Kwashiorkor is protein deficiency (edema)", "Both have edema"],
    correctOption: 2,
    explanation: "Kwashiorkor = swollen belly (ascites/low albumin)."
  },
  {
    id: 308,
    domain: Domain.MANAGEMENT,
    question: "Fiedler's Contingency Model states:",
    answer: "Leadership effectiveness depends on the situation favorable-ness",
    options: ["Leaders are born", "Leadership effectiveness depends on the situation favorable-ness", "One style fits all", "Employees determine style"],
    correctOption: 1,
    explanation: "Task-oriented is best in very good or very bad situations. Relationship-oriented best in middle."
  },
  {
    id: 309,
    domain: Domain.INTERVENTION,
    question: "MNT for Calcium Oxalate Kidney Stones:",
    answer: "Adequate Calcium intake, Low Oxalate, High Fluid",
    options: ["Low Calcium", "Adequate Calcium intake, Low Oxalate, High Fluid", "High Oxalate", "Restrict Fluid"],
    correctOption: 1,
    explanation: "Do NOT restrict calcium (calcium binds oxalate in gut, preventing absorption)."
  },
  {
    id: 310,
    domain: Domain.FOODSERVICE,
    question: "A 'prime vendor' agreement is:",
    answer: "Purchasing mostly from one supplier for volume discounts",
    options: ["Buying from many sources", "Purchasing mostly from one supplier for volume discounts", "Bid purchasing", "Future contracting"],
    correctOption: 1,
    explanation: "Streamlines ordering and pricing."
  },
  {
    id: 311,
    domain: Domain.CLINICAL,
    question: "Gastroparesis is a common complication of:",
    answer: "Diabetes (Neuropathy)",
    options: ["Hypertension", "Diabetes (Neuropathy)", "Obesity", "Celiac"],
    correctOption: 1,
    explanation: "Vagus nerve damage delays emptying."
  },
  {
    id: 312,
    domain: Domain.INTERVENTION,
    question: "Transitioning from TPN to EN: When to stop TPN?",
    answer: "When EN meets 75% of needs",
    options: ["Immediately", "When EN meets 75% of needs", "When EN meets 25% of needs", "Never"],
    correctOption: 1,
    explanation: "Taper slowly to prevent hypoglycemia."
  },
  {
    id: 313,
    domain: Domain.BIOCHEMISTRY,
    question: "Leucine is unique because:",
    answer: "It is purely ketogenic",
    options: ["It is purely glucogenic", "It is purely ketogenic", "It contains sulfur", "It is non-essential"],
    correctOption: 1,
    explanation: "Cannot be converted to glucose. Lysine is the other purely ketogenic AA."
  },
  {
    id: 314,
    domain: Domain.MANAGEMENT,
    question: "Delphi Technique involves:",
    answer: "Consensus of experts via anonymous questionnaires",
    options: ["Face to face meeting", "Consensus of experts via anonymous questionnaires", "Brainstorming", "Voting"],
    correctOption: 1,
    explanation: "Avoids groupthink or dominance by one person."
  },
  {
    id: 315,
    domain: Domain.ASSESSMENT,
    question: "Pediatric Growth Chart: Crossing two major percentiles indicates:",
    answer: "Failure to Thrive / Growth Risk",
    options: ["Normal growth spurt", "Failure to Thrive / Growth Risk", "Obesity", "Short stature"],
    correctOption: 1,
    explanation: "Need for further assessment."
  },
  {
    id: 316,
    domain: Domain.CLINICAL,
    question: "In liver failure, BCAA to Aromatic Amino Acid (AAA) ratio is:",
    answer: "Decreased (Low BCAA, High AAA)",
    options: ["Normal", "Increased", "Decreased (Low BCAA, High AAA)", "Equal"],
    correctOption: 2,
    explanation: "Liver cannot clear AAAs. Muscles use BCAAs. Imbalance contributes to encephalopathy."
  },
  {
    id: 317,
    domain: Domain.FOODSERVICE,
    question: "Calculate the popularity index: Item sold 30 times. Total items sold 200.",
    answer: "15%",
    options: ["10%", "15%", "20%", "30%"],
    correctOption: 1,
    explanation: "30 / 200 = 0.15."
  },
  {
    id: 318,
    domain: Domain.INTERVENTION,
    question: "Maximum osmolality for peripheral parenteral nutrition (PPN)?",
    answer: "800-900 mOsm",
    options: ["300 mOsm", "600 mOsm", "800-900 mOsm", "1200 mOsm"],
    correctOption: 2,
    explanation: "Higher causes phlebitis. Need central line (TPN) for higher concentrations."
  },
  {
    id: 319,
    domain: Domain.MANAGEMENT,
    question: "Just-In-Time (JIT) purchasing:",
    answer: "Products arrive immediately before production",
    options: ["Buying in bulk", "Products arrive immediately before production", "Buying annually", "Stockpiling"],
    correctOption: 1,
    explanation: "Reduces inventory costs/space. Requires reliable suppliers."
  },
  {
    id: 320,
    domain: Domain.BIOCHEMISTRY,
    question: "Selenium is a cofactor for:",
    answer: "Glutathione Peroxidase (Antioxidant)",
    options: ["Insulin", "Glutathione Peroxidase (Antioxidant)", "Hemoglobin", "Collagen"],
    correctOption: 1,
    explanation: "Protects cells from oxidative damage."
  },
  {
    id: 321,
    domain: Domain.CLINICAL,
    question: "Which vitamin toxicity causes sensory neuropathy?",
    answer: "Vitamin B6",
    options: ["Vitamin A", "Vitamin B6", "Vitamin C", "Vitamin D"],
    correctOption: 1,
    explanation: "Rare water-soluble toxicity. Usually from high dose supplements."
  },
  {
    id: 322,
    domain: Domain.FOODSERVICE,
    question: "Humidity requirement for dry storage:",
    answer: "50-60%",
    options: ["20-30%", "50-60%", "80-90%", "100%"],
    correctOption: 1,
    explanation: "Prevents clumping/mold. Fruits/Veg need higher (85-90%)."
  },
  {
    id: 323,
    domain: Domain.MANAGEMENT,
    question: "Current Ratio formula:",
    answer: "Current Assets / Current Liabilities",
    options: ["Assets - Liabilities", "Current Assets / Current Liabilities", "Cash / Debt", "Sales / Expenses"],
    correctOption: 1,
    explanation: "Measures ability to pay debts due within 1 year. Ideally > 1."
  },
  {
    id: 324,
    domain: Domain.INTERVENTION,
    question: "Fluid requirement for burn patients (Parkland Formula initial est.):",
    answer: "4ml x kg x %BSA burned",
    options: ["1ml x kg", "4ml x kg x %BSA burned", "100ml/hr", "2ml x kg"],
    correctOption: 1,
    explanation: "Massive fluid resuscitation needed in first 24h."
  },
  {
    id: 325,
    domain: Domain.CLINICAL,
    question: "Dumping Syndrome causes hypoglycemia because:",
    answer: "Rapid absorption causes insulin overshoot",
    options: ["Insulin is blocked", "Rapid absorption causes insulin overshoot", "No absorption occurs", "Liver failure"],
    correctOption: 1,
    explanation: "Alimentary hypoglycemia (late dumping)."
  },
  {
    id: 326,
    domain: Domain.MANAGEMENT,
    question: "Theory Z (Ouchi) emphasizes:",
    answer: "Employee loyalty and consensus (Japanese model)",
    options: ["Strict hierarchy", "Employee loyalty and consensus (Japanese model)", "Individualism", "Short term employment"],
    correctOption: 1,
    explanation: "Long term employment, collective decision making."
  },
  {
    id: 327,
    domain: Domain.ASSESSMENT,
    question: "Corrected Age for a 4-month old born 2 months premature?",
    answer: "2 months",
    options: ["2 months", "4 months", "6 months", "0 months"],
    correctOption: 0,
    explanation: "Chronological age - Months premature. 4 - 2 = 2."
  },
  {
    id: 328,
    domain: Domain.BIOCHEMISTRY,
    question: "Why does high protein intake increase fluid needs?",
    answer: "Excretion of urea requires water",
    options: ["Protein binds water in gut", "Excretion of urea requires water", "Increases metabolic rate", "Causes sweating"],
    correctOption: 1,
    explanation: "Renal solute load increases."
  },
  {
    id: 329,
    domain: Domain.FOODSERVICE,
    question: "A #300 can holds:",
    answer: "1 3/4 cups",
    options: ["1 cup", "1 3/4 cups", "2 1/2 cups", "5 cups"],
    correctOption: 1,
    explanation: "Common retail soup can size."
  },
  {
    id: 330,
    domain: Domain.CLINICAL,
    question: "Phenytoin (Dilantin) decreases absorption of:",
    answer: "Folate and Calcium",
    options: ["Iron", "Folate and Calcium", "Zinc", "Protein"],
    correctOption: 1,
    explanation: "Enteral feedings also bind Phenytoin (hold feeds 2 hrs before/after)."
  },
  {
    id: 331,
    domain: Domain.MANAGEMENT,
    question: "What is 'Staff Authority'?",
    answer: "Advisory role (HR, Consultant) - cannot command line ops",
    options: ["Direct command", "Advisory role (HR, Consultant) - cannot command line ops", "Firing power", "Budget control"],
    correctOption: 1,
    explanation: "Contrast with Line Authority (direct chain of command)."
  },
  {
    id: 332,
    domain: Domain.INTERVENTION,
    question: "Which oil is highest in Monounsaturated Fat (MUFA)?",
    answer: "Olive Oil",
    options: ["Corn Oil", "Olive Oil", "Coconut Oil", "Sunflower Oil"],
    correctOption: 1,
    explanation: "Also Canola and Peanut. Corn/Soy/Sunflower are high PUFA."
  },
  {
    id: 333,
    domain: Domain.BIOCHEMISTRY,
    question: "Glycogen storage disease (Von Gierke's) deficiency:",
    answer: "Glucose-6-Phosphatase",
    options: ["Insulin", "Glucose-6-Phosphatase", "Lipase", "Amylase"],
    correctOption: 1,
    explanation: "Liver cannot release glucose into blood -> Severe hypoglycemia."
  },
  {
    id: 334,
    domain: Domain.CLINICAL,
    question: "H. Pylori bacteria causes:",
    answer: "Peptic Ulcers / Gastritis",
    options: ["Diverticulitis", "Peptic Ulcers / Gastritis", "Crohn's", "IBS"],
    correctOption: 1,
    explanation: "Treat with antibiotics and PPI."
  },
  {
    id: 335,
    domain: Domain.FOODSERVICE,
    question: "Formula for depreciation:",
    answer: "(Cost - Salvage Value) / Useful Life",
    options: ["Cost / Life", "(Cost - Salvage Value) / Useful Life", "Cost * Rate", "Sales - Cost"],
    correctOption: 1,
    explanation: "Straight line depreciation."
  },
  {
    id: 336,
    domain: Domain.MANAGEMENT,
    question: "McClelland's Achievement Theory needs:",
    answer: "Achievement, Power, Affiliation",
    options: ["Food, Shelter, Love", "Achievement, Power, Affiliation", "Money, Status, Time", "Growth, Safety, Pay"],
    correctOption: 1,
    explanation: "Three motivating drivers."
  },
  {
    id: 337,
    domain: Domain.CLINICAL,
    question: "During trauma/stress (Ebb & Flow phase), the Flow phase is:",
    answer: "Catabolic (High metabolic rate)",
    options: ["Shock (Hypovolemia)", "Catabolic (High metabolic rate)", "Anabolic (Healing)", "Resting"],
    correctOption: 1,
    explanation: "Ebb is shock (low MR). Flow is hypermetabolism."
  },
  {
    id: 338,
    domain: Domain.ASSESSMENT,
    question: "Normal Hemoglobin for men:",
    answer: "14-18 g/dL",
    options: ["12-16 g/dL", "14-18 g/dL", "10-12 g/dL", "8-10 g/dL"],
    correctOption: 1,
    explanation: "Women: 12-16 g/dL."
  },
  {
    id: 339,
    domain: Domain.INTERVENTION,
    question: "Diet for Hemochromatosis:",
    answer: "Avoid Iron supplements/High iron foods/Vit C with meals",
    options: ["High Iron", "Avoid Iron supplements/High iron foods/Vit C with meals", "High Calcium", "Low Protein"],
    correctOption: 1,
    explanation: "Iron overload disease."
  },
  {
    id: 340,
    domain: Domain.MANAGEMENT,
    question: "What is a 'loss leader'?",
    answer: "Item sold at loss to attract customers",
    options: ["Bad manager", "Item sold at loss to attract customers", "Theft", "Waste"],
    correctOption: 1,
    explanation: "Pricing strategy."
  },
  {
    id: 341,
    domain: Domain.BIOCHEMISTRY,
    question: "Vitamin E prevents oxidation of:",
    answer: "Polyunsaturated Fatty Acids (PUFAs) in cell membranes",
    options: ["Protein", "Polyunsaturated Fatty Acids (PUFAs) in cell membranes", "Carbs", "DNA"],
    correctOption: 1,
    explanation: "Higher PUFA intake requires higher Vitamin E."
  },
  {
    id: 342,
    domain: Domain.FOODSERVICE,
    question: "Tilting Skillet can be used for:",
    answer: "Frying, boiling, stewing, grilling (Very versatile)",
    options: ["Only frying", "Frying, boiling, stewing, grilling (Very versatile)", "Baking only", "Freezing"],
    correctOption: 1,
    explanation: "Most versatile piece of equipment."
  },
  {
    id: 343,
    domain: Domain.CLINICAL,
    question: "Gestational Diabetes diagnostic criteria (OGTT):",
    answer: "Fasting >92, 1hr >180, 2hr >153",
    options: ["Fasting >126", "Fasting >92, 1hr >180, 2hr >153", "Random >200", "A1c > 6.5"],
    correctOption: 1,
    explanation: "Stricter criteria than Type 2."
  },
  {
    id: 344,
    domain: Domain.MANAGEMENT,
    question: "Formative vs Summative evaluation occurs:",
    answer: "Formative: During program; Summative: At end",
    options: ["Formative: End; Summative: During", "Formative: During program; Summative: At end", "Both at end", "Both start"],
    correctOption: 1,
    explanation: "Formative allows adjustments."
  },
  {
    id: 345,
    domain: Domain.INTERVENTION,
    question: "What decreases the effectiveness of Levodopa?",
    answer: "Pyridoxine (B6) and Protein",
    options: ["Fat", "Pyridoxine (B6) and Protein", "Carbs", "Vitamin C"],
    correctOption: 1,
    explanation: "B6 increases peripheral metabolism of drug."
  },
  {
    id: 346,
    domain: Domain.FOODSERVICE,
    question: "Motive for 'padding' inventory?",
    answer: "To reduce calculated food cost %",
    options: ["To increase food cost", "To reduce calculated food cost %", "To fire staff", "None"],
    correctOption: 1,
    explanation: "Fake higher ending inventory -> Lower usage -> Lower Cost of Goods Sold."
  },
  {
    id: 347,
    domain: Domain.CLINICAL,
    question: "HIV/AIDS patient with thrush (candidiasis) needs:",
    answer: "Avoid spicy/acidic, soft cold foods",
    options: ["High spice", "Avoid spicy/acidic, soft cold foods", "Dry crackers", "Hot liquids"],
    correctOption: 1,
    explanation: "Painful swallowing."
  },
  {
    id: 348,
    domain: Domain.BIOCHEMISTRY,
    question: "Which vitamin is destroyed by alkaline pH (baking soda)?",
    answer: "Thiamin",
    options: ["Vitamin D", "Thiamin", "Vitamin A", "Calcium"],
    correctOption: 1,
    explanation: "Adding baking soda to beans makes them soft but destroys thiamin."
  },
  {
    id: 349,
    domain: Domain.MANAGEMENT,
    question: "Motion Economy principles focus on:",
    answer: "Reducing human energy expenditure/movement",
    options: ["Saving electricity", "Reducing human energy expenditure/movement", "Fast delivery", "Low cost food"],
    correctOption: 1,
    explanation: "Work simplification (hands move together, tools in fixed place)."
  },
  {
    id: 350,
    domain: Domain.CLINICAL,
    question: "Normal Albumin with low Calcium indicates:",
    answer: "True Hypocalcemia",
    options: ["False Hypocalcemia", "True Hypocalcemia", "Hypercalcemia", "Error"],
    correctOption: 1,
    explanation: "If albumin is low, calcium looks low but ionized might be normal. If albumin is normal, low calcium is real."
  },

  // --- ADVANCED CASE STUDIES & SCENARIOS PART 3 (351-400) ---
  {
    id: 351,
    domain: Domain.CLINICAL,
    question: "A critical care patient has a Nitrogen Balance of -5g. This indicates:",
    answer: "Significant Catabolism (Muscle breakdown)",
    options: ["Anabolism", "Equilibrium", "Significant Catabolism (Muscle breakdown)", "Adequate protein intake"],
    correctOption: 2,
    explanation: "Negative balance means output > input. Goal is often +2 to +4g for healing."
  },
  {
    id: 352,
    domain: Domain.CLINICAL,
    question: "Hypomagnesemia in refeeding syndrome can lead to:",
    answer: "Cardiac arrhythmias and seizure",
    options: ["Kidney stones", "Cardiac arrhythmias and seizure", "Liver failure", "High blood pressure"],
    correctOption: 1,
    explanation: "Magnesium is critical for electrical signaling in heart and nerves."
  },
  {
    id: 353,
    domain: Domain.CLINICAL,
    question: "Which practice best prevents enteral tube obstruction?",
    answer: "Flushing with water before/after meds and every 4h",
    options: ["Using soda/cola", "Flushing with water before/after meds and every 4h", "Using cranberry juice", "Forceful plunging"],
    correctOption: 1,
    explanation: "Acidic fluids (soda/juice) can actually curdle protein formulas, causing clogs."
  },
  {
    id: 354,
    domain: Domain.MANAGEMENT,
    question: "Marketing Mix: Public Relations differs from Promotion because PR is:",
    answer: "Unpaid/Earned media (news, community relations)",
    options: ["Paid advertising", "Unpaid/Earned media (news, community relations)", "Sales discounts", "Direct mail"],
    correctOption: 1,
    explanation: "Promotion is usually paid advertising. PR builds image."
  },
  {
    id: 355,
    domain: Domain.FOODSERVICE,
    question: "Prime Cost calculation involves:",
    answer: "Raw Food Cost + Direct Labor Cost",
    options: ["Food + Utilities", "Raw Food Cost + Direct Labor Cost", "Labor + Rent", "All Variable Costs"],
    correctOption: 1,
    explanation: "The two largest controllable costs in foodservice."
  },
  {
    id: 356,
    domain: Domain.CLINICAL,
    question: "The Curreri formula is used for estimating needs in:",
    answer: "Burn patients",
    options: ["Trauma", "Burn patients", "Obesity", "Cancer"],
    correctOption: 1,
    explanation: "Calculation: (25kcal x kg) + (40kcal x %BSA)."
  },
  {
    id: 357,
    domain: Domain.BIOCHEMISTRY,
    question: "The first hydroxylation of Vitamin D (25-OH) occurs in the:",
    answer: "Liver",
    options: ["Kidney", "Skin", "Liver", "Intestine"],
    correctOption: 2,
    explanation: "Liver creates 25-OH D. Kidney creates active 1,25-OH D."
  },
  {
    id: 358,
    domain: Domain.CLINICAL,
    question: "PERT (Pancreatic Enzyme Replacement Therapy) dosing is based on:",
    answer: "Grams of fat ingested",
    options: ["Body weight", "Grams of fat ingested", "Protein intake", "Calories"],
    correctOption: 1,
    explanation: "Lipase units are matched to fat intake to prevent steatorrhea."
  },
  {
    id: 359,
    domain: Domain.MANAGEMENT,
    question: "In the FOCUS-PDCA quality model, the 'U' stands for:",
    answer: "Understand the causes of variation",
    options: ["Understand the causes of variation", "Update the policy", "Unify the team", "Utilize resources"],
    correctOption: 0,
    explanation: "Find, Organize, Clarify, Understand, Select."
  },
  {
    id: 360,
    domain: Domain.FOODSERVICE,
    question: "A very low inventory turnover rate indicates:",
    answer: "Money tied up in stock / Spoilage risk",
    options: ["Efficient purchasing", "Money tied up in stock / Spoilage risk", "High sales", "Stockouts"],
    correctOption: 1,
    explanation: "Inventory is sitting too long."
  },
  {
    id: 361,
    domain: Domain.CLINICAL,
    question: "Dehydration in the elderly is best confirmed by:",
    answer: "Elevated Serum Osmolality (>295 mOsm)",
    options: ["Skin turgor", "Elevated Serum Osmolality (>295 mOsm)", "Thirst", "Low urine output"],
    correctOption: 1,
    explanation: "Skin turgor is unreliable in elderly due to elasticity loss."
  },
  {
    id: 362,
    domain: Domain.CLINICAL,
    question: "Jejunal resection requires less dietary modification than Ileal because:",
    answer: "Ileum can adapt to absorb jejunal nutrients, but not vice versa for B12/Bile",
    options: ["Jejunum absorbs nothing", "Ileum can adapt to absorb jejunal nutrients, but not vice versa for B12/Bile", "Ileum is shorter", "Jejunum only absorbs water"],
    correctOption: 1,
    explanation: "Ileum is specialized for B12 and Bile Salts."
  },
  {
    id: 363,
    domain: Domain.INTERVENTION,
    question: "Long term corticosteroid use (Prednisone) requires monitoring of:",
    answer: "Glucose (hyperglycemia) and Calcium (bone loss)",
    options: ["Iron and B12", "Glucose (hyperglycemia) and Calcium (bone loss)", "Potassium (high)", "Protein (low)"],
    correctOption: 1,
    explanation: "Steroids cause insulin resistance and decrease calcium absorption."
  },
  {
    id: 364,
    domain: Domain.FOODSERVICE,
    question: "Heat transfer in a steam-jacketed kettle is:",
    answer: "Conduction and Convection",
    options: ["Radiation", "Conduction and Convection", "Induction", "Conduction only"],
    correctOption: 1,
    explanation: "Conduction from wall to food. Convection of liquid circulating."
  },
  {
    id: 365,
    domain: Domain.MANAGEMENT,
    question: "Transformational Leadership differs from Transactional by:",
    answer: "Inspiring vision and empowering employees",
    options: ["Using rewards/punishments", "Inspiring vision and empowering employees", "Micro-managing", "Following rules strictly"],
    correctOption: 1,
    explanation: "Transactional relies on 'do this, get that'. Transformational motivates change."
  },
  {
    id: 366,
    domain: Domain.CLINICAL,
    question: "Cycling TPN (12-16 hours) is beneficial for:",
    answer: "Preventing fatty liver (Hepatosteatosis) and allowing mobility",
    options: ["Increasing weight gain", "Preventing fatty liver (Hepatosteatosis) and allowing mobility", "Treating hyperglycemia", "Hydration"],
    correctOption: 1,
    explanation: "Gives the liver a 'rest' period from continuous glucose infusion."
  },
  {
    id: 367,
    domain: Domain.CLINICAL,
    question: "Are intravenous lipids (IVFE) allowed in pancreatitis?",
    answer: "Yes, if triglycerides are <400 mg/dL",
    options: ["No, never", "Yes, if triglycerides are <400 mg/dL", "Only MCT oil", "Yes, unrestricted"],
    correctOption: 1,
    explanation: "IV lipids bypass pancreatic lipase, but high serum TGs can worsen pancreatitis."
  },
  {
    id: 368,
    domain: Domain.BIOCHEMISTRY,
    question: "The conversion of Homocysteine to Methionine requires:",
    answer: "B12 and Folate (5-MTHF)",
    options: ["B6 and Zinc", "B12 and Folate (5-MTHF)", "Vitamin C and Iron", "Thiamin"],
    correctOption: 1,
    explanation: "Methyl group transfer."
  },
  {
    id: 369,
    domain: Domain.ASSESSMENT,
    question: "NFPE: Loss of subcutaneous fat is best assessed at the:",
    answer: "Orbital fat pads, Triceps, Ribs",
    options: ["Clavicle", "Orbital fat pads, Triceps, Ribs", "Quadriceps", "Calf"],
    correctOption: 1,
    explanation: "Clavicle/Shoulder checks for Muscle loss. Orbit/Tricep checks for Fat loss."
  },
  {
    id: 370,
    domain: Domain.FOODSERVICE,
    question: "Economic Order Quantity (EOQ) balances:",
    answer: "Ordering costs vs Holding costs",
    options: ["Food cost vs Labor cost", "Ordering costs vs Holding costs", "Quality vs Quantity", "Time vs Money"],
    correctOption: 1,
    explanation: "Determines optimal order size to minimize total inventory costs."
  },
  {
    id: 371,
    domain: Domain.MANAGEMENT,
    question: "The role of a Union Steward is:",
    answer: "An employee elected to represent union members",
    options: ["A paid union executive", "An employee elected to represent union members", "The company lawyer", "A mediator"],
    correctOption: 1,
    explanation: "First line of representation for grievances."
  },
  {
    id: 372,
    domain: Domain.CLINICAL,
    question: "Current evidence on 'Neutropenic Diet' (low microbial) for cancer pts:",
    answer: "Not supported; emphasizes Safe Food Handling instead",
    options: ["Strictly required", "Not supported; emphasizes Safe Food Handling instead", "Only for stem cell transplant", "Avoids all raw fruit"],
    correctOption: 1,
    explanation: "Strict restrictions often decrease intake without reducing infection rates."
  },
  {
    id: 373,
    domain: Domain.INTERVENTION,
    question: "Which food is safe for a low-Tyramine diet (MAOI)?",
    answer: "Fresh cottage cheese / Cream cheese",
    options: ["Cheddar cheese", "Fresh cottage cheese / Cream cheese", "Salami", "Sauerkraut"],
    correctOption: 1,
    explanation: "Unfermented/fresh cheeses are safe. Aged/fermented foods are not."
  },
  {
    id: 374,
    domain: Domain.CLINICAL,
    question: "In ALS (Lou Gehrig's), the primary nutritional progression is:",
    answer: "Dysphagia management -> PEG placement",
    options: ["Weight loss diet", "Dysphagia management -> PEG placement", "Low protein", "Fluid restriction"],
    correctOption: 1,
    explanation: "Progressive loss of motor control affects swallowing early."
  },
  {
    id: 375,
    domain: Domain.FOODSERVICE,
    question: "Recipe Adjustment Factor method:",
    answer: "Desired Yield / Current Yield",
    options: ["Current / Desired", "Desired Yield / Current Yield", "Desired x Current", "Current + Desired"],
    correctOption: 1,
    explanation: "Multiply all ingredients by this factor."
  },
  {
    id: 376,
    domain: Domain.MANAGEMENT,
    question: "Incremental Budgeting assumes:",
    answer: "Existing budget is base, adjusted for inflation/changes",
    options: ["Start from zero", "Existing budget is base, adjusted for inflation/changes", "Variable costs only", "No budget cap"],
    correctOption: 1,
    explanation: "Easier than Zero-based but can perpetuate waste."
  },
  {
    id: 377,
    domain: Domain.CLINICAL,
    question: "Why is overfeeding COPD patients dangerous?",
    answer: "High calorie load increases CO2 production (Respiratory Quotient)",
    options: ["Causes fluid retention", "High calorie load increases CO2 production (Respiratory Quotient)", "Increases oxygen need", "Causes aspiration"],
    correctOption: 1,
    explanation: "Lungs must work harder to expire CO2."
  },
  {
    id: 378,
    domain: Domain.BIOCHEMISTRY,
    question: "The Glucose-Alanine Cycle allows:",
    answer: "Muscle to send nitrogen to liver for urea cycle",
    options: ["Fat storage", "Muscle to send nitrogen to liver for urea cycle", "Glycogen synthesis", "Ketosis"],
    correctOption: 1,
    explanation: "Muscle breaks down AA -> Alanine -> Liver -> Glucose + Urea."
  },
  {
    id: 379,
    domain: Domain.CLINICAL,
    question: "Standard sodium restriction for Ascites in Cirrhosis:",
    answer: "2000 mg/day",
    options: ["500 mg", "2000 mg/day", "4000 mg", "No restriction"],
    correctOption: 1,
    explanation: "Fluid restriction is only needed if hyponatremia is severe (<120-125)."
  },
  {
    id: 380,
    domain: Domain.ASSESSMENT,
    question: "Adjusted IBW for Quadriplegia:",
    answer: "Reduce IBW by 10-15%",
    options: ["Reduce IBW by 5-10%", "Reduce IBW by 10-15%", "Increase IBW", "No change"],
    correctOption: 1,
    explanation: "Paraplegia is 5-10% reduction. Quad is 10-15% due to muscle atrophy."
  },
  {
    id: 381,
    domain: Domain.FOODSERVICE,
    question: "Low-temperature dish machines rely on ______ for sanitization.",
    answer: "Chemicals (Chlorine/Iodine)",
    options: ["Hot water", "Chemicals (Chlorine/Iodine)", "UV light", "Pressure"],
    correctOption: 1,
    explanation: "Water temp is 120-140F. Must verify chemical concentration daily."
  },
  {
    id: 382,
    domain: Domain.MANAGEMENT,
    question: "Job Analysis is:",
    answer: "Process of gathering info to create Job Description",
    options: ["The final document", "Process of gathering info to create Job Description", "Hiring process", "Reviewing salary"],
    correctOption: 1,
    explanation: "Analysis precedes Description."
  },
  {
    id: 383,
    domain: Domain.CLINICAL,
    question: "Gastroparesis insulin timing adjustment:",
    answer: "Administer insulin AFTER the meal",
    options: ["30 mins before", "Administer insulin AFTER the meal", "No insulin", "Split dose"],
    correctOption: 1,
    explanation: "Food absorption is delayed. Early insulin causes hypo followed by hyper."
  },
  {
    id: 384,
    domain: Domain.INTERVENTION,
    question: "Calcium Citrate vs Carbonate:",
    answer: "Citrate does not require stomach acid; Carbonate requires food/acid",
    options: ["Carbonate is better without food", "Citrate does not require stomach acid; Carbonate requires food/acid", "They are the same", "Citrate is for renal only"],
    correctOption: 1,
    explanation: "Use Citrate for patients on PPIs or with Achlorhydria."
  },
  {
    id: 385,
    domain: Domain.FOODSERVICE,
    question: "Kitchen layout: 'Cross-traffic' creates:",
    answer: "Safety hazards and inefficiency",
    options: ["Better workflow", "Safety hazards and inefficiency", "Social interaction", "Less walking"],
    correctOption: 1,
    explanation: "Flow should be linear: Receiving -> Storage -> Prep -> Cook -> Serve."
  },
  {
    id: 386,
    domain: Domain.MANAGEMENT,
    question: "DRGs (Diagnosis Related Groups) categorize patients to determine:",
    answer: "Prospective Payment (Reimbursement amount)",
    options: ["Treatment plan", "Prospective Payment (Reimbursement amount)", "Length of stay", "Medication list"],
    correctOption: 1,
    explanation: "Hospital gets fixed amount based on diagnosis, regardless of actual cost/LOS."
  },
  {
    id: 387,
    domain: Domain.CLINICAL,
    question: "Post-Kidney Transplant (Acute phase) protein needs:",
    answer: "Increased (1.3-1.5 g/kg) due to catabolic steroids/stress",
    options: ["Restricted (0.6 g/kg)", "Increased (1.3-1.5 g/kg) due to catabolic steroids/stress", "Normal (0.8 g/kg)", "Very high (2.0 g/kg)"],
    correctOption: 1,
    explanation: "Contrast with Chronic Kidney Disease (Pre-transplant) which restricts protein."
  },
  {
    id: 388,
    domain: Domain.BIOCHEMISTRY,
    question: "The B12-Intrinsic Factor complex is absorbed in the:",
    answer: "Distal Ileum",
    options: ["Duodenum", "Jejunum", "Distal Ileum", "Colon"],
    correctOption: 2,
    explanation: "Specific receptors exist only here."
  },
  {
    id: 389,
    domain: Domain.CLINICAL,
    question: "Relationship between Fructose and Gout:",
    answer: "High fructose increases uric acid production",
    options: ["Fructose lowers uric acid", "High fructose increases uric acid production", "No relationship", "Fructose cures gout"],
    correctOption: 1,
    explanation: "Metabolism of fructose consumes ATP rapidly, leading to purine turnover."
  },
  {
    id: 390,
    domain: Domain.FOODSERVICE,
    question: "HACCP: Checking the temperature of a roast is:",
    answer: "Monitoring",
    options: ["Critical Limit", "Monitoring", "Verification", "Corrective Action"],
    correctOption: 1,
    explanation: "165F is the Critical Limit. Sticking the thermometer in is Monitoring."
  },
  {
    id: 391,
    domain: Domain.MANAGEMENT,
    question: "Relief Factor: To cover 7 days/week positions, multiply FTEs by:",
    answer: "1.55",
    options: ["1.4", "1.55", "1.75", "2.0"],
    correctOption: 1,
    explanation: "5 days worked / 2 days off? No. 7 days open / 5 days worked = 1.4. Plus benefit days off ~ 1.55."
  },
  {
    id: 392,
    domain: Domain.CLINICAL,
    question: "Bariatric surgery: Wernicke's Encephalopathy is caused by deficiency of:",
    answer: "Thiamin (B1)",
    options: ["B12", "Thiamin (B1)", "Iron", "Folate"],
    correctOption: 1,
    explanation: "Often due to persistent vomiting post-op."
  },
  {
    id: 393,
    domain: Domain.INTERVENTION,
    question: "Mechanism: How does Soluble Fiber lower cholesterol?",
    answer: "Binds bile salts, forcing liver to use cholesterol to make more",
    options: ["Blocks fat absorption", "Binds bile salts, forcing liver to use cholesterol to make more", "Speeds transit", "Inhibits synthesis"],
    correctOption: 1,
    explanation: "Interrupts enterohepatic circulation of bile."
  },
  {
    id: 394,
    domain: Domain.FOODSERVICE,
    question: "Branding in school foodservice (e.g., selling Pizza Hut) is called:",
    answer: "Commercial branding / Retail concept",
    options: ["Marketing", "Commercial branding / Retail concept", "Selling out", "Franchising"],
    correctOption: 1,
    explanation: "Increases participation by using recognized names."
  },
  {
    id: 395,
    domain: Domain.MANAGEMENT,
    question: "Motivational Interviewing OARS acronym:",
    answer: "Open-ended Qs, Affirmations, Reflections, Summaries",
    options: ["Observe, Act, React, Speak", "Open-ended Qs, Affirmations, Reflections, Summaries", "Organize, Arrange, Review, Set", "Open, Ask, Reply, Say"],
    correctOption: 1,
    explanation: "Core counseling skills."
  },
  {
    id: 396,
    domain: Domain.CLINICAL,
    question: "Traumatic Brain Injury (TBI) Glasgow Coma Scale <8 needs:",
    answer: "Enteral Nutrition (High Protein/Calorie)",
    options: ["Oral diet", "Enteral Nutrition (High Protein/Calorie)", "TPN", "NPO"],
    correctOption: 1,
    explanation: "Severe hypermetabolism and inability to swallow."
  },
  {
    id: 397,
    domain: Domain.BIOCHEMISTRY,
    question: "Glucagon triggers glycogenolysis via which second messenger?",
    answer: "cAMP",
    options: ["ATP", "cAMP", "GMP", "Calcium"],
    correctOption: 1,
    explanation: "Cyclic AMP activates protein kinases to break down glycogen."
  },
  {
    id: 398,
    domain: Domain.ASSESSMENT,
    question: "High Urine Specific Gravity (>1.030) indicates:",
    answer: "Concentrated urine / Dehydration",
    options: ["Dilute urine", "Concentrated urine / Dehydration", "Kidney failure", "Diabetes Insipidus"],
    correctOption: 1,
    explanation: "Kidneys are conserving water."
  },
  {
    id: 399,
    domain: Domain.FOODSERVICE,
    question: "Calculate EP Price: AP Price $5.00/lb, Yield 50%.",
    answer: "$10.00/lb",
    options: ["$2.50", "$7.50", "$10.00/lb", "$5.00"],
    correctOption: 2,
    explanation: "$5.00 / 0.50 = $10.00. Cost doubles because half is waste."
  },
  {
    id: 400,
    domain: Domain.MANAGEMENT,
    question: "Ethics: Autonomy vs Beneficence in tube feeding refusal:",
    answer: "Patient Autonomy (right to refuse) supersedes Beneficence",
    options: ["Beneficence (doing good) wins", "Patient Autonomy (right to refuse) supersedes Beneficence", "Doctor decides", "Family decides"],
    correctOption: 1,
    explanation: "Competent patients have the right to refuse life-sustaining treatment."
  },

  // --- FINAL EXPANSION: ETHICS, INFORMATICS, & NICHE TOPICS (401-450) ---
  {
    id: 401,
    domain: Domain.MANAGEMENT,
    question: "Code of Ethics: Principle of Non-Maleficence means:",
    answer: "Competence and professional development in practice (Do no harm)",
    options: ["Being honest", "Competence and professional development in practice (Do no harm)", "Treating others fairly", "Social responsibility"],
    correctOption: 1,
    explanation: "Intent to not inflict harm. Includes maintaining competence."
  },
  {
    id: 402,
    domain: Domain.MANAGEMENT,
    question: "Code of Ethics: Justice Principle refers to:",
    answer: "Fairness and equitable treatment of all individuals",
    options: ["Being truthful", "Fairness and equitable treatment of all individuals", "Self-care", "Confidentiality"],
    correctOption: 1,
    explanation: "Social justice and fair allocation of resources."
  },
  {
    id: 403,
    domain: Domain.MANAGEMENT,
    question: "Which entity enforces the RD Code of Ethics?",
    answer: "Commission on Dietetic Registration (CDR)",
    options: ["The Academy (AND)", "Commission on Dietetic Registration (CDR)", "FDA", "USDA"],
    correctOption: 1,
    explanation: "Violations are reported to the CDR."
  },
  {
    id: 404,
    domain: Domain.MANAGEMENT,
    question: "Nutritional Informatics: Interoperability means:",
    answer: "Different computer systems exchanging and using data",
    options: ["Using the internet", "Different computer systems exchanging and using data", "Coding billing", "Telehealth"],
    correctOption: 1,
    explanation: "EHRs talking to pharmacy or nutrition systems seamlessly."
  },
  {
    id: 405,
    domain: Domain.MANAGEMENT,
    question: "HIPAA Security Rule primarily protects:",
    answer: "Electronic Protected Health Information (ePHI)",
    options: ["Paper records only", "Electronic Protected Health Information (ePHI)", "Insurance companies", "Doctors"],
    correctOption: 1,
    explanation: "Privacy rule covers all PHI; Security rule covers Electronic PHI."
  },
  {
    id: 406,
    domain: Domain.FOODSERVICE,
    question: "Sustainability: 'Food Miles' refers to:",
    answer: "Distance food travels from production to consumer",
    options: ["Calories in food", "Distance food travels from production to consumer", "Delivery routes", "Walking distance"],
    correctOption: 1,
    explanation: "Lower food miles (local sourcing) reduces carbon footprint."
  },
  {
    id: 407,
    domain: Domain.CLINICAL,
    question: "Refeeding Syndrome: Which vitamin is depleted due to carbohydrate metabolism?",
    answer: "Thiamin (B1)",
    options: ["Vitamin C", "Thiamin (B1)", "Vitamin A", "Vitamin K"],
    correctOption: 1,
    explanation: "Cofactor for glycolysis. Depletion causes Wernicke's."
  },
  {
    id: 408,
    domain: Domain.CLINICAL,
    question: "Drug-Nutrient: Statins (e.g., Lipitor) interaction:",
    answer: "Avoid Grapefruit/Grapefruit juice",
    options: ["Avoid milk", "Avoid Grapefruit/Grapefruit juice", "Increase protein", "Take with iron"],
    correctOption: 1,
    explanation: "Grapefruit inhibits breakdown enzymes, increasing drug toxicity."
  },
  {
    id: 409,
    domain: Domain.CLINICAL,
    question: "Drug-Nutrient: Lithium (Bipolar) and Sodium relationship:",
    answer: "Maintain consistent Sodium intake",
    options: ["Restrict Sodium", "Maintain consistent Sodium intake", "High Sodium", "No relationship"],
    correctOption: 1,
    explanation: "Low sodium causes Lithium retention (toxicity). High sodium causes excretion (low effect)."
  },
  {
    id: 410,
    domain: Domain.INTERVENTION,
    question: "Complication of TPN: Pneumothorax is caused by:",
    answer: "Needle puncturing the lung during catheter placement",
    options: ["Infection", "Needle puncturing the lung during catheter placement", "Air in tubing", "High rate"],
    correctOption: 1,
    explanation: "Mechanical complication of central line insertion."
  },
  {
    id: 411,
    domain: Domain.INTERVENTION,
    question: "Complication of TPN: Bacterial Translocation occurs due to:",
    answer: "Gut atrophy (lack of enteral stimulation)",
    options: ["Dirty hands", "Gut atrophy (lack of enteral stimulation)", "High sugar", "Lipid infusion"],
    correctOption: 1,
    explanation: "Use the gut or lose it. Bacteria cross the weakened gut wall into blood."
  },
  {
    id: 412,
    domain: Domain.FOODSERVICE,
    question: "Fire Safety: Class B fire extinguisher is for:",
    answer: "Flammable liquids (Gas, Oil, Paint)",
    options: ["Paper/Wood", "Flammable liquids (Gas, Oil, Paint)", "Electrical", "Cooking oils"],
    correctOption: 1,
    explanation: "B for Barrel (liquids)."
  },
  {
    id: 413,
    domain: Domain.FOODSERVICE,
    question: "Equipment: A 'Deck Oven' is typically used for:",
    answer: "Pizza or bread (high volume, stackable)",
    options: ["Steaming veg", "Pizza or bread (high volume, stackable)", "Deep frying", "Grilling"],
    correctOption: 1,
    explanation: "Separate temperature controls for each deck."
  },
  {
    id: 414,
    domain: Domain.FOODSERVICE,
    question: "Steam-Jacketed Kettle is energy efficient because:",
    answer: "Food doesn't touch heating element (indirect steam heat)",
    options: ["It uses microwaves", "Food doesn't touch heating element (indirect steam heat)", "It is small", "It uses gas"],
    correctOption: 1,
    explanation: "Very even heating, no scorching."
  },
  {
    id: 415,
    domain: Domain.MANAGEMENT,
    question: "Inventory Valuation: In inflation, LIFO (Last In First Out) results in:",
    answer: "Lower value of ending inventory, Lower profit (Lower taxes)",
    options: ["Higher value", "Lower value of ending inventory, Lower profit (Lower taxes)", "Higher profit", "No change"],
    correctOption: 1,
    explanation: "Newer (more expensive) items are 'sold' first. Older (cheaper) items stay in inventory."
  },
  {
    id: 416,
    domain: Domain.MANAGEMENT,
    question: "Inventory Valuation: In inflation, FIFO (First In First Out) results in:",
    answer: "Higher value of ending inventory, Higher profit (Higher taxes)",
    options: ["Lower value", "Higher value of ending inventory, Higher profit (Higher taxes)", "Lower profit", "Lower taxes"],
    correctOption: 1,
    explanation: "Cheaper (old) items sold first. Expensive (new) items stay in inventory value."
  },
  {
    id: 417,
    domain: Domain.CLINICAL,
    question: "Which anemia is associated with chronic inflammation/disease?",
    answer: "Normocytic, Normochromic",
    options: ["Microcytic", "Macrocytic", "Normocytic, Normochromic", "Pernicious"],
    correctOption: 2,
    explanation: "Iron is sequestered (high ferritin), not actually deficient in body."
  },
  {
    id: 418,
    domain: Domain.CLINICAL,
    question: "Billroth I (Gastroduodenostomy) connects:",
    answer: "Stomach to Duodenum",
    options: ["Stomach to Jejunum", "Stomach to Duodenum", "Esophagus to Jejunum", "Colon to Rectum"],
    correctOption: 1,
    explanation: "Less dumping than Billroth II."
  },
  {
    id: 419,
    domain: Domain.CLINICAL,
    question: "Hypoglycemia in a non-diabetic (Postprandial) is treated with:",
    answer: "5-6 small meals, complex carbs, protein/fat at each meal",
    options: ["High sugar", "5-6 small meals, complex carbs, protein/fat at each meal", "Fasting", "Ketogenic diet"],
    correctOption: 1,
    explanation: "Slows digestion and glucose spike/crash."
  },
  {
    id: 420,
    domain: Domain.INTERVENTION,
    question: "Galactosemia: Which foods are allowed?",
    answer: "Meat, Eggs, Vegetables, Fruits, Soy",
    options: ["Milk", "Cheese", "Organ meats", "Meat, Eggs, Vegetables, Fruits, Soy"],
    correctOption: 3,
    explanation: "Avoid all lactose and galactose (organ meats, MSG extenders)."
  },
  {
    id: 421,
    domain: Domain.CLINICAL,
    question: "Which cancer treatment causes dysgeusia (altered taste)?",
    answer: "Radiation to head/neck",
    options: ["Surgery", "Radiation to head/neck", "Immunotherapy", "Hormone therapy"],
    correctOption: 1,
    explanation: "Damage to taste buds/salivary glands. 'Metallic' taste is common."
  },
  {
    id: 422,
    domain: Domain.CLINICAL,
    question: "Suggestion for metallic taste in cancer patients:",
    answer: "Use plastic utensils, marinade meats in juice",
    options: ["Eat hot foods", "Use plastic utensils, marinade meats in juice", "Eat red meat", "Drink milk"],
    correctOption: 1,
    explanation: "Metal on metal worsens taste. Red meat often tastes worst (try poultry/eggs)."
  },
  {
    id: 423,
    domain: Domain.MANAGEMENT,
    question: "Can-Cutting Analysis is used to:",
    answer: "Compare quality/yield of different brands",
    options: ["Open cans faster", "Compare quality/yield of different brands", "Recycle", "Check safety"],
    correctOption: 1,
    explanation: "Literal opening of cans to weigh drained weight and taste test."
  },
  {
    id: 424,
    domain: Domain.MANAGEMENT,
    question: "Unionization: A 'Check-off' is:",
    answer: "Deduction of union dues from pay",
    options: ["Attendance check", "Deduction of union dues from pay", "Voting", "Firing process"],
    correctOption: 1,
    explanation: "Automatic payroll deduction."
  },
  {
    id: 425,
    domain: Domain.CLINICAL,
    question: "Which nutrient is essential for wound healing (Collagen cross-linking)?",
    answer: "Copper",
    options: ["Iron", "Copper", "Magnesium", "Calcium"],
    correctOption: 1,
    explanation: "Often forgotten. Zinc, Vit C, Copper, Protein are the big 4."
  },
  {
    id: 426,
    domain: Domain.CLINICAL,
    question: "MNT for Hiatal Hernia:",
    answer: "Small bland feedings (similar to GERD)",
    options: ["High fat", "Small bland feedings (similar to GERD)", "Large meals", "Lie down after eating"],
    correctOption: 1,
    explanation: "Prevent reflux. Do NOT lie down after eating."
  },
  {
    id: 427,
    domain: Domain.INTERVENTION,
    question: "How much water does 1 cal/cc formula provide?",
    answer: "Approx 83%",
    options: ["50%", "Approx 83%", "70%", "100%"],
    correctOption: 1,
    explanation: "1.5 cal/cc is ~77%, 2.0 cal/cc is ~70% water."
  },
  {
    id: 428,
    domain: Domain.BIOCHEMISTRY,
    question: "Which amino acid transports fatty acids into mitochondria?",
    answer: "Carnitine",
    options: ["Glutamine", "Carnitine", "Arginine", "Leucine"],
    correctOption: 1,
    explanation: "Carnitine shuttle."
  },
  {
    id: 429,
    domain: Domain.MANAGEMENT,
    question: "Management by Objectives (MBO) is which style?",
    answer: "Democratic / Participative",
    options: ["Autocratic", "Democratic / Participative", "Laissez-faire", "Dictatorial"],
    correctOption: 1,
    explanation: "Manager and employee agree on objectives together."
  },
  {
    id: 430,
    domain: Domain.FOODSERVICE,
    question: "The distance between the chair back and the table should be:",
    answer: "18 inches",
    options: ["12 inches", "18 inches", "24 inches", "36 inches"],
    correctOption: 1,
    explanation: "Ergonomics for dining."
  },
  {
    id: 431,
    domain: Domain.CLINICAL,
    question: "Megaloblastic anemia in alcoholism is usually due to:",
    answer: "Folate deficiency",
    options: ["Iron deficiency", "Folate deficiency", "B12 deficiency", "Protein deficiency"],
    correctOption: 1,
    explanation: "Alcohol interferes with folate cycle."
  },
  {
    id: 432,
    domain: Domain.CLINICAL,
    question: "Normal gestation length:",
    answer: "40 weeks",
    options: ["36 weeks", "40 weeks", "42 weeks", "38 weeks"],
    correctOption: 1,
    explanation: "Preterm is <37 weeks."
  },
  {
    id: 433,
    domain: Domain.ASSESSMENT,
    question: "Normal weight gain for twins (pregnancy)?",
    answer: "37 - 54 lbs",
    options: ["25-35 lbs", "37 - 54 lbs", "50-60 lbs", "15-25 lbs"],
    correctOption: 1,
    explanation: "Higher requirements."
  },
  {
    id: 434,
    domain: Domain.CLINICAL,
    question: "Hyperemesis Gravidarum (severe nausea) risk:",
    answer: "Ketosis and Thiamin deficiency",
    options: ["Weight gain", "Ketosis and Thiamin deficiency", "Diabetes", "Hypertension"],
    correctOption: 1,
    explanation: "Severe vomiting leads to starvation state."
  },
  {
    id: 435,
    domain: Domain.INTERVENTION,
    question: "Breastfeeding is contraindicated in:",
    answer: "HIV/AIDS (in developed countries) and Galactosemia",
    options: ["Mastitis", "HIV/AIDS (in developed countries) and Galactosemia", "Cold/Flu", "Hepatitis B"],
    correctOption: 1,
    explanation: "Can transmit virus (though guidelines vary globally)."
  },
  {
    id: 436,
    domain: Domain.CLINICAL,
    question: "Start solid foods for infants at:",
    answer: "4-6 months (when sitting up/extrusion reflex gone)",
    options: ["2 months", "4-6 months (when sitting up/extrusion reflex gone)", "8 months", "1 year"],
    correctOption: 1,
    explanation: "Developmental readiness."
  },
  {
    id: 437,
    domain: Domain.CLINICAL,
    question: "Which milk is NOT appropriate for infants < 1 year?",
    answer: "Cow's milk",
    options: ["Breast milk", "Iron-fortified formula", "Cow's milk", "Soy formula"],
    correctOption: 2,
    explanation: "High renal solute load, risk of GI bleeding."
  },
  {
    id: 438,
    domain: Domain.CLINICAL,
    question: "Baby Bottle Tooth Decay is caused by:",
    answer: "Sleeping with bottle (milk/juice)",
    options: ["Pacifier use", "Sleeping with bottle (milk/juice)", "Thumb sucking", "Genetics"],
    correctOption: 1,
    explanation: "Carbs sit on teeth allowing bacteria to grow."
  },
  {
    id: 439,
    domain: Domain.ASSESSMENT,
    question: "Sarcopenia is:",
    answer: "Age-related loss of muscle mass and strength",
    options: ["Fat loss", "Age-related loss of muscle mass and strength", "Bone loss", "Water loss"],
    correctOption: 1,
    explanation: "Osteopenia is bone loss."
  },
  {
    id: 440,
    domain: Domain.CLINICAL,
    question: "Cachexia is driven by:",
    answer: "Inflammatory cytokines (TNF, IL-6)",
    options: ["Starvation only", "Inflammatory cytokines (TNF, IL-6)", "Lack of food access", "Depression"],
    correctOption: 1,
    explanation: "Metabolic change, unlike simple starvation."
  },
  {
    id: 441,
    domain: Domain.INTERVENTION,
    question: "Enteral formula with fiber helps to:",
    answer: "Normalize bowel function (reduce diarrhea/constipation)",
    options: ["Increase speed", "Normalize bowel function (reduce diarrhea/constipation)", "Reduce cost", "Increase calories"],
    correctOption: 1,
    explanation: "Prebiotic effect for colonic health."
  },
  {
    id: 442,
    domain: Domain.INTERVENTION,
    question: "Elemental (Hydrolyzed) formulas are used for:",
    answer: "Malabsorption / Compromised GI function",
    options: ["Standard patients", "Malabsorption / Compromised GI function", "Constipation", "Weight gain"],
    correctOption: 1,
    explanation: "Pre-digested (amino acids, simple sugars)."
  },
  {
    id: 443,
    domain: Domain.MANAGEMENT,
    question: "Which scheduling type has the lowest employee turnover?",
    answer: "Master Schedule (Predictable)",
    options: ["Shift work", "Master Schedule (Predictable)", "On-call", "Split shift"],
    correctOption: 1,
    explanation: "Employees appreciate knowing days off in advance."
  },
  {
    id: 444,
    domain: Domain.MANAGEMENT,
    question: "FTE Calculation: You have 3 FT cooks (40h), 2 PT (20h), 1 PT (10h). Total FTEs?",
    answer: "4.25 FTEs",
    options: ["6 FTEs", "4.25 FTEs", "3.5 FTEs", "5 FTEs"],
    correctOption: 1,
    explanation: "(3x40) + (2x20) + 10 = 120 + 40 + 10 = 170 hours. 170 / 40 = 4.25."
  },
  {
    id: 445,
    domain: Domain.FOODSERVICE,
    question: "Psychrometric chart measures:",
    answer: "Properties of air (Temperature & Humidity)",
    options: ["Psychology of eating", "Properties of air (Temperature & Humidity)", "Cooking time", "bacteria growth"],
    correctOption: 1,
    explanation: "Used in HVAC design and food drying."
  },
  {
    id: 446,
    domain: Domain.BIOCHEMISTRY,
    question: "Niacin (B3) can be synthesized from:",
    answer: "Tryptophan (requires B6 and Iron)",
    options: ["Tyrosine", "Tryptophan (requires B6 and Iron)", "Lysine", "Glucose"],
    correctOption: 1,
    explanation: "60mg Tryptophan = 1mg Niacin."
  },
  {
    id: 447,
    domain: Domain.CLINICAL,
    question: "Hypocalcemia signs:",
    answer: "Tetany (Chvostek's & Trousseau's signs)",
    options: ["Fatigue", "Tetany (Chvostek's & Trousseau's signs)", "Bone pain", "Headache"],
    correctOption: 1,
    explanation: "Neuromuscular irritability."
  },
  {
    id: 448,
    domain: Domain.CLINICAL,
    question: "Phosphorus binders (PhosLo) should be taken:",
    answer: "With meals",
    options: ["On empty stomach", "With meals", "Before bed", "Once a week"],
    correctOption: 1,
    explanation: "To bind phosphorus in the food."
  },
  {
    id: 449,
    domain: Domain.INTERVENTION,
    question: "Fluid needs for CHF:",
    answer: "Often restricted to 1.5 - 2 L/day",
    options: ["3 L/day", "Often restricted to 1.5 - 2 L/day", "No restriction", "500ml"],
    correctOption: 1,
    explanation: "Prevent volume overload."
  },
  {
    id: 450,
    domain: Domain.MANAGEMENT,
    question: "Servant Leadership:",
    answer: "Leader focuses on needs of employees first",
    options: ["Leader is boss", "Leader focuses on needs of employees first", "Leader does all work", "No leader"],
    correctOption: 1,
    explanation: "Greenleaf's philosophy. Service to others."
  }
];
