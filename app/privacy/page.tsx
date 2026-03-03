"use client"

import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"

export default function PrivacyPolicyPage() {
  const { language } = useLanguage()
  const isArabic = language === "ar"

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Content */}
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="prose prose-neutral max-w-none">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-8">
              {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
            </h1>
            <p className="text-muted-foreground mb-8">{isArabic ? "آخر تحديث: فبراير 2025" : "Last updated: February 2025"}</p>

            {isArabic ? (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">1. مقدمة</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    قلعة (&quot;نحن&quot; أو &quot;لدينا&quot; أو &quot;لنا&quot;) ملتزمة بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمعنا لمعلوماتك واستخدامها والإفصاح عنها وحمايتها عند زيارة موقعنا الإلكتروني www.qalaaoliveoil.com (&quot;الموقع&quot;).
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">2. المعلومات التي نجمعها</h2>
                  <h3 className="text-xl font-medium text-foreground mb-3">2.1 المعلومات الشخصية</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    قد نجمع معلومات شخصية تقدمها لنا طواعية عندما:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                    <li>تتواصل معنا عبر موقعنا</li>
                    <li>تقدم استفساراً عن منتجاتنا</li>
                    <li>تشترك في نشرتنا الإخبارية</li>
                  </ul>
                  <h3 className="text-xl font-medium text-foreground mb-3">2.2 المعلومات التي تُجمع تلقائياً</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    نجمع تلقائياً معلومات معينة عن جهازك وأنماط الاستخدام، بما في ذلك:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>عنوان IP وبيانات الموقع</li>
                    <li>نوع المتصفح وإصداره</li>
                    <li>الصفحات المزارة والوقت المستغرق على موقعنا</li>
                    <li>معلومات الموقع المُحيل</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">3. كيفية استخدام معلوماتك</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    نستخدم المعلومات التي نجمعها من أجل:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>توفير موقعنا الإلكتروني وتشغيله وصيانته</li>
                    <li>معالجة الاستفسارات والطلبات</li>
                    <li>تحسين موقعنا وتخصيصه وتوسيعه</li>
                    <li>فهم كيفية استخدامك للموقع وتحليله</li>
                    <li>التواصل معك لخدمة العملاء والدعم</li>
                    <li>إرسال رسائل تسويقية (بموافقتك)</li>
                    <li>الكشف عن الاحتيال ومنعه</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">4. مشاركة المعلومات والإفصاح عنها</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    لا نبيع أو نتاجر أو ننقل معلوماتك الشخصية لأطراف ثالثة إلا في الحالات التالية:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>بموافقتك الصريحة</li>
                    <li>للامتثال للالتزامات القانونية</li>
                    <li>لحماية حقوقنا ومنع الاحتيال</li>
                    <li>مع مقدمي خدمات موثوقين يساعدوننا في تشغيل موقعنا</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">5. أمن البيانات</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نطبق إجراءات أمنية تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. إلا أنه لا توجد طريقة نقل عبر الإنترنت أو تخزين إلكتروني آمنة بنسبة 100%.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">6. ملفات التعريف وتقنيات التتبع</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نستخدم ملفات التعريف وتقنيات تتبع مماثلة لتحسين تجربتك على موقعنا. يمكنك التحكم في إعدادات ملفات التعريف من خلال تفضيلات متصفحك.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">7. حقوقك</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    حسب مكان إقامتك، قد يكون لديك الحقوق التالية بخصوص معلوماتك الشخصية:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>الوصول إلى معلوماتك الشخصية</li>
                    <li>تصحيح المعلومات غير الدقيقة</li>
                    <li>حذف معلوماتك الشخصية</li>
                    <li>تقييد المعالجة</li>
                    <li>قابلية نقل البيانات</li>
                    <li>الاعتراض على المعالجة</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">8. خصوصية الأطفال</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    لا يُقصد بموقعنا الأطفال دون سن 13 عاماً. لا نجمع عن قصد معلومات شخصية من أطفال دون 13 عاماً.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">9. التغييرات على سياسة الخصوصية</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    قد نحدّث سياسة الخصوصية هذه من وقت لآخر. سنخبرك بأي تغييرات بنشر السياسة الجديدة على هذه الصفحة وتحديث تاريخ &quot;آخر تحديث&quot;.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">10. تواصل معنا</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر موقعنا الإلكتروني.
                  </p>
                </section>
              </div>
            ) : (
              <div className="space-y-8">
              <section id="introduction">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Qalaa ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.qalaaoliveoil.com (the "Site").
                </p>
              </section>

              <section id="information-collection">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-medium text-foreground mb-3">2.1 Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Contact us through our website</li>
                  <li>Make an inquiry about our products</li>
                  <li>Subscribe to our newsletter</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">2.2 Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We automatically collect certain information about your device and usage patterns, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                </ul>
              </section>

              <section id="information-use">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide, operate, and maintain our website</li>
                  <li>Process inquiries and orders</li>
                  <li>Improve, personalize, and expand our website</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>Communicate with you for customer service and support</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Find and prevent fraud</li>
                </ul>
              </section>

              <section id="information-sharing">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With trusted service providers who assist us in operating our website</li>
                </ul>
              </section>

              <section id="data-security">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </section>

              <section id="cookies">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">6. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section id="your-rights">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                </ul>
              </section>

              <section id="children-privacy">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                </p>
              </section>

              <section id="changes">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">9. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us through our website.
                </p>
              </section>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
