<template>
    <div class="Reg_log_style">
      <div class="logo">
        <a href="#"><img src="../assets/images/logo.png" /></a>
      </div>
      <div class="login_style">
        <div class="left_img">
          <img src="../assets/images/bg_name_03.png" />
        </div>
        <div class="right_img">
          <img src="../assets/images/bg_name_05.png" />
        </div>
        <form id="myform" class="sign_area" autocomplete="off">
          <div class="title_name"><span>登录</span></div>
          <div class="login_m_1">
            <div class="add_login">
              <ul>
                <li class="frame_style">
                  <label class="user_icon"></label
                  ><input name="" v-model="uname" type="text" id="user_text" placeholder="用户名" />
                </li>
                <li class="frame_style">
                  <label class="password_icon"></label
                  ><input name="" v-model="upass" type="password" id="tbPassword" placeholder="密码" />
                </li>
              </ul>
              <div class="auto_login clearfix">
                <p class="clearfix">
                  <a id="check_agreement" href="#" class="check_agreement"
                    >自动登录</a
                  >
                  <input id="autoLoginCheck" type="hidden" />
                  <span id="agreement_tips" class="auto_tips" style=""
                    >请勿在公用电脑上启用</span
                  >
                </p>
                <a href="#" target="_blank" class="forget_pswd" tabindex="-1"
                  >忘记密码？</a
                >
                <div class="center clearfix">
                  <a class="btn_pink" id="btn_signin" href="javascript:void(0)"
                    @click="login()">立即登录</a
                  >
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="Login_Method">
          <div class="title"><span>第三方登录方式</span></div>
          <div>
            <a href="#"><img src="../assets/images/l_1.png" /></a
            ><a href="#"><img src="../assets/images/l_2.png" /></a
            ><a href="#"><img src="../assets/images/l_4.png" /></a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      uname:"",
      upass:""
    }
  },
  methods:{
    login(){
      if(this.uname==="admin"&&this.upass==="123"){
        this.$message.success("登录成功");
        sessionStorage.setItem("web22",this.uname);
        this.$store.dispatch("setUserInfoAction",this.uname)
        // 编程式导航
        this.$router.push("/");
      }else{
        this.$message.error("用户名或者密码出错");
      }
    }
  }
};
</script>

<style>
</style>