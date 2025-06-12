import type { Metadata } from "next"
import CookiePolicyClientPage from "./CookiePolicyClientPage"

export const metadata: Metadata = {
    title: "Cookie Policy - IEBestBettingSite",
    description:
        "Learn about how we use cookies on our website to improve your experience and provide personalized content.",
}

export default function CookiePolicyPage() {
    return <CookiePolicyClientPage />
}
