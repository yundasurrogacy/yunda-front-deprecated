'use client'

import './page.scss'
import IndexHeader from '@/components/common/IndexHeader'
import Footer from '@/components/common/footer'
import Sections from '@/components/common/sections'
import Steps from './components/steps'
import { items, plans1, plans2, plans3 } from './configs'
import { useTranslation } from 'react-i18next'
import PriceBlock from '@/app/price/components/priceBlock'
import { useRouter } from 'next/navigation'
import { I18N_KEYS } from '@/i18n/keys'
import PriceHover from '@/app/price/components/priceHover'

export default function PricePageContent() {
  const { t } = useTranslation()
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/become-parents')
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] price-page">
      <IndexHeader />
      <section
        className="w-full h-[676px] flex justify-center items-center"
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, rgba(191, 201, 191, 0.70) 100%)`,
        }}
      >
        <div className="container flex items-center flex-col content-appear h-full pt-[150px] relative">
          <h1 className="font-40 text-[#271F18]">How Much Does Surrogacy Cost?</h1>
          <div className="font-20 text-[#271F18] mt-5 mb-[161px] flex flex-col items-end">
            <span>
              Surrogacy is a journey of love—and a financial decision that deserves clarity.
            </span>
            <span>
              At Yunda, we believe in full transparency, detailed breakdowns, and no hidden fees.
            </span>
          </div>
          <div className="absolute bottom-[100px] left-0 w-full flex flex-col items-center">
            <button
              className="bg-[#FBF0DA] text-[#271F18] px-8 py-3 rounded-lg shadow font-18 mt-[80px]"
              onClick={() => handleRedirect()}
            >
              BECOME A PARENT
            </button>
          </div>
        </div>
      </section>
      <Sections className="relative">
        <div className="w-full flex flex-col justify-center items-center  content-appear py-[150px]">
          <h2 className="font-40 text-[#271F18] w-full text-center">Cost Overview</h2>
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
            width="1089"
            height="1156"
            viewBox="0 0 1089 1156"
            fill="none"
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
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle cx="20" cy="20" r="20" fill="#BFC9BF" />
            </svg>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <Steps />
        </div>
      </Sections>
      <div
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, #FBF0DA 50.96%, #FAF7F2 100%)`,
        }}
      >
        <div className="max-w-[1400px] min-w-[1200px] m-auto flex flex-wrap justify-between pt-[80px]">
          {items.map((item, idx) => (
            <PriceBlock key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
      <div
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, #FBF0DA 50.96%, #FAF7F2 100%)`,
        }}
      >
        <div className="container m-auto flex flex-col justify-center items-start pt-[150px] px-[80px] content-appear">
          <h1 className="font-40 mb-[20px]">Additional Terms for Yunda Surrogacy Package</h1>
          <span className="font-20 block w-[1111px]">
            At Yunda, we are committed to offering transparent and predictable cost management for
            every intended parent. The following outlines potential additional expenses that may
            arise during the surrogacy process. These terms will also be incorporated into the
            formal legal agreement. Please note that all figures are estimates — you will be
            responsible only for actual costs incurred by the surrogate, and any unused funds will
            be refunded after final reconciliation at the end of the journey. All estimates assume
            delivery occurs at a standard hospital near the surrogate's place of residence. If you
            request a specific location or if medical needs change, costs may vary accordingly.
          </span>
        </div>
        <div className="container m-auto flex flex-col justify-center items-start py-[150px] px-[80px] content-appear">
          <h1 className="font-20 mb-[20px]">Surrogate Benefits May Include:</h1>
          <div className="w-full h-[2px] bg-[#000]"></div>

          {plans1.map((item, idx) => (
            // <PriceHover key={idx} className="w-full">
            //   <div className="w-full flex justify-between items-center font-18 my-[10px]">
            //     <span>{item.title}</span>
            //     <span>{item.price}</span>
            //   </div>
            //   <div className="mt-[10px] w-full h-[2px] bg-[#000]" />
            // </PriceHover>
            <div key={idx} className="w-full">
              <div className="w-full flex justify-between items-center font-18 my-[10px]">
                <span>{item.title}</span>
                <span>{item.price}</span>
              </div>
              <div className="mt-[10px] w-full h-[2px] bg-[#000]"></div>
            </div>
          ))}

          <h1 className="font-20 blcok mt-[80px] mb-[20px]">Not Included in the Package:</h1>
          <div className="w-full h-[2px] bg-[#000]"></div>

          {plans2.map((item, idx) => (
            // <PriceHover key={idx} className="w-full">
            //   <div className="w-full flex justify-between items-center font-18 my-[10px]">
            //     <span>{item.title}</span>
            //   </div>
            //   <div className="mt-[10px] w-full h-[2px] bg-[#000]" />
            // </PriceHover>
            <div key={idx} className="w-full">
              <div className="w-full flex justify-between items-center font-18 my-[10px]">
                <span>{item.title}</span>
              </div>
              <div className="mt-[10px] w-full h-[2px] bg-[#000]"></div>
            </div>
          ))}

          <h1 className="font-20 blcok mt-[80px] mb-[20px]">Surrogate Insurance Notes:</h1>
          <div className="w-full h-[2px] bg-[#000]"></div>
          <ul className="w-full list-disc pl-[30px] font-18 py-[10px] w-[1176px]">
            {plans3.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <section className="w-full h-[676px] flex justify-center items-center bg-[#A9A67D]">
        <div className="container flex justify-center items-center flex-col content-appear">
          <h1 className="font-40 text-[#271F18] mb-6 text-center">Ready to Plan Your Journey?</h1>
          <div className="font-20 text-[#271F18] text-center max-w-[1111px] mb-8">
            Let's start with a personalized consultation—no pressure, just answers.
          </div>
          <button
            className="bg-[#FBF0DA] text-[#271F18] px-8 py-3 rounded-lg shadow font-18 mt-[80px]"
            onClick={() => handleRedirect()}
          >
            {t(I18N_KEYS.menu.becomeParent)}
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
