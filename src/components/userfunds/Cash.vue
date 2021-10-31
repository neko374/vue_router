<template>
  <el-dialog
    title="提示"
    :visible.sync="show"
    width="30%"
    :show-close="false"
    :close-on-click-modal="false"
  >
    <span>已提现1000元</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeWin">取 消</el-button>
      <el-button type="primary" @click="$emit('cls')">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: ["show"],
  methods: {
    closeWin() {
      this.$emit("cls");
    },
  },
};
</script>

<style>
</style>