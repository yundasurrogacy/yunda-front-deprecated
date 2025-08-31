'use client'
import './page.scss'
import { useRouter } from 'next/navigation'
import IndexHeader from '@/components/common/IndexHeader'
import Footer from '@/components/common/footer'
import Sections from '@/components/common/sections'
import Steps from './components/steps'

export default function EggDonationPageContent() {
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/become-parents')
  }
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] egg-donation-page">
      <IndexHeader />
      {/* 顶部介绍区块 */}
      <section
        className="w-full h-[676px] flex justify-center items-center content-appear"
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, rgba(191, 201, 191, 0.70) 100%)`,
        }}
      >
        <div className="container flex flex-col items-center h-full pt-[150px] relative">
          <h1 className="font-40 text-[#271F18] mb-6 text-center">Finding Your Egg Donor</h1>
          <div className="font-20 text-[#271F18] text-center max-w-[1111px] mb-[80px]">
            <span className="block mb-[40px]">
              Egg donation is a meaningful path for intended parents who are unable to conceive with
              their own eggs — due to medical conditions, age, or being a single or same-sex male
              parent.
            </span>
            <span>
              At Yunda, we provide a compassionate and professional egg donation program with fully
              screened donors across the U.S. You can choose donors based on ethnicity, education,
              and appearance, with guidance every step of the way.
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
      {/* 流程区块标题 */}
      <Sections className="relative">
        <div className="w-full flex flex-col justify-center items-center pt-[150px] content-appear">
          <h2 className="font-40 text-[#271F18] w-full text-center mb-2">
            Our Streamlined Egg Donation + IVF Process
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
          {/* 竖线+圆点装饰 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1089"
            height="1031"
            viewBox="0 0 1089 1031"
            fill="none"
          >
            <path
              d="M544.5 1.5V63.5V73.5C544.5 101.114 522.114 123.5 494.5 123.5H51.0001C23.3859 123.5 1.00008 145.886 1.00008 173.5V315.5C1.00008 343.114 23.3858 365.5 51.0001 365.5H1038C1065.61 365.5 1088 387.886 1088 415.5V588C1088 615.614 1065.61 638 1038 638H51.0001C23.3858 638 1.00007 660.386 1.00007 688L1.00001 884C1.00001 911.614 23.3858 934 51 934H494.5C522.114 934 544.5 956.386 544.5 984V1029.5"
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
        {/* 流程步骤卡片 */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center content-appear">
          <Steps />
        </div>
      </Sections>
      <div
        className="pb-[150px] content-appear"
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, #FBF0DA 50.96%, #FAF7F2 100%)`,
        }}
      >
        <div className="container m-auto text-[#271F18]">
          <h3 className="font-40 mb-[20px]">Do I Need to Be in the U.S. for This Process?</h3>
          <ul className="list-disc pl-[30px] font-18 mb-[40px]">
            <li>
              <span className="font-[700]">If using an egg donor:</span> No U.S. travel is needed
            </li>
            <li>
              <span className="font-[700]">If providing your own sperm:</span> You can collect
              samples in Hong Kong, Japan, or elsewhere—Yunda will handle certified medical shipping
            </li>
            <li>
              <span className="font-[700]">If providing your own eggs:</span> You will typically
              need to travel to the U.S. for the retrieval cycle (approx. 10–14 days), unless using
              frozen eggs from our donor bank
            </li>
          </ul>
          <div className="font-20 text-[#271F18] mb-2">
            Yunda handles all cross-border logistics, clinic coordination, and legal compliance.
          </div>
        </div>
      </div>
      <div
        className="pb-[150px] content-appear"
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, #FBF0DA 50.96%, #FAF7F2 100%)`,
        }}
      >
        <div className="container m-auto text-[#271F18]">
          <h3 className="font-40 ">Should I Use Frozen Eggs Instead of Fresh Eggs?</h3>
          <div className="font-20 w-[1111px]">
            Yes, both options are available. Frozen eggs are a great fit for those who want to start
            quickly or prefer not to sync with a donor's cycle. We partner with trusted egg banks
            offering diverse donor profiles, including donors of Asian descent with strong academic
            backgrounds.
          </div>
          <table className="w-full mt-[161px]">
            <thead>
              <tr className="text border-b-[2px] border-[#000]">
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-left">Fresh Eggs</th>
                <th className="px-6 py-3 text-left">Frozen Eggs</th>
              </tr>
            </thead>
            <tbody>
              <tr className="font-18 border-b-[2px] border-[#000]">
                <td className="px-6 py-3">Timeline</td>
                <td className="px-6 py-3">Requires syncing with donor (4–6 weeks)</td>
                <td className="px-6 py-3">Can start immediately</td>
              </tr>
              <tr className="font-18 border-b-[2px] border-[#000]">
                <td className="px-6 py-3">Success Rate</td>
                <td className="px-6 py-3">Typically higher (no freezing = better viability)</td>
                <td className="px-6 py-3">Slightly lower, but clinically reliable</td>
              </tr>
              <tr className="font-18 border-b-[2px] border-[#000]">
                <td className="px-6 py-3">Embryo Yield</td>
                <td className="px-6 py-3">10–20 eggs per cycle, more embryos</td>
                <td className="px-6 py-3">6–8 eggs per batch, fewer embryos</td>
              </tr>
              <tr className="font-18 border-b-[2px] border-[#000]">
                <td className="px-6 py-3">Cost</td>
                <td className="px-6 py-3">Higher (donor comp + cycle costs)</td>
                <td className="px-6 py-3">Lower and more predictable</td>
              </tr>
              <tr className="font-18 border-b-[2px] border-[#000]">
                <td className="px-6 py-3">Donor Access</td>
                <td className="px-6 py-3">Choose donor; video call/open donation possible</td>
                <td className="px-6 py-3">Mostly anonymous with limited info</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* 结尾区块 */}
      <section className="w-full h-[520px] flex justify-center items-center bg-[#A9A67D] content-appear">
        <div className="container flex flex-col items-center justify-center">
          <h1 className="font-40 text-[#271F18] mb-6 text-center">
            Ready to Explore Your Egg Donation Journey?
          </h1>
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
