import { PAGE_METADATA } from '../metadata'
import type { Metadata } from 'next'
import SurrogacyJourneyOverviewContent from './content'

export const metadata: Metadata = PAGE_METADATA.surrogacyJourneyOverview

export default function Page() {
  return <SurrogacyJourneyOverviewContent />
}
