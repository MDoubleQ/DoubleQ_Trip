<template>
  <div class="facility">
    <detail-section title="房屋设施" more-infos="查看全部">
      <div class="facility-inner">
        <template v-for="(item, index) in facilityData.houseFacilitys" :key="index">
          <div class="item" v-if="facilityData.facilitySort?.includes(index)">
            <div class="head">
              <img :src="item.icon" alt="">
              <div class="text">{{ item.groupName }}</div>
            </div>
            <div class="list">
              <template v-for="(itemA, indexA) in item.facilitys.slice(0, 4)" :key="indexA">
                <div class="item-a">
                  <i class="item-a-icon"></i>
                  <span>{{ itemA.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue"
defineProps({
  facilityData: {
    type: Object,
    default: () => { }
  }
})
</script>

<style lang="less" scoped>
.facility-inner {
  padding: 5px 0;
  border-radius: 6px;
  font-size: 12px;
  background-color: #f7f9fb;

  .item {
    display: flex;
    margin: 25px 0;

    .head {
      text-align: center;
      width: 90px;
      .text {
        margin-top: 5px;
      }

      img {
        width: 20px;
        height: 20px;
      }
    }

    .list {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      .item-a {
        display: flex;
        
        align-items: center;
        box-sizing: border-box;
        width: 50%;
        margin: 4px 0;

        .item-a-icon {
          display: inline-block;
          margin: 0 3px;
          width: 12px;
          height: 12px;
          background: url(@/assets/img/detail/icon_check.png) 0 0 / 100% 100%;
        }
      }
    }
  }
}
</style>