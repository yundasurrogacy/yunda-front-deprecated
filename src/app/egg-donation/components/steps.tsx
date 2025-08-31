import './steps.scss'
import React from 'react'
import { steps } from '../configs'
import classNames from 'classnames'

export default function Steps() {
  return (
    <div className="flex flex-col w-[1062px] steps-container pt-[300px]">
      {steps.map((step, idx) => (
        <div
          className={classNames('flex items-start mb-[110px]', {
            'justify-end': idx % 2 === 1,
          })}
          key={idx}
        >
          {idx % 2 === 0 && (
            <div className="w-[102px] h-[102px] flex justify-center mr-[20px] ellipse pt-[5px]">
              {idx + 1}
            </div>
          )}
          <div className="flex flex-col mr-[20px]">
            <span className="block font-32">{step.title}</span>
            <ul className="list-disc pl-[30px] font-18">
              {step.descs.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
          {idx % 2 === 1 && (
            <div className="w-[102px] h-[102px] flex justify-center mr-[20px] ellipse pt-[5px]">
              {idx + 1}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
