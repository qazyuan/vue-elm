// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router/index.js';
import 'common/sass/index.scss'

Vue.use(VueResource)

const app = new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router
})

// // 重定向
// router.push('/goods')

//重命名页面标题
router.afterEach((to, from, next) => {
    document.title = to.name;
})

