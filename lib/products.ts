export const products = [
  {
    id: "1",
    name_en: "Gold Reserve of Qalaa",
    name_ar: "احتياطي قلعة الذهبي",
    price: 89.99,
    image_url: "/QALAA%20500ml%20no%20background.png",
    region_en: "Sousse",
    region_ar: "سوسة",
    description_en:
      "Ultra Premium blending Chetoui and Chemleli",
    description_ar: "زيت زيتون بكر ممتاز فائق الجودة مزيج شتووي وشملالي",
    origin_story_en:
      "Harvested from ancient olive groves in the hills of Al Nagr, this premium oil represents generations of Tunisian craftsmanship. Our family has tended these sacred trees for over 50 years, using traditional methods passed down through generations.",
    origin_story_ar:
      "محصود من بساتين الزيتون القديمة في تلال النغر، يمثل هذا الزيت الممتاز أجيال من الحرفية التونسية. عائلتنا تعتني بهذه الأشجار المقدسة لأكثر من 50 عاماً، مستخدمة الطرق التقليدية المنقولة عبر الأجيال.",
    volume_ml: 500,
    acidity_level: 0.3,
    tasting_notes_en: ["Fruity", "Green apple", "Fresh grass"],
    tasting_notes_ar: ["فواكي", "تفاح أخضر", "عشب طازج"],
    harvest_year: 2023,
    in_stock: true,
    stock_quantity: 50,
    is_premium: true,
    category: "olive-oil",
  },
  {
    id: "2",
    name_en: "Sacred Grove of Beja",
    name_ar: "غابة باجة المباركة",
    price: 125.99,
    image_url: "/organic-bottle.png",
    region_en: "Beja",
    region_ar: "باجة",
    description_en: "Ultra Premium Chetoui",
    description_ar: "زيت زيتون بكر ممتاز فائق الجودة شتووي نقي 250 مل",
    origin_story_en:
      "Harvested from ancient olive groves in the hills of Beja, this premium oil represents generations of Tunisian craftsmanship. Our family has tended these sacred trees for over 50 years, using traditional methods passed down through generations.",
    origin_story_ar:
      "محصود من بساتين الزيتون القديمة في تلال باجة، يمثل هذا الزيت الممتاز أجيال من الحرفية التونسية. عائلتنا تعتني بهذه الأشجار المقدسة لأكثر من 50 عاماً، مستخدمة الطرق التقليدية المنقولة عبر الأجيال.",
    volume_ml: 500,
    acidity_level: 0.2,
    tasting_notes_en: ["Smooth", "Buttery", "Peppery finish"],
    tasting_notes_ar: ["ناعم", "زبدي", "نهاية فلفلية"],
    harvest_year: 2023,
    in_stock: true,
    stock_quantity: 30,
    is_premium: false,
    category: "olive-oil",
  },
]

export function getProductById(id: string) {
  return products.find((p) => p.id === id)
}
