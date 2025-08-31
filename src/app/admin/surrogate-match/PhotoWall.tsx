'use client'

import { Image } from 'antd'
import { useRef } from 'react'

export default function PhotoWall() {
  const scrollRef = useRef<HTMLDivElement>(null)
  let isDown = false
  let startX = 0
  let scrollLeft = 0

  // 鼠标事件
  const onMouseDown = (e: React.MouseEvent) => {
    isDown = true
    startX = e.pageX - (scrollRef.current?.offsetLeft || 0)
    scrollLeft = scrollRef.current?.scrollLeft || 0
    document.body.style.cursor = 'grabbing'
    window.addEventListener('mousemove', onMouseMove as any)
    window.addEventListener('mouseup', onMouseUp as any)
  }
  const onMouseLeave = () => {
    isDown = false
    document.body.style.cursor = ''
    window.removeEventListener('mousemove', onMouseMove as any)
    window.removeEventListener('mouseup', onMouseUp as any)
  }
  const onMouseUp = () => {
    isDown = false
    document.body.style.cursor = ''
    window.removeEventListener('mousemove', onMouseMove as any)
    window.removeEventListener('mouseup', onMouseUp as any)
  }
  const onMouseMove = (e: MouseEvent) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0)
    const walk = x - startX
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk
    }
  }

  return (
    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-scroll cursor-grab hide-scrollbar"
      style={{ userSelect: 'none' }}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
        <div key={i} className="flex-shrink-0">
          <div className="rounded-[10px] overflow-hidden mb-[20px]">
            <img
              src={`https://picsum.photos/200/${Math.floor(Math.random() * 1000)}?random=${i}`}
              draggable={false}
            />
          </div>
          <div className="text">April 18, 2025</div>
        </div>
      ))}
    </div>
  )
}
