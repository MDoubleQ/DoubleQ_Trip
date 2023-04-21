<template>
  <div class="house-item-v3">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="infos">
        <div class="position">
          <img src="@/assets/img/home/location.png" alt="">
          <div class="location">{{ itemData.location }}</div>
        </div>
        <div class="name">{{ itemData?.houseName }}</div>
        <div class="summary">{{ itemData?.summaryText }}</div>
        <div class="price">
          <div class="new">￥{{ itemData?.finalPrice }}</div>
          <div class="old">{{ itemData?.productPrice }}</div>
          <!-- 减少subtract -->
          <div :style="{ 
               backgroundImage: `linear-gradient(${270}deg, ${startColor}, #${endColor})` 
               }"
               class="sub">
               {{ itemData?.priceTipBadge?.text }}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
  
<script setup>
import { defineProps, ref } from "vue"
const props = defineProps({
  itemData: {
    type: Object,
    default: () => { }
  }
})

const startColor = props.itemData?.priceTipBadge?.gradient?.startColor
const endColor = props.itemData?.priceTipBadge?.gradient?.endColor
</script>
<style lang="less" scoped>
.house-item-v3 {
  width: 50%;
  margin-bottom: 3px;


  .item-inner {
    position: relative;
    margin: 5px;
    background-color: #fff;
    overflow: hidden;
    border-radius: 6px;

    .cover {
      img {
        width: 100%;
      }
    }

    .infos {
      padding: 8px 10px;
      margin-top: 3px;
    }
    .position {
      display: flex;
      justify-self: center;
      align-items: center;
      img {
        width: 12px;
        height: 12px;
      }
    }

    .name {
      margin: 5px 0;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .summary {
      font-size:12px;
    }
    .price {
      display: flex;
      // justify-content: space-between;
      align-items: flex-start;
      margin:5px 0;
      .new {
        font-size: 16px;
        color: var(--theme-color);
      }

      .old {
        font-size: 14px;
        color: #999;
        text-decoration:line-through;
        margin: 0 6px;

      }
      .sub {
        padding: 0px 6px;
        border-radius: 12px;
        color: #fff;
      }
    }
  }

}
</style>