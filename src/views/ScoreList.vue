<template>
  <div class="bd">
    <ul>
      <div class="Integral_Number"><em></em>你当前的积分</div>
      <table>
        <thead>
          <tr class="thead_title">
            <td>积分获取订单号</td>
            <td>订单金额</td>
            <td>积分</td>
            <td>获取日期</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in info" :key="item.orderId">
            <td>{{ item.orderId }}</td>
            <td>{{ item.cash }}</td>
            <td>{{ item.score }}</td>
            <td>{{ item.time }}</td>
          </tr>
        </tbody>
      </table>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    // info() {
    //   return this.$store.state.scorelist;
    // },
    ...mapState({ info: (state) => state.score.scorelist }),
  },
};
</script>

<style>
</style>