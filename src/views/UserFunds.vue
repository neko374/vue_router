<template>
  <div>
    <!--资金管理-->
    <div class="title_Section"><span>资金管理</span></div>
    <div class="funds_style">
      <div class="user_operating">
        <div class="Balance">
          <img src="../assets/images/iconfont-zhanghuyue.png" />
          <h3>
            余额：<b>￥{{ total }}</b>
          </h3>
        </div>
        <a
          href="#"
          class="Recharge_btn"
          id="Recharge"
          data-toggle="modal"
          @click="openCZ"
          >充值</a
        ><a href="#" class="withdraw_btn" @click="openCash">提现</a>
      </div>
      <div class="Details_list">
        <div class="hd">
          <ul>
            <li>充值消费记录</li>
            <li>提现记录</li>
          </ul>
        </div>
        <div class="bd">
          <ul class="consumption_list">
            <table>
              <thead>
                <tr>
                  <td class="label_1">操作时间</td>
                  <td class="label_2">类型</td>
                  <td class="label_3">金额</td>
                  <td class="label_4">备注</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in rechData" :key="item.id">
                  <td>{{ item.time | dataformat }}</td>
                  <td>{{ item.type }}</td>
                  <td>￥{{ item.cash }}</td>
                  <td>{{ item.descp }}</td>
                </tr>
              </tbody>
            </table>
            <div class="Paging">
              <div class="Pagination">
                <a href="#">首页</a>
                <a href="#" class="pn-prev disabled">&lt;上一页</a>
                <a href="#" class="on">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">下一页&gt;</a>
                <a href="#">尾页</a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <cash :show="isShow" @cls="closeCash"></cash>
    <!-- 这里的模态框要调用自定义的关闭事件 -->
    <chongzhi :showr="isS" @rech="closeCZ" @add="addrech"></chongzhi>
  </div>
</template>

<script>
import Cash from "../components/userfunds/Cash.vue";
import Chongzhi from "../components/userfunds/Chongzhi.vue";
export default {
  components: { Cash, Chongzhi },
  data() {
    return {
      isShow: false,
      isS: false,
      rechData: [
        {
          id: 1,
          time: "2021.09.20",
          type: "消费",
          cash: "123",
          descp: "商场购物券",
        },
        {
          id: 2,
          time: "2021.09.20",
          type: "消费",
          cash: "190",
          descp: "商场购物券",
        },
        {
          id: 3,
          time: "2021.09.20",
          type: "消费",
          cash: "200",
          descp: "商场购物券",
        },
        {
          id: 4,
          time: "2021.09.20",
          type: "消费",
          cash: "800",
          descp: "商场购物券",
        },
        {
          id: 5,
          time: "2021.09.20",
          type: "消费",
          cash: "123",
          descp: "商场购物券",
        },
      ],
    };
  },
  methods: {
    openCash() {
      this.isShow = true;
    },
    closeCash() {
      this.isShow = false;
    },
    openCZ() {
      this.isS = true;
    },
    closeCZ() {
      this.isS = false;
    },
    addrech(val) {
      val.id = this.rechData[this.rechData.length - 1].id + 1;
      val.time = new Date();
      this.rechData.push(val);
    },
  },
  computed: {
    total() {
      return this.rechData.reduce((pre, item) => (pre += parseInt(item.cash)),0);
    },
  },
};
</script>

<style>
</style>