import type { Metadata } from 'next'
import { ContentPageShell } from '@/components/ContentPageShell'
import { createMetadata } from '@/lib/seo'
import { trustPageCopy } from '@/lib/site-copy'

export const metadata: Metadata = createMetadata({
  locale: 'en',
  title: trustPageCopy.en.editorialPolicy.title,
  description: trustPageCopy.en.editorialPolicy.description,
  path: '/editorial-policy',
})

export default function EditorialPolicyPage() {
  return <ContentPageShell locale="en" slug="editorialPolicy" />
}
