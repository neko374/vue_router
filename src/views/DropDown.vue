<template>
  <div>
    <!-- <input
      type="text"
      class="list"
      @click="$emit('cha')"
      placeholder="子组件调用父组件"
      v-model="txt"
    /> -->
    <input type="text" class="list" @click="setFlagAction" v-model="title" />
    <!-- txt父传子 -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  // props: ["txt"],
  computed: {
    ...mapState({ title: (state) => state.select.title }),
  },
  methods: {
    ...mapActions(["setFlagAction"]),
    // handle() {
    //   //调用action
    //   // this.$store.commit("setFlagAction");
    //   this.$store.dispatch("setFlagAction");
    // },
  },
};
</script>

<style scoped>
div {
  width: 300px;
  text-align: center;
  margin: 0 auto;
}
.list {
  width: 200px;
  height: 20px;
  border: 20px gray solid;
}
</style>