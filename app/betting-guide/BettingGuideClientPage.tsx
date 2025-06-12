"use client"

export default function BettingGuideClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal-500 to-charcoal-600 celtic-pattern pt-24">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-off-white mb-6">
            Irish <span className="text-emerald-500">Sports Betting</span> Guide
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about sports betting in Ireland - from GAA to international sports
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* History Section */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">History of Sports Betting in Ireland</h2>
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="mb-4">
                Sports betting in Ireland has a rich history dating back centuries. From informal wagers on horse racing
                to the modern regulated online betting industry, Irish players have always had a passion for sports
                betting.
              </p>
              <p className="mb-4">
                The Irish government has worked to create a safe and regulated environment for sports betting, with
                licensing requirements ensuring player protection and fair play. Today, Irish players can enjoy betting
                on a wide variety of sports through licensed operators.
              </p>
              <p>
                The introduction of online betting has revolutionized the industry, making it easier than ever for Irish
                players to place bets on their favorite sports from the comfort of their homes.
              </p>
            </div>
          </section>

          {/* Popular Sports Section */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Popular Sports for Betting in Ireland</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-charcoal-600/50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">🏐 GAA (Gaelic Sports)</h3>
                  <p className="text-gray-300">
                    Hurling and Gaelic football are uniquely Irish sports with passionate followings and exciting
                    betting opportunities.
                  </p>
                </div>
                <div className="bg-charcoal-600/50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">⚽ Football (Soccer)</h3>
                  <p className="text-gray-300">
                    Premier League, Champions League, and international competitions are extremely popular among Irish
                    bettors.
                  </p>
                </div>
                <div className="bg-charcoal-600/50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">🏉 Rugby</h3>
                  <p className="text-gray-300">
                    Six Nations, World Cup, and provincial competitions offer great betting value for Irish rugby fans.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-charcoal-600/50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">🐎 Horse Racing</h3>
                  <p className="text-gray-300">
                    Ireland's rich horse racing tradition makes it one of the most popular betting sports in the
                    country.
                  </p>
                </div>
                <div className="bg-charcoal-600/50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">🎮 Esports</h3>
                  <p className="text-gray-300">
                    Growing rapidly among younger Irish bettors, with major tournaments offering exciting betting
                    opportunities.
                  </p>
                </div>
                <div className="bg-charcoal-600/50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">🏀 Other Sports</h3>
                  <p className="text-gray-300">
                    Basketball, tennis, golf, and American sports also have dedicated followings among Irish bettors.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Odds Section */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">How to Read Irish Betting Odds</h2>
            <div className="space-y-6">
              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Decimal Odds (Most Common in Ireland)</h3>
                <p className="text-gray-300 mb-4">
                  Decimal odds show the total return for every €1 wagered, including your stake.
                </p>
                <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg p-4">
                  <p className="text-emerald-400 font-mono">
                    Example: Odds of 2.50 means a €10 bet returns €25 (€15 profit + €10 stake)
                  </p>
                </div>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Fractional Odds</h3>
                <p className="text-gray-300 mb-4">Traditional format showing profit relative to stake.</p>
                <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg p-4">
                  <p className="text-emerald-400 font-mono">Example: 3/2 odds means €3 profit for every €2 wagered</p>
                </div>
              </div>
            </div>
          </section>

          {/* Bet Types Section */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Types of Bets</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-charcoal-600/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-orange-500 mb-2">Single Bet</h3>
                  <p className="text-gray-300">One selection on one event. Simple and straightforward.</p>
                </div>
                <div className="bg-charcoal-600/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-orange-500 mb-2">Accumulator</h3>
                  <p className="text-gray-300">Multiple selections combined. All must win for the bet to pay out.</p>
                </div>
                <div className="bg-charcoal-600/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-orange-500 mb-2">Each Way</h3>
                  <p className="text-gray-300">Two bets in one - backing a selection to win and to place.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-charcoal-600/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-orange-500 mb-2">System Bet</h3>
                  <p className="text-gray-300">Combination of accumulators covering different outcomes.</p>
                </div>
                <div className="bg-charcoal-600/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-orange-500 mb-2">Live Betting</h3>
                  <p className="text-gray-300">Betting on events as they happen in real-time.</p>
                </div>
                <div className="bg-charcoal-600/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-orange-500 mb-2">Bet Builder</h3>
                  <p className="text-gray-300">Create custom bets by combining multiple markets from the same event.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Responsible Betting Section */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Tips for Responsible Betting</h2>
            <div className="space-y-6">
              <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Golden Rules</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">✓</span>
                    <span>Never bet more than you can afford to lose</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">✓</span>
                    <span>Set time and money limits before you start</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">✓</span>
                    <span>Never chase losses with bigger bets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">✓</span>
                    <span>Take regular breaks from betting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">✓</span>
                    <span>Seek help if betting becomes a problem</span>
                  </li>
                </ul>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Available Support</h3>
                <p className="text-gray-300 mb-4">If you're concerned about your gambling habits, help is available:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • <strong className="text-emerald-500">GambleAware:</strong> Free support and advice
                  </li>
                  <li>
                    • <strong className="text-emerald-500">GamCare:</strong> Counseling and support services
                  </li>
                  <li>
                    • <strong className="text-emerald-500">Gamblers Anonymous Ireland:</strong> Peer support groups
                  </li>
                  <li>
                    • <strong className="text-emerald-500">ROFUS:</strong> Irish responsible gambling initiative
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-emerald-500/20 to-orange-500/20 border border-emerald-500/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-off-white mb-4">Ready to Start Betting Responsibly?</h2>
          <p className="text-gray-300 mb-6">
            Check out our recommended Irish betting sites with the best bonuses and features.
          </p>
          <a
            href="/"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View Top Irish Betting Sites
          </a>
        </div>
      </div>
    </div>
  )
}
