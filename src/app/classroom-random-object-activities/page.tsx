import type { Metadata } from 'next'
import { createIntentPageMetadata, renderIntentPage } from '@/lib/intent-page-render'

const slug = 'classroom-random-object-activities'

export const metadata: Metadata = createIntentPageMetadata(slug, 'en')

export default function ClassroomRandomObjectActivitiesPage() {
  return renderIntentPage(slug, 'en')
}
