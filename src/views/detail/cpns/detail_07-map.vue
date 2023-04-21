<template>
  <div class="map">
    <detail-section title="位置周边" moreInfos="查看更多周边信息">
      <div class="baidu-map" ref="mapRef"></div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';
import { onMounted, ref } from 'vue';
const mapRef = ref()
onMounted(() => {
  var map = new BMapGL.Map(mapRef.value);          // 创建地图实例 
  var point = new BMapGL.Point(props.positionData.longitude, props.positionData.latitude);  // 创建点坐标 
  map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  var marker = new BMapGL.Marker(point);        // 创建标注   
  map.addOverlay(marker);                     // 将标注添加到地图中
})

const props = defineProps({
  positionData: {
    type: Object,
    default: () => { }
  }
})
</script>

<style scoped>
.baidu-map {
  height: 300px;
}
</style>