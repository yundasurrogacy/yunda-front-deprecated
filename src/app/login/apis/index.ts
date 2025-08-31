import { simpleRequest } from '@/utils/request'
import type { LoginRequest, LoginResponse } from './types'

export async function postLogin(data: LoginRequest) {
  return simpleRequest.post<LoginResponse>('/auth/login', data)
}
