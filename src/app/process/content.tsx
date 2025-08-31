'use client'

import './page.scss'
import IndexHeader from '@/components/common/IndexHeader'
import Footer from '@/components/common/footer'
import Sections from '@/components/common/sections'
import Steps from './components/steps'
import { process } from './configs'
import { useTranslation } from 'react-i18next'
import ProcessBlock from '@/app/process/components/processBlock'
import { useRouter } from 'next/navigation'
import { I18N_KEYS } from '@/i18n/keys'

export default function ProcessPageContent() {
  const { t } = useTranslation()
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/become-parents')
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] process-page">
      <IndexHeader />
      <section
        className="w-full h-auto md:h-[676px] flex justify-center items-center relative py-12 md:py-0"
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, rgba(191, 201, 191, 0.70) 100%)`,
        }}
      >
        <div className="container flex items-center flex-col content-appear h-full pt-[100px] md:pt-[150px] relative px-4 md:px-0">
          <h1 className="font-40 text-[#271F18] text-2xl md:text-4xl lg:text-5xl text-center">{t('process.title')}</h1>
          <span className="font-20 text-[#271F18] block mt-5 mb-10 text-sm md:text-base lg:text-lg text-center">{t('process.intro1')}</span>
          <span className="font-20 text-[#271F18] block text-sm md:text-base lg:text-lg text-center">{t('process.intro2')}</span>
          <span className="font-20 text-[#271F18] block text-sm md:text-base lg:text-lg text-center">{t('process.intro3')}</span>
          <span className="font-20 text-[#271F18] block text-sm md:text-base lg:text-lg text-center">{t('process.intro4')}</span>
          <span className="font-20 text-[#271F18] block text-sm md:text-base lg:text-lg text-center">{t('process.intro5')}</span>
        </div>
        <div className="absolute bottom-[50px] md:bottom-[100px] left-0 w-full flex flex-col items-center px-4 md:px-0">
          <button
            className="bg-[#FBF0DA] text-[#271F18] px-6 md:px-8 py-3 rounded-lg shadow font-18 mt-[40px] md:mt-[80px] text-sm md:text-base"
            onClick={() => handleRedirect()}
          >
            BECOME A PARENT
          </button>
        </div>
      </section>
      <Sections className="relative min-h-[1200px] md:min-h-auto">
        <div className="w-full flex flex-col justify-center items-center content-appear py-[80px] md:py-[150px] px-4 md:px-0">
          <h2 className="font-40 text-[#271F18] w-full text-center text-2xl md:text-4xl lg:text-5xl mb-8 md:mb-0">{t('process.stepsTitle')}</h2>
          <div className="my-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              className="md:w-[40px] md:h-[40px]"
            >
              <circle cx="20" cy="20" r="20" fill="#BFC9BF" />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="auto"
            viewBox="0 0 1089 1156"
            fill="none"
            className="max-w-[1089px] hidden md:block"
          >
            <path
              d="M544.5 1.5V63.5V73.5C544.5 101.114 522.114 123.5 494.5 123.5H51C23.3858 123.5 1.00001 145.886 1.00001 173.5V225.5C1.00001 253.114 23.3858 275.5 51 275.5H1038C1065.61 275.5 1088 297.886 1088 325.5V379C1088 406.614 1065.61 429 1038 429H51C23.3858 429 1.00001 451.386 1.00001 479L1 530C1 557.614 23.3858 580 51 580H1038C1065.61 580 1088 602.386 1088 630V681C1088 708.614 1065.61 731 1038 731H51C23.3858 731 1.00001 753.386 1.00001 781V832C1.00001 859.614 23.3858 882 51 882H1038C1065.61 882 1088 904.386 1088 932V982.5C1088 1010.11 1065.61 1032.5 1038 1032.5H818H594.5C566.886 1032.5 544.5 1054.89 544.5 1082.5V1155"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div className="my-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              className="md:w-[40px] md:h-[40px]"
            >
              <circle cx="20" cy="20" r="20" fill="#BFC9BF" />
            </svg>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center content-appear">
          <Steps />
        </div>
      </Sections>
      <Sections
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, #FBF0DA 50.96%, #FAF7F2 100%)`,
        }}
      >
        <div className="flex flex-col w-full">
          {process.map((item, idx) => (
            <ProcessBlock key={idx} item={item} idx={idx} isLast={idx === process.length - 1} />
          ))}
        </div>
      </Sections>
      <div className="w-full h-auto md:h-[676px] flex justify-center items-center mt-[80px] md:mt-[155px] bg-[#A9A67D] py-12 md:py-0">
        <div className="container flex justify-center items-center flex-col content-appear px-4 md:px-0">
          <h1 className="font-40 text-[#271F18] text-2xl md:text-4xl lg:text-5xl text-center">{t('process.endTitle')}</h1>
          <span className="font-20 text-[#271F18] block mt-5 mb-10 w-full md:w-[1111px] text-sm md:text-base lg:text-lg text-center">
            {t('process.endDesc1')}
          </span>
          <span className="font-20 text-[#271F18] block w-full md:w-[1111px] text-sm md:text-base lg:text-lg text-center">{t('process.endDesc2')}</span>
          <button
            className="bg-[#FBF0DA] text-[#271F18] px-6 md:px-8 py-3 rounded-lg shadow font-18 mt-[40px] md:mt-[80px] text-sm md:text-base"
            onClick={() => handleRedirect()}
          >
            {t(I18N_KEYS.menu.becomeParent)}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
