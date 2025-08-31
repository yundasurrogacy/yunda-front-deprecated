import { PAGE_METADATA } from '../metadata'
import type { Metadata } from 'next'
export const metadata: Metadata = PAGE_METADATA.becomeSurrogates

import BecomeSurrogatesPageContent from './content'

export default function BecomeSurrogatesPage() {
  return <BecomeSurrogatesPageContent />
}
