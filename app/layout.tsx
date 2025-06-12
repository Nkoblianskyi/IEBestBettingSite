import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ireland's Top Betting Sites - Trusted by Irish Players | IEBestBettingSite",
  description:
    "Expert-tested Irish betting sites. Compare bonuses, odds, and features. Licensed operators for Irish players. Updated daily.",
  keywords: "Irish betting sites, Ireland sports betting, GAA betting, Irish bookmakers",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
