import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./assets/css/common.css"
import "./assets/css/style.css"
import "./assets/fonts/iconfont.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import moment from "moment"//用moment组件格式化时间
import axios from "axios"
import "./mock"
// import * as echarts from "echarts"
// Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(ElementUI);
Vue.filter("dataformat", (data, patter = "YYYY-MM-DD HH:mm:ss") => {
  return moment(data).format(patter)
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')