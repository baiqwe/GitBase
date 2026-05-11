import type { Metadata } from 'next'
import { createIntentPageMetadata, renderIntentPage } from '@/lib/intent-page-route'

const slug = 'random-objects-for-pictionary'

export const metadata: Metadata = createIntentPageMetadata(slug, 'en')

export default function RandomObjectsForPictionaryPage() {
  return renderIntentPage(slug, 'en')
}
