'use client'

import './page.scss'
import React from 'react'
import Sections from '@/components/common/sections'
import { Form, Input, Button, Checkbox, message } from 'antd'
import IndexHeader from '@/components/common/IndexHeader'
import Footer from '@/components/common/footer'
import { postLogin } from './apis'
import { useRequest } from 'ahooks'
import { ROLE_TYPE } from '@/utils/constants'
import { useRouter } from 'next/navigation'
import { setLocalAccessToken, setLocalRoleInfo, setLocalUserInfo } from '@/utils/token'

const { Item } = Form

export default function LoginPage() {
  const [form] = Form.useForm()
  const router = useRouter()

  const { run: login, loading } = useRequest(postLogin, {
    manual: true,
    onSuccess: data => {
      message.success('Login successful!')
      setLocalAccessToken(data.data.token)
      setLocalRoleInfo(data.data.role)
      setLocalUserInfo(data.data)
      form.resetFields()
      if (data.data.role === ROLE_TYPE.INTENDED_PARENT || data.data.role === ROLE_TYPE.SURROGATE) {
        router.push('/admin/dashboard')
      }
    },
    onError: (e: any) => {
      if (e.data) {
        message.error(e.data.message || 'Login failed, please try again')
      } else {
        message.error('Login failed, please try again')
      }
    },
  })

  const handleFinish = (values: any) => {
    login(values)
  }

  return (
    <div className="login-page min-h-screen relative">
      <IndexHeader />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="ellipse absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="ellipse-bottom absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"></div>
      </div>
      <Sections backgroundImg="/images/header-box.png" className="h-[320px] p-4">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="title w-full flex justify-center items-center">Welcome to Yunda</h1>
          <span>
            Create an account or log in to get started! Fill in your details below to unlock
            personalized features.
          </span>
        </div>
      </Sections>
      <Sections>
        <div className="container main-container login-form flex flex-col md:flex-row w-full mx-auto bg-opacity-80 rounded-xl shadow-lg my-[80px]">
          {/* 登录表单区域 */}
          <div className="md:w-1/2 w-full p-8 order-2 md:order-1 flex flex-col justify-center">
            <h2 className="title-3 mb-6">Sign in with your email address</h2>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleFinish}
              className="w-full"
              autoComplete="off"
            >
              <Item
                label="Email Address"
                name="email"
                rules={[
                  { required: true, type: 'email', message: 'Please enter a valid email address' },
                ]}
              >
                <Input size="large" placeholder="Enter your email" autoFocus />
              </Item>
              <Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please enter your password' }]}
              >
                <Input.Password size="large" placeholder="Enter your password" />
              </Item>
              <div className="flex justify-between mb-[20px]">
                <Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>
                    <span className="text-[14px] text-[#271F18] text-2">Remember me</span>
                  </Checkbox>
                </Item>
                <a href="#" className="text-2 text-[#271F18] float-end text-[14px] underline">
                  Forgot password?
                </a>
              </div>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full" loading={loading}>
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </div>
          {/* 注册引导区域 */}
          <div className="md:w-1/2 w-full p-8 order-1 md:order-2 flex flex-col justify-center items-start bg-opacity-60 rounded-xl mb-3 md:mb-0">
            <h2 className="title-3 mb-4">Create a New Account</h2>
            <p className="text mb-6">
              If this is your first time requesting more information or applying to our programs,
              please create an account to get started.
            </p>
            <Button type="primary" className="w-full max-w-[230px]" href="/become-parents">
              Become Parents
            </Button>
          </div>
        </div>
      </Sections>
      <Footer className="mt-[102px]" />
    </div>
  )
}
