import type { Metadata } from "next"
import BettingGuideClientPage from "./BettingGuideClientPage"

export const metadata: Metadata = {
  title: "Irish Sports Betting Guide - Complete Guide for Irish Players",
  description:
    "Comprehensive guide to sports betting in Ireland. Learn about GAA betting, odds, bet types, and responsible gambling practices.",
}

export default function BettingGuidePage() {
  return <BettingGuideClientPage />
}
