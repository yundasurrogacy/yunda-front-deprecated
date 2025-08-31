import { simpleRequest } from '@/utils/request'
import type { Request } from './types'

export async function postSurrogateApplication(data: Request) {
  return simpleRequest.post('/surrogates', data)
}
