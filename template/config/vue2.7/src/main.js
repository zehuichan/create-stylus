// Register icon sprite
import 'virtual:svg-icons-register'

import Vue from 'vue'
import App from './App.vue'

import { store } from './store'
import { router } from './router'

Vue.config.productionTip = false

new Vue({
  router,
  pinia: store,
  render: (h) => h(App)
}).$mount('#app')
