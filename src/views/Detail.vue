<template>
  <div>
    <div class="clearfix Inside_pages">
      <div class="Location_link">
        <em></em><a href="#">进口食品、进口牛</a> &lt;
        <a href="#">进口饼干/糕点</a> &lt; <a href="#">销售产品名称</a>
      </div>
      <div class="clearfix" id="goodsInfo">
        <!--产品图片放大-->
        <div class="mod_picfold clearfix">
          <div class="clearfix" id="detail_main_img">
            <div class="layout_wrap preview">
              <div id="vertical" class="bigImg">
                <img
                  :src="goodsinfo.pic"
                  width=""
                  height=""
                  alt=""
                  id="midimg"
                />
                <div id="winSelector"></div>
              </div>
              <div class="smallImg">
                <div class="scrollbutton smallImgUp disabled">&lt;</div>
                <div id="imageMenu">
                  <ul>
                    <li>
                      <img
                        src="../assets/products/p_1.jpg"
                        width="68"
                        height="68"
                        alt="洋妞"
                      />
                    </li>
                    <li>
                      <img
                        src="../assets/products/p_2.jpg"
                        width="68"
                        height="68"
                        alt="洋妞"
                      />
                    </li>
                    <li>
                      <img
                        src="../assets/products/p_3.jpg"
                        width="68"
                        height="68"
                        alt="洋妞"
                      />
                    </li>
                    <li>
                      <img
                        src="../assets/products/p_4.jpg"
                        width="68"
                        height="68"
                        alt="洋妞"
                      />
                    </li>
                    <li>
                      <img
                        src="../assets/products/p_5.jpg"
                        width="68"
                        height="68"
                        alt="洋妞"
                      />
                    </li>
                    <li>
                      <img
                        src="../assets/products/p_6.jpg"
                        width="68"
                        height="68"
                        alt="洋妞"
                      />
                    </li>
                    <li>
                      <img
                        src="../assets/products/p_7.jpg"
                        width="68"
                        height="68"
                        alt="洋妞"
                      />
                    </li>
                  </ul>
                </div>
                <div class="scrollbutton smallImgDown">&gt;</div>
              </div>
              <!--smallImg end-->
              <div id="bigView" style="display: none">
                <div><img width="800" height="800" alt="" src="" /></div>
              </div>
            </div>
          </div>
          <div class="Sharing">
            <div
              class="bdsharebuttonbox bdshare-button-style0-16"
              data-bd-bind="1441079683326"
            >
              <a href="#" class="bds_more" data-cmd="more">分享到：</a
              ><a
                href="#"
                class="bds_qzone"
                data-cmd="qzone"
                title="分享到QQ空间"
              ></a
              ><a
                href="#"
                class="bds_tsina"
                data-cmd="tsina"
                title="分享到新浪微博"
              ></a
              ><a
                href="#"
                class="bds_tqq"
                data-cmd="tqq"
                title="分享到腾讯微博"
              ></a
              ><a
                href="#"
                class="bds_renren"
                data-cmd="renren"
                title="分享到人人网"
              ></a
              ><a
                href="#"
                class="bds_weixin"
                data-cmd="weixin"
                title="分享到微信"
              ></a>
            </div>

            <!--收藏-->
            <div class="Collect">
              <span @click="addCollect"
                ><em class="ico1"></em>收藏商品( 2345 )</span
              >
            </div>
          </div>
        </div>
        <!--产品信息-->
        <div class="property">
          <form
            action="javascript:addToCart(97)"
            name="ECS_FORMBUY"
            id="ECS_FORMBUY"
          >
            <h2>{{ goodsinfo.title }}</h2>
            <div class="goods_info">
              {{ goodsinfo.subtitle }}
            </div>
            <div class="ProductD clearfix">
              <div class="productDL">
                <dl>
                  <dt>售&nbsp;&nbsp;&nbsp;&nbsp;价：</dt>
                  <dd>
                    <span id="ECS_SHOPPRICE"><i>￥</i>{{ goodsinfo.sale }}</span
                    ><del>市场价：￥{{ goodsinfo.price }}</del>
                  </dd>
                </dl>
                <dl>
                  <dt>总 重 量：</dt>
                  <dd>{{ goodsinfo.weight }}克</dd>
                </dl>
                <dl>
                  <dt>规&nbsp;&nbsp;&nbsp;&nbsp;格：</dt>
                  <dd>
                    <div class="item selected">
                      <b></b><a href="#none" title="小礼盒">小礼盒</a>
                    </div>
                    <div class="item">
                      <b></b><a href="#none" title="普通包装">普通包装</a>
                    </div>
                    <div class="item">
                      <b></b><a href="#none" title="大礼盒">大礼盒</a>
                    </div>
                    <div class="item">
                      <b></b><a href="#none" title="铁盒装">铁盒装</a>
                    </div>
                  </dd>
                </dl>
                <dl>
                  <dt>上架时间：</dt>
                  <dd>{{ goodsinfo.gtime }}</dd>
                </dl>
                <div class="Appraisal">
                  <p>销售评价</p>
                  <a>1234</a>
                </div>
              </div>
            </div>
            <div class="buyinfo" id="detail_buyinfo">
              <dl>
                <dt>数量</dt>
                <dd>
                  <div class="choose-amount left">
                    <a
                      class="btn-reduce"
                      href="javascript:;"
                      onclick="setAmount.reduce('#buy-num')"
                      >-</a
                    >
                    <a
                      class="btn-add"
                      href="javascript:;"
                      onclick="setAmount.add('#buy-num')"
                      >+</a
                    >
                    <input
                      class="text"
                      id="buy-num"
                      value="1"
                      onkeyup="setAmount.modify('#buy-num');"
                    />
                  </div>
                  <div class="P_Quantity">剩余：50000件</div>
                </dd>
                <dd>
                  <div class="wrap_btn">
                    <a
                      href="javascript:addToCart_bak(92)"
                      class="wrap_btn1"
                      title="加入购物车"
                    ></a>
                    <a
                      href="javascript:addToCart(92)"
                      class="wrap_btn2"
                      title="立即购买"
                    ></a>
                  </div>
                </dd>
              </dl>
            </div>
            <div class="Guarantee clearfix">
              <dl>
                <dt>支付方式</dt>
                <dd><em></em>货到付款（部分地区）</dd>
                <dd><em></em>在线支付</dd>
                <dd>
                  <div class="payment" id="payment">
                    <a href="javascript:void(0);" class="paybtn"
                      >支付方式<span class="iconDetail"></span
                    ></a>
                    <ul>
                      <li>货到付款</li>
                      <li>礼品卡支付</li>
                      <li>网上支付</li>
                      <li>银行转账</li>
                    </ul>
                  </div>
                </dd>
              </dl>
            </div>
          </form>
        </div>
        <!--推荐-->
        <div class="p_right_info">
          <div class="Brands">
            <a href="#"
              ><img
                src="../assets/products/logo/logo.jpg"
                width="120"
                height="60"
            /></a>
            <h5>红尊</h5>
          </div>
          <div class="Recommend">
            <div class="title_name">同类产品推荐</div>
            <div class="Recommend_list">
              <ul>
                <li class="clearfix">
                  <div class="pic_img">
                    <a href=""
                      ><img
                        src="../assets/products/p_3.jpg"
                        data-bd-imgshare-binded="1"
                    /></a>
                  </div>
                  <div class="r_content">
                    <div class="title">
                      <a href="#">金龙鱼 东北大米 蟹稻共生 盘锦大米5KG</a>
                    </div>
                    <div class="p_Price">￥32.50</div>
                  </div>
                </li>
                <li class="clearfix">
                  <div class="pic_img">
                    <a href=""
                      ><img
                        src="../assets/products/p_17.jpg"
                        data-bd-imgshare-binded="1"
                    /></a>
                  </div>
                  <div class="r_content">
                    <div class="title">
                      <a href="#">金龙鱼 东北大米 蟹稻共生 盘锦大米5KG</a>
                    </div>
                    <div class="p_Price">￥32.50</div>
                  </div>
                </li>
                <li class="clearfix">
                  <div class="pic_img">
                    <a href=""
                      ><img
                        src="../assets/products/p_24.jpg"
                        data-bd-imgshare-binded="1"
                    /></a>
                  </div>
                  <div class="r_content">
                    <div class="title">
                      <a href="#">金龙鱼 东北大米 蟹稻共生 盘锦大米5KG</a>
                    </div>
                    <div class="p_Price">￥32.50</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsData: [
        {
          id: 111,
          pic: require("../assets/products/p_1.jpg"),
          title: "乐品乐茶 碧螺春2015新茶茶叶绿茶一级洞庭山明前春茶礼盒125g*2",
          subtitle: "◆买即送大麦茶◆满2件减10元再赠2罐大麦茶◆礼品袋茶包免费赠◆",
          price: 123,
          sale: 80,
          weight: 110,
          gtime: "2021-11-12",
        },
        {
          id: 112,
          pic: require("../assets/products/p_2.jpg"),
          price: 233,
          sale: 150,
          weight: 120,
          title: "乐品乐茶 碧螺春2015新茶茶叶绿茶一级洞庭山明前春茶礼盒125g*3",
          subtitle: "◆买即送大麦茶",
          gtime: "2021-11-10",
        },
        {
          id: 113,
          pic: require("../assets/products/p_3.jpg"),
          price: 123,
          sale: 80,
          weight: 110,
          title: "乐品乐茶 碧螺春2015新茶茶叶绿茶一级洞庭山明前春茶礼盒125g*5",
          subtitle: "◆买即送大麦茶◆满2件减10元",
          gtime: "2021-08-12",
        },
        {
          id: 114,
          pic: require("../assets/products/p_4.jpg"),
          price: 233,
          sale: 150,
          weight: 120,
          title: "乐品乐茶 碧螺春2015新茶茶叶绿茶一级洞庭山明前春茶礼盒125g*8",
          subtitle: "◆买即送大麦茶◆满2件减10元再赠2罐大麦茶◆礼品袋茶包免费赠◆",
          gtime: "2021-09-10",
        },
      ],
      goodsinfo: {},
    };
  },
  //生命周期 组件创建 this.$route:当前路由
  created() {
    const id = this.$route.query.id;
    //获取id后，调用后台接口，
    this.goodsinfo = this.goodsData.filter((item) => item.id == id)[0];
  },
  methods: {
    addCollect() {
      if (!sessionStorage.getItem("web22")) {
        this.$message.info("请先登录");
        this.$router.push("/login");
      } else {
        let flag = this.$store.state.collectData.some(
          (item) => item.id == this.goodsinfo.id
        );
        if (flag) {
          this.$message.error("已添加过");
        } else {
          this.$store.dispatch("setCollectDataAction", this.goodsinfo);
          this.$message.info("添加成功");
        }
      }
    },
  },
};
</script>

<style>
</style>