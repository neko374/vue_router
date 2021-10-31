<template>
  <div class="integral">
    <div class="title_Section">
      <span>用户积分</span>
    </div>
    <div class="user_integral_style slideTxtBox">
      <div class="hd">
        <ul>
          <router-link
            tag="li"
            to="/usercenter/score/list"
            :class="{ active: idx === 0 }"
            @click.native="changeIdx(0)"
          >
            积分获取记录
          </router-link>
          <router-link
            tag="li"
            to="/usercenter/score/total"
            :class="{ active: idx === 1 }"
            @click.native="changeIdx(1)"
          >
            积分使用记录
          </router-link>
        </ul>
      </div>
      <div>
        <!-- 三级路由 -->
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idx: 0,
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
.active {
  background: orange;
  color: white;
}
</style>