import type { Language } from "@/components/language-provider"

export type LabMetric = {
  label: string
  value: string
  sup: string
  name: string
  bar: number
  limitPrefix: string
  limitHighlight: string
}

export type LabCheck = { title: string; text: string; tag: string }

export type LabFattyAcid = {
  name: string
  sub: string
  pct: number
  bar: number
  type: "primary" | "secondary" | "trace"
}

export type LabTraceCell = { label: string; value: string }

export type LabCertificationCopy = {
  badge: string
  certTitleBefore: string
  certTitleEm: string
  certTitleAfter: string
  certBody: string
  trustItems: string[]
  analysisLabel: string
  analysisTitleBefore: string
  analysisTitleEm: string
  analysisBody: string
  metrics: LabMetric[]
  fattyLabel: string
  fattyTitleBefore: string
  fattyTitleEm: string
  fattyTitleAfter: string
  fattyIntro1: string
  fattyIntro2: string
  oleicPct: string
  oleicCaption: string
  fattyAcids: LabFattyAcid[]
  purityLabel: string
  purityTitleEm: string
  purityTitleLine2: string
  purityTitleLine3: string
  purityChecks: LabCheck[]
  quote: string
  quoteAttribution: string
  sitosterolLabel: string
  sitosterolThreshold: string
  sitosterolBody: string
  traceLabel: string
  traceTitleBefore: string
  traceTitleEm: string
  traceBody: string
  traceCells: LabTraceCell[]
  downloadReport: string
  verifyLab: string
  footerLegal: string
}

