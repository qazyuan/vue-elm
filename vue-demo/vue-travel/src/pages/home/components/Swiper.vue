<template>
  <div class="wrapper">
    <swiper  :options="swiperOption">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
          <img class="swiper-img" :src="slide">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true
        },
        swiperSlides: [
          'https://img1.qunarzz.com/vc/29/31/b4/20fb7d1ad6e24362882319cbfb.jpg_750x388x92.jpg',
          'https://img1.qunarzz.com/vc/af/f4/45/4756cd165e1462610598ceb201.png'
        ]
      }
    }
  }
</script>

<style type="text/css">
  .wrapper {
    background: #fff;
  }
  .wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 51.7%;
    background: #eee;
    .swiper-img {
      width: 100%;
    }
  }

</style>