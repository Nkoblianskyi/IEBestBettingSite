"use client"

export default function AboutClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal-500 to-charcoal-600 celtic-pattern pt-24">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-off-white mb-6">
            About <span className="text-emerald-500">IEBestBettingSite</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ireland's most trusted source for betting site reviews and recommendations.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Our Mission */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Our Mission</h2>
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="mb-4">
                We exist to help Irish players find safe, reliable, and rewarding betting experiences. Our mission is to
                provide transparent, unbiased reviews of betting sites while promoting responsible gambling practices
                throughout Ireland.
              </p>
              <p className="mb-4">
                Every recommendation we make is based on rigorous testing and evaluation. We believe that Irish players
                deserve access to the best betting sites available, with clear information about bonuses, features, and
                potential risks.
              </p>
              <p>
                Our commitment extends beyond just reviews - we're dedicated to educating players about responsible
                gambling and ensuring that the sites we recommend meet the highest standards of player protection and
                fair play.
              </p>
            </div>
          </section>

          {/* Why Trust Us */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Why Irish Players Trust Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-charcoal-600/50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">Independent Reviews</h3>
                  <p className="text-gray-300">
                    We maintain complete editorial independence. Our reviews are never influenced by commercial
                    relationships or advertising agreements.
                  </p>
                </div>
                <div className="bg-charcoal-600/50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">Irish Focus</h3>
                  <p className="text-gray-300">
                    We understand the unique needs of Irish players, from GAA betting to local payment methods and
                    regulatory requirements.
                  </p>
                </div>
                <div className="bg-charcoal-600/50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">Regular Updates</h3>
                  <p className="text-gray-300">
                    Our reviews are updated regularly to reflect changes in bonuses, features, and site performance.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-charcoal-600/50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">Transparent Methodology</h3>
                  <p className="text-gray-300">
                    We clearly explain how we test and evaluate betting sites, so you know exactly what our ratings
                    mean.
                  </p>
                </div>
                <div className="bg-charcoal-600/50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">Player Safety First</h3>
                  <p className="text-gray-300">
                    We only recommend licensed, regulated sites that demonstrate a commitment to responsible gambling.
                  </p>
                </div>
                <div className="bg-charcoal-600/50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">Proven Track Record</h3>
                  <p className="text-gray-300">
                    Over 50,000 Irish players have used our recommendations to find their perfect betting site.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Selection Process */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">How We Select Betting Sites</h2>
            <div className="space-y-6">
              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">1. Licensing and Regulation</h3>
                <p className="text-gray-300">
                  Every site must hold valid licenses from reputable gambling authorities. We verify regulatory
                  compliance and check for any history of violations or sanctions.
                </p>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">2. Security and Fair Play</h3>
                <p className="text-gray-300">
                  We examine security measures, encryption protocols, and fair play certifications. Sites must
                  demonstrate robust protection of player data and funds.
                </p>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">3. Payment Methods and Speed</h3>
                <p className="text-gray-300">
                  We test deposit and withdrawal processes, checking for Irish-friendly payment methods, processing
                  times, and any hidden fees or restrictions.
                </p>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">4. Bonus Terms and Value</h3>
                <p className="text-gray-300">
                  We analyze bonus offers, wagering requirements, and terms and conditions to determine real value for
                  Irish players. Misleading promotions are flagged and penalized.
                </p>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">5. Sports Coverage and Odds</h3>
                <p className="text-gray-300">
                  We evaluate sports coverage, particularly GAA and other sports popular in Ireland, along with
                  competitive odds and betting market variety.
                </p>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">6. User Experience</h3>
                <p className="text-gray-300">
                  We test website performance, mobile compatibility, navigation, and overall user experience across
                  different devices and connection speeds.
                </p>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">7. Customer Support</h3>
                <p className="text-gray-300">
                  We evaluate customer support quality, response times, available contact methods, and the helpfulness
                  of support staff in resolving issues.
                </p>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">8. Responsible Gambling</h3>
                <p className="text-gray-300">
                  We assess the availability and effectiveness of responsible gambling tools, including deposit limits,
                  self-exclusion options, and links to support organizations.
                </p>
              </div>
            </div>
          </section>

          {/* Our Standards */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Our Standards</h2>
            <div className="space-y-6">
              <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">What We Never Compromise On</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">✓</span>
                    <span>Valid licensing from recognized gambling authorities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">✓</span>
                    <span>Strong responsible gambling measures and player protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">✓</span>
                    <span>Transparent terms and conditions without hidden clauses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">✓</span>
                    <span>Secure payment processing and data protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">✓</span>
                    <span>Fair bonus terms with reasonable wagering requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">✓</span>
                    <span>Responsive customer support and dispute resolution</span>
                  </li>
                </ul>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Continuous Monitoring</h3>
                <p className="text-gray-300 mb-4">
                  Our work doesn't stop after the initial review. We continuously monitor the sites we recommend to
                  ensure they maintain our high standards.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Regular re-evaluation of all recommended sites</li>
                  <li>• Monitoring of player feedback and complaints</li>
                  <li>• Tracking of bonus changes and new promotions</li>
                  <li>• Assessment of any regulatory actions or license changes</li>
                  <li>• Updates to reflect changes in Irish gambling laws</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Our Commitment */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Our Commitment to Irish Players</h2>
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="mb-4">
                We understand that choosing a betting site is a decision that affects your entertainment, your money,
                and potentially your wellbeing. That's why we take our responsibility seriously and maintain the highest
                standards in everything we do.
              </p>
              <p className="mb-4">
                Our reviews are designed to give you all the information you need to make an informed decision. We
                highlight both the positives and negatives of each site, ensuring you have a complete picture before you
                sign up.
              </p>
              <p>
                We're committed to promoting safe, responsible gambling throughout Ireland. Every site we recommend must
                demonstrate a genuine commitment to player welfare and responsible gambling practices.
              </p>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-emerald-500/20 to-orange-500/20 border border-emerald-500/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-off-white mb-4">Trust in Every Recommendation</h2>
          <p className="text-gray-300 mb-6">
            When you see our seal of approval, you can bet with confidence knowing that site has passed our rigorous
            testing process.
          </p>
          <a
            href="/"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View Our Top Recommendations
          </a>
        </div>
      </div>
    </div>
  )
}
