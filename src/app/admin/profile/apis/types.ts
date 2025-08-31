export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  account_id: number
  role: string
  profile_id: Record<number, unknown>
  email: string
  picture: Record<string, unknown>
  token: string
  username: string
}
