"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import {
  AlignedCardDescriptionSlot,
  AlignedCardTitleSlot,
  alignedCardShellClass,
  alignedProductMediaClass,
} from "@/components/aligned-card-primitives"
import { pickLocalizedNotes, pickLocalizedString } from "@/lib/i18n/pick-locale"

interface Product {
  id: string
  name_en: string
  name_ar: string
  name_fr?: string
  description_en: string
  description_ar: string
  description_fr?: string
  price: number
  volume_ml: number
  region_en: string
  region_ar: string
  region_fr?: string
  acidity_level: number
  tasting_notes_en: string[]
  tasting_notes_ar: string[]
  tasting_notes_fr?: string[]
  image_url?: string
  is_premium: boolean
  stock_quantity: number
}

interface ProductsGridProps {
  products: Product[]
}

export function ProductsGrid({ products }: ProductsGridProps) {
  const { language, t } = useLanguage()
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🫒</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{t("product.no-products")}</h3>
        <p className="text-muted-foreground">{t("product.no-products-hint")}</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Products Grid - centered */}
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => {
          const productName = pickLocalizedString(language, product.name_en, product.name_ar, product.name_fr)
          const tastingNotes = pickLocalizedNotes(language, {
            en: product.tasting_notes_en,
            ar: product.tasting_notes_ar,
            fr: product.tasting_notes_fr,
          })
          return (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="block w-full max-w-sm md:max-w-[400px] xl:max-w-[380px] rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--antique-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`${productName} — ${t("product.know-more")}`}
            >
              <Card className={`group ${alignedCardShellClass} hover:shadow-xl transition-all duration-300 border-border bg-card cursor-pointer`}>
                <div className={alignedProductMediaClass}>
                  <Image
                    src={product.image_url || "/placeholder.svg"}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 400px, 380px"
                    className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-300"
                  />

                  <div className="absolute top-3 left-3 flex flex-col gap-2 pointer-events-none">
                    {product.stock_quantity < 10 && product.stock_quantity > 0 && (
                      <Badge variant="destructive">{t("product.low-stock")}</Badge>
                    )}
                    {product.stock_quantity === 0 && <Badge variant="secondary">{t("product.out-of-stock")}</Badge>}
                  </div>
                </div>

                <CardContent className="flex flex-1 flex-col p-6">
                  <AlignedCardTitleSlot className="mb-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-1 line-clamp-2 leading-snug">
                      {productName}
                    </h3>
                    <p className="min-h-[1.25rem] text-sm text-muted-foreground">
                      {pickLocalizedString(language, product.region_en, product.region_ar, product.region_fr)} •{" "}
                      <span className="latin-numerals" lang="en" dir="ltr">
                        {product.volume_ml}
                      </span>
                      ml
                    </p>
                  </AlignedCardTitleSlot>

                  <AlignedCardDescriptionSlot className="mb-4 min-h-[2.75rem]">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {pickLocalizedString(language, product.description_en, product.description_ar, product.description_fr)}
                    </p>
                  </AlignedCardDescriptionSlot>

                  {tastingNotes.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {tastingNotes.slice(0, 3).map((note, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {note}
                            </Badge>
                          ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{t("product.acidity")}</span>
                      <span className="font-medium latin-numerals" lang="en" dir="ltr">
                        {Number(product.acidity_level).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5 mt-1">
                      <div
                        className="bg-primary h-1.5 rounded-full"
                        style={{ width: `${(product.acidity_level / 0.8) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="text-2xl font-bold text-[var(--antique-gold)] font-numeric latin-numerals" lang="en" dir="ltr">
                      ${product.price}
                    </div>
                    <span className="inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-[var(--antique-gold)] px-3 text-sm font-medium text-[var(--matte-black)]">
                      {t("product.know-more")}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
