import { motion, useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const SampleBlock = ({ item }) => {
  const ref = useRef(null)
  const { t } = useTranslation('common')
  const isInView = useInView(ref, { once: true, amount: 0.3 }) // 进入 30% 就算 in-view
  const [hasAnimated, setHasAnimated] = useState(false)

  // 出现在屏幕后触发动画
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <div ref={ref}>
      <div className="flex justify-center items-center text-[#271F18] mb-[80px]">
        {/* 左侧图片：从左滑入 */}
        <motion.div
          className="w-[732px] h-[450px] mr-[40px] flex-shrink-0"
          initial={{ opacity: 0, x: -100 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img className="w-[732px] h-[450px] mr-[40px]" src={item.img} alt={t(item.name)} />
        </motion.div>

        {/* 右侧文字：从右滑入 */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="flex flex-col">
            <h1 className="font-32 font-bold mb-[57px]">{t(item.name)}</h1>
            <span className="font-20 mb-[40px]">{t(item.story)}</span>
            <span className="font-20">{t(item.role)}</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SampleBlock
