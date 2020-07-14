<template>
  <el-button
    type="text"
    class="button"
    @click="goBack"
  >
    <i class="el-icon-back" />
  </el-button>
</template>

<script>
export default {
  name: 'BackBtn',
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
  .el-button {
    padding: 5px;
  }

  .el-icon-back {
    font-size: 1.5rem;
  }
</style>
