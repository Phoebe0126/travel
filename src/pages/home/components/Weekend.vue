<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
          <div class="item-img-wrapper">
             <img
              :src="item.imgUrl"
              class="item-img"
             />
          </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.recommend-title
  line-height: .4rem
  text-indent: .2rem
  margin-top: .2rem
.item-img-wrapper
  height: 0
  padding-bottom: 33.9%
  overflow: hidden
  .item-img
    width: 100%
.item-info
  padding: .1rem
  .item-title
    line-height: .54rem
    font-size: .32rem
    text-overflow: ellipsis
    white-space: nowrap
    overflow: hidden
  .item-desc
    line-height: .4rem
    color: #ccc
    text-overflow: ellipsis
    white-space: nowrap
    overflow: hidden
</style>
