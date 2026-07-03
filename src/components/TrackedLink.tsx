'use client'

import Link from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import type { LinkProps } from 'next/link'

type TrackedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode
    trackingArea: string
    trackingLabel: string
  }

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function TrackedLink({
  children,
  href,
  trackingArea,
  trackingLabel,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      onClick={(event) => {
        window.gtag?.('event', 'internal_link_click', {
          event_category: 'engagement',
          event_label: trackingLabel,
          link_area: trackingArea,
          link_url: typeof href === 'string' ? href : JSON.stringify(href),
          page_path: window.location.pathname,
        })
        onClick?.(event)
      }}
      {...props}
    >
      {children}
    </Link>
  )
}
