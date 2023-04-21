import DQRequest from '@/service/request/index'
export function getHotSuggests() {
  return DQRequest.get({
    url: "/home/hotSuggests"
  })
}

export function getCategories(){
  return DQRequest.get({
    url: "/home/categories"
  })
}

export function getHouselist(currentPage) {
  return DQRequest.get({
    url: "/home/houselist",
    params: {
      page:currentPage,
    }
  })
}