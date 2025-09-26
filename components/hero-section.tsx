"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/tunisian-olive-grove-hero.webp"
          alt="Ancient Tunisian olive groves at golden hour showcasing centuries of olive cultivation heritage - Premium Qalaa olive oil production"
          fill
          className="object-cover opacity-80"
          priority
          quality={85}
          sizes="100vw"
          title="Qalaa Premium Olive Oil - Ancient Tunisian Heritage"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white/20" />
      </div>

      <header className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-stone-900 mb-6 text-balance"
            style={{ fontFamily: "Trajan Pro, serif" }}
          >
            <span className="block text-yellow-600 mt-2 font-bold">Qalaa</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-stone-800 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed font-medium drop-shadow-sm"
            style={{ fontFamily: "Athelas, serif" }}
          >
            {t("brand.tagline")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products" aria-label="Explore Qalaa premium olive oil products">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg font-bold">
                Our Collection
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              className="border-yellow-600 bg-yellow-600/90 text-white hover:bg-yellow-700 px-8 py-4 text-lg font-bold backdrop-blur-sm"
              aria-label="Watch Qalaa brand story video"
            >
              <Play className="mr-2 w-5 h-5" aria-hidden="true" />
              Our Story
            </Button>
          </div>
        </div>
      </header>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-yellow-600/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
