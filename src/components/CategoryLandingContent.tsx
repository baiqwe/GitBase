import type { Locale } from '@/lib/i18n-config'
import type { LocalizedCategory, LocalizedObject } from '@/lib/objects'
import { buildFaqJsonLd } from '@/lib/seo'
import { trustPageCopy } from '@/lib/site-copy'
import { RelatedGenerators } from '@/components/RelatedGenerators'
import { ExampleObjectsSection, TrustBlockSection } from '@/components/SupportSections'

interface CategoryLandingContentProps {
  locale: Locale
  categoryName: string
  categories: LocalizedCategory[]
  sampleItems: LocalizedObject[]
  currentSlug: string
  content: {
    introTitle: string
    introBody: string
    reasonsTitle: string
    reasons: Array<{ title: string; body: string }>
    useCasesTitle: string
    useCases: string[]
    faqTitle: string
    faqs: Array<{ question: string; answer: string }>
  }
}

const howToCopy = {
  en: (categoryName: string) => ({
    heading: trustPageCopy.en.ui.howToUse,
    steps: [
      `Choose how many ${categoryName.toLowerCase()} prompts you want to generate.`,
      'Decide whether repeated results are allowed or whether you want a unique set only.',
      'Refresh the generator until you find a strong prompt, then copy the longer list if you need material for class, games, or writing.'
    ],
  }),
  zh: (categoryName: string) => ({
    heading: trustPageCopy.zh.ui.howToUse,
    steps: [
      `先输入你想生成多少个${categoryName}结果。`,
      '再决定是否允许重复，按你的使用场景选择更自由或更去重的结果。',
      '多试几次生成器，找到合适结果后，可以直接复制批量清单去做课堂、游戏或创作。'
    ],
  }),
  ja: (categoryName: string) => ({
    heading: trustPageCopy.ja.ui.howToUse,
    steps: [
      `${categoryName} のお題をいくつ出したいか数を入力します。`,
      '重複を許可するかどうかを切り替えて、用途に合う出力に調整します。',
      '納得いく結果が出るまで更新し、必要なら一括リストをコピーして授業や創作に使います。'
    ],
  }),
}

export function CategoryLandingContent({
  locale,
  categoryName,
  categories,
  sampleItems,
  currentSlug,
  content,
}: CategoryLandingContentProps) {
  const faqJsonLd = buildFaqJsonLd({ faqs: content.faqs })
  const howTo = howToCopy[locale](categoryName)
  const ui = trustPageCopy[locale].ui
  const exampleCopy = {
    en: {
      title: `Example ${categoryName.toLowerCase()} prompts from this page`,
      lead:
        `These examples show the kind of ${categoryName.toLowerCase()} objects this page is tuned to generate, so users can judge fit before they keep clicking.`,
    },
    zh: {
      title: `这个页面会生成的${categoryName}示例`,
      lead:
        `这些示例可以帮助用户更快判断这个分类是否符合需求，也让页面不只是“一个按钮加几段说明”。`,
    },
    ja: {
      title: `このページで出てくる ${categoryName} の例`,
      lead:
        `このカテゴリでどんな対象が出るのかを先に見せることで、使い始める前の判断がしやすくなります。`,
    },
  }[locale]
  const trustBlock = {
    en: {
      title: `How this ${categoryName.toLowerCase()} page stays specific`,
      lead:
        `Category pages work best when they feel genuinely narrower than the homepage. This page keeps a tighter object pool, clear examples, and related links so it can satisfy a more specific search intent without becoming a doorway page.`,
      bullets: [
        `Only ${categoryName.toLowerCase()} objects are used on this page.`,
        'Real image cards make the prompt pool easier to evaluate at a glance.',
        'Related generators help users move to nearby intents instead of bouncing away.',
      ],
    },
    zh: {
      title: `这个 ${categoryName} 页面为什么更具体`,
      lead:
        `分类页只有在真的比首页更聚焦时才有价值。这个页面通过更窄的对象池、直接示例和相关内链，让它更像一个独立可用的落地页，而不是模板页。`,
      bullets: [
        `这个页面只使用 ${categoryName} 相关对象。`,
        '真实图片卡片让用户更容易判断结果是否合适。',
        '相关生成器会把用户继续引导到相邻需求，而不是直接流失。',
      ],
    },
    ja: {
      title: `この ${categoryName} ページが具体的である理由`,
      lead:
        `カテゴリページは、トップページより明確に絞られていて初めて価値があります。このページは対象プール、具体例、関連リンクを絞ることで、独立した着地先として機能するようにしています。`,
      bullets: [
        `このページでは ${categoryName} 関連の対象だけを使います。`,
        '実写カードで結果の雰囲気をすぐ判断できます。',
        '関連ページへの導線で近い意図へ自然に移動できます。',
      ],
    },
  }[locale]

  return (
    <>
      <section className="container mx-auto space-y-8 px-4 pb-20 md:px-6">
        <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{ui.whatLabel}</p>
          <h2 className="mt-3 text-4xl leading-tight text-slate-950 md:text-5xl">{content.introTitle}</h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{content.introBody}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-black/5 bg-slate-950 p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{ui.useCasesLabel}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{content.useCasesTitle}</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {content.useCases.map((useCase) => (
                <span key={useCase} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85">
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{ui.whyLabel}</p>
            <h2 className="text-3xl text-slate-950 md:text-4xl">{content.reasonsTitle}</h2>
            <div className="grid gap-4">
              {content.reasons.map((reason) => (
                <div key={reason.title} className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
                  <h3 className="text-xl text-slate-950">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{reason.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{ui.howToLabel}</p>
          <h2 className="mt-3 text-3xl text-slate-950 md:text-4xl">{howTo.heading}</h2>
          <ol className="mt-6 space-y-4">
            {howTo.steps.map((step, index) => (
              <li key={step} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <ExampleObjectsSection locale={locale} title={exampleCopy.title} lead={exampleCopy.lead} items={sampleItems.slice(0, 6)} />
        <RelatedGenerators locale={locale} categories={categories} currentSlug={currentSlug} />
        <TrustBlockSection locale={locale} block={trustBlock} />

        <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{ui.faqLabel}</p>
          <h2 className="mt-3 text-3xl text-slate-950 md:text-4xl">{content.faqTitle}</h2>
          <div className="mt-6 space-y-4">
            {content.faqs.map((faq) => (
              <div key={faq.question} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg text-slate-950">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  )
}
