'use client'
import './Title.scss'
import React from 'react'

interface TitleProps {
  title: string
  desc?: string
}

const Title: React.FC<TitleProps> = ({ title, desc }) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="title">{title}</div>
      {desc && <div className="text">{desc}</div>}
    </div>
  )
}

export default Title
