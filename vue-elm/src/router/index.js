import Vue from 'vue'
import VueRouter from 'vue-router'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

Vue.use(VueRouter)

const routes = [
{path: '/', redirect: '/goods'},
{path: '/goods', component: goods, name: '商品'},
{path: '/ratings', component: ratings, name: '评分'},
{path: '/seller', component: seller, name: '商家'}
]

export default new VueRouter({
    linkActiveClass: 'active',
    routes
})

