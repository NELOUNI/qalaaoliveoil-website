"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

type Lang = "en" | "ar" | "fr"

export function GiftingHero({ language }: { language: Lang }) {
  const content =
    language === "ar"
      ? { title: "هدايا", subtitle: "تُقدَّم.", cta: "اصنع هديتك", alt: "قلعة في علبة الإهداء" }
      : language === "fr"
        ? { title: "Cadeaux", subtitle: "À offrir.", cta: "Composer un cadeau", alt: "Qalaa dans son coffret" }
        : { title: "Luxury Olive Oil Gifts", subtitle: "To be offered.", cta: "Compose a Gift", alt: "Qalaa in the gift box" }

  return (
    <section className="relative px-4 py-16 text-center md:py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 font-serif text-5xl font-bold text-foreground text-balance">{content.title}</h1>
        <p className="mb-10 text-lg text-muted-foreground">{content.subtitle}</p>
        <div className="relative mx-auto mb-10 overflow-hidden rounded-sm">
          <Image
            src="/images/lifestyle/qalaa-packaged.png"
            alt={content.alt}
            width={1600}
            height={1067}
            className="h-auto w-full"
            priority
          />
        </div>
        <Button
          size="lg"
          className="bg-primary px-8 py-3 text-lg text-primary-foreground hover:bg-primary/90"
          onClick={() => document.getElementById("configurator")?.scrollIntoView({ behavior: "smooth" })}
        >
          {content.cta}
        </Button>
      </div>
    </section>
  )
}
