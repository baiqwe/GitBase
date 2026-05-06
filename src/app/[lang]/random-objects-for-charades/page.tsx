import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { IntentPageContent } from '@/components/IntentPageContent'
import { getIntentPageBySlug } from '@/lib/intent-pages'
import { createMetadata } from '@/lib/seo'
import { i18n, type Locale } from '@/lib/i18n-config'

type LocalizedIntentPageProps = {
  params: Promise<{ lang: string }>
}

const slug = 'random-objects-for-charades'

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: LocalizedIntentPageProps): Promise<Metadata> {
  const { lang } = await params
  const locale = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale
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

export default async function LocalizedRandomObjectsForCharadesPage({
  params,
}: LocalizedIntentPageProps) {
  const { lang } = await params
  const locale = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale
  const intentPage = getIntentPageBySlug(slug)

  if (!intentPage) {
    notFound()
  }

  return <IntentPageContent locale={locale} path={`/${slug}`} intentPage={intentPage} />
}
