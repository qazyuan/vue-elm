<template>
    <div id="home">
        <Header></Header>
        <div>home</div>
        <router-link to="/list">列表页</router-link>
    </div>

</template>
<script>
    import Header from './components/Header'
    export default {
        name: 'Home',
        components: {
            Header
        }
    }
</script>
<style type="text/css">

</style>