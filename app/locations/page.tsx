"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import {
  AlignedCardDescriptionSlot,
  AlignedCardMedia,
  AlignedCardTitleSlot,
  alignedCardGridClass,
  alignedCardShellClass,
} from "@/components/aligned-card-primitives"

export default function LocationsPage() {
  const { t, language } = useLanguage()

  const locationsAr = [
    {
      id: 1,
      name: "البستان الرئيسي",
      type: "بستان زيتون وإنتاج",
      address: "دومين النقر، سوسة، تونس",
      phone: "+216 58 737 106",
      hours: "الاثنين - السبت: 8:00 ص - 5:00 م",
      description: "تجول بين أشجار عريقة حيث تبدأ رحلة كل قطرة من زيوتنا.",
      image: "/olive-grove-story.png",
      mapUrl: "https://maps.app.goo.gl/hK9NeK1Soa9NpNtQ8?g_st=afm",
      features: [],
    },
    {
      id: 2,
      name: "قاعة التذوق",
      type: "قاعة تذوق",
      address: "شارع الحبيب بورقيبة، تونس 1000، تونس",
      phone: "+216 58 737 106",
      hours: "الثلاثاء - الأحد: 10:00 ص - 7:00 م",
      description:
        "قريباً في تونس — تذوق موجّه بحجز مسبق. سجّل اهتمامك وسنتواصل معك عند افتتاح القاعة.",
      image: "/tasting room.png",
      mapUrl: null,
      features: [],
    },
    {
      id: 3,
      name: "مختارات منتقاة",
      type: "متجر تجزئة",
      address: "السد، قرب مدرسة طارق بن زياد، الدوحة",
      phone: "+974 33551131",
      hours: "يوميًا: 9:00 ص - 8:00 م",
      description:
        "عنوان دقيق في الدوحة — يُعلَن قريباً. تواصل معنا ليصلك إشعار عند توفر الزجاجات.",
      image: "",
      mapUrl: null,
      features: [],
    },
  ]

  const locationsEn = [
    {
      id: 1,
      name: "Main Olive Grove",
      type: "Olive Grove & Production",
      address: "Domaine Al Nagr, Sousse, Tunisia",
      phone: "+216 58 737 106",
      hours: "Monday - Saturday: 8:00 AM - 5:00 PM",
      description:
        "Stroll ancient terraces where every drop of our ultra-premium oil is born — scent of leaf, soil, and sun before it ever reaches your table.",
      image: "/olive-grove-story.png",
      mapUrl: "https://maps.app.goo.gl/hK9NeK1Soa9NpNtQ8?g_st=afm",
      features: [],
    },
    {
      id: 2,
      name: "Tasting Room",
      type: "Tasting Room",
      address: "Avenue Habib Bourguiba, Tunis 1000, Tunisia",
      phone: "+216 58 737 106",
      hours: "Tuesday - Sunday: 10:00 AM - 7:00 PM",
      description:
        "Opening in Tunis — guided tastings by appointment. Register your interest; we will confirm dates as the room opens.",
      image: "/tasting room.png",
      mapUrl: null,
      features: [],
    },
    {
      id: 3,
      name: "Curated Selections",
      type: "Retail Store",
      address: "Al Saad, near Tariq Ibn Ziyad School, Doha",
      phone: "+974 33551131",
      hours: "Daily: 9:00 AM - 8:00 PM",
      description:
        "Doha — a discreet address, announced soon. Contact us to be notified when bottles are on the shelf.",
      image: "",
      mapUrl: null,
      features: [],
    },
  ]

  const locationsFr = [
    {
      id: 1,
      name: "Oliveraie principale",
      type: "Oliveraie & production",
      address: "Domaine Al Nagr, Sousse, Tunisie",
      phone: "+216 58 737 106",
      hours: "Lundi - Samedi : 8h00 - 17h00",
      description:
        "Flânez entre des terrasses centenaires où naît chaque goutte de notre huile ultra-premium — feuille, terre et soleil avant même l'assiette.",
      image: "/olive-grove-story.png",
      mapUrl: "https://maps.app.goo.gl/hK9NeK1Soa9NpNtQ8?g_st=afm",
      features: [],
    },
    {
      id: 2,
      name: "Salle de dégustation",
      type: "Dégustation guidée",
      address: "Avenue Habib Bourguiba, Tunis 1000, Tunisie",
      phone: "+216 58 737 106",
      hours: "Mardi - Dimanche : 10h00 - 19h00",
      description:
        "Ouverture prochaine à Tunis — dégustations guidées sur rendez-vous. Inscrivez votre intérêt ; nous vous confirmerons les dates.",
      image: "/tasting room.png",
      mapUrl: null,
      features: [],
    },
    {
      id: 3,
      name: "Sélections d'exception",
      type: "Boutique",
      address: "Al Saad, près de l'école Tariq Ibn Ziyad, Doha",
      phone: "+974 33551131",
      hours: "Tous les jours : 9h00 - 20h00",
      description:
        "Doha — une adresse discrète, annoncée prochainement. Écrivez-nous pour être averti dès que les bouteilles seront disponibles.",
      image: "",
      mapUrl: null,
      features: [],
    },
  ]

  const locations = language === "ar" ? locationsAr : language === "fr" ? locationsFr : locationsEn

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--sage-olive)]/30 via-[var(--matte-black)] to-[var(--blush-clay)]/20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold text-[var(--antique-gold)] mb-6 text-balance">{t("locations.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t("locations.subtitle")}</p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 ${alignedCardGridClass}`}>
            {locations.map((location) => {
              const visitLabel = t("locations.visit-us")
              const ctaLabel = visitLabel
              const ctaClassName =
                "inline-flex h-9 items-center justify-center rounded-md bg-[var(--antique-gold)] px-3 text-sm font-medium text-[var(--matte-black)] hover:bg-[var(--antique-gold)]/90 transition-colors"

              const card = (
                <Card className={alignedCardShellClass}>
                  <AlignedCardMedia src={location.image || null} alt={location.name} />

                  <CardHeader className="flex flex-shrink-0 flex-col">
                    <AlignedCardTitleSlot>
                      <CardTitle className="text-xl leading-snug line-clamp-2">{location.name}</CardTitle>
                    </AlignedCardTitleSlot>
                    <AlignedCardDescriptionSlot>
                      <p className="font-display text-sm leading-snug text-muted-foreground line-clamp-4">
                        {location.description}
                      </p>
                    </AlignedCardDescriptionSlot>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-1 flex-grow">
                    <div className="flex justify-center pt-4 mt-auto">
                      <span className={ctaClassName}>
                        <MapPin className="w-4 h-4 mr-1 shrink-0" aria-hidden />
                        {ctaLabel}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )

              if (location.mapUrl) {
                return (
                  <a
                    key={location.id}
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--antique-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label={`${location.name} — ${ctaLabel}`}
                  >
                    {card}
                  </a>
                )
              }

              return (
                <Link
                  key={location.id}
                  href="/contact"
                  className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--antique-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={`${location.name} — ${ctaLabel}`}
                >
                  {card}
                </Link>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
