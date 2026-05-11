import type { Metadata } from 'next'
import { createIntentPageMetadata, renderIntentPage } from '@/lib/intent-page-route'

const slug = 'random-objects-for-improv'

export const metadata: Metadata = createIntentPageMetadata(slug, 'en')

export default function RandomObjectsForImprovPage() {
  return renderIntentPage(slug, 'en')
}
