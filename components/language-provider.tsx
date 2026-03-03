"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ar"

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
    "brand.tagline": "Guardians of the Olive, Keepers of the Gold",

    // Homepage
    "home.hero.title": "Fortress of Flavor from Ancient Tunisia",
    "home.hero.subtitle":
      "From our citadel of tradition comes liquid gold - premium extra virgin olive oils crafted by guardians of ancient groves.",
    "home.hero.cta": "Discover Our Collection",
    "home.featured.title": "Premium Fortress Collection",
    "home.story.title": "Our Citadel Heritage",
    "home.story.text":
      "For centuries, our family has been the guardians of Tunisia's sacred olive groves, protecting ancient traditions while crafting liquid gold of unmatched purity.",

    // Products
    "products.title": "Premium Olive Oil Collection",
    "products.subtitle": "Discover our range of exceptional extra virgin olive oils",
    "products.filter.all": "All Products",
    "products.filter.premium": "Premium",
    "products.filter.organic": "Organic",
    "products.filter.limited": "Limited Edition",
    "products.add-to-cart": "Know More",
    "products.know-more": "Know More",
    "products.view-details": "View Details",

    // Story Page
    "story.title": "Our Story",
    "story.subtitle": "A Legacy of Excellence Spanning Generations",
    "story.heritage.title": "Ancient Heritage",
    "story.heritage.text":
      "Our olive groves have been in our family for over 50 years, passed down through generations of master cultivators who understood the sacred art of olive oil production.",
    "story.tradition.title": "Traditional Methods",
    "story.tradition.text":
      "We honor time-tested techniques while embracing modern quality standards, ensuring each bottle captures the authentic taste of Tunisia.",
    "story.quality.title": "Uncompromising Quality",
    "story.quality.text":
      "From harvest to bottle, every step is carefully monitored to maintain the highest standards of purity and flavor.",

    // Recipes Page
    "recipes.title": "Culinary Inspirations",
    "recipes.subtitle": "Discover authentic Mediterranean recipes featuring our premium olive oils",
    "recipes.prep-time": "Prep Time",
    "recipes.cook-time": "Cook Time",
    "recipes.servings": "Servings",
    "recipes.ingredients": "Ingredients",
    "recipes.instructions": "Instructions",

    // Contact Page
    "contact.title": "Get in Touch",
    "contact.subtitle": "We'd love to hear from you",
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
    "locations.title": "Our Locations",
    "locations.subtitle": "Visit our olive groves and tasting rooms",
    "locations.main-grove": "Main Olive Grove",
    "locations.tasting-room": "Tasting Room",
    "locations.retail-store": "Retail Store",
    "locations.visit-us": "Visit Us",
    "locations.book-tour": "Book a Tour",

    // FAQ Page
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Everything you need to know about our olive oils",

    // Gifting
    "gifting.title": "Luxury Olive Oil Gifts",
    "gifting.subtitle": "Create the perfect gift with our premium Tunisian olive oils",
    "gifting.create-gift": "Create Your Gift",
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
    "footer.copyright": "All rights reserved. Made with love in Tunisia.",
    "footer.address.street": "Avenue 14 Janvier",
    "footer.address.city": "Sousse, Tunisia",

    // Story section
    "story.preview.heading": "Over Half a Century of",
    "story.preview.liquid-gold": "Liquid Gold",
    "story.preview.intro": "Our story begins in the 1970s, when the first olive trees were planted in the fertile soils of Tunisia. Through generations of dedicated farmers and master craftsmen, we've preserved the ancient art of olive oil production while embracing modern quality standards.",
    "story.preview.body": "Every bottle of QALAA carries the essence of Tunisia's Mediterranean climate, the wisdom of traditional methods, and the passion of families who have dedicated their lives to perfecting this ancient craft.",
    "story.preview.stats.years": "Years Heritage",
    "story.preview.stats.regions": "Regions",
    "story.preview.stats.families": "Families",
    "story.preview.cta": "Discover Our Heritage",

    // Product detail
    "product.origin-story": "Origin Story",
    "product.harvest": "Harvest",
    "product.gold-medal": "Gold Medal Winner",
    "product.know-more": "Know More",
    "product.acidity-level": "Acidity Level",
    "product.volume": "Volume",
    "product.harvest-method": "Harvest Method",
    "product.region": "Region",
    "product.per-bottle": "per bottle",
    "product.extra-virgin": "Extra Virgin",
    "product.cold-pressed": "Cold Pressed",
    "product.november-2025": "November 2025",

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
    "brand.tagline": "حراس الزيتون، حفظة الذهب",

    // Homepage
    "home.hero.title": "قلعة النكهة من تونس العريقة",
    "home.hero.subtitle": "من قلعة تقاليدنا يأتي الذهب السائل - زيوت زيتون بكر ممتازة صنعها حراس البساتين العريقة.",
    "home.hero.cta": "اكتشف مجموعتنا",
    "home.featured.title": "مجموعة القلعة الفاخرة",
    "home.story.title": "تراث قلعتنا",
    "home.story.text":
      "لقرون، كانت عائلتنا حراس بساتين الزيتون المقدسة في تونس، نحمي التقاليد القديمة بينما نصنع الذهب السائل بنقاء لا مثيل له.",

    // Products
    "products.title": "مجموعة زيت الزيتون الفاخر",
    "products.subtitle": "اكتشف مجموعتنا من زيوت الزيتون البكر الاستثنائية",
    "products.filter.all": "جميع المنتجات",
    "products.filter.premium": "فاخر",
    "products.filter.organic": "عضوي",
    "products.filter.limited": "إصدار محدود",
    "products.add-to-cart": "اعرف المزيد",
    "products.know-more": "اعرف المزيد",
    "products.view-details": "عرض التفاصيل",

    // Story Page
    "story.title": "قصتنا",
    "story.subtitle": "إرث من التميز يمتد عبر الأجيال",
    "story.heritage.title": "التراث العريق",
    "story.heritage.text":
      "بساتين الزيتون لدينا في عائلتنا لأكثر من 50 عاماً، تم تناقلها عبر أجيال من المزارعين الخبراء الذين فهموا فن إنتاج زيت الزيتون المقدس.",
    "story.tradition.title": "الطرق التقليدية",
    "story.tradition.text":
      "نحن نكرم التقنيات المجربة مع احتضان معايير الجودة الحديثة، مما يضمن أن كل زجاجة تلتقط الطعم الأصيل لتونس.",
    "story.quality.title": "جودة لا تقبل المساومة",
    "story.quality.text": "من الحصاد إلى الزجاجة، يتم مراقبة كل خطوة بعناية للحفاظ على أعلى معايير النقاء والنكهة.",

    // Recipes Page
    "recipes.title": "وصفات من مطبخنا",
    "recipes.subtitle": "اكتشف وصفات البحر الأبيض المتوسط الأصيلة مع زيوت الزيتون الفاخرة لدينا",
    "recipes.prep-time": "وقت التحضير",
    "recipes.cook-time": "وقت الطبخ",
    "recipes.servings": "الحصص",
    "recipes.ingredients": "المكونات",
    "recipes.instructions": "التعليمات",

    // Contact Page
    "contact.title": "تواصل معنا",
    "contact.subtitle": "نحب أن نسمع منك",
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
    "locations.subtitle": "زر بساتين الزيتون وقاعات التذوق لدينا",
    "locations.main-grove": "بستان الزيتون الرئيسي",
    "locations.tasting-room": "قاعة التذوق",
    "locations.retail-store": "متجر التجزئة",
    "locations.visit-us": "زرنا",
    "locations.book-tour": "احجز جولة",

    // FAQ Page
    "faq.title": "الأسئلة الشائعة",
    "faq.subtitle": "كل ما تحتاج لمعرفته عن زيوت الزيتون لدينا",

    // Gifting
    "gifting.title": "هدايا زيت الزيتون الفاخرة",
    "gifting.subtitle": "اصنع الهدية المثالية مع زيوت الزيتون التونسية الفاخرة لدينا",
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
    "footer.copyright": "جميع الحقوق محفوظة. صُنع بحب في تونس.",
    "footer.address.street": "شارع 14 جانفي،",
    "footer.address.city": "4000 سوسة، تونس",

    // Story section
    "story.preview.heading": "أكثر من نصف قرن من",
    "story.preview.liquid-gold": "الذهب السائل",
    "story.preview.intro": "تبدأ قصتنا في سبعينيات القرن الماضي، عندما زُرعت أولى أشجار الزيتون في التربة الخصبة لتونس. عبر أجيال من المزارعين المخلصين والحرفيين الماهرين، حافظنا على فن إنتاج زيت الزيتون العريق مع تبني معايير الجودة الحديثة.",
    "story.preview.body": "كل زجاجة من قلعة تحمل جوهر المناخ المتوسطي لتونس وحكمة الطرق التقليدية وشغف العائلات التي كرّست حياتها لإتقان هذه الحرفة العريقة.",
    "story.preview.stats.years": "سنوات من التراث",
    "story.preview.stats.regions": "مناطق",
    "story.preview.stats.families": "عائلات",
    "story.preview.cta": "اكتشف تراثنا",

    // Product detail
    "product.origin-story": "قصة المنشأ",
    "product.harvest": "الحصاد",
    "product.gold-medal": "الميدالية الذهبية",
    "product.know-more": "اعرف المزيد",
    "product.acidity-level": "مستوى الحموضة",
    "product.volume": "الحجم",
    "product.harvest-method": "طريقة الحصاد",
    "product.region": "المنطقة",
    "product.per-bottle": "للزجاجة",
    "product.extra-virgin": "بكر ممتاز",
    "product.cold-pressed": "بضغط بارد",
    "product.november-2025": "نوفمبر 2025",

    // Products grid
    "product.acidity": "الحموضة",
    "product.low-stock": "مخزون منخفض",
    "product.out-of-stock": "نفذ المخزون",
    "product.no-products": "لا توجد منتجات",
    "product.no-products-hint": "حاول تعديل الفلاتر أو مصطلحات البحث.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("qalaa-language") as Language | null
    if (saved === "en" || saved === "ar") setLanguageState(saved)
  }, [])

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
