<template>
    <div>
        <header>
            <div class="container header">
                
                <a href="../../index.html" ><img src="../assets/img/logo.jpg" class="header-logo" alt="this is logo"></a>
                
                <div class="header-content">
                    <a href="###" title="设为首页">设为首页</a>
                    <span>&nbsp;|&nbsp;</span>
                    <a href="###" title="设为首页">联系我们</a>
                    <div class="header-tel">
                        <img src="../assets/img/top.jpg">
                    </div>
                </div>
            </div>
        </header>
        
        <nav>
            <div class="nav">
                <div class="container">
                    <ul>
                        <li><router-link to='/home' >首页</router-link></li>
                        <li><router-link to='/about-us' >关于我们</router-link></li>
                        <li><router-link to='/news' >新闻资讯</router-link></li>
                        <li><router-link to='/products' >产品介绍</router-link></li>
                        <li><router-link to='/solution' >解决方案</router-link></li>
                        <li><router-link to='/experience-center' >体验中心</router-link></li>
                        <li><router-link to='/successful-demo' >成功案例</router-link></li>
                        <li><router-link to='/cooperation' >加盟合作</router-link></li>
                        <li><router-link to='/data-download' >资料下载</router-link></li>
                        <li><router-link to='/contact' >联系我们</router-link></li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    
</script>


<style scoped>
   
.header {
    margin-top: 10px;
    margin-bottom: 10px;
}

.header-logo {
    margin-top: 30px;
}
.header-content {
    float: right;
}
.header-content a,
.header-content span {

    font-weight: bold;
    font-size: 15px;
    color: #7A7A0A;
}
.header-tel {
    margin-top: 15px;
}

/* 导航样式 */
div.nav{
    height: 44px;

    background: url("../assets/img/navbj.jpg") repeat-x;
}
.nav ul li {

    display: inline-block;
    
    width: 100px;
    line-height: 44px;
    text-align: center;
}
.nav li a{
    
    font-size: 18px;
    font-weight: 100;
    color: #363601;
}

.nav li a:hover,
.content-left li a:hover
{

    text-decoration: underline;
}

.nav ul li + li {
    background: url("../assets/img/navimg.jpg") no-repeat left center;
}
 
</style>