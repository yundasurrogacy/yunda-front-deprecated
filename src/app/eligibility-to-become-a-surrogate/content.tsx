'use client'
import './page.scss'
import { useRouter } from 'next/navigation'
import IndexHeader from '@/components/common/IndexHeader'
import Footer from '@/components/common/footer'

export default function EligibilityToBecomeASurrogatePageContent() {
  const router = useRouter()
  const handleRedirect = () => {
    router.push('/become-surrogates')
  }
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] eligibility-to-become-a-surrogate-page">
      <IndexHeader />
      {/* Hero Section */}
      <section
        className="w-full h-[676px] flex justify-center items-center content-appear relative"
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, rgba(191, 201, 191, 0.70) 47.12%, #FAF7F2 99.52%)`,
        }}
      >
        <div className="container flex flex-col items-center relative z-10 h-full pt-[150px]">
          {/* logo 可选，如需加上可解开注释 */}
          {/* <img src="/assets/images/logo.png" alt="logo" className="mb-6 w-[105px] h-[96px]" /> */}
          <h1 className="font-40 text-[#271F18] mb-6 text-center">
            Eligibility to Become a Surrogate
          </h1>
          <div className="font-20 text-[#271F18] text-center max-w-[1111px] mt-[20px]">
            <span className="block mb-[40px]">
              At Yunda Surrogacy, we believe that women who are willing to help others grow a family{' '}
              <br />
              deserve the highest respect, support, and care.
            </span>
            <span className="block">
              Becoming a surrogate is a meaningful commitment—and we're here to walk with you every
              step of the way.
            </span>
          </div>
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
        <div className="relative z-10 container m-auto px-[84px]">
          {/* Basic Qualifications */}
          <section className="qualifications-section container mx-auto">
            <h2 className="font-40 text-[#271F18] mb-8">Basic Qualifications</h2>
            <div className="font-20 text-[#271F18] mb-[40px]">
              To ensure a healthy and secure journey for everyone, we ask that all surrogates meet
              the following minimum qualifications:
            </div>
            <ul className="qualification-list font-20 text-[#271F18] mb-[40px] list-disc pl-8">
              <li>Be 21 to 40 years old</li>
              <li>Have had at least one full-term, uncomplicated vaginal birth</li>
              <li>Currently live in a stable home with reliable support</li>
              <li>Be a U.S. citizen or permanent resident (Green Card holder)</li>
              <li>Live a healthy lifestyle, including being a non-smoker</li>
              <li>Have no criminal background or child abuse history</li>
            </ul>
            <div className="font-20 text-[#271F18] mb-[40px]">
              We welcome women of all backgrounds—single, married, working moms or stay-at-home—if
              you are physically and emotionally ready to give this incredible gift, we'd love to
              hear from you.
            </div>
          </section>
          {/* Disqualifying Factors */}
          <section className="disqualifying-section container mx-auto py-[60px]">
            <h2 className="font-40 text-[#271F18] mb-8">Common Disqualifying Factors</h2>
            <div className="font-20 text-[#271F18] mb-[40px]">
              You may not qualify for surrogacy if you:
            </div>
            <ul className="disqualify-list font-20 text-[#271F18] mb-[40px] list-disc pl-8">
              <li>Have never given birth</li>
              <li>Had serious complications in previous pregnancies</li>
              <li>Have a BMI above the acceptable limit (usually 33)</li>
              <li>Are currently on antidepressants or have ongoing mental health issues</li>
              <li>Do not have financial stability or family support</li>
              <li>Reside in a state that restricts surrogacy (our team can help verify)</li>
            </ul>
          </section>
          {/* Gentle Note */}
          <section className="gentle-note-section container mx-auto py-[60px]">
            <h2 className="font-40 text-[#271F18] mb-8">A Gentle Note</h2>
            <div className="font-20 text-[#271F18] mb-[40px]">
              Not qualifying for surrogacy is never a judgment of your character. It simply means
              that at this time, your body or environment may not align with the medical or legal
              standards for surrogacy. We're happy to offer other ways to stay involved and support
              hopeful parents.
            </div>
          </section>
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
