'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'

interface AnimatedLayoutProps {
  children: React.ReactNode
}

export default function AnimatedLayout({ children }: AnimatedLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()

  // 控制动画是否显示
  const [isVisible, setIsVisible] = useState(true)

  // 保存待跳转的路径
  const [pendingPath, setPendingPath] = useState<string | null>(null)

  // 监听 pathname 变化，切换动画显示状态
  useEffect(() => {
    setIsVisible(true)
  }, [pathname])

  // 点击跳转时调用的函数
  function delayedNavigate(path: string) {
    setPendingPath(path)
    setIsVisible(false)  // 触发淡出动画
  }

  return (
    <>
      {/* 暴露出去的函数可以用 context 或者 props 传给按钮 */}
      <NavigationContext.Provider value={{ delayedNavigate }}>
        {/*<AnimatePresence mode="wait" initial={false}>*/}
        {/*  {isVisible && (*/}
        {/*    <motion.div*/}
        {/*      key={pathname}*/}
        {/*      initial={{ opacity: 0 }}*/}
        {/*      animate={{ opacity: 1 }}*/}
        {/*      exit={{ opacity: 0 }}*/}
        {/*      transition={{ duration: 1 }}*/}
        {/*      className="min-h-screen"*/}
        {/*      onAnimationComplete={() => {*/}
        {/*        // 当执行淡出动画完成时（exit动画）*/}
        {/*        if (!isVisible && pendingPath) {*/}
        {/*          router.push(pendingPath)*/}
        {/*          setPendingPath(null)*/}
        {/*        }*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      {children}*/}
        {/*    </motion.div>*/}
        {/*  )}*/}
        {/*</AnimatePresence>*/}
        {children}
      </NavigationContext.Provider>
      <ChatbotWidget />
    </>
  )
}

// 导出 context，供按钮调用
import React, { createContext, useContext } from 'react'
import ChatbotWidget from '@/components/chat-widget/ChatWidget'
interface NavigationContextType {
  delayedNavigate: (path: string) => void
}

const NavigationContext = createContext<NavigationContextType>({
  delayedNavigate: () => {},
})

export function useNavigation() {
  return useContext(NavigationContext)
}
