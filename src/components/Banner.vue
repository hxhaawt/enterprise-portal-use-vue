<template>
    <div class="container banner">

        <swiper :options="swiperOption" ref="mySwiperA">
            <!-- 幻灯内容 -->
            <swiper-slide><img src="../assets/img/banner1.jpg" alt="广告图片"></swiper-slide>
            <swiper-slide><img src="../assets/img/banner2.jpg" alt="广告图片"></swiper-slide>
            <swiper-slide><img src="../assets/img/banner3.jpg" alt="广告图片"></swiper-slide>
            <swiper-slide><img src="../assets/img/banner4.jpg" alt="广告图片"></swiper-slide>

            <!-- 以下控件元素均为可选 -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-scrollbar"  slot="scrollbar"></div>
        </swiper>

    </div>
</template>


<script>

// import { swiper, swiperSlide } from 'vue-awesome-swiper'  

export default{

    // vue.js滑动插件   swiper3.0 
    // 主要是有在移动端，所以没有鼠标悬停功能
    data(){

        return {

            swiperOption: {
                // 所有配置均为可选（同Swiper配置） 
                loop: true,
                notNextTick: true,
                autoplay: 3000,
                grabCursor : true,
                setWrapperSize :true,
                autoHeight: true,
                pagination : '.swiper-pagination',
                paginationClickable :true,
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
                // 下面移动条
                // scrollbar:'.swiper-scrollbar',
                mousewheelControl : true,
                observeParents: true,
                // paginationType: 'fraction',
               

                onTransitionStart(swiper){
                    // console.log(swiper)
                }
            }
        }
    },

    // 如果你需要得到当前的swiper对象来做一些事情，
    // 你可以像下面这样定义一个方法属性来获取当前的swiper对象，
    // 同时notNextTick必须为true
    computed: {
      // swiper() {
      //   return this.$refs.mySwiper.swiper
      // }
    },
    mounted() {
    
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper);
      // this.swiper.slideTo(3, 1000, false)
    }
}


</script>

<style scoped>

    .banner img{
        margin: 0 !important;
        width: 100%;
        display:block;
    }
   
</style>
