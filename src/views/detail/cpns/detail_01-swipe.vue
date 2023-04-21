<template>
  <div class="swipe">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData">
        <van-swipe-item>
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="indicator">
          <template v-for="(value, key, index) in swipeGroup" :key="key">
            <div class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key }">
              <span>
                {{ getName(value[0].title) }}
              </span>
              <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                {{ getCategoryIndex(swipeData[active]) }} / {{ value.length }}
              </span>
            </div>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
})

const swipeGroup = {}
// for (const item of props.swipeData) {
//   swipeGroup[item.enumPictureCategory] = []
// }
// for (const item of props.swipeData) {
//   const valueArray = swipeGroup[item.enumPictureCategory]
//   valueArray.push(item)
// }

for (const item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory]
  if (!valueArray) {
    valueArray = []
    swipeGroup[item.enumPictureCategory] = valueArray
  }
  valueArray.push(item)
}

const getName = (name) => {
  return name.replace("：", "").replace("【", "").replace("】", "")
}
// const nameReg = /【（.*?）】/i
// const getName = (name) => {
//   const results = nameReg.exec(name)
//   return results[1]
// }

const getCategoryIndex = (item) => {
  const valueArray = swipeGroup[item.enumPictureCategory]
  return valueArray.findIndex(data => data === item) + 1
}
</script>

<style lang="less" scoped>
.swipe {
  position: relative;

  .my-swipe {
    img {
      width: 100%;
    }
  }

  .indicator {
    position: absolute;
    bottom: 5px;
    right: 5px;
    display: flex;
    padding: 2px 5px;
    background-color: #000;
    font-size: 12px;
    color: #fff;

    .item {
      margin: 0 3px;
      line-height: 1.2;
    }

    .active {
      padding: 0 3px;
      background-color: #fff;
      color: #000;
      border-radius: 5px;
    }
  }
}
</style>