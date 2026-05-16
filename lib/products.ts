export const products = [
  {
    id: "1",
    name_en: "Gold Reserve of Qalaa",
    name_ar: "احتياطي قلعة الذهبي",
    name_fr: "Réserve d'or de Qalaa",
    price: 89.99,
    image_url: "/QALAA%20LINFA.jpeg",
    region_en: "Domaine Al Nagr",
    region_ar: "دومين النقر",
    region_fr: "Domaine Al Nagr",
    description_en:
      "Ultra-premium cuvée — a meticulous blend of Chetoui and Chemlali for layered fruit, cut grass, and a long, peppery finish worthy of raw finishing.",
    description_ar: "زيت زيتون بكر ممتاز فائق الجودة — مزيج دقيق من الشتوي والشملالي لنكهات فواكه وعشب ونهاية فلفلية طويلة تليق بالتشريب.",
    description_fr:
      "Cuvée ultra-premium — assemblage méticuleux de Chetoui et Chemlali : fruits verts, herbe coupée et finale poivrée longue, pensée pour le cru en finition.",
    origin_story_en:
      "From ancient terraces in the hills of Al Nagr, this oil is the fruit of patient husbandry: early harvest windows, cold extraction within hours, and batches tasted until the profile rings true. It is liquid gold for those who read labels — and for those who only trust the nose and the throat.",
    origin_story_ar:
      "من المدرجات العريقة في تلال النغر، هذا الزيت ثمرة عناية طويلة: نوافذ حصاد مبكرة، عصر بارد خلال ساعات، ودفعات تُذاق حتى تتكامل الشخصية. ذهب سائل لمن يقرأ التفاصيل — ولمن يثق فقط بالأنف والحلق.",
    origin_story_fr:
      "Issu des terrasses anciennes des collines d'Al Nagr, cette huile naît d'une culture patiente : récolte précoce, extraction à froid en quelques heures, lots dégustés jusqu'à ce que le profil soit juste. De l'or liquide pour ceux qui lisent l'étiquette — et pour ceux qui ne jurent que par le nez et la gorge.",
    volume_ml: 500,
    acidity_level: 0.16,
    tasting_notes_en: ["Fruity", "Green apple", "Fresh grass"],
    tasting_notes_ar: ["فواكي", "تفاح أخضر", "عشب طازج"],
    tasting_notes_fr: ["Fruité", "Pomme verte", "Herbe fraîche"],
    harvest_year: 2025,
    in_stock: true,
    stock_quantity: 50,
    is_premium: true,
    category: "olive-oil",
  },
  {
    id: "2",
    name_en: "Sacred Grove of Al Nagr",
    name_ar: "غابة النغر المباركة",
    name_fr: "Bosquet sacré d'Al Nagr",
    price: 125.99,
    image_url: "/QALAA%20Natura%20Quadra.jpeg",
    region_en: "Domaine Al Nagr",
    region_ar: "دومين النغر",
    region_fr: "Domaine Al Nagr",
    description_en:
      "Ultra-premium monovarietal Chetoui — intense grass, almond butter, and a structured pepper that signals real polyphenol presence.",
    description_ar: "شتوي نقي فائق الجودة — عشبية قوية، زبد لوز، وفلفلية منظمة تدل على وجود حقيقي للبوليفينول.",
    description_fr:
      "Monovariétale Chetoui ultra-premium — herbe intense, beurre d'amande et poivre structuré, signature d'une vraie présence en polyphénols.",
    origin_story_en:
      "From the same Domaine Al Nagr terraces, a different voice: same discipline of harvest and mill, but a singular Chetoui that leans bold — for drizzling where the dish is minimal and the oil must carry the conversation.",
    origin_story_ar:
      "من نفس مدرجات دومين النغر، صوت مختلف: نفس انضباط الحصاد والمعصرة، لكن شتوياً فريداً يميل إلى الجرأة — للتشريب حيث الطبق بسيط والزيت يحمل الحديث.",
    origin_story_fr:
      "Sur les mêmes terrasses du Domaine Al Nagr, une autre voix : même exigence de récolte et de moulin, mais un Chetoui singulier, plus affirmé — à arroser là où l'assiette est simple et l'huile doit porter la conversation.",
    volume_ml: 500,
    acidity_level: 0.16,
    tasting_notes_en: ["Smooth", "Buttery", "Peppery finish"],
    tasting_notes_ar: ["ناعم", "زبدي", "نهاية فلفلية"],
    tasting_notes_fr: ["Onctueux", "Beurré", "Finale poivrée"],
    harvest_year: 2025,
    in_stock: true,
    stock_quantity: 30,
    is_premium: true,
    category: "olive-oil",
  },
]

export function getProductById(id: string) {
  return products.find((p) => p.id === id)
}
