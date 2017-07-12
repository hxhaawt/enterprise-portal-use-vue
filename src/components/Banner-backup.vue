<template>
    <div class="container banner">
        <!-- <img src="../assets/img/banner1.jpg" alt="广告图片"> -->
      
        <div class="owl-carousel owl-theme">
            <div class="item">
                <img src="../assets/img/banner1.jpg" alt="广告图片">
            </div>
            <div class="item">
                <img src="../assets/img/banner2.jpg" alt="广告图片">
            </div>
            <div class="item">
                <img src="../assets/img/banner3.jpg" alt="广告图片">
            </div>
            <div class="item">
                <img src="../assets/img/banner4.jpg" alt="广告图片">
            </div>
        </div>
       
    </div>
</template>

<!-- <script src='../assets/lib/jquery.min.js'></script> -->
<!-- <script src='../assets/lib/owl.carousel.min.js'></script> -->
<script>

    import 'owl.carousel/dist/assets/owl.carousel.css';
    import 'owl.carousel/dist/assets/owl.theme.default.min.css';

    import $ from 'jquery';
    import 'owl.carousel';

    export default {

        methods: {
            
        },

        mounted(){
            
            // console.log('banner 模板已经编译完成');
        },
    }

    $(document).ready(function () {

        $(".owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTime: 3000,
            autoplayHoverPause: true
        });

    });

</script>

<style scoped>


    .banner img{
        margin: 0 !important;
        width: 100%;
        display:block;
    }
   
</style>
