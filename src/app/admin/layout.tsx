import AdminHeader from '@/components/admin/AdminHeader'
import '@/styles/variable.scss'
import '@/styles/admin.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '后台管理',
  description: '后台管理页面',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-bg">
      <AdminHeader />
      <main className="admin-main">{children}</main>
    </div>
  )
}
