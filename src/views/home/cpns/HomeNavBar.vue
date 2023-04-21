<template>
  <div class="nav-bar">
    <div class="title">DoubleQ</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;

  border-bottom: 1px solid #f2f2f2;


  .title {
    color: var(--theme-color);
    font-size: 16px;
    font-weight: 600;
  }
}
</style>