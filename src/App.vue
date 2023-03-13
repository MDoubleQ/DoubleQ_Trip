<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
  import tabBar from './components/tabBar/tabBar.vue'
  export default {
    components: {
      tabBar,
    }
  }
</script>

<style scoped></style>
