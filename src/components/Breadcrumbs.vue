<template>
  <el-breadcrumb class="breadcrumbs" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item
      :to="{ path: '/' }"
    >
      <i class="el-icon-s-home"></i>
    </el-breadcrumb-item>
    <Breadcrumb
      v-for="(crumb, i) of preparedBreadcrumbs"
      :key="crumb"
      :link="crumb"
      :label="preparedLabels[i]"
    />
  </el-breadcrumb>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb';

export default {
  name: 'Breadcrumbs',
  computed: {
    preparedLabels() {
      return this.$route.path.split('/').slice(1);
    },
    preparedBreadcrumbs() {
      return this.preparedLabels
        .reduce((acc, item) => [...acc, `${acc}/${item}`], []);
    },
  },
  components: {
    Breadcrumb,
  },
};
</script>

<style scoped>
  .breadcrumbs {
    margin-bottom: 30px;
    align-self: flex-start;
  }

  .el-breadcrumb::after {
    display: none;
  }
</style>
