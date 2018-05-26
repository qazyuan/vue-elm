<template>
    <div class="ratings-wrapper">
        <div class="ratings-content" ref="ratingsContent">
            <div class="overview">
                <div class="overview-left">
                    <p class="point">{{seller.score}}</p>
                    <p>综合评分</p>
                    <p class="rank-rate">高于周边商家{{seller.rankRate}}%</p>
                </div>
                <div class="overview-right">
                    <div class="category">
                        <span class="category-title">服务态度</span>
                        <star :size="24" :score="seller.serviceScore"></star>
                        <span class="score">{{seller.serviceScore}}</span>
                    </div>
                    <div class="category">
                        <span class="category-title">商品评分</span>
                        <star :size="24" :score="seller.foodScore"></star>
                        <span class="score">{{seller.foodScore}}</span>
                    </div>
                    <div class="category">
                        <span class="category-title">送达时间</span>
                        <span class="delivery-time">{{seller.deliveryTime}}分钟</span>
                    </div>
                </div>
            </div>
            <split></split>
            <div class="ratingselect-wrapper">
                <ratingselect @toggle="toggleContent" @changeType="changeType" :ratings="this.allratings" :selectType="this.selectType" :onlyContent="this.onlyContent" :desc="this.desc"></ratingselect>
            </div>
            <div class="ratingsList">
                <div class="rating-item" v-show="needShow(ratingItem.rateType, ratingItem.text)" v-for="ratingItem in allratings">
                    <img class="avatar" :src="ratingItem.avatar">
                    <div class="item-info-wrapper">
                        <div class="item-info">
                            <div class="item-info-left">
                                <span>{{ratingItem.username}}</span>
                                <div class="item-star">
                                    <star :size="24" :score="ratingItem.score"></star>
                                    <span class="item-time" v-show="ratingItem.deliveryTime">{{ratingItem.deliveryTime}}分钟送达</span>
                                </div>
                            </div>
                            <div class="item-time">{{ratingItem.rateTime | formatDate}}</div>
                        </div>
                        <div class="item-content">{{ratingItem.text}}</div>
                        <div class="item-recommend" v-show="ratingItem.recommend && ratingItem.recommend.length">
                            <img v-show="ratingItem.rateType == 0" src="./good.png">
                            <img v-show="ratingItem.rateType == 1" src="./bad.png">
                            <div>
                                <span v-for="item in ratingItem.recommend">{{item}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import BScroll from "better-scroll";
    import star from "components/star/star";
    import split from "components/split/split";
    import ratingselect from "components/ratingselect/ratingselect";
    import {formatDate} from '../../common/js/data';

    const ALL = 2;
    export default　{
        props: {
            seller: {
                type: Object
            }
        },
        data() {
            return {
                showFlag: false,
                selectType: ALL,
                onlyContent: true,
                desc: {
                    all: '全部',
                    positive: '满意',
                    negative: '不满意'
                },
                allratings: []
            }
        },
        filters:{
            formatDate(time) {
                let date = new Date(time);
                return formatDate(date, 'yyyy-MM-dd hh:mm');
            }
        },
        created() {
            this.$http.get('/api/ratings').then((response) => {
                response = response.body;
                if (response.code === '0000') {
                    this.allratings = response.data;
                    this.$nextTick(() => {
                        this.scroll = new BScroll(this.$refs.ratingsContent, {click: true});
                    });
                }
            })
        },
        methods: {
            changeType(type) {
                this.selectType = type;
            },
            toggleContent() {
                this.onlyContent = !this.onlyContent;
            },
            needShow(type, text) {
                if (this.onlyContent && !text) {
                  return false;
                }
                if (this.selectType === ALL) {
                  return true;
                } else {
                  return type === this.selectType;
                }
            }
        },
        components: {
            star,
            split,
            ratingselect
        }
    }
</script>
<style type="text/css">
    @import '../../common/sass/index';
    .ratings-wrapper {
        position: absolute;
        left: 0;
        right: 0;
        top: 177px;
        .ratings-content {
            .overview {
                padding: 18px;
                display: flex;
                .overview-left {
                    width: 132px;
                    text-align: center;
                    font-size: 12px;
                    color: rgb(7, 17, 27);
                    border-right: 1px solid rgba(7, 17, 27, 0.1);
                    padding-right: 18px;
                    p {
                        padding-bottom: 8px;
                    }
                    .point {
                        font-size: 24px;
                        color: rgb(255, 153, 0);
                        padding-bottom: 6px;
                    }
                    .rank-rate {
                        color: rgba(7, 17, 27, 0.1);
                    }
                }
                .overview-right {
                    padding-left: 18px;
                    .category {
                        display: flex;
                        align-items: center;
                        padding-bottom: 8px;
                        .category-title {
                            line-height: 18px;
                            padding-right: 12px;
                            color: rgb(7, 17, 27);
                            font-size: 12px;
                        }
                        .delivery-time {
                            font-size: 12px;
                            color: rgb(147, 153, 159);
                        }
                        .score {
                            padding-left: 12px;
                            font-size: 12px;
                            color: rgb(255, 153, 0);
                        }
                    }

                }
            }
            .ratingselect-wrapper {
                margin-top: 18px;
            }
            .ratingsList {
                padding: 18px;
                .rating-item {
                    padding: 18px 0 18px 0;
                    @include borderpx(rgba(7, 17, 27, 0.1));
                    color: rgb(7, 17, 27);
                    font-size: 10px;
                    display: flex;
                    .avatar {
                        width: 28px;
                        height: 28px;
                        border-radius: 14px;
                    }
                    .item-info-wrapper {
                        width: 100%;
                        margin-left: 12px;
                        font-size: 10px;
                        color: rgb(7, 17, 27);
                        .item-info {
                            display: flex;
                            align-items: center;
                            .item-info-left {
                                flex: 1;
                            }
                            .item-star {
                                display: flex;
                                margin-top: 4px;
                            }
                            .item-time {
                                color: rgb(147, 153, 159);
                                font-weight: 200;
                                padding-left: 6px;
                            }
                        }
                        .item-content {
                            font-size: 12px;
                            line-height: 18px;
                            margin-top: 6px;
                        }
                        .item-recommend {
                            margin-top: 8px;
                            img {
                                float: left;
                                width: 12px;
                                height: 12px;
                                padding: 10px 0;
                            }
                            div {
                                margin-left: 16px;
                                width: 100%;
                                span {
                                    display: block;
                                    float: left;
                                    width: 60px;
                                    border: 1px solid rgba(7, 17, 27, 0.1);
                                    margin: 0 0 8px 8px;
                                    text-align: center;
                                    line-height: 32px;
                                    font-size: 10px;
                                    color: rgb(147, 153, 159);
                                    padding: 0 6px;
                                    overflow:hidden;
                                    text-overflow:ellipsis;
                                    white-space:nowrap;
                                }
                            }

                        }
                    }

                }
            }

        }
    }
</style>