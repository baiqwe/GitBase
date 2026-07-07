import type { Metadata } from 'next'
import { createIntentPageMetadata, renderIntentPage } from '@/lib/intent-page-render'

const slug = 'random-object-games'

export const metadata: Metadata = createIntentPageMetadata(slug, 'en')

export default function RandomObjectGamesPage() {
  return renderIntentPage(slug, 'en')
}
