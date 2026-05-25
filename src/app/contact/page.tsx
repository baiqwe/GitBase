import type { Metadata } from 'next'
import { ContentPageShell } from '@/components/ContentPageShell'
import { createMetadata } from '@/lib/seo'
import { trustPageCopy } from '@/lib/site-copy'

export const metadata: Metadata = createMetadata({
  locale: 'en',
  title: trustPageCopy.en.contact.title,
  description: trustPageCopy.en.contact.description,
  path: '/contact',
})

export default function ContactPage() {
  return <ContentPageShell locale="en" slug="contact" />
}
