'use client'
import './ProgressBar.scss'
import classNames from 'classnames'
import React from 'react'

interface ProgressBarProps {
  total: number
  current: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ total, current }) => {
  return (
    <div className="flex gap-3 yd-progress-bar">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={classNames('yd-progress-bar-item', {
            active: index < current,
          })}
        />
      ))}
    </div>
  )
}

export default ProgressBar
