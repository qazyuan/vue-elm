<template>
    <div id="home">
        <HomeHeader></HomeHeader>
        <HomeSwiper></HomeSwiper>
        <HomeIcons></HomeIcons>
        <Gap></Gap>
        <HomeRecomend></HomeRecomend>
        <!-- <router-link to="/list">列表页</router-link> -->
    </div>

</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import Gap from '../common/Gap'
import HomeRecomend from './components/Recommend'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        Gap,
        HomeRecomend
    }
}
</script>
<style type="text/css">

</style>