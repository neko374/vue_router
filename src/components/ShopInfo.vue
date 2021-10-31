<template>
  <div class="Shops_style clearfix">
    <div class="title_name">
      <span>鲜盟店铺</span>
    </div>
    <div class="Shops_list clearfix">
      <ul>
        <li v-for="item in shopData" :key="item.id">
          <div class="Shops_area">
            <a href="#">{{ item.title }}</a>
          </div>
          <div class="Shops_address">
            <a href="#" v-for="(tit, idx) in item.list" :key="idx">{{
              tit.name
            }}</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopData: [
        {
          id: 1,
          title: "四川成都武侯区1",
          list: [
            { id: 11, path: "/shop1", name: "武侯分店一部" },
            { id: 12, path: "/shop2", name: "武侯分店一部" },
            { id: 13, path: "/shop1", name: "武侯分店一部" },
            { id: 11, path: "/shop1", name: "武侯分店一部" },
            { id: 11, path: "/shop1", name: "武侯分店一部" },
            { id: 11, path: "/shop1", name: "武侯分店一部" },
          ],
        },
        {
          id: 2,
          title: "四川成都武侯区2",
          list: [
            { id: 11, path: "/shop1", name: "武侯分店一部" },
            { id: 12, path: "/shop2", name: "武侯分店一部" },
            { id: 13, path: "/shop1", name: "武侯分店一部" },
            { id: 11, path: "/shop1", name: "武侯分店一部" },
            { id: 11, path: "/shop1", name: "武侯分店一部" },
            { id: 11, path: "/shop1", name: "武侯分店一部" },
          ],
        },
        {
          id: 3,
          title: "四川成都武侯区3",
          list: [
            { id: 11, path: "/shop1", name: "武侯分店一部" },
            { id: 12, path: "/shop2", name: "武侯分店一部" },
            { id: 13, path: "/shop1", name: "武侯分店一部" },
            { id: 11, path: "/shop1", name: "武侯分店一部" },
            { id: 11, path: "/shop1", name: "武侯分店一部" },
            { id: 11, path: "/shop1", name: "武侯分店一部" },
          ],
        },
        {
          id: 4,
          title: "四川成都金牛区1",
          list: [
            { id: 11, path: "/shop1", name: "武侯分店一部" },
            { id: 12, path: "/shop2", name: "武侯分店一部" },
            { id: 13, path: "/shop1", name: "武侯分店一部" },
            { id: 11, path: "/shop1", name: "武侯分店一部" },
            { id: 11, path: "/shop1", name: "武侯分店一部" },
            { id: 11, path: "/shop1", name: "武侯分店一部" },
          ],
        },
        {
          id: 5,
          title: "四川成都金牛区2",
          list: [
            { id: 11, path: "/shop1", name: "武侯分店一部" },
            { id: 12, path: "/shop2", name: "武侯分店一部" },
            { id: 13, path: "/shop1", name: "武侯分店一部" },
            { id: 11, path: "/shop1", name: "武侯分店一部" },
            { id: 11, path: "/shop1", name: "武侯分店一部" },
            { id: 11, path: "/shop1", name: "武侯分店一部" },
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>