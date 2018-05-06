<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img width='64' height="64" :src="seller.avatar">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>

                <div class="des">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div class="supports" v-if="seller.supports">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div v-if="seller.supports" class="supports-count" @click="showDetail">
                <span class="count">{{seller.supports.length}}个</span>
                <!-- <span class="icon-keyboard_arrow_right"></span> -->
            </div>
        </div>
        <div class="bulletin-wrapper" @click="showDetail">
            <span class="bulletin-title"></span>
            <span class="bulletin-text">{{seller.bulletin}}</span>
            <span class="icon-keyboard_arrow_right"></span>
        </div>
        <div class="background">
            <img width="100%" height="100%" :src="seller.avatar">
        </div>
        <transition name="fade">
            <div v-show="detailShow" class="detail">
            <div class="detail-wrapper clearfix">
                <div class="detail-main">
                    <h1 class="name">{{seller.name}}</h1>
                    <div class="star-wrapper">
                        <star :size="48" :score="seller.score"></star>
                    </div>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">优惠信息</div>
                        <div class="line"></div>
                    </div>
                    <ul v-if="seller.supports" class="supports">
                        <li class="supports-item" v-for="item in seller.supports">
                            <span class="icon" :class="classMap[item.type]"></span>
                            <span class="text"> {{item.description}} </span>
                        </li>
                    </ul>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">商家公告</div>
                        <div class="line"></div>
                    </div>
                    <div class="bulletin">
                        <p class="content">{{seller.bulletin}}</p>
                    </div>
                </div>
            </div>
            <div class="detail-close" @click ="hideDetail">
                <span>X</span>
            </div>
        </div>
        </transition>

    </div>
</template>

<script type="text/javascript">
import star from 'components/star/star'

export default {
props: {
    seller: {
        type: Object
    }
},
created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
},
data () {
    return {
        detailShow: false
    }
},
methods: {
    showDetail() {
        this.detailShow = true;
    },
    hideDetail() {
        this.detailShow = false;
    }
},
components: {
    star
}
}
</script>

<style type="text/css">
    @import "../../common/sass/index.scss";
    .header {
        color: #fff;
        background-color: rgba(7,17,27,0.5);
        position: relative;
        overflow: hidden;
        .content-wrapper {
            display: flex;
            position: relative;
            .avatar {
                padding: 24px 16px 18px 24px;
                vertical-align: top;
                img {
                    border-radius: 2px;
                }
            }
            .content {
                margin-top: 26px;
                .title {
                    .brand {
                        display: inline-block;
                        width: 30px;
                        height: 18px;
                        @include bg-img('./brand');
                        background-size: 30px 18px;
                        background-repeat: no-repeat;
                        vertical-align: top;
                    }
                    .name {
                        font-size: 16px;
                        color: rgb(255, 255, 255);
                        font-weight: bold;
                        line-height: 18px;
                    }

                }
                .des {
                    margin-top: 8px;
                    margin-bottom: 10px;
                    line-height: 12px;
                    font-size: 12px;
                }

                .supports {
                    .icon {
                        margin-right: 4px;
                        vertical-align: middle;
                        @include icon(12px, 3);
                    }
                    .text {
                        line-height: 12px;
                        font-size: 10px;

                    }
                }
            }
            .supports-count {
                position: absolute;
                right: 12px;
                bottom: 14px;
                padding: 0 8px;
                height: 24px;
                width: 24px;
                border-radius: 14px;
                background-color: rgba(0, 0, 0, 0.2);
                .count {
                    font-size: 10px;
                    line-height: 24px;
                }

            }

        }
        .bulletin-wrapper {
            height: 28px;
            line-height: 28px;
            padding: 0 22px 0 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            background: rgba(7, 17, 27, 0.2);
            .bulletin-title {
                display: inline-block;
                width: 22px;
                height: 12px;
                /*width:;*/
                @include bg-img('./bulletin');
                background-size: 22px 12px;
                background-repeat: no-repeat;
                vertical-align: middle;
                /*margin: 0, 4px;*/
            }
            .bulletin-text {
                font-size: 10px;
                font-weight: 200;
            }
        }
        .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            filter: blur(10px);
        }

        .detail {
            position: fixed;
            z-index: 100;
            width: 100%;
            height: 100%;
            overflow: auto;
            /*filter: blur(10px);*/
            top: 0;
            left: 0;
            opacity: 1;
            background-color: rgba(7, 17, 27, 0.8);
            &.fade-enter-active, &.fade-leave-active {
                transition: all 0.5s;
            }
            &.fade-enter, &.fade-leave-active {
                opacity: 0;
                background: rgba(7, 17, 27, 0);
            }
            .detail-wrapper {
                min-height: 100%;
                width: 100%;
                .detail-main {
                    height: 80%;
                    margin-top: 64px;
                    padding-bottom: 64px;
                    .name {
                        line-height: 16px;
                        text-align: center;
                        font-size: 16px;
                    }
                    .star-wrapper {
                        margin-top: 18px;
                        padding: 2px 0;
                        text-align: center;
                    }
                    .title {
                        display: flex;
                        width: 80%;
                        margin: 28px auto 24px auto;
                        .line {
                            flex: 1;
                            position: relative;
                            top: -6px;
                            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                        }
                        .text {
                            padding: 0 12px 0 12px;
                            font-weight: 700;
                            font-size: 14px;
                        }
                    }
                    .supports {
                        width: 80%;
                        margin: 0 auto;
                        .supports-item {
                            padding: 0 12px;
                            margin-bottom: 12px;
                            font-size: 0;
                            &:last-child {
                                margin-bottom: 0;
                            };
                            .icon {
                                margin-right: 4px;
                                vertical-align: bottom;
                                @include icon(16px, 2);
                            }
                            .text {
                                /*display: inline-block;*/
                                line-height: 14px;
                                font-size: 14px;

                            }

                        }

                    }
                    .bulletin {
                        width: 80%;
                        margin: 0 auto;
                        .content {
                            padding: 0 12px;
                            line-height: 24px;
                            font-size: 12px;
                        }
                    }
                }
            }
            .detail-close {
                position: relative;
                width: 32px;
                height: 32px;
                margin: -64px auto 0 auto;
                clear: both;
                font-size: 32px;
            }
        }


    }
</style>
