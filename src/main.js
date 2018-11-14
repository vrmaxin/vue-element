/**
 * @author vrma
 * @description 应用程序入口文件
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' // 引入ElementUI
import 'element-ui/lib/theme-chalk/index.css' // 引入ElementUI样式文件

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'medium', // 组件的默认尺寸
  zIndex: 3000 // 弹框的初始 z-index
})

// 禁用ESLint进行检测，这里就是禁用no-new的效验
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
