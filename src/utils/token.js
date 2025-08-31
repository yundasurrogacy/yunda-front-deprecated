import { LOCAL_STORE_KEYS } from './constants.js'

const ROLE_KEY = LOCAL_STORE_KEYS.ROLE
const TOKEN_KEY = LOCAL_STORE_KEYS.TOKEN
const USER_KEY = LOCAL_STORE_KEYS.USERINFO


export function getLocalAccessToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function setLocalAccessToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function removeLocalAccessToken() {
  localStorage.removeItem(TOKEN_KEY)
}

export function getLocalRoleInfo() {
  return localStorage.getItem(ROLE_KEY) || localStorage.getItem(USER_KEY).role
}

export function setLocalRoleInfo(role) {
  localStorage.setItem(ROLE_KEY, role)
}

export function removeLocalRoleInfo() {
  localStorage.removeItem(ROLE_KEY)
}

export function getLocalUserInfo() {
  return localStorage.getItem(USER_KEY)
}

export function setLocalUserInfo(data) {
  localStorage.setItem(USER_KEY, JSON.stringify(data))
}

export function removeLocalUserInfo() {
  localStorage.removeItem(USER_KEY)
}

export function getUserId() {
  return JSON.parse(getLocalUserInfo()).account_id
}
