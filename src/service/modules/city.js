import DQRequest from '../request/index'
export function getAllCity() {
  return DQRequest.get({
    url: "/city/all"
  })
}