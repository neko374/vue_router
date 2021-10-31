<template>
  <div>
    <div id="top">
      <div class="Inside_pages">
        <div class="Collection">
          下午好，欢迎光临锦宏颜！<em></em><a href="#">收藏我们</a>
        </div>
        <div class="hd_top_manu clearfix">
          <ul class="clearfix">
            <li
              class="hd_menu_tit zhuce"
              data-addclass="hd_menu_hover"
              v-if="!userInfo"
            >
              欢迎光临本店！<router-link to="/login" class="red"
                >[请登录]</router-link
              >
              新用户<router-link :to="{ name: 'Register' }" class="red"
                >[免费注册]</router-link
              >
            </li>
            <li v-else class="hd_menu_tit">
              <span>当前用户:{{ userInfo }}</span>
              <span @click="logout">退出</span>
            </li>
            <li class="hd_menu_tit" data-addclass="hd_menu_hover">
              <router-link to="/usercenter">用户信息</router-link>
            </li>
            <li class="hd_menu_tit" data-addclass="hd_menu_hover">
              <router-link to="/cart">购物车</router-link>
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
                  <img
                    src="../assets/images/erweima.jpg"
                    width="100px"
                    height="100"
                  />
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--顶部样式1-->
    <div id="header" class="header page_style">
      <div class="logo">
        <router-link to="/"
          ><img src="../assets/images/logo.png"
        /></router-link>
      </div>
      <!--结束图层-->
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
      <!--购物车样式-->
      <div class="hd_Shopping_list" id="Shopping_list">
        <div class="s_cart">
          <em class="iconfont icon-cart2"></em><a href="#">我的购物车</a>
          <i class="ci-right">&gt;</i
          ><i class="ci-count" id="shopping-amount">0</i>
        </div>
        <div class="dorpdown-layer">
          <div class="spacer"></div>
          <!--<div class="prompt"></div><div class="nogoods"><b></b>购物车中还没有商品，赶紧选购吧！</div>-->
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
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      //   loginname: this.$store.state.userInfo,
    };
  },
  created() {
    // if (sessionStorage.getItem("web22")) {
    //   this.loginname = sessionStorage.getItem("web22");
    // }
  },
  methods: {
    logout() {
      if (window.confirm("确定退出")) {
        if (sessionStorage.getItem("web22")) {
          sessionStorage.removeItem("web22");
          this.$store.dispatch("setUserInfoAction", "");
        }
      }
    },
  },
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>

<style>
</style>