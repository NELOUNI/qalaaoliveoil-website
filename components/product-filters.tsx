"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"

interface Category {
  id: string
  name_en: string
  name_ar: string
  slug: string
}

interface ProductFiltersProps {
  categories: Category[]
}

export function ProductFilters({ categories }: ProductFiltersProps) {
  const { language } = useLanguage()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "")
  const [priceRange, setPriceRange] = useState([0, 200])
  const [selectedCategories, setSelectedCategories] = useState<string[]>(searchParams.get("category")?.split(",") || [])
  const [selectedRegions, setSelectedRegions] = useState<string[]>(searchParams.get("region")?.split(",") || [])

  const regions = ["Sfax", "Monastir", "Kairouan", "Sousse", "Mahdia", "Bizerte"]

  const applyFilters = () => {
    const params = new URLSearchParams()

    if (searchTerm) params.set("search", searchTerm)
    if (selectedCategories.length > 0) params.set("category", selectedCategories.join(","))
    if (selectedRegions.length > 0) params.set("region", selectedRegions.join(","))
    if (priceRange[0] > 0 || priceRange[1] < 200) {
      params.set("minPrice", priceRange[0].toString())
      params.set("maxPrice", priceRange[1].toString())
    }

    router.push(`/products?${params.toString()}`)
  }

  const clearFilters = () => {
    setSearchTerm("")
    setPriceRange([0, 200])
    setSelectedCategories([])
    setSelectedRegions([])
    router.push("/products")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{language === "en" ? "Filters" : "المرشحات"}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Input
            type="text"
            placeholder={language === "en" ? "Search..." : "بحث..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <h3 className="mb-2">{language === "en" ? "Price Range" : "نطاق السعر"}</h3>
          <Slider 
            value={priceRange} 
            onValueChange={setPriceRange} 
            min={0} 
            max={200} 
            step={1}
            className="w-full" 
          />
        </div>
        <div className="mb-4">
          <h3 className="mb-2">{language === "en" ? "Categories" : "التصنيفات"}</h3>
          {categories.map((category) => (
            <div key={category.id} className="flex items-center mb-2">
              <Checkbox
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) =>
                  setSelectedCategories((prev) =>
                    checked ? [...prev, category.id] : prev.filter((id) => id !== category.id),
                  )
                }
              />
              <span className="ml-2">{language === "en" ? category.name_en : category.name_ar}</span>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <h3 className="mb-2">{language === "en" ? "Regions" : "المناطق"}</h3>
          {regions.map((region) => (
            <div key={region} className="flex items-center mb-2">
              <Checkbox
                checked={selectedRegions.includes(region)}
                onCheckedChange={(checked) =>
                  setSelectedRegions((prev) => (checked ? [...prev, region] : prev.filter((r) => r !== region)))
                }
              />
              <span className="ml-2">{region}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <Button onClick={applyFilters}>{language === "en" ? "Apply Filters" : "تطبيق المرشحات"}</Button>
          <Button onClick={clearFilters} variant="outline">
            {language === "en" ? "Clear Filters" : "مسح المرشحات"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
