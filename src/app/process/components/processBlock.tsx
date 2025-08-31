import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const ProcessBlock = ({ item, idx, isLast }) => {
  const ref = useRef(null)
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
      <div className="flex flex-col md:flex-row justify-center items-center text-[#271F18] px-4 md:px-0 py-8 md:py-0">
        {/* 左侧图片：从左滑入 */}
        <motion.div
          className="w-full md:w-[732px] h-[250px] md:h-[450px] mb-6 md:mb-0 md:mr-[40px] flex-shrink-0"
          initial={{ opacity: 0, x: -100 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img
            className="block w-full h-full object-cover rounded-lg md:rounded-none"
            src={`/process/i-${idx + 1}.png`}
            alt={`surrogacy-${idx + 1}`}
          />
        </motion.div>

        {/* 右侧文字：从右滑入 */}
        <motion.div
          className="w-full md:w-auto text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="font-32 text-xl md:text-3xl lg:text-4xl">{item.title}</h1>
          <span className="font-20 text-sm md:text-base lg:text-lg">{item.duration}</span>
          <div className="drivider mx-auto md:mx-0"></div>
          <ul className="font-20 list-disc pl-[20px] mb-[20px] md:mb-[40px] text-sm md:text-base lg:text-lg">
            {item.steps.map((step: string, stepIdx: string) => (
              <li key={stepIdx}>{step}</li>
            ))}
          </ul>
          <span className="font-18 text-sm md:text-base lg:text-lg">{item.desc}</span>
        </motion.div>
      </div>

      {/* 底部竖线 + 圆形：从底部上升 */}
      {!isLast && (
        <motion.div
          className="flex flex-col justify-center items-center py-[40px] md:py-[80px]"
          initial={{ opacity: 0, y: 60 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3"
              height="80"
              viewBox="0 0 3 163"
              fill="none"
              className="md:h-[163px]"
            >
              <path d="M1.5 1.5V161.5" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default ProcessBlock
