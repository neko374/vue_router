<template>
  <div id="header_top">
    <div id="top">
      <div class="Inside_pages">
        <div class="Collection">
          下午好，欢迎光临锦宏颜！<em></em><a href="#">收藏我们</a>
        </div>
        <div class="hd_top_manu clearfix">
          <ul class="clearfix">
            <li class="hd_menu_tit zhuce" data-addclass="hd_menu_hover">
              欢迎光临本店！<router-link :to="{name:'Login'}" class="red">[请登录]</router-link> 新用户<router-link :to="{name:'Reg'}"
                class="red"
                >[免费注册]</router-link
              >
            </li>
            <li class="hd_menu_tit" data-addclass="hd_menu_hover">
              <router-link to="/usercenter">我的订单</router-link>
            </li>
            <li class="hd_menu_tit" data-addclass="hd_menu_hover">
              <router-link to="/shopcar">购物车</router-link>
            </li>
            <li class="hd_menu_tit" data-addclass="hd_menu_hover">
              <a href="#">联系我们</a>
            </li>
            <li class="hd_menu_tit list_name" data-addclass="hd_menu_hover">
              <a href="#" class="hd_menu">客户服务</a>
              <div class="hd_menu_list">
                <ul>
                  <li><a href="#">常见问题</a></li>
                  <li><a href="#">在线退换货</a></li>
                  <li><a href="#">在线投诉</a></li>
                  <li><a href="#">配送范围</a></li>
                </ul>
              </div>
            </li>
            <li class="hd_menu_tit phone_c" data-addclass="hd_menu_hover">
              <a href="#" class="hd_menu"
                ><em class="iconfont icon-shouji"></em>手机版</a
              >
              <div class="hd_menu_list erweima">
                <ul>
                  <img src="assets/erweima.png" width="100px" height="100" />
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="header" class="header page_style">
      <div class="logo">
        <a href="index.html"><img src="../assets/images/logo.png" /></a>
      </div>
      <div class="Search">
        <p>
          <input name="" type="text" class="text" /><input
            name=""
            type="submit"
            value="搜 索"
            class="Search_btn"
          />
        </p>
        <p class="Words">
          <a href="#">苹果</a><a href="#">香蕉</a><a href="#">菠萝</a
          ><a href="#">西红柿</a><a href="#">橙子</a><a href="#">苹果</a>
        </p>
      </div>
      <div class="hd_Shopping_list" id="Shopping_list">
        <div class="s_cart">
          <em class="iconfont icon-cart2"></em><a href="#">我的购物车</a>
          <i class="ci-right">&gt;</i
          ><i class="ci-count" id="shopping-amount">0</i>
        </div>
        <div class="dorpdown-layer">
          <div class="spacer"></div>
          <ul class="p_s_list">
            <li>
              <div class="img"><img src="images/tianma.png" /></div>
              <div class="content">
                <p><a href="#">产品名称</a></p>
                <p>颜色分类:紫花8255尺码:XL</p>
              </div>
              <div class="Operations">
                <p class="Price">￥55.00</p>
                <p><a href="#">删除</a></p>
              </div>
            </li>
          </ul>
          <div class="Shopping_style">
            <div class="p-total">
              共<b>1</b>件商品　共计<strong>￥ 515.00</strong>
            </div>
            <a
              href="Shop_cart.html"
              title="去购物车结算"
              id="btn-payforgoods"
              class="Shopping"
              >去购物车结算</a
            >
          </div>
        </div>
      </div>
    </div>
    <div id="Menu" class="clearfix">
      <div class="index_style clearfix">
        <div id="allSortOuterbox">
          <div class="t_menu_img"></div>
          <div class="Category">
            <a href="#"><em></em>所有产品分类</a>
          </div>
          <div class="hd_allsort_out_box_new">
            <ul class="Menu_list">
              <li class="name">
                <div class="Menu_name">
                  <a href="product_list.html">面部护理</a> <span>&lt;</span>
                </div>
                <div class="link_name">
                  <p>
                    <a href="Product_Detailed.html">茅台</a>
                    <a href="#">五粮液</a> <a href="#">郎酒</a>
                    <a href="#">剑南春</a>
                  </p>
                </div>
                <div class="menv_Detail">
                  <div class="cat_pannel clearfix">
                    <div class="hd_sort_list">
                      <dl class="clearfix" data-tpc="1">
                        <dt>
                          <a href="#">面膜<i>></i></a>
                        </dt>
                        <dd>
                          <a href="#">撕拉面膜</a><a href="#">面膜贴</a
                          ><a href="#">免洗面膜</a><a href="#">水洗面膜</a>
                        </dd>
                      </dl>
                      <dl class="clearfix" data-tpc="2">
                        <dt>
                          <a href="#">洁面<i>></i></a>
                        </dt>
                        <dd>
                          <a href="#">洁面摩丝</a><a href="#">洁面乳 </a
                          ><a href="#">洁面啫哩/胶</a
                          ><a href="#">面部去角质/磨砂</a
                          ><a href="#">洁面膏/霜</a><a href="#">洁肤皂</a>
                        </dd>
                      </dl>
                      <dl class="clearfix" data-tpc="3">
                        <dt>
                          <a href="#">化妆水<i>></i></a>
                        </dt>
                        <dd>
                          <a href="#"> 喷雾</a><a href="#"> 精华水</a
                          ><a href="#"> 柔肤水</a><a href="#">爽肤水</a
                          ><a href="#">收敛水/紧肤水</a>
                        </dd>
                      </dl>
                      <dl class="clearfix" data-tpc="4">
                        <dt>
                          <a href="#">眼部护理<i>></i></a>
                        </dt>
                        <dd>
                          <a href="#"> 眼膜</a><a href="#"> 眼部凝胶</a
                          ><a href="#">眼部精华</a><a href="#">眼霜</a>
                        </dd>
                      </dl>
                      <dl class="clearfix" data-tpc="4">
                        <dt>
                          <a href="#">眼部护理<i>></i></a>
                        </dt>
                        <dd>
                          <a href="#"> 眼膜</a><a href="#"> 眼部凝胶</a
                          ><a href="#">眼部精华</a><a href="#">眼霜</a>
                        </dd>
                      </dl>
                      <dl class="clearfix" data-tpc="4">
                        <dt>
                          <a href="#">防晒<i>></i></a>
                        </dt>
                        <dd>
                          <a href="#"> 眼膜</a><a href="#"> 眼部凝胶</a
                          ><a href="#">眼部精华</a><a href="#">眼霜</a>
                        </dd>
                      </dl>
                      <dl class="clearfix" data-tpc="4">
                        <dt>
                          <a href="#">唇部护理<i>></i></a>
                        </dt>
                        <dd>
                          <a href="#"> 眼膜</a><a href="#"> 眼部凝胶</a
                          ><a href="#">眼部精华</a><a href="#">眼霜</a>
                        </dd>
                      </dl>
                      <dl class="clearfix" data-tpc="4">
                        <dt>
                          <a href="#">乳液/面霜<i>></i></a>
                        </dt>
                        <dd>
                          <a href="#"> 乳液</a><a href="#"> 面霜</a
                          ><a href="#">按摩霜</a><a href="#">面部啫喱</a
                          ><a href="#">凝露/凝胶</a>
                        </dd>
                      </dl>
                    </div>
                    <div class="Brands">
                      <a href="#" class="logo_Brands"
                        ><img src="products/logo/34.jpg"
                      /></a>
                      <a href="#" class="logo_Brands"
                        ><img src="products/logo/42.jpg"
                      /></a>
                      <a href="#" class="logo_Brands"
                        ><img src="products/logo/152.jpg"
                      /></a>
                      <a href="#" class="logo_Brands"
                        ><img src="products/logo/156.jpg"
                      /></a>
                      <a href="#" class="logo_Brands"
                        ><img src="products/logo/458.jpg"
                      /></a>
                      <a href="#" class="logo_Brands"
                        ><img src="products/logo/339.jpg"
                      /></a>
                      <a href="#" class="logo_Brands"
                        ><img src="products/logo/245.jpg"
                      /></a>
                      <a href="#" class="logo_Brands"
                        ><img src="products/logo/199.jpg"
                      /></a>
                      <a href="#" class="logo_Brands"
                        ><img src="products/logo/618.jpg"
                      /></a>
                      <a href="#" class="logo_Brands"
                        ><img src="products/logo/644.jpg"
                      /></a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="name">
                <div class="Menu_name">
                  <a href="#">身体护理</a><span>&lt;</span>
                </div>
                <div class="link_name">
                  <a href="Product_Detailed.html"> 面霜</a><a href="#">眼霜</a
                  ><a href="#"> 面膜</a><a href="#">护肤套装</a>
                </div>
                <div class="menv_Detail">
                  <div class="cat_pannel clearfix"></div>
                </div>
              </li>
              <li class="name">
                <div class="Menu_name">
                  <a href="#">香水彩妆</a><span>&lt;</span>
                </div>
                <div class="link_name">
                  <a href="#">卸妆 </a><a href="#">防晒</a><a href="#">BB</a>
                  <a href="#">女士香水</a>
                </div>
                <div class="menv_Detail">
                  <div class="cat_pannel clearfix"></div>
                </div>
              </li>
              <li class="name">
                <div class="Menu_name">
                  <a href="#">洗发护发</a><span>&lt;</span>
                </div>
                <div class="link_name">
                  <a href="#">洗发</a><a href="#">护发</a><a href="#">沐浴</a
                  ><a href="#">润肤乳</a>
                </div>
                <div class="menv_Detail">
                  <div class="cat_pannel clearfix"></div>
                </div>
              </li>
              <li class="name">
                <div class="Menu_name">
                  <a href="#">女性护理</a><span>&lt;</span>
                </div>
                <div class="link_name">
                  <a href="#">洁面</a><a href="#">坚果炒货</a
                  ><a href="#">乳液</a>
                  <a href="#"> 面霜</a>
                </div>
                <div class="menv_Detail">
                  <div class="cat_pannel clearfix"></div>
                </div>
              </li>
              <li class="name">
                <div class="Menu_name">
                  <a href="#">男性护理</a><span>&lt;</span>
                </div>
                <div class="link_name">
                  <a href="#">洁面</a><a href="#">坚果炒货</a
                  ><a href="#">乳液</a>
                  <a href="#"> 面霜</a>
                </div>
                <div class="menv_Detail">
                  <div class="cat_pannel clearfix"></div>
                </div>
              </li>
              <li class="name">
                <div class="Menu_name">
                  <a href="#">推荐品牌</a><span>&lt;</span>
                </div>
                <div class="link_name">
                  <a href="#">欧莱雅</a><a href="#"> 菲诗小铺</a
                  ><a href="#"> 雅诗兰黛</a>
                </div>
                <div class="menv_Detail">
                  <div class="cat_pannel clearfix"></div>
                </div>
              </li>
              <li class="name">
                <div class="Menu_name">
                  <a href="#">推荐品牌</a><span>&lt;</span>
                </div>
                <div class="link_name">
                  <a href="#">欧莱雅</a><a href="#"> 菲诗小铺</a
                  ><a href="#"> 雅诗兰黛</a>
                </div>
                <div class="menv_Detail">
                  <div class="cat_pannel clearfix"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="Navigation" id="Navigation">
          <ul class="Navigation_name">
            <li><a href="Home.html">首页</a></li>
            <li><a href="product_list.html">产品列表</a></li>
            <li>
              <a href="Limit_buy.html">限时特卖</a><em class="hot_icon"></em>
            </li>
            <li><a href="#">联系我们</a></li>
            <li><a href="#">鲜盟人才</a></li>
            <li><a href="#">鲜盟金融</a></li>
            <li><a href="#">鲜盟投资</a></li>
            <li><a href="Brands.html">销售品牌</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
</style>