'use client'

import './page.scss'
import IndexHeader from '@/components/common/IndexHeader'
import Sections from '@/components/common/sections'
import Footer from '@/components/common/footer'
import IndexAnimate from '@/components/common/IndexAnimate'
import { useRouter } from 'next/navigation'

export default function HomeContent() {
  const router = useRouter()
  const handleRedirect = () => {
    router.push('/become-parents')
  }

  const handleRedirect2 = () => {
    router.push('/become-surrogates')
  }

  return (
    <div className="index-page">
      <IndexHeader />
      <IndexAnimate />
      <div>
        <Sections backgroundImg="/images/index-bg.png" className="index-first-section">
          <div className="index-content h-full flex flex-col items-center justify-center content-appear px-4 md:px-0">
            <h1 className="font-40 text-[#FBF0DA] mb-[40px] text-center text-2xl md:text-4xl lg:text-5xl">
              Professionalism. Transparency. Warmth. Protection.
            </h1>
            <h2 className="font-20 text-[#FBF0DA] text-center text-sm md:text-base lg:text-lg px-4">
              — Our unwavering promise to every family and every surrogate.
            </h2>
          </div>
        </Sections>
        <Sections color="#FAF7F2" className="h-auto md:h-[735px] py-12 md:py-0">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-0 px-4 md:px-0">
            <div className="ellipse-container flex flex-col">
              <div className="ellipse flex justify-center items-center font-64 mb-[20px] text-[#271F18] text-4xl md:text-6xl lg:text-7xl">
                10+
              </div>
              <span className="inline-block w-full md:w-[231px] font-20 text-[#271F18] text-center text-sm md:text-base">
                years of experience in third-party reproduction
              </span>
            </div>
            <div className="ellipse-container flex flex-col">
              <div className="ellipse flex justify-center items-center font-64 mb-[20px] text-[#271F18] text-4xl md:text-6xl lg:text-7xl">
                400+
              </div>
              <span className="inline-block w-full md:w-[231px] font-20 text-[#271F18] text-center text-sm md:text-base">
                families served worldwide
              </span>
            </div>
            <div className="ellipse-container flex flex-col">
              <div className="ellipse flex justify-center items-center font-64 mb-[20px] text-[#271F18] text-4xl md:text-6xl lg:text-7xl">
                300+
              </div>
              <span className="inline-block w-full md:w-[231px] font-20 text-[#271F18] text-center text-sm md:text-base">
                full IVF and surrogacy journeys completed
              </span>
            </div>
            <div className="ellipse-container flex flex-col">
              <div className="ellipse flex justify-center items-center font-64 mb-[20px] text-[#271F18] text-4xl md:text-6xl lg:text-7xl">
                95%+
              </div>
              <span className="inline-block w-full md:w-[231px] font-20 text-[#271F18] text-center text-sm md:text-base">
                client satisfaction rate sustained over the years
              </span>
            </div>
          </div>
        </Sections>
        <Sections backgroundImg="/images/index-content.png" className="h-auto md:h-[735px] py-12 md:py-0">
          <div className="flex flex-col items-center justify-center w-full content-appear px-4 md:px-0">
            <h1 className="font-40 text-[#271F18] mb-[20px] text-center text-2xl md:text-4xl lg:text-5xl">
              Global Support For Every Family
            </h1>
            <span className="font-20 text-[#271F18] max-w-[1062px] text-center text-sm md:text-base lg:text-lg px-4">
              Yunda Surrogacy is a professional agency specializing in cross-border assisted
              reproduction, offering services across all legally supported surrogacy states in the
              U.S. We partner with world-class fertility clinics, mental health professionals, and
              insurance providers to deliver fully customized, end-to-end support for intended
              parents from all backgrounds—including older couples, LGBTQ+ individuals, and single
              parents.
            </span>
            <button
              className="bg-[#FBF0DA] text-[#271F18] px-8 py-3 rounded-lg shadow font-18 mt-[80px] text-sm md:text-base"
              onClick={() => handleRedirect2()}
            >
              BECOME A PARENT
            </button>
          </div>
        </Sections>
        <Sections color="#FAF7F2" className="h-auto md:h-[608px] py-12 md:py-0">
          <div className="flex flex-col md:flex-row items-start justify-center w-full content-appear py-[75px] px-4 md:px-0">
            <div className="flex flex-col items-start md:mr-[127px] pt-[59px] mb-8 md:mb-0">
              <h1 className="font-40 text-[#271F18] mb-[15px] text-2xl md:text-4xl lg:text-5xl">
                Our Legal Expertise
              </h1>
              <span className="block font-20 w-full md:w-[816px] text-sm md:text-base lg:text-lg">
                Our most defining strength is our legal team, recognized for its depth and expertise
                in reproductive law. From early-stage risk evaluation to contract negotiation,
                parentage establishment, and birth certification, our legal experts are involved at
                every step—ensuring each journey is secure, ethical, and fully compliant. We do not
                rely on external firms—we build legal protection from within.
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <img className="w-[200px] md:w-[302px] h-[270px] md:h-[408px] mb-[10px]" src="/images/p-1.png" alt="p-1" />
              <span className="text-sm md:text-base">Judith Hoechst - Legal Advisor</span>
            </div>
          </div>
        </Sections>
        <Sections color="#A9A67D" className="h-auto md:h-[759px] py-12 md:py-0">
          <div className="flex flex-col items-center justify-center w-full content-appear px-4 md:px-0">
            <h1 className="font-40 text-[#271F18] mb-[70px] text-center text-2xl md:text-4xl lg:text-5xl">
              Surrogate Care
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-0">
              <div className="flex flex-col items-center">
                <img className="w-[150px] md:w-[236px] h-[150px] md:h-[236px]" src="/images/p-2.png" alt="Case Coordinator" />
                <span className="font-32 mt-[20px] text-[#271F18] text-center text-lg md:text-3xl">Case Coordinator</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-[150px] md:w-[236px] h-[150px] md:h-[236px]"
                  src="/images/p-3.png"
                  alt="Nutrition & Counseling"
                />
                <span className="font-32 mt-[20px] text-[#271F18] text-center text-lg md:text-3xl">Nutrition & Counseling</span>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-[150px] md:w-[236px] h-[150px] md:h-[236px]" src="/images/p-4.png" alt="Daily Check-in" />
                <span className="font-32 mt-[20px] text-[#271F18] text-center text-lg md:text-3xl">Daily Check-in</span>
              </div>
            </div>
            <button
              className="bg-[#FBF0DA] text-[#271F18] px-8 py-3 rounded-lg shadow font-18 mt-[80px] text-sm md:text-base"
              onClick={() => handleRedirect()}
            >
              BECOME A SURROGATE
            </button>
          </div>
        </Sections>
        <Sections color="#A96C42" className="h-auto md:h-[385px] py-12 md:py-0">
          <div className="flex items-center justify-center w-full content-appear px-4 md:px-0">
            <h1 className="font-32 text-[#FBF0DA] max-w-[983px] text-center text-lg md:text-3xl lg:text-4xl">
              Professionalism. Transparency. Warmth. Protection. This is our lasting commitment to
              every journey we help build.
            </h1>
          </div>
        </Sections>
        <Sections color="#FAF7F2">
          <div className="flex flex-col items-center justify-center w-full pt-[170px] px-4 md:px-[80px] text-[#000] content-appear">
            <h1 className="font-40 mb-[20px] text-center text-2xl md:text-4xl lg:text-5xl">From Planning to Parenthood</h1>
            <h2 className="font-32 mt-[10px] mb-[20px] text-center text-lg md:text-3xl lg:text-4xl">- A 4-Step Journey for Intended Parents</h2>
            <span className="font-18 max-w-[941px] mb-[45px] text-center text-sm md:text-base lg:text-lg px-4">
              At Yunda, we believe every path to parenthood deserves care, attention, and respect.
              With professional guidance and constant support, we walk alongside you—from the first
              conversation to the moment you meet your baby.
            </span>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-[78px] gap-8 lg:gap-0">
              <div className="flex flex-col lg:flex-row mr-0 lg:mr-[20px] w-full lg:w-auto">
                <div className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] rounded-full bg-[#A96C42] text-[#fff] flex justify-center mr-0 lg:mr-[20px] flex-shrink-0 mb-4 lg:mb-0 self-center lg:self-start">
                  <span className="font-64 -translate-y-[6px] -translate-x-[2px] text-4xl md:text-6xl lg:text-7xl">1</span>
                </div>
                <div className="flex flex-col justify-start font-32 text-center lg:text-left">
                  <h2 className="font-40 mb-[20px] text-2xl md:text-4xl lg:text-5xl">Consultation & Planning</h2>
                  <span className="font-18 block text-sm md:text-base lg:text-lg">
                    We begin with a one-on-one conversation to understand your background,
                    preferences, and timeline. Based on your needs, we design a personalized plan
                    and recommend suitable IVF clinics and physicians.
                  </span>
                </div>
              </div>
              <img className="w-full md:w-[519px] h-[180px] md:h-[305px] object-cover" src="/images/p-5.png" alt="p-5" />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-[78px] gap-8 lg:gap-0">
              <img className="w-full md:w-[519px] h-[180px] md:h-[305px] object-cover mr-0 lg:mr-[20px] order-1 lg:order-none" src="/images/p-6.png" alt="p-6" />
              <div className="flex flex-col lg:flex-row w-full lg:w-auto order-2 lg:order-none">
                <div className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] rounded-full bg-[#A96C42] text-[#fff] flex justify-center mr-0 lg:mr-[20px] flex-shrink-0 mb-4 lg:mb-0 self-center lg:self-start">
                  <span className="font-64 -translate-y-[6px] -translate-x-[2px] text-4xl md:text-6xl lg:text-7xl">2</span>
                </div>
                <div className="flex flex-col justify-start font-32 text-center lg:text-left">
                  <h2 className="font-40 mb-[20px] text-2xl md:text-4xl lg:text-5xl">Surrogate Matching & Medical Screening</h2>
                  <span className="font-18 block text-sm md:text-base lg:text-lg">
                    We share surrogate profiles tailored to your preferences and arrange video
                    interviews. Once matched, we coordinate all necessary medical evaluations to
                    ensure the surrogate is approved for embryo transfer.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-[78px] gap-8 lg:gap-0">
              <div className="flex flex-col lg:flex-row mr-0 lg:mr-[20px] w-full lg:w-auto">
                <div className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] rounded-full bg-[#A96C42] text-[#fff] flex justify-center mr-0 lg:mr-[20px] flex-shrink-0 mb-4 lg:mb-0 self-center lg:self-start">
                  <span className="font-64 -translate-y-[6px] -translate-x-[2px] text-4xl md:text-6xl lg:text-7xl">3</span>
                </div>
                <div className="flex flex-col justify-start font-32 text-center lg:text-left">
                  <h2 className="font-40 mb-[20px] text-2xl md:text-4xl lg:text-5xl">Legal Process & Embryo Transfer</h2>
                  <span className="font-18 block text-sm md:text-base lg:text-lg">
                    Our in-house legal team prepares and reviews all contracts and manages the
                    pre-birth order process. Meanwhile, the surrogate begins her medication cycle
                    and completes the embryo transfer under clinical supervision.
                  </span>
                </div>
              </div>
              <img className="w-full md:w-[519px] h-[180px] md:h-[305px] object-cover ml-0 lg:ml-[20px]" src="/images/p-7.png" alt="p-7" />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-[78px] gap-8 lg:gap-0">
              <img className="w-full md:w-[519px] h-[180px] md:h-[305px] object-cover mr-0 lg:mr-[20px] order-1 lg:order-none" src="/images/p-8.png" alt="p-8" />
              <div className="flex flex-col lg:flex-row w-full lg:w-auto order-2 lg:order-none">
                <div className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] rounded-full bg-[#A96C42] text-[#fff] flex justify-center mr-0 lg:mr-[20px] flex-shrink-0 mb-4 lg:mb-0 self-center lg:self-start">
                  <span className="font-64 -translate-y-[6px] -translate-x-[2px] text-4xl md:text-6xl lg:text-7xl">4</span>
                </div>
                <div className="flex flex-col justify-start font-32 text-center lg:text-left">
                  <h2 className="font-40 mb-[20px] text-2xl md:text-4xl lg:text-5xl">Pregnancy Support & Baby's Arrival</h2>
                  <span className="font-18 block text-sm md:text-base lg:text-lg">
                    Throughout the pregnancy, the surrogate receives both emotional and medical
                    care. Your dedicated case manager provides weekly updates and helps coordinate
                    any issues, leading up to the safe birth and handover of your baby.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Sections>
        <Sections color="#BFC9BF">
          <div className="flex flex-col justify-center items-center py-[150px] text-[#000] content-appear px-4 md:px-0">
            <h1 className="font-40 mb-[10px] text-center text-2xl md:text-4xl lg:text-5xl">From Budget Planning to Baby's Arrival</h1>
            <h2 className="font-32 mb-[20px] text-center text-lg md:text-3xl lg:text-4xl">Surrogacy Costs for Intended Parents</h2>
            <span className="font-18 block mb-[20px] text-center text-sm md:text-base lg:text-lg px-4">
              Every surrogacy journey is unique. Costs may vary based on factors like embryo status,
              clinic selection, and insurance needs. Typical expenses include agency fees, legal services, surrogate compensation,
              medical care, and insurance.
            </span>
            <h2 className="font-20 flex flex-col md:flex-row justify-center mb-[60px] text-center text-sm md:text-base lg:text-lg px-4">
              AT YUNDA, MOST INTENDED PARENTS CAN EXPECT TO SPEND ABOUT
              <strong className="mt-2 md:mt-0 md:ml-2">$150,000 TO $200,000,</strong>
              WHICH INCLUDES:
            </h2>
            <ul className="flex flex-col items-start font-20 w-full md:w-[748px] mt-[40px] text-sm md:text-base lg:text-lg px-4 md:px-0">
              <li className="list-disc mb-[20px]">
                $55,000–$70,000+ USD in surrogate compensation and pregnancy support
              </li>
              <li className="list-disc mb-[20px]">
                Legal, medical, and insurance-related third-party costs
              </li>
              <li className="list-disc mb-[20px]">
                All payments are securely managed through a milestone-based escrow account
              </li>
            </ul>
            <h2 className="font-20 text-center mt-[120px] text-sm md:text-base lg:text-lg px-4">
              We provide every client with a clear cost breakdown and personalized financial
              planning, so you can move forward with confidence and focus on welcoming your baby.
            </h2>
          </div>
        </Sections>
        <Footer />
      </div>
    </div>
  )
}
