'use client'
import './style/page.scss'
import Title from '@/components/admin/Title'
import { Collapse } from 'antd'
import { getItems } from './configs/index'
import { useState } from 'react'

export default function IvfClinicPage() {
  const [activeKey, setActiveKey] = useState<string[]>(['1'])
  const handleChange = (key: string[]) => {
    setActiveKey(key)
  }

  return (
    <div className="flex flex-col gap-10 ivf-clinic">
      <Title
        title="Ivf Clinic"
        desc="View your IVF clinic team and review updates related to your embryo transfer process"
      />

      <Collapse
        activeKey={activeKey}
        items={getItems(activeKey)}
        expandIcon={() => null}
        onChange={handleChange}
      />
    </div>
  )
}
