import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n-config'
import { i18n } from '@/lib/i18n-config'
import { CategoryLandingContent } from '@/components/CategoryLandingContent'
import { GeneratorShell } from '@/components/generators/GeneratorShell'
import {
  getCategories,
  getCategoryBySlug,
  getCategoryPageSlug,
  getLocalizedCategories,
  getLocalizedObjects,
} from '@/lib/objects'
import { getCategoryPageCopy } from '@/lib/category-page-copy'
import { createMetadata } from '@/lib/seo'

type LocalizedCategoryPageProps = {
  params: Promise<{ lang: string; categorySlug: string }>
}

export function generateStaticParams() {
  return i18n.locales.flatMap((lang) =>
    getCategories().map((category) => ({
      lang,
      categorySlug: category.slug,
    }))
  )
}

export async function generateMetadata({
  params,
}: LocalizedCategoryPageProps): Promise<Metadata> {
  const { lang, categorySlug } = await params
  const locale = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    return {}
  }

  const copy = getCategoryPageCopy(category, locale)

  return createMetadata({
    locale,
    title: copy.seoTitle,
    description: copy.seoDescription,
    path: `/${getCategoryPageSlug(category.slug)}`,
  })
}

export default async function LocalizedCategoryPage({
  params,
}: LocalizedCategoryPageProps) {
  const { lang, categorySlug } = await params
  const locale = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    notFound()
  }

  const translation = category.i18n[locale] ?? category.i18n.en
  const copy = getCategoryPageCopy(category, locale)

  return (
    <>
      <GeneratorShell
        locale={locale}
        path={`/${getCategoryPageSlug(category.slug)}`}
        heroEyebrow={translation.shortName ?? translation.name}
        title={copy.title}
        description={copy.description}
        visualTitle={copy.visualTitle}
        visualDescription={copy.visualDescription}
        bulkTitle={copy.bulkTitle}
        bulkDescription={copy.bulkDescription}
        categories={getLocalizedCategories(locale)}
        items={getLocalizedObjects(locale, category.slug)}
        activeCategorySlug={category.slug}
      />
      {translation.seo ? (
        <CategoryLandingContent
          locale={locale}
          categoryName={translation.name}
          categories={getLocalizedCategories(locale)}
          sampleItems={getLocalizedObjects(locale, category.slug)}
          currentSlug={category.slug}
          content={translation.seo}
        />
      ) : null}
    </>
  )
}
