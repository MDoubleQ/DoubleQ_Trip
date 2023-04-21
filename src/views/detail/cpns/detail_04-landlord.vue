<template>
  <div class="landlord">
    <detail-section title="房东介绍" more-infos="查看房东主页">
      <div class="landlord-inner">
        <div class="top">
          <img :src="landloreData.topScroll" alt="">
        </div>
        <div class="header">
          <div class="left">
            <div class="logo">
              <img :src="landloreData.hotelLogo" alt="">
            </div>
            <div class="infos">
              <div class="name">{{ landloreData.hotelName }}</div>
              <div class="tags">
                <template v-for="(item, index) in landloreData.hotelTags" :key="index">
                  <div class="item">
                    <div class="text">{{ item.tagText.text }}</div>
                    <div v-if="index !== landloreData.hotelTags.length - 1" class="divider">|</div>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="content">联系房东</div>
          </div>
        </div>
        <div class="bottom">
          <template v-for="(item, index) in landloreData.hotelSummary ">
            <div class="title">{{ item.title }}</div>
            <div class="intro">{{ item.introduction }}</div>
            <div class="tip">{{ item.tip }}</div>
          </template>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue'
defineProps({
  landloreData: {
    type: Object,
    default: () => { }
  }
})
</script>

<style lang="less" scoped>
.landlord {
  .landlord-inner {
    img {
      width: 100%;
    }
  }
}
</style>