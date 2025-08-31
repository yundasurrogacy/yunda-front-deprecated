import { PAGE_METADATA } from '../metadata'
import type { Metadata } from 'next'
import SingleParentsClient from './content'

export const metadata: Metadata = PAGE_METADATA.singleParents

export default function Page() {
  return <SingleParentsClient />
}
