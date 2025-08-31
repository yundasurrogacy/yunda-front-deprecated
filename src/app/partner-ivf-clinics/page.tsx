import PartnerIVFClinicsPageContent from './content'
import { PAGE_METADATA } from '../metadata'
import type { Metadata } from 'next'
export const metadata: Metadata = PAGE_METADATA.partnerIVFClinics

export default function PartnerIVFClinicsPage() {
  return <PartnerIVFClinicsPageContent />
}
