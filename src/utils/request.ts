import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { removeLocalAccessToken, removeLocalRoleInfo, removeLocalUserInfo } from '@/utils/token'

// 基础配置
const baseConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/x-project/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
}

// 简单请求实例
export const simpleRequest: AxiosInstance = axios.create(baseConfig)

simpleRequest.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.data) {
      error.message = error.response.data.message || error.message
      error.data = error.response.data
    }
    return Promise.reject(error)
  }
)

// 带拦截器的请求实例
export const authRequest: AxiosInstance = axios.create(baseConfig)

authRequest.interceptors.response.use(
  response => response,
  error => {
    const status = error?.response?.status
    const message = error?.response?.data?.message
    const case0 = error?.response?.data?.case0

    if (status === 401 || (
      status === 403 && (
        case0.includes('JWT expired') || message.includes('Expired') || message === 'Access Denied'))) {
      removeLocalAccessToken()
      removeLocalRoleInfo()
      removeLocalUserInfo()

      if (typeof window !== 'undefined') {
        window.location.href = `/login?redirect=${encodeURIComponent(window.location.pathname)}`
      }
    }

    if (error.response && error.response.data) {
      error.message = error.response.data.message || error.message
      error.data = error.response.data
    }

    return Promise.reject(error)
  }
)

// 请求拦截器
authRequest.interceptors.request.use(
  config => {
    // 从 localStorage 获取 token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
authRequest.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 处理未授权
          localStorage.removeItem('token')
          window.location.href = '/login'
          break
        case 403:
          // 处理禁止访问
          console.error('没有权限访问该资源')
          break
        case 404:
          // 处理资源不存在
          console.error('请求的资源不存在')
          break
        case 500:
          // 处理服务器错误
          console.error('服务器错误')
          break
        default:
          console.error('发生错误:', error.response.data)
      }
    }
    return Promise.reject(error)
  }
)

// 导出类型
export type { AxiosRequestConfig, AxiosResponse }
