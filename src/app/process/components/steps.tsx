import './steps.scss'
import React from 'react'
import { steps } from '../configs'

export default function Steps() {
  return (
    <div className="flex flex-col w-full md:w-[1062px] steps-container pt-[60px] md:pt-[90px] px-4 md:px-0">
      {steps.map((step, idx) => (
        <div className="flex flex-col md:flex-row justify-between items-center mb-[80px] md:mb-[49px] gap-8 md:gap-0" key={idx}>
          {/* 移动端：垂直布局 */}
          <div className="flex flex-col items-center md:hidden w-full">
            <div className="w-[80px] h-[80px] flex justify-center ellipse pt-[5px] text-3xl mb-6">
              {idx + 1}
            </div>
            <div className="text-center mb-4">
              <span className="block font-32 text-lg mb-2">{step.title}</span>
              <span className="block font-20 text-sm leading-relaxed">{step.desc}</span>
            </div>
            <span className="block font-32 text-lg text-center">
              {step.duration}
            </span>
          </div>

          {/* 桌面端：原有布局 */}
          <div className="hidden md:flex md:flex-row justify-between items-center w-full">
            {idx % 2 === 1 && (
              <span className="block font-32 text-3xl lg:text-4xl text-left">
                {step.duration}
              </span>
            )}
            <div className="flex items-center">
              <div className="w-[102px] h-[102px] flex justify-center mr-[10px] ellipse pt-[5px] text-6xl lg:text-7xl">
                {idx + 1}
              </div>
              <div className="flex flex-col text-left">
                <span className="block font-32 text-3xl lg:text-4xl">{step.title}</span>
                <span className="block font-20 text-base lg:text-lg">{step.desc}</span>
              </div>
            </div>
            {idx % 2 === 0 && (
              <span className="block font-32 text-3xl lg:text-4xl text-right">
                {step.duration}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
