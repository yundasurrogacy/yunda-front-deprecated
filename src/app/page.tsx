import './page.scss'
import HomeContent from './content'
import { PAGE_METADATA } from './metadata'
import type { Metadata } from 'next'
export const metadata: Metadata = PAGE_METADATA.base

export default function HomePage() {
  return <HomeContent />
}
