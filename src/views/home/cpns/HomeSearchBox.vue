<template>
  <div class="home-search-box">
    <!-- 选择日期 -->
    <div class="section date-range bottom-gray-line" @click="showCalendar = true">
      <div class="start-date">
        <div class="date">
          <span class="behavior">入住</span>
          <span class="time">{{ startDateStr }}</span>
        </div>
      </div>
      <div class="stay-day">共 {{ stayDays }} 晚</div>
      <div class="end-date">
        <div class="date">
          <span class="behavior">离店</span>
          <span class="time">{{ endDateStr }}</span>
        </div>
      </div>
    </div>
    <!-- <van-cell title="选择多个日期" :value="text" @click="show = true" /> -->
    <van-calendar v-model:show="showCalendar" type="range" @confirm="onConfirm" color="var(--theme-color)" />
  </div>
  <div class="home-count-key ">
    <div class="message-select">
      <div class="price-count  bottom-gray-line">
        <div class="price">价格不限</div>
        <div class="count">人数不限</div>
      </div>
      <div class="keyword bottom-gray-line">关键字/位置/民宿名</div>
    </div>
  </div>
  <div class="home-suggests-cities">
    <div class="suggest">
      <template v-for="(itemCity, index) in hotSuggests">
        <div class="city" :style="{ color: itemCity.tagText.color, background: itemCity.tagText.background.color }">{{
          itemCity.tagText.text }}</div>
      </template>
    </div>
  </div>
  <div class="suggest-btn">
    <div class="btn" @click="searchClick">开始搜索</div>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import { formatMothDay, getDiffDays } from '@/utils/formatDate'
import { useRouter } from 'vue-router'
import { defineProps, toRefs, computed } from 'vue';
import { useStore } from 'vuex';

const mainStore = useStore()
const { startDate, endDate } = toRefs(mainStore.state.main)
// console.log(startDate.value, endDate.value)
// const nowDate = computed(() => mainStore.state.main.startDate)
// const newDate = computed(() => mainStore.state.main.endDate)
// console.log(startDate, endDate)
// debugger
// const nowDate = new Date()
// const newDate = new Date()
// newDate.setDate(nowDate.getDate() + 1)

// const startDate = ref(formatMothDay(nowDate))
const startDateStr = computed(() => formatMothDay(startDate.value))
// console.log(startDate)
// const afterDate = nowDate.setDate(nowDate.getDate() + 1)
// const endDate = ref(formatMothDay(afterDate))
const endDateStr = computed(() => formatMothDay(endDate.value))
// console.log(nowDate, endDate)
const stayDays = ref(getDiffDays(startDate.value, endDate.value))

const showCalendar = ref(false)
const onConfirm = (value) => {
  // console.log(value)
  const selectStartDay = value[0]
  // console.log(selectStartDay)
  const selectEndDay = value[1]
  // console.log(selectEndDay)
  mainStore.state.main.startDate = formatMothDay(selectStartDay)
  mainStore.state.main.endtDate = formatMothDay(selectEndDay)
  showCalendar.value = false

  // 首页天数计算
  stayDays.value = getDiffDays(selectStartDay, selectEndDay)
  // console.log(stayDays.value)
}

// function openCalendar(){
//   showCalendar.value = true
// }

defineProps({
  hotSuggests: {
    type: Array,
    default: () => []
  }
})

const route = useRouter()
const searchClick = function () {
  return route.push({
    path: "/search-page",
    query: {
      startDate: startDateStr.value,
      endDate: endDateStr.value
    }
  })
}
</script>


<style lang="less" scoped>
.section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  color: #999;

  .start-date {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end-date {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .behavior {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.date-range {
  height: 44px;

  .stay-day {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.message-select {
  padding: 0 20px;
  font-size: 12px;
  color: #999;

  .price-count {
    display: flex;
    justify-content: space-between;
    height: 44px;
    line-height: 44px;
  }

  .keyword {
    min-width: 30%;
    height: 44px;
    line-height: 44px;
  }
}

.suggest {
  margin: 10px 20px;
  display: flex;
  flex-wrap: wrap;

  .city {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1.2;
  }
}

.suggest-btn {
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 44px;

  .btn {
    flex: 1;
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500px;
    font-size: 18px;
    border-radius: 25px;
    text-align: center;
    line-height: 38px;
    color: #fff;
    background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
  }
}
</style>