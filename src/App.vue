<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive includ="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <tab-bar v-show="!this.$route.meta.hiddenTabBar"></tab-bar>
    <loading-animate v-show="$store.state.main.isShowAnimate"/>
  </div>
</template>
<script>
  import tabBar from './components/tabBar/tabBar.vue'
  import LoadingAnimate from '@/components/LoadingAnimate/LoadingAnimate.vue'
  export default {
    components: {
      tabBar,
    }
  }
</script>

<style scoped>

</style>
