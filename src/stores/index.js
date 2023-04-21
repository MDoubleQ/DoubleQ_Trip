import { createStore } from "vuex";
// import useCityStore from './modules/useCityStore'
import home from './modules/home'
import main from './modules/main'
// import detail from './modules/detail'
// import main from './modules/main'
import { getAllCity } from '../../src/service/index'
const store = createStore({
  state: () => ({
    currentClickCity: "西安",
    allCities: {},
  }),
  mutations: {
    setAllCities(state, data) {
      state.allCities = data
      // console.log("我是mutations：", data)
    },
    setCurrentCity(state, city) {
      state.currentClickCity = city.cityName
    }
  },
  actions: {
    async fetchAllCitiesData(context) {
      const res = await getAllCity()
      context.commit("setAllCities", res.data)
      // console.log("网络请求之后的数据：", res.data)
    }
  },
  modules: {
    home,
    main,
    // detail
  }
})

export default store