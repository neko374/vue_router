<template>
  <div>
    <div class="user_style clearfix">
      <div class="user_center">
        <!-- <user-left></user-left> -->
        <!--右侧样式-->
        <div class="right_style">
          <div class="info_content">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import UserLeft from "../components/UserLeft.vue";
export default {
  // components: { UserLeft },
};
</script>

<style>
</style>