'use client'

import ProgressBar from '@/components/admin/ProgressBar'
import Title from '@/components/admin/Title'
import { Button } from 'antd'
import { steps } from './configs'
import { useEffect } from 'react'
import { getUserDashboard } from './apis'

export default function DashboardPage() {

  useEffect(() => {
    getUserDashboard()
      .then(res => {
        console.info(res?.data || null)
      })
      .catch(err => {
        console.error('获取用户信息失败:', err)
      })
  }, [])

  return (
    <div className="flex flex-col gap-[10px]">
      <Title
        title="Dashboard"
        desc="Welcome to your dashboard! Access your priorities, important information, helpful tips, guides, and a variety of resources to support your journey"
      />

      <div className="py-[20px] px-[48px] admin-card mt-10 relative">
        <Button className="absolute top-[15px] right-[36px] w-[107px]">Matched</Button>
        <div className="text">
          <div className="title-2">Current Status</div>
          Updated today
        </div>
        <div className="py-6">
          <ProgressBar total={12} current={3} />
        </div>
      </div>

      {/* Next Steps 区块 */}
      <div className="admin-card mt-10">
        <div className="title-2 mb-[10px]">Next Steps</div>
        <div className="grid grid-cols-4 gap-y-10 ">
          {steps.map((step, index) => (
            <div className="flex items-center gap-[10px] flex-shrink-0" key={index}>
              <div className="admin-icon-card">
                <img src={step.icon} alt={step.title} />
              </div>
              <div className="admin-icon-card-content h-[60px]">
                <div className="title-small">{step.title}</div>
                <div className="text-small">{step.status || ''}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Updates 区块 */}
      <div className="flex gap-6 mt-10">
        {/* 卡片1 */}
        <div className="admin-card flex-shrink-0 flex-1">
          <div className="title-2 mb-[10px]">Recent Updates</div>
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-[10px] flex-shrink-0">
              <div className="admin-icon-card">
                <img src="/icons/image.svg" alt="Ultrasound" />
              </div>
              <div className="admin-icon-card-content h-[60px]">
                <div className="title-small">New Ultrasound Uploaded</div>
                <div className="text-small whitespace-nowrap">
                  A new ultrasound image has been uploaded
                </div>
              </div>
            </div>
            <div className="text whitespace-nowrap">2 hours ago</div>
          </div>
        </div>
        {/* 卡片2 */}
        <div className="admin-card flex-shrink-0 flex-1 flex items-end">
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-[10px] flex-shrink-0">
              <div className="admin-icon-card">
                <img src="/icons/file.svg" alt="Ultrasound" />
              </div>
              <div className="admin-icon-card-content h-[60px]">
                <div className="title-small">Legal Contract Approved</div>
                <div className="text-small whitespace-nowrap">
                  The surrogacy legal contract has been approved
                </div>
              </div>
            </div>
            <div className="text whitespace-nowrap">Yesterday</div>
          </div>
        </div>
      </div>
    </div>
  )
}
