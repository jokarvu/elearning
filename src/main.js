import Vue from 'vue'
import App from './App.vue'
import router from './router'

require('./bootstrap')

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab, far)
Vue.component('fas', FontAwesomeIcon)

// Bootstrap Vue
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import '@/scss/custom.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
