import { authRequest } from '@/utils/request'
import { ROLE_TYPE } from '@/utils/constants'
import { getLocalRoleInfo, getUserId } from '@/utils/token'

export async function getUserDashboard() {
  const role = getLocalRoleInfo()
  const user_id = getUserId()
  console.log(role)
  if (role == ROLE_TYPE.INTENDED_PARENT) {
    return authRequest.get(`/account/${user_id}/basic-info`)
  } else if (role == ROLE_TYPE.SURROGATE){
    return authRequest.get(`/account/${user_id}/basic-info`)
  }
}
