<template>
  <el-dialog title="提示" :visible.sync="win.show" width="50%">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="50px"
      class="demo-ruleForm"
    >
      <el-form-item label="编号" prop="id" v-if="ruleForm.id">
        <el-input v-model="ruleForm.id" autocomplete="off" disabled></el-input>
      </el-form-item>
      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="descp">
        <el-input v-model.number="ruleForm.descp"></el-input>
      </el-form-item>
      <el-form-item label="日期" prop="time">
        <el-date-picker
          v-model="ruleForm.time"
          value-format="yyyy-MM-dd"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input v-model.number="ruleForm.price"></el-input>
      </el-form-item>
      <el-form-item label="作者" prop="author">
        <el-input v-model.number="ruleForm.author"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm', 1)"
          v-if="!ruleForm.id"
          >添加</el-button
        >
        <el-button type="primary" @click="submitForm('ruleForm', 2)" v-else
          >修改</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="win.show = false">取 消</el-button>
    </span>
  </el-dialog>
</template>

<script>
import axios from "axios";
export default {
  props: {
    win: {
      type: Object,
      required: true,
    },
    ruleForm: {
      type: Object,
      required: true,
    },
  },
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新闻名称"));
      } else {
        callback();
      }
    };
    var validateDescp = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新闻详情"));
      } else {
        callback();
      }
    };
    var validateAuthor = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新闻的发布人"));
      } else {
        callback();
      }
    };
    return {
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        descp: [{ validator: validateDescp, trigger: "blur" }],
        author: [{ validator: validateAuthor, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName, flag) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          if (flag === 1) {
            const result = await axios.post("/news/add", this.ruleForm);
            if (result.data.state == 200) {
              this.$message.success(result.data.msg);
              this.$emit("all");
              this.win.show = false;
            }
          } else {
            const result = await axios.put("/news/upd", this.ruleForm);
            console.log("upd", result);
            if (result.data.state == 200) {
              this.$message.success(result.data.msg);
              this.$emit("all");
              this.win.show = false;
            }
          }
        } else {
          console.log("error submit!!");
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