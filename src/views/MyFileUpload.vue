<template>
  <el-upload
    class="upload-demo"
    action="http://192.168.69.195:8888/file/upload"
    :on-preview="handlePreview"
    multiple
    :limit="3"
    accept=".pdf"
  >
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传pdf文件</div>
  </el-upload>
</template>

<script>
export default {
  methods: {
    handlePreview(file) {
      console.log(file);
      window.open(file.response.url);
    },
  },
};
</script>

<style>
</style>