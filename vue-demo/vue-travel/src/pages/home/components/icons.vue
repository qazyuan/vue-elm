<template>
    <div class="icon-wrapper">
        <swiper  :options="swiperOption">
          <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page">
                    <img :src="item.url">
                    <p>{{item.text}}</p>
                </div>
          </swiper-slide>
        </swiper>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'HomeIcons',
    data () {
        return {
            swiperSlides: [
                {
                    'text': '经典门票1',
                    'url': 'https://img1.qunarzz.com/vc/af/f4/45/4756cd165e1462610598ceb201.png'
                },
                {
                    'text': '经典门票2',
                    'url': 'https://img1.qunarzz.com/vc/af/f4/45/4756cd165e1462610598ceb201.png'
                },
                {
                    'text': '经典门票3',
                    'url': 'https://img1.qunarzz.com/vc/af/f4/45/4756cd165e1462610598ceb201.png'
                },
                {
                    'text': '经典门票4',
                    'url': 'https://img1.qunarzz.com/vc/af/f4/45/4756cd165e1462610598ceb201.png'
                },
                {
                    'text': '经典门票11',
                    'url': 'https://img1.qunarzz.com/vc/af/f4/45/4756cd165e1462610598ceb201.png'
                },
                {
                    'text': '经典门票22',
                    'url': 'https://img1.qunarzz.com/vc/af/f4/45/4756cd165e1462610598ceb201.png'
                },
                {
                    'text': '经典门票33',
                    'url': 'https://img1.qunarzz.com/vc/af/f4/45/4756cd165e1462610598ceb201.png'
                },
                {
                    'text': '经典门票44',
                    'url': 'https://img1.qunarzz.com/vc/af/f4/45/4756cd165e1462610598ceb201.png'
                },
                {
                    'text': '经典门票99',
                    'url': 'https://img1.qunarzz.com/vc/af/f4/45/4756cd165e1462610598ceb201.png'
                }
            ],
            swiperOption: {
                // pagination: {
                //     el: '.swiper-pagination'
                // },
                // loop: true
            }
        }
    },
    computed: {
        pages () {
            const pages = [];
            this.swiperSlides.forEach((item, index) => {
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
    .icon-wrapper {
        width: 100%;
        height: 0;
        padding-bottom: 35%;
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
                width: 0.7rem;
                height: 0.7rem;
            }
            p {
                padding-top: 0.1rem;
                font-size: 0.12rem;
            }
        }
    }
</style>