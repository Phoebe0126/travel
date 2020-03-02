<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{ sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe695;</span>
          39
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery
        :imgs="gallleryImgs"
        v-show="showGallery"
        @close="closeGallery"
      ></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/fade'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallleryImgs: Array
  },
  data () {
    return {
      showGallery: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    closeGallery () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    display: flex
    color: #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    .banner-title
       flex: 1
       font-size: .32rem
       padding: 0 .2rem
    .banner-number
       line-height: .32rem
       height: .32rem
       border-radius: .2rem
       background: rgba(0, 0, 0, .8)
       font-size: .24rem
       margin-top: .14rem
       padding: 0 .4rem
     .banner-icon
       font-size: .24rem
</style>
