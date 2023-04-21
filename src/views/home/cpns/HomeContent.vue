<template>
  <div class="content">
    <div class="title">热门精选</div>
    <div class="list">
      <template v-for="(item, index ) in houselist" :key="index">
        <house-item-v9 @click="itemClick(item)" :item-data="item.data" v-if="item.discoveryContentType === 9">
        </house-item-v9>
        <house-item-v3 @click="itemClick(item)" :item-data="item.data" v-else-if="item.discoveryContentType === 3">
        </house-item-v3>
      </template>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import HouseItemV9 from '@/components/houseItemV9/houseItemV9.vue'
import HouseItemV3 from '@/components/houseItemV3/houseItemV3.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
const houseStore = useStore()
const houselist = computed(() => houseStore.state.home.houselist)
const route = useRouter()

// console.log(houselist)

const itemClick = (item) => {
  route.push("/detail/" + item.data.houseId)
}
</script>

<style lang="less" scoped>
.content {
  padding: 10px 8px;

  .title {
    font-size: 18px;
    padding: 5px;
    font-weight: 500;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>