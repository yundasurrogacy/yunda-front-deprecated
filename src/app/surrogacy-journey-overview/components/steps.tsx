import React from 'react'
import { steps } from '../configs'
import { useTranslation } from 'react-i18next'

export default function Steps() {
  const { t } = useTranslation('common')
  return (
    <div className="flex flex-col w-[1062px] steps-container transform translate-y-[40px] z-[10]">
      {steps.map((step, idx) => (
        <div className="flex justify-between items-center h-[190px] step-item" key={idx}>
          <div className="flex items-start h-hull">
            {idx % 2 === 0 && (
              <div className="w-[102px] h-[102px] flex justify-center mr-[10px] ellipse pt-[5px] flex-shrink-0">
                {step.number}
              </div>
            )}
            <div className="flex flex-col">
              {idx % 2 === 0 && (
                <span className="flex justify-start w-full font-32 mb-[10px]">{t(step.title)}</span>
              )}
              {idx % 2 === 1 && (
                <span className="flex justify-end w-full font-32 mb-[10px]">{t(step.title)}</span>
              )}
              <div className="block font-20 mb-[10px]">{step.descs}</div>
            </div>
            {idx % 2 === 1 && (
              <div className="w-[102px] h-[102px] flex justify-center ml-[10px] ellipse pt-[5px] flex-shrink-0">
                {step.number}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
