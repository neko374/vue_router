<template>
  <div id="app">
    <div id="header_top">
      <page-header1></page-header1>
    </div>
    <router-view />
    <page-footer></page-footer>
    <home-about></home-about>
    <scroll-pane></scroll-pane>
  </div>
</template>
<script>
import HomeAbout from "./components/HomeAbout.vue";
import PageFooter from "./components/PageFooter.vue";
import ScrollPane from "./components/ScrollPane.vue";
import PageHeader1 from "./components/PageHeader1.vue";
export default {
  components: { PageFooter, HomeAbout, ScrollPane, PageHeader1 },
  created() {
    //根组件重新发送登录信息，防止刷新掉登录
    if (sessionStorage.getItem("web22")) {
      this.$store.dispatch(
        "setUserInfoAction",
        sessionStorage.getItem("web22")
      );
    }
  },
};
</script>
<style lang="less">
</style>