<template>
  <div id="home">
    <app-header></app-header>
    <Users @changeT = "changeTi" v-bind:title = "title" v-bind:UsersInfo = "list"></Users>
    <app-bottom></app-bottom>
    <h1>{{name}}</h1>
  </div>
</template>

<script>
import Users  from './Users'
import Header  from './Header'
import Bottom  from './Bottom'

export default {
  name: 'home',
  data() {
    return {
      title: 'this is the first component',
      name: 'ttt',
      list: [
        {"name": 'yyan', "position": 'web', "show": false},
        {"name": 'bbyy', "position": 'web', "show": false},
        {"name": 'ccyy', "position": 'web', "show": false},
        {"name": 'ddyy', "position": 'web', "show": false},
        {"name": 'eeyy', "position": 'web', "show": false},
        {"name": 'ffyy', "position": 'web', "show": false},
        {"name": 'ggyy', "position": 'web', "show": false},
        {"name": 'hhyy', "position": 'web', "show": false},
        {"name": 'jjyy', "position": 'web', "show": false},
        ]
    }
  },
  components: {
    "app-header": Header,
    "app-bottom": Bottom,
    'Users': Users
  },
  methods: {
    changeTi: function(title) {
      // console.log(title);
      this.name = title;
    }
  }
}
</script>
<style type="text/css">
  h1 {
    color: red;
  }
</style>

