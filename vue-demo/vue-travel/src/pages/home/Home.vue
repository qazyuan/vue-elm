<template>
    <div id="home">
        <HomeHeader></HomeHeader>
        <HomeSwiper></HomeSwiper>
        <HomeIcons></HomeIcons>
        <Gap></Gap>
        <HomeRecomend></HomeRecomend>
        <Weekend></Weekend>
        <!-- <router-link to="/list">列表页</router-link> -->
    </div>

</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import Gap from '../common/Gap'
import HomeRecomend from './components/Recommend'
import Weekend from './components/Weekend'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        Gap,
        HomeRecomend,
        Weekend
    }
}
</script>
<style type="text/css">

</style>