'use client'

import './page.scss'
import React from 'react'
import IndexHeader from '@/components/common/IndexHeader'
import Footer from '@/components/common/footer'
import { useTranslation } from 'react-i18next'
import { testimonials } from './configs'
import Sections from '@/components/common/sections'
import Steps from './components/steps'
import { useRouter } from 'next/navigation'
import SampleBlock from '@/app/surrogacy-journey-overview/components/sampleBlock'

export default function SurrogacyJourneyOverviewContent() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const handleRedirect = () => {
    router.push('/become-surrogates')
  }
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] surrogacy-journey-overview-page">
      <IndexHeader />
      {/* 头图介绍区块 */}
      <section
        className="w-full h-[676px] flex justify-center items-center content-appear relative"
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, rgba(191, 201, 191, 0.70) 47.12%, #FAF7F2 99.52%)`,
        }}
      >
        <div className="container flex flex-col items-center relative z-10 h-full pt-[150px]">
          <h1 className="font-40 text-[#271F18] mb-6 text-center">Surrogacy Journey Overview</h1>
          <span className="font-20 text-[#271F18] text-center max-w-[1111px] mt-[20px]">
            From the moment you apply to become a surrogate to the postpartum recovery after
            delivery, this journey is not only about helping others build their families—it's also a
            deeply meaningful experience of compassion, growth, and connection.
          </span>
          <span className="font-20 text-[#271F18] text-center max-w-[1111px] mb-[40px]">
            At Yunda Surrogacy, we recognize the importance of your role and are committed to
            guiding and supporting you at every step. While every journey is unique, the average
            surrogacy process typically takes 16 to 18 months.
          </span>
          <div className="absolute bottom-[100px] left-0 w-full flex flex-col items-center">
            <button
              className="bg-[#FBF0DA] text-[#271F18] px-8 py-3 rounded-lg shadow font-18 mt-[80px]"
              onClick={() => handleRedirect()}
            >
              BECOME A SURROGATE
            </button>
          </div>
        </div>
      </section>
      {/* 流程区块 */}
      <Sections className="relative">
        <div className="w-full flex flex-col justify-center items-center  content-appear py-[150px]">
          <h2 className="font-40 text-[#271F18] w-full text-center relative z-[10]">
            {t('surrogacy.stepsTitle')}
          </h2>
          <div className="my-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle cx="20" cy="20" r="20" fill="#BFC9BF" />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1091"
            height="1756"
            viewBox="0 0 1091 1756"
            fill="none"
          >
            <path
              d="M545.5 1V63V73C545.5 100.614 523.115 123 495.5 123H52.2087C24.5131 123 2.09382 145.513 2.20917 173.208L2.59652 266.208C2.71119 293.741 25.0631 316 52.5961 316H1039.59C1067.29 316 1089.71 338.514 1089.59 366.21L1089.21 457.71C1089.09 485.242 1066.74 507.5 1039.21 507.5H52.0001C24.3858 507.5 2.00004 529.886 2.00003 557.5L2 650.5C1.99999 678.114 24.3858 700.5 52 700.5H1039C1066.61 700.5 1089 722.886 1089 750.5L1089 843C1089 870.614 1066.61 893 1039 893H51.9627C24.363 893 1.98336 915.363 1.96276 942.963L1.89363 1035.56C1.87299 1063.2 24.2825 1085.62 51.9226 1085.6L1038.97 1085.03C1066.6 1085.01 1089 1107.4 1089 1135.03V1227C1089 1254.61 1066.61 1277 1039 1277H819H412.103H55.2059C27.5916 1277 5.20591 1299.39 5.20591 1327L5.20591 1419.5C5.20591 1447.11 27.5917 1469.5 55.2059 1469.5H1039.8C1067.42 1469.5 1089.8 1491.89 1089.8 1519.5V1612C1089.8 1639.61 1067.42 1662 1039.8 1662H595.5C567.886 1662 545.5 1684.39 545.5 1712V1755"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div className="my-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle cx="20" cy="20" r="20" fill="#BFC9BF" />
            </svg>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center content-appear">
          <Steps />
        </div>
      </Sections>
      <div
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, #FBF0DA 50.96%, #FAF7F2 100%)`,
        }}
        className="content-appear"
      >
        <div className="relative z-10 container m-auto px-[84px]">
          <h2 className="font-40 mb-[80px]">{t('surrogacy.testimonialsTitle')}</h2>
          <div className="testimonials-list w-full">
            {testimonials.map((item, idx) => (
              <SampleBlock key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
      {/* 结尾 CTA 区块 */}
      <section className="cta-section w-full h-[537px] flex justify-center items-center bg-[#A9A67D] content-appear">
        <div className="container flex flex-col items-center justify-center">
          <h1 className="font-40 text-[#271F18] mb-6 text-center">{t('surrogacy.ctaTitle')}</h1>
          <div className="font-20 text-[#271F18] text-center max-w-[1111px] mb-8">
            {t('surrogacy.ctaDesc')}
          </div>
          <button
            className="bg-[#FBF0DA] text-[#271F18] px-8 py-3 rounded-lg shadow font-18-Regular mt-[80px]"
            onClick={() => handleRedirect()}
          >
            {t('surrogacy.ctaBtn')}
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
