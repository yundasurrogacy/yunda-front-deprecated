'use client'
import './AdminMenu.scss'
import React from 'react'
import Link from 'next/link'

interface AdminMenuProps {
  onClose: () => void
}

const AdminMenu: React.FC<AdminMenuProps> = ({ onClose }) => {
  return (
    <div className="admin-menu flex flex-col relative">
      <button className="admin-menu-close absolute top-2.5 right-2.5" onClick={onClose}>
        <img src="/icons/Close_round.svg" alt="close" className="w-10 h-10" />
      </button>
      {/* 菜单内容待定 */}
      <div className="admin-menu-content pt-[78px] px-[50px]">
        <div className="flex flex-col gap-1 border-t border-[#000] py-[20px]">
          <Link href="/admin/dashboard" className="admin-menu-item" onClick={onClose}>
            DASHBOARD
          </Link>
          <Link href="/admin/profile" className="admin-menu-item" onClick={onClose}>
            MY PROFILE
          </Link>
        </div>
        <div className="flex flex-col gap-1 border-t border-[#000] py-[20px]">
          <Link href="/admin/journey" className="admin-menu-item" onClick={onClose}>
            JOURNEY
          </Link>
          <Link href="/admin/files" className="admin-menu-item" onClick={onClose}>
            MY FILES
          </Link>
          <Link href="/admin/trust-account" className="admin-menu-item" onClick={onClose}>
            TRUST ACCOUNT
          </Link>
          <Link href="/admin/surrogate-match" className="admin-menu-item" onClick={onClose}>
            SURROGATE MATCH
          </Link>
          <Link href="/admin/ivf-clinic" className="admin-menu-item" onClick={onClose}>
            IVF CLINIC
          </Link>
        </div>
        <div className="flex flex-col gap-1 border-t border-[#000] py-[20px]">
          <Link href="/admin/messages" className="admin-menu-item" onClick={onClose}>
            MESSAGES
          </Link>
          <Link href="/admin/support" className="admin-menu-item" onClick={onClose}>
            SUPPORT
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminMenu
