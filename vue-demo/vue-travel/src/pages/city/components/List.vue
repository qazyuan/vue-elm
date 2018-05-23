<template>
    <div>
        <div class="list" ref="listWrapper">
            <div>
                <div class="hotcity">
                    <p class="header">当前城市</p>
                    <div class="city-wrapper">
                        <div class="item">北京</div>
                    </div>
                </div>
                <div class="hotcity" v-if="hotCities && hotCities.length > 0">
                    <p class="header">热门城市</p>
                    <div class="city-wrapper">
                        <div v-for="item in hotCities" class="item" :key="item.id">{{item.name}}</div>
                    </div>
                </div>
                <div class="hotcity" v-for="(item, key) in cities" :key="key" ref="cities">
                    <p class="header">{{key}}</p>
                    <div class="city-wrapper">
                        <div class="item" v-for="city in cities[key]">{{city.name}}</div>
                    </div>
                </div>
            </div>
        </div>
        <city-letter :curIndex="sIndex" @LClick="clickLetter" :cities="cities"></city-letter>
    </div>


</template>
<script type="text/javascript">
import BScroll from 'better-scroll'
import CityLetter from './Letter'
const itemHeight = 0.5;
export default {
    name: 'List',
    components: {
        CityLetter
    },
    props: {
        hotCities: {
            type: Array
        },
        cities: {
            type: Object
        }
    },
    data () {
        return {
            getHeights: [0],
            scrollY: 0,
            sIndex: 0
        };
    },
    computed: {
        // scrollIndex () {
        //     var heights = this.getHeights;
        //     for (var i = 0; i < heights.length; i++) {
        //         if (heights[i + 1] && this.scrollY >= heights[i] && this.scrollY <= heights[i+1]) {
        //             return i;
        //         }
        //     }
        //     return 0;
        // }
    },
    mounted () {
        this.initBScroll();
        // this.setHeights();
    },
    created () {
        // this.setHeights();
    },
    watch: {
        scrollY: function () {
            this.setHeights;
            this.sIndex = this.scrollIndex;
        }
    },
    methods: {
        initBScroll () {
            let wrapper = this.$refs.listWrapper;
            this.scroll = new BScroll(wrapper);
            this.scroll.on('scroll', (pos) => {
                this.scrollY = Math.abs(Math.round(pos.y));
            });
        },
        setHeights () {
            let cities = this.cities;
            for (let item in cities) {
                let len = this.getHeights.length;
                let temp = cities[item]; //单独一个城市
                let height1 = Math.floor(temp.length / 3);
                let height2 = (temp.length % 3 > 0) ? 1 : 0;
                let height3 = (height1 + height2) * 0.5 + this.getHeights[len - 1];
                this.getHeights.push(height3);
            }
        },
        clickLetter (index) {
            let cities = this.$refs.cities;
            let el = cities[index];
            this.scroll.scrollToElement(el, 300);
        },
        scrollIndex () {
            var heights = this.getHeights;
            for (var i = 0; i < heights.length; i++) {
                if (heights[i + 1] && this.scrollY >= heights[i] && this.scrollY <= heights[i+1]) {
                    return i;
                }
            }
            return 0;
        }
    }

}

</script>
<style type="text/css">
    .list {
        position: absolute;
        top: 1.65rem;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
    }
    .header {
        background: #eee;
        height: 0.4rem;
        line-height: 0.4rem;
        padding: 0.1rem 0 0.1rem 0.3rem;
        font-size: 0.24rem;
    }
    .city-wrapper {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        .item {
            height: 0.5rem;
            width: 2rem;
            margin: 0.1rem 0.2rem;
            line-height: 0.5rem;
            border-radius: 0.06rem;
            text-align: center;
            background: #fff;
            border: 1px solid #eee;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>