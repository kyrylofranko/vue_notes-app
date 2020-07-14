<template>
  <div id="app">
    <Header />
    <MainContent />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default {
  components: { Footer, MainContent, Header },
  methods: mapActions(['fetchNotes', 'fetchComments']),
  async mounted() {
    await this.fetchComments();
    await this.fetchNotes();
  },
};
</script>

<style lang="scss">
  @import './styles';

  #app {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .el-button--primary {
    background-color: $primary-color;
    border-color: $primary-color;
  }
</style>
