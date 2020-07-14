<template>
  <el-breadcrumb-item :to="{ path: link }">{{label}}</el-breadcrumb-item>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    link: String,
    label: String,
  },
};
</script>

<style scoped>

</style>
