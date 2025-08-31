'use client'

import './footer.scss'
import Sections from './sections'
import { useTranslation } from 'react-i18next'

export default function Footer(props: { className?: string }) {
  const { t } = useTranslation('common')
  return (
    <Sections color="#FCFAF2" className={`common-footer h-auto md:h-[520px] py-12 md:py-0 ${props.className}`}>
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full gap-8 md:gap-0 px-4 md:px-0">
        <div className="flex flex-col items-start md:mr-[425px] w-full md:w-auto">
          <img className="block w-[80px] md:w-[105px] -m-[14px]" src="/images/logo.svg" alt="logo" />
          <div className="w-full md:w-[199px] h-[1px] bg-[#271F18]"></div>
          <a href="/about-us" className="text-2 text-[#271F18] my-[5px] underline-animation text-sm md:text-base">
            {t('footer.aboutUs')}
          </a>
          {/* TODO: login */}
          <a href="/" className="text-2 text-[#271F18] mb-[5px] underline-animation text-sm md:text-base">
            {t('footer.login')}
          </a>
          <div className="w-full md:w-[199px] h-[1px] bg-[#271F18]"></div>
          <a href="/about-us" className="text-2 text-[#271F18] my-[5px] underline-animation text-sm md:text-base">
            {t('footer.careers')}
          </a>
          <div className="w-full md:w-[199px] h-[1px] bg-[#271F18]"></div>
          <a href="/" className="text-2 text-[#271F18] text-sm md:text-base">
            {t('footer.phone')}
          </a>
          <a href="/" className="text-2 text-[#271F18] mb-[5px] text-sm md:text-base">
            626-563-8656
          </a>
          <a href="/" className="text-2 text-[#271F18] text-sm md:text-base">
            {t('footer.email')}
          </a>
          <a href="/" className="text-2 text-[#271F18] mb-[5px] text-sm md:text-base">
            kaylal@yundasurrogacy.com
          </a>
          <a href="/" className="text-2 text-[#271F18] text-sm md:text-base">
            {t('footer.wechat')}
          </a>
          <a href="/" className="text-2 text-[#271F18] mb-[20px] text-sm md:text-base">
            YundaUS1
          </a>
          <a
            href="https://www.instagram.com/yunda_surrogacy_/"
            target="_blank"
            className="text-4 text-[#271F18] underline-animation text-sm md:text-base"
          >
            INSTAGRAM
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61577914871802"
            target="_blank"
            className="text-4 text-[#271F18] underline-animation text-sm md:text-base"
          >
            FACEBOOK
          </a>
          <a href="/" target="_blank" className="text-4 text-[#271F18] underline-animation text-sm md:text-base">
            YOUTUBE
          </a>
          <a href="/" target="_blank" className="text-4 text-[#271F18] underline-animation text-sm md:text-base">
            LINKEDIN
          </a>
        </div>
        <div className="flex flex-col justify-end max-w-full md:max-w-[660px] w-full">
          {/* 顶部两列并排 */}
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
            {/* 第一列 */}
            <div className="flex flex-col justify-between h-auto md:h-[320px] mr-0 md:mr-[20px]">
              <div className="flex flex-col items-start">
                <a href="/become-parents" className="text-2 text-[#271F18] underline mb-[24px] text-sm md:text-base">
                  {t('footer.becomeParent')}
                </a>
                <a href="/" className="text-2 text-[#271F18] text-sm md:text-base">
                  {t('footer.intendedParent')}
                </a>
                <div className="w-full md:w-[199px] h-[1px] bg-[#271F18] mb-[5px]"></div>
                <a href="/process" className="text-3 text-[#271F18] mb-[5px] underline-animation text-xs md:text-sm">
                  {t('menu.surrogacyProcess')}
                </a>
                <a href="/price" className="text-3 text-[#271F18] mb-[5px] underline-animation text-xs md:text-sm">
                  {t('menu.surrogacyCosts')}
                </a>
                <a
                  href="/egg-donation"
                  className="text-3 text-[#271F18] mb-[5px] underline-animation text-xs md:text-sm"
                >
                  {t('footer.eggDonors')}
                </a>
                <a
                  href="/single-parents"
                  className="text-3 text-[#271F18] mb-[5px] underline-animation text-xs md:text-sm"
                >
                  {t('footer.singleLgbtq')}
                </a>
                <a
                  href="/partner-ivf-clinics"
                  className="text-3 text-[#271F18] mb-[5px] underline-animation text-xs md:text-sm"
                >
                  {t('menu.partnerIvfClinics')}
                </a>
              </div>
            </div>

            {/* 第二列 */}
            <div className="flex flex-col justify-between h-auto md:h-[320px]">
              <div className="flex flex-col items-start">
                <a href="/become-surrogate" className="text-2 text-[#271F18] underline mb-[24px] text-sm md:text-base">
                  {t('footer.becomeSurrogate')}
                </a>
                <a href="/" className="text-2 text-[#271F18] text-sm md:text-base">
                  {t('footer.surrogates')}
                </a>
                <div className="w-full md:w-[199px] h-[1px] bg-[#271F18] mb-[5px]"></div>
                <a
                  href="/surrogacy-journey-overview"
                  className="text-3 text-[#271F18] mb-[5px] underline-animation text-xs md:text-sm"
                >
                  {t('menu.surrogacyJourneyOverview')}
                </a>
                <a
                  href="/eligibility-to-become-a-surrogate"
                  className="text-3 text-[#271F18] mb-[5px] underline-animation text-xs md:text-sm"
                >
                  {t('footer.surrogateEligibility')}
                </a>
                <a href="/about-us" className="text-3 text-[#271F18] mb-[5px] underline-animation text-xs md:text-sm">
                  {t('footer.whyYunda')}
                </a>
              </div>
            </div>
          </div>

          {/* 底部区域 */}
          <div className="flex items-center mt-[20px]">
            <a href="/" className="text-5 text-[#271F18] text-xs md:text-xs">
              {t('footer.privacyPolicy')}
            </a>
          </div>
        </div>
      </div>
    </Sections>
  )
}
