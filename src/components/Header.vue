<template>
  <el-header class="header">
    <el-menu
      background-color="#6495ed"
      text-color="white"
      active-text-color="#ffd04b"
      mode="horizontal"
      :router="true"
      :default-active="activeLink"
    >
      <el-menu-item index="/">
        {{`All Notes ${notesLength ? `(${notesLength})` : ''}`}}
      </el-menu-item>
      <el-menu-item index="/add">
        Add Note
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      activeLink: null,
    };
  },
  computed: mapGetters({ notesLength: 'notesCount' }),
  watch: {
    $route(to) {
      this.activeLink = to.path;
    },
  },
  methods: mapActions(['fetchNotes']),
  mounted() {
    this.activeLink = this.$route.path;
  },
};
</script>

<style lang="scss">
  @import "../styles/vars";

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $primary-color;
    border-bottom: solid 1px #e6e6e6;
  }

  .nav {
    background-color: $primary-color;
    color: white;
  }
</style>
