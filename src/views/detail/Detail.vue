<template>
  <div class="detail-page top-page" ref="tabRef" >
    <tab-control @tabControlClick="tabItemClick" v-show="isShowTabControl" class="tab-control"
      :title="names" ref="tabControlRef"></tab-control>
    <div class="nav-bar">
      <van-nav-bar title="房屋详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <div v-if="mainPart" class="main" >
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"></detail-swipe>
      <detail-infos name="描述" :ref="getSectionEl" :infos-data="mainPart.topModule"></detail-infos>
      <detail-facility name="设施" :ref="getSectionEl"
        :facility-data="mainPart.dynamicModule.facilityModule.houseFacility"></detail-facility>
      <detail-landlord name="房东" :ref="getSectionEl"
        :landlore-data="mainPart.dynamicModule.landlordModule"></detail-landlord>
      <detail-comment name="评论" :ref="getSectionEl"></detail-comment>
      <detail-notice name="须知" :ref="getSectionEl"></detail-notice>
      <detail-map name="地图" :ref="getSectionEl" :position-data="mainPart.dynamicModule.positionModule"></detail-map>
      <detail-introduction :introduction-data="mainPart.introductionModule"></detail-introduction>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">宏源旅途，永无止境</div>
    </div>
  </div>
</template>

<script setup>
import DetailSwipe from './cpns/detail_01-swipe.vue'
import DetailInfos from './cpns/detail_02-infos.vue'
import { useRoute, useRouter } from "vue-router"
import { getDetailInfos } from '@/service/index'
import { ref, computed, watch } from 'vue'
import DetailFacility from "./cpns/detail_03-facility.vue"
import DetailLandlord from "./cpns/detail_04-landlord.vue"
import DetailComment from "./cpns/detail_05-comment.vue"
import DetailNotice from "./cpns/detail_06-notice.vue"
import DetailMap from './cpns/detail_07-map.vue'
import DetailIntroduction from './cpns/detail_08-introduction.vue'
import TabControl from '@/components/tab-control/tab-control.vue'
import useScroll from '@/hooks/useScroll'


// 点击跳转路由
const route = useRoute()
const router = useRouter()
// console.log(route.params.id)
const onClickLeft = () => {
  router.back()
}

// 网络请求
const houseId = route.params.id
const detailInfos = ref({})
const mainPart = computed(() => detailInfos?.value?.mainPart)
getDetailInfos(houseId).then((res) => {
  detailInfos.value = res.data
})

// 显示tab栏
const tabRef = ref()
const { scrollTop } = useScroll(tabRef)
const isShowTabControl = computed(() => {
  // console.log(scrollTop.value)
  return scrollTop.value > 300
})

// 跳转tab栏
const sectionEl = ref({})

const getSectionEl = (value) => {
  // console.log(value.$el)
  if (!value) return
  const name = value.$el.getAttribute("name")
  // console.log(name)
  sectionEl.value[name] = value.$el
  // sectionEl.push(value.$el)
  // const name = value.$el.getAttribute("name")
  // sectionEl.value[name] = value.$el
}

const names = computed(() => {
  return Object.keys(sectionEl.value)
})

let isClick = false
let currentDistance = -1
const tabItemClick = (index) => {
  const key = Object.keys(sectionEl.value)[index]

  const el = sectionEl.value[key]
  let instance = el.offsetTop
  if (index !== 0) {
    instance = instance - 44
  }

  isClick = true
  currentDistance = instance
  tabRef.value.scrollTo({
    top: instance,
    behavior: 'smooth'
  })
}

const tabControlRef = ref(null)

watch(scrollTop, (newValue) => {
  if (newValue === currentDistance){
    isClick = false
  }
  if(isClick) return
  const els = Object.values(sectionEl.value)
  const values = els.map(el => el.offsetTop)
  let index = values.length - 1
  for (let i = 0; i < values.length; i++) {
    if (values[i] > newValue + 44 ) {
      index = i - 1
      break
    }
  }
  // console.log(index)
  tabControlRef.value.currentIndex = index
})

</script>

<style lang="less" scoped>
.tab-control {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    color: #7688a7;
    font-size: 12px;
  }
}
</style>