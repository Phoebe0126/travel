<template>
    <div class="search">
        <input type="text" placeholder="输入城市名称或拼音" class="search-input">
    </div>
</template>

<script>
export default {
  name: 'CitySearch'
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
</style>
