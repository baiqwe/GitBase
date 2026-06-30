import { Metadata } from 'next'
import { HomeLandingContent } from '@/components/HomeLandingContent'
import { i18n, type Locale } from '@/lib/i18n-config'
import { getDictionary } from '@/lib/get-dictionary'
import { GeneratorShell } from '@/components/generators/GeneratorShell'
import { getLocalizedCategories, getLocalizedObjects } from '@/lib/objects'
import { createMetadata } from '@/lib/seo'
import { expandedIntentPageSlugs, getLocalizedIntentLinks } from '@/lib/intent-pages'

type LocalizedHomePageProps = {
  params: Promise<{ lang: string }>
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({ params }: LocalizedHomePageProps): Promise<Metadata> {
  const { lang } = await params
  const locale = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale
  const dict = await getDictionary(locale)

  return createMetadata({
    locale,
    title: dict.home.seoTitle,
    description: dict.home.description,
    path: '/',
  })
}

export default async function Home({ params }: LocalizedHomePageProps) {
  const { lang } = await params
  const locale = (i18n.locales.includes(lang as Locale) ? lang : i18n.defaultLocale) as Locale
  const dict = await getDictionary(locale)
  const categories = getLocalizedCategories(locale)
  const items = getLocalizedObjects(locale)
  const featuredItems = ['animal-elephant', 'house-kettle', 'food-apple', 'nature-rainbow', 'funny-rubber-duck']
    .map((id) => items.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
  const editorialLinks = getLocalizedIntentLinks(locale)
    .filter((link) => expandedIntentPageSlugs.includes(link.href.slice(1) as (typeof expandedIntentPageSlugs)[number]))
    .map(({ href, title, description }) => ({ href, label: title, description }))
  const quickLinks = editorialLinks.slice(0, 4).map(({ href, label }) => ({ href, label }))
  const trustBlock = {
    en: {
      title: 'How the homepage stays useful instead of generic',
      lead:
        'The homepage has to satisfy broad search intent without feeling thin. That is why it pairs the main generator with category hubs, deeper intent pages, and clearer examples of what users can actually do with the tool.',
      bullets: [
        'The object pool is structured around reusable categories.',
        'Visual cards and copyable lists support both inspiration and practical use.',
        'Editorial subpages create a clearer path for narrower user intent.',
      ],
    },
    zh: {
      title: '首页为什么不会变成泛泛的模板页',
      lead:
        '首页既要承接宽泛主词，又不能显得空。现在它通过主生成器、分类页、专题页和更具体的示例，一起去回答用户到底能在这里做什么。',
      bullets: [
        '对象池按可复用分类组织，不是毫无结构的随机词堆。',
        '卡片模式和批量模式同时覆盖灵感获取与实际复制使用。',
        '专题页把更细的搜索意图往下承接，避免所有需求都挤在首页。',
      ],
    },
    ja: {
      title: 'トップページが汎用テンプレに見えない理由',
      lead:
        'トップページは広い検索意図を受け止めつつ、薄く見えてはいけません。そのため、メインのジェネレーターに加えてカテゴリページ、意図別ページ、具体例を組み合わせています。',
      bullets: [
        '対象プールは再利用しやすいカテゴリ単位で整理されています。',
        '視覚カードとコピー用リストの両方で実用性を高めています。',
        '意図別ページが細かな検索意図を受け止める役割を持っています。',
      ],
    },
  }[locale]

  return (
    <>
      <GeneratorShell
        locale={locale}
        path="/"
        heroEyebrow={dict.home.eyebrow}
        title={dict.home.title}
        description={dict.home.description}
        visualTitle={dict.home.visualTitle}
        visualDescription={dict.home.visualDescription}
        bulkTitle={dict.home.bulkTitle}
        bulkDescription={dict.home.bulkDescription}
        categories={categories}
        items={items}
        featuredItems={featuredItems}
        defaultVisualCount={5}
        quickLinks={quickLinks}
      />
      <HomeLandingContent
        locale={locale}
        categories={categories}
        sampleItems={items}
        editorialLinks={editorialLinks}
        trustBlock={trustBlock}
        content={dict.home.landing}
      />
    </>
  )
}
