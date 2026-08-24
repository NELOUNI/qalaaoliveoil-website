const TASTING_EN = "Single-variety Chetoui. Cut grass, a smooth start, a light peppery finish."
const TASTING_AR = "شتوي أحادي الصنف. عشب طازج، بداية ناعمة، نهاية فلفلية خفيفة."
const TASTING_FR = "Chetoui monovariétal. Herbe fraîche, attaque souple, finale poivrée légère."

const ORIGIN_STORY_EN =
  "Chetoui from the hills of Sousse. High in polyphenols. Early picked, cold-extracted, tasted before it leaves the mill."
const ORIGIN_STORY_AR =
  "شتوي من تلال سوسة. غنيٌّ بالبوليفينول. يُقطف مبكراً، يُعصر على البارد، ويُذاق قبل أن يغادر المعصرة."
const ORIGIN_STORY_FR =
  "Chetoui des collines de Sousse. Riche en polyphénols. Cueilli tôt, extrait à froid, goûté avant de quitter le moulin."

const SHARED_TASTING_EN = ["Fresh cut grass", "Smooth & balanced", "Light peppery finish"]
const SHARED_TASTING_AR = ["عشب طازج", "بداية ناعمة متوازنة", "نهاية فلفلية خفيفة"]
const SHARED_TASTING_FR = ["Herbe fraîche", "Souple et équilibré", "Finale poivrée légère"]

export const products = [
  {
    id: "1",
    sku: "QALAA-LINFA-OVAL-500ML",
    name_en: "Linfa 500 ml",
    name_ar: "لينفا ٥٠٠ مل",
    name_fr: "Linfa 500 ml",
    price: 89.99,
    image_url: "/QALAA%20LINFA.jpeg",
    gallery: ["/QALAA%20LINFA.jpeg", "/images/lifestyle/qalaa-in-the-grove.png"],
    region_en: "Hills of Sousse, Tunisia",
    region_ar: "تلال سوسة، تونس",
    region_fr: "Collines de Sousse, Tunisie",
    description_en: TASTING_EN,
    description_ar: TASTING_AR,
    description_fr: TASTING_FR,
    origin_story_en: ORIGIN_STORY_EN,
    origin_story_ar: ORIGIN_STORY_AR,
    origin_story_fr: ORIGIN_STORY_FR,
    volume_ml: 500,
    acidity_level: 0.16,
    tasting_notes_en: SHARED_TASTING_EN,
    tasting_notes_ar: SHARED_TASTING_AR,
    tasting_notes_fr: SHARED_TASTING_FR,
    harvest_year: 2025,
    in_stock: true,
    stock_quantity: 50,
    is_premium: true,
    category: "olive-oil",
  },
  {
    id: "2",
    sku: "QALAA-QUADRA-SQUARE-500ML",
    name_en: "Quadra 500 ml",
    name_ar: "كوادرا ٥٠٠ مل",
    name_fr: "Quadra 500 ml",
    price: 89.99,
    image_url: "/QALAA%20Natura%20Quadra.jpeg",
    region_en: "Hills of Sousse, Tunisia",
    region_ar: "تلال سوسة، تونس",
    region_fr: "Collines de Sousse, Tunisie",
    description_en: TASTING_EN,
    description_ar: TASTING_AR,
    description_fr: TASTING_FR,
    origin_story_en: ORIGIN_STORY_EN,
    origin_story_ar: ORIGIN_STORY_AR,
    origin_story_fr: ORIGIN_STORY_FR,
    volume_ml: 500,
    acidity_level: 0.16,
    tasting_notes_en: SHARED_TASTING_EN,
    tasting_notes_ar: SHARED_TASTING_AR,
    tasting_notes_fr: SHARED_TASTING_FR,
    harvest_year: 2025,
    in_stock: true,
    stock_quantity: 30,
    is_premium: true,
    category: "olive-oil",
  },
  {
    id: "3",
    sku: "QALAA-LINFA-OVAL-250ML",
    name_en: "Linfa 250 ml",
    name_ar: "لينفا ٢٥٠ مل",
    name_fr: "Linfa 250 ml",
    price: 45,
    image_url: "/images/products/QALAA-LINFA-OVAL-250ml.png",
    gallery: ["/images/products/QALAA-LINFA-OVAL-250ml.png", "/images/lifestyle/qalaa-packaged.png"],
    region_en: "Hills of Sousse, Tunisia",
    region_ar: "تلال سوسة، تونس",
    region_fr: "Collines de Sousse, Tunisie",
    description_en: TASTING_EN,
    description_ar: TASTING_AR,
    description_fr: TASTING_FR,
    origin_story_en: ORIGIN_STORY_EN,
    origin_story_ar: ORIGIN_STORY_AR,
    origin_story_fr: ORIGIN_STORY_FR,
    volume_ml: 250,
    acidity_level: 0.16,
    tasting_notes_en: SHARED_TASTING_EN,
    tasting_notes_ar: SHARED_TASTING_AR,
    tasting_notes_fr: SHARED_TASTING_FR,
    harvest_year: 2025,
    in_stock: true,
    stock_quantity: 40,
    is_premium: true,
    category: "olive-oil",
  },
]

export function getProductById(id: string) {
  return products.find((p) => p.id === id)
}

export function getProductBySku(sku: string) {
  return products.find((p) => p.sku === sku)
}
