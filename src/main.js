import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Default from '@/layouts/Default.vue';
import FunctionalCalendar from 'vue-functional-calendar';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(FunctionalCalendar, {
    dayNames: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
});
Vue.component('default', Default)
Vue.use(VueAxios, axios);
Vue.config.productionTip = false
const token = localStorage.getItem('Gvtoken');
if (token) {
  axios.defaults.headers.common['Authorization'] = token;
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
