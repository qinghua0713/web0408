<template>
    <div id="app" class=" emptyCar-page   shopping-page">
        <div class="shopping-top">
            <span class=" return-icon">
                &lt;</span> <span class="shopping-car">购物车
            </span>
        </div>
        <div class="mian-emptyCar">
          <img  src="../assets/img/shopping_wu.png" alt="">
          <p>购物车还是空的</p>
          <p>快去逛逛吧~</p>

        </div>
        

        <nav id="bottom-nav">
            <ul class="bottom-nav-ul">
                <li>
                    <a href="">
                        <img src="../assets/img/tab_home_nor.png" alt=""><br>
                        <span>首页</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../assets/img/tab_menu_nor.png" alt=""><br>
                        <span>分类</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../assets/img/tab_shopping_hig.png" alt=""><br>
                        <span class="subject-color">购物车</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../assets/img/tab_me_nor.png" alt=""><br>
                        <span>我</span>
                    </a>
                </li>
            </ul>
       </nav>

    </div>
</template>
<script>

export default {
    name:'emptyCar'
}
</script>
<style lang="">
    
   
</style>
