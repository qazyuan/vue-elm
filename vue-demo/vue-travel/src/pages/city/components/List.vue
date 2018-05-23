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
                <div class="hotcity" v-for="(item, key) in cities" :key="key" :ref="key">
                    <p class="header">{{key}}</p>
                    <div class="city-wrapper">
                        <div class="item" v-for="city in cities[key]">{{city.name}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<script type="text/javascript">
import BScroll from 'better-scroll'
export default {
    name: 'List',
    props: {
        hotCities: {
            type: Array
        },
        cities: {
            type: Object
        },
        letter: {
            type: String
        }
    },
    mounted () {
        this.initBScroll();
    },
    watch: {
        letter () {
            let el = this.$refs[this.letter][0];
            this.scroll.scrollToElement(el, 500);
        }
    },
    methods: {
        initBScroll () {
            let wrapper = this.$refs.listWrapper;
            this.scroll = new BScroll(wrapper);
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