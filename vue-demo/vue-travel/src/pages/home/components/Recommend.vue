<template>
    <div v-if="recommendList.length > 0">
        <div class="title">
            <span>猜你喜欢</span>
        </div>
        <div class="list-wrapper" v-for="(item, index) in recommendList">
            <div class="img-wrapper">
                <img :src="item.imgUrl">
                <span :style="{background: bgColor[item.type]}">{{typeText[item.type]}}</span>
            </div>
            <div class="text-wrapper">
                <div class="name">{{item.title}}</div>
                <div class="score">
                    <Star v-if="item.star && item.star > 0" :score="item.star">{{item.star}}</Star>
                    <span v-if="item.comment && item.comment > 0" class="comment">{{item.comment}}条评论</span>
                </div>
                <div class="price">
                    <span class="price-font">￥<em>{{item.price}}</em></span>起
                    <span class="address">{{item.address}}</span>
                </div>
                <span class="feature">{{item.desc}}</span>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import Star from '../../common/Star'
export default {
    name: 'Recommend',
    props: {
        recommendList: {
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
}
.list-wrapper {
    padding: 0.2rem;
    display: flex;
    font-size: 0.12rem;
    .img-wrapper {
        position: relative;
        img {
            display: block;
            width: 2rem;
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
            margin-top: 0.26rem;
            font-size: 0.32rem;
            color: #212121;
            line-height: 0.44rem;
        }
        .score {
            margin-top: 0.14rem;
            display: flex;
        }
        .comment {
            padding-left: 0.3rem;
        }
        .price {
            position: relative;
            margin-top: 0.22rem;
        }
        .price-font {
            color: #ff8300;
            em {
                font-style: none;
                font-size: 0.4rem;
            }
        }
        .address {
            position: absolute;
            right: 0;
            line-height: 0.62rem;
        }
        .feature{
            display: inline-block;
            margin-top: 0.48rem;
            background: #fff9f9;
            color: #f55;
        }

    }


}
</style>