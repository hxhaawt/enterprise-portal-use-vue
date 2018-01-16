<template>
    <div class="content-lf">
        <div class="content-lf-nav">
            <div>
                <h2 class="list-title">企业导航</h2>
                <ul class="list-nav">
                    <li class="first"></li>
                    <li v-for="(item, index) in comNavData" >
                        <a :href="item.href"> {{item.val}} </a>
                    </li>
                </ul>
            </div>
            
            <div>
                <h2 class="list-title">新闻动态</h2>
                <ul class="list-new">
                    <li v-for="(item, index) in newsData">
                        <a :href="item.href">
                            {{ item.val }}
                        </a>
                    </li>
                </ul>
            </div>
            
            <div>
                <h2 class="list-title">产品分类</h2>
                <ul class="list-nav">
                    <li v-for="(item, index) in productData">
                        <a :href="item.href">
                            {{ item.val }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>    
    </div>
</template>

<script>
    
    export default {
        data(){
            return {
                // 公司导航数据
                comNavData:[
                    {
                        href: "###",
                        val: "公司简介"
                    },
                    {
                        href: "###",
                        val: "服务流程"
                    },
                    {
                        href: "###",
                        val: "服务承诺"
                    },
                    {
                        href: "###",
                        val: "服务宗旨"
                    }
                ],
                // 公司新闻数据
                newsData:[
                    {
                        href:"###",
                        val: "智能家居成为家居行业新宠儿"
                    },
                    {
                        href:"###",
                        val: "智能家居成为家居行业新宠儿"
                    },
                    {
                        href:"###",
                        val: "智能家居成为家居行业新宠儿"
                    },
                    {
                        href:"###",
                        val: "智能家居成为家居行业新宠儿"
                    },
                    {
                        href:"###",
                        val: "智能家居成为家居行业新宠儿"
                    },
                    {
                        href:"###",
                        val: "智能家居成为家居行业新宠儿"
                    },
                    {
                        href:"###",
                        val: "智能家居成为家居行业新宠儿"
                    },
                    {
                        href:"###",
                        val: "智能家居成为家居行业新宠儿"
                    }
                ],
                // 公司产品数据
                productData:[
                    {
                        href:"###",
                        val: "某某控制系统卓居智能灯光控制器"
                    },
                    {
                        href:"###",
                        val: "某某控制系统卓居智能灯光控制器"
                    },
                    {
                        href:"###",
                        val: "某某控制系统卓居智能灯光控制器"
                    },
                    {
                        href:"###",
                        val: "某某控制系统卓居智能灯光控制器"
                    },
                    {
                        href:"###",
                        val: "某某控制系统卓居智能灯光控制器"
                    },
                    {
                        href:"###",
                        val: "某某控制系统卓居智能灯光控制器"
                    },
                    {
                        href:"###",
                        val: "某某控制系统卓居智能灯光控制器"
                    },
                    {
                        href:"###",
                        val: "某某控制系统卓居智能灯光控制器"
                    },
                    {
                        href:"###",
                        val: "某某控制系统卓居智能灯光控制器"
                    },
                    {
                        href:"###",
                        val: "某某控制系统卓居智能灯光控制器"
                    },
                    {
                        href:"###",
                        val: "某某控制系统卓居智能灯光控制器"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    
.content-lf {

    float: left;
    overflow: hidden;
    margin: 0;
    width: 260px;
}

.content-lf  .list-title {

    margin: 0 auto;
    padding-left: 20px;
    height: 35px;
    line-height: 35px;

    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #363601;
}

.content-lf .list-nav {

    margin: 0;
    margin-bottom: 10px;
    padding: 0;

    background: #DBDDE6;
}

.content-lf .list-nav .first{
    height: 20px;
}
.content-lf .list-nav li{

    /*padding-left: 10px;*/
    height: 35px;
    line-height: 35px;
    border-top: 1px solid #fff;
}
.content-lf .list-nav a {
    display: block;
    padding-left: 10px;
    font-size: 12px;
}
.content-lf .list-nav a:hover {
    color: white;
    background-color: #363601;
}

.content-lf-nav .list-new{
    margin: 10px 0;
    padding: 0;
}

.content-lf-nav .list-new li{

    margin-left: 10px;
    padding-left: 10px;

    background: url("../assets/img/ico2.jpg") no-repeat left center;
}

.content-lf-nav .list-new a {
    line-height: 25px;
    font-size: 12px;
}
.content-lf-nav .list-new a:hover {

    text-decoration: underline;
}
</style>
