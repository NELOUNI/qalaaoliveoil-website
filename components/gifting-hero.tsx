"use client"

import { Gift, Package, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GiftingHero() {
  return (
    <section className="relative py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Gift className="w-16 h-16 text-primary" />
            <Sparkles className="w-6 h-6 text-yellow-500 absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>

        <h1 className="text-5xl font-serif font-bold text-foreground mb-6 text-balance">Luxury Olive Oil Gifts</h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Create the perfect gift with our premium Tunisian olive oils. Each gift is carefully curated and beautifully
          packaged to celebrate life's special moments.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-gray-700">
            <Package className="w-5 h-5 text-primary" />
            <span>Handcrafted Packaging</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Gift className="w-5 h-5 text-primary" />
            <span>Personal Messages</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <span>Premium Presentation</span>
          </div>
        </div>

        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
          onClick={() => document.getElementById("configurator")?.scrollIntoView({ behavior: "smooth" })}
        >
          Create Your Gift
        </Button>
      </div>
    </section>
  )
}
