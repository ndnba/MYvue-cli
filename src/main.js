import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  created () {
    this.getData()
  },
  methods: {
    getData () {
      console.log('1111')
    }
  },
  router,
  render: h => h(App)
})
