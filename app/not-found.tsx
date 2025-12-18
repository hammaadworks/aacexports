import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { WordRotate } from '@/components/ui/word-rotate'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-[15rem] font-serif font-extrabold text-primary/80 leading-none">404</h1>
      <h2 className="text-5xl font-bold mt-4 mb-2">
        <WordRotate
          className="text-5xl font-bold mt-4 mb-2"
          words={[
            "Page Not Found",
            "Lost in Transit, Not Found at Port",
            "Manifest Missing! Page Undeliverable",
            "Oops! Incorrect HS Code, Page Not Classified",
            "Shipment Delayed: Page Not Arrived Yet",
            "This Page Failed Customs Inspection",
          ]}
        />
      </h2>
      <p className="text-muted-foreground mb-8 max-w-lg text-lg">
        It seems this page has gone off-manifest, failed its customs inspection, or perhaps was re-routed to an unknown destination.
        Our apologies, we're currently tracking its last known coordinates. Please check your waybill (URL) and try again!
      </p>
      <Button asChild>
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>
    </main>
  )
}
