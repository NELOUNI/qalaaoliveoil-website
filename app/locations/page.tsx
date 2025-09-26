"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Phone, Calendar } from "lucide-react"
import Image from "next/image"

export default function LocationsPage() {
  const { t } = useLanguage()

  const locations = [
    {
      id: 1,
      name: t("locations.main-grove"),
      type: "Olive Grove & Production",
      address: "Route de Tunis, Sfax 3000, Tunisia",
      phone: "+216 74 123 456",
      hours: "Monday - Saturday: 8:00 AM - 5:00 PM",
      description:
        "Visit our historic olive groves where our family has been producing premium olive oil for over 200 years.",
      image: "/ancient-tunisian-olive-grove-with-traditional-ston.jpg",
      features: ["Guided Tours", "Oil Tasting", "Production Viewing", "Gift Shop"],
    },
    {
      id: 2,
      name: t("locations.tasting-room"),
      type: "Tasting Room",
      address: "Avenue Habib Bourguiba, Tunis 1000, Tunisia",
      phone: "+216 71 987 654",
      hours: "Tuesday - Sunday: 10:00 AM - 7:00 PM",
      description: "Experience our premium olive oils through guided tastings in the heart of Tunis.",
      image: "/elegant-olive-oil-tasting-room.jpg",
      features: ["Professional Tastings", "Educational Sessions", "Premium Selection", "Corporate Events"],
    },
    {
      id: 3,
      name: t("locations.retail-store"),
      type: "Retail Store",
      address: "Sousse Medina, Sousse 4000, Tunisia",
      phone: "+216 73 456 789",
      hours: "Daily: 9:00 AM - 8:00 PM",
      description: "Our flagship retail location offering the complete range of Zaytouna olive oils and gift sets.",
      image: "/premium-olive-oil-retail-store.jpg",
      features: ["Full Product Range", "Gift Wrapping", "Shipping Services", "Expert Advice"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6 text-balance">{t("locations.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">{t("locations.subtitle")}</p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Card key={location.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-video bg-gradient-to-br from-amber-100 to-amber-200">
                  <Image src={location.image || "/placeholder.svg"} alt={location.name} fill className="object-cover" />
                  <Badge className="absolute top-4 left-4 bg-amber-600 text-white">{location.type}</Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{location.name}</CardTitle>
                  <p className="text-gray-600 text-sm">{location.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Contact Info */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{location.hours}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Available Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1 bg-amber-600 hover:bg-amber-700">
                      <MapPin className="w-4 h-4 mr-1" />
                      {t("locations.visit-us")}
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Calendar className="w-4 h-4 mr-1" />
                      {t("locations.book-tour")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
