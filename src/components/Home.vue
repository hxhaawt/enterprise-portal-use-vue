<template>
    <div>
        <div class="container content clearfix">
            <div class="content-left">
                <h3 class="content-title">新闻动态 News</h3>
                <img class="content-img" src="../assets/img/newsimg.jpg" alt="新闻图片">
                <ul>
                    <li><a href="###">西城市为主的生活与住区</a></li>
                    <li><a href="###">西城市为主的生活与住区</a></li>
                    <li><a href="###">西城市为主的生活与住区</a></li>
                    <li><a href="###">西城市为主的生活与住区</a></li>
                </ul>
            </div>
            <div class="content-mid">
                <h3 class="content-title">公司动态 Company</h3>
                <img class="content-img" src="../assets/img/companyimg.jpg" alt="公司图片">
                <p>
                    新智达有限公司位于成都市高新区--成都市软件产业园。
                    新智达科技有限公司是以智能家居产品研发和销售为主的高科技企业。
                    新智达的所有产品均通过国家权威部门的检测，
                    高于国家对电工电子产品质量和安全的认证要求。......
                </p>
            </div>
            <div class="content-right">
                <h3 class="content-title">联系我们 Contact us</h3>
                <img class="content-img" src="../assets/img/Contactimg.jpg" alt="联系图片">
                <p>
                    公司名称：某某智能家居技术开发有限公司
                    <br>
                    公司地址：天府软园
                    <br>
                    公司电话：400-12345678
                    <br>
                    公司传真：400-12345678
                    <br>
                    业务负责人：黄先生
                    <br>
                    公司网址：www.maizi.com
                </p>
            </div>
        </div>
        
        <div class="container product clearfix">
            <div class="prod-left">
                <h3 class="content-title" style="margin-bottom: 30px;">视频中心 Video</h3>
                <embed src="http://player.youku.com/player.php/sid/XNTI5MjI1MDI4/v.swf"
                       allowFullScreen="true"
                       quality="high"
                       width="320"
                       height="200"
                       align="middle"
                       allowScriptAccess="always"
                       type="application/x-shockwave-flash">
                </embed>
            </div>
            <div class="prod-right">
                <h3 class="content-title">产品展示 Product display</h3>
                <div id="move-box">
                    <div id="prod-disp1" class="prod-display">
                        <img src="../assets/img/chanpin.jpg">
                        <img src="../assets/img/chanpin.jpg">
                        <img src="../assets/img/chanpin.jpg">
                        <img src="../assets/img/chanpin.jpg">
                        <img src="../assets/img/chanpin.jpg">
                        <img src="../assets/img/chanpin.jpg">
                        <img src="../assets/img/chanpin.jpg">
                    </div>
                    <div id="prod-disp2" ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">

    export default {

        methods: {
            
        },

        mounted(){
            
            // console.log('模板已经编译完成');
            scrollLeft();
        },
    }

    //  自动移动图片 功能
    function scrollLeft() {

        var speed = 30;
        var tab = document.getElementById('move-box');
        var tab1 = document.getElementById('prod-disp1');
        var tab2 = document.getElementById('prod-disp2');

        tab2.innerHTML = tab1.innerHTML;

        function Marquee(){
            if(tab2.offsetWidth - tab.scrollLeft <=0) {
                tab.scrollLeft = 0;
            }else{
                tab.scrollLeft ++;
            }
        }
        var timer = setInterval(Marquee,speed);
        tab.onmouseover = function(){
            clearInterval(timer);
        };
        tab.onmouseout = function(){
            timer = setInterval(Marquee,speed);
        }
    } 

</script>

<style scoped>

.content {

    height: 358px;
    background: url("../assets/img/content_bg.jpg") repeat-x;
}

/* 内容左边样式 */
.content-left{

    float: left;
    width: 330px;
    height: 336px;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 2px;
    margin-right: 15px;
    border: 1px solid #D7D7D7;

    background: url("../assets/img/content_sm_bg.jpg") repeat-x;
}

.content-left img{
    margin: 15px;
    margin-left: 50px;
}

.content-left ul {
    margin: 0 auto;
}
.content-left li {

    background: url("../assets/img/dashed.jpg") repeat-x center bottom;
}

.content-left li a {
    display: block;

    padding-left: 20px;
    background: url("../assets/img/ico.jpg") no-repeat center left;

    line-height: 30px;
    font-size: 12px;
}


/* 内容中间样式 */
.content-mid{

    float: left;

    width: 418px;
    height: 336px;
    margin-top: 0;
    margin-right: 15px;
    border: 1px solid #D7D7D7;
    overflow: hidden;

    background: url("../assets/img/content_sm_bg.jpg") repeat-x;
}

.content-mid img{
    margin: 25px;
    margin-left: 45px;
}

.content-mid p {

    width: 380px;
    margin: 0 auto;

    line-height: 30px;
    font-size: 12px;
    text-align: left;
}

/* 内容右边样式 */
.content-right{

    float: left;

    width: 326px;
    height: 336px;
    margin-top: 0;
    margin-right: 2px;
    border: 1px solid #D7D7D7;

    background: url("../assets/img/content_sm_bg.jpg") repeat-x;
}

.content-right img {

    margin: 25px 35px 10px 35px;

    border-bottom: 1px solid #D0CEC6;
}

.content-right p {

    width: 250px;
    margin: 0 auto;

    font-size: 12px;
    line-height: 27px;
    text-align: left;
}

/* 内容 标题共同样式 */
h3.content-title {

    /*margin-top: 0 !important;*/
    margin-left: 10px;
    padding-left: 30px;
    background: url("../assets/img/contentimg.jpg") no-repeat center left;
}


/* 下边产品展示 样式*/
.product {

    height: 340px;
    background: url("../assets/img/bottom_bg.jpg") repeat-x;

}

.prod-left {

    float: left;

    width: 326px;
    height: 300px;
    margin-left: 2px;
    margin-right: 15px;
    border: 1px solid #d7d7d7;

    background: url("../assets/img/content_sm_bg.jpg") repeat-x;
}

.prod-right {

    float: right;

    width: 760px;
    height: 300px;
    border: 1px solid #d7d7d7;

    background: url("../assets/img/content_sm_bg.jpg") repeat-x;
}

.prod-display img{
    margin-right: 30px;
}

#prod-disp1,
#prod-disp2{

    display: inline;
}

#move-box{

    height: 200px;

    margin-top: 60px;
    margin-left: 30px;
    margin-right: 20px;

    white-space: nowrap;
    overflow: hidden;
}
</style>






