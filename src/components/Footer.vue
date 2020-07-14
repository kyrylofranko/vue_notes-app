<template>
  <el-footer class="footer">
    <a class="footer__link"
       href="http://github.com/kiramarks"
    >
      Developed by Kira Marks</a>
  </el-footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
  @import "../styles/vars";

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $primary-color;
    border-top: solid 1px #e6e6e6;

    &__link {
      font-size: 14px;
      color: white;

      &:visited {
        color: white;
      }
    }
  }
</style>
