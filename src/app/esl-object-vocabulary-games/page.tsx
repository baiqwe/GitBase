import type { Metadata } from 'next'
import { createIntentPageMetadata, renderIntentPage } from '@/lib/intent-page-render'

const slug = 'esl-object-vocabulary-games'

export const metadata: Metadata = createIntentPageMetadata(slug, 'en')

export default function EslObjectVocabularyGamesPage() {
  return renderIntentPage(slug, 'en')
}
