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
      description: "غُرست أولى الأشجار في تلال صفاقس.",
    },
    {
      year: "1985",
      title: "إتقان الطرق التقليدية",
      description: "من الغصن إلى المعصرة دون إبطاء.",
    },
    {
      year: "2000",
      title: "ما بعد البستان",
      description: "غادر الزيت البستان — للتذوق، ولمائدات أبعد من تونس.",
    },
    {
      year: "2026",
      title: "ابتكار عصري",
      description: "البساتين، والمعصرة على المعيار نفسه.",
    },
  ]

  const milestonesEn = [
    {
      year: "1972",
      title: "The first trees",
      description:
        "The first trees were planted in the hills of Sfax.",
    },
    {
      year: "1985",
      title: "Cold extraction as a discipline",
      description:
        "From branch to mill without delay — so aroma and polyphenols reach the bottle.",
    },
    {
      year: "2000",
      title: "Beyond the grove",
      description:
        "The oils left the grove — for tasting, and for tables beyond Tunisia.",
    },
    {
      year: "2026",
      title: "Today",
      description:
        "The groves, with tasting and traceability held to the same standard.",
    },
  ]

  const milestonesFr = [
    {
      year: "1972",
      title: "Les premiers oliviers",
      description: "Plantés dans les collines de Sfax.",
    },
    {
      year: "1985",
      title: "L'extraction à froid",
      description: "De la branche au moulin, sans délai.",
    },
    {
      year: "2000",
      title: "Au-delà de l'oliveraie",
      description: "L'huile quitte le domaine — pour la dégustation, et pour d'autres tables.",
    },
    {
      year: "2026",
      title: "Aujourd'hui",
      description: "Les oliveraies, avec la même exigence au moulin.",
    },
  ]

  const milestones = language === "ar" ? milestonesAr : language === "fr" ? milestonesFr : milestonesEn

  const valuesAr = [
    {
      icon: Leaf,
      title: "الأرض",
      description: "البساتين ينبغي أن تعيش بعدنا.",
    },
    {
      icon: Award,
      title: "المعصرة",
      description: "كل دفعة تُذاق.",
    },
    {
      icon: Users,
      title: "الناس",
      description: "مع جيراننا.",
    },
    {
      icon: Clock,
      title: "الزمن",
      description: "منذ ١٩٧٢.",
    },
  ]

  const valuesEn = [
    {
      icon: Leaf,
      title: "The land",
      description: "The groves should outlive us.",
    },
    {
      icon: Award,
      title: "The mill",
      description: "Each batch is tasted.",
    },
    {
      icon: Users,
      title: "The people",
      description: "Grown with our neighbors.",
    },
    {
      icon: Clock,
      title: "Time",
      description: "Since 1972.",
    },
  ]

  const valuesFr = [
    {
      icon: Leaf,
      title: "La terre",
      description: "Les oliveraies doivent nous survivre.",
    },
    {
      icon: Award,
      title: "Le moulin",
      description: "Chaque lot est goûté.",
    },
    {
      icon: Users,
      title: "Les gens",
      description: "Avec nos voisins.",
    },
    {
      icon: Clock,
      title: "Le temps",
      description: "Depuis 1972.",
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
            <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-[var(--matte-black)]">
              <Image
                src="/images/lifestyle/qalaa-in-the-grove.png"
                alt={t("story.image.alt")}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
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
