import type { Metadata } from 'next'
import { createIntentPageMetadata, renderIntentPage } from '@/lib/intent-page-route'

const slug = 'random-object-list-generator'

export const metadata: Metadata = createIntentPageMetadata(slug, 'en')

export default function RandomObjectListGeneratorPage() {
  return renderIntentPage(slug, 'en')
}
