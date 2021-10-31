<template>
  <el-row>
    <el-col :span="20" :offset="2">
      <el-card>
        <div slot="header" class="clearfix">
          <span>mock应用</span>
          <el-button
            type="primary"
            size="small"
            style="float: right"
            @click="openwin"
            >添加记录</el-button
          >
          <el-table
            :data="
              tableData.slice(
                (currentPage - 1) * pagesize,
                currentPage * pagesize
              )
            "
            style="width: 100%"
          >
            <el-table-column prop="id" label="编号" width="150">
            </el-table-column>
            <el-table-column prop="name" label="标题" width="150">
            </el-table-column>
            <el-table-column prop="descp" label="描述" width="150">
            </el-table-column>
            <el-table-column prop="time" label="日期" width="150">
            </el-table-column>
            <el-table-column prop="author" label="作者" width="150">
            </el-table-column>
            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-button
                  size="small"
                  type="primary"
                  @click="editHandle(scope.row)"
                  >编辑</el-button
                >
                <el-button size="small" type="danger" @click="del(scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[3, 4, 5]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
        >
        </el-pagination>
      </el-card>
      <news-handle :win="win" :ruleForm="ruleForm" @all="getData"></news-handle>
    </el-col>
  </el-row>
</template>

<script>
import axios from "axios";
import NewsHandle from "../components/NewsHandle.vue";
export default {
  components: { NewsHandle },
  props: {
    ruleForm: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pagesize: 4,
      win: {
        show: false,
      },
      ruleForm: {
        id: "",
        name: "",
        descp: "",
        time: "",
        author: "",
        price: "",
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    del(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          const result = await axios.delete("/news/del?id=" + row.id);
          if (result.data.state == 200) {
            this.$message.success(result.data.msg);
            this.getData();
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    editHandle(row) {
      this.ruleForm = JSON.parse(JSON.stringify(row));
      this.win.show = true;
    },
    openwin() {
      (this.ruleForm.id = ""),
        (this.ruleForm.name = ""),
        (this.ruleForm.descp = ""),
        (this.ruleForm.time = ""),
        (this.ruleForm.author = ""),
        (this.win.show = true);
    },
    async getData() {
      const result = await axios.get("/news/list");
      this.tableData = result.data;
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  },
};
</script>

<style>
</style>