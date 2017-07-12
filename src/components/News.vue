<template>
    <div class="container content clearfix">
        
        <ComContentNav></ComContentNav>
    
        <div class="content-rt">
            <div class="content-rt-title">
                <img src="../assets/img/news-1.jpg" alt="新闻图片">
            </div>
        
            <div class="news-list">
                <h2>
                    <a href="###">公司新闻</a>
                </h2>
                <ul>
                    <li><a href="###">卓居智能与中国电信（广东）合作推广智能家居</a><span>(05 - 24)</span></li>
                    <li><a href="###">卓居智能与中国电信（广东）合作推广智能家居</a><span>(05 - 24)</span></li>
                    <li><a href="###">卓居智能与中国电信（广东）合作推广智能家居</a><span>(05 - 24)</span></li>
                    <li><a href="###">卓居智能与中国电信（广东）合作推广智能家居</a><span>(05 - 24)</span></li>
                    <li><a href="###">卓居智能与中国电信（广东）合作推广智能家居</a><span>(05 - 24)</span></li>
                    <li><a href="###">卓居智能与中国电信（广东）合作推广智能家居</a><span>(05 - 24)</span></li>
                    <li><a href="###">卓居智能与中国电信（广东）合作推广智能家居</a><span>(05 - 24)</span></li>
                </ul>
            </div>
        
            <div class="news-list">
                <h2>
                    <a href="###">行业新闻</a>
                </h2>
                <ul>
                    <li><a href="###">卓居智能与中国电信（广东）合作推广智能家居</a><span>(05 - 24)</span></li>
                    <li><a href="###">卓居智能与中国电信（广东）合作推广智能家居</a><span>(05 - 24)</span></li>
                    <li><a href="###">卓居智能与中国电信（广东）合作推广智能家居</a><span>(05 - 24)</span></li>
                    <li><a href="###">卓居智能与中国电信（广东）合作推广智能家居</a><span>(05 - 24)</span></li>
                    <li><a href="###">卓居智能与中国电信（广东）合作推广智能家居</a><span>(05 - 24)</span></li>
                    <li><a href="###">卓居智能与中国电信（广东）合作推广智能家居</a><span>(05 - 24)</span></li>
                </ul>
            </div>
        
            <div class="news-list">
                <h2>
                    <a href="###">视频新闻</a>
                </h2>
                <ul>
                    <li><a href="###">卓居智能与中国电信（广东）合作推广智能家居</a><span>(05 - 24)</span></li>
                    <li><a href="###">卓居智能与中国电信（广东）合作推广智能家居</a><span>(05 - 24)</span></li>
                    <li><a href="###">卓居智能与中国电信（广东）合作推广智能家居</a><span>(05 - 24)</span></li>
                    <li><a href="###">卓居智能与中国电信（广东）合作推广智能家居</a><span>(05 - 24)</span></li>
                    <li><a href="###">卓居智能与中国电信（广东）合作推广智能家居</a><span>(05 - 24)</span></li>
                </ul>
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

.news-list {
    margin-top: 15px;
    /*border: 1px solid gray;*/
}
.news-list h2 {

    margin: 0;
    background: url("../assets/img/lv-left.gif") no-repeat;
    height: 30px;
    line-height: 30px;
}

.news-list h2 a {
    font-size: 14px;
    color: #000;

    margin-left: 15px;
}

.news-list ul{
    margin: 0;
    padding: 0;
    border: 1px solid #C1C1C1;
    border-top: none;
}

.news-list ul li {

    margin-left: 5px;
    padding-left: 5px;
    border-bottom: 1px dashed gray;

    height: 35px;
    line-height: 35px;

    background: url("../assets/img/ico2.jpg") no-repeat left center;
}

.news-list ul a {

    font-size: 12px;
}
.news-list ul a:hover {

    text-decoration: underline;
}

.news-list ul span {

    float: right;
    margin-right: 20px;

    font-size: 12px;
}


</style>




