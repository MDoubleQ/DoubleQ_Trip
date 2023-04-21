<template>
  <div class="introduction">
    <detail-section :title="introductionData.title">
      <div class="content">
        {{ introductionData.introduction }}
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue'
defineProps({
  introductionData: {
    type: Object,
    default: () => { }
  }
})
</script>

<style lang="less" scoped>
.introduction {
  .content {
    color: #333;
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;
  }

}
</style>