'use client'

import './IndexAnimate.scss'
import cls from 'classnames'
import { useState } from 'react'
// useTranslation 已移除

export default function IndexAnimate() {
  const [isActived, setIsActived] = useState(false)
  // useTranslation 已移除

  return (
    <div
      className={cls('index-animate', {
        'index-animate-active': isActived,
      })}
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="index-animate-logo flex justify-center items-center">
          <img src="/images/logo.svg" alt="logo" className="block w-[200px] md:w-[315px]" />
        </div>
        <div className="index-animate-text flex justify-center items-center">
          <span className="font-40 block text-center text-lg md:text-4xl lg:text-5xl px-4 md:px-0">
            Grateful for Life, Celebrating New Beginnings. <br />
            Welcome to Yunda Surrogacy
          </span>
        </div>
        <div className="index-animate-intro flex flex-col md:flex-row items-center justify-center">
          <div className="index-animate-intro-left flex-1 flex-shrink-0 h-full relative w-full md:w-auto">
            <img
              src="/images/index-a-l.png"
              alt="index-intro-left"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-4 md:px-0">
              <span className="font-40 text-[#271F18] index-animate-intro-title text-xl md:text-4xl lg:text-5xl text-center">
                Intended Parents
              </span>
              <div className="font-18 block max-w-full md:max-w-[50%] text-center mt-[20px] md:mt-[40px] index-animate-intro-text text-sm md:text-base lg:text-lg px-2 md:px-0">
                <span>
                  We understand the journey to parenthood is not always easy. Behind every dream of
                  holding a child lies courage, hope, and love.
                </span>
                <span className="inline-block my-[20px] md:my-[40px]">
                  At Yunda Surrogacy, we walk with you—every step of the way— providing clarity,
                  compassion, and unwavering support.
                </span>
                <span>Your dream, our mission.</span>
              </div>
            </div>
          </div>
          <div className="index-animate-intro-right flex-1 flex-shrink-0 h-full relative w-full md:w-auto">
            <img
              src="/images/index-a-r.png"
              alt="index-intro-right"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-4 md:px-0">
              <span className="font-40 text-[#271F18] index-animate-intro-title text-xl md:text-4xl lg:text-5xl text-center">Surrogates</span>
              <div className="font-18 block max-w-full md:max-w-[50%] text-center mt-[20px] md:mt-[40px] index-animate-intro-text text-sm md:text-base lg:text-lg px-2 md:px-0">
                <span>
                  We honor every strong, compassionate woman who chooses to help others build their
                  families.
                </span>
                <span className="inline-block my-[20px] md:my-[40px]">
                  At Yunda Surrogacy, we are committed to supporting you with care, respect, and the
                  most comprehensive resources.
                </span>
                <span>Your journey, our promise.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="index-animate-intro-2 flex flex-col md:flex-row items-center justify-center">
          <div className="index-animate-intro-left-2 flex-1 flex-shrink-0 h-full relative w-full md:w-auto">
            <img
              src="/images/index-a-l.png"
              alt="index-intro-left"
              className="w-full h-full absolute top-0 left-0 index-animate-intro-left-2-n object-cover"
            />
            <img
              src="/images/index-a-r.png"
              alt="index-intro-left"
              className="w-full h-full absolute top-0 left-0 index-animate-intro-left-2-d object-cover"
              onAnimationEnd={() => {
                setIsActived(true)
              }}
            />
          </div>
          <div className="index-animate-intro-right-2 flex-1 flex-shrink-0 h-full relative w-full md:w-auto">
            <img
              src="/images/index-a-r.png"
              alt="index-intro-right"
              className="w-full h-full absolute top-0 left-0 index-animate-intro-right-2-n object-cover"
            />
            <img
              src="/images/index-a-l.png"
              alt="index-intro-right"
              className="w-full h-full absolute top-0 left-0 index-animate-intro-right-2-d object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
