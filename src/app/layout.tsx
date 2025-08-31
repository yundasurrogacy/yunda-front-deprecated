import '@/styles/globals.css'
import 'antd/dist/reset.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AnimatedLayout from './AnimatedLayout'
import { PAGE_METADATA } from './metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = PAGE_METADATA.base

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <AnimatedLayout>{children}</AnimatedLayout>
      </body>
    </html>
  )
}
