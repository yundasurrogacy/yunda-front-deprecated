import { PAGE_METADATA } from '../metadata'
import type { Metadata } from 'next'
import SurrogateReferralProgramPageContent from './content'

export const metadata: Metadata = PAGE_METADATA.surrogateReferralProgram

export default function SurrogateReferralProgramPage() {
  return <SurrogateReferralProgramPageContent />
}
