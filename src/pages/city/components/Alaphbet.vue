<template>
<div>
   <div class="list">
      <ul>
          <li class="item"
              v-for="key of letters"
              :key="key"
              :ref="key"
              @click="handleLetterClick"
              @touchstart="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchend="handleTouchEnd">
              {{key}}
          </li>
      </ul>
  </div>
  <div class="letter" v-show="showLetter">
    {{this.letter}}
  </div>
</div>
</template>

<script>
export default {
  name: 'CityHeader',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
      letter: '',
      showLetter: false
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      let letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
      this.showLetter = true
      this.letter = e.target.innerText
      setTimeout(() => {
        this.showLetter = false
      }, 300)
    },
    handleTouchStart () {
      this.touchStatus = true
      this.showLetter = true
    },
    handleTouchMove (e) {
      if (this.timer) {
        clearTimeout(this.timer)
      } else {
        setTimeout(() => {
          if (this.touchStatus === true) {
            const touchY = e.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) / 20)
            if (index >= 0 && index <= this.letters.length) {
              this.letter = this.letters[index]
              this.$emit('change', this.letter)
            }
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
      this.showLetter = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      text-align: center
      color: $bgColor
      line-height: .4rem
 .letter
    position: absolute
    width: 1rem
    height: 1rem
    background: $bgColor
    border-radius: 50%
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    text-align: center
    line-height: 1rem
    color: #fff
    font-size: .7rem
</style>