const en: LabCertificationCopy = {
  badge: "Independently Verified · SGS Tunisia · IOC Accredited",
  certTitleBefore: "Certified ",
  certTitleEm: "Extra Virgin",
  certTitleAfter: "by International Standard",
  certBody:
    "Every harvest is independently tested by SGS Tunisia — one of the world's leading inspection bodies — against the International Olive Council's rigorous commercial standard. Our oil earns the highest possible grade: Extra Virgin.",
  trustItems: [
    "ISO/IEC 17025:2017 Accredited",
    "International Olive Council Approved Lab",
    "COI/T.15/NC nº3 Rev.21-2025 Compliant",
    "SGS Tunisia · Report No. TLHP26-000264",
  ],
  analysisLabel: "Laboratory Analysis · Lot 05260",
  analysisTitleBefore: "Numbers That",
  analysisTitleEm: "Speak for Themselves",
  analysisBody:
    "Six key indicators place our oil in the exceptional tier of Extra Virgin — each result far below international limits, tested by SGS Tunisia's IOC-recognised laboratory.",
  metrics: [
    {
      label: "Free Acidity",
      value: "0.16",
      sup: "%",
      name: "% Oleic Acid Equivalents",
      bar: 20,
      limitPrefix: "Limit ≤0.80%",
      limitHighlight: "We're 80% below",
    },
    {
      label: "Peroxide Value",
      value: "8.0",
      sup: " meqO₂/kg",
      name: "Oxidation Indicator",
      bar: 40,
      limitPrefix: "Limit ≤20.0",
      limitHighlight: "Exceptionally fresh",
    },
    {
      label: "UV Absorption K₂₃₂",
      value: "2.10",
      sup: "",
      name: "Purity & Freshness Marker",
      bar: 84,
      limitPrefix: "Limit ≤2.50",
      limitHighlight: "Confirmed pure",
    },
    {
      label: "UV Absorption K₂₇₀",
      value: "0.13",
      sup: "",
      name: "Refinement Indicator",
      bar: 59,
      limitPrefix: "Limit ≤0.22",
      limitHighlight: "Zero refinement",
    },
    {
      label: "Delta K",
      value: "0.00",
      sup: "",
      name: "Adulteration Indicator",
      bar: 1,
      limitPrefix: "Limit ≤0.01",
      limitHighlight: "Absolute zero",
    },
    {
      label: "Moisture Content",
      value: "0.11",
      sup: "%",
      name: "Water & Volatile Matter",
      bar: 55,
      limitPrefix: "Limit ≤0.20%",
      limitHighlight: "Clean extraction",
    },
  ],
  fattyLabel: "Fatty Acid Composition · Lot 05260",
  fattyTitleBefore: "What's ",
  fattyTitleEm: "Inside",
  fattyTitleAfter: "Every Drop",
  fattyIntro1:
    "Our Extra Virgin Olive Oil carries a fatty acid profile that reflects the Mediterranean climate and ancient Tunisian olive varieties at their finest. Dominated by heart-healthy oleic acid, with a balanced omega profile and near-zero trans fats.",
  fattyIntro2:
    "All values are independently verified to fall within International Olive Council specifications — confirming both the authenticity and superior nutritional character of our oil.",
  oleicPct: "64.3%",
  oleicCaption:
    "Oleic acid (Omega-9)\nThe celebrated monounsaturated fat associated with cardiovascular health and the Mediterranean diet.",
  fattyAcids: [
    { name: "Oleic Acid (C18:1)", sub: "Omega-9", pct: 64.3, bar: 76, type: "primary" },
    { name: "Palmitic Acid (C16:0)", sub: "Saturated", pct: 16.6, bar: 24, type: "secondary" },
    { name: "Linoleic Acid (C18:2)", sub: "Omega-6", pct: 12.9, bar: 19, type: "secondary" },
    { name: "Stearic Acid (C18:0)", sub: "Saturated", pct: 2.8, bar: 10, type: "trace" },
    { name: "Palmitoleic Acid (C16:1)", sub: "Omega-7", pct: 1.8, bar: 7, type: "trace" },
    { name: "Linolenic Acid (C18:3)", sub: "Omega-3", pct: 0.6, bar: 3, type: "trace" },
    { name: "Trans Fats (C18:1T)", sub: "Trans Oleic", pct: 0.02, bar: 0.5, type: "trace" },
  ],
  purityLabel: "Purity Guarantee · Independent Verification",
  purityTitleEm: "Authentic",
  purityTitleLine2: "Olive Oil.",
  purityTitleLine3: "Nothing Added. Nothing Hidden.",
  purityChecks: [
    {
      title: "Zero Adulteration — Confirmed by Sterol Analysis",
      text: "Our β-Sitosterol content is 94.5% (requirement: >93%). This chemical fingerprint confirms our oil contains no seed oils, no vegetable oil blends — only pure Tunisian olive juice.",
      tag: "94.5% β-Sitosterol · Threshold >93%",
    },
    {
      title: "Free of All Chemical Solvents",
      text: "Halogenated solvents, trichloroethylene, and tetrachloroethylene all registered at exactly 0.00 ppm — confirming traditional mechanical extraction with no chemical processing.",
      tag: "0.00 ppm Solvents Detected",
    },
    {
      title: "No Refined Oil Blending — K₂₇₀ Confirms",
      text: "The K₂₇₀ UV absorption value of 0.13 (limit ≤0.22) definitively rules out the presence of refined olive oil — often used to dilute inferior products. Our oil is 100% unrefined.",
      tag: "K270 = 0.13 · Limit ≤0.22",
    },
    {
      title: "ECN42 Triglyceride Test — Anti-Adulteration Marker",
      text: "The difference between actual and theoretical triglyceride content is just 0.03% (limit ≤0.20%). This test specifically detects blending with foreign oils. We pass with the highest margin.",
      tag: "ECN42 Δ = 0.03% · Limit ≤0.20%",
    },
  ],
  quote:
    "The physico-chemical and organoleptic analyses carried out confirm characteristics of an extra virgin olive oil according to the commercial norm of the International Olive Council.",
  quoteAttribution: "SGS Tunisia · Report TLHP26-000264.001 · 11 Feb 2026",
  sitosterolLabel: "Apparent β-Sitosterol",
  sitosterolThreshold: "✓ Exceeds minimum threshold of >93.00%",
  sitosterolBody:
    "The sterol profile is the definitive scientific test for olive oil identity. A high β-Sitosterol reading confirms the oil is genuine, pure olive oil — not a blend.",
  traceLabel: "Full Traceability · Lot 05260",
  traceTitleBefore: "From Grove to",
  traceTitleEm: "Your Table",
  traceBody:
    "We believe transparency is the ultimate mark of quality. Every batch is traceable from harvest to your hands, with a full publicly-verifiable lab report.",
  traceCells: [
    { label: "Report Number", value: "TLHP26-000264" },
    { label: "Lot Number", value: "05260" },
    { label: "Harvest Date", value: "November 2025" },
    { label: "Best Before", value: "Jan 2027" },
    { label: "Batch Size", value: "2,798 kg" },
    { label: "Origin", value: "Kalaa Kobra, Tunisia" },
    { label: "Testing Lab", value: "SGS Tunisia S.A." },
    { label: "Test Date", value: "09 Feb 2026" },
  ],
  downloadReport: "Download Full Lab Report (PDF)",
  verifyLab: "Verify Lab Accreditation (IOC)",
  footerLegal:
    "Testing conducted by SGS Tunisia S.A., accredited to ISO/IEC 17025:2017 (Accreditation No. 1-0008) and recognised by the International Olive Council. This report must be reproduced in full. Results relate only to the tested sample.",
}

const fr: LabCertificationCopy = {
  badge: "Vérification indépendante · SGS Tunisie · Accréditation COI",
  certTitleBefore: "Certifiée ",
  certTitleEm: "Vierge Extra",
  certTitleAfter: "selon la norme internationale",
  certBody:
    "Chaque récolte est testée de façon indépendante par SGS Tunisie — l'un des principaux organismes d'inspection au monde — selon la norme commerciale rigoureuse du Conseil oléicole international. Notre huile obtient la plus haute catégorie : vierge extra.",
  trustItems: [
    "Accréditation ISO/CEI 17025:2017",
    "Laboratoire agréé COI",
    "Conforme COI/T.15/NC nº3 Rév.21-2025",
    "SGS Tunisie · Rapport nº TLHP26-000264",
  ],
  analysisLabel: "Analyse de laboratoire · Lot 05260",
  analysisTitleBefore: "Des chiffres qui",
  analysisTitleEm: "parlent d'eux-mêmes",
  analysisBody:
    "Six indicateurs clés placent notre huile dans le registre exceptionnel de la vierge extra — chaque résultat très en deçà des limites internationales, contrôlé par le laboratoire SGS Tunisie reconnu par la COI.",
  metrics: [
    {
      label: "Acidité libre",
      value: "0,16",
      sup: " %",
      name: "% équivalents acide oléique",
      bar: 20,
      limitPrefix: "Limite ≤0,80 %",
      limitHighlight: "80 % sous la limite",
    },
    {
      label: "Indice de peroxyde",
      value: "8,0",
      sup: " meqO₂/kg",
      name: "Indicateur d'oxydation",
      bar: 40,
      limitPrefix: "Limite ≤20,0",
      limitHighlight: "Fraîcheur exceptionnelle",
    },
    {
      label: "Absorption UV K₂₃₂",
      value: "2,10",
      sup: "",
      name: "Marqueur de pureté et fraîcheur",
      bar: 84,
      limitPrefix: "Limite ≤2,50",
      limitHighlight: "Pureté confirmée",
    },
    {
      label: "Absorption UV K₂₇₀",
      value: "0,13",
      sup: "",
      name: "Indicateur de raffinage",
      bar: 59,
      limitPrefix: "Limite ≤0,22",
      limitHighlight: "Zéro raffinage",
    },
    {
      label: "Delta K",
      value: "0,00",
      sup: "",
      name: "Indicateur d'adultération",
      bar: 1,
      limitPrefix: "Limite ≤0,01",
      limitHighlight: "Zéro absolu",
    },
    {
      label: "Teneur en humidité",
      value: "0,11",
      sup: " %",
      name: "Eau et matières volatiles",
      bar: 55,
      limitPrefix: "Limite ≤0,20 %",
      limitHighlight: "Extraction propre",
    },
  ],
  fattyLabel: "Profil en acides gras · Lot 05260",
  fattyTitleBefore: "Ce qu'il y a ",
  fattyTitleEm: "à l'intérieur",
  fattyTitleAfter: "de chaque goutte",
  fattyIntro1:
    "Notre huile d'olive vierge extra porte un profil en acides gras qui reflète le climat méditerranéen et les variétés tunisiennes ancestrales à leur apogée. Dominée par l'acide oléique, avec un équilibre oméga favorable et des trans quasi nuls.",
  fattyIntro2:
    "Toutes les valeurs sont vérifiées de façon indépendante selon les spécifications du Conseil oléicole international — attestant l'authenticité et la qualité nutritionnelle supérieure de notre huile.",
  oleicPct: "64,3 %",
  oleicCaption:
    "Acide oléique (oméga-9)\nLe gras monoinsaturé célébré, associé à la santé cardiovasculaire et au régime méditerranéen.",
  fattyAcids: [
    { name: "Acide oléique (C18:1)", sub: "Oméga-9", pct: 64.3, bar: 76, type: "primary" },
    { name: "Acide palmitique (C16:0)", sub: "Saturé", pct: 16.6, bar: 24, type: "secondary" },
    { name: "Acide linoléique (C18:2)", sub: "Oméga-6", pct: 12.9, bar: 19, type: "secondary" },
    { name: "Acide stéarique (C18:0)", sub: "Saturé", pct: 2.8, bar: 10, type: "trace" },
    { name: "Acide palmitoléique (C16:1)", sub: "Oméga-7", pct: 1.8, bar: 7, type: "trace" },
    { name: "Acide linolénique (C18:3)", sub: "Oméga-3", pct: 0.6, bar: 3, type: "trace" },
    { name: "Acides trans (C18:1T)", sub: "Oléique trans", pct: 0.02, bar: 0.5, type: "trace" },
  ],
  purityLabel: "Garantie de pureté · Vérification indépendante",
  purityTitleEm: "Authentique",
  purityTitleLine2: "huile d'olive.",
  purityTitleLine3: "Rien d'ajouté. Rien de caché.",
  purityChecks: [
    {
      title: "Zéro adultération — confirmée par analyse des stérols",
      text: "Notre teneur en β-sitostérol est de 94,5 % (exigence : >93 %). Cette empreinte chimique confirme l'absence d'huiles de graines ou de mélanges végétaux — uniquement du jus d'olive tunisien pur.",
      tag: "94,5 % β-sitostérol · Seuil >93 %",
    },
    {
      title: "Sans solvants chimiques",
      text: "Solvants halogénés, trichloroéthylène et tétrachloroéthylène enregistrés à 0,00 ppm — extraction mécanique traditionnelle, sans procédé chimique.",
      tag: "0,00 ppm de solvants détectés",
    },
    {
      title: "Aucun mélange d'huile raffinée — K₂₇₀ le confirme",
      text: "L'absorption UV K₂₇₀ de 0,13 (limite ≤0,22) exclut toute huile raffinée — souvent utilisée pour diluer des produits inférieurs. Notre huile est 100 % non raffinée.",
      tag: "K270 = 0,13 · Limite ≤0,22",
    },
    {
      title: "Test ECN42 — marqueur anti-adultération",
      text: "L'écart entre teneur réelle et théorique en triglycérides n'est que de 0,03 % (limite ≤0,20 %). Ce test détecte spécifiquement les mélanges avec d'autres huiles. Nous passons avec la plus large marge.",
      tag: "ECN42 Δ = 0,03 % · Limite ≤0,20 %",
    },
  ],
  quote:
    "Les analyses physico-chimiques et organoleptiques réalisées confirment les caractéristiques d'une huile d'olive vierge extra selon la norme commerciale du Conseil oléicole international.",
  quoteAttribution: "SGS Tunisie · Rapport TLHP26-000264.001 · 11 fév. 2026",
  sitosterolLabel: "β-sitostérol apparent",
  sitosterolThreshold: "✓ Dépasse le seuil minimum de >93,00 %",
  sitosterolBody:
    "Le profil en stérols est le test scientifique définitif de l'identité de l'huile d'olive. Un β-sitostérol élevé confirme une huile authentique et pure — pas un mélange.",
  traceLabel: "Traçabilité complète · Lot 05260",
  traceTitleBefore: "Du verger à",
  traceTitleEm: "votre table",
  traceBody:
    "La transparence est, pour nous, la marque ultime de la qualité. Chaque lot est traçable de la récolte à vos mains, avec un rapport de laboratoire vérifiable publiquement.",
  traceCells: [
    { label: "Nº de rapport", value: "TLHP26-000264" },
    { label: "Nº de lot", value: "05260" },
    { label: "Date de récolte", value: "Novembre 2025" },
    { label: "À consommer de préférence avant", value: "janv. 2027" },
    { label: "Taille du lot", value: "2 798 kg" },
    { label: "Origine", value: "Kalâa Kebira, Tunisie" },
    { label: "Laboratoire", value: "SGS Tunisie S.A." },
    { label: "Date d'analyse", value: "09 fév. 2026" },
  ],
  downloadReport: "Télécharger le rapport complet (PDF)",
  verifyLab: "Vérifier l'accréditation du laboratoire (COI)",
  footerLegal:
    "Analyses réalisées par SGS Tunisie S.A., accréditée ISO/CEI 17025:2017 (nº d'accréditation 1-0008) et reconnue par le Conseil oléicole international. Ce rapport doit être reproduit intégralement. Les résultats ne concernent que l'échantillon testé.",
}

export function getLabCertificationCopy(language: Language): LabCertificationCopy {
  if (language === "fr") return fr
  return en
}
