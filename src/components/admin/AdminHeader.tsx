'use client'
import './AdminHeader.scss'
import React, { useState } from 'react'
import AdminMenu from './AdminMenu'

const AdminHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <button
          className="menu-btn flex items-center gap-[10px]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src="/icons/Menu.svg" alt="menu" className="menu-icon w-10 h-10" />
          <span className="menu-text text-[18px]">MENU</span>
        </button>
      </div>
      <div className="admin-header-center">
        <img src="/images/logo.svg" alt="logo" className="admin-logo" />
      </div>
      <div className="admin-header-right flex items-center gap-4">
        <a href="javascript:vdoi(0);" className="login-btn yd-btn">
          Login
        </a>
        <a href="javascript:vdoi(0);" className="logout-btn yd-btn">
          Logout
        </a>
        <a href="javascript:vdoi(0);" className="lang-btn yd-btn">
          EN
        </a>
        <a href="javascript:vdoi(0);" className="lang-btn yd-btn">
          CN
        </a>
      </div>
      {menuOpen && <AdminMenu onClose={() => setMenuOpen(false)} />}
    </header>
  )
}

export default AdminHeader
