/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2023-02-26 12:38:30
 * @LastEditors: 张泽雨
 * @LastEditTime: 2023-02-26 12:38:49
 * @FilePath: \front\src\utils\auth.js
 */
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
