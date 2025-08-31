import AboutPageContent from './content'
import { PAGE_METADATA } from '../metadata'
import type { Metadata } from 'next'
export const metadata: Metadata = PAGE_METADATA.aboutUs

export default function AboutPage() {
  return <AboutPageContent />
}
