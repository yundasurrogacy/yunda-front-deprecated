'use client'

import './page.scss'
import React, { useState, useEffect } from 'react'
import Sections from '@/components/common/sections'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function BecomeSurrogatesPreviewPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedOption, setSelectedOption] = useState<'yes' | 'no'>('yes')
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const router = useRouter()

  const questions = [
    '您是否年龄在21至42岁之间？',
    '您是否至少完成过一次健康足月妊娠，且无严重妊娠并发症？',
    '您当前是否正在一个稳定的家庭环境中抚养至少一位孩子？',
    '您是否是美国公民、永久居民、绿卡持有者，或签证有效期超过两年的签证持有人？',
    '您是否完成了高中学业，并获得毕业证或等同学历（GED）？',
  ]

  const isEligible = answers.length === questions.length && answers.every(ans => ans === 'yes')

  const handleContinue = () => {
    const newAnswers = [...answers]
    newAnswers[currentStep] = selectedOption
    setAnswers(newAnswers)

    const nextStep = currentStep + 1

    if (nextStep < questions.length) {
      setCurrentStep(nextStep)
      setSelectedOption('yes')
    } else {
      setShowResult(true) // ✅ 进入“展示结语”状态
    }
  }

  const handleOptionClick = (option: 'yes' | 'no') => {
    setSelectedOption(option)
  }

  useEffect(() => {
    if (showResult) {
      const timer = setTimeout(() => {
        if (isEligible) {
          router.push('/become-surrogates')
        } else {
          router.push('/')
        }
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showResult, isEligible, router])

  return (
    <div className="become-surrogates-preview min-h-screen pb-[102px] relative overflow-hidden">
      <div className="ellipse absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="ellipse-bottom absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"></div>

      <Sections backgroundImg="/images/header-box.png" className="h-[325px] p-4 text-white">
        <div className="title w-full flex justify-center items-center">代孕母申请表</div>
      </Sections>

      <div className="container flex flex-col items-center justify-center m-auto px-[30px] pt-[66px] pb-[110px] mt-[148px] glass-box relative z-10">
        {showResult ? (
          <AnimatePresence mode="wait">
            <div className="title-3 text-center">
              {isEligible ? '恭喜你，已成功获得资格！' : '感谢你的申请，期待未来有机会再次相遇。'}
            </div>
          </AnimatePresence>
        ) : currentStep < questions.length ? (
          <AnimatePresence mode="wait">
            {currentStep < questions.length && !showResult && (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col items-center"
              >
                <div className="title-3 pb-[50px]">{questions[currentStep]}</div>

                <div className="flex flex-col items-center justify-center gap-[20px] w-full title-3 pb-[50px]">
                  <div
                    className={`dp-checkbox flex items-center pl-[26px] cursor-pointer ${selectedOption === 'yes' ? 'checkbox-active' : ''}`}
                    onClick={() => handleOptionClick('yes')}
                  >
                    是
                  </div>
                  <div
                    className={`dp-checkbox flex items-center pl-[26px] cursor-pointer ${selectedOption === 'no' ? 'checkbox-active' : ''}`}
                    onClick={() => handleOptionClick('no')}
                  >
                    否
                  </div>
                </div>

                <div className="flex w-full justify-center pt-[50px]">
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="w-[200px]"
                    onClick={handleContinue}
                  >
                    继续
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ) : null}
      </div>
    </div>
  )
}
