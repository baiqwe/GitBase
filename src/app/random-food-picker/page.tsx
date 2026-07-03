import type { Metadata } from 'next'
import { createIntentPageMetadata, renderIntentPage } from '@/lib/intent-page-render'

const slug = 'random-food-picker'

export const metadata: Metadata = createIntentPageMetadata(slug, 'en')

export default function RandomFoodPickerPage() {
  return renderIntentPage(slug, 'en')
}
