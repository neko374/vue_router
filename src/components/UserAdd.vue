<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    :show-close="false"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="30%"
  >
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.uname"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pwd"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <el-input v-model="form.uicon"></el-input>
      </el-form-item>
      <el-form-item label="积分">
        <el-input v-model="form.point"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeWin()">关闭</el-button>
      <el-button type="primary" @click="submitForm('form')">添加</el-button>
      <el-button @click="resetForm(form)">重置</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      form: {
        uname: "",
        pwd: "",
        uicon: "",
        point: "",
      },
      rules: {
        uname: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 1, max: 12, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 位", trigger: "blur" },
        ],
        uicon: [
          { required: true, message: "请输入头像位置", trigger: "blur" },
          { min: 1, max: 99, message: "错误", trigger: "blur" },
        ],
        point: [
          { required: true, message: "请输入积分", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 位", trigger: "blur" },
        ],
      },
    };
  },
  props: {
    dialogVisible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const msg = await this.$http.get(
            `http://localhost:2333/users/getname?uname=${this.form.uname}`
          );
          if (msg.data === "不存在") {
            const flag = await this.$http.post(
              "http://localhost:2333/users/add",
              this.form
            );
            if (flag.data === "添加成功啦") {
              this.$message.success("添加成功");
              this.$emit("upd");//刷新
              this.$emit("addclose");
              this.$refs[formName].resetFields();//清空输入
            } else {
              this.$message.error("添加失败");
            }
          } else {
            this.$message.error("已存在");
          }
        } else {
          console.log("错误");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    closeWin() {
      this.$emit("addclose");
    },
  },
};
</script>

<style>
</style>