<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="标题" prop="imgTitle">
        <el-input
          type="text"
          v-model="ruleForm.imgTitle"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item type="textarea" label="内容" prop="imgText">
        <el-input
          type="text"
          v-model="ruleForm.imgText"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="添加图片" ref="uploadElement" prop="img">
        <el-input v-if="false" v-model="ruleFrom.img"></el-input>
        <el-upload
          class="upload-demo"
          action="http://192.168.69.195:8888/imgs/upload"
          accept="image/jpg,image/png"
          :auto-upload="false"
          ref="upload"
          multiple
          :data="ruleForm"
          :on-success="handleSuccess"
          :on-change="changePic"
        >
          <el-button type="success" size="small">选择文件</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
      <span>上传图片</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确定</el-button
        >
      </span>
    </el-dialog>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="编号"> </el-table-column>
      <el-table-column prop="imgTitle" label="名称"> </el-table-column>
      <el-table-column prop="imgText" label="介绍"> </el-table-column>
      <el-table-column label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.imgUrl" class="pic" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    var validateImgTitle = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入标题"));
      } else {
        callback();
      }
    };
    var validateImgText = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入内容"));
      } else {
        callback();
      }
    };
    var validateImg = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请选择图片"));
      } else {
        callback();
      }
    };
    return {
      dialogVisible: false,
      ruleForm: {
        imgTitle: "",
        imgText: "",
        img: "",
      },
      tableData: [],
      rules: {
        imgTitle: [{ validator: validateImgTitle, trigger: "blur" }],
        imgText: [{ validator: validateImgText, trigger: "blur" }],
        img: [{ validator: validateImg, trigger: "blur" }],
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    changePic(val) {
      this.ruleForm.img = val.name;
    },
    async getData() {
      const result = await axios.get("http://192.168.69.195:8888/imgs/list");
      this.tableData = result.data.datas;
    },
    openwin() {
      this.dialogVisible = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$refs.upload.submit();
          this.dialogVisible = false;
        } else {
          console.log("信息有误");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleSuccess(result) {
      if (result.state === "0") {
        this.$message.success(result.msg);
        this.getData();
      } else {
        this.$message.error(result.msg);
      }
    },
  },
};
</script>

<style scopd>
</style>