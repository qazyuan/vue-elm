// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'

Vue.use(VueRouter)

// 配置路由
const router = new VueRouter({
    routes: [
    {path: '/', component: Home},
    {path: '/hello', component: HelloWorld}
    ],
    mode: 'history'
});

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    router,
    el: '#app',
    components: { App },
    template: '<App/>'
})
