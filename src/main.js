import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';
import router from './routing'
Vue.use(VueRouter);
Vue.use(VueResource)
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
