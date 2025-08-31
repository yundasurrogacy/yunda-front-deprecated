'use client'
import './page.scss'
import IndexHeader from '@/components/common/IndexHeader'
import Footer from '@/components/common/footer'
import { useRouter } from 'next/navigation'

export default function CompensationBenefitsForSurrogatesPageContent() {
  const router = useRouter()
  const handleRedirect = () => {
    router.push('/become-surrogates')
  }
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] compensation-benefits-for-surrogates-page">
      <IndexHeader />
      {/* Hero Section */}
      <section
        className="hero-section w-full h-[676px] flex justify-center items-center relative content-appear"
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, rgba(191, 201, 191, 0.70) 47.12%, #FAF7F2 99.52%)`,
        }}
      >
        <div className="container flex flex-col items-center relative z-10 h-full pt-[150px]">
          <h1 className="font-40 text-[#271F18] mb-6 text-center max-w-[1081px]">
            Compensation & Benefits for Surrogates
          </h1>
          <div className="font-20 text-[#271F18] text-center max-w-[1111px] mt-[20px] block">
            <span className="block mb-[20px]">
              At Yunda Surrogacy, we believe surrogacy is a profound and life-changing journey{' '}
              <br />— one that deserves meaningful rewards and deep respect.
            </span>
            <span className="block mb-[20px]">
              As a Yunda surrogate, you'll receive a clear, personalized, and compassionate
              compensation plan tailored just for you. Your package is designed based on your
              experience, where you live, and whether you have eligible health insurance.
            </span>
            <span className="block">
              We proudly partner with SeedTrust (the nation's leading escrow service) and ART Risk
              (the premier surrogacy insurance provider) to ensure every payment is made safely, on
              time, and with your protection and peace of mind at the center.
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
        {/* Section: Family Support Plan */}
        <section className="support-plan-section relative py-[80px]">
          <div className="relative z-10 container m-auto px-[84px]">
            <h2 className="font-40 text-[#271F18] mb-8">Our Family Support Plan</h2>
            <div className="font-20 text-[#271F18] mb-[40px] max-w-[1253px]">
              More than payment — it's about support, respect, and being seen. We've designed a
              Family Support Plan to make sure you and your family are truly cared for every step of
              the way:
              <ul className="support-list font-20 text-[#271F18] mb-[40px] list-disc pl-8 mt-4">
                <li>
                  Support for housekeeping, childcare, and wage loss if you're placed on
                  doctor-ordered bed rest
                </li>
                <li>Partner wage compensation if travel is required</li>
                <li>Weekly compensation if you choose to provide breast milk post-delivery</li>
                <li>Dedicated Yunda coordinator for one-on-one support throughout the journey</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Compensation Package */}
        <section className="compensation-package-section relative py-[80px]">
          <div className="relative z-10 container m-auto px-[84px]">
            <h2 className="font-40 text-[#271F18] mb-8">
              Your Surrogate Compensation Package May Include:
            </h2>
            <ul className="compensation-list font-20 text-[#271F18] mb-[40px] list-disc pl-8 max-w-[1253px]">
              <li>
                Personalized Base Compensation: $50,000 to $70,000+ for first-time surrogates, paid
                monthly starting from confirmed heartbeat
              </li>
              <li>
                Monthly Allowance: Covers transportation, meals, childcare, and miscellaneous
                expenses
              </li>
              <li>IVF Medication Stipend: One-time payment at medication start</li>
              <li>Embryo Transfer Compensation: Per transfer procedure</li>
              <li>Pregnancy & Recovery Support: Clothing, nutrition, and recovery benefits</li>
              <li>Special Procedure Compensation: $500–$5,000 depending on procedure</li>
              <li>Multiples Bonus: $10,000+ for twins or triplets, paid in installments</li>
              <li>C-section Compensation: $5,000 for first, $3,000 for repeat</li>
              <li>Breast Milk Compensation: $250/week if agreed</li>
              <li>Lost Wages: Up to $10,000 for surrogate and partner if required</li>
              <li>Housekeeping Support: Up to $200/week, max $3,000</li>
              <li>Insurance Coverage or Reimbursement</li>
              <li>Life Insurance: $250,000 for surrogate, $100,000 for intended parents</li>
            </ul>
          </div>
        </section>

        {/* Section: Payment Schedule */}
        <section className="payment-schedule-section relative py-[80px]">
          <div className="relative z-10 container m-auto px-[84px]">
            <h2 className="font-40 text-[#271F18] mb-8">Payment Schedule:</h2>
            <ul className="payment-list font-20 text-[#271F18] mb-[40px] list-disc pl-8 max-w-[1253px]">
              <li>VF-related stipends begin after medication or transfer</li>
              <li>Base compensation starts after heartbeat confirmation</li>
              <li>Final balance paid within 14 days post-delivery</li>
              <li>Other benefits paid as needed or on rolling basis</li>
            </ul>
          </div>
        </section>

        {/* Section: Legal & Safety Protection */}
        <section className="legal-protection-section relative py-[80px]">
          <div className="relative z-10 container m-auto px-[84px]">
            <h2 className="font-40 text-[#271F18] mb-8">Legal & Safety Protection:</h2>
            <ul className="legal-list font-20 text-[#271F18] mb-[40px] list-disc pl-8 max-w-[1253px]">
              <li>Full insurance review or provision</li>
              <li>$250,000 life insurance policy for surrogates</li>
              <li>Legal representation by top reproductive law attorneys</li>
            </ul>
          </div>
        </section>

        {/* Section: Closing Statement */}
        <section className="closing-section relative py-[80px]">
          <div className="relative z-10 container m-auto px-[84px]">
            <div className="font-20 text-[#271F18] mb-[40px] max-w-[1280px]">
              Becoming a surrogate means becoming a miracle-maker who changes someone's world. At
              Yunda, we make sure you're just as cherished in return. We offer more than
              compensation — we offer heartfelt support, a partnership built on trust, and a journey
              where you're cared for every step of the way.
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="cta-section w-full h-[537px] flex justify-center items-center bg-[#A9A67D] content-appear">
        <div className="container flex flex-col items-center justify-center">
          <h1 className="font-40 text-[#271F18] mb-6 text-center max-w-[1081px]">
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
