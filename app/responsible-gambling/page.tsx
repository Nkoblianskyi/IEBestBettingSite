import type { Metadata } from "next"
import ResponsibleGamblingClientPage from "./ResponsibleGamblingClientPage"

export const metadata: Metadata = {
  title: "Responsible Gambling - Safe Betting Practices for Irish Players",
  description:
    "Learn about responsible gambling practices, tools, and resources. Get help and support for safe betting in Ireland.",
}

export default function ResponsibleGamblingPage() {
  return <ResponsibleGamblingClientPage />
}
