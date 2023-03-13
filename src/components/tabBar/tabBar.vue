<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarDate">
      <div class="tab-bar-item"
           @click="itemClick(item, index)"
           :class="{ active: currentIndex === index }"
      >
        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
        <img v-else :src="getAssetURL(item.imageActive)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script>
import tabbarDate from '../../assets/data/tabbar.js'
export default {
  data() {
    return {
      tabbarDate,
      currentIndex: 0
    }
  },
  methods: {
    getAssetURL(image) {
      return new URL('../../assets/img/' + image, 
                    import.meta.url).href
    },
    itemClick(item, index) {
      console.log("holle click")
      this.currentIndex = index
      this.$router.push(item.path)
    }
  }
}
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;

  border: 1px solod #f3f3f3;

  display: flex;
}

.tab-bar-item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  
  img {
    width: 32px;
  }
  .text {
    font-size: 12px;
    margin-top: 3px;
  }
}

.active {
  color: var(--theme-color);
}


</style>