<template>
    <div class="search">
        <input type="text" placeholder="输入城市名称或拼音" class="search-input" v-model="keyword">
        <div class="search-content"
             ref="search"
             v-show="keyword">
          <ul>
            <li v-for="item of list"
                :key="item.id"
                class="item-content border-bottom">
                {{item.name}}
            </li>
            <li v-show="hasNoData"  class="item-content">没有找到匹配的城市</li>
          </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      list: [],
      keyword: '',
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        // 重新push进list
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            // 试试es6
            if (value.spell.includes(this.keyword) || value.name.includes(this.keyword)) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.BScroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    background: $bgColor
    padding: 0 .1rem
    .search-input
      width: 100%
      text-align: center
      border-radius: .06rem
      padding: 0 .1rem
      color: #666
      height: .62rem
      line-height: .62rem
      box-sizing: border-box
    .search-content
      z-index: 1
      position: absolute
      top: 1.58rem
      left: 0
      bottom: 0
      right: 0
      background: #eee
      overflow: hidden
      .item-content
        line-height: .62rem
        padding-left: .2rem
        background: #fff
        color: 666
</style>
