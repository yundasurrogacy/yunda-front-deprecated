import { PAGE_METADATA } from '../metadata'
import ProcessPageContent from './content'
import type { Metadata } from 'next'

export const metadata: Metadata = PAGE_METADATA.process

export default function ProcessPage() {
  return <ProcessPageContent />
}
