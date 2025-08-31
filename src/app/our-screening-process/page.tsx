import OurScreeningProcessPageContent from './content'
import { PAGE_METADATA } from '../metadata'
import type { Metadata } from 'next'
export const metadata: Metadata = PAGE_METADATA.ourScreeningProcess

export default function OurScreeningProcessPage() {
  return <OurScreeningProcessPageContent />
}
