<template>
	<div ref="seller">
		<div class="overview-wrapper">
			<div class="overview-top">
				<div class="seller-info">
					<p class="name">{{seller.name}}</p>
					<div class="star-wrapper">
						<star :size="24" :score="seller.score"></star>
						<span class="rating-count">{{`(${seller.ratingCount})`}}</span>
						 <span class="sell-count">月售单{{seller.sellCount}}单</span>
					</div>
				</div>
				<div class="collection" @click="toggleStatus">
					<img v-show="!status" src="./star.png">
					<img v-show="status" src="./stared.png">
					<p v-show="!status">收藏</p>
					<p v-show="status">已收藏</p>
				</div>
			</div>
			<div class="overview-bottom">
				<div class="start-price">
					<p>起送价</p>
					<p class="content">22<span>元</span></p>
				</div>
				<div class="delivery-price">
					<p>商家配送</p>
					<p class="content">33<span>元</span></p>
				</div>
				<div class="delivery-time">
					<p>平均配送时间</p>
					<p class="content">80<span>分钟</span></p>
				</div>
			</div>
		</div>
		<split></split>
		<div class="info-wrapper">
			<div class="bulletin">
				<h3>公告与活动</h3>
				<p class="bulletin-content">{{seller.bulletin}}</p>
			</div>
			<ul v-if="seller.supports" class="supports">
				<li class="supports-item" v-for="item in seller.supports">
					<span class="icon" :class="classMap[item.type]"></span>
					<span class="text"> {{item.description}} </span>
				</li>
			</ul>
		</div>
		<split></split>
		<div class="pic-wrapper" v-show="seller.pics && seller.pics.length > 0">
			<h3>商家实景</h3>
			<div class="pics" ref="picWrapper">
				<ul class=""  ref="pics">
					<li v-for="itemPic in seller.pics">
						<img :src="itemPic">
					</li>
				</ul>
			</div>
		</div>
		<split></split>
		<div class="seller-wrapper" v-show="seller.pics && seller.pics.length > 0">
			<h3>商家信息</h3>
			<ul class="" >
				<li v-for="item in seller.infos">
					{{item}}
				</li>
			</ul>
		</div>
		<!-- :select-foods="selectFoods" -->
		<shopcart  :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
	</div>
</template>
<script type="text/javascript">
import star from "components/star/star";
import split from "components/split/split";
import shopcart from "components/shopcart/shopcart";
import BScroll from "better-scroll";
import {saveToLocal} from "common/js/util";
import {getFromLocal} from "common/js/util";
export default {
	props: {
		seller: {
			type: Object
		}
	},
	data() {
		return {
			status: (()=>{
				let state = getFromLocal(this.seller.id, status, true);
				return state;
			})()
		}
	},
	components: {
		star,
		split,
		shopcart
	},
	created () {
		this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
	},
	watch: {
		'seller'() {
			this.$nextTick(() => {
				this.initScroll();
				this.initPic();
			});
		}
	},
	mounted() {
	  this.$nextTick(() => {
		this.initScroll();
		this.initPic();
	  });
	},
	methods: {
		initScroll() {
			if (!this.scroll) {
			  this.scroll = new BScroll(this.$refs.seller, {
				click: true
			  });
			} else {
			  this.scroll.refresh();
			}
		},
		initPic() {
			if (this.seller.pics) {
				let picWidth = 120;
				let padding = 6;
				let width = (picWidth + padding) * this.seller.pics.length - padding;
				this.$refs.pics.style.width = width + 'px';
				// console.log(width);
				this.$nextTick(() => {
					if (!this.picScroll) {
					  this.picScroll = new BScroll(this.$refs.picWrapper, {
						scrollX: true,
						eventPassthrough: 'vertical'
					  });
					} else {
					  this.picScroll.refresh();
					}
				});
			}
		},

		toggleStatus() {
			this.status = !this.status;
			saveToLocal(this.seller.id, 'status', this.status);
		}
	}
}
</script>
<style type="text/css">
	@import '../../common/sass/index';
	.overview-wrapper {
		padding: 18px;
		.overview-top {
			display: flex;
			padding-bottom: 18px;
			color: rgb(7, 17, 27);
			border-bottom: 1px solid rgba(7, 17, 27, 0.1);
			.seller-info {
				flex: 1;
				.name {
					font-size: 14px;
					line-height: 14px;
					font-weight: 700;
				}
				.star-wrapper {
					display: flex;
					align-items: center;
					margin-top: 8px;
					font-size: 10px;
					color: rgb(77, 85, 93);
					.rating-count {
						padding-left: 8px;
					}
					.sell-count {
						padding-left: 12px;
					}
				}
			}

			.collection {
				text-align: center;
				p {
					font-size: 10px;
					color: rgb(77, 85, 93);
					line-height: 10px;
				}

			}
		}
		.overview-bottom {
			display: flex;
			align-items: center;
			div {
				flex: 1;
				width: 0;
				margin: 18px 0 0 0;
				border-right: 1px solid rgba(7, 17, 27, 0.1);
				text-align: center;
				font-size: 10px;
				color: rgb(147, 153, 159);
				.content {
					font-size: 24px;
					font-weight: 200;
					color: rgb(7, 17, 17);
					line-height: 24px;
					padding-top: 4px;
					span {
						font-size: 10px;
					}
				}

			}
			div:last-child {
				border: none;
			}
		}
	}
	.info-wrapper {
		padding: 18px 18px 0 18px;
		.bulletin {
			h3 {
				font-size: 14px;
				color: rgb(7, 17, 27);
				font-weight: 700;
			}
			p {
				padding: 8px 0 0 12px;
				font-size: 12px;
				font-weight: 200;
				color: rgb(240, 20, 20);
				line-height: 24px;
			}
		}
		.supports {
			margin-top: 16px;
			.supports-item {
				padding: 0 12px;
				padding: 16px 0 16px 12px;
				font-size: 0;
				border-top: 1px solid rgba(7, 17, 27, 0.1);
				&:last-child {
					margin-bottom: 0;
				};
				.icon {
					margin-right: 4px;
					vertical-align: bottom;
					@include icon(16px, 2);
				}
				.text {
					line-height: 14px;
					font-size: 14px;
				}
			}
		}
	}
	.pic-wrapper {
		padding: 18px 18px 0 18px;

		h3 {
			font-size: 14px;
			color: rgb(7, 17, 27);
			font-weight: 700;
		}
		.pics {
			width: 100%;
			overflow: hidden;
			white-space: nowrap;
			li {
				display: inline-block;
				padding: 12px 6px 6px 0;
			}
		}


	}
	.seller-wrapper {
		padding: 18px 18px 0 18px;
		h3 {
			font-size: 14px;
			color: rgb(7, 17, 27);
			font-weight: 700;
		}
		ul {
			padding-top: 12px;
			li {
				font-size: 12px;
				font-weight: 200;
				color: rgb(7, 17, 27);
				border-top: 1px solid rgba(7, 17, 27, 0.1);
				padding: 16px 0 16px 12px;
			}
		}
	}
</style>