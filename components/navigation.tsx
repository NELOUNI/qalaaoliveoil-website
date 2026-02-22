"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { AuthButton } from "./auth-button"

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[var(--matte-black)]/95 backdrop-blur-sm font-sans border-t border-[var(--antique-gold)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Desktop: Dropdowns on left — vertically centered */}
          <div className="hidden lg:flex items-center justify-center gap-6 flex-1 h-full">
              {/* Our Olive Oil Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm font-medium text-foreground tracking-wide whitespace-nowrap hover:bg-[var(--soft-sand)] hover:text-[var(--matte-black)]">
                    {t("nav.our-olive-oil")}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-[var(--soft-sand)] border-[var(--antique-gold)]/20 text-[var(--matte-black)] [&_[data-highlighted]]:bg-[var(--antique-gold)]/10 [&_[data-highlighted]]:text-[var(--matte-black)]">
                  <DropdownMenuItem asChild className="focus:!bg-[var(--antique-gold)]/10 focus:!text-[var(--matte-black)] data-[highlighted]:!bg-[var(--antique-gold)]/10 data-[highlighted]:!text-[var(--matte-black)]">
                    <Link href="/products" className="text-[var(--matte-black)]">
                      {t("nav.our-olive-oil")}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="focus:!bg-[var(--antique-gold)]/10 focus:!text-[var(--matte-black)] data-[highlighted]:!bg-[var(--antique-gold)]/10 data-[highlighted]:!text-[var(--matte-black)]">
                    <Link href="/locations" className="text-[var(--matte-black)]">
                      {t("nav.our-locations")}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Gifting Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm font-medium text-foreground tracking-wide whitespace-nowrap hover:bg-[var(--soft-sand)] hover:text-[var(--matte-black)]">
                    {t("nav.gifting")}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-[var(--soft-sand)] border-[var(--antique-gold)]/20 text-[var(--matte-black)] [&_[data-highlighted]]:bg-[var(--antique-gold)]/10 [&_[data-highlighted]]:text-[var(--matte-black)]">
                  <DropdownMenuItem asChild className="focus:!bg-[var(--antique-gold)]/10 focus:!text-[var(--matte-black)] data-[highlighted]:!bg-[var(--antique-gold)]/10 data-[highlighted]:!text-[var(--matte-black)]">
                    <Link href="/gifting" className="text-[var(--matte-black)]">
                      {t("nav.gifting")}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Learn Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm font-medium text-foreground tracking-wide whitespace-nowrap hover:bg-[var(--soft-sand)] hover:text-[var(--matte-black)]">
                    {t("nav.learn")}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-[var(--soft-sand)] border-[var(--antique-gold)]/20 text-[var(--matte-black)] [&_[data-highlighted]]:bg-[var(--antique-gold)]/10 [&_[data-highlighted]]:text-[var(--matte-black)]">
                  <DropdownMenuItem asChild className="focus:!bg-[var(--antique-gold)]/10 focus:!text-[var(--matte-black)] data-[highlighted]:!bg-[var(--antique-gold)]/10 data-[highlighted]:!text-[var(--matte-black)]">
                    <Link href="/know-your-oil" className="text-[var(--matte-black)]">
                      Know Your Oil
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="focus:!bg-[var(--antique-gold)]/10 focus:!text-[var(--matte-black)] data-[highlighted]:!bg-[var(--antique-gold)]/10 data-[highlighted]:!text-[var(--matte-black)]">
                    <Link href="/recipes" className="text-[var(--matte-black)]">
                      {t("nav.recipes")}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
          </div>

          {/* Centered Logo — full height of nav band */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-full py-2">
            <Link href="/" className="h-full flex items-center">
              <img
                src="/Qalaa_LOGO_1-Gold.svg"
                alt="Qalaa Logo"
                className="h-full w-auto object-contain object-center max-h-32"
              />
            </Link>
          </div>

          {/* Right Side - spacer for centering */}
          <div className="hidden lg:block flex-1" />
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:!bg-[var(--antique-gold)]/10 font-display">
                  <Globe className="w-4 h-4" />
                  <span className="ml-1 text-xs font-medium uppercase">{language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[var(--soft-sand)] border-[var(--antique-gold)]/20 text-[var(--matte-black)] [&_[data-highlighted]]:bg-[var(--antique-gold)]/10 [&_[data-highlighted]]:text-[var(--matte-black)]">
                <DropdownMenuItem onClick={() => setLanguage("en")} className="text-[var(--matte-black)] focus:!bg-[var(--antique-gold)]/10 data-[highlighted]:!bg-[var(--antique-gold)]/10 cursor-pointer">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("ar")} className="text-[var(--matte-black)] focus:!bg-[var(--antique-gold)]/10 data-[highlighted]:!bg-[var(--antique-gold)]/10 cursor-pointer">
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Future Cart Button - Currently Hidden */}
            {/* 
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary relative">
              <ShoppingCart className="w-4 h-4" />
              <span className="ml-1 hidden sm:inline text-sm">{t("nav.cart")}</span>
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </Button>
            */}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-muted-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <div className="flex flex-col space-y-3">
              <Link href="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.our-olive-oil")}
              </Link>
              <Link href="/locations" className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.our-locations")}
              </Link>
              <Link href="/gifting" className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.gifting")}
              </Link>
              <Link href="/know-your-oil" className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Know Your Oil
              </Link>
              <Link href="/recipes" className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.recipes")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
