import { simpleRequest } from '@/utils/request'
import type { Request } from './types'

export async function postParentApplication(data: Request) {
  return simpleRequest.post('/parents', data)
}
