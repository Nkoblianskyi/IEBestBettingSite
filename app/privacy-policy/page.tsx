import type { Metadata } from "next"
import PrivacyPolicyClientPage from "./PrivacyPolicyClientPage"

export const metadata: Metadata = {
    title: "Privacy Policy - IEBestBettingSite",
    description:
        "Learn how we collect, use, and protect your personal information when you use our betting site comparison service.",
}

export default function PrivacyPolicyPage() {
    return <PrivacyPolicyClientPage />
}
