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

export function GiftingConfigurator() {
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
    return productsTotal + packagingPrice
  }

  const steps = [
    { number: 1, title: "Select Products", icon: Package },
    { number: 2, title: "Choose Packaging", icon: Gift },
    { number: 3, title: "Add Message", icon: MessageSquare },
    { number: 4, title: "Delivery Details", icon: Truck },
    { number: 5, title: "Review & Order", icon: Check },
  ]

  return (
    <section id="configurator" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Configure Your Perfect Gift</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow our simple steps to create a personalized gift that will delight your recipient
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
                      Step {stepItem.number}
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
                    <h3 className="text-2xl font-semibold mb-6">Select Your Olive Oils</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {availableProducts.map((product) => (
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
                          <p className="text-lg font-bold text-primary mb-3 font-numeric">${product.price}</p>
                          <Button
                            onClick={() => addProduct(product)}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Add to Gift
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Choose Packaging */}
                {step === 2 && (
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Choose Packaging</h3>
                    <div className="space-y-4">
                      {packagingOptions.map((option) => (
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
                              <Badge variant="secondary" className="font-numeric">+${option.price}</Badge>
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
                    <h3 className="text-2xl font-semibold mb-6">Personal Message</h3>
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="recipient">Recipient Name</Label>
                        <Input
                          id="recipient"
                          value={config.recipientName}
                          onChange={(e) => setConfig({ ...config, recipientName: e.target.value })}
                          placeholder="Enter recipient's name"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Gift Message</Label>
                        <Textarea
                          id="message"
                          value={config.message}
                          onChange={(e) => setConfig({ ...config, message: e.target.value })}
                          placeholder="Write a heartfelt message..."
                          className="mt-2 min-h-32"
                          maxLength={200}
                        />
                        <p className="text-sm text-gray-500 mt-2">{config.message.length}/200 characters</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Delivery Details */}
                {step === 4 && (
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Delivery Details</h3>
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="delivery-date">Preferred Delivery Date</Label>
                        <Input
                          id="delivery-date"
                          type="date"
                          value={config.deliveryDate}
                          onChange={(e) => setConfig({ ...config, deliveryDate: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="address">Delivery Address</Label>
                        <Textarea
                          id="address"
                          value={config.deliveryAddress}
                          onChange={(e) => setConfig({ ...config, deliveryAddress: e.target.value })}
                          placeholder="Enter complete delivery address..."
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Review */}
                {step === 5 && (
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Review Your Gift</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Selected Products</h4>
                        {config.products.map((product) => (
                          <div key={product.id} className="flex justify-between items-center py-2">
                            <span>
                              {product.name} x{product.quantity}
                            </span>
                            <span className="font-numeric">${product.price * product.quantity}</span>
                          </div>
                        ))}
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-semibold mb-2">Packaging</h4>
                        <p>{packagingOptions.find((p) => p.id === config.packaging)?.name}</p>
                      </div>

                      {config.message && (
                        <>
                          <Separator />
                          <div>
                            <h4 className="font-semibold mb-2">Message for {config.recipientName}</h4>
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
                    Previous
                  </Button>

                  {step < 5 ? (
                    <Button
                      onClick={() => setStep(Math.min(5, step + 1))}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={(step === 1 && config.products.length === 0) || (step === 2 && !config.packaging)}
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Check className="w-4 h-4 mr-2" />
                      Complete Gift Order
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
                  Gift Summary
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
                            <p className="font-medium font-numeric">${product.price * product.quantity}</p>
                          </div>
                        </div>
                      ))}

                      {config.packaging && (
                        <>
                          <Separator />
                          <div className="flex justify-between">
                            <span>Packaging</span>
                            <span className="font-numeric">${packagingOptions.find((p) => p.id === config.packaging)?.price}</span>
                          </div>
                        </>
                      )}

                      <Separator />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-primary font-numeric">${getTotalPrice()}</span>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-500 text-center py-8">No products selected yet</p>
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
