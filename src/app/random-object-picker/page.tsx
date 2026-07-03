import type { Metadata } from 'next'
import { createIntentPageMetadata, renderIntentPage } from '@/lib/intent-page-render'

const slug = 'random-object-picker'

export const metadata: Metadata = createIntentPageMetadata(slug, 'en')

export default function RandomObjectPickerPage() {
  return renderIntentPage(slug, 'en')
}
