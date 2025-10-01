import { DevelopmentBanner } from "@/components/development-banner"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function CookiePolicyPage() {
  return (
    <>
      <DevelopmentBanner />
      <main className="min-h-screen bg-stone-50">
        {/* Content */}
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="prose prose-stone max-w-none">
            <h1 className="text-4xl font-serif font-bold text-stone-900 mb-8">Cookie Policy</h1>
            <p className="text-stone-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8">
              <section id="what-are-cookies">
                <h2 className="text-2xl font-serif font-semibold text-stone-900 mb-4">1. What Are Cookies</h2>
                <p className="text-stone-700 leading-relaxed">
                  Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience. They can also help to show you relevant information and advertisements.
                </p>
              </section>

              <section id="how-we-use-cookies">
                <h2 className="text-2xl font-serif font-semibold text-stone-900 mb-4">2. How We Use Cookies</h2>
                <p className="text-stone-700 leading-relaxed mb-4">
                  Qalaa uses cookies for the following purposes:
                </p>

                <h3 className="text-xl font-medium text-stone-800 mb-3">2.1 Essential Cookies</h3>
                <p className="text-stone-700 leading-relaxed mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functionality such as page navigation, access to secure areas, and processing of orders. Without these cookies, our website would not work correctly.
                </p>

                <h3 className="text-xl font-medium text-stone-800 mb-3">2.2 Analytics Cookies</h3>
                <p className="text-stone-700 leading-relaxed mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.
                </p>

                <h3 className="text-xl font-medium text-stone-800 mb-3">2.3 Marketing Cookies</h3>
                <p className="text-stone-700 leading-relaxed mb-4">
                  These cookies are used to track visitors across websites to display relevant advertisements. We may use these cookies to show you products that might interest you based on your browsing behavior. These cookies are only set with your consent.
                </p>

                <h3 className="text-xl font-medium text-stone-800 mb-3">2.4 Preference Cookies</h3>
                <p className="text-stone-700 leading-relaxed">
                  These cookies remember your preferences and settings, such as language preferences or display options, to enhance your experience on our website.
                </p>
              </section>

              <section id="third-party-cookies">
                <h2 className="text-2xl font-serif font-semibold text-stone-900 mb-4">3. Third-Party Cookies</h2>
                <p className="text-stone-700 leading-relaxed mb-4">
                  We may also use third-party services that set cookies on your device. These include:
                </p>
                <ul className="list-disc list-inside text-stone-700 space-y-2">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing buttons</li>
                  <li>Payment processors for secure transactions</li>
                  <li>Customer support tools for better service</li>
                </ul>
              </section>

              <section id="managing-cookies">
                <h2 className="text-2xl font-serif font-semibold text-stone-900 mb-4">4. Managing Cookies</h2>
                <p className="text-stone-700 leading-relaxed mb-4">
                  You can control and manage cookies in various ways. Please note that removing or blocking cookies may negatively impact your user experience and parts of our website may no longer be fully accessible.
                </p>

                <h3 className="text-xl font-medium text-stone-800 mb-3">4.1 Browser Settings</h3>
                <p className="text-stone-700 leading-relaxed mb-4">
                  You can control cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc list-inside text-stone-700 space-y-2 mb-6">
                  <li>View what cookies are stored on your device</li>
                  <li>Delete all or specific cookies</li>
                  <li>Block all cookies from a specific site</li>
                  <li>Block all cookies from all sites</li>
                  <li>Set preferences for when cookies should be accepted</li>
                </ul>

                <h3 className="text-xl font-medium text-stone-800 mb-3">4.2 Cookie Consent Tool</h3>
                <p className="text-stone-700 leading-relaxed">
                  When you first visit our website, you will see a cookie consent banner that allows you to accept or customize your cookie preferences. You can change these preferences at any time by clicking on the cookie settings link in our website footer.
                </p>
              </section>

              <section id="types-of-cookies">
                <h2 className="text-2xl font-serif font-semibold text-stone-900 mb-4">5. Types of Cookies We Use</h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-stone-300">
                    <thead>
                      <tr className="bg-stone-100">
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
                      <tr className="bg-stone-50">
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
                      <tr className="bg-stone-50">
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
                <h2 className="text-2xl font-serif font-semibold text-stone-900 mb-4">6. Contact Us</h2>
                <p className="text-stone-700 leading-relaxed">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="mt-4 p-4 bg-stone-100 rounded-lg">
                  <p className="text-stone-900 font-medium">Qalaa Olive Oil</p>
                  <p className="text-stone-600">Email: info@qalaaoliveoil.com</p>
                  <p className="text-stone-600">Phone: Contact us through our website</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
