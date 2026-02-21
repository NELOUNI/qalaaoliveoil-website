import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Users, FileText, Headphones, Calendar, Globe } from "lucide-react"

const corporateServices = [
  {
    icon: Building2,
    title: "Custom Branding",
    description: "Add your company logo and branding to packaging and bottles",
    features: ["Logo placement", "Custom labels", "Branded gift boxes", "Corporate colors"],
  },
  {
    icon: Users,
    title: "Account Management",
    description: "Dedicated account manager for enterprise clients",
    features: ["Personal contact", "Order planning", "Inventory management", "Quarterly reviews"],
  },
  {
    icon: FileText,
    title: "Flexible Invoicing",
    description: "Corporate billing options and payment terms",
    features: ["Net 30/60 terms", "Purchase orders", "Bulk invoicing", "Tax exemptions"],
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "24/7 support for corporate accounts",
    features: ["Dedicated hotline", "Priority response", "Order tracking", "Issue resolution"],
  },
  {
    icon: Calendar,
    title: "Scheduled Delivery",
    description: "Plan deliveries for events and corporate gifts",
    features: ["Event planning", "Multiple locations", "Timed delivery", "Holiday scheduling"],
  },
  {
    icon: Globe,
    title: "International Shipping",
    description: "Worldwide delivery for global corporations",
    features: ["Customs handling", "International rates", "Tracking", "Documentation"],
  },
]

export function CorporateFeatures() {
  return (
    <section className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Corporate Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive solutions for businesses, from small companies to Fortune 500 enterprises
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {corporateServices.map((service, index) => {
          const Icon = service.icon
          return (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Partner With Us?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of companies who trust us for their corporate gifting and bulk olive oil needs. Our team is
            ready to create a custom solution for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Request Corporate Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-700 hover:bg-amber-50 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
