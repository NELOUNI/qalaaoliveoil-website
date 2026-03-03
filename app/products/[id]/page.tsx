import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getProductById, products } from "@/lib/products"
import { ProductDetailContent } from "@/components/product-detail-content"

interface ProductPageProps {
  params: { id: string }
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductById(params.id)
  if (!product) return { title: "Product Not Found | Qalaa" }
  return {
    title: `${product.name_en} | Qalaa Premium Olive Oil`,
    description: `${product.description_en} — ${product.volume_ml}ml, harvested from ${product.region_en}, Tunisia. Extra Virgin, acidity ${product.acidity_level}.`,
    openGraph: {
      title: `${product.name_en} | Qalaa`,
      description: product.description_en,
      images: [{ url: product.image_url ?? "/qalaa-logo.png", width: 800, height: 800 }],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return <ProductDetailContent product={product} />
}
