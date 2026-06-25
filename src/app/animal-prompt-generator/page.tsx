import type { Metadata } from 'next'
import { createIntentPageMetadata, renderIntentPage } from '@/lib/intent-page-route'

const slug = 'animal-prompt-generator'

export const metadata: Metadata = createIntentPageMetadata(slug, 'en')

export default function AnimalPromptGeneratorPage() {
  return renderIntentPage(slug, 'en')
}
