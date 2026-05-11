import type { Metadata } from 'next'
import { i18n } from '@/lib/i18n-config'
import {
  createIntentPageMetadata,
  renderIntentPage,
  resolveLocale,
  type LocalizedIntentPageProps,
} from '@/lib/intent-page-route'

const slug = 'random-objects-for-pictionary'

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: LocalizedIntentPageProps): Promise<Metadata> {
  return createIntentPageMetadata(slug, await resolveLocale(params))
}

export default async function LocalizedRandomObjectsForPictionaryPage({
  params,
}: LocalizedIntentPageProps) {
  return renderIntentPage(slug, await resolveLocale(params))
}
