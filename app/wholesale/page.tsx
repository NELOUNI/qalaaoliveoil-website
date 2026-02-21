import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Download, FileText, Building, Users, Phone } from "lucide-react"
import Link from "next/link"

export default async function WholesalePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--antique-gold)]/10 via-[var(--matte-black)] to-[var(--blush-clay)]/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[var(--antique-gold)] mb-4">Wholesale Portal</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium olive oil solutions for restaurants and businesses
          </p>
        </div>

        {/* Main Content with Background */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--antique-gold)]/20 to-[var(--sage-olive)]/20 rounded-3xl"></div>
          <div
            className="relative bg-cover bg-center rounded-3xl p-16 text-center"
            style={{
              backgroundImage: `url('/olive-oil-5l-tin-background.jpg')`,
            }}
          >
            <div className="backdrop-blur-sm bg-[var(--matte-black)]/90 rounded-2xl p-8 border border-[var(--antique-gold)]/20">
              <h2 className="text-3xl font-bold text-[var(--antique-gold)] mb-4">For any Wholesale Inquiry</h2>
              <p className="text-xl text-[var(--antique-gold)]/90 mb-8 max-w-2xl mx-auto">
                Get premium pricing on bulk orders of our exceptional Olive Oil
              </p>
              <Button
                size="lg"
                className="bg-[var(--antique-gold)] text-[var(--matte-black)] hover:bg-[var(--antique-gold)]/90 font-semibold px-8 py-3"
                asChild
              >
                <Link href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[var(--matte-black)] border-[var(--antique-gold)]/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-[var(--antique-gold)]">Quick Actions</CardTitle>
              <p className="text-muted-foreground">Everything you need for wholesale orders</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button className="h-20 flex-col gap-2 bg-[var(--antique-gold)] hover:bg-[var(--antique-gold)]/90 text-[var(--matte-black)]" asChild>
                  <Link href="/products">
                    <ShoppingCart className="w-6 h-6" />
                    Browse Products
                  </Link>
                </Button>

                <Button className="h-20 flex-col gap-2 bg-[var(--antique-gold)] hover:bg-[var(--antique-gold)]/90 text-[var(--matte-black)]" asChild>
                  <Link href="/wholesale/bulk-orders">
                    <Building className="w-6 h-6" />
                    Bulk Orders
                  </Link>
                </Button>

                <Button className="h-20 flex-col gap-2 bg-[var(--antique-gold)] hover:bg-[var(--antique-gold)]/90 text-[var(--matte-black)]">
                  <Download className="w-6 h-6" />
                  Download Catalog
                </Button>

                <Button className="h-20 flex-col gap-2 bg-[var(--antique-gold)] hover:bg-[var(--antique-gold)]/90 text-[var(--matte-black)]">
                  <FileText className="w-6 h-6" />
                  Request Quote
                </Button>

                <Button className="h-20 flex-col gap-2 bg-[var(--antique-gold)] hover:bg-[var(--antique-gold)]/90 text-[var(--matte-black)]">
                  <Users className="w-6 h-6" />
                  Account Manager
                </Button>

                <Button className="h-20 flex-col gap-2 bg-[var(--antique-gold)] hover:bg-[var(--antique-gold)]/90 text-[var(--matte-black)]" asChild>
                  <Link href="/contact">
                    <Phone className="w-6 h-6" />
                    Contact Support
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
