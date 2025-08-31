import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

type PriceHoverProps = {
  children: ReactNode
  scale?: number
  className?: string
}

export default function PriceHover({ children, scale = 1.02, className = '', }: PriceHoverProps) {

  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale }}
      animate={{ zIndex: hovered ? 10 : 1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={className}
      style={{ position: 'relative' }}
    >
      {children}
    </motion.div>
  )
}
