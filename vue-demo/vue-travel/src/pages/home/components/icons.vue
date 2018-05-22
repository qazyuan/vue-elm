<template>
    <div>
        <div class="icon-wrapper">
            <swiper  :options="swiperOption">
                <swiper-slide v-for="(page, index) of pages" :key="index">
                    <div class="icon" v-for="item of page">
                        <img :src="item.imgUrl">
                        <p>{{item.desc}}</p>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="bottom-icon">
            <div class="address">
                <span class="iconfont icon-location"></span>定位
            </div>
            <div class="ads">
                <span class="iconfont icon-icon35"></span>
            五折泡温泉</div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'HomeIcons',
    props: {
        iconList: {
            type: Array
        }
    },
    data () {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                }
                // loop: true
            }
        }
    },
    computed: {
        pages () { //对轮播进行分页处理
            const pages = [];
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index / 8);
                if (!pages[page]) {
                    pages[page] = [];
                }
                pages[page].push(item);
            })
            return pages;
        }
    }
}
</script>
<style type="text/css" scoped>
    @import '../../../assets/styles/iconfont.css';
    .icon-wrapper {
        width: 100%;
        height: 0;
        padding-bottom: 45%;
        .icon {
            float: left;
            width: 25%;
            display: flex;
            margin-top: 0.3rem;
            /*排列方向*/
            flex-direction: column;
            /*//可以换行*/
            justify-content:center;
            align-items:center;/*垂直居中*/
            img {
                width: 0.8rem;
                height: 0.8rem;
            }
            p {
                width: 100%;
                text-align: center;
                padding-top: 0.1rem;
                font-size: 0.28rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
    .bottom-icon {
        width: 100%;
        height: 0.98rem;
        display: flex;
        align-items: center;

        border-top: 1px solid #ccc;
        div {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content:center;
            line-height: 0.98rem;
            border-right: 1px solid #ccc;
        }
        .iconfont  {
            display: block;
            width: 0.5rem;
            font-size: 0.36rem;
        }
        div:last-child {
            border: none;
        }
    }
</style>