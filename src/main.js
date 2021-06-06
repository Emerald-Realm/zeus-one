import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/main.css'
import 'tailwindcss/tailwind.css'
import 'animate.css'

import VueFormulate from '@braid/vue-formulate'

Vue.config.productionTip = false
Vue.use(VueFormulate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
