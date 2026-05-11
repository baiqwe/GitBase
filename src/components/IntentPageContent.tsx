import { HomeLandingContent } from '@/components/HomeLandingContent'
import { GeneratorShell } from '@/components/generators/GeneratorShell'
import type { Locale } from '@/lib/i18n-config'
import { getLocalizedPath } from '@/lib/seo'
import { getLocalizedIntentLinks, type IntentPageConfig } from '@/lib/intent-pages'
import {
  getLocalizedCategories,
  getLocalizedObjectsByCategories,
  type LocalizedCategory,
} from '@/lib/objects'
import { trustPageCopy } from '@/lib/site-copy'

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
  const editorialLinks = getLocalizedIntentLinks(locale)
    .filter((link) => link.href !== path)
    .filter((link) => intentPage.categories.some((category) => link.categories.includes(category)))
    .slice(0, 4)
    .map(({ href, title, description }) => ({ href, label: title, description }))
  const trustBlock = {
    en: {
      title: `Why this ${copy.title.toLowerCase()} page exists`,
      lead:
        'Intent pages should do more than restate the homepage. This page narrows the object pool, examples, and copy around one usage pattern so the visitor gets a clearer answer and Google sees a clearer topic.',
      bullets: [
        'The object set is filtered around a narrower use case.',
        'The examples and FAQ are written for this intent, not copied from the homepage.',
        'The page stays connected to nearby intents and categories through internal links.',
      ],
    },
    zh: {
      title: `为什么要单独做这个“${copy.title}”页面`,
      lead:
        '专题页不该只是把首页换个标题。这个页面会围绕一个更明确的使用场景来筛选对象池、示例和正文，让用户得到更直接的答案，也让搜索引擎更容易理解主题边界。',
      bullets: [
        '对象池会围绕更具体的使用场景进行过滤。',
        '示例和 FAQ 是按这个专题单独写的，不是从首页替换词复制过来。',
        '页面通过内链和相关分类，继续连到相邻意图，而不是孤立存在。',
      ],
    },
    ja: {
      title: `なぜ「${copy.title}」専用ページがあるのか`,
      lead:
        '意図別ページは、トップページの言い換えでは意味がありません。このページは用途に合わせて対象プール、具体例、本文を絞ることで、より明確な答えを返すために存在しています。',
      bullets: [
        '対象プールを用途ベースで絞り込んでいます。',
        '具体例と FAQ はこの意図のために個別に書かれています。',
        '関連ページとの内部リンクで、近いニーズにも自然につながります。',
      ],
    },
  }[locale]

  return (
    <>
      <GeneratorShell
        locale={locale}
        path={path}
        breadcrumbItems={[
          { label: trustPageCopy[locale].ui.breadcrumbHome, href: '/' },
          { label: copy.title, href: path },
        ]}
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
      <HomeLandingContent
        locale={locale}
        categories={categories}
        sampleItems={items}
        editorialLinks={editorialLinks}
        trustBlock={trustBlock}
        content={copy.landing}
      />
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
