<template>
    <div id="app">
        <HeaderView></HeaderView>
        <BannerView></BannerView>
        
        <!-- meta.keepAlive 的值在router.config.js里进行配置 -->
        <!-- 为真时表示 使用缓存，没有或为值则用下面的 router-view -->
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
            <!-- <router-view></router-view> -->
        </keep-alive>
        <router-view></router-view>
        
        <FooterView></FooterView>
    </div>
</template>

<style type="text/css" scoped>
    
</style>

<script type="text/javascript">
    
    import HeaderView from "./components/Header.vue"
    import BannerView from "./components/Banner.vue"
    import FooterView from "./components/Footer.vue"

    export default {
        data(){
            return {
                msg: "hellp vue"
            }
        },

        components:{
            HeaderView,
            BannerView,
            FooterView
           
        }
    }

</script>
