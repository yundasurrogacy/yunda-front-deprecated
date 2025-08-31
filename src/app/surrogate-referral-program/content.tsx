'use client'
import './page.scss'
import IndexHeader from '@/components/common/IndexHeader'
import Footer from '@/components/common/footer'
import { useRouter } from 'next/navigation'
import { milestones, medicalServices } from './configs'

export default function SurrogateReferralProgramPageContent() {
  const router = useRouter()
  const handleRedirect = () => {
    router.push('/about-us')
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] surrogate-referral-program-page">
      <IndexHeader />
      {/* Hero Section */}
      <section
        className="hero-section w-full h-[676px] flex justify-center items-center relative content-appear"
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, rgba(191, 201, 191, 0.70) 47.12%, #FAF7F2 99.52%)`,
        }}
      >
        <div className="container flex flex-col items-center relative z-10 pt-[150px] h-full">
          <h1 className="font-40 text-[#271F18] mb-6 text-center max-w-[1081px]">
            Surrogate Referral Program
          </h1>
          <span className="font-20 text-[#271F18] text-center max-w-[1111px] mt-[20px] block">
            Help a Loving Woman Become a Hero — And Earn up to $5,000
            <br />
            Every year, thousands of hopeful parents dream of having a child — and gestational
            surrogates make those dreams come true. If you know someone with a generous heart and a
            strong body who may be interested in becoming a surrogate, we invite you to refer her to
            our program.
            <br />
            <br />
            And as a token of appreciation, you could receive up to $5,000 for each successful
            referral.
          </span>
          <div className="absolute bottom-[100px] left-0 w-full flex flex-col items-center">
            <button
              className="bg-[#FBF0DA] text-[#271F18] px-8 py-3 rounded-lg shadow font-18 mt-[80px]"
              onClick={() => handleRedirect()}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      <div
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, #FBF0DA 50.96%, #FAF7F2 100%)`,
        }}
        className="pb-[150px] content-appear"
      >
        {/* Milestone Table Section */}
        <section className="milestone-section relative py-[80px]">
          <div className="relative z-10 container m-auto px-[84px]">
            <h2 className="font-40 text-[#271F18] mb-8">Why Your Referral Matters</h2>
            <div className="font-20 text-[#271F18] mb-[40px] max-w-[1253px]">
              You're not just helping a friend begin a powerful and meaningful journey—you're
              helping another family finally hold the baby they've dreamed of. And we'll thank you
              for it, every step of the way.
            </div>
          </div>
          <div className="relative z-10 container m-auto px-[84px]">
            <h2 className="font-40 text-[#271F18] mb-[53px]">Typical Medical Services Covered</h2>
            <div className="mb-[80px]">
              <div className="flex font-18 font-bold border-b-2 border-[#000]">
                <div className="w-[60%] py-4 px-4 border-[#000]">Milestone</div>
                <div className="w-[40%] py-4 px-4">Your Bonus</div>
              </div>
              {milestones.map((item, idx) => (
                <div
                  key={item.milestone}
                  className={`flex font-18 border-b-2 border-[#000] ${idx === 0 ? 'border-t-0' : ''}`}
                >
                  <div className="w-[60%] py-4 px-4 border-[#000]">{item.milestone}</div>
                  <div className="w-[40%] py-4 px-4">{item.bonus}</div>
                </div>
              ))}
            </div>
            <div>
              <h1 className="font-40 text-[#271F18] mt-[20px]">
                Total Possible Referral Reward: $5,000
              </h1>
              <ul className="font-20 text-[#271F18] mt-4 list-disc pl-8">
                <li>Bonuses are paid within 14 business days after each milestone.</li>
                <li>You must be listed as the referral in your friend's initial application.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Who Makes a Great Surrogate */}
        <section className="great-surrogate-section relative pb-[80px]">
          <div className="relative z-10 container m-auto px-[84px]">
            <h2 className="font-40 text-[#271F18] mb-[20px]">Who Makes a Great Surrogate?</h2>
            <div className="font-20 text-[#271F18] mb-[40px]">We’re looking for women who are:</div>
            <ul className="font-20 text-[#271F18] list-disc pl-8 max-w-[1253px]">
              <li>Age 21–39</li>
              <li>U.S. residents</li>
              <li>Have had at least one healthy pregnancy</li>
              <li>BMI under 32</li>
              <li>Non-smokers, drug-free</li>
              <li>Emotionally supported by family or friends</li>
              <li>No serious pregnancy complications or chronic health issues</li>
            </ul>
          </div>
        </section>

        {/* What Will Your Friend Receive */}
        <section className="friend-receive-section relative py-[80px]">
          <div className="relative z-10 container m-auto px-[84px]">
            <h2 className="font-40 text-[#271F18] mb-8">What Will Your Friend Receive?</h2>
            <ul className="font-20 text-[#271F18] mb-[40px] list-disc pl-8 max-w-[1253px]">
              <li>$50,000–$70,000+ in base compensation</li>
              <li>Monthly allowances (transportation, food, childcare)</li>
              <li>Medication and embryo transfer stipends</li>
              <li>C-section/special surgery bonuses</li>
              <li>Breast milk compensation: $250/week (if applicable)</li>
              <li>Wage protection for bed rest (up to $10,000)</li>
              <li>Insurance coverage or review</li>
              <li>Life insurance up to $250,000</li>
              <li>One-on-one support, legal & emotional care</li>
              <li>All compensation is processed securely through SeedTrust</li>
            </ul>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="cta-section w-full h-[537px] flex justify-center items-center mt-[70px] bg-[#A9A67D] content-appear">
        <div className="container flex flex-col items-center justify-center">
          <div className="font-20 text-[#271F18] text-center max-w-[1111px] mb-[80px]">
            Over a hundred incredible women have already partnered with Yunda to help others build
            their families —and in doing so, they’ve also experienced personal growth and
            fulfillment.
          </div>
          <div className="font-20 text-[#271F18] text-center max-w-[1111px] mb-[80px]">
            A referral is a gesture of belief in her—and our thank you is a promise to you.
          </div>
          <button
            className="bg-[#FBF0DA] text-[#271F18] px-8 py-3 rounded-lg shadow font-18 mt-[80px]"
            onClick={() => handleRedirect()}
          >
            CONTACT US
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
