export interface BettingSite {
  name: string
  logo: string
  rating: number
  claimed: number
  bonus: string
  features: string[]
  cta: string
  disclaimer: string
  url: string
}

export const bettingSites: BettingSite[] = [
  {
    name: "BetVictor",
    logo: "/betvictor.png",
    rating: 5,
    claimed: 292891,
    bonus: "Bet €10 → Get €30 in Free Bets",
    features: ["Competitive Odds", "Cash Out", "Bet Builder"],
    cta: "Claim Bonus",
    disclaimer: "18+ | GambleAware.org | T&C Apply",
    url: "https://www.betvictor.com",
  },
  {
    name: "BoyleSports",
    logo: "/boyle.png",
    rating: 4.9,
    claimed: 290105,
    bonus: "Bet €10 Get €30 + €10 Casino Bonus",
    features: ["Irish Owned", "GAA Specials", "Local Support"],
    cta: "Claim Bonus",
    disclaimer: "18+ | GambleAware.org | T&C Apply",
    url: "https://www.boylesports.com",
  },
  {
    name: "Betiton",
    logo: "/betiton.png",
    rating: 4.8,
    claimed: 273892,
    bonus: "Bet €10 Get €50",
    features: ["Fast Payouts", "Live Betting", "Mobile UX"],
    cta: "Claim Bonus",
    disclaimer: "18+ | GambleAware.org | T&C Apply",
    url: "https://www.betiton.com",
  },
  {
    name: "Midnite",
    logo: "/mid.svg",
    rating: 4.9,
    claimed: 269423,
    bonus: "Bet €10 Get €20 + 50 Free Spins",
    features: ["Esports Focus", "Modern Interface", "Fast Withdrawals"],
    cta: "Claim Bonus",
    disclaimer: "18+ | GambleAware.org | T&C Apply",
    url: "https://www.midnite.com",
  },
  {
    name: "BetFred",
    logo: "/betfred.png",
    rating: 4.9,
    claimed: 265457,
    bonus: "Bet €10 → Get €50",
    features: ["Fast Payouts", "Best Odds", "Live Streaming"],
    cta: "Claim Bonus",
    disclaimer: "18+ | GambleAware.org | T&C Apply",
    url: "https://www.betfred.com",
  },
  {
    name: "Spreadex Sports",
    logo: "/spread.png",
    rating: 4.8,
    claimed: 255845,
    bonus: "Join & get £60 in Free Bets",
    features: ["Spread Betting", "Fixed Odds", "Sports Focus"],
    cta: "Claim Bonus",
    disclaimer: "18+ | GambleAware.org | T&C Apply",
    url: "https://www.spreadex.com",
  },
  {
    name: "Mr.Play",
    logo: "/mrplay.png",
    rating: 4.7,
    claimed: 247120,
    bonus: "Bet €5 get €10",
    features: ["Casino & Sports", "Irish Market", "Simple UX"],
    cta: "Claim Bonus",
    disclaimer: "18+ | GambleAware.org | T&C Apply",
    url: "https://www.mrplay.com",
  },
]
