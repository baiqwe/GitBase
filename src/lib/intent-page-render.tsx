import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { IntentPageContent } from '@/components/IntentPageContent'
import { getIntentPageBySlug, type IntentPageConfig } from '@/lib/intent-pages'
import { i18n, type Locale } from '@/lib/i18n-config'
import { createMetadata } from '@/lib/seo'

type IntentSlug = IntentPageConfig['slug']

export type LocalizedIntentPageProps = {
  params: Promise<{ lang: string }>
}

export function createIntentPageMetadata(slug: IntentSlug, locale: Locale): Metadata {
  const intentPage = getIntentPageBySlug(slug)

  if (!intentPage) {
    return {}
  }

  const copy = intentPage.i18n[locale] ?? intentPage.i18n.en

  return createMetadata({
    locale,
    title: copy.seoTitle,
    description: copy.seoDescription,
    path: `/${slug}`,
  })
}

export function renderIntentPage(slug: IntentSlug, locale: Locale) {
  const intentPage = getIntentPageBySlug(slug)

  if (!intentPage) {
    notFound()
  }

  return <IntentPageContent locale={locale} path={`/${slug}`} intentPage={intentPage} />
}

export function resolveIntentLocale(lang: string): Locale {
  return (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale
}
