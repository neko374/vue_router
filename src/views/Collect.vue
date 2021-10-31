<template>
  <div class="right_style">
    <div class="info_content">
      <div class="collect_style r_user_style">
        <div class="title_Section"><span>用户收藏</span></div>
        <div class="collect">
          <ul class="Quantity">
            <li>已藏量：{{ collectData.length }}条</li>
            <li></li>
          </ul>
          <div class="collect_list">
            <ul>
              <li
                class="collect_p"
                v-for="(item, index) in collectData"
                :key="index"
              >
                <em class="iconfont icon-close2 delete"></em>
                <a href="#" class="buy_btn">立即购买</a>
                <div class="collect_info">
                  <div class="img_link">
                    <a href="#" class="center"><img :src="item.pic" /></a>
                  </div>
                  <dl class="xinxi">
                    <dt>
                      <a href="#" class="name">标题</a>
                    </dt>
                    <dd>
                      <span class="Price"><b>￥</b>价格</span
                      ><span class="collect_Amount"
                        ><i class="iconfont icon-shoucang"></i>量</span
                      >
                    </dd>
                  </dl>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    ...mapState({ collectData: (state) => state.collect.collectData }),
  },
};
</script>

<style>
</style>