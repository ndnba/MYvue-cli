import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/index.css'
import axios from 'axios'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
axios.defaults.baseURL = 'http://www.liulongbin.top:8888/api/private/v1/'
Vue.prototype.$http = axios
Vue.config.productionTip = false
// 添加路由导航护卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
})
// 设置请求拦截请求头 携带token
axios.interceptors.request.use(
  function(config) {
    const token = sessionStorage.getItem('token')
    config.headers.Authorization = token
    // Do something before request is sent
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  created() {
    this.getData()
  },
  methods: {
    getData() {
      console.log('1111')
    }
  },
  router,
  render: h => h(App)
})
