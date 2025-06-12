"use client"

export default function CookiePolicyClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal-500 to-charcoal-600 celtic-pattern pt-24">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-off-white mb-6">
            <span className="text-emerald-500">Cookie</span> Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            How we use cookies to improve your experience on IEBestBettingSite
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* What are Cookies */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">What are Cookies?</h2>
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                They are widely used to make websites work more efficiently and to provide information to website
                owners.
              </p>
              <p className="mb-4">
                Cookies allow websites to remember your preferences, login status, and other information that makes your
                browsing experience more convenient and personalized.
              </p>
            </div>
          </section>

          {/* How We Use Cookies */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">How We Use Cookies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Essential Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functions like
                  page navigation and access to secure areas of the website.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Session management</li>
                  <li>• Security features</li>
                  <li>• Basic website functionality</li>
                </ul>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Analytics Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting
                  information anonymously.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Page views and traffic sources</li>
                  <li>• User behavior patterns</li>
                  <li>• Website performance metrics</li>
                </ul>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Preference Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies remember your preferences and settings to provide a more personalized experience.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Language preferences</li>
                  <li>• Display settings</li>
                  <li>• User interface customizations</li>
                </ul>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Marketing Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies track your browsing habits to show you relevant advertisements and measure the
                  effectiveness of our marketing campaigns.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Targeted advertising</li>
                  <li>• Campaign effectiveness</li>
                  <li>• Social media integration</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Managing Your Cookie Preferences</h2>
            <div className="space-y-6">
              <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Browser Settings</h3>
                <p className="text-gray-300 mb-4">
                  You can control and manage cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• View what cookies are stored on your device</li>
                  <li>• Delete cookies individually or all at once</li>
                  <li>• Block cookies from specific websites</li>
                  <li>• Block all cookies from being set</li>
                  <li>• Delete all cookies when you close your browser</li>
                </ul>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Our Cookie Banner</h3>
                <p className="text-gray-300">
                  When you first visit our website, you'll see a cookie banner that allows you to accept or decline
                  non-essential cookies. You can change your preferences at any time by clearing your browser cookies
                  and revisiting our site.
                </p>
              </div>
            </div>
          </section>

          {/* Third Party Cookies */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Third-Party Cookies</h2>
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="mb-4">
                Our website may contain links to other websites and may include third-party content. These third parties
                may also set cookies on your device. We do not control these third-party cookies.
              </p>
              <p className="mb-4">Common third-party services that may set cookies include:</p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li>• Google Analytics for website analytics</li>
                <li>• Social media platforms for sharing content</li>
                <li>• Advertising networks for targeted ads</li>
                <li>• Payment processors for secure transactions</li>
              </ul>
              <p>
                We recommend reviewing the privacy policies of these third-party services to understand how they use
                cookies.
              </p>
            </div>
          </section>

          {/* Updates to Policy */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Updates to This Policy</h2>
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons.
              </p>
              <p>
                When we make changes, we will update the "Last Updated" date at the bottom of this policy. We encourage
                you to review this policy periodically to stay informed about how we use cookies.
              </p>
            </div>
          </section>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-16 bg-gradient-to-r from-emerald-500/20 to-orange-500/20 border border-emerald-500/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-off-white mb-4">Questions About Our Cookie Policy?</h2>
          <p className="text-gray-300 mb-6">
            If you have any questions about how we use cookies, please review our Privacy Policy or contact us.
          </p>
          <p className="text-sm text-gray-400">Last Updated: 2025</p>
        </div>
      </div>
    </div>
  )
}
