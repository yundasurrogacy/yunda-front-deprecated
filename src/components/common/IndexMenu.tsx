'use client'
import './IndexMenu.scss'
import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

interface IndexMenuProps {
  onClose: () => void
}

const IndexMenu: React.FC<IndexMenuProps> = ({ onClose }) => {
  const { t } = useTranslation('common')
  return (
    <div className="fixed inset-0 z-[999] flex">
      <div
        className="flex-1"
        onClick={onClose}
        style={{ backgroundColor: 'transparent', pointerEvents: 'auto' }}
      />
      <div className="index-menu flex flex-col relative">
        <button className="index-menu-close absolute top-4 right-4 md:top-2.5 md:right-2.5 z-10" onClick={onClose}>
          <img src="/icons/Close_round.svg" alt="close" className="w-8 h-8 md:w-10 md:h-10" />
        </button>
        {/* 菜单内容 */}
        <div className="index-menu-content pt-[80px] md:pt-[78px] px-[20px] md:px-[50px] pb-[120px] md:pb-[100px] overflow-y-auto h-full">
          <div className="flex flex-col md:flex-row justify-between border-t border-[#000] py-[20px]">
            <div className="w-full md:w-[300px] flex justify-start mb-4 md:mb-0 text-sm md:text-base font-medium">
              {t('menu.forIntendedParents')}
            </div>
            <div className="flex flex-col w-full md:w-[400px] pr-0 md:pr-[100px] space-y-2 md:space-y-1">
              <Link href="/process" className="index-menu-item" onClick={onClose}>
                <span className="underline-animation index-menu-content text-sm md:text-base">
                  {t('menu.surrogacyProcess')}
                </span>
              </Link>
              <Link href="/price" className="index-menu-item" onClick={onClose}>
                <span className="underline-animation index-menu-content text-sm md:text-base">
                  {t('menu.surrogacyCosts')}
                </span>
              </Link>
              <Link href="/egg-donation" className="index-menu-item" onClick={onClose}>
                <span className="underline-animation index-menu-content text-sm md:text-base">
                  {t('menu.findEggDonor')}
                </span>
              </Link>
              <Link href="/single-parents" className="index-menu-item" onClick={onClose}>
                <span className="underline-animation index-menu-content text-sm md:text-base">
                  {t('menu.lgbtqSingleParents')}
                </span>
              </Link>
              <Link
                href="/partner-ivf-clinics"
                className="index-menu-item mb-[20px] md:mb-[40px]"
                onClick={onClose}
              >
                <span className="underline-animation index-menu-content text-sm md:text-base">
                  {t('menu.partnerIvfClinics')}
                </span>
              </Link>
              <Link href="/become-parents" className="index-menu-item underline" onClick={onClose}>
                <span className="text-sm md:text-base font-medium">{t('menu.becomeParent')}</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between border-t border-[#000] py-[20px]">
            <div className="w-full md:w-[300px] flex justify-start mb-4 md:mb-0 text-sm md:text-base font-medium">
              {t('menu.forSurrogates')}
            </div>
            <div className="flex flex-col w-full md:w-[400px] pr-0 md:pr-[100px] space-y-2 md:space-y-1">
              <Link
                href="/surrogacy-journey-overview"
                className="index-menu-item"
                onClick={onClose}
              >
                <span className="underline-animation index-menu-content text-sm md:text-base">
                  {t('menu.surrogacyJourneyOverview')}
                </span>
              </Link>
              <Link
                href="/eligibility-to-become-a-surrogate"
                className="index-menu-item"
                onClick={onClose}
              >
                <span className="underline-animation index-menu-content text-sm md:text-base">
                  {t('menu.surrogateEligibility')}
                </span>
              </Link>
              <Link href="/our-screening-process" className="index-menu-item" onClick={onClose}>
                <span className="underline-animation index-menu-content text-sm md:text-base">
                  {t('menu.surrogateScreeningProcess')}
                </span>
              </Link>
              <Link
                href="/compensation-benefits-for-surrogates"
                className="index-menu-item"
                onClick={onClose}
              >
                <span className="underline-animation index-menu-content text-sm md:text-base">
                  {t('menu.surrogateBenefits')}
                </span>
              </Link>
              <Link
                href="/surrogate-referral-program"
                className="index-menu-item mb-[20px] md:mb-[40px]"
                onClick={onClose}
              >
                <span className="underline-animation index-menu-content text-sm md:text-base">
                  {t('menu.surrogateReferralProgram')}
                </span>
              </Link>
              <Link
                href="/become-surrogates"
                className="index-menu-item underline"
                onClick={onClose}
              >
                <span className="text-sm md:text-base font-medium">{t('menu.becomeSurrogate')}</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-1 border-t border-[#000] py-[20px]">
            <Link href="/about-us" className="index-menu-item" onClick={onClose}>
              <span className="underline-animation index-menu-content text-sm md:text-base">{t('menu.aboutUs')}</span>
            </Link>
            <Link href="/about-us" className="index-menu-item" onClick={onClose}>
              <span className="underline-animation index-menu-content text-sm md:text-base">{t('menu.contactUs')}</span>
            </Link>
            <Link href="/about-us" className="index-menu-item" onClick={onClose}>
              <span className="underline-animation index-menu-content text-sm md:text-base">{t('menu.careers')}</span>
            </Link>
          </div>
        </div>
        
        {/* 底部联系信息 - 固定在底部 */}
        <div className="index-menu-footer absolute bottom-0 left-0 right-0 px-[20px] md:px-[50px] py-[20px] bg-[#FCFAF2] border-t border-[#000]">
          <div className="flex flex-col gap-2 md:gap-1 index-menu-content text-xs md:text-sm">
            <div className="flex flex-col md:flex-row md:gap-4">
              <span className="flex items-center">
                <span className="font-medium">PHONE:</span>
                <span className="ml-2 md:ml-4">626-563-8656</span>
              </span>
              <span className="flex items-center">
                <span className="font-medium">EMAIL:</span>
                <span className="ml-2 md:ml-4">kaylal@yundasurrogacy.com</span>
              </span>
            </div>
            <span className="flex items-center">
              <span className="font-medium">WECHAT:</span>
              <span className="ml-2 md:ml-4">YundaUS1</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexMenu
