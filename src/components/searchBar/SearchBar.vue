<template>
  <div class="search-bar">
    <div class="select-time">
      <div class="time start">
        <div class="name">住</div>
        <div class="date">{{startDateStr}}</div>
      </div>
      <div class="time end">
        <div class="name">离</div>
        <div class="date">{{endDateStr}}</div>
      </div>
    </div>
    <div class="content">
      <div class="keyword">关键字/位置/民宿</div>
    </div>
    <div class="right">
      <i class="icon-search"></i>
    </div>
  </div>
</template>

<script setup>
import {useStore} from "vuex"
import { formatMothDay} from '@/utils/formatDate'
import {toRefs, computed} from 'vue' 
const mainStore = useStore()
const { startDate, endDate } = toRefs(mainStore.state.main)
const startDateStr = computed(() => formatMothDay(startDate.value, "MM.DD"))
const endDateStr = computed(() => formatMothDay(endDate.value, "MM.DD"))
</script>

<style lang="less" scoped>
.search-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 14px;

  height: 45px;
  line-height: 45px;
  font-size: 14px;
  color: #999;
  border-radius: 6px;
  background-color: #f2f4f6;
.select-time {
  display:flex;
  flex-direction: column;
  
  .time {
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: normal;
    font-size: 10px;
    .date {
      color: #333;
      margin: 0px 10px 0 3px
    }
  }
}
.content {
  flex: 1;
  padding: 0 6px;
  text-align: left;
  border-left: 1px solod #fff;
}
.right {
  display: flex;
  align-items: center;
}
.icon-search {
  width: 24px;
  height: 24px;
  display: inline-block;
  background-image: url(@/assets/img/home/home-sprite.png);
  background-position: -29px -151px;
  background-size: 207px 192px;
}
}
</style>