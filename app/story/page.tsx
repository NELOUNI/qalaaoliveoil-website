"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Award, Users, Clock } from "lucide-react"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function StoryPage() {
  const { t, language } = useLanguage()

  const milestonesAr = [
    {
      year: "1972",
      title: "بداية إرث العائلة",
      description: "غرس أجدادنا أول أشجار الزيتون في تلال صفاقس، لتبدأ مسيرة عائلية متوارثة عبر الأجيال.",
    },
    {
      year: "1985",
      title: "إتقان الطرق التقليدية",
      description: "أتقنت العائلة تقنيات العصر على البارد لضمان استخلاص نقي يحافظ على النكهة والقيمة الغذائية.",
    },
    {
      year: "2000",
      title: "اعتراف دولي",
      description: "بدأت زيوتنا تحصد جوائز دولية، حاملة تميّز تونس إلى الساحة العالمية.",
    },
    {
      year: "2026",
      title: "ابتكار عصري",
      description: "نعتمد ممارسات زراعية مستدامة وضبط جودة حديث مع الحفاظ على حرفيتنا التقليدية.",
    },
  ]

  const milestonesEn = [
    {
      year: "1972",
      title: "Where the lineage took root",
      description:
        "The first trees were planted in the hills of Sfax — not as a crop alone, but as a promise: to guard the fruit, the soil, and the slow wisdom of harvest.",
    },
    {
      year: "1985",
      title: "Cold extraction as a discipline",
      description:
        "We committed to the clock between branch and mill: temperature, hygiene, and restraint — so aroma and polyphenols survive the journey into the bottle.",
    },
    {
      year: "2000",
      title: "Judged beside the world's best",
      description:
        "Medals and juries became mirrors — proof that Tunisian terroir, when honored, belongs in the same conversation as the finest crus d'huile.",
    },
    {
      year: "2026",
      title: "Traceability meets terroir",
      description:
        "Today we pair ancestral groves with rigorous tracking and tasting panels — inviting you to explore each cuvée, then order with confidence.",
    },
  ]

  const milestonesFr = [
    {
      year: "1972",
      title: "Là où la lignée a pris racine",
      description:
        "Les premiers oliviers ont été plantés dans les collines de Sfax — non comme simple récolte, mais comme promesse : protéger le fruit, le sol, et la lente sagesse des vendanges.",
    },
    {
      year: "1985",
      title: "L'extraction à froid comme discipline",
      description:
        "Nous avons fait du délai branche-moulin un rituel : température, hygiène, retenue — pour que arômes et polyphénols traversent la bouteille intacts.",
    },
    {
      year: "2000",
      title: "À la table des meilleures huiles du monde",
      description:
        "Médailles et jurys sont devenus des miroirs — preuve que le terroir tunisien, bien respecté, dialogue avec les plus grands crus d'huile.",
    },
    {
      year: "2026",
      title: "Traçabilité et terroir",
      description:
        "Aujourd'hui nous marions oliveraies ancestrales et contrôles rigoureux — pour que vous exploriez chaque cuvée, puis commandiez en toute confiance.",
    },
  ]

  const milestones = language === "ar" ? milestonesAr : language === "fr" ? milestonesFr : milestonesEn

  const valuesAr = [
    {
      icon: Leaf,
      title: "الاستدامة",
      description: "نتبع أساليب زراعة عضوية تحافظ على أرضنا للأجيال القادمة.",
    },
    {
      icon: Award,
      title: "التميّز",
      description: "كل زجاجة تلبّي أعلى المعايير الدولية لزيت الزيتون البكر الممتاز.",
    },
    {
      icon: Users,
      title: "المجتمع",
      description: "ندعم المزارعين المحليين ونحافظ على أساليب الزراعة التونسية التقليدية.",
    },
    {
      icon: Clock,
      title: "التقاليد",
      description: "أكثر من 50 عامًا من خبرة العائلة تقود كل مرحلة من مراحل الإنتاج.",
    },
  ]

  const valuesEn = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Organic practices and soil care so the groves outlive us — and keep giving oil with identity.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Every lot is tasted and traced; we chase the lowest acidity we can hold and a finish you remember tomorrow.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We work with growers and neighbors who share our obsession — preserving Tunisian olive culture as a living craft.",
    },
    {
      icon: Clock,
      title: "Patience",
      description: "More than fifty years of family knowledge steers harvest timing, milling, and the quiet art of blending.",
    },
  ]

  const valuesFr = [
    {
      icon: Leaf,
      title: "Durabilité",
      description: "Pratiques biologiques et soin des sols pour que les oliveraies nous survivent — et donnent encore une huile avec une âme.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Chaque lot est dégusté et tracé ; nous visons la plus basse acidité possible et une finale que vous vous rappellerez le lendemain.",
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Nous travaillons avec des producteurs et voisins qui partagent notre obsession — préserver la culture oléicole tunisienne comme un métier vivant.",
    },
    {
      icon: Clock,
      title: "Patience",
      description: "Plus de cinquante ans de savoir familial guident le moment de la récolte, le moulinage, et l'art discret du mariage des lots.",
    },
  ]

  const values = language === "ar" ? valuesAr : language === "fr" ? valuesFr : valuesEn

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--sage-olive)]/20 via-[var(--matte-black)] to-[var(--blush-clay)]/30">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-[var(--antique-gold)] mb-6 text-balance">{t("story.title")}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t("story.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">{t("story.heritage.title")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{t("story.heritage.text")}</p>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("story.tradition.text")}</p>
            </div>
            <div className="relative aspect-square bg-gradient-to-br from-[var(--matte-black)] to-[var(--blush-clay)] rounded-lg overflow-hidden">
              <Image
                src="/olive-grove-story.png"
                alt={t("story.image.alt")}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-[var(--sage-olive)]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">
            {t("story.journey.title")}
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-8">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-primary font-numeric">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">
            {t("story.values.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
