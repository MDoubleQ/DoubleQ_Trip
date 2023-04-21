<template>
  <div class="home" ref="homeRef">
    <home-nav-bar></home-nav-bar>
    <home-banner></home-banner>
    <home-position></home-position>
    <home-search-box :hot-suggests="hotSuggests"></home-search-box>
    <home-categories :home-categories="categories"></home-categories>
    <div v-show="isShowSearch" class="search-box">
      <search-bar></search-bar>
    </div>
    <home-content></home-content>
    <!-- <button @click="moreBtnClick">加载更多数据</button> -->

  </div>
</template>

<script>
export default { name: "home" }
</script>
<script setup>
// 导入组件
import HomeNavBar from './cpns/HomeNavBar.vue'
import HomeBanner from './cpns/HomeBanner.vue'
import HomePosition from './cpns/HomePosition.vue'
import HomeCategories from './cpns/HomeCategories.vue'
import HomeContent from './cpns/HomeContent.vue'
import HomeSearchBox from './cpns/HomeSearchBox.vue'
import SearchBar from '@/components/searchBar/SearchBar.vue'

// import useScroll from '@/hooks/useScroll.js'
import { computed, watch, ref, toRefs, onActivated } from "vue"
import { useStore } from 'vuex'
import useScroll from '@/hooks/useScroll'
import home from '@/stores/modules/home'

// 定义变量
const homeStore = useStore()

const { hotSuggests, categories, currentPage } = toRefs(homeStore.state.home)
// const hotSuggests = computed(() => homeStore.state.home.hotSuggests)
// const categories = computed(() => homeStore.state.home.categories)
// const currentPage = computed(() => homeStore.state.home.currentPage)

// 发送网络请求
// const hotSuggests = ref([])
// dqRequest.get({
//   url: "/home/hotSuggests"
// }).then(res => {
//   hotSuggests.value = res.data
//   console.log(hotSuggests.value)
// })
// console.log(hotSuggests)

homeStore.dispatch('home/fetchHotSuggestData')
// console.log(hotSuggests)
homeStore.dispatch('home/fetchCategories')
homeStore.dispatch('home/fetchHouselist', currentPage.value)

// 点击按钮加载更多
// const moreBtnClick = () => {
//   console.log(currentPage.value)
//   // console.log("jiazaigengduo")
//   homeStore.dispatch('home/fetchHouselist', currentPage.value)
// }

// 监听页面滚动,抽取
// window.addEventListener("scroll", () =>{
//   const scrollTop = document.documentElement.scrollTop
//   const scrollHeight = document.documentElement.scrollHeight
//   const clientHeight = document.documentElement.clientHeight
//   console.log(scrollTop, scrollHeight, clientHeight)
//   if(scrollTop + clientHeight >= scrollHeight) {
//     console.log("到达了底部")
//     homeStore.dispatch('home/fetchHouselist', currentPage.value)
//   }
// }
// )

// useScroll(() => {
//   homeStore.dispatch('home/fetchHouselist', currentPage.value)
// })

// const loadMoreData = () => {
//   homeStore.dispatch('home/fetchHouselist', currentPage.value)
// }
// useScroll(loadMoreData)

// 滚动到底部，发送网络请求
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
  // console.log(newValue,oldValue)
  if (newValue) {
    homeStore.dispatch('home/fetchHouselist', currentPage.value).then(() => {
      isReachBottom.value = false
    })
  }
})

// 滚动到一定位置，显示搜索
const isShowSearch = ref(false)
watch(scrollTop, (newValue, oldValue) => {
  // console.log(newValue, oldValue)
  // console.log("daowei")
  isShowSearch.value = newValue >= 350
})

// const isShowSearch = computed(() => {
//   return scrollTop.value >= 300
// })

//  缓存位置
onActivated(() => {
  homeRef.value.scrollTo({
    top: scrollTop.value
  })
})
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
}

.search-box {
  position: fixed;
  height: 45px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;
  padding: 16px 16px 10px;
}
</style>