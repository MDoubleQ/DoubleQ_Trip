<template>
  <div class="search-page">
    <!-- 搜索区域 -->
    <div class="top">
      <van-search shape="round" class="searchIcon" v-model="searchValue" show-action @cancel="onCancel"
        placeholder="城市/区域/位置" />

      <!-- 标签栏切换 -->
      <van-tabs class="city-tabs" line-height="2" color="var(--theme-color)" v-model:active="tabActive">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>


    <!-- 数据列表 -->
    <div class="content">
      <!-- 字母索引 -->
      <van-index-bar highlight-color="var(--theme-color)" :sticky="false" :index-list="indexList">
        <!-- 热门标题 -->
        <van-index-anchor index="热门"></van-index-anchor>
        <!-- 热门城市 -->
        <div class="hot-cities">
          <template v-for="(item, index) in currentGroup?.hotCities" :key="index">
            <div class="city" @click="cityClick(item)">{{ item.cityName }}</div>
          </template>
        </div>

        <!-- 城市数据列表 -->
        <div class="cities">
          <!-- 循环字母 -->
          <template v-show="" v-for="(cityList, index) in currentGroup?.cities" :key="index">
            <van-index-anchor class="letter-index" :index="cityList.group" />
            <!-- 循环城市 -->
            <template v-for="(city, indexL) in cityList.cities" :key="indexL">
              <van-cell :title="city.cityName" @click="cityClick(city)" />
            </template>
          </template>
        </div>
      </van-index-bar>


      <!-- 不使用模板做的数据展示 -->
      <!-- <template v-for="(group, index) in currentGroup?.cities" :key="index">
        <div class="group-item">
          <div class="title">{{ group.group }}</div>
          <div class="list">
            <div v-for="(city, index) in group.cities" :key="index">
              <div class="city-list">{{ city.cityName }}</div>
            </div>
          </div>
        </div>
      </template> -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed, toRefs } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';


const searchValue = ref()
const router = useRouter()


// 1、取消事件
const onCancel = () => {
  router.back()
}

// 2、网络请求
const store = useStore()
store.dispatch('fetchAllCitiesData')
const { allCities } = toRefs(store.state)
console.log(allCities)

const tabActive = ref()
// 3、获取选中标签的值
const currentGroup = computed(() => allCities.value[tabActive.value])
console.log("currentGroup:", currentGroup)

// 从2、网络请求到这里，卡了整整两天，最后解决了，学到了很多
// debugger、watch、watchEfect
// 4、索引列表重映射
const indexList = computed(() => {
  if (currentGroup.value && currentGroup.value.cities && currentGroup.value.cities.length !== 0) {
    const list = currentGroup.value.cities.map(item => item.group)
    list.unshift("#")
    return list
  } else {
    return []
  }
})
// 5、监听城市的点击
const cityClick = (city) => {
  console.log(city)
  router.back()
  store.commit("setCurrentCity", city)
}

</script>

<style lang="less" scoped>
.searchIcon {
  --van-search-left-icon-color: var(--theme-color) !important;
}


.search-page {
  --van-tabs-line-height: 30px;

  .top {
    position: relative;
    z-index: 9;
  }


  .content {
    height: calc(100vh - 98px);
    overflow: auto;


    .hot-cities {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;


      .city {

        width: 70px;
        height: 28px;
        border-radius: 15px;

        margin-top: 6px;
        background-color: #fff4ec;

        font-size: 12px;
        line-height: 28px;
        text-align: center;
      }
    }
  }

}
</style>