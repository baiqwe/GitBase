import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
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

type CategoryPageProps = {
  params: Promise<{ categorySlug: string }>
}

export function generateStaticParams() {
  return getCategories().map((category) => ({
    categorySlug: category.slug,
  }))
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    return {}
  }

  const copy = getCategoryPageCopy(category, 'en')

  return createMetadata({
    locale: 'en',
    title: copy.seoTitle,
    description: copy.seoDescription,
    path: `/${getCategoryPageSlug(category.slug)}`,
  })
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    notFound()
  }

  const copy = getCategoryPageCopy(category, 'en')

  return (
    <>
      <GeneratorShell
        locale="en"
        path={`/${getCategoryPageSlug(category.slug)}`}
        heroEyebrow={category.i18n.en.shortName ?? category.i18n.en.name}
        title={copy.title}
        description={copy.description}
        visualTitle={copy.visualTitle}
        visualDescription={copy.visualDescription}
        bulkTitle={copy.bulkTitle}
        bulkDescription={copy.bulkDescription}
        categories={getLocalizedCategories('en')}
        items={getLocalizedObjects('en', category.slug)}
        activeCategorySlug={category.slug}
      />
      {category.i18n.en.seo ? (
        <CategoryLandingContent
          locale="en"
          categoryName={category.i18n.en.name}
          categories={getLocalizedCategories('en')}
          sampleItems={getLocalizedObjects('en', category.slug)}
          currentSlug={category.slug}
          content={category.i18n.en.seo}
        />
      ) : null}
    </>
  )
}
