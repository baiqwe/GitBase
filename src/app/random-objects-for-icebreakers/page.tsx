import type { Metadata } from 'next'
import { createIntentPageMetadata, renderIntentPage } from '@/lib/intent-page-route'

const slug = 'random-objects-for-icebreakers'

export const metadata: Metadata = createIntentPageMetadata(slug, 'en')

export default function RandomObjectsForIcebreakersPage() {
  return renderIntentPage(slug, 'en')
}
