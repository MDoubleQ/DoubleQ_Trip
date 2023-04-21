<template>
  <div class="search-page top-page">
    <h2>{{ $route.query.startDate }}</h2>
    <h2>{{ $route.query.endDate }}</h2>
    <h2>{{ $store.state.currentClickCity }}</h2>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
console.log(store.state.currentClickCity)
</script>

<style scoped></style>