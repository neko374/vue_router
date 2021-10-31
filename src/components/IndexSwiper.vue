<template>
  <!-- <div class="home"> -->
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in swiperData" :key="item.id">
      <div
        :style="{
          backgroundImage: `url(${item.pic})`,
          backgroundColor: item.bgc,
        }"
        class="u-banner"
      ></div>
      <!-- <img :src="item.pic" /> -->
    </el-carousel-item>
  </el-carousel>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      swiperData: [
        {
          id: 1,
          pic: require("../assets/AD/ad-1.jpg"),
          bgc: "rgb(255, 227, 130)",
        },
        {
          id: 2,
          pic: require("../assets/AD/ad-2.jpg"),
          bgc: "rgb(255, 227, 130)",
        },
        {
          id: 3,
          pic: require("../assets/AD/ad-3.jpg"),
          bgc: "rgb(226, 155, 197)",
        },
        {
          id: 4,
          pic: require("../assets/AD/ad-6.jpg"),
          bgc: "#f7ddea",
        },
        {
          id: 5,
          pic: require("../assets/AD/ad-7.jpg"),
          bgc: "#F60",
        },
      ],
    };
  },
};
</script>

<style>
.u-banner {
  width: 100%;
  height: 460px;
  /* background-color: #99a9bf; */
  background-image: url("../assets/AD/ad-1.jpg");
  background-position: center;
  background-repeat: no-repeat;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__container {
  height: 460px !important;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>