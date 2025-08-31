// components/PriceBlock.tsx
import { motion } from 'framer-motion'
import classNames from 'classnames'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function PriceBlock({ item, idx }: { item; idx }) {
  return (
    <motion.div
      className={classNames('flex flex-col flex-shrink-0 w-[585px] h-[274px] relative')}
      initial={{ opacity: 0, x: idx % 2 === 1 ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-full h-[2px] bg-[#000]" />
      <div>
        <div className="w-full flex justify-between items-center font-32 my-[10px]">
          <span>{item.title}</span>
          <span>{item.price}</span>
        </div>
        <ul className="font-20 list-disc pl-[30px]">
          {item.infos.map((info: string, idx: number) => (
            <li key={idx}>{info}</li>
          ))}
        </ul>
      </div>
      {item.borderBottom && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#000]" />}
    </motion.div>
  )
}
