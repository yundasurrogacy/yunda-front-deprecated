'use client'

import React, { useState } from 'react'
import IndexHeader from '@/components/common/IndexHeader'
import Footer from '@/components/common/footer'
import { FAQ_LIST } from './configs'
import Arrow from './components/arrow'
import './page.scss'
import { useRouter } from 'next/navigation'

export default function SingleParentsClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const router = useRouter()
  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  const handleRedirect = () => {
    router.push('/become-parents')
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] single-parents-page">
      <IndexHeader />
      {/* 顶部介绍区块 */}
      <section
        className="w-full h-[676px] flex justify-center content-appear relative"
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, rgba(191, 201, 191, 0.70) 100%)`,
        }}
      >
        <div className="container flex flex-col items-center h-full pt-[150px]">
          <h1 className="font-40 text-[#271F18] mb-6 text-center">Love Creates Families</h1>
          <span className="font-20 text-[#271F18] text-center max-w-[1111px] mt-[20px]">
            At Yunda, we proudly welcome LGBTQ+ individuals, single parents,
          </span>
          <span className="font-20 text-[#271F18] text-center max-w-[1111px] mb-[80px]">
            and non-traditional families with open arms, professional support, and unwavering
            respect.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center absolute bottom-[140px] left-0 w-full">
          <button
            className="bg-[#FBF0DA] text-[#271F18] px-8 py-3 rounded-lg shadow font-16-Regular mt-4"
            onClick={() => handleRedirect()}
          >
            BECOME A PARENT
          </button>
        </div>
      </section>
      {/* 客户故事区块 */}
      <section className="container m-auto flex items-start py-[150px] text-[#271F18] content-appear">
        <div className="w-[732px] h-[450px] mr-[41px]">
          <img className="w-full h-full" src="/process/i-7.png" alt="" />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h2 className="font-32 mb-[57px]">“We're Dads Now" </h2>
          <span className="font-20 max-w-[700px] mb-[20px]">
            "Going through surrogacy for the second time, we chose Yunda for a smoother, more
            transparent journey — and they exceeded all expectations. Our coordinator was incredibly
            thoughtful and responsive. Most importantly, we felt safe and respected every step of
            the way as a same-sex couple. The structured costs helped reduce stress, and now we're
            home… as new dads."
          </span>
          <span className="font-20 ]">— A happy two-dad family</span>
        </div>
      </section>
      <div
        className="pb-[150px] content-appear"
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, #FBF0DA 50.96%, #FAF7F2 100%)`,
        }}
      >
        <div className="container m-auto">
          <div>
            <h2 className="font-40 text-[#271F18] mb-[80px]">
              What We Offer LGBTQ+ & Single Parents
            </h2>
            <div className="flex items-center font-18 border-t-[2px] border-[#000] pt-[10px] mb-[10px]">
              <span className="block w-[435px] mr-[20px]">Inclusive & Judgment-Free Process</span>
              <span>
                Respectful, unbiased support at every stage—legal, medical, and emotional.
              </span>
            </div>
            <div className="flex items-center font-18 border-t-[2px] border-[#000] pt-[10px] mb-[10px]">
              <span className="block w-[435px] mr-[20px]">LGBTQ+ Friendly Matching</span>
              <span>
                Surrogates and clinics that embrace and support same-sex and single-parent families.
              </span>
            </div>
            <div className="flex items-center font-18 border-t-[2px] border-[#000] pt-[10px] mb-[10px]">
              <span className="block w-[435px] mr-[20px]">Legal Expertise</span>
              <span>
                PBO planning and birth certificate setup tailored for LGBTQ+ and single parents.
              </span>
            </div>
            <div className="flex items-center font-18 border-t-[2px] border-[#000] pt-[10px] mb-[10px]">
              <span className="block w-[435px] mr-[20px]">Global Experience</span>
              <span>Specialized in serving families from Asia, the U.S., and worldwide.</span>
            </div>
            <div className="flex items-center font-18 border-t-[2px] border-[#000] pt-[10px] mb-[10px]">
              <span className="block w-[435px] mr-[20px]">Multilingual Support</span>
              <span>Seamless communication in both English and Chinese.</span>
            </div>
            <div className="flex items-center font-18 border-t-[2px] border-b-[2px] border-[#000] py-[10px]">
              <span className="block w-[435px] mr-[20px]">Personalized Guidance</span>
              <span>
                1-on-1 support for your unique family structure, no matter where you live.
              </span>
            </div>
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
                    className={`font-20 text-[#271F18]overflow-hidden transition-all duration-300 ${open ? 'max-h-40 opacity-100 mt-[30px] pl-[35px]' : 'max-h-0 opacity-0'}`}
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
          <h1 className="font-40 text-[#271F18] mb-6 text-center">Ready to Start Your Journey?</h1>
          <div className="font-20 text-[#271F18] text-center max-w-[1111px] mb-8">
            Let us help you build the family you've dreamed of—with care, clarity, and respect for
            who you are.
          </div>
          <button
            className="bg-[#FBF0DA] text-[#271F18] px-8 py-3 rounded-lg shadow font-16-Regular mt-4"
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
