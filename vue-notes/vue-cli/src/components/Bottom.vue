<template>
  <div class="bottom">
    <h3>{{title}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
  data () {
    return {
      title: 'copyright@2018'
    }
  }
}
</script>
<style type="text/css">
  .bottom {
    background: #333;
    color: lightgreen;
    text-align: center;
  }
</style>
