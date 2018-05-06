<template>
    <div>
        <div class="goods">
            <div class="menu-wrapper" ref="menuWrapper">
                <ul>
                    <li v-for="(item, index) in goods" class="menu-item borderpx" :class="{'current': currentIndex == index}" @click="selectMenu(index, $event)">
                        <span class="text">
                            <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>
                            {{item.name}}
                        </span>
                    </li>
                </ul>
            </div>
            <div class="goods-wrapper" ref="foodsWrapper">
                <ul>
                    <li v-for= "item in goods" class="food-list" ref="foodList">
                        <h1 class="title">{{item.name}}</h1>
                        <div v-for="food in item.foods" class="goods-list" @click="checkFood(food, $event)">
                            <img class="food-pic" :src="food.image">
                            <div class="food-info">
                                <p class="food-title">{{food.name}}</p>
                                <p class="food-des" v-if="food.description">{{food.description}}</p>
                                <div class="sell-info">
                                    <span class="sell-count">月售{{food.sellCount}}份</span>
                                    <span>好评率{{food.rating}}%</span>
                                </div>
                                <div class="price">
                                    <span class="now-price"><i>￥</i>{{food.price}}</span>
                                    <span class="origin-price" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                                </div>
                                <div class="cartcontrol-wrapper">
                                    <cartcontrol :food="food"></cartcontrol>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <shopcart :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
        </div>
        <food ref="foodDom"  :food="selectedFood"></food>
    </div>
</template>

<script type="text/javascript">
import BScroll from "better-scroll";
import shopcart from 'components/shopcart/shopcart';
import cartcontrol from 'components/cartcontrol/cartcontrol';
import food from 'components/food/food';
export default {
    props: {
        seller: {
            type: Object
        }
    },
    data() {
        return {
            goods: [],
            listHeight: [],
            scrollY: 0,
            selectedFood: {}
        }
    },
    created() {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
        this.$http.get('/api/goods').then((response) => {
            response = response.body;
            if (response.code == '0000') {
                this.goods = response.data;
                this.$nextTick(() => {
                    this._initScroll();
                    this._calculateHeight();
                })
            }
        });
    },
    computed: {
        currentIndex() {
            for(let i = 0; i < this.listHeight.length; i++) {
                let height1 = this.listHeight[i];
                let height2 = this.listHeight[i + 1];
                if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
                    return i;
                }
            }
            return 0;
        },
        selectFoods() {
            let foods = [];
            this.goods.forEach((good) => {
              good.foods.forEach((food) => {
                if (food.count) {
                  foods.push(food);
                }
              });
            });
            return foods;
          }
    },
    methods: {
        _initScroll () {
            this.menuScroll = new BScroll(this.$refs.menuWrapper, {click: true});
            this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
                probeType: 3,
                click: true
            });
            this.foodsScroll.on('scroll', (pos) => {
                this.scrollY = Math.abs(Math.round(pos.y));
            });
        },
        _calculateHeight () {
            let foodList = this.$refs.foodList;
            let height = 0;
            this.listHeight.push(height);
            for (let i = 0; i < foodList.length; i++) {
                let item = foodList[i];
                height += item.clientHeight;
                this.listHeight.push(height);
            }
        },
        selectMenu (index, event) {
            if(!event._constructed) {
                return;
            } //防止重复点击

            let foodList = this.$refs.foodList;
            let el = foodList[index];
            this.foodsScroll.scrollToElement(el, 300);
        },
        checkFood (food, event) {
            if(!event._constructed) {
                return;
            } //防止重复点击
            this.selectedFood = food;
            this.$refs.foodDom.show();
        }
    },
    components: {
        shopcart,
        cartcontrol,
        food
    }
}
</script>

<style type="text/css">
    @import "../../common/sass/index.scss";
    .goods {
        position: absolute;
        display: flex;
        top: 174px;
        bottom: 46px;
        width: 100%;
        .menu-wrapper {
            overflow: hidden;
            width: 80px;
            background: #f3f5f7;
            .menu-item {
                display: table;
                width: 80px;
                height: 54px;
                line-height: 14px;
                .text {
                    display: table-cell;
                    width: 56px;
                    font-size: 12px;
                    vertical-align: middle;
                    padding: 0 12px;
                    @include borderpx(rgba(7, 17, 27, 0.1));
                }
                .icon {
                    vertical-align: top;
                    margin-right: 2px;
                    @include icon(12px, 3);
                }
                &.current {
                    position: relative;
                    margin-top: -1px;
                    background: #fff;
                    font-weight: 700;
                    .text {
                        border: none;
                    }
                }
            }
        }
        .goods-wrapper {
            overflow: hidden;
            flex: 1;
            .food-list {
                h1 {
                    background: #f3f5f7;
                    height: 26px;
                    line-height: 26px;
                    border-left: 2px solid #d9dde1;
                    color: rgb(147, 153, 159);
                    font-size: 12px;
                    padding-left: 14px;
                }
                .goods-list {
                    display: flex;
                    position: relative;
                    padding-bottom: 18px;
                    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
                    &:last-child {
                        border: none;
                    };
                    .food-pic {
                        width: 60px;
                        height: 60px;
                        padding: 18px 10px 0 18px;
                    }
                    .food-info {
                        margin-top: 22px;
                        font-size: 10px;
                        color: rgb(147, 153, 159);
                        padding-right: 18px;
                        width: 100%;
                        .food-title {
                            font-size: 14px;
                            color: rgb(7, 17, 27);
                            line-height: 14px;
                        }
                        .food-des {
                            padding-top: 8px;
                            line-height: 12px;
                        }
                        .sell-info {
                            padding-top: 8px;
                            .sell-count {
                                padding-right: 12px;
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
                        .cartcontrol-wrapper {
                            position: absolute;
                            bottom: 18px;
                            right: 18px;
                        }
                    }
                }
            }

        }

    }
</style>
