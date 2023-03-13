<template>
  <div class="banner">
    <img src="../../../assets/img/home/banner.webp" alt="">
  </div>
  <div class="location">
    <div class="city">广州</div>
    <div class="position">
      <span>我的位置</span>
      <img src="../../../assets/img/home/icon_location.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
.location {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    margin-left: 3px;

    .city {
      flex: 1;
      font-size: 16px;
    }

    .position {
      display: flex;
      // width: 74px;
      color: #333;
      align-items: center;
    }

    img {
      position: relative;
      top: -2px;
      margin-right: 3px;
      margin-left: 5px;
      width: 18px;
    }
  }

</style>