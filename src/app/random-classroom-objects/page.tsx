import type { Metadata } from 'next'
import { createIntentPageMetadata, renderIntentPage } from '@/lib/intent-page-route'

const slug = 'random-classroom-objects'

export const metadata: Metadata = createIntentPageMetadata(slug, 'en')

export default function RandomClassroomObjectsPage() {
  return renderIntentPage(slug, 'en')
}
