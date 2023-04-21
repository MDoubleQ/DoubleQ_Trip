<template>
  <div class="tab-control" >
    <template v-for="(item, index ) in title " :key="index">
      <div class="tab-control-item" @click="tabControlClick(index)" :class="{ active: currentIndex === index }">{{ item }}
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue"
const props = defineProps({
  title: {
    type: Array,
    default: () => []
  }
})
const emits = defineEmits(["tabControlClick"])

const currentIndex = ref(0)
const tabControlClick = (index) => {
  // console.log(index)
  currentIndex.value = index
  emits("tabControlClick", index)
}

defineExpose ({
  currentIndex
})

</script>

<style lang="less" scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
  border-bottom: 1px solid #f3f3f3;

  .tab-control-item {
    flex: 1;
  }

  .active {
    border-bottom: 2px solid var(--theme-color);
  }
}</style>