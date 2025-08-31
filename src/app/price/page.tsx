import { PAGE_METADATA } from '../metadata'
import PricePageContent from './content'
import type { Metadata } from 'next'

export const metadata: Metadata = PAGE_METADATA.price

export default function ProcessPage() {
  return <PricePageContent/>
}