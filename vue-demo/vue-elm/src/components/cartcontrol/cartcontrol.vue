<template>
    <div class="cartcontrol">
        <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decrease($event)" transition="move">
            <img src="./decrease.png" class="inner">
        </div>
        <div class="cart-count" v-show="food.count>0">
            {{food.count}}
        </div>
        <div class="cart-add" @click.stop.prevent="addCart($event)">
            <img src="./add.png">
        </div>
    </div>
</template>

<script type="text/javascript">
    import Vue from 'vue';
    export default {
        props: {
            food: {
                type: Object
            }

        },
        // created() {
        //     // console.log(this.food);
        // },
        methods: {
            addCart(event) {
                if(!event._constructed) {
                    return;
                } //防止重复点击
                // console.log('click')
                if(!this.food.count) {
                    Vue.set(this.food, 'count', 1);
                } else {
                    this.food.count++;
                }
            },
            decrease(event) {
                if(!event._constructed) {
                    return;
                } //防止重复点击
                // console.log('click')
                if(this.food.count) {
                    this.food.count--;
                }
            }
        }
    }
</script>

<style type="text/css">
    .cartcontrol {
        /*position: absolute;*/
        display: flex;
        img {
            display: block;
            width: 24px;
            height: 24px;
        }
        /*.cart-decrease {
            transition: all 0.4s linear;

            &.move-transition {
                opacity: 1;
                transform: translate3d(0, 0, 0);
                .inner {
                    transition: all 0.4s linear;
                    transform: rotate(0);
                }
            }
            &.move-enter, &.move-leave {
                opacity: 0;
                transform: translate3d(24px, 0, 0);
                .inner {
                    transform: rotate(180deg);
                }
            }
        }*/
        .cart-count {
            line-height: 24px;
            width: 24px;
            text-align: center;
        }
    }
</style>