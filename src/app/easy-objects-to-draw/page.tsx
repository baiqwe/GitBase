import type { Metadata } from 'next'
import { createIntentPageMetadata, renderIntentPage } from '@/lib/intent-page-route'

const slug = 'easy-objects-to-draw'

export const metadata: Metadata = createIntentPageMetadata(slug, 'en')

export default function EasyObjectsToDrawPage() {
  return renderIntentPage(slug, 'en')
}
