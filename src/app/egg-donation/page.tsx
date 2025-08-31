import EggDonationPageContent from './content'
import { PAGE_METADATA } from '../metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = PAGE_METADATA.eggDonation

export default function EggDonationPage() {
  return <EggDonationPageContent />
}
