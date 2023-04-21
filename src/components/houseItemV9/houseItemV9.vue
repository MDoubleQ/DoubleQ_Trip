<template>
  <div class="house-item-v9">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="infos">
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="score-price">
          <van-rate :model-value="commentScore" readonly allow-half color="#fff" size="15px"/>
          <div class="price">￥{{ itemData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue"
const props = defineProps({
  itemData: {
    type: Object,
    default: () => {}
  }
})

const commentScore = computed(() => {
  return Number(props.itemData.commentScore)
})
</script>
<style lang="less" scoped>
.house-item-v9 {
  width: 50%;
  margin-bottom: 3px;
  .item-inner {
    position:relative;
    margin: 5px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    .cover {
      img {
        width:100%;
      }
    }
    .infos {
      position: absolute;
      bottom: 0px;
      padding: 8px 10px;
      color: #fff;
      .summary {
        font-size: 12px;
      }
      .name {
        margin: 5px 0;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
      }
      .score-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
      }
    }
  }
}
</style>