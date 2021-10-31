<template>
  <div class="product_Sort">
    <div class="title_name">
      <span class="floor">{{ goods.floor }}</span
      ><span class="name" style="color: black">{{ goods.title }}</span>
      <span class="link_name"
        ><a href="#" v-for="(item, index) in goods.type" :key="index">{{
          item
        }}</a></span
      >
    </div>
    <div class="Section_info clearfix">
      <div class="product_AD">
        <sub-swiper :datas="goods.bannerImg"></sub-swiper>
      </div>
      <!--产品列表-->
      <div class="pro_list">
        <ul>
          <li v-for="item in goods.goodslist" :key="item.id">
            <!-- path:'/...' name:'...无/'     动态路由↓ -->
            <router-link :to="{ path: '/detail', query: { id: item.id } }"
              ><img :src="item.pic" width="180px" height="160px"
            /></router-link>
            <a href="#" class="p_title_name">{{ item.name }}</a>
            <div class="Numeral">
              <span class="price"><i>￥</i>{{ item.price }}.00</span>
              <span class="Sales"
                >销量<i>{{ item.sales }}</i
                >件</span
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SubSwiper from "./SubSwiper.vue";
export default {
  components: { SubSwiper },
  props: ["goods"],
};
</script>

<style>
</style>