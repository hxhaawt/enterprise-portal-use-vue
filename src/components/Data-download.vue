<template>
    <div class="container content clearfix">
        
        <ComContentNav></ComContentNav>
   
        <div class="content-rt">
            <div class="content-rt-title">
                <img src="../assets/img/Cooperation.jpg" alt="说明图片">
            </div>
                
            <div class="cooperation">
                <h2><a>资料下载</a></h2>
                <div class="cooperation-img">
                    <img src="../assets/img/jiameng16.jpg" />
                    
                    <div class="data-dn">
                        <a href="###"><img src="../assets/img/d1.jpg" /></a>
                        <a href="###"><img src="../assets/img/d2.jpg" /></a>
                        <a href="###"><img src="../assets/img/d3.jpg" /></a>
                        <a href="###"><img src="../assets/img/d4.jpg" /></a>
                        <a href="###"><img src="../assets/img/d5.jpg" /></a>
                        <a href="###"><img src="../assets/img/d6.jpg" /></a>
                        <a href="###"><img src="../assets/img/d7.jpg" /></a>
                        <a href="###"><img src="../assets/img/d8.jpg" /></a>
                        <img src="../assets/img/jiameng17.jpg" />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
    import ComContentNav from "./Com-content-nav.vue"

    export default {

        components:{
            ComContentNav
           
        }
    }

</script>

<style scoped>


.content {
    background-color: #fff;
}

.content-rt {

    float: left;
    overflow: hidden;

    margin-left: 20px;
    margin-right: 15px;

    width: 820px;
}
.content-rt-title {

    border-bottom: 1px dashed #000;
}

.content-rt-title img {
    margin: 10px 0;
}


/* cooperation  */

.cooperation {

    margin: 10px 0;
}

.cooperation h2{
    margin: 0;
    padding: 0;
    background: url("../assets/img/lv-left.gif") no-repeat;
    height: 30px;
    line-height: 30px;
}
.cooperation h2 a {

    padding-left: 10px;

    font-size: 14px;
    color: #000;
}

.cooperation-img {

    padding: 10px 35px;

    border: 1px solid #C1C1C1;
    border-top: none;
}

.cooperation-img >img {

    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
}

.cooperation-img .data-dn {
    /*width:741px;*/
    margin:0 auto;
    background: #E5E6E8;
}

.data-dn img {

    display: inline-block;
    margin: 20px 30px;
}


</style>




