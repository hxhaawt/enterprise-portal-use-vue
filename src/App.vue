<template>
    <div id="app">
        <HeaderView></HeaderView>
        <BannerView></BannerView>
        <div>
            <router-view></router-view>
        </div>
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
