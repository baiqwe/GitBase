import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { IntentPageContent } from '@/components/IntentPageContent'
import { getIntentPageBySlug } from '@/lib/intent-pages'
import { createMetadata } from '@/lib/seo'

const slug = 'random-objects-for-esl'

export const metadata: Metadata = (() => {
  const intentPage = getIntentPageBySlug(slug)

  if (!intentPage) {
    return {}
  }

  return createMetadata({
    locale: 'en',
    title: intentPage.i18n.en.seoTitle,
    description: intentPage.i18n.en.seoDescription,
    path: `/${slug}`,
  })
})()

export default function RandomObjectsForEslPage() {
  const intentPage = getIntentPageBySlug(slug)

  if (!intentPage) {
    notFound()
  }

  return <IntentPageContent locale="en" path={`/${slug}`} intentPage={intentPage} />
}
