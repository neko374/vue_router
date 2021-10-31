<template>
  <ul>
    <!-- <li v-for="(item, index) in list" :key="index" @click="handle(item)">
      {{ item }}
    </li> -->
    <li
      v-for="(item, index) in list"
      :key="index"
      @click="setTitleAction(item), setFlagAction()"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      // list: ["1", "2", "3", "4"],
    };
  },
  methods: {
    ...mapActions(["setTitleAction", "setFlagAction"]),
    //一个事件调用2个方法
    // handle(val) {
    //   this.$store.dispatch("setTitleAction", val);
    //   this.$store.dispatch("setFlagAction");
    // this.$store.commit("setTitleAction", val);
    // this.$store.commit("setFlagAction");
    //     this.$emit("cha1");
    //     this.$emit("t1", val); //带回父组件
    // },
  },
  computed: {
    ...mapState({ list: (state) => state.select.list }),
    // list() {
    //   return this.$store.state.list;
    // },
  },
};
</script>

<style scoped>
ul {
  width: 220px;
  text-align: center;
  margin: 0 auto;
}
ul > li {
  width: 200px;
  border: 2px solid gray;
}
</style>