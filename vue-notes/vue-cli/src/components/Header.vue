<template>
  <div class="app-header">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: 'vue components'
    }
  }
}
</script>
<style type="text/css" scoped>
  .app-header {
    background: lightgreen;
    height: 40px;
    line-height: 40px;
    text-align: center;

  }
  h1 {
    font-size: 20px;
    color: #222;
  }
</style>

