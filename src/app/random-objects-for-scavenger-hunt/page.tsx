import type { Metadata } from 'next'
import { createIntentPageMetadata, renderIntentPage } from '@/lib/intent-page-route'

const slug = 'random-objects-for-scavenger-hunt'

export const metadata: Metadata = createIntentPageMetadata(slug, 'en')

export default function RandomObjectsForScavengerHuntPage() {
  return renderIntentPage(slug, 'en')
}
