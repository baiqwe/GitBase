import { HomeLandingContent } from '@/components/HomeLandingContent'
import { GeneratorShell } from '@/components/generators/GeneratorShell'
import type { Locale } from '@/lib/i18n-config'
import type { IntentPageConfig } from '@/lib/intent-pages'
import {
  getLocalizedCategories,
  getLocalizedObjectsByCategories,
  type LocalizedCategory,
} from '@/lib/objects'

type IntentPageContentProps = {
  locale: Locale
  path: string
  intentPage: IntentPageConfig
}

export function IntentPageContent({ locale, path, intentPage }: IntentPageContentProps) {
  const copy = intentPage.i18n[locale] ?? intentPage.i18n.en
  const categories = getLocalizedCategories(locale).filter((category) =>
    intentPage.categories.includes(category.slug)
  )
  const items = getLocalizedObjectsByCategories(locale, intentPage.categories)
  const featuredItems = buildFeaturedItems(categories, items)

  return (
    <>
      <GeneratorShell
        locale={locale}
        path={path}
        heroEyebrow={copy.heroEyebrow}
        title={copy.title}
        description={copy.description}
        visualTitle={copy.visualTitle}
        visualDescription={copy.visualDescription}
        bulkTitle={copy.bulkTitle}
        bulkDescription={copy.bulkDescription}
        categories={categories}
        items={items}
        featuredItems={featuredItems}
        defaultVisualCount={intentPage.defaultVisualCount}
      />
      <HomeLandingContent locale={locale} categories={categories} content={copy.landing} />
    </>
  )
}

function buildFeaturedItems(categories: LocalizedCategory[], items: ReturnType<typeof getLocalizedObjectsByCategories>) {
  const categoryPriority = categories.map((category) => category.slug)
  const featuredFromImages = categoryPriority
    .map((slug) => items.find((item) => item.category === slug && item.image))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))

  if (featuredFromImages.length >= 4) {
    return featuredFromImages.slice(0, 4)
  }

  const extras = items.filter((item) => !featuredFromImages.some((featured) => featured.id === item.id))
  return [...featuredFromImages, ...extras].slice(0, 4)
}
