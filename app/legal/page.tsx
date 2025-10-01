import { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Legal Information - Qalaa | Privacy Policy, Terms of Service, Cookie Policy",
  description: "Read our Privacy Policy, Terms of Service, and Cookie Policy. Learn how we protect your data and use cookies on Qalaa olive oil website.",
  keywords: "privacy policy, terms of service, cookie policy, legal, Qalaa olive oil",
  openGraph: {
    title: "Legal Information - Qalaa",
    description: "Privacy Policy, Terms of Service, and Cookie Policy for Qalaa olive oil website",
    images: ["/qalaa-logo.png"],
  },
}

export default function LegalPage() {
  const breadcrumbItems = [
    { name: "Legal", url: "/legal" }
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        <div className="bg-white rounded-2xl shadow-lg mt-8 p-8">
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-8 text-center">
            Legal Information
          </h1>

          {/* Privacy Policy Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-semibold text-yellow-600 mb-6 border-b border-stone-200 pb-2">
              Privacy Policy
            </h2>

            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed mb-4">
                At Qalaa, we are committed to protecting your privacy and ensuring the security of your personal information.
                This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or make a purchase.
              </p>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">Information We Collect</h3>
              <p className="text-stone-700 leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you create an account, make a purchase,
                subscribe to our newsletter, or contact us for customer support. This may include:
              </p>
              <ul className="list-disc list-inside text-stone-700 mb-4 space-y-1">
                <li>Name and contact information</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information</li>
                <li>Account credentials</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">How We Use Your Information</h3>
              <p className="text-stone-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-stone-700 mb-4 space-y-1">
                <li>Process and fulfill your orders</li>
                <li>Provide customer support</li>
                <li>Send you important updates about your orders</li>
                <li>Improve our products and services</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">Data Security</h3>
              <p className="text-stone-700 leading-relaxed mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. This includes encryption of sensitive data and regular security assessments.
              </p>

              <p className="text-stone-600 text-sm mt-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </section>

          {/* Terms of Service Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-semibold text-yellow-600 mb-6 border-b border-stone-200 pb-2">
              Terms of Service
            </h2>

            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed mb-4">
                These Terms of Service govern your use of the Qalaa website and services. By accessing or using our website,
                you agree to be bound by these terms and conditions.
              </p>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">Use of Our Services</h3>
              <p className="text-stone-700 leading-relaxed mb-4">
                You may use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside text-stone-700 mb-4 space-y-1">
                <li>Use our services in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Use our services to transmit any harmful or malicious code</li>
                <li>Interfere with or disrupt our services or servers</li>
              </ul>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">Product Information</h3>
              <p className="text-stone-700 leading-relaxed mb-4">
                We strive to provide accurate product descriptions and pricing information. However, we do not warrant
                that product descriptions or other content are accurate, complete, reliable, current, or error-free.
              </p>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">Limitation of Liability</h3>
              <p className="text-stone-700 leading-relaxed mb-4">
                To the fullest extent permitted by applicable law, Qalaa shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising from your use of our services.
              </p>

              <p className="text-stone-600 text-sm mt-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </section>

          {/* Cookie Policy Section */}
          <section>
            <h2 className="text-3xl font-serif font-semibold text-yellow-600 mb-6 border-b border-stone-200 pb-2">
              Cookie Policy
            </h2>

            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed mb-4">
                This Cookie Policy explains how Qalaa uses cookies and similar technologies to improve your browsing
                experience on our website.
              </p>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">What Are Cookies</h3>
              <p className="text-stone-700 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device when you visit a website. They are widely
                used to make websites work more efficiently and provide a better user experience.
              </p>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">How We Use Cookies</h3>
              <p className="text-stone-700 leading-relaxed mb-4">
                We use cookies for the following purposes:
              </p>

              <h4 className="text-lg font-semibold text-stone-800 mb-2">Essential Cookies</h4>
              <p className="text-stone-700 leading-relaxed mb-3">
                These cookies are necessary for the website to function properly. They enable basic functionality
                such as page navigation, access to secure areas, and processing of orders.
              </p>

              <h4 className="text-lg font-semibold text-stone-800 mb-2">Analytics Cookies</h4>
              <p className="text-stone-700 leading-relaxed mb-3">
                These cookies help us understand how visitors interact with our website by collecting and reporting
                information anonymously. This helps us improve our website's performance.
              </p>

              <h4 className="text-lg font-semibold text-stone-800 mb-2">Marketing Cookies</h4>
              <p className="text-stone-700 leading-relaxed mb-3">
                These cookies are used to track visitors across websites to display relevant advertisements.
                We may use these cookies to show you products that might interest you based on your browsing behavior.
              </p>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">Managing Cookies</h3>
              <p className="text-stone-700 leading-relaxed mb-4">
                You can control and manage cookies in various ways. Please note that removing or blocking cookies
                may negatively impact your user experience and parts of our website may no longer be fully accessible.
              </p>

              <p className="text-stone-600 text-sm mt-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
