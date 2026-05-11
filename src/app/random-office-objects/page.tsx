import type { Metadata } from 'next'
import { createIntentPageMetadata, renderIntentPage } from '@/lib/intent-page-route'

const slug = 'random-office-objects'

export const metadata: Metadata = createIntentPageMetadata(slug, 'en')

export default function RandomOfficeObjectsPage() {
  return renderIntentPage(slug, 'en')
}
