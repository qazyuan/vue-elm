<template>
    <transition name="move">
        <div class="food-wrapper" v-show="showFlag"  ref="foodDom">
            <div class="scroll">
                <div class="img-wrapper">
                    <img :src="food.image">
                    <div class="back" @click='hide()'>
                        <!-- <img src="./back.png"> -->
                    </div>
                </div>
                <div class="content">
                    <h1 class="name">{{food.name}}</h1>
                    <div class="desc">
                        <span>月售{{food.sellCount}}份</span>
                        <span>好评率{{food.rating}}%</span>
                    </div>
                    <div class="price">
                        <span class="now-price"><i>￥</i>{{food.price}}</span>
                        <span class="origin-price" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                    </div>
                    <transition name="fade">
                        <div @click.stop.prevent="addCart" class="cartshop" v-show="!food.count || food.count == 0"><p>加入购物车</p></div>
                    </transition>
                    <div class="cartcontrol-wrapper">
                        <cartcontrol :food="food"></cartcontrol>
                    </div>
                </div>
                <split v-show="food.info"></split>
                <div class="info" v-show="food.info">
                    <h1>商品介绍</h1>
                    <p>{{food.info}}</p>
                </div>

                <split></split>
                <div class="rating">
                    <h1>商品评价</h1>
                    <ratingselect @changeType="selectRating" @toggle="toggleContent" :selectType="selectType" :onlyContent="onlyContent" :desc="desc" :ratings="food.ratings"></ratingselect>
                    <div class="ratingList">
                        <div class="rating-item" v-show="needShow(ratingItem.rateType, ratingItem.text)" v-for="ratingItem in food.ratings">
                            <div class="rating-info">
                                <div class="rating-time">{{ratingItem.rateTime | formatDate}}</div>
                                <div class="rating-user">
                                    <span>{{ratingItem.username}}</span>
                                    <img :src="ratingItem.avatar">
                                </div>
                            </div>
                            <div class="rating-content">
                                <img v-show="ratingItem.rateType==0" src="./good.png">
                                <img v-show="ratingItem.rateType==1" src="./bad.png">
                                <span>{{ratingItem.text}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script type="text/javascript">
    import cartcontrol from 'components/cartcontrol/cartcontrol';
    import split from 'components/split/split';
    import ratingselect from 'components/ratingselect/ratingselect';
    import Vue from 'vue';
    import {formatDate} from '../../common/js/data';
    import BScroll from 'better-scroll';

    const ALL = 2;
    export default {
        props: {
            food: {
                type: Object
            }
        },
        data() {
            return {
               showFlag: false,
               selectType: 0,
               onlyContent: false,
               desc: {
                all: '全部',
                positive: '推荐',
                negative: '吐槽'
               }

            }
        },
        filters: {
            formatDate(time) {
            let date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
            }
        },
        methods: {
            show() {
                this.showFlag = true;
                this.$nextTick(() => {
                    if (!this.scroll) {
                        this.scroll = new BScroll(this.$refs.foodDom, {
                      click: true
                    });
                    } else {
                        this.scroll.refresh();
                    }
                });

            },
            hide() {
                this.showFlag = false;
            },
            addCart() {
                Vue.set(this.food, 'count', 1);
            },
            toggleContent() { //父组件接收子组件的数据并更新父组件参数的数值
                this.onlyContent = !this.onlyContent;
                this.$nextTick(() => {
                  this.scroll.refresh();
                });
            },
            selectRating(type) { //父组件接收子组件的数据并更新父组件参数的数值
                this.selectType = type;
                this.$nextTick(() => {
                  this.scroll.refresh();
                });
            },
            needShow (type, text) {
                if (this.onlyContent && !text) {
                    return false;
                }
                if (this.selectType == ALL) {
                    return true;
                } else {
                    return this.selectType == type;
                }
            }
        },
        components: {
            cartcontrol,
            split,
            ratingselect
        }

    }
</script>
<style type="text/css">
    @import '../../common/sass/index';
    .food-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 48px;
        width: 100%;
        background: #fff;
        transform: translate3d(0, 0, 0);
        &.move-enter-active, &.move-leave-active {
            transition: all 0.2s linear;
        }

        &.move-enter, &.move-leave-active {
            transform: translate3d(100%, 0, 0);
        }
        .scroll {
            .img-wrapper {
                position: relative;
                width: 100%;
                height: 0;
                padding-top: 100%;
                img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                .back {
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    left: 10px;
                    top: 15px;
                    background: url(./back.png) no-repeat;
                    background-size: 20px;
                }
            }
            .content {
                position: relative;
                padding: 18px;
                .name {
                    font-size: 14px;
                    font-weight: 700;
                    color: rgb(7, 17, 27);
                }
                .desc {
                    font-size: 10px;
                    color: rgb(147, 153, 159);
                    margin: 8px 0 18px 0;
                    span {
                        margin-right: 12px;
                    }
                }
                .price {
                    font-size: 14px;
                    color: rgb(240, 20, 20);
                    font-weight: 700;
                    line-height: 24px;
                    i {
                        font-size: 10px;
                        font-weight: normal;
                        font-style: normal;
                    }
                    .origin-price {
                        color: rgb(147, 153, 159);
                        font-size: 10px;
                        text-decoration: line-through;
                        padding-left: 8px;
                    }
                }
                .cartshop, .cartcontrol-wrapper {
                    position: absolute;
                    right: 18px;
                    bottom: 18px;
                }
                .cartshop {
                    width: 74px;
                    height: 24px;
                    background: rgb(0, 160, 220);
                    border-radius: 12px;
                    z-index: 2;
                    opacity: 1;
                    &.fade-enter-active, &.fade-leave-active {
                      transition: all 0.2s;
                    }
                    &.fade-enter, &.fade-leave-active {
                        opacity: 0;
                        z-index: -1;
                    }
                    p {
                        font-size: 10px;
                        color: #fff;
                        line-height: 24px;
                        text-align: center;
                    }
                }
            }

            .info {
                padding: 18px;
                h1 {
                    padding-bottom: 6px;
                    font-size: 14px;
                    color: rgb(7, 17, 27);
                }
                p {
                    font-size: 12px;
                    font-weight: 200;
                    color: rgb(77, 85, 93);
                    line-height: 24px;
                }
            }
            .rating {
                h1 {
                    padding: 18px;
                    font-size: 14px;
                    color: rgb(7, 17, 27);
                }
                .rating-item {
                    padding: 18px;
                    margin: 0 18px;
                    @include borderpx(rgba(7, 17, 27, 0.1));
                    .rating-info {
                        display: flex;
                        align-items: center;
                        font-size: 10px;
                        color: rgb(147, 153, 159);
                        .rating-time {
                            flex: 1;
                        }
                        .rating-user {
                            display: flex;
                            align-items: center;
                            img {
                                width: 12px;
                                height: 12px;
                                padding-left: 6px;
                            }
                        }
                    }
                    .rating-content {
                        display: flex;
                        align-items: center;
                        margin-top: 6px;
                        font-size: 12px;
                        color: rgb(7, 17, 27);

                        img {
                            width: 12px;
                            height: 12px;
                            padding-right: 4px;
                        }

                    }

                }
            }
        }
    }
</style>