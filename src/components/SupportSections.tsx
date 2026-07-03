import Image from 'next/image'
import type { Locale } from '@/lib/i18n-config'
import { getLocalizedPath } from '@/lib/seo'
import type { LocalizedObject } from '@/lib/objects'
import { TrackedLink } from '@/components/TrackedLink'

type EditorialLink = {
  href: string
  label: string
  description: string
}

type TrustBlock = {
  title: string
  lead: string
  bullets: string[]
}

const exampleLabel = {
  en: 'Examples',
  zh: '示例',
  ja: 'サンプル',
}

const trustLabel = {
  en: 'Trust',
  zh: '可信度',
  ja: '信頼性',
}

const linksLabel = {
  en: 'Explore next',
  zh: '下一步可以看',
  ja: '次に見るページ',
}

export function ExampleObjectsSection({
  locale,
  title,
  lead,
  items,
}: {
  locale: Locale
  title: string
  lead: string
  items: LocalizedObject[]
}) {
  if (items.length === 0) {
    return null
  }

  return (
    <section className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{exampleLabel[locale]}</p>
      <h2 className="mt-3 text-3xl text-slate-950 md:text-4xl">{title}</h2>
      <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{lead}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
          >
            {item.image ? (
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <Image
                  src={item.image}
                  alt={item.imageAltText ?? item.translation.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority={index < 3}
                  placeholder={item.blurDataUrl ? 'blur' : 'empty'}
                  blurDataURL={item.blurDataUrl}
                />
              </div>
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-amber-50 via-white to-teal-50 px-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {item.translation.name}
              </div>
            )}
            <div className="space-y-2 p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg text-slate-950">{item.translation.name}</h3>
                <span className="rounded-full border border-slate-200 bg-white px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  {item.category}
                </span>
              </div>
              <p className="text-sm leading-6 text-slate-600">{item.translation.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function EditorialLinksSection({
  locale,
  links,
}: {
  locale: Locale
  links: EditorialLink[]
}) {
  if (links.length === 0) {
    return null
  }

  return (
    <section className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{linksLabel[locale]}</p>
      <h2 className="mt-3 text-3xl text-slate-950 md:text-4xl">{linksLabel[locale]}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {links.map((link) => (
          <TrackedLink
            key={link.href}
            href={getLocalizedPath(locale, link.href)}
            trackingArea="editorial_links"
            trackingLabel={link.label}
            className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-slate-300"
          >
            <h3 className="text-xl text-slate-950">{link.label}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{link.description}</p>
          </TrackedLink>
        ))}
      </div>
    </section>
  )
}

export function TrustBlockSection({
  locale,
  block,
}: {
  locale: Locale
  block: TrustBlock
}) {
  return (
    <section className="rounded-[2rem] border border-black/5 bg-slate-950 p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{trustLabel[locale]}</p>
      <h2 className="mt-3 text-3xl md:text-4xl">{block.title}</h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-white/82 md:text-base">{block.lead}</p>
      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        {block.bullets.map((bullet) => (
          <li
            key={bullet}
            className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/82"
          >
            {bullet}
          </li>
        ))}
      </ul>
    </section>
  )
}
