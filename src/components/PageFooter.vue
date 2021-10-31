<template>
  <div class="slogen">
    <div class="index_style">
      <ul class="wrap">
        <li v-for="item in footerData" :key="item.id">
          <a href="#"><img :src="item.pic" data-bd-imgshare-binded="1" /></a>
          <b>{{ item.title }}</b>
          <span>{{ item.des }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerData: [
        {
          id: "1",
          pic: require("../assets/images/slogen_34.png"),
          title: "安全保证",
          des: "多重保障机制 认证商城",
        },
        {
          id: "2",
          pic: require("../assets/images/slogen_28.png"),
          title: "正品保证",
          des: "正品行货 放心选购",
        },
        {
          id: "3",
          pic: require("../assets/images/slogen_30.png"),
          title: "七天无理由退换",
          des: "七天无理由保障消费权益",
        },
        {
          id: "4",
          pic: require("../assets/images/slogen_31.png"),
          title: "天天低价",
          des: "价格更低，质量更可靠",
        },
      ],
    };
  },
};
</script>

<style>
</style>