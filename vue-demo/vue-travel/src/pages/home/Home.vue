<template>
    <div id="home">
        <Header></Header>
        <carrousel></carrousel>
        <!-- <router-link to="/list">列表页</router-link> -->
    </div>

</template>
<script>
    import Header from './components/Header'
    import carrousel from './components/Swiper'
    export default {
        name: 'Home',
        components: {
            Header,
            carrousel
        }
    }
</script>
<style type="text/css">

</style>