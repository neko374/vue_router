<template>
  <div class="scrolls">
    <nav>
      <span class="active" @click="goLocation('ph')">页面顶部</span>
      <span @click="goLocation('sp')">鲜盟店铺</span>
      <span @click="goLocation('f1')">1F</span>
      <span @click="goLocation('f2')">2F</span>
      <span @click="goLocation('f3')">3F</span>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    goLocation(selector) {
      document.getElementById(selector).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="less">
body {
  position: relative;
}
.scrolls {
  background: rgba(245, 245, 245, 0.6);
  z-index: 100;
  text-align: center;
  padding: 2px;
  position: fixed;
  right: 20px;
  bottom: 40px;
  border: 1px solid gray;
  span {
    display: block;
    font-size: 12px;
    font-weight: 100;
    &.active {
      border-bottom: 1px solid orangered;
    }
  }
}
</style>