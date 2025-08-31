'use client'

import './sections.scss'
import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { StaticImageData } from 'next/image'

interface SectionsProps {
  stickyContent?: React.ReactNode
  children: React.ReactNode
  color?: string
  backgroundImg?: StaticImageData | string
  style?: React.CSSProperties
  className?: string
}

function Sections(props: SectionsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const backgroundStyle = props?.backgroundImg
    ? {
        backgroundImage: `url(${props.backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {}

  return (
    <div
      ref={sectionRef}
      className={`sections flex justify-center p-t-4 p-b-4 border-b-1 ${props.className || ''}`}
      style={{
        backgroundColor: props.color,
        ...backgroundStyle,
        ...props.style,
      }}
    >
      <div className="container sections-wrapper flex justify-center w-full">
        {props.stickyContent ? (
          <div className="flex justify-center w-full">
            <div className={`p-12 sections-sticky w-1/2 ${isVisible ? 'sections-animate' : ''}`}>
              {props.stickyContent}
            </div>
            <div
              className={`w-1/2 ${isVisible ? 'sections-animate sections-content flex-shrink-0' : ''}`}
            >
              {props.children}
            </div>
          </div>
        ) : (
          <div
            className={
              isVisible ? 'sections-animate flex justify-center w-full' : 'flex justify-center'
            }
          >
            {props.children}
          </div>
        )}
      </div>
    </div>
  )
}

export default Sections
