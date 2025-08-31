'use client'
import './IndexHeader.scss'
import React, { useState } from 'react'
import IndexMenu from './IndexMenu'
import { useTranslation } from 'react-i18next'
import i18n from '@/i18n'
import { I18N_KEYS } from '@/i18n/keys'
import Link from 'next/link'

const IndexHeader: React.FC = () => {
  const { t } = useTranslation('common')
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en'
    i18n.changeLanguage(newLang)
  }

  // const handleLoginRedirect = () => {
  //   router.push('/login')
  // }

  return (
    <header className="index-header font-18 text-2">
      <div className="index-header-left w-16 md:w-[200px] flex-shrink-0">
        <button
          className="menu-btn flex items-center gap-[10px] p-2 md:p-0"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src="/icons/Menu.svg" alt="menu" className="menu-icon w-6 h-6 md:w-10 md:h-10" />
        </button>
      </div>
      <div className="index-header-center flex-1 md:w-[200px] flex justify-center items-center flex-shrink-0">
        <Link href="/">
          <img src="/images/logo.svg" alt="logo" className="index-logo w-16 h-14 md:w-[105px] md:h-96" />
        </Link>
      </div>
      <div className="index-header-right flex items-center gap-2 md:gap-4 w-16 md:w-[200px] flex-shrink-0">
        {/* TODO: login */}
        {/*<a*/}
        {/*  className="login-btn yd-btn font-18 mr-[30px]"*/}
        {/*  onClick={handleLoginRedirect}*/}
        {/*>{t(I18N_KEYS.login)}</a>*/}
        {/* <a className="logout-btn yd-btn">
          {t(I18N_KEYS.logout)}
        </a> */}
        <a
          onClick={toggleLanguage}
          className="lang-btn yd-btn font-18 ml-auto text-xs md:text-base"
          style={{ cursor: 'pointer' }}
        >
          {t(I18N_KEYS.lang)}
        </a>
      </div>
      {menuOpen && <IndexMenu onClose={() => setMenuOpen(false)} />}
    </header>
  )
}

export default IndexHeader
