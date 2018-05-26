<template>
	<div>
		<div class="shopcart">
			<div class="content" @click="toggleList">
				<div class="content-left">
					<div class="logo-wrapper">
						<div class="logo" :class="{'highLight': totalCount > 0}">
							<img v-show="totalCount == 0" src="./shopcart.png">
							<img v-show="totalCount > 0" src="./shopcartHigh.png">
							<!-- <span></span> -->
						</div>
						<div class="num" v-show="totalCount > 0">{{totalCount}}</div>
					</div>
					<div class="price" :class="{'highLight': totalPrice > 0}">￥{{totalPrice}}</div>
					<div class="desc">另需配送费￥{{deliveryPrice}}元</div>
				</div>
				<div class="content-right" @click.stop="pay">
					<div class="pay" :class="payClass">
						{{payDesc}}
					</div>
				</div>
			</div>
			<transition name="fold">
				<div class="shopcart-list" v-show="listShow">
					<div class="list-header">
						<h1 class="title">购物车</h1>
						<span class="empty" @click="empty">清空</span>
					</div>
					<div class="list-content" ref="listContent">
						<div class="food" v-for="food in selectFoods">
							<div class="title">{{food.name}}</div>
							<div class="price"><span>￥</span>{{food.price * food.count}}</div>
							<div class="cartcontrol-wrapper">
		                    	<cartcontrol :food="food"></cartcontrol>
							</div>
						</div>
					</div>
				</div>
			</transition>
		</div>
		<transition name="fade">
			<div class="list-mask" @click="hideList" v-show="listShow">

			</div>
		</transition>
	</div>
</template>
<script type="text/javascript">
	import BScroll from "better-scroll";
	import cartcontrol from '../cartcontrol/cartcontrol';
	export default {
		props: {
			selectFoods: {
				type: Array,
				default() {
					return [
						{
							price: 22,
							count: 2
						}
					]
				}
			},
			deliveryPrice: {
				type: Number,
				default: 0
			},
			minPrice: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				fold: true
			}
		},
		computed: {
			totalPrice() {
				let total = 0;
				this.selectFoods.forEach((food) => {
					total += food.price * food.count;
				})
				return total;
			},
			totalCount() {
				let count = 0;
				this.selectFoods.forEach((food) => {
					count += food.count;
				})
				return count;
			},
			payDesc() {
				if (this.totalPrice === 0) {
					return `￥${this.minPrice}起送`;
				} else if (this.totalPrice < this.minPrice) {
					let diff = this.minPrice - this.totalPrice;
					return `还差￥${diff}起送`;
				} else {
					return `去结算`;
				}
			},
			payClass() {
				if (this.totalPrice < this.minPrice) {
					return 'not-enough';
				} else {
					return 'enough';
				}
			},
			listShow() {
		        if (!this.totalCount) {
		          this.fold = true;
		          return false;
		        }
		        let show = !this.fold;
		        if (show) {
		          this.$nextTick(() => {
		            if (!this.scroll) {
		              this.scroll = new BScroll(this.$refs.listContent, {
		                click: true
		              });
		            } else {
		              this.scroll.refresh();
		            }
		          });
		        }
		        return show;
		    }
		},
		methods: {
			toggleList() {
				if(!this.totalCount) {
					return;
				}
				this.fold = !this.fold;
			},
			empty() {
				this.selectFoods.forEach((food) => {
					food.count = 0;
				})
			},
			hideList() {
				this.fold = true;
			},
			pay() {
				if(this.totalPrice < this.minPrice) {
					return;
				}
				window.alert(`去支付${this.totalPrice}元`);
			}
		},
		components: {
			cartcontrol
		}
		// props: ['deliveryPrice', 'minPrice']
	}
</script>
<style type="text/css">
	@import "../../common/sass/index";
	.shopcart {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 55;
		width: 100%;
		height: 48px;
		/*background: #455;*/
		.content {
			display: flex;
			font-size: 12px;
			color: rgba(255, 255, 255, 0.4);
			background: #141d27;
			.content-left {
				flex: 1;
				.logo-wrapper {
					display: inline-block;
					position: relative;
					top: -10px;
					margin: 0 12px;
					padding: 6px;
					width: 56px;
					height: 56px;
					box-sizing: border-box;
					vertical-align: top;
					border-radius: 50%;
					background: #141d27;
					z-index: 22;
					.logo {
						display: inline-block;
						width: 100%;
						height: 100%;
						border-radius: 50%;
						background: #2b343c;
						&.highLight {
							background: rgb(0, 160, 220);
						}
						img {
							display: inline-block;
							margin: 10px 10px;
							width: 24px;
							height: 24px;
							vertical-align: center;
						}
					}
					.num {
						position: absolute;
						top: 0;
						right: 0;
						height: 16px;
						width: 24px;
						line-height: 16px;
						text-align: center;
						border-radius: 16px;
						font-size: 9px;
						color: #fff;
						background: rgb(240, 20, 20);
						box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);

					}
				}
				.price {
					display: inline-block;
					vertical-align: top;
					line-height: 24px;
					margin-top: 12px;
					box-sizing: border-box;
					padding-right: 12px;
					border-right: 1px solid rgba(255, 255, 255, 0.1);
					font-size: 16px;
					font-weight: 700;
					&.highLight {
						color: #fff;
					}
				}
				.desc {
					display: inline-block;
					vertical-align: top;
					margin: 12px 0 0 6px;
					line-height: 24px;

				}
			}
			.content-right {
				flex: 0 0 105px;
				width: 105px;
				.pay {
					height: 48px;
					line-height: 48px;
					text-align: center;
					font-weight: 700;
					background: #2b333b;
					&.not-enough {
						background: #2b333b
					}
					&.enough {
						background: #00b43c;
						color: #fff;
					}
				}
			}
		}
		.shopcart-list {
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			width: 100%;
			transform: translate3d(0, -100%, 0);
			&.fold-enter-active, &.fold-leave-active {
				transition: all 0.3s;
			}
			&.fold-enter, &.fold-leave-active {
				transform: translate3d(0, 0, 0);
			}
			.list-header {
				height: 40px;
				line-height: 40px;
				padding: 0 18px;
				background: #f3f5f7;
				border-bottom: 1px solid rgba(7, 17, 27, 0.1);
				.title {
					float: left;
					font-size: 14px;
					color: rgb(7, 17, 27);
				}
				.empty {
					float: right;
					font-size: 12px;
					color: rgb(0, 160, 220);
				}
			}
			.list-content {
				max-height: 217px;
				overflow: auto;
				background: #fff;
				padding: 0 18px;
				.food{
					display: flex;
					height: 48px;
					align-items: center;
					@include borderpx(rgba(7, 17, 27, 0.1));
				}
				.title {
					flex: 1;
					font-size: 14px;
					color: rgb(7, 17, 27);
				}
				.price {
					color: rgb(240, 20, 20);
					font-weight: 700;
					padding: 0 12px 0 18px;

					span {
						font-size: 10px;
						font-weight: normal;
					}
				}
			}

		}
	}
	.list-mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 4;
		backdrop-filter: blur(10px);
    	background: rgba(7, 17, 27, 0.6);
		&.fade-enter-active, &.fade-leave-active {
	    	transition: all 0.5s;
		}
	    &.fade-enter, &.fade-leave-active {
		    opacity: 0;
		    background: rgba(7, 17, 27, 0);
	    }
	}
</style>