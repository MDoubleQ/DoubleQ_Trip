<template>
  <div class="categories">
    <template v-for="(item, index) in homeCategories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div>{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { defineProps } from "vue"
const props = defineProps({
  homeCategories: {
    type: Array,
    default: () => []
  }
}) 
</script>

<style lang="less" scoped>
::-webkit-scrollbar {
  display: none;
  /* Chrome Safari */
}

.categories {
  display: flex;
  overflow-x: auto;
  height: 80px;
  padding: 0 10px;
  .item {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;

    img {
      width: 32px;
      height: 32px;
    }

  }
}
</style>