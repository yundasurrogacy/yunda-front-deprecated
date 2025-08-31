'use client'

import './page.scss'
import { useState } from 'react'
import IndexHeader from '@/components/common/IndexHeader'
import Footer from '@/components/common/footer'
import { FAQ_LIST, items } from './configs'
import Arrow from './components/arrow'
import { useRouter } from 'next/navigation'
import ServiceBlock from '@/app/partner-ivf-clinics/components/serviceBlock'

export default function PartnerIVFClinicsPageContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const router = useRouter()
  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  const handleRedirect = () => {
    router.push('/become-parents')
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] partner-ivf-clinics-page">
      <IndexHeader />
      {/* 顶部介绍区块 */}
      <section
        className="w-full h-[676px] flex justify-center items-center content-appear"
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, rgba(191, 201, 191, 0.70) 100%)`,
        }}
      >
        <div className="container flex flex-col items-center h-full pt-[150px] relative">
          <h1 className="font-40 text-[#271F18] mb-6 text-center">Why Your IVF Clinic Matters</h1>
          <span className="font-20 text-[#271F18] text-center max-w-[1111px] mt-[20px] mb-[80px]">
            Your surrogacy journey often begins with embryo creation. The right clinic not only
            impacts embryo quality—it shapes your entire experience. Yunda partners with top U.S.
            and Asian fertility centers to ensure success from day one.
          </span>
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
      <div
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, #FBF0DA 50.96%, #FAF7F2 100%)`,
        }}
        className="content-appear"
      >
        <div className="container m-auto">
          <div className="relative z-10 container m-auto px-[84px] my-[150px]">
            <h2 className="font-40 text-[#271F18] mb-[80px]">How We Support You</h2>
            <div className="flex items-center font-18 border-t-[2px] border-[#000] pt-[10px] mb-[10px]">
              <span className="block w-[435px] mr-[20px]">Recommend Trusted Clinics</span>
              <span>We suggest high-success-rate clinics and doctors based on your goals.</span>
            </div>
            <div className="flex items-center font-18 border-t-[2px] border-[#000] pt-[10px] mb-[10px]">
              <span className="block w-[435px] mr-[20px]">Coordinate Consultations</span>
              <span>Book in-person or virtual IVF appointments for you.</span>
            </div>
            <div className="flex items-center font-18 border-t-[2px] border-[#000] pt-[10px] mb-[10px]">
              <span className="block w-[435px] mr-[20px]">Handle Embryo Shipping</span>
              <span>Manage legal & FDA-compliant international embryo transport.</span>
            </div>
            <div className="flex items-center font-18 border-t-[2px] border-[#000] pt-[10px] mb-[10px]">
              <span className="block w-[435px] mr-[20px]">Prepare Medical Documents</span>
              <span>Help you complete screening paperwork abroad.</span>
            </div>
            <div className="flex items-center font-18 border-t-[2px] border-b-[2px] border-[#000] py-[10px]">
              <span className="block w-[435px] mr-[20px]">Work With Your Chosen Clinic</span>
              <span>Already have a clinic? We coordinate directly with them too.</span>
            </div>
            <h1 className="font-40 mt-[171px] mb-[80px]">Typical Medical Services Covered</h1>
            <div className="max-w-[100%] min-w-[1200px] m-auto flex flex-wrap justify-between">
              {items.map((item, idx) => (
                <ServiceBlock key={idx} item={item} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="pb-[150px] content-appear"
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, #FBF0DA 50.96%, #FAF7F2 100%)`,
        }}
      >
        <div className="container m-auto">
          <h1 className="font-40 mb-[80px]">Some of Our Trusted IVF Clinic Partners</h1>
          {/* ----- 不要做多语言 start ----- */}
          <div className="flex items-center font-32 justify-around">
            <span>EFC</span>
            <span>Pinnacle</span>
            <span>SCRC</span>
          </div>
          <div className="flex items-center font-32 justify-around mt-[63px] mb-[135px]">
            <span>Harvest</span>
            <span style={{ fontFamily: 'Songti SC' }}>香港宝德</span>
            <span>Gen5</span>
            <span>Incinta</span>
          </div>
          {/* ----- 不要做多语言 end ----- */}
          <div className="flex items-center">
            {new Array(7).fill(0).map((_, idx) => (
              <div key={idx} className="flex-1">
                <img className="w-full" src={`/process/i-${idx + 8}.png`} alt="doctor" />
              </div>
            ))}
          </div>
          <div className="mt-[150px]">
            <h2 className="font-40 text-[#271F18] mb-8">FAQs</h2>
            {FAQ_LIST.map((item, idx) => {
              const open = openIndex === idx
              return (
                <div className="mb-[25px]" key={item.title}>
                  <button
                    className="font-20 text-[#271F18] mb-2 faq-header flex justify-between items-center h-[50px] px-[25px] w-full text-left focus:outline-none"
                    onClick={() => handleToggle(idx)}
                  >
                    {item.title}
                    <Arrow className={open ? 'rotate-180' : ''} />
                  </button>
                  <div
                    className={`font-20 overflow-hidden transition-all duration-300 ${open ? 'max-h-40 opacity-100 mt-[30px] pl-[35px]' : 'max-h-0 opacity-0'}`}
                    style={{
                      transitionProperty: 'max-height, opacity, margin-top, padding-left',
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* 结尾区块 */}
      <section className="w-full h-[520px] flex justify-center items-center bg-[#A9A67D] content-appear">
        <div className="container flex flex-col items-center justify-center">
          <h1 className="font-40 text-[#271F18] mb-6 text-center">Ready to Plan Your Journey?</h1>
          <div className="font-20 text-[#271F18] text-center max-w-[1111px] mb-8">
            Let's start with a personalized consultation—no pressure, just answers.
          </div>
          <button
            className="bg-[#FBF0DA] text-[#271F18] px-8 py-3 rounded-lg shadow font-18 mt-[80px]"
            onClick={() => handleRedirect()}
          >
            BECOME A PARENT
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
