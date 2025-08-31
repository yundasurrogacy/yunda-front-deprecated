import { motion } from 'framer-motion'
import classNames from 'classnames'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function ServiceBlock({ item, idx }: { item; idx }) {
  return (
    <motion.div
      className={classNames('flex flex-col flex-shrink-0 w-[600px] h-[180px] relative')}
      initial={{ opacity: 0, x: idx % 2 === 1 ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-full h-[2px] bg-[#000]" />
      <div>
        <div className="w-full flex items-center font-32 mt-[20px] mb-[10px]">
          <span>{item.title}</span>
        </div>
        <ul className="font-20 list-disc pl-[30px] mb-[54px]">
          {item.infos.map((info: string, idx: number) => (
            <li key={idx}>{info}</li>
          ))}
        </ul>
      </div>
      {item.isEnd && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#000]" />}
    </motion.div>
  )
}
