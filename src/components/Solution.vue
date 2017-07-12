<template>
    <div class="container content clearfix">
        
        <ComContentNav></ComContentNav>
    
        <div class="content-rt">
            <div class="content-rt-title">
                <img src="../assets/img/Solution.jpg" alt="说明图片">
            </div>
            
            <div class="solution">
                <h2><a>解决方案</a></h2>
                <div class="solution-img">
                    <img src="../assets/img/20130621095325590.jpg">
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


/* solution  */

.solution {

    margin: 10px 0;
}

.solution h2{
    margin: 0;
    padding: 0;
    background: url("../assets/img/lv-left.gif") no-repeat;
    height: 30px;
    line-height: 30px;
}
.solution h2 a {

    padding-left: 10px;

    font-size: 14px;
    color: #000;
}

.solution-img {

    padding: 10px;

    border: 1px solid #C1C1C1;
    border-top: none;

}



</style>




