import type { Metadata } from 'next'
import { createIntentPageMetadata, renderIntentPage } from '@/lib/intent-page-render'

const slug = 'random-charades-generator'

export const metadata: Metadata = createIntentPageMetadata(slug, 'en')

export default function RandomCharadesGeneratorPage() {
  return renderIntentPage(slug, 'en')
}
