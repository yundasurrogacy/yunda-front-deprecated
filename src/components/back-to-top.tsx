'use client'

import { useEffect, useState } from 'react'
import cn from 'classnames'
import '@/styles/back-to-top.scss'

interface BackToTopProps {
  className?: string
  threshold?: number // 显示阈值，默认 300px
}

export default function BackToTop({ className, threshold = 300 }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsVisible(scrollTop > threshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) return null

  return (
    <button className={cn('back-to-top', className)} onClick={scrollToTop} aria-label="回到顶部">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  )
}
