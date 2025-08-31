import './steps.scss'
import React from 'react'
import { steps } from '../configs'

export default function Steps() {
  return (
    <div className="flex flex-col w-[1062px] steps-container pt-[90px] content-appear">
      {steps.map((step, idx) => (
        <div className="flex justify-between items-center mb-[49px]" key={idx}>
          {idx % 2 === 1 && <span className="block font-32">{step.duration}</span>}
          <div className="flex items-center">
            <div className="w-[102px] h-[102px] flex justify-center mr-[10px] ellipse pt-[5px]">
              {idx + 1}
            </div>
            <div className="flex flex-col">
              <span className="block font-32">{step.title}</span>
              <span className="block font-20">{step.desc}</span>
            </div>
          </div>
          {idx % 2 === 0 && <span className="block font-32">{step.duration}</span>}
        </div>
      ))}
    </div>
  )
}
