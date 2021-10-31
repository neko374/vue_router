<template>
  <div>
    <el-row>
      <el-col :offset="4" :span="16">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            用户管理
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
              @click="openAdd()"
              >添加</el-button
            >
          </div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="编号" width="180">
            </el-table-column>
            <el-table-column prop="uname" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="uicon" label="头像">
              <template slot-scope="scope">
                <img :src="scope.row.uicon" class="u-icon" />
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button
                  @click="del(scope.row.id)"
                  type="danger"
                  size="small"
                  icon="el-icon-delete"
                  >删除</el-button
                >
                <el-button
                  type="primary"
                  size="small"
                  icon="el-icon-edit"
                  @click="openupd(scope.row)"
                  >编辑</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <user-add
      :dialogVisible="dialogVisible"
      @addclose="closeAdd"
      @upd="getData"
    ></user-add>
    <user-upd :upd="upd" :ruleForm="one"></user-upd>
  </div>
</template>

<script>
import UserAdd from "../components/UserAdd.vue";
import UserUpd from "../components/UserUpd.vue";
export default {
  components: { UserAdd, UserUpd },
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      upd: { show: false },
      one: {}, //存储一条记录
    };
  },
  created() {
    this.getData();
  },
  methods: {
    openAdd() {
      this.dialogVisible = true;
    },
    openupd(item) {
      this.upd.show = true;
      this.one = JSON.parse(JSON.stringify(item));
    },
    closeAdd() {
      this.dialogVisible = false;
    },
    handleClick(row) {
      console.log(row);
    },
    //重要，promise改来的简洁写法
    async getData() {
      const result = await this.$http.get("http://localhost:2333/users/list");
      this.tableData = result.data;
    },
    del(id) {
      this.$confirm("确定删除", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async (res) => {
          const result = await this.$http.delete(
            `http://localhost:2333/users/del?id=${id}`
          );
          if (result.data === "删掉") {
            this.$message.success("删除成功");
            this.getData();
          } else if (result.data === "删不掉!!!") {
            this.$message.success("删除失败");
          } else {
            this.$message.info(result.data);
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消了",
          });
        });
    },
    // getData() {
    //   this.$http
    //     .get("http://localhost:2333/users/list")
    //     .then((res) => {
    //       console.log(res);
    //       this.tableData = res.data;
    //     })
    //     .catch((err) => {
    //       console.log(err, "获取失败");
    //     });
    // },
  },
};
</script>

<style>
img {
  width: 40px;
}
</style>