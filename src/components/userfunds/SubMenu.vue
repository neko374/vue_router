<template>
  <dd>
    <ul>
      <li v-for="item in menu" :key="item.id">
        <router-link :to="item.path">{{ item.subtitle }}</router-link>
      </li>
    </ul>
  </dd>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>