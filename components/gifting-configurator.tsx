"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Package, Plus, Minus, Gift, MessageSquare, Truck, Check } from "lucide-react"
import Image from "next/image"

type Lang = "en" | "ar"

interface GiftProduct {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

interface GiftConfiguration {
  products: GiftProduct[]
  packaging: string
  message: string
  recipientName: string
  deliveryDate: string
  deliveryAddress: string
}

const availableProducts = [
  {
    id: "1",
    name: "Gold Reserve of Qalaa",
    price: 89.99,
    image: "/QALAA%20500ml%20no%20background.png",
  },
  {
    id: "2",
    name: "Sacred Grove of Beja",
    price: 125.99,
    image: "/organic-bottle.png",
  },
]

const packagingOptions = [
  {
    id: "classic",
    name: "Classic Gift Box",
    price: 15,
    description: "Elegant wooden box with gold ribbon",
  },
  {
    id: "premium",
    name: "Premium Collection",
    price: 25,
    description: "Handcrafted olive wood box with silk lining",
  },
  {
    id: "luxury",
    name: "Luxury Heritage Set",
    price: 45,
    description: "Artisan ceramic presentation with custom engraving",
  },
]

export function GiftingConfigurator({ language }: { language: Lang }) {
  const isArabic = language === "ar"
  const [step, setStep] = useState(1)
  const [config, setConfig] = useState<GiftConfiguration>({
    products: [],
    packaging: "",
    message: "",
    recipientName: "",
    deliveryDate: "",
    deliveryAddress: "",
  })

  const addProduct = (product: (typeof availableProducts)[0]) => {
    const existing = config.products.find((p) => p.id === product.id)
    if (existing) {
      setConfig({
        ...config,
        products: config.products.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p)),
      })
    } else {
      setConfig({
        ...config,
        products: [...config.products, { ...product, quantity: 1 }],
      })
    }
  }

  const removeProduct = (productId: string) => {
    setConfig({
      ...config,
      products: config.products.filter((p) => p.id !== productId),
    })
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      removeProduct(productId)
      return
    }
    setConfig({
      ...config,
      products: config.products.map((p) => (p.id === productId ? { ...p, quantity } : p)),
    })
  }

  const getTotalPrice = () => {
    const productsTotal = config.products.reduce((sum, p) => sum + p.price * p.quantity, 0)
    const packagingPrice = packagingOptions.find((p) => p.id === config.packaging)?.price || 0
    return (productsTotal + packagingPrice).toFixed(2)
  }

  const lineTotal = (price: number, qty: number) => (price * qty).toFixed(2)

  const text = isArabic
    ? {
        heading: "نسّق هديتك المثالية",
        subtitle: "اتبع خطوات بسيطة لتجهيز هدية شخصية تُسعد من تحب",
        stepLabel: "الخطوة",
        steps: ["اختيار المنتجات", "اختيار التغليف", "إضافة رسالة", "تفاصيل التسليم", "المراجعة والطلب"],
        selectOils: "اختر زيوت الزيتون",
        addToGift: "أضف إلى الهدية",
        choosePackaging: "اختر التغليف",
        personalMessage: "رسالة شخصية",
        recipientName: "اسم المستلم",
        recipientPlaceholder: "أدخل اسم المستلم",
        giftMessage: "رسالة الهدية",
        giftMessagePlaceholder: "اكتب رسالة جميلة...",
        characters: "حرف",
        deliveryDetails: "تفاصيل التسليم",
        preferredDeliveryDate: "تاريخ التسليم المفضل",
        deliveryAddress: "عنوان التسليم",
        deliveryAddressPlaceholder: "أدخل عنوان التسليم الكامل...",
        reviewGift: "راجع هديتك",
        selectedProducts: "المنتجات المختارة",
        packaging: "التغليف",
        messageFor: "رسالة إلى",
        previous: "السابق",
        nextStep: "الخطوة التالية",
        completeOrder: "إتمام طلب الهدية",
        giftSummary: "ملخص الهدية",
        total: "الإجمالي",
        noProducts: "لم يتم اختيار منتجات بعد",
      }
    : {
        heading: "Configure Your Perfect Gift",
        subtitle: "Follow our simple steps to create a personalized gift that will delight your recipient",
        stepLabel: "Step",
        steps: ["Select Products", "Choose Packaging", "Add Message", "Delivery Details", "Review & Order"],
        selectOils: "Select Your Olive Oils",
        addToGift: "Add to Gift",
        choosePackaging: "Choose Packaging",
        personalMessage: "Personal Message",
        recipientName: "Recipient Name",
        recipientPlaceholder: "Enter recipient's name",
        giftMessage: "Gift Message",
        giftMessagePlaceholder: "Write a heartfelt message...",
        characters: "characters",
        deliveryDetails: "Delivery Details",
        preferredDeliveryDate: "Preferred Delivery Date",
        deliveryAddress: "Delivery Address",
        deliveryAddressPlaceholder: "Enter complete delivery address...",
        reviewGift: "Review Your Gift",
        selectedProducts: "Selected Products",
        packaging: "Packaging",
        messageFor: "Message for",
        previous: "Previous",
        nextStep: "Next Step",
        completeOrder: "Complete Gift Order",
        giftSummary: "Gift Summary",
        total: "Total",
        noProducts: "No products selected yet",
      }

  const localizedProducts = availableProducts.map((product) => ({
    ...product,
    name:
      isArabic && product.id === "1"
        ? "احتياطي قلعة الذهبي"
        : isArabic && product.id === "2"
          ? "غابة باجة المباركة"
          : product.name,
  }))

  const localizedPackaging = packagingOptions.map((option) => {
    if (!isArabic) return option
    if (option.id === "classic") {
      return { ...option, name: "علبة هدية كلاسيكية", description: "علبة خشبية أنيقة مع شريط ذهبي" }
    }
    if (option.id === "premium") {
      return { ...option, name: "المجموعة المميزة", description: "علبة من خشب الزيتون مبطنة بالحرير" }
    }
    return { ...option, name: "مجموعة التراث الفاخرة", description: "تقديم خزفي فاخر مع نقش مخصص" }
  })

  const steps = [
    { number: 1, title: text.steps[0], icon: Package },
    { number: 2, title: text.steps[1], icon: Gift },
    { number: 3, title: text.steps[2], icon: MessageSquare },
    { number: 4, title: text.steps[3], icon: Truck },
    { number: 5, title: text.steps[4], icon: Check },
  ]

  return (
    <section id="configurator" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">{text.heading}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4 overflow-x-auto pb-4">
            {steps.map((stepItem, index) => {
              const Icon = stepItem.icon
              const isActive = step === stepItem.number
              const isCompleted = step > stepItem.number

              return (
                <div key={stepItem.number} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors ${
                      isCompleted
                        ? "bg-green-500 border-green-500 text-white"
                        : isActive
                          ? "bg-primary border-primary text-primary-foreground"
                          : "border-gray-300 text-gray-400"
                    }`}
                  >
                    {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p className={`text-sm font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                      {text.stepLabel} {stepItem.number}
                    </p>
                    <p className={`text-xs ${isActive ? "text-foreground" : "text-muted-foreground"}`}>{stepItem.title}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 mx-4 ${step > stepItem.number ? "bg-green-500" : "bg-gray-300"}`} />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                {/* Step 1: Select Products */}
                {step === 1 && (
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">{text.selectOils}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {localizedProducts.map((product) => (
                        <div key={product.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="aspect-square bg-gradient-to-br from-[var(--matte-black)] to-[var(--blush-clay)] rounded-lg mb-4 relative overflow-hidden flex items-center justify-center">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-contain object-center"
                            />
                          </div>
                          <h4 className="font-semibold text-foreground mb-2">{product.name}</h4>
                          <p className="text-lg font-bold text-primary mb-3 font-numeric latin-numerals" lang="en" dir="ltr">${product.price}</p>
                          <Button
                            onClick={() => addProduct(product)}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            {text.addToGift}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Choose Packaging */}
                {step === 2 && (
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">{text.choosePackaging}</h3>
                    <div className="space-y-4">
                      {localizedPackaging.map((option) => (
                        <div
                          key={option.id}
                          className={`border rounded-lg p-6 cursor-pointer transition-all ${
                            config.packaging === option.id
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                          onClick={() => setConfig({ ...config, packaging: option.id })}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">{option.name}</h4>
                              <p className="text-muted-foreground mb-2">{option.description}</p>
                              <Badge variant="secondary" className="font-numeric latin-numerals" lang="en" dir="ltr">+${option.price}</Badge>
                            </div>
                            {config.packaging === option.id && <Check className="w-6 h-6 text-primary" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Add Message */}
                {step === 3 && (
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">{text.personalMessage}</h3>
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="recipient">{text.recipientName}</Label>
                        <Input
                          id="recipient"
                          value={config.recipientName}
                          onChange={(e) => setConfig({ ...config, recipientName: e.target.value })}
                          placeholder={text.recipientPlaceholder}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">{text.giftMessage}</Label>
                        <Textarea
                          id="message"
                          value={config.message}
                          onChange={(e) => setConfig({ ...config, message: e.target.value })}
                          placeholder={text.giftMessagePlaceholder}
                          className="mt-2 min-h-32"
                          maxLength={200}
                        />
                        <p className="text-sm text-gray-500 mt-2">{config.message.length}/200 {text.characters}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Delivery Details */}
                {step === 4 && (
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">{text.deliveryDetails}</h3>
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="delivery-date">{text.preferredDeliveryDate}</Label>
                        <Input
                          id="delivery-date"
                          type="date"
                          value={config.deliveryDate}
                          onChange={(e) => setConfig({ ...config, deliveryDate: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="address">{text.deliveryAddress}</Label>
                        <Textarea
                          id="address"
                          value={config.deliveryAddress}
                          onChange={(e) => setConfig({ ...config, deliveryAddress: e.target.value })}
                          placeholder={text.deliveryAddressPlaceholder}
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Review */}
                {step === 5 && (
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">{text.reviewGift}</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">{text.selectedProducts}</h4>
                        {config.products.map((product) => (
                          <div key={product.id} className="flex justify-between items-center py-2">
                            <span>
                              {product.name} x{product.quantity}
                            </span>
                            <span className="font-numeric latin-numerals" lang="en" dir="ltr">${lineTotal(product.price, product.quantity)}</span>
                          </div>
                        ))}
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-semibold mb-2">{text.packaging}</h4>
                        <p>{localizedPackaging.find((p) => p.id === config.packaging)?.name}</p>
                      </div>

                      {config.message && (
                        <>
                          <Separator />
                          <div>
                            <h4 className="font-semibold mb-2">{text.messageFor} {config.recipientName}</h4>
                            <p className="text-muted-foreground italic">"{config.message}"</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Button variant="outline" onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}>
                    {text.previous}
                  </Button>

                  {step < 5 ? (
                    <Button
                      onClick={() => setStep(Math.min(5, step + 1))}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={(step === 1 && config.products.length === 0) || (step === 2 && !config.packaging)}
                    >
                      {text.nextStep}
                    </Button>
                  ) : (
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Check className="w-4 h-4 mr-2" />
                      {text.completeOrder}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-primary" />
                  {text.giftSummary}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {config.products.length > 0 ? (
                    <>
                      {config.products.map((product) => (
                        <div key={product.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-[var(--matte-black)] to-[var(--blush-clay)] rounded relative overflow-hidden flex items-center justify-center">
                              <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                fill
                                className="object-contain object-center"
                              />
                            </div>
                            <div>
                              <p className="font-medium text-sm">{product.name}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => updateQuantity(product.id, product.quantity - 1)}
                                  className="w-6 h-6 p-0"
                                >
                                  <Minus className="w-3 h-3" />
                                </Button>
                                <span className="text-sm">{product.quantity}</span>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => updateQuantity(product.id, product.quantity + 1)}
                                  className="w-6 h-6 p-0"
                                >
                                  <Plus className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium font-numeric latin-numerals" lang="en" dir="ltr">${lineTotal(product.price, product.quantity)}</p>
                          </div>
                        </div>
                      ))}

                      {config.packaging && (
                        <>
                          <Separator />
                          <div className="flex justify-between">
                            <span>{text.packaging}</span>
                            <span className="font-numeric latin-numerals" lang="en" dir="ltr">${localizedPackaging.find((p) => p.id === config.packaging)?.price}</span>
                          </div>
                        </>
                      )}

                      <Separator />
                      <div className="flex justify-between font-bold text-lg">
                        <span>{text.total}</span>
                        <span className="text-primary font-numeric latin-numerals" lang="en" dir="ltr">${getTotalPrice()}</span>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-500 text-center py-8">{text.noProducts}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
