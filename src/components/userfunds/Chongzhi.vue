<template>
  <el-dialog
    title="提示"
    :visible.sync="showr"
    width="30%"
    :show-close="false"
    :close-on-click-modal="false"
  >
    <p class="line">
      <el-input v-model="cash" placeholder="请输入金额" size="small"></el-input>
    </p>
    <p class="line">
      <el-select v-model="choose" placeholder="请选择类型" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </p>
    <p class="line">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="备注"
        v-model="descp"
      ></el-input>
    </p>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('rech')">取 消</el-button>
      <!-- $emit('rech')关闭 -->
      <el-button type="primary" @click="handle">确 定</el-button>
      <!-- 调用handle执行确定 -->
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: ["showr"],
  data() {
    return {
      options: [
        {
          value: "○",
          label: "积分",
        },
        {
          value: "📱",
          label: "话费",
        },
        {
          value: "💰",
          label: "钱",
        },
      ],
      cash: "",
      choose: "",
      descp: "",
    };
  },
  methods: {
    //添加事件
    handle() {
      // 从父组件调用方法添加记录
      this.$emit("add", {
        cash: this.cash,
        type: this.choose,
        descp: this.descp,
      });
      this.cash = "";
      this.choose = "";
      this.descp = "";
      // 结束，关闭
      this.$emit("rech");
    },
  },
};
</script>

<style>
.line {
  margin-bottom: 10px;
}
</style>