'use client'
import './page.scss'
import IndexHeader from '@/components/common/IndexHeader'
import Footer from '@/components/common/footer'
import { useRouter } from 'next/navigation'

export default function OurScreeningProcessPageContent() {
  const router = useRouter()
  const handleRedirect = () => {
    router.push('/become-surrogates')
  }
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] our-screening-process-page">
      <IndexHeader />
      {/* Hero Section */}
      <section
        className="hero-section w-full h-[676px] flex justify-center items-center relative content-appear"
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, rgba(191, 201, 191, 0.70) 47.12%, #FAF7F2 99.52%)`,
        }}
      >
        <div className="container flex flex-col items-center relative z-10 h-full pt-[150px]">
          {/* <img src="/images/logo.svg" alt="logo" className="mb-6 w-[105px] h-[96px]" /> */}
          <h1 className="font-40 text-[#271F18] mb-6 text-center">Our Screening Process</h1>
          <span className="font-20 text-[#271F18] text-center max-w-[1111px] mt-[20px] block">
            At Yunda Surrogacy, we believe that every surrogate deserves to be fully informed, cared
            for, and protected. <br />
            That's why we've designed a thorough, respectful, and supportive screening process to
            ensure you're ready—physically, emotionally, and practically—for the surrogacy journey
            ahead.
            <br />
            <br />
            Our screening process helps us understand your unique story and ensure that you are a
            great fit for this life-changing experience. It also gives you a chance to ask questions
            and feel confident every step of the way.
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
      <div
        className="pb-[150px] content-appear"
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, #FBF0DA 50.96%, #FAF7F2 100%)`,
        }}
      >
        <div className="container m-auto">
          <div className="relative z-10 container m-auto px-[84px]">
            <h2 className="font-40 text-[#271F18] mb-8">Our Surrogate Screening Includes:</h2>
            <ul className="screening-list font-20 text-[#271F18] mb-[40px] list-disc pl-8">
              <li>Comprehensive online application</li>
              <li>Introductory consultation with our care team</li>
              <li>Psychological screening by a licensed therapist</li>
              <li>Background check for safety assurance</li>
              <li>Medical record review (including past pregnancies)</li>
              <li>In-person fertility clinic exam</li>
              <li>Partner screening (if applicable)</li>
              <li>Insurance and financial assessment</li>
            </ul>
            <div className="font-20 text-[#271F18] mb-[80px]">
              We cover all screening costs and guide you closely through each step. There's no
              pressure—only support. Once you're medically and psychologically cleared, we'll move
              on to matching you with the perfect intended parents.
            </div>
          </div>
          <div className="relative z-10 container m-auto px-[84px]">
            <h2 className="font-40 text-[#271F18] mb-8">
              What Makes a Strong and Healthy Surrogate Candidate?
            </h2>
            <div className="font-20 text-[#271F18] mb-[40px]">
              To protect both surrogates and intended parents, and to ensure a healthy, successful
              journey, all candidates must meet the following medical, lifestyle, and legal
              requirements. These standards are based on guidelines from top IVF clinics and the
              American Society for Reproductive Medicine (ASRM).
            </div>
            <ul className="requirements-list font-20 text-[#271F18] mb-[40px] list-disc pl-8">
              <li>Age Requirement: 21–40 Years</li>
              <li>BMI Requirement: Under 32</li>
              <li>Non-Smoking for at Least 12 Months</li>
              <li>Drug-Free Lifestyle</li>
              <li>At Least One Prior Healthy Pregnancy</li>
              <li>No Major Obstetric or Chronic Medical History</li>
              <li>Healthy and Stable Lifestyle</li>
              <li>Strong Support System</li>
              <li>No Criminal or Abuse History</li>
              <li>Financial Stability</li>
            </ul>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <section className="cta-section w-full h-[537px] flex justify-center items-center bg-[#A9A67D] content-appear">
        <div className="container flex flex-col items-center justify-center">
          <h1 className="font-40 text-[#271F18] mb-6 text-center">
            Think You Might Be a Good Fit?
          </h1>
          <div className="font-20 text-[#271F18] text-center max-w-[1111px] mb-[80px]">
            Talk with a Yunda advisor one-on-one to learn more about eligibility and compensation.
          </div>
          <button
            className="bg-[#FBF0DA] text-[#271F18] px-8 py-3 rounded-lg shadow font-18 mt-[80px]"
            onClick={() => handleRedirect()}
          >
            BECOME A SURROGATE
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
