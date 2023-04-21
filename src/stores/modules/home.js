import { getHotSuggests, getCategories, getHouselist } from "@/service"
export default {
  namespaced: true,
  state() {
    return {
      hotSuggests: [],
      categories: [],
      houselist: [],
      currentPage: 1
    }
  },
  mutations:{
    setHotSuggests(state,data) {
      state.hotSuggests = data
    },
    setCategories(state, data) {
      state.categories = data
    },
    setHouselist(state, data) {
      state.houselist.push(...data)
    },
    setCurrentPage(state, data) {
      state.currentPage++
    }
  },
  actions: {
    async fetchHotSuggestData(context) {
      const res = await getHotSuggests()
      context.commit("setHotSuggests", res.data)
      // console.log("热门建议网络请求", res.data)
    },
    async fetchCategories(context) {
      const res = await getCategories() 
      context.commit("setCategories", res.data)
    },
    async fetchHouselist(context, currentPage) {
      const res = await getHouselist(currentPage)
      context.commit("setHouselist",res.data)
      context.commit("setCurrentPage",currentPage)
      // console.log(res)
    }
  }
}