import request from '@/utils/request'

// 用户登录请求
export const userLogin = data => {
  return request({
    method: 'POST',
    url: '/api/login',
    data
  })
}

// 用户注册请求
export const userRegister = data => {
  return request({
    method: 'POST',
    url: '/api/reguser',
    data
  })
}