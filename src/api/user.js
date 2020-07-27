import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/login/',
    method: 'post',
    data
  })
}

export function getSystem() {
  return request({
    url: '/api/system/',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/api/login/',
    method: 'delete'
  })
}

export function userSearch(data) {
  return request({
    url: '/api/stafflist/',
    method: 'post',
    data:data
  })
}

export function userDetail(data) {
  return request({
    url: '/api/staff/',
    method: 'post',
    data:data
  })
}

export function EventList(data) {
  return request({
    url: '/api/visitedeventlist/',
    method: 'post',
    data:data
  })
}


export function EventDetail(data) {
  return request({
    url: '/api/visitedevent/',
    method: 'post',
    data:data
  })
}


export function UrlTop(data) {
  return request({
    url: '/api/urltop/',
    method: 'post',
    data:data
  })
}

