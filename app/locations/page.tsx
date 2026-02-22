"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function LocationsPage() {
  const { t } = useLanguage()

  const locations = [
    {
      id: 1,
      name: "Main Olive Grove",
      type: "Olive Grove & Production",
      address: "Avenue 14 Janvier, 4000 Sousse, Tunisia",
      phone: "+216 58 737 106",
      hours: "Monday - Saturday: 8:00 AM - 5:00 PM",
      description:
        "Walk among century-old trees where every drop of our oil begins its journey.",
      image: "/olive-grove-story.png",
      features: [],
    },
    {
      id: 2,
      name: "Tasting Room",
      type: "Tasting Room",
      address: "Avenue Habib Bourguiba, Tunis 1000, Tunisia",
      phone: "+216 71 987 654",
      hours: "Tuesday - Sunday: 10:00 AM - 7:00 PM",
      description: "Discover the depth of our oils through an intimate, guided sensory experience in Tunis.",
      image: "/tasting room.png",
      features: [],
    },
    {
      id: 3,
      name: "Curated Selections",
      type: "Retail Store",
      address: "Al Saad , near Tarek Ibn Ziyed School, Doha",
      phone: "+974 33551131",
      hours: "Daily: 9:00 AM - 8:00 PM",
      description:
        "Found only where exceptional taste is already at home.",
      image: "",
      features: [],
    },
  ]

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
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
            {locations.map((location) => (
              <Card key={location.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                {location.image && (
                  <div className="relative aspect-video bg-gradient-to-br from-[var(--matte-black)] to-[var(--blush-clay)]">
                    <Image src={location.image} alt={location.name} fill className="object-cover" />
                  </div>
                )}

                <CardHeader className="flex-shrink-0">
                  <CardTitle className="text-xl">{location.name}</CardTitle>
                  <p className="text-muted-foreground text-sm font-display">{location.description}</p>
                </CardHeader>

                <CardContent className="flex flex-col flex-1 flex-grow">
                  {/* Visit Us - aligned to bottom across all cards */}
                  <div className="flex justify-center pt-4 mt-auto">
                    <Button size="sm" className="bg-[var(--antique-gold)] hover:bg-[var(--antique-gold)]/90 text-[var(--matte-black)]">
                      <MapPin className="w-4 h-4 mr-1" />
                      {t("locations.visit-us")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
