"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { frStrings } from "@/lib/i18n/strings-fr"

export type Language = "en" | "ar" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.our-olive-oil": "Our Olive Oil",
    "nav.our-locations": "Our Locations",
    "nav.gifting": "Gifting",
    "nav.our-story": "Our Story",
    "nav.recipes": "Recipes",
    "nav.learn": "Learn",
    "nav.contact-us": "Contact Us",
    "nav.faq": "FAQ",
    "nav.account": "Account",
    "nav.cart": "Cart",
    "nav.wholesale": "Wholesale",
    "nav.know-your-oil": "Know Your Oil",

    // Footer section headers
    "footer.products": "Products",
    "footer.company": "Company",
    "footer.contact": "Contact",

    // Common
    "common.loading": "Loading...",
    "common.error": "Something went wrong",
    "common.retry": "Try again",
    "common.close": "Close",
    "common.open": "Open",
    "common.read-more": "Read More",
    "common.learn-more": "Learn More",
    "common.get-started": "Get Started",
    "common.contact-us": "Contact Us",

    // Brand
    "brand.name": "Qalaa",
    "brand.tagline": "Extra Virgin Olive Oil",

    // Homepage
    "home.hero.title": "From the Hills of Sousse.",
    "home.hero.subtitle":
      "Single-variety Chetoui — early harvest, cold-extracted, tasted before it leaves the mill. One oil, in three bottles, made to be offered.",
    "home.hero.cta": "The collection",
    "home.featured.title": "The collection",
    "home.featured.description": "One oil. Three bottles.",
    "home.featured.cta-all": "The collection",
    "home.story.title": "The groves",
    "home.story.text":
      "Chetoui from the hills of Sousse — picked early, cold-extracted, tasted before it leaves the mill.",

    // Products
    "products.title": "Extra Virgin Olive Oil",
    "products.subtitle": "Single-variety Chetoui, from Sousse. Three bottles.",
    "products.filter.all": "All Products",
    "products.filter.premium": "Premium",
    "products.filter.organic": "Organic",
    "products.filter.limited": "Limited Edition",
    "products.add-to-cart": "Discover",
    "products.know-more": "Discover",
    "products.view-details": "View Details",

    // Story Page
    "story.title": "Our story",
    "story.subtitle": "From the tree to the bottle.",
    "story.heritage.title": "Living terroir",
    "story.heritage.text":
      "The groves have been in the family for more than fifty years.",
    "story.tradition.title": "Gesture and modernity",
    "story.tradition.text":
      "Cold extraction, from branch to mill within hours. Every lot is tasted.",
    "story.quality.title": "Quality without compromise",
    "story.quality.text":
      "From picking to seal, each step is logged. Acidity is held below 0.2%.",
    "story.journey.title": "Our journey through time",
    "story.values.title": "What guides us",
    "story.image.alt": "Qalaa in the groves of Sousse",

    // Recipes Page
    "recipes.title": "Recipes",
    "recipes.subtitle": "For the table.",
    "recipes.prep-time": "Prep Time",
    "recipes.cook-time": "Cook Time",
    "recipes.servings": "Servings",
    "recipes.ingredients": "Ingredients",
    "recipes.instructions": "Instructions",

    // Contact Page
    "contact.title": "Get in touch",
    "contact.subtitle": "Partnerships, tastings, orders — we read every note and reply with care.",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.info.address": "Address",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.hours": "Business Hours",

    // Locations Page
    "locations.title": "Our locations",
    "locations.subtitle":
      "Walk the groves, taste in Tunis, or find us where the journey continues beyond Tunisia.",
    "locations.main-grove": "Main Olive Grove",
    "locations.tasting-room": "Tasting Room",
    "locations.retail-store": "Retail Store",
    "locations.visit-us": "Visit Us",
    "locations.enquire": "Enquire",
    "locations.book-tour": "Book a Tour",

    // FAQ Page
    "faq.title": "Questions",
    "faq.subtitle": "Shipping, storage, tasting.",

    // Gifting
    "gifting.title": "Gifts",
    "gifting.subtitle": "To be offered.",
    "gifting.create-gift": "Compose a gift",
    "gifting.step.products": "Select Products",
    "gifting.step.packaging": "Choose Packaging",
    "gifting.step.message": "Add Message",
    "gifting.step.delivery": "Delivery Details",
    "gifting.step.review": "Review & Order",

    // Authentication
    "auth.login.title": "Wholesale Login",
    "auth.login.subtitle": "Access your wholesale account",
    "auth.signup.title": "Wholesale Application",
    "auth.signup.subtitle": "Apply for a wholesale account to access bulk pricing",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.login.button": "Login",
    "auth.signup.button": "Sign up",
    "auth.need-account": "Need a wholesale account?",
    "auth.have-account": "Already have an account?",

    // Footer links
    "footer.our-olive-oil": "Our Olive Oil",
    "footer.our-story": "Our Story",
    "footer.our-locations": "Our Locations",
    "footer.contact-us": "Contact Us",
    "footer.privacy-policy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
    "footer.copyright": "All rights reserved. Tunisia.",
    "footer.address.street": "Avenue 14 Janvier",
    "footer.address.city": "Sousse, Tunisia",

    // Story section
    "story.preview.heading": "The groves,",
    "story.preview.liquid-gold": "since 1972",
    "story.preview.intro":
      "The first trees took root in generous soil. The harvest still follows the fruit.",
    "story.preview.body":
      "Qalaa is Chetoui from those hills — tasted batch by batch, then offered.",
    "story.preview.stats.years": "Years Heritage",
    "story.preview.stats.regions": "Regions",
    "story.preview.stats.families": "Families",
    "story.preview.cta": "Step into our heritage",

    // Product detail
    "product.origin-story": "Terroir story",
    "product.harvest": "Harvest",
    "product.know-more": "Discover",
    "product.acidity-level": "Acidity Level",
    "product.volume": "Volume",
    "product.harvest-method": "Harvest Method",
    "product.region": "Region",
    "product.sku": "SKU",
    "product.per-bottle": "per bottle",
    "product.extra-virgin": "Extra Virgin",
    "product.cold-pressed": "Cold Pressed",
    "product.november-2025": "November 2025",
    "product.credentials":
      "Harvest: November 2025 · Acidity < 0.2% · High in polyphenols · Cold-extracted · Product of Sousse, Tunisia",

    // Products grid
    "product.acidity": "Acidity",
    "product.low-stock": "Low Stock",
    "product.out-of-stock": "Out of Stock",
    "product.no-products": "No products found",
    "product.no-products-hint": "Try adjusting your filters or search terms.",
  },
  ar: {
    // Navigation
    "nav.our-olive-oil": "زيوت الزيتون لدينا",
    "nav.our-locations": "مواقعنا",
    "nav.gifting": "الهدايا",
    "nav.our-story": "قصتنا",
    "nav.recipes": "الوصفات",
    "nav.learn": "تعلم",
    "nav.contact-us": "اتصل بنا",
    "nav.faq": "الأسئلة الشائعة",
    "nav.account": "الحساب",
    "nav.cart": "السلة",
    "nav.wholesale": "الجملة",
    "nav.know-your-oil": "تعرف على زيتك",

    // Footer section headers
    "footer.products": "المنتجات",
    "footer.company": "الشركة",
    "footer.contact": "التواصل",

    // Common
    "common.loading": "جاري التحميل...",
    "common.error": "حدث خطأ ما",
    "common.retry": "حاول مرة أخرى",
    "common.close": "إغلاق",
    "common.open": "فتح",
    "common.read-more": "اقرأ المزيد",
    "common.learn-more": "تعلم المزيد",
    "common.get-started": "ابدأ الآن",
    "common.contact-us": "اتصل بنا",

    // Brand
    "brand.name": "قلعة",
    "brand.tagline": "زيت زيتون بكر ممتاز",

    // Homepage
    "home.hero.title": "من تلال سوسة.",
    "home.hero.subtitle":
      "شتوي أحادي الصنف — حصاد مبكر، عصر على البارد، يُذاق قبل أن يغادر المعصرة. زيتٌ واحد، في ثلاث زجاجات، يُقدَّم هديةً.",
    "home.hero.cta": "المجموعة",
    "home.featured.title": "المجموعة",
    "home.featured.description": "زيتٌ واحد. ثلاث زجاجات.",
    "home.featured.cta-all": "المجموعة",
    "home.story.title": "البساتين",
    "home.story.text":
      "شتوي من تلال سوسة — يُقطف مبكراً، يُعصر على البارد، ويُذاق قبل أن يغادر المعصرة.",

    // Products
    "products.title": "زيت زيتون بكر ممتاز",
    "products.subtitle": "شتوي أحادي الصنف، من سوسة. ثلاث زجاجات.",
    "products.filter.all": "جميع المنتجات",
    "products.filter.premium": "فاخر",
    "products.filter.organic": "عضوي",
    "products.filter.limited": "إصدار محدود",
    "products.add-to-cart": "اكتشف",
    "products.know-more": "اكتشف",
    "products.view-details": "عرض التفاصيل",

    // Story Page
    "story.title": "قصتنا",
    "story.subtitle": "من الشجرة إلى الزجاجة.",
    "story.heritage.title": "التراث العريق",
    "story.heritage.text":
      "البساتين في العائلة منذ أكثر من خمسين عاماً.",
    "story.tradition.title": "الطرق التقليدية",
    "story.tradition.text":
      "عصر على البارد، من الغصن إلى المعصرة في ساعات. كل دفعة تُذاق.",
    "story.quality.title": "جودة لا تقبل المساومة",
    "story.quality.text":
      "من القطف إلى الختم، كل خطوة موثّقة. الحموضة أقل من ٪٠٫٢.",
    "story.journey.title": "رحلتنا عبر الزمن",
    "story.values.title": "قيمنا",
    "story.image.alt": "قلعة في بساتين سوسة",

    // Recipes Page
    "recipes.title": "الوصفات",
    "recipes.subtitle": "للمائدة.",
    "recipes.prep-time": "وقت التحضير",
    "recipes.cook-time": "وقت الطبخ",
    "recipes.servings": "الحصص",
    "recipes.ingredients": "المكونات",
    "recipes.instructions": "التعليمات",

    // Contact Page
    "contact.title": "تواصل معنا",
    "contact.subtitle": "شراكات، تذوق، طلبات — نقرأ كل رسالة ونرد بعناية.",
    "contact.form.name": "الاسم الكامل",
    "contact.form.email": "عنوان البريد الإلكتروني",
    "contact.form.subject": "الموضوع",
    "contact.form.message": "الرسالة",
    "contact.form.send": "إرسال الرسالة",
    "contact.info.address": "العنوان",
    "contact.info.phone": "الهاتف",
    "contact.info.email": "البريد الإلكتروني",
    "contact.info.hours": "ساعات العمل",

    // Locations Page
    "locations.title": "مواقعنا",
    "locations.subtitle": "تمشَّ في البساتين، ذق في تونس، أو اعثر علينا حيث تستمر الرحلة خارج تونس.",
    "locations.main-grove": "بستان الزيتون الرئيسي",
    "locations.tasting-room": "قاعة التذوق",
    "locations.retail-store": "متجر التجزئة",
    "locations.visit-us": "زرنا",
    "locations.enquire": "تواصل معنا",
    "locations.book-tour": "احجز جولة",

    // FAQ Page
    "faq.title": "أسئلة",
    "faq.subtitle": "الشحن، الحفظ، التذوق.",

    // Gifting
    "gifting.title": "هدايا",
    "gifting.subtitle": "تُقدَّم.",
    "gifting.create-gift": "اصنع هديتك",
    "gifting.step.products": "اختر المنتجات",
    "gifting.step.packaging": "اختر التغليف",
    "gifting.step.message": "أضف رسالة",
    "gifting.step.delivery": "تفاصيل التسليم",
    "gifting.step.review": "مراجعة والطلب",

    // Authentication
    "auth.login.title": "تسجيل دخول الجملة",
    "auth.login.subtitle": "الوصول إلى حساب الجملة الخاص بك",
    "auth.signup.title": "طلب حساب الجملة",
    "auth.signup.subtitle": "تقدم بطلب للحصول على حساب جملة للوصول إلى أسعار الجملة",
    "auth.email": "البريد الإلكتروني",
    "auth.password": "كلمة المرور",
    "auth.login.button": "تسجيل الدخول",
    "auth.signup.button": "إنشاء حساب",
    "auth.need-account": "تحتاج حساب جملة؟",
    "auth.have-account": "لديك حساب بالفعل؟",

    // Footer links
    "footer.our-olive-oil": "زيت الزيتون لدينا",
    "footer.our-story": "قصتنا",
    "footer.our-locations": "مواقعنا",
    "footer.contact-us": "اتصل بنا",
    "footer.privacy-policy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    "footer.cookies": "سياسة ملفات تعريف الارتباط",
    "footer.copyright": "جميع الحقوق محفوظة. تونس.",
    "footer.address.street": "شارع 14 جانفي",
    "footer.address.city": "4000 سوسة، تونس",

    // Story section
    "story.preview.heading": "البساتين،",
    "story.preview.liquid-gold": "منذ ١٩٧٢",
    "story.preview.intro": "غُرست أولى الأشجار في تربة كريمة. والحصاد ما زال يتبع الثمرة.",
    "story.preview.body": "«قلعة» شتوي من تلك التلال — تُذاق كل دفعة، ثم تُقدَّم.",
    "story.preview.stats.years": "سنوات من التراث",
    "story.preview.stats.regions": "مناطق",
    "story.preview.stats.families": "عائلات",
    "story.preview.cta": "ادخل إلى تراثنا",

    // Product detail
    "product.origin-story": "قصة أرض المنشأ",
    "product.harvest": "الحصاد",
    "product.know-more": "اكتشف",
    "product.acidity-level": "مستوى الحموضة",
    "product.volume": "الحجم",
    "product.harvest-method": "طريقة الحصاد",
    "product.region": "المنطقة",
    "product.sku": "رمز المنتج",
    "product.per-bottle": "للزجاجة",
    "product.extra-virgin": "بكر ممتاز",
    "product.cold-pressed": "بضغط بارد",
    "product.november-2025": "نوفمبر 2025",
    "product.credentials":
      "الحصاد: نوفمبر ٢٠٢٥ · الحموضة أقل من ٪٠٫٢ · غنيٌّ بالبوليفينول · معصورٌ على البارد · إنتاج سوسة، تونس",

    // Products grid
    "product.acidity": "الحموضة",
    "product.low-stock": "مخزون منخفض",
    "product.out-of-stock": "نفذ المخزون",
    "product.no-products": "لا توجد منتجات",
    "product.no-products-hint": "حاول تعديل الفلاتر أو مصطلحات البحث.",
  },
  fr: { ...frStrings },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("qalaa-language") as Language | null
    if (saved === "en" || saved === "ar" || saved === "fr") setLanguageState(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language === "ar" ? "ar" : language === "fr" ? "fr" : "en"
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("qalaa-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
