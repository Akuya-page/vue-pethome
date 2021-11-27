import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
// import axios from "axios"
// axios.defaults.baseURL = "https://www.fastmock.site/mock/9d833c090d67ac0eee95d5583e90688f/vue-pethome"
// Vue.prototype.$http = axios
Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
