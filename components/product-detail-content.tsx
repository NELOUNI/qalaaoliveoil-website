"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Calendar, Award } from "lucide-react"
import { ProductImageGallery } from "@/components/product-image-gallery"
import { LabCertification } from "@/components/lab-certification"
import { ProductDescriptionWithTooltips } from "@/components/product-description-with-tooltips"

interface Product {
  id: string
  name_en: string
  name_ar?: string
  description_en: string
  description_ar?: string
  origin_story_en?: string
  origin_story_ar?: string
  price: number
  volume_ml: number
  region_en: string
  region_ar?: string
  acidity_level: number
  image_url?: string
}

interface ProductDetailContentProps {
  product: Product
}

export function ProductDetailContent({ product }: ProductDetailContentProps) {
  const { t, language } = useLanguage()

  const name = language === "ar" && product.name_ar ? product.name_ar : product.name_en
  const description = language === "ar" && product.description_ar ? product.description_ar : product.description_en
  const originStory = language === "ar" && product.origin_story_ar ? product.origin_story_ar : product.origin_story_en
  const region = language === "ar" && product.region_ar ? product.region_ar : product.region_en

  return (
    <div className="min-h-screen bg-[var(--matte-black)]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <ProductImageGallery images={[product.image_url]} />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-[var(--antique-gold)] mb-2">{name}</h1>
              <p className="text-xl text-[var(--antique-gold)]/80 mb-4">
                <ProductDescriptionWithTooltips text={description} />
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--antique-gold)] text-[var(--antique-gold)]" />
                  ))}
                </div>
              </div>

              <div className="text-3xl font-bold text-[var(--antique-gold)] mb-6">
                <span className="latin-numerals" lang="en" dir="ltr">${product.price}</span>
                <span className="text-lg font-normal text-[var(--antique-gold)]/80 ml-2">{t("product.per-bottle")}</span>
              </div>
            </div>

            {/* Origin Story */}
            <div className="bg-[var(--matte-black)]/80 p-6 rounded-lg border border-[var(--antique-gold)]/30">
              <h3 className="text-xl font-semibold mb-3 flex items-center text-[var(--antique-gold)]">
                <MapPin className="w-5 h-5 mr-2 text-[var(--antique-gold)]" />
                {t("product.origin-story")}
              </h3>
              <p className="text-[var(--antique-gold)]/90 leading-relaxed">
                {originStory}
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-[var(--antique-gold)]/80">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {t("product.harvest")}: <span className="latin-numerals ms-1" lang="en" dir="ltr">{t("product.november-2025")}</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  {t("product.gold-medal")}
                </div>
              </div>
            </div>

            {/* Know More — scrolls to lab certification sections */}
            <Button size="lg" className="w-full bg-[var(--antique-gold)] hover:bg-[var(--antique-gold)]/90 text-[var(--matte-black)]" asChild>
              <a href="#certified">
                {t("product.know-more")}
              </a>
            </Button>

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div>
                <h4 className="font-semibold text-[var(--antique-gold)]">{t("product.acidity-level")}</h4>
                <p className="text-[var(--antique-gold)]/80">
                  <span className="latin-numerals" lang="en" dir="ltr">
                    {Number(product.acidity_level).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                  </span>
                  {" "}- {t("product.extra-virgin")}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--antique-gold)]">{t("product.volume")}</h4>
                <p className="text-[var(--antique-gold)]/80">
                  <span className="latin-numerals" lang="en" dir="ltr">{product.volume_ml}</span>ml
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--antique-gold)]">{t("product.harvest-method")}</h4>
                <p className="text-[var(--antique-gold)]/80">{t("product.cold-pressed")}</p>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--antique-gold)]">{t("product.region")}</h4>
                <p className="text-[var(--antique-gold)]/80">{region}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lab Certification Sections — from Know More */}
        <LabCertification />
      </div>
    </div>
  )
}
