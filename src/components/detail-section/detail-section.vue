<template>
  <div class="section">
    <div class="header">
      <div class="title">{{ title }}</div>
    </div>
    <div class="content">
      <slot>插槽默认值</slot>
    </div>
    <div class="footer" v-if="moreInfos">
      <div class="more">{{ moreInfos }}</div>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "default-title"
  },
  moreInfos: {
    type: String,
    default: ""
  },
})
</script>

<style lang="less" scoped>
.section {
  padding: 0 15px;
  margin-top: 12px;
  border-top: 1px solid #eee;

  .header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;

    .title {
      font-size: 20px;
      color: #333;
      font-weight: 700;
    }
  }

  .content {
    padding: 8px 0;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    height: 44px;
    color: var(--theme-color);
    font-size: 14px;
    font-weight: 600;
  }
}</style>