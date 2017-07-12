<template>
    <div class="container content clearfix">
        
        <ComContentNav></ComContentNav>
    
        <div class="content-rt">
            <div class="content-rt-title">
                <img src="../assets/img/About.jpg" alt="说明图片">
            </div>
            <div class="content-rt-msg">
                <p>
                    广州卓居智能科技有限公司位于广州市天河软件园智慧核心区--广州互联网产业园。
                    公司是以智能家居产品研发和销售为主的高科技企业。
                    所有产品均通过国家权威部门的检测，符合国家对电工电子产品质量和安全的认证要求。
                    在国家十二五规划对物联网产业大力支持的背景下，
                    公司秉承"开拓，创新，诚信，务实"的经营理念，
                    致力于帮助客户实现时尚，智能，节能的智慧家居生活，
                    为国内外客户提供最佳的产品和用户体验。
                </p>
                <h4>智慧改变生活,卓居让家庭更美好!</h4>
                <p>
                    公司的产品涵盖智能家居生活的方方面面,
                    包括远程控制设备,本地无线控制设备,
                    各种控制器以及控制终端.产品的功能拓扑如下:
                </p>
                <img src="../assets/img/20130709111256495.jpg" alt="产品说明图片">
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

.content-rt-msg p{

    text-indent: 2em;
    color: #000;
    font-size: 16px;
    width: 810px;
}
.content-rt-msg h4{

    text-indent: 2em;
    font-size: 16px;
}

</style>




