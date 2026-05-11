import type { Metadata } from 'next'
import { createIntentPageMetadata, renderIntentPage } from '@/lib/intent-page-route'

const slug = 'random-kitchen-objects'

export const metadata: Metadata = createIntentPageMetadata(slug, 'en')

export default function RandomKitchenObjectsPage() {
  return renderIntentPage(slug, 'en')
}
