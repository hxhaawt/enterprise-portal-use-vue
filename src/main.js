import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'

// 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'

require('./assets/css/common.css'); //引入全局的 css文件


Vue.use(VueAwesomeSwiper);

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'history',
    // scrollBehavior: () => ({
    //     y: 0
    // }),
    routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
