import DQRequest from '../request/index'
export function getDetailInfos(houseId) {
  return DQRequest.get({
    url: "/detail/infos",
    params: {
      houseId,
    }
  })
}