<template>
    <div v-if="weekendList.length > 0">
        <div class="title">
            <span>周末去哪</span>
        </div>
        <div class="list-wrapper" v-for="(item, index) in weekendList">
            <div class="img-wrapper">
                <img :src="item.imgUrl">
                <span :style="{background: bgColor[item.type]}">{{typeText[item.type]}}</span>
            </div>
            <div class="text-wrapper">
                <div class="name">{{item.title}}</div>
                <span class="feature">{{item.desc}}</span>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import Star from '../../common/Star'
export default {
    name: 'Weekend',
    props: {
        weekendList: {
            type: Array
        }
    },
    data () {
        return {
            typeText: {
                '1': '随买随用',
                '2': '只限今日',
                '3': '可定今日'
            },
            bgColor: {
                '1': '#ff8300',
                '2': '#00afc7',
                '3': '#00afc7'
            }
        }
    },
    components: {
        Star
    }
}
</script>
<style type="text/css" scoped>
.title {
    height: 0.8rem;
    line-height: 0.8rem;
    padding-left: 0.26rem;
    background: #eee;
}
.list-wrapper {
    padding: 0.2rem;
    font-size: 0.12rem;
    .img-wrapper {
        position: relative;
        img {
            display: block;
            width: 100%;
            height: 2rem;
        }
        span {
            position: absolute;
            top: 0;
            left: 0;
            color: #fff;
            font-size: 0.12rem;
            padding: 0.05rem 0.15rem 0.05rem 0.05rem;
            border-bottom-right-radius: 0.15rem;

        }
    }
    .text-wrapper {
        flex: 1;
        padding-left: 0.22rem;
        .name {
            margin-top: 0.2rem;
            font-size: 0.28rem;
            color: #212121;
            line-height: 0.48rem;
        }
        .feature{
            display: inline-block;
            margin-top: 0.1rem;
            color: #616161;
            font-size: 0.24rem;
            line-height: 0.42rem;
        }

    }


}
</style>