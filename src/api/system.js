import request from '@/utils/request'

export function SystemData(data) {
  return request({
    url: '/api/system/',
    method: 'post',
    data
  })
}

export function SysData(data) {
  return request({
    url: '/api/systopdata/',
    method: 'post',
    data:data
  })
}