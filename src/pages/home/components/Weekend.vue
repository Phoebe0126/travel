<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
        title: '北京温泉排行榜',
        desc: '细数北京温泉，温暖你的冬天'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        title: '北京必游TOP10',
        desc: '来北京必去的景点非这些地方莫属'
      }]
    }
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
