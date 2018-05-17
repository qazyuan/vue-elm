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
          'http://img1.qunarzz.com/piao/fusion/1804/f2/91b285a08ee21c02.jpg_750x200_8a73fd08.jpg',
          'http://img1.qunarzz.com/piao/fusion/1805/77/f63bd04dd5319602.jpg_750x200_6ba8e0ca.jpg'
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
    padding-bottom: 26.7%;
    background: #eee;
    .swiper-img {
      width: 100%;
    }
  }

</style>