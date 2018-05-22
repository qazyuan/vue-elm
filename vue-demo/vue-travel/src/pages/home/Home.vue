<template>
    <div id="home">
        <HomeHeader :city="city"></HomeHeader>
        <HomeSwiper :swiperList = 'swiperList'></HomeSwiper>
        <HomeIcons :iconList = 'iconList'></HomeIcons>
        <Gap></Gap>
        <HomeRecomend :recommendList="recommendList"></HomeRecomend>
        <Weekend :weekendList="weekendList"></Weekend>
    </div>

</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import Gap from '../common/Gap'
import HomeRecomend from './components/Recommend'
import Weekend from './components/Weekend'
import axios from 'axios'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        Gap,
        HomeRecomend,
        Weekend
    },
    data () {
        return {
            iconList: [],
            recommendList: [],
            weekendList: [],
            swiperList: [],
            city: ''
        }
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json')
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            if (res.data.data) {
                var data = res.data.data;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekendList = data.weekendList;
                this.swiperList = data.swiperList;
                this.city = data.city;
            };
        }
    },
    mounted () {
        this.getHomeInfo()
    }
}
</script>
<style type="text/css">

</style>