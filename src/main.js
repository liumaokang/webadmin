// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from '../modules/store'
//引入axios请求
import axios from 'axios'
// 引入vuex存储器
import vuex from 'vuex'
Vue.prototype.vuex = vuex
Vue.prototype.$http = axios
Vue.prototype.store = store
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.HOST= "/api"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
