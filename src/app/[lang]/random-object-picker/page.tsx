import type { Metadata } from 'next'
import { i18n } from '@/lib/i18n-config'
import {
  createIntentPageMetadata,
  renderIntentPage,
  resolveIntentLocale,
  type LocalizedIntentPageProps,
} from '@/lib/intent-page-render'

const slug = 'random-object-picker'

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: LocalizedIntentPageProps): Promise<Metadata> {
  const { lang } = await params
  return createIntentPageMetadata(slug, resolveIntentLocale(lang))
}

export default async function LocalizedRandomObjectPickerPage({ params }: LocalizedIntentPageProps) {
  const { lang } = await params
  return renderIntentPage(slug, resolveIntentLocale(lang))
}
