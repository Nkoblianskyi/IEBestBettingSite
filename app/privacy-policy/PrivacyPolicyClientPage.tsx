"use client"

export default function PrivacyPolicyClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal-500 to-charcoal-600 celtic-pattern pt-24">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-off-white mb-6">
            <span className="text-emerald-500">Privacy</span> Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            How we collect, use, and protect your personal information
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Introduction */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Introduction</h2>
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="mb-4">
                At IEBestBettingSite, we are committed to protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website.
              </p>
              <p className="mb-4">
                By using our website, you consent to the data practices described in this policy. If you do not agree
                with the practices described in this policy, please do not use our website.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Information We Collect</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Information You Provide</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Contact information when you reach out to us</li>
                  <li>• Feedback and comments you submit</li>
                  <li>• Newsletter subscription details</li>
                  <li>• Survey responses</li>
                </ul>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Automatically Collected Information</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• IP address and location data</li>
                  <li>• Browser type and version</li>
                  <li>• Device information</li>
                  <li>• Pages visited and time spent</li>
                  <li>• Referring websites</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">How We Use Your Information</h2>
            <div className="space-y-6">
              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Website Operation and Improvement</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Provide and maintain our website services</li>
                  <li>• Improve website functionality and user experience</li>
                  <li>• Analyze website usage and performance</li>
                  <li>• Troubleshoot technical issues</li>
                </ul>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Communication</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Respond to your inquiries and requests</li>
                  <li>• Send newsletters and updates (with your consent)</li>
                  <li>• Provide customer support</li>
                  <li>• Send important notices about our services</li>
                </ul>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Legal and Security</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Comply with legal obligations</li>
                  <li>• Protect against fraud and abuse</li>
                  <li>• Enforce our terms of service</li>
                  <li>• Protect the rights and safety of our users</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">How We Share Your Information</h2>
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except in the following circumstances:
              </p>
              <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">When We May Share Information</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• With service providers who help us operate our website</li>
                  <li>• When required by law or legal process</li>
                  <li>• To protect our rights, property, or safety</li>
                  <li>• In connection with a business transfer or merger</li>
                  <li>• With your explicit consent</li>
                </ul>
              </div>
              <p>
                All third-party service providers are required to maintain the confidentiality of your information and
                are prohibited from using it for any other purpose.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Data Security</h2>
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-charcoal-600/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-orange-500 mb-3">Technical Measures</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• SSL encryption for data transmission</li>
                    <li>• Secure server infrastructure</li>
                    <li>• Regular security updates</li>
                    <li>• Access controls and authentication</li>
                  </ul>
                </div>
                <div className="bg-charcoal-600/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-orange-500 mb-3">Organizational Measures</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Limited access to personal data</li>
                    <li>• Staff training on data protection</li>
                    <li>• Regular security assessments</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Your Rights</h2>
            <div className="space-y-6">
              <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-emerald-500 mb-4">Under GDPR, You Have the Right To:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Access your personal data</li>
                  <li>• Rectify inaccurate personal data</li>
                  <li>• Erase your personal data</li>
                  <li>• Restrict processing of your personal data</li>
                  <li>• Data portability</li>
                  <li>• Object to processing</li>
                  <li>• Withdraw consent at any time</li>
                </ul>
              </div>
              <p className="text-gray-300">
                To exercise any of these rights, please contact us using the information provided at the end of this
                policy.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Data Retention</h2>
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              <p>
                When we no longer need your personal information, we will securely delete or anonymize it in accordance
                with our data retention policies.
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Changes to This Privacy Policy</h2>
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                legal requirements, or other factors.
              </p>
              <p>
                When we make material changes, we will notify you by updating the "Last Updated" date at the bottom of
                this policy and, where appropriate, provide additional notice.
              </p>
            </div>
          </section>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-16 bg-gradient-to-r from-emerald-500/20 to-orange-500/20 border border-emerald-500/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-off-white mb-4">Contact Us About Privacy</h2>
          <p className="text-gray-300 mb-6">
            If you have any questions about this Privacy Policy or our data practices, please contact us.
          </p>
          <p className="text-sm text-gray-400">Last Updated: 2025</p>
        </div>
      </div>
    </div>
  )
}
