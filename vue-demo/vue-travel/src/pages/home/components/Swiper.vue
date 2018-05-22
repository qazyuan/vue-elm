<template>
  <div class="wrapper">
    <swiper  :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="(slide, index) in swiperList" :key="slide.id">
          <img class="swiper-img" :src="slide.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        swiperList: {
            type: Array
        }
    },
    data () {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                loop: true
            }
        }
    },
    computed: {
      showSwiper: function () {
        return this.swiperList.length;
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
    padding-bottom: 31.2%;
    background: #eee;
    .swiper-img {
      width: 100%;
    }
  }

</style>