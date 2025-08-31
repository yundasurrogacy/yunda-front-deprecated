import './page.scss'
import { PAGE_METADATA } from '../metadata'
import type { Metadata } from 'next'
import EligibilityToBecomeASurrogatePageContent from './content'

export const metadata: Metadata = PAGE_METADATA.eligibilityToBecomeASurrogate

export default function EligibilityToBecomeASurrogatePage() {
  return <EligibilityToBecomeASurrogatePageContent />
}
