<template>
  <!-- 组件的文件: vue template _____写dom ;  script _____写js ; style____ 写样式 -->
  <div class="home">
    <page-header id="ph"></page-header>
    <index-swiper></index-swiper>
    <div class="index_style">
      <shop-info id="sp"></shop-info>
      <goods-info
        :goods="goodsData[index]"
        v-for="(item, index) in goodsData"
        :key="index"
        :id="goodsData[index].idLocation"
      ></goods-info>
    </div>
    <scroll-pane></scroll-pane>
  </div>
</template>

<script>
// @ is an alias to /src
import GoodsInfo from "../components/GoodsInfo.vue";
import IndexSwiper from "../components/IndexSwiper.vue";
import ShopInfo from "../components/ShopInfo.vue";
import PageHeader from "../components/PageHeader.vue";
import ScrollPane from "../components/ScrollPane.vue";
export default {
  name: "Home",
  components: {
    IndexSwiper,
    ShopInfo,
    GoodsInfo,
    PageHeader,
    ScrollPane,
  },

  data() {
    return {
      goodsData: [
        {
          id: 1,
          idLocation: "f1",
          floor: "1F",
          title: "水果蔬菜",
          type: ["苹果", "香蕉", "橙子", "哈密瓜", "白菜", "青菜"],
          bannerImg: [
            { id: 11, pic: require("../assets/AD/ad-6.jpg") },
            { id: 12, pic: require("../assets/AD/ad-7.jpg") },
          ],
          goodslist: [
            {
              id: 111,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_1.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 112,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_2.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 113,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_3.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 114,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_4.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 115,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_25.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 116,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_24.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 117,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_23.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 118,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_22.jpg"),
              price: 123,
              sales: 345,
            },
          ],
        },
        {
          id: 2,
          floor: "2F",
          idLocation: "f2",
          title: "水果蔬菜",
          type: ["苹果", "香蕉", "橙子", "哈密瓜", "白菜", "青菜"],
          bannerImg: [
            { id: 11, pic: require("../assets/AD/ad-6.jpg") },
            { id: 12, pic: require("../assets/AD/ad-7.jpg") },
          ],
          goodslist: [
            {
              id: 111,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_1.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 112,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_2.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 113,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_2.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 114,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_2.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 115,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_25.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 116,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_24.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 117,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_23.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 118,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_22.jpg"),
              price: 123,
              sales: 345,
            },
          ],
        },
        {
          id: 3,
          floor: "3F",
          idLocation: "f3",
          title: "水果蔬菜",
          type: ["苹果", "香蕉", "橙子", "哈密瓜", "白菜", "青菜"],
          bannerImg: [
            { id: 11, pic: require("../assets/AD/ad-6.jpg") },
            { id: 12, pic: require("../assets/AD/ad-7.jpg") },
          ],
          goodslist: [
            {
              id: 111,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_1.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 112,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_2.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 113,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_3.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 114,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_4.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 115,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_25.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 116,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_22.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 117,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_22.jpg"),
              price: 123,
              sales: 345,
            },
            {
              id: 118,
              name: "Olay玉兰油 新生塑颜金纯活能水",
              pic: require("../assets/products/p_22.jpg"),
              price: 123,
              sales: 345,
            },
          ],
        },
      ],
    };
  },
};
</script>
<style></style>
