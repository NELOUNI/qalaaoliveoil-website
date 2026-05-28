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
    "brand.tagline": "Terroir, craft, and liquid gold in every bottle.",

    // Homepage
    "home.hero.title": "The Fortress of Tunisian Terroir",
    "home.hero.subtitle":
      "Ultra-premium extra virgin oils — early harvest, cold extraction, acidity held in the realm of the exceptional. Explore the groves, learn the craft, then taste liquid gold worthy of your finest table.",
    "home.hero.cta": "Explore the collection",
    "home.featured.title": "Signature oils — ultra-premium",
    "home.featured.description":
      "Each cuvée is a rare expression of our groves: olives picked at the right moment, meticulous cold extraction, aromatic profiles built for finishing and for memory. Follow the journey from tree to table — then order the oil that tells Tunisia differently.",
    "home.featured.cta-all": "View the full collection",
    "home.story.title": "Our citadel heritage",
    "home.story.text":
      "For generations we have guarded ancient groves where time slows — holding sacred methods and modern rigor in the same hand — to craft liquid gold of uncommon purity and depth.",

    // Products
    "products.title": "Ultra-premium olive oils",
    "products.subtitle":
      "Two signature cuvées from Tunisian terroir — crafted for connoisseurs, finishing, and moments worth lingering over.",
    "products.filter.all": "All Products",
    "products.filter.premium": "Premium",
    "products.filter.organic": "Organic",
    "products.filter.limited": "Limited Edition",
    "products.add-to-cart": "Discover",
    "products.know-more": "Discover",
    "products.view-details": "View Details",

    // Story Page
    "story.title": "Our story",
    "story.subtitle": "Excellence in a straight line — from the tree to your table",
    "story.heritage.title": "Living terroir",
    "story.heritage.text":
      "Our groves carry more than fifty years of family memory: each tree tended as an heirloom, each harvest held to a promise of absolute quality.",
    "story.tradition.title": "Gesture and modernity",
    "story.tradition.text":
      "We honor cold pressing and speed from branch to mill, while every lot is traced and tasted with today's tools — for Tunisian truth and consistent character.",
    "story.quality.title": "Quality without compromise",
    "story.quality.text":
      "From picking to seal, every step is logged and tasted: we chase the lowest acidity we can hold and a clear, long finish you will remember.",
    "story.journey.title": "Our journey through time",
    "story.values.title": "What guides us",
    "story.image.alt": "Ancient olive grove at golden hour",

    // Recipes Page
    "recipes.title": "Culinary inspirations",
    "recipes.subtitle": "Mediterranean recipes that reveal the character of our oils",
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
    "faq.title": "Frequently asked questions",
    "faq.subtitle": "Shipping, authenticity, storage, and how to taste Qalaa like a professional.",

    // Gifting
    "gifting.title": "Gifts & curated sets",
    "gifting.subtitle":
      "Compose something unforgettable: our oils, your words, presentation worthy of Tunis or abroad.",
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
    "story.preview.heading": "More than half a century of",
    "story.preview.liquid-gold": "liquid gold",
    "story.preview.intro":
      "Our story begins in the 1970s, when the first trees took root in generous soil. Between respect for the fruit and obsession with detail, we preserved a rare craft — the kind that turns a harvest into aroma, texture, and emotion on the palate.",
    "story.preview.body":
      "Every bottle of Qalaa condenses Mediterranean light, seasonal patience, and the pursuit of balance: an invitation to explore, taste, compare — then bring that Tunisia into your kitchen.",
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
    "brand.tagline": "أرض المنشأ، الحرفية، والذهب السائل في كل زجاجة.",

    // Homepage
    "home.hero.title": "قلعة التربة التونسية",
    "home.hero.subtitle":
      "زيوت بكر ممتازة فائقة الجودة — حصاد مبكر، عصر على البارد، حموضة في نطاق التميّز. استكشف البساتين، تعرّف على الحرفية، ثم ذق ذهباً سائلاً يليق بأفضل مائدة لديك.",
    "home.hero.cta": "اكتشف مجموعتنا",
    "home.featured.title": "زيوتنا المميزة — فائقة الجودة",
    "home.featured.description":
      "كل تركيبة نادرة من بساتيننا: زيتون يُقطف في الوقت المناسب، عصر بارد بدقة، ونكهات مصممة للتشريب وللذاكرة. اتبع الرحلة من الشجرة إلى المائدة — ثم اطلب الزيت الذي يحكي تونس بصوت مختلف.",
    "home.featured.cta-all": "عرض المجموعة كاملة",
    "home.story.title": "تراث قلعتنا",
    "home.story.text":
      "لقرون، كانت عائلتنا حراس بساتين الزيتون المقدسة في تونس، نحمي التقاليد القديمة بينما نصنع الذهب السائل بنقاء لا مثيل له.",

    // Products
    "products.title": "زيوت زيتون فائقة الجودة",
    "products.subtitle": "تركيبتان مميزتان من أرض المنشأ التونسية — للمقتنين والطهاة وللحظات التي تستحق أن تطول.",
    "products.filter.all": "جميع المنتجات",
    "products.filter.premium": "فاخر",
    "products.filter.organic": "عضوي",
    "products.filter.limited": "إصدار محدود",
    "products.add-to-cart": "اكتشف",
    "products.know-more": "اكتشف",
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
    "story.journey.title": "رحلتنا عبر الزمن",
    "story.values.title": "قيمنا",
    "story.image.alt": "بستان زيتون عريق عند غروب الشمس",

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
    "faq.title": "الأسئلة الشائعة",
    "faq.subtitle": "الشحن، الأصالة، التخزين، وكيف تذوق قلعة كالمحترفين.",

    // Gifting
    "gifting.title": "هدايا ومجموعات مختارة",
    "gifting.subtitle": "اصنع هدية لا تُنسى: زيوتنا، كلماتك، تقديم يليق بتونس أو بعيداً عنها.",
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
    "footer.address.street": "شارع 14 جانفي",
    "footer.address.city": "4000 سوسة، تونس",

    // Story section
    "story.preview.heading": "أكثر من نصف قرن من",
    "story.preview.liquid-gold": "الذهب السائل",
    "story.preview.intro": "تبدأ قصتنا في سبعينيات القرن الماضي، عندما زُرعت أولى أشجار الزيتون في التربة الخصبة لتونس. عبر أجيال من المزارعين المخلصين والحرفيين الماهرين، حافظنا على فن إنتاج زيت الزيتون العريق مع تبني معايير الجودة الحديثة.",
    "story.preview.body": "كل زجاجة من قلعة تحمل جوهر المناخ المتوسطي لتونس وحكمة الطرق التقليدية وشغف العائلات التي كرّست حياتها لإتقان هذه الحرفة العريقة.",
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
