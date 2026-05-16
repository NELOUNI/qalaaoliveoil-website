"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"

const HERO_LOGO_SRC = "/Qalaa_LOGO_1-Gold.svg"

const HERO_VIDEO_SRC = "/hero-video.mp4"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
          poster="/tunisian-olive-grove-hero.webp"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/55 to-black/25" aria-hidden />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 max-w-4xl mx-auto pt-20 pb-24">
        <Link
          href="/"
          className="mb-6 sm:mb-8 block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--antique-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          aria-label="Qalaa — home"
        >
          <Image
            src={HERO_LOGO_SRC}
            alt=""
            width={360}
            height={128}
            priority
            className="h-auto w-48 sm:w-60 md:w-80 object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          />
        </Link>
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[var(--antique-gold)]/95 mb-5 font-medium">
          {t("brand.tagline")}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--soft-sand)] mb-6 text-balance leading-tight">
          {t("home.hero.title")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[var(--soft-sand)]/85 max-w-2xl mb-10 text-pretty leading-relaxed">
          {t("home.hero.subtitle")}
        </p>
        <Button
          asChild
          size="lg"
          className="bg-[var(--antique-gold)] hover:bg-[var(--antique-gold)]/90 text-[var(--matte-black)] font-semibold px-8"
        >
          <Link href="/products">{t("home.hero.cta")}</Link>
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-[var(--antique-gold)]/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[var(--antique-gold)] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
