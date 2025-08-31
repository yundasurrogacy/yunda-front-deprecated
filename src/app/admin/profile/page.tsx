'use client'
import Title from '@/components/admin/Title'
import { Button, Form, Input, Row } from 'antd'
import { useEffect, useState } from 'react'
import { getUserProfile } from './apis'

export default function ProfilePage() {
  const [editAddress, setEditAddress] = useState(false)
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    country: '',
    zip: '',
  })

  useEffect(() => {
    getUserProfile()
      .then(res => {
        console.info(res?.data || null)
      })
      .catch(err => {
        console.error('获取用户信息失败:', err)
      })
  }, [])

  const [form] = Form.useForm()

  const handleEdit = () => {
    setEditAddress(true)
    form.setFieldsValue(address)
  }

  const handleSubmit = () => {
    form.validateFields().then(values => {
      setAddress(values)
      setEditAddress(false)
    })
  }

  return (
    <div className="flex flex-col gap-10">
      {/* 头部 */}
      <Title
        title="My Account"
        desc="Manage your account details here. Update your personal information, email address, or password to keep your profile up-to-date."
      />

      {/* 基本信息卡片 */}
      <div className="admin-card mt-10">
        <div className="title-2 mb-[10px]">Basic Information</div>
        <Button
          className="absolute top-8 right-8 bg-[#E6ECE6] text-[#BFC9BF] px-6 py-1 rounded"
          style={{ minWidth: 90 }}
        >
          Edit
        </Button>
        <div className="flex gap-8 items-start">
          <div className="rounded-full flex items-center justify-center">
            <img src="/icons/avatar.svg" alt="avatar" className="w-[75px] h-[75px]" />
          </div>
          <div className="flex flex-col gap-[15px] py-[30px]">
            <div className="flex">
              <div className="title-small w-[230px]">Name:</div>
              <div className="title-small"> John Doe</div>
            </div>
            <div className="flex">
              <div className="title-small w-[230px]">Date of Birth:</div>
              <div className="title-small">March 9, 1980</div>
            </div>
            <div className="flex">
              <div className="title-small w-[230px]">Phone:</div>
              <div className="title-small">(123) 456 - 7890</div>
            </div>
            <div className="flex">
              <div className="title-small w-[230px]">Email:</div>
              <div className="title-small">12345@gmail.com</div>
            </div>
            <div className="flex">
              <div className="title-small w-[230px]">Preferred Language:</div>
              <div className="title-small"> English</div>
            </div>
          </div>
        </div>
      </div>

      {/* 地址卡片 */}
      <div className="admin-card p-10 relative border-2 border-[#BFC9BF] rounded-2xl shadow-none">
        {editAddress ? (
          <Button
            className="absolute top-8 right-8 bg-[#E6ECE6] text-[#BFC9BF] px-6 py-1 rounded"
            style={{ minWidth: 90 }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        ) : (
          <Button
            className="absolute top-8 right-8 bg-[#E6ECE6] text-[#BFC9BF] px-6 py-1 rounded"
            style={{ minWidth: 90 }}
            onClick={handleEdit}
          >
            Edit
          </Button>
        )}
        <div className="title-2 mb-4">Address</div>
        <Form
          form={form}
          layout="horizontal"
          initialValues={address}
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 16 }}
          labelAlign="left"
          className="mt-4 text-[18px]"
        >
          <Form.Item name="street" label={<span className="title-small">Street</span>}>
            <Input readOnly={!editAddress} />
          </Form.Item>
          <Form.Item name="city" label={<span className="title-small">City</span>}>
            <Input readOnly={!editAddress} />
          </Form.Item>
          <Form.Item name="state" label={<span className="title-small">State</span>}>
            <Input readOnly={!editAddress} />
          </Form.Item>
          <Form.Item name="country" label={<span className="title-small">Country</span>}>
            <Input readOnly={!editAddress} />
          </Form.Item>
          <Form.Item name="zip" label={<span className="title-small">Zip Code</span>}>
            <Input readOnly={!editAddress} />
          </Form.Item>
        </Form>
      </div>

      {/* 登录设置卡片 */}
      <div className="admin-card p-10 flex flex-col gap-[10px]">
        <div className="title-2">Login Settings</div>
        <div className="flex gap-6">
          <Button style={{ minWidth: 180 }}>Change Password</Button>
          <Button style={{ minWidth: 180 }}>Manage Devices</Button>
        </div>
      </div>
    </div>
  )
}
