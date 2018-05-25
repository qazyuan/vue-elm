<template>
    <div>
        <div class="search-wrapper">
            <div class="input-wrapper">
                <span class="iconfont icon-sousuo"></span>
                <input v-model="searchVal" class="input-text" type="text" name="text" placeholder="输入城市或景点">
            </div>
        </div>
        <div class="search-result" v-show="searchVal" ref="resultList">
            <div class="results">
                <div class="result-wrapper">
                    <div class="item" v-for="item in results">{{item}}</div>
                </div>
            </div>
        </div>
    </div>

</template>
<script type="text/javascript">
import BScroll from 'better-scroll'
export default {
    name: 'Search',
    props: {
        cities: {
            type: Object
        }
    },
    data () {
        return {
            searchVal: '',
            results: [],
            timer: null

        };
    },
    watch: {
        searchVal () {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            if (!this.searchVal) {
                this.results = [];
                return;
            }
            this.timer = setTimeout(() => {
                this.results = [];
                for (var item in this.cities) {
                    var list = this.cities[item];
                    for (var i = 0; i < list.length; i++) {
                        var tempItem = list[i];
                        if (tempItem.spell.indexOf(this.searchVal) > -1 || tempItem.name.indexOf(this.searchVal) > -1) {
                            this.results.push(tempItem.name);
                        }
                    }
                }
            }, 20);

        }
    },
    mounted () {
        // this.scroll = new BScroll(this.$refs.resultList);
    }
}

</script>
<style type="text/css" scoped>
    @import '../../../assets/styles/iconfont.css';
    .search-wrapper {
        height: 0.8rem;
        background: #00bcd4;
        font-size: 0.24rem;
        text-align: center;
    }
    .input-wrapper {
        width: 80%;
        display: flex;
        margin: 0 auto;
        height: 0.6rem;
        line-height: 0.6rem;
        background: #fff;
        border-radius: 0.06rem;
        padding-left: 0.2rem;
        color: #555;
        input {
            padding-left: 0.1rem;
        }
    }
    .search-result {
        position: absolute;
        top: 1.65rem;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        z-index: 12;
        background: #eee;
        .results {
            position: relative;
            height: 100%;
            overflow: scroll;
        }
        .item {
            float: left;
            height: 0.5rem;
            width: 2rem;
            margin: 0.1rem 0.2rem;
            line-height: 0.5rem;
            border-radius: 0.06rem;
            text-align: center;
            background: #fff;
            border: 1px solid #eee;
            /*overflow: hidden;*/
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
     .result-wrapper {
        width: 100%;
    }
</style>