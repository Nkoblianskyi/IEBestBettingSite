import type { Metadata } from "next"
import AboutClientPage from "./AboutClientPage"

export const metadata: Metadata = {
  title: "About Us - Ireland's Most Trusted Betting Site Reviews",
  description:
    "Learn how we select and review Irish betting sites. Our transparent methodology and commitment to player safety.",
}

export default function AboutPage() {
  return <AboutClientPage />
}
