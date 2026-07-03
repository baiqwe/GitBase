import type { Metadata } from 'next'
import { i18n } from '@/lib/i18n-config'
import {
  createIntentPageMetadata,
  renderIntentPage,
  resolveIntentLocale,
  type LocalizedIntentPageProps,
} from '@/lib/intent-page-render'

const slug = 'random-charades-generator'

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: LocalizedIntentPageProps): Promise<Metadata> {
  const { lang } = await params
  return createIntentPageMetadata(slug, resolveIntentLocale(lang))
}

export default async function LocalizedRandomCharadesGeneratorPage({ params }: LocalizedIntentPageProps) {
  const { lang } = await params
  return renderIntentPage(slug, resolveIntentLocale(lang))
}
