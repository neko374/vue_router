<template>
  <div class="about">
    <ul>
      <li
        v-for="(item, index) in menuData"
        :key="item.id"
        @mouseenter="changeIdx(index)"
        @mouseleave="changeIdx(-1)"
      >
        <span>{{ item.title }}</span>
        <div class="menu">
          <el-collapse-transition>
            <sub-menu :menu="item.list" v-show="index === idx"></sub-menu>
          </el-collapse-transition>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import SubMenu from "../components/SubMenu.vue";
export default {
  components: { SubMenu },
  data() {
    return {
      menuData: [
        {
          id: 1,
          title: "公司介绍11",
          list: ["公司介绍7", "公司介绍2", "公司介绍3", "公司介绍4"],
        },
        {
          id: 2,
          title: "公司介绍22",
          list: ["公司介绍8", "公司介绍2", "公司介绍3", "公司介绍4"],
        },
        {
          id: 3,
          title: "公司介绍33",
          list: ["公司介绍91", "公司介绍2", "公司介绍3", "公司介绍4"],
        },
        {
          id: 4,
          title: "公司介绍44",
          list: ["公司介绍1", "公司介绍2", "公司介绍3", "公司介绍4"],
        },
      ],
      idx: -1,
    };
  },
  methods: {
    changeIdx(i) {
      this.idx = i;
    },
  },
};
</script>
<style>
ul {
  display: flex;
  justify-content: space-around;
  width: 800px;
  margin: auto;
}
li {
  position: relative;
}
li > span {
  font-size: 14px;
  background: #abcdef;
  width: 150px;
  height: 30px;
  display: inline-block;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
.menu {
  position: absolute;
}
.menu span {
  display: block;
  height: 30px;
  line-height: 30px;
  width: 150px;
  background: #f8f8f8;
  border-bottom: 1px solid #ccc;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
</style>
