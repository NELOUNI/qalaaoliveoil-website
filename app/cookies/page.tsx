"use client"

import { Footer } from "@/components/footer"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function CookiePolicyPage() {
  const { language } = useLanguage()
  const isArabic = language === "ar"

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Content */}
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="prose prose-neutral max-w-none">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-8">
              {isArabic ? "سياسة ملفات تعريف الارتباط" : "Cookie Policy"}
            </h1>
            <p className="text-muted-foreground mb-8">{isArabic ? "آخر تحديث: فبراير 2025" : "Last updated: February 2025"}</p>

            {isArabic ? (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">1. ما هي ملفات تعريف الارتباط</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    ملفات تعريف الارتباط هي ملفات نصية صغيرة تُخزَّن على جهازك عند زيارة موقع ويب. تُستخدم على نطاق واسع لجعل المواقع تعمل بكفاءة أكبر وتوفير تجربة مستخدم أفضل. ويمكن أن تساعد أيضاً في عرض معلومات وإعلانات ذات صلة.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">2. كيف نستخدم ملفات التعريف</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    تستخدم قلعة ملفات التعريف للأغراض التالية:
                  </p>
                  <h3 className="text-xl font-medium text-foreground mb-3">2.1 ملفات أساسية</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    هذه الملفات ضرورية لتشغيل الموقع بشكل صحيح. تتيح وظائف أساسية مثل التنقل بين الصفحات والوصول إلى المناطق الآمنة ومعالجة الطلبات. بدونها، لن يعمل موقعنا بشكل صحيح.
                  </p>
                  <h3 className="text-xl font-medium text-foreground mb-3">2.2 ملفات تحليلية</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    تساعدنا هذه الملفات في فهم كيفية تفاعل الزوار مع موقعنا عبر جمع المعلومات والإبلاغ عنها بشكل مجهول. يساعد ذلك في تحسين أداء الموقع وتجربة المستخدم.
                  </p>
                  <h3 className="text-xl font-medium text-foreground mb-3">2.3 ملفات تسويقية</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    تُستخدم لتتبع الزوار عبر المواقع لعرض إعلانات ذات صلة. قد نستخدمها لعرض منتجات قد تهمك حسب سلوك التصفح. تُفعَّل هذه الملفات فقط بموافقتك.
                  </p>
                  <h3 className="text-xl font-medium text-foreground mb-3">2.4 ملفات تفضيلات</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    تتذكر هذه الملفات تفضيلاتك وإعداداتك، مثل لغة العرض، لتحسين تجربتك على موقعنا.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">3. ملفات الطرف الثالث</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    قد نستخدم أيضاً خدمات جهات خارجية تضع ملفات تعريف على جهازك، منها:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Google Analytics لتحليلات الموقع</li>
                    <li>منصات التواصل الاجتماعي لأزرار المشاركة</li>
                    <li>معالجات الدفع للمعاملات الآمنة</li>
                    <li>أدوات خدمة العملاء</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">4. إدارة ملفات التعريف</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    يمكنك التحكم في ملفات التعريف وإدارتها بطرق متعددة. لاحظ أن حذفها أو حظرها قد يؤثر سلباً على تجربتك وقد يصبح بعض أجزاء الموقع غير متاحة بالكامل.
                  </p>
                  <h3 className="text-xl font-medium text-foreground mb-3">4.1 إعدادات المتصفح</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    يمكنك التحكم في ملفات التعريف من إعدادات المتصفح. تتيح معظم المتصفحات:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                    <li>عرض الملفات المخزنة على جهازك</li>
                    <li>حذف جميع الملفات أو ملفات محددة</li>
                    <li>حظر جميع الملفات من موقع معين</li>
                    <li>حظر جميع الملفات من كل المواقع</li>
                    <li>تحديد تفضيلات قبول ملفات التعريف</li>
                  </ul>
                  <h3 className="text-xl font-medium text-foreground mb-3">4.2 أداة الموافقة</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    عند زيارتك الأولى لموقعنا، ستظهر نافذة موافقة تتيح لك القبول أو تخصيص تفضيلات ملفات التعريف. يمكنك تغيير هذه التفضيلات في أي وقت من خلال الرابط في تذييل الموقع.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">5. أنواع الملفات التي نستخدمها</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-stone-300">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-stone-300 px-4 py-2 text-left">اسم الملف</th>
                          <th className="border border-stone-300 px-4 py-2 text-left">الغرض</th>
                          <th className="border border-stone-300 px-4 py-2 text-left">النوع</th>
                          <th className="border border-stone-300 px-4 py-2 text-left">المدة</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-stone-300 px-4 py-2 latin-numerals" lang="en" dir="ltr">_ga</td>
                          <td className="border border-stone-300 px-4 py-2">تتبع Google Analytics</td>
                          <td className="border border-stone-300 px-4 py-2">تحليلي</td>
                          <td className="border border-stone-300 px-4 py-2">سنتان</td>
                        </tr>
                        <tr className="bg-background">
                          <td className="border border-stone-300 px-4 py-2 latin-numerals" lang="en" dir="ltr">_gid</td>
                          <td className="border border-stone-300 px-4 py-2">تتبع جلسة Google Analytics</td>
                          <td className="border border-stone-300 px-4 py-2">تحليلي</td>
                          <td className="border border-stone-300 px-4 py-2">24 ساعة</td>
                        </tr>
                        <tr>
                          <td className="border border-stone-300 px-4 py-2 latin-numerals" lang="en" dir="ltr">cart_session</td>
                          <td className="border border-stone-300 px-4 py-2">وظيفة سلة التسوق</td>
                          <td className="border border-stone-300 px-4 py-2">أساسي</td>
                          <td className="border border-stone-300 px-4 py-2">الجلسة</td>
                        </tr>
                        <tr className="bg-background">
                          <td className="border border-stone-300 px-4 py-2 latin-numerals" lang="en" dir="ltr">user_preferences</td>
                          <td className="border border-stone-300 px-4 py-2">إعدادات وتفضيلات المستخدم</td>
                          <td className="border border-stone-300 px-4 py-2">تفضيل</td>
                          <td className="border border-stone-300 px-4 py-2">سنة</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">6. تواصل معنا</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    إذا كان لديك أي أسئلة حول استخدامنا لملفات التعريف أو هذه السياسة، يرجى التواصل معنا عبر موقعنا الإلكتروني.
                  </p>
                </section>
              </div>
            ) : (
              <div className="space-y-8">
              <section id="what-are-cookies">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">1. What Are Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience. They can also help to show you relevant information and advertisements.
                </p>
              </section>

              <section id="how-we-use-cookies">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">2. How We Use Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Qalaa uses cookies for the following purposes:
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">2.1 Essential Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functionality such as page navigation, access to secure areas, and processing of orders. Without these cookies, our website would not work correctly.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">2.2 Analytics Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">2.3 Marketing Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These cookies are used to track visitors across websites to display relevant advertisements. We may use these cookies to show you products that might interest you based on your browsing behavior. These cookies are only set with your consent.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">2.4 Preference Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies remember your preferences and settings, such as language preferences or display options, to enhance your experience on our website.
                </p>
              </section>

              <section id="third-party-cookies">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">3. Third-Party Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may also use third-party services that set cookies on your device. These include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing buttons</li>
                  <li>Payment processors for secure transactions</li>
                  <li>Customer support tools for better service</li>
                </ul>
              </section>

              <section id="managing-cookies">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">4. Managing Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You can control and manage cookies in various ways. Please note that removing or blocking cookies may negatively impact your user experience and parts of our website may no longer be fully accessible.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">4.1 Browser Settings</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You can control cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>View what cookies are stored on your device</li>
                  <li>Delete all or specific cookies</li>
                  <li>Block all cookies from a specific site</li>
                  <li>Block all cookies from all sites</li>
                  <li>Set preferences for when cookies should be accepted</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">4.2 Cookie Consent Tool</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you first visit our website, you will see a cookie consent banner that allows you to accept or customize your cookie preferences. You can change these preferences at any time by clicking on the cookie settings link in our website footer.
                </p>
              </section>

              <section id="types-of-cookies">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">5. Types of Cookies We Use</h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-stone-300">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-stone-300 px-4 py-2 text-left">Cookie Name</th>
                        <th className="border border-stone-300 px-4 py-2 text-left">Purpose</th>
                        <th className="border border-stone-300 px-4 py-2 text-left">Type</th>
                        <th className="border border-stone-300 px-4 py-2 text-left">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-stone-300 px-4 py-2">_ga</td>
                        <td className="border border-stone-300 px-4 py-2">Google Analytics tracking</td>
                        <td className="border border-stone-300 px-4 py-2">Analytics</td>
                        <td className="border border-stone-300 px-4 py-2">2 years</td>
                      </tr>
                      <tr className="bg-background">
                        <td className="border border-stone-300 px-4 py-2">_gid</td>
                        <td className="border border-stone-300 px-4 py-2">Google Analytics session tracking</td>
                        <td className="border border-stone-300 px-4 py-2">Analytics</td>
                        <td className="border border-stone-300 px-4 py-2">24 hours</td>
                      </tr>
                      <tr>
                        <td className="border border-stone-300 px-4 py-2">cart_session</td>
                        <td className="border border-stone-300 px-4 py-2">Shopping cart functionality</td>
                        <td className="border border-stone-300 px-4 py-2">Essential</td>
                        <td className="border border-stone-300 px-4 py-2">Session</td>
                      </tr>
                      <tr className="bg-background">
                        <td className="border border-stone-300 px-4 py-2">user_preferences</td>
                        <td className="border border-stone-300 px-4 py-2">User settings and preferences</td>
                        <td className="border border-stone-300 px-4 py-2">Preference</td>
                        <td className="border border-stone-300 px-4 py-2">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">6. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us through our website.
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
