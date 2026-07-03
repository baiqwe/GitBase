import type { Metadata } from 'next'
import { createIntentPageMetadata, renderIntentPage } from '@/lib/intent-page-render'

const slug = 'random-animal-to-draw'

export const metadata: Metadata = createIntentPageMetadata(slug, 'en')

export default function RandomAnimalToDrawPage() {
  return renderIntentPage(slug, 'en')
}
