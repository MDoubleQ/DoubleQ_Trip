<template>
  <div class="infos">
    <div class="name">
      {{ infosData.houseName }}
    </div>
    <div class="tags">
      <template v-for="(item, index) in infosData.houseTags" :key="index">
        <span class="text" v-if="item.tagText"
          :style="{ color: item.tagText.color, background: item.tagText.background.color }">
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment extra">
      <div class="left">
        <span class="overall"> {{ infosData.commentBrief.overall }}</span>
        <span class="score-title"> {{ infosData.commentBrief.scoreTitle }}</span>
        <span class="comment-brief"> {{ infosData.commentBrief.commentBrief }}</span>
      </div>
      <div class="right">
        <span class="total-count"> {{ infosData.commentBrief.totalCount }}条评论
        </span>
        <div class="right-icon">
            <van-icon name="arrow" />
          </div>
      </div>
    </div>
    <div class="position extra">
      <div class="location">
        <div>{{ infosData.nearByPosition.address }}</div>
      </div>
      <div class="right">
        地图 周边
        <div class="right-icon">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  infosData: {
    type: Object,
    default: () => { }
  }
})
</script>

<style lang="less" scoped>
.infos {
  padding: 16px;

  .name {
    font-size: 20px;
    font-weight: 700;
    color: #333;
    text-align: justify;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 6px;
  }

  .tags {
    margin: 10px 0;

    .text {
      font-size: 12px;
      padding: 1px 3px;
      margin: 0 2px;
    }
  }

  .extra {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    background-color: #f5f7fa;
 
    .right {
      display: flex;
      flex-wrap: nowrap;
      width: 80px;
      color: var(--theme-color);
    }
  }

  .comment {
    .overall {
      font-size: 18px;
      color: #333;
      font-weight: 700;
    }

    .score-title {
      font-weight: 700;
      margin: 0 3px;
      color: #333;
    }

    .comment-brief {
      color: #666;
    }
  }

  .position {
    .location {
      width: 250px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-weight: 700;
      font-size: 14px;
      color: #333;
    }
  }
}
</style>