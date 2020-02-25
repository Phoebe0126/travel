import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'styles/reset.css'
// 移动端1像素边框问题
import 'styles/border.css'
import 'styles/iconfont.css'
Vue.config.productionTip = false
// 300毫秒延迟问题
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
