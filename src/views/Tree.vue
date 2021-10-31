<template>
  <el-tree
    :data="treedata"
    :default-expand-all="true"
    :show-checkbox="true"
    ref="tree"
    @node-click="handleNodeClick"
    :props="defaultProps"
    @check="selectItem"
    node-key="id"
  >
  </el-tree>
</template>

<script>
export default {
  data() {
    return {
      treedata: [],
      defaultProps: {
        children: "children",
        label: "title",
      },
    };
  },
  created() {
    this.getTreeData();
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    selectItem(data) {
      console.log(this.$refs.tree.getCheckedKeys());
    },
    async getTreeData() {
      const result = await this.$http.get(
        "http://192.168.69.206:2333/armytree/list"
      );
      console.log(result);
      this.treedata = result.data.datas;
    },
  },
};
</script>

<style>
</style>