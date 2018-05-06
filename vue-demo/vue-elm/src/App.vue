<template>
  <div id="app">
    <v-header :seller='seller'></v-header>
    <div class="tab">
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
        <!-- <a href="#">商品</a> -->
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <keep-alive>
      <router-view :seller="seller" keep-alive></router-view>
    </keep-alive>
    <!-- <div class="content">content</div> -->
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header/header.vue';
import {getUrlParam} from 'common/js/util';
const ERR_OK = '0000';
export default {
  data () {
    return {
      seller: {
        id: (() => {
          let queryParam = getUrlParam();
          return queryParam.id;
        })()

      }
    }
  },
  created () {
    this.$http.get('/api/seller').then((response) => {
      response = response.body
      if (response.code === ERR_OK) {
        this.seller = Object.assign({}, this.seller, response.data)
      }
    })
  },
  components: {
    'v-header': header
    // 'v-tab': tab
  }
}
</script>

<style>
@import "./common/sass/index.scss";
#app {
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    /*border-bottom: 1px solid rgba(7, 17, 27, 0.1);*/
    @include borderpx(rgba(7, 17, 27, 0.1));
    .tab-item {
      flex: 1;
      text-align: center;
      a {
        display: block;
        text-decoration-line:: none;
        font-size: 14px;
        color: rgba(77, 85, 93, 100);
        &.active {
          color: rgb(240, 20, 20);
        }
      }
    }
  }
}
</style>
