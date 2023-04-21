<template>
  <div class="location bottom-gray-line">
    <div class="city" @click="cityClick">{{ $store.state.currentClickCity }}</div>
    <div class="position" @click="getPosition()">
      <span>我的位置</span>
      <img src="../../../assets/img/home/icon_location.png" alt="">
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  // computed: {
  //   ...mapState({
  //     currentClickCity: state => $store.currentClickCity
  //   })
  // },
  methods: {
    getPosition() {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          res => {
            console.log("获取位置成功", res)
            resolve(res)
          },
          err => {
            console.log("获取位置失败", err)
            reject(err)
          }
        )
      })
    },
    cityClick() {
      this.$router.push("/search")
    }
  }
}
</script>

<style lang="less" scoped>
.location {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  // margin-left: 3px;
  padding: 0 20px;

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
    top: -1px;
    // margin-right: 3px;
    margin-left: 5px;
    width: 18px;
  }


}
</style>