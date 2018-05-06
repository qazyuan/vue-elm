<template>
  <div id="app">
    <ul>
      <li><router-link to="/"> home</router-link></li>
      <li><router-link to="/hello"> hello</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>
<style type="text/css">
  h1 {
    color: red;
  }
</style>

