<template>
  <div class="loading-animate" v-show="$store.state.main.isShowAnimate">
    <div class="loading-bgc">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
.loading-animate {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .2);

  .loading-bgc {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;

    img {
      width: 70px;
      height: 70px;
      margin-bottom: 8px;
      // background-image: url(@/assets/img/home/loading-bg.png);

    }
  }
}
</style>