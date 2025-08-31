import { Button } from 'antd'
import React from 'react'

interface StepDetail {
  label: string
  showButton?: boolean
  buttonText?: string
  extra?: React.ReactNode
}

interface Stage {
  title: string
  steps?: StepDetail[]
}

interface StatusTimelineProps {
  stages: Stage[]
  currentStage: number // 当前高亮阶段（从0开始）
}

const StatusTimeline: React.FC<StatusTimelineProps> = ({ stages, currentStage }) => {
  return (
    <div className="admin-card p-10">
      <div className="title-2 mb-10">Status Timeline</div>
      <div className="relative pl-10">
        {/* 纵向线 */}
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[#000] z-0" />
        <div className="flex flex-col gap-12">
          {stages.map((stage, i) => (
            <div key={stage.title} className="relative flex">
              {/* 圆点 */}
              <div className="absolute -left-[43px] z-10">
                <div
                  className={`w-[40px] h-[40px] rounded-full border-2 ${
                    i <= currentStage
                      ? 'bg-[#E6ECE6] border-[#BFC9BF]'
                      : 'bg-white border-[#BFC9BF]'
                  }`}
                />
              </div>
              {/* 阶段内容 */}
              <div className="pl-10 flex-1">
                <div className="title-2 mb-5">{stage.title}</div>
                <div className="flex flex-col gap-10">
                  {stage.steps?.map((step, j) => (
                    <div key={step.label} className="flex items-center justify-between group">
                      <span className="title-small">{step.label}</span>
                      <Button>{step.buttonText || 'See Detail'}</Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatusTimeline
