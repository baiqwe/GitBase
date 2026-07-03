import type { Metadata } from 'next'
import { createIntentPageMetadata, renderIntentPage } from '@/lib/intent-page-render'

const slug = 'random-esl-vocabulary-generator'

export const metadata: Metadata = createIntentPageMetadata(slug, 'en')

export default function RandomEslVocabularyGeneratorPage() {
  return renderIntentPage(slug, 'en')
}
