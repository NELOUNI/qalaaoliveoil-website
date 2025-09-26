"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.olive-oil": "Olive Oil",
    "nav.gifting": "Gifting",
    "nav.story": "Story",
    "nav.recipes": "Recipes",
    "nav.contact": "Contact",
    "nav.locations": "Locations",
    "nav.faq": "FAQ",
    "nav.account": "Account",
    "nav.cart": "Cart",
    "nav.wholesale": "Wholesale",

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
    "products.add-to-cart": "Add to Cart",
    "products.view-details": "View Details",

    // Story Page
    "story.title": "Our Story",
    "story.subtitle": "A Legacy of Excellence Spanning Generations",
    "story.heritage.title": "Ancient Heritage",
    "story.heritage.text":
      "Our olive groves have been in our family for over 200 years, passed down through generations of master cultivators who understood the sacred art of olive oil production.",
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
  },
  ar: {
    // Navigation
    "nav.olive-oil": "زيت الزيتون",
    "nav.gifting": "الهدايا",
    "nav.story": "القصة",
    "nav.recipes": "الوصفات",
    "nav.contact": "اتصل بنا",
    "nav.locations": "المواقع",
    "nav.faq": "الأسئلة الشائعة",
    "nav.account": "الحساب",
    "nav.cart": "السلة",
    "nav.wholesale": "الجملة",

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
    "products.add-to-cart": "أضف إلى السلة",
    "products.view-details": "عرض التفاصيل",

    // Story Page
    "story.title": "قصتنا",
    "story.subtitle": "إرث من التميز يمتد عبر الأجيال",
    "story.heritage.title": "التراث العريق",
    "story.heritage.text":
      "بساتين الزيتون لدينا في عائلتنا لأكثر من 200 عام، تم تناقلها عبر أجيال من المزارعين الخبراء الذين فهموا فن إنتاج زيت الزيتون المقدس.",
    "story.tradition.title": "الطرق التقليدية",
    "story.tradition.text":
      "نحن نكرم التقنيات المجربة مع احتضان معايير الجودة الحديثة، مما يضمن أن كل زجاجة تلتقط الطعم الأصيل لتونس.",
    "story.quality.title": "جودة لا تقبل المساومة",
    "story.quality.text": "من الحصاد إلى الزجاجة، يتم مراقبة كل خطوة بعناية للحفاظ على أعلى معايير النقاء والنكهة.",

    // Recipes Page
    "recipes.title": "الإلهام الطهي",
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
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

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
