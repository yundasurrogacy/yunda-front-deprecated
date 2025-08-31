import './page.scss'
import React from 'react'
import IndexHeader from '@/components/common/IndexHeader'
import Footer from '@/components/common/footer'

export default function AboutPageContent() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] about-us">
      <IndexHeader />
      {/* Hero/Intro Section */}
      <section
        className="w-full h-auto md:h-[676px] flex justify-center items-center about-us content-appear py-12 md:py-0"
        style={{
          background: `linear-gradient(180deg, #FAF7F2 0%, rgba(191, 201, 191, 0.70) 100%)`,
        }}
      >
        <div className="container flex flex-col items-center justify-center px-4 md:px-0">
          <h1 className="font-40 text-[#271F18] mb-[20px] text-center max-w-full md:max-w-[1081px] text-2xl md:text-4xl lg:text-5xl">
            Where Professional Commitment Meets Heartfelt Care
          </h1>
          <div className="font-20 text-[#271F18] text-center max-w-full md:max-w-[1245px] text-sm md:text-base lg:text-lg">
            <span className="block mb-4 md:mb-0">
              At Yunda Surrogacy, we are more than a surrogacy agency—we are your dedicated partners
              on a deeply human journey.
            </span>
            <span className="block mb-[20px]">
              Our team brings together expertise in reproductive law, fertility coordination,
              clinical advocacy, and international case management—with something just as important:
              personal experience.
            </span>
            <span className="block mb-4 md:mb-0">
              Many of us are parents through surrogacy, former surrogates, or lifelong advocates for
              family-building.
            </span>
            <span className="block mb-[20px]">
              We've sat in waiting rooms. We've held hands during embryo transfers. We've felt the
              anticipation, the anxiety, and the indescribable joy.
              <i className="block not-italic font-[600] mt-2">
                That's why we don't just work in this field—we live it.
              </i>
            </span>
            <span className="block">
              From your first consultation to the moment a baby is placed into loving arms, we
              ensure every step is handled with professionalism, empathy, and clarity. Whether
              you're a surrogate offering the gift of life or an intended parent dreaming of a
              family,
              <i className="block not-italic font-[600] mt-2">
                Yunda walks beside you—with honesty, respect, and unwavering dedication.
              </i>
            </span>
          </div>
        </div>
      </section>

      {/* Team Member: Kayla Luo */}
      <section className="team-section w-full flex flex-col justify-center items-center py-[80px] md:py-[150px] linear-gradient content-appear px-4 md:px-0">
        <div className="container flex flex-col md:flex-row mb-[80px] md:mb-[150px] gap-8 md:gap-0">
          <div className="w-full md:w-[215px] h-[300px] md:h-[347px] mr-0 md:mr-[42px] order-2 md:order-1">
            <img
              src="/process/kayla-luo.png"
              alt="Kayla Luo"
              className="block w-full h-full object-cover rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex-1 flex flex-col items-start order-1 md:order-2 text-center md:text-left">
            <h2 className="font-32 text-[#271F18] mb-[10px] text-xl md:text-3xl lg:text-4xl w-full md:w-auto">Kayla Luo</h2>
            <div className="font-20 text-[#000] mb-[20px] text-sm md:text-base lg:text-lg">Founder & Director of Operations</div>
            <div className="font-18 text-[#271F18] text-sm md:text-base lg:text-lg leading-relaxed">
              Kayla earned her degree from Cornell University and completed her graduate studies at
              Columbia University. She is fluent in Mandarin, English, and German, and brings over 8
              years of experience in the field of assisted reproduction.
              <br />
              <br />
              Before founding Yunda Surrogacy, she worked as an international fertility consultant,
              helping clients from diverse cultural backgrounds complete their journeys through
              surrogacy and egg donation.
              <br />
              <br />
              Kayla's passion for this work stems from personal experience. As a mother of two
              children born through surrogacy, she has lived the joy and uncertainty of this process
              firsthand. Her encounters with unqualified legal advice and a lack of transparency
              fueled her commitment to creating a more ethical, warm, and professional surrogacy
              platform. At Yunda, Kayla is guided by the principles of legal integrity, emotional
              support, and clinical excellence.
              <br />
              <br />
              Outside of work, she enjoys traveling, reading, and spending time with her
              children—who remind her daily of the profound impact of this mission.
            </div>
          </div>
        </div>
        <div className="container flex flex-col md:flex-row gap-8 md:gap-0">
          <div className="flex-1 flex flex-col items-start order-2 md:order-1 text-center md:text-left">
            <h2 className="font-32 text-[#271F18] mb-[10px] text-xl md:text-3xl lg:text-4xl w-full md:w-auto">Zoe Fang Boyd</h2>
            <div className="font-20 text-[#000] mb-[20px] text-sm md:text-base lg:text-lg">Client Director</div>
            <div className="font-18 text-[#271F18] text-sm md:text-base lg:text-lg leading-relaxed">
              Zoe holds a degree from California State University, Los Angeles. Before entering the
              surrogacy industry, she worked for 9 years as a nurse at two of California's top
              fertility clinics—Huntington Reproductive Center and Santa Monica Fertility Center.
              Since 2016, Zoe has fully devoted herself to the fertility field, driven by a passion
              to help people achieve their dreams of parenthood through IVF, surrogacy, and egg
              donation.
              <br />
              <br />
              At Yunda, she supports international clients with tailored guidance throughout their
              medical journey, ensuring clarity and care every step of the way. She believes
              everyone deserves honest, transparent, and compassionate support.
              <br />
              <br />
              Zoe is an advocate for healthy living—she enjoys travel, outdoor adventures, and
              cooking plant-based meals for her family. She also volunteers with reproductive
              advocacy groups, bringing her care philosophy beyond the workplace.
              <br />
              <br />
              Interested in working with Yunda or exploring partnership opportunities? Let's
              connect.
            </div>
          </div>
          <div className="w-full md:w-[215px] h-[300px] md:h-[347px] ml-0 md:ml-[42px] order-1 md:order-2">
            <img
              src="/process/zoe-fang-boyd.png"
              alt="Zoe Fang Boyd"
              className="block w-full h-full object-cover rounded-lg md:rounded-none"
            />
          </div>
        </div>
      </section>
      <section className="w-full h-auto md:h-[200px] flex justify-center items-center bg-[#A9A67D] content-appear py-8 md:py-0">
        <div className="container m-auto flex justify-center flex-wrap gap-4 md:gap-0">
          <div className="w-[60px] md:w-[80px] h-[56px] md:h-[75px] bg-[#D9D9D9] mr-0 md:mr-[40px]"></div>
          <div className="w-[60px] md:w-[80px] h-[56px] md:h-[75px] bg-[#D9D9D9] mr-0 md:mr-[40px]"></div>
          <div className="w-[60px] md:w-[80px] h-[56px] md:h-[75px] bg-[#D9D9D9] mr-0 md:mr-[40px]"></div>
          <div className="w-[60px] md:w-[80px] h-[56px] md:h-[75px] bg-[#D9D9D9] mr-0 md:mr-[40px]"></div>
          <div className="w-[60px] md:w-[80px] h-[56px] md:h-[75px] bg-[#D9D9D9] mr-0 md:mr-[40px]"></div>
          <div className="w-[60px] md:w-[80px] h-[56px] md:h-[75px] bg-[#D9D9D9]"></div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
