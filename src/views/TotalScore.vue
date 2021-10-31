<template>
  <div class="bd">
    <div class="Intergral_Number">积分总额{{ totalScore }}</div>
    <div class="Intergral_Number">当前消费{{ totalCash }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["totalScore", "totalCash"]),
  },
};
</script>

<style>
</style>