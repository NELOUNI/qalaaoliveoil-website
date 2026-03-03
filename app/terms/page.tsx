"use client"

import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"

export default function TermsOfServicePage() {
  const { language } = useLanguage()
  const isArabic = language === "ar"

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Content */}
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="prose prose-neutral max-w-none">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-8">
              {isArabic ? "شروط الخدمة" : "Terms of Service"}
            </h1>
            <p className="text-muted-foreground mb-8">{isArabic ? "آخر تحديث: فبراير 2025" : "Last updated: February 2025"}</p>

            {isArabic ? (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">1. قبول الشروط</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    بالوصول إلى موقع قلعة (www.qalaaoliveoil.com) واستخدامه، فإنك تقبل وتوافق على الالتزام بشروط وأحكام هذه الاتفاقية. إذا لم توافق على الالتزام بما سبق، يرجى عدم استخدام الخدمة.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">2. وصف الخدمة</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    تقدم قلعة معلومات عن منتجات وخدمات زيت الزيتون التونسي الفاخر. يعمل موقعنا كنافذة لعرض منتجاتنا، وتعريف الزبائن بعلامتنا وتراثنا.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">3. ترخيص الاستخدام</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    يُسمح لك بتحميل نسخة مؤقتة واحدة من المواد على موقع قلعة للعرض الشخصي غير التجاري المؤقت فقط. هذا منح ترخيص وليس نقل ملكية، وتحت هذا الترخيص لا يجوز لك:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>تعديل أو نسخ المواد</li>
                    <li>استخدام المواد لأي غرض تجاري أو عرض عام</li>
                    <li>محاولة الهندسة العكسية لأي برنامج على الموقع</li>
                    <li>إزالة أي حقوق نشر أو إشارات ملكية من المواد</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">4. حسابات المستخدمين</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    عند إنشاء حساب لدينا، يجب أن تقدم معلومات دقيقة وكاملة وحديثة في جميع الأوقات. أنت مسؤول عن حماية كلمة المرور وجميع الأنشطة التي تتم تحت حسابك.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">5. الاستخدامات المحظورة</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    لا يجوز لك استخدام موقعنا:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>لأي غرض غير قانوني أو لحث آخرين على ارتكاب أفعال غير قانونية</li>
                    <li>لمخالفة اللوائح أو القوانين المحلية أو الدولية</li>
                    <li>لانتهاك حقوقنا الملكية الفكرية أو حقوق الآخرين</li>
                    <li>لمضايقة أو إيذاء أو تشهير أو تمييز</li>
                    <li>لتقديم معلومات كاذبة أو مضللة</li>
                    <li>لرفع أو إرسال فيروسات أو أي كود ضار</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">6. المحتوى</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    يتيح موقعنا نشر ومشاركة محتوى معين. أنت مسؤول عن المحتوى الذي تنشره، بما في ذلك قانونيته وموثوقيته ومناسبته.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">7. حقوق الملكية الفكرية</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    باستثناء المحتوى الذي تملكه، تمتلك قلعة و/أو المرخِصون لها جميع الحقوق والمواد الواردة في هذا الموقع. يُمنح لك ترخيص محدود فقط لزيارة المحتوى.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">8. سياسة الخصوصية</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    خصوصيتك مهمة لنا. يرجى مراجعة سياسة الخصوصية، التي تحكم أيضاً استخدامك للموقع، لتفهم ممارساتنا.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">9. إخلاء المسؤولية</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    تُقدَّم المعلومات على هذا الموقع &quot;كما هي&quot;. إلى أقصى حد يسمح به القانون، قلعة:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>لا تقدم أي ضمانات أو تصريحات بخصوص الموقع ومحتوياته</li>
                    <li>لا تتحمل المسؤولية عن الأضرار الناشئة عن استخدامك للموقع أو المتصلة به</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">10. تحديد المسؤولية</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    لا تتحمل قلعة، ولا مديروها أو موظفوها أو شركاؤها، المسؤولية عن أي أضرار غير مباشرة أو عرضية أو تبعية أو عقابية، بما في ذلك فقدان الأرباح أو البيانات أو السمعة، الناتجة عن استخدامك للموقع.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">11. القانون الحاكم</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    تُفسَّر هذه الشروط وتُحكم بقوانين تونس. عدم إنفاذنا لأي حق أو حكم لن يُعتبر تنازلاً عن ذلك الحق.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">12. التغييرات على الشروط</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نحتفظ بالحق، وفق تقديرنا، بتعديل أو استبدال هذه الشروط في أي وقت. في حالة التعديل الجوهري، سنحاول إبلاغك قبل 30 يوماً على الأقل من دخول الشروط الجديدة حيز التنفيذ.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">13. معلومات التواصل</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا عبر موقعنا الإلكتروني.
                  </p>
                </section>
              </div>
            ) : (
              <div className="space-y-8">
              <section id="acceptance">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the Qalaa website (www.qalaaoliveoil.com), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section id="description">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Qalaa provides information about premium Tunisian olive oil products and services. Our website serves as a platform to showcase our products and provide information about our brand and heritage.
                </p>
              </section>

              <section id="use-license">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">3. Use License</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials on Qalaa's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section id="user-accounts">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">4. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
                </p>
              </section>

              <section id="prohibited-uses">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">5. Prohibited Uses</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may not use our website:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                </ul>
              </section>

              <section id="content">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">6. Content</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the website, including its legality, reliability, and appropriateness.
                </p>
              </section>

              <section id="intellectual-property">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">7. Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Other than the content you own, under these Terms, Qalaa and/or its licensors own all the rights and materials contained in this website. You are granted limited license only for purposes of viewing the material contained on this website.
                </p>
              </section>

              <section id="privacy">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">8. Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices.
                </p>
              </section>

              <section id="disclaimers">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">9. Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, Qalaa:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Excludes all representations and warranties relating to this website and its contents</li>
                  <li>Excludes all liability for damages arising out of or in connection with your use of this website</li>
                </ul>
              </section>

              <section id="limitation">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">10. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Qalaa, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the website.
                </p>
              </section>

              <section id="governing-law">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be interpreted and governed by the laws of Tunisia, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </section>

              <section id="changes">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">12. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us through our website.
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
