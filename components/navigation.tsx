"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { AuthButton } from "./auth-button"

const navigationItems = [
  { key: "nav.our-story", href: "/story" },
  { key: "nav.contact-us", href: "/contact" },
  { key: "nav.faq", href: "/faq" },
]

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/qalaa-logo.svg" alt="Qalaa Logo" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-yellow-600 leading-none tracking-wide text-center">
                {t("brand.name")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Our Olive Oil Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium text-stone-700 hover:text-yellow-600 transition-colors duration-200 tracking-wide whitespace-nowrap">
                  {t("nav.our-olive-oil")}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white border-stone-200">
                <DropdownMenuItem asChild>
                  <Link href="/products" className="text-stone-700 hover:text-yellow-600">
                    {t("nav.our-olive-oil")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/locations" className="text-stone-700 hover:text-yellow-600">
                    {t("nav.our-locations")}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Gifting Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium text-stone-700 hover:text-yellow-600 transition-colors duration-200 tracking-wide whitespace-nowrap">
                  {t("nav.gifting")}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white border-stone-200">
                <DropdownMenuItem asChild>
                  <Link href="/gifting" className="text-stone-700 hover:text-yellow-600">
                    {t("nav.gifting")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wholesale" className="text-stone-700 hover:text-yellow-600">
                    {t("nav.wholesale")}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Learn Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium text-stone-700 hover:text-yellow-600 transition-colors duration-200 tracking-wide whitespace-nowrap">
                  {t("nav.learn")}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white border-stone-200">
                <DropdownMenuItem asChild>
                  <Link href="/recipes" className="text-stone-700 hover:text-yellow-600">
                    {t("nav.recipes")}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Regular Navigation Items */}
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-stone-700 hover:text-yellow-600 transition-colors duration-200 tracking-wide whitespace-nowrap"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-stone-600 hover:text-yellow-600">
                  <Globe className="w-4 h-4" />
                  <span className="ml-1 text-xs font-medium uppercase">{language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white border-stone-200">
                <DropdownMenuItem onClick={() => setLanguage("en")} className="text-stone-700 hover:text-yellow-600">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("ar")} className="text-stone-700 hover:text-yellow-600">
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Future Cart Button - Currently Hidden */}
            {/* 
            <Button variant="ghost" size="sm" className="text-stone-600 hover:text-yellow-600 relative">
              <ShoppingCart className="w-4 h-4" />
              <span className="ml-1 hidden sm:inline text-sm">{t("nav.cart")}</span>
              <span className="absolute -top-1 -right-1 bg-yellow-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </Button>
            */}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-stone-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 py-4">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-sm font-medium text-stone-700 hover:text-yellow-600 transition-colors duration-200 py-2 tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
