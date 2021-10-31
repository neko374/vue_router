<template>
  <el-dialog title="提示" :visible.sync="upd.show" width="30%">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="id" prop="id">
        <el-input
          type="text"
          v-model="ruleForm.id"
          autocomplete="off"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item label="积分" prop="point">
        <el-input
          type="text"
          v-model="ruleForm.point"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="upd.show = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  data() {
    var validatePoint = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入积分"));
      } else {
        const val = /^[0-9]*$/;
        if (!val.test(value)) {
          callback(new Error("请输入数字"));
        }
        callback();
      }
    };
    return {
      rules: {
        point: [{ validator: validatePoint, trigger: "blur" }],
      },
    };
  },
  props: {
    upd: {
      type: Object,
      required: true,
    },
    ruleForm: {
      type: Object,
      required: true,
    },
    //显示在修改框
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const result = await this.$http.put(
            "http://localhost:2333/users/upd",
            this.ruleForm
          );
          if (result.data === "更新成功") {
            this.$message.success("成功");
            this.upd.show = false;
            this.$emit("upd");
          } else if (result.data === "更新失败") {
            this.$message.error("失败");
          } else {
            this.$message.info(result.data);
            this.upd.show = false;
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
  },
};
</script>

<style>
</style>