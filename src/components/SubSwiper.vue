<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in datas" :key="item.id">
      <img :src="item.pic" class="u-img" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: ["datas"],
};
</script>

<style>
.u-img {
  height: 460px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>