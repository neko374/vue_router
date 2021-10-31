<template>
  <div class="menu">
    <span v-for="(item, index) in menu" :key="index">{{ item }}</span>
  </div>
</template>

<script>
export default {
  props: ["menu"],
};
</script>

<style>
</style>