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

library.add(fas)
library.add(fab)
library.add(far)
Vue.component('fasw', FontAwesomeIcon)

// Bootstrap Vue
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import '@/scss/custom.scss'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
