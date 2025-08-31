import CompensationBenefitsForSurrogatesPageContent from './content'
import { PAGE_METADATA } from '../metadata'
import type { Metadata } from 'next'
export const metadata: Metadata = PAGE_METADATA.compensationBenefitsForSurrogates

export default function CompensationBenefitsForSurrogatesPage() {
  return <CompensationBenefitsForSurrogatesPageContent />
}
