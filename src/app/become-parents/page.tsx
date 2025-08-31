import BecomeParentsPageContent from './content'
import { PAGE_METADATA } from '../metadata'
import type { Metadata } from 'next'
export const metadata: Metadata = PAGE_METADATA.becomeParents

export default function BecomeParentsPage() {
  return <BecomeParentsPageContent />
}
