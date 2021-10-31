<template>
  <div class="g-main">
    <!-- <drop-down @cha="setFlag" :txt="title"></drop-down> -->
    <!-- :txt父传子 -->
    <!-- <drop-list v-show="flag" @cha1="setFlag" @t1="setTitle"></drop-list> -->
    <!-- 子传父t1,发事件 -->
    <drop-down></drop-down>
    <drop-list v-show="flag"></drop-list>
    <input type="button" value="my1" @click="m1" />
    <input type="button" value="my2" @click="m2" />
  </div>
</template>

<script>
import DropDown from "./DropDown.vue";
import DropList from "./DropList.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: { DropDown, DropList },
  //子给父传消息
  data() {
    return {
      //flag: false,
      //title: "", //收子传来的数据
    };
  },
  computed: {
    ...mapState({ flag: (state) => state.select.flag }),
  },
  methods: {
    ...mapActions("my1", { m1: "setAction1" }),
    ...mapActions("my2", { m2: "setAction1" }),
    // setFlag() {
    //   this.flag = !this.flag;
    // },
    // setTitle(val) {
    //   this.title = val;
    // },
  },
  //组件中路由
  // beforeRouteEnter(to, from, next) {
  //   if (!sessionStorage.getItem("aaa")) {
  //     window.alert("请登录");
  //     next("/login");
  //   } else {
  //     next();
  //   }
  // },
};
</script>

<style>
</style>