<template>
    <div class="ratingselect">
        <div class="selecttype">
            <div class="positive" @click="changeType(2, $event)" :class="{active:selectType == 2}">
                <span>{{desc.all}}</span><span class="count">{{ratings.length}}</span>
            </div>
            <div class="positive" @click="changeType(0, $event)" :class="{active:selectType == 0}">
                <span>{{desc.positive}}</span><span class="count">{{positive.length}}</span>
            </div>
            <div class="negative" @click="changeType(1, $event)" :class="{active:selectType == 1}">
                <span>{{desc.negative}}</span><span class="count">{{negative.length}}</span>
            </div>
        </div>
        <div class="onlyContent" @click="toggleContent">
            <img v-show="!onlyContent" src="./check.png">
            <img v-show="onlyContent" src="./checked.png">
            <span>只看有内容的评价</span>
        </div>
    </div>
</template>
<script type="text/javascript">
    const ALL = 2;
    const POSITIVE = 0;
    const NEGATIVE = 1;
    export default {
        props: {
            ratings: {
                type: Array,
                default() {
                    return [];
                }
            },
            selectType: {
                type: Number,
                default: ALL
            },
            onlyContent: {
                type: Boolean,
                default: false
            },
            desc: {
                type: Object,
                default() {
                    return {
                        all: '全部',
                        positive: '满意',
                        negative: '不满意'
                    }
                }
            }
        },
        data() {
            return {
                type: this.selectType
            }

        },
        computed: {
            positive() {
                return this.ratings.filter((item) => {
                    return item.rateType == POSITIVE;
                })
            },
            negative() {
                return this.ratings.filter((item) => {
                    return item.rateType == NEGATIVE;
                })
            }

        },
        methods: {
            changeType(type, event) {
                if(!event._constructed) {
                   return;
                }
                this.$emit('changeType', type); //通过changeType将数据传到父组件中
            },
            toggleContent(event) {
                if(!event._constructed) {
                   return;
                }
                this.$emit('toggle', this.onlyContent);
            }
        }

    }
</script>
<style type="text/css">
    @import "../../common/sass/index";
    .ratingselect {
        .selecttype {
            padding-bottom: 18px;
            display: flex;
            align-items: center;
            margin: 0 18px;
            div {
                height: 28px;
                width: 60px;
                line-height: 28px;
                text-align: center;
                font-size: 12px;
                color: #fff;
                margin-right: 8px;
                border-radius: 1px;
                color: rgb(77, 85, 93);
                .count {
                    font-size: 8px;
                    margin-left: 2px;
                }
                &.negative {
                    background: rgba(77, 85, 93, 0.2);
                    &.active {
                        color: #fff;
                        background: rgb(77, 85, 93);
                    }
                }
                &.positive {
                    background: rgba(0, 160, 220, 0.2);
                    &.active {
                        color: #fff;
                        background: rgb(0, 160, 220);
                    }
                }
            }
            @include borderpx(rgba(7, 17, 27, 0.1));

        }
        .onlyContent {
            display: flex;
            align-items: center;
            padding: 12px 0 12px 18px;
            border-bottom: 2px solid rgba(7, 17, 27, 0.1);
            img {
                width: 18px;
                height: 18px;
                padding-right: 4px;
            }
            span {
                font-size: 12px;
                color:rgb(147, 153, 159);
            }
        }
    }

</style>

