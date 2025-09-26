"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, MapPin, Users } from "lucide-react"
import Link from "next/link"

export function StoryPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gradient-olive-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 text-balance">
                Eight Centuries of
                <span className="text-amber-700"> Liquid Gold</span>
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed text-pretty">
                Our story begins in the 13th century, when the first olive trees were planted in the fertile soils of
                Tunisia. Through generations of dedicated farmers and master craftsmen, we've preserved the ancient art
                of olive oil production while embracing modern quality standards.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div className="text-2xl font-bold text-stone-900">800+</div>
                <div className="text-sm text-stone-600">Years Heritage</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div className="text-2xl font-bold text-stone-900">12</div>
                <div className="text-sm text-stone-600">Regions</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-amber-600" />
                </div>
                <div className="text-2xl font-bold text-stone-900">50+</div>
                <div className="text-sm text-stone-600">Families</div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-stone-600 leading-relaxed">
                Every bottle of Zaytouna olive oil carries the essence of Tunisia's Mediterranean climate, the wisdom of
                traditional methods, and the passion of families who have dedicated their lives to perfecting this
                ancient craft.
              </p>

              <Link href="/story">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Discover Our Heritage
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/ancient-tunisian-olive-grove-with-traditional-ston.jpg"
                alt="Traditional olive oil production"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <div className="font-semibold text-stone-900">Award Winning</div>
                  <div className="text-sm text-stone-600">International Recognition</div>
                </div>
              </div>
              <p className="text-sm text-stone-600">
                Our oils have won over 25 international awards for quality and taste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
