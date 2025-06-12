"use client"

export default function ResponsibleGamblingClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal-500 to-charcoal-600 celtic-pattern pt-24">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-off-white mb-6">
            <span className="text-emerald-500">Responsible</span> Gambling
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your safety and wellbeing are our top priority. Learn how to gamble responsibly and get help when needed.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* What is Responsible Gambling */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">What is Responsible Gambling?</h2>
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="mb-4">
                Responsible gambling means betting in a way that is safe, controlled, and within your means. It involves
                understanding the risks, setting limits, and knowing when to stop. Gambling should always be treated as
                entertainment, not as a way to make money or solve financial problems.
              </p>
              <p className="mb-4">
                At its core, responsible gambling is about maintaining control over your betting activities and ensuring
                that gambling remains a fun, recreational activity rather than becoming a problem that affects your
                life, relationships, or finances.
              </p>
            </div>
          </section>

          {/* Warning Signs */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Warning Signs of Problem Gambling</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Behavioral Signs</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">•</span>
                    <span>Spending more time and money gambling than intended</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">•</span>
                    <span>Chasing losses with bigger bets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">•</span>
                    <span>Lying about gambling activities to family or friends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">•</span>
                    <span>Neglecting work, family, or social responsibilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">•</span>
                    <span>Borrowing money to gamble</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Emotional Signs</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">•</span>
                    <span>Feeling anxious or irritable when not gambling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">•</span>
                    <span>Using gambling to escape problems or negative emotions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">•</span>
                    <span>Feeling guilty or ashamed about gambling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">•</span>
                    <span>Mood swings related to wins and losses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">•</span>
                    <span>Thinking about gambling constantly</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Setting Limits */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Setting Limits and Staying in Control</h2>
            <div className="space-y-6">
              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Financial Limits</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Set a budget before you start gambling and stick to it</li>
                  <li>• Only gamble with money you can afford to lose</li>
                  <li>• Never gamble with money needed for essentials like rent, food, or bills</li>
                  <li>• Use deposit limits offered by betting sites</li>
                  <li>• Avoid chasing losses by betting more money</li>
                </ul>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Time Limits</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Set time limits for gambling sessions</li>
                  <li>• Take regular breaks during gambling</li>
                  <li>• Use session time limits and reality checks</li>
                  <li>• Don't gamble when tired, stressed, or under the influence</li>
                  <li>• Balance gambling with other activities and hobbies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tools and Resources */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Available Tools and Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Betting Site Tools</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Deposit limits (daily, weekly, monthly)</li>
                  <li>• Loss limits</li>
                  <li>• Session time limits</li>
                  <li>• Reality checks and pop-up reminders</li>
                  <li>• Self-exclusion options</li>
                  <li>• Account activity statements</li>
                </ul>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">External Support</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• GambleAware - Free support and advice</li>
                  <li>• GamCare - Counseling and support services</li>
                  <li>• Gamblers Anonymous Ireland - Peer support groups</li>
                  <li>• GamblingTherapy - Online counseling</li>
                  <li>• ROFUS - Irish responsible gambling initiative</li>
                  <li>• National Problem Gambling Clinic</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Getting Help */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Getting Help</h2>
            <div className="space-y-6">
              <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">If You Need Help</h3>
                <p className="text-gray-300 mb-4">
                  If you're concerned about your gambling or that of someone you know, help is available. Don't wait
                  until the problem gets worse - early intervention is key to successful recovery.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Reach out to family, friends, or healthcare professionals</li>
                  <li>• Contact specialized gambling support services</li>
                  <li>• Use self-exclusion tools immediately</li>
                  <li>• Consider professional counseling or therapy</li>
                  <li>• Join support groups with others facing similar challenges</li>
                </ul>
              </div>

              <div className="bg-charcoal-600/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Supporting Someone Else</h3>
                <p className="text-gray-300 mb-4">
                  If you're concerned about someone else's gambling, approach the situation with care and understanding.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Listen without judgment</li>
                  <li>• Encourage them to seek professional help</li>
                  <li>• Don't lend money or cover gambling debts</li>
                  <li>• Take care of your own wellbeing</li>
                  <li>• Consider family counseling or support groups</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Legal Framework */}
          <section className="bg-charcoal-500/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-500 mb-6">Legal Framework in Ireland</h2>
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="mb-4">
                Ireland has implemented comprehensive gambling regulations to protect players and promote responsible
                gambling. All licensed operators must provide responsible gambling tools and contribute to research,
                education, and treatment of gambling-related harm.
              </p>
              <p className="mb-4">
                The Irish government works closely with industry stakeholders and support organizations to ensure that
                gambling remains a safe and regulated activity. This includes mandatory age verification, advertising
                restrictions, and funding for problem gambling services.
              </p>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-emerald-500/20 to-orange-500/20 border border-emerald-500/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-off-white mb-4">Remember: Gambling Should Be Fun</h2>
          <p className="text-gray-300 mb-6">
            If gambling stops being enjoyable or starts causing problems in your life, it's time to seek help. You're
            not alone, and support is available.
          </p>
          <div className="text-center text-orange-400 font-bold text-xl">
            18+ Only | Play Responsibly | Seek Help if Needed
          </div>
        </div>
      </div>
    </div>
  )
}
