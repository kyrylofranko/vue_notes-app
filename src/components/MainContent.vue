<template>
  <main class="main">
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'MainContent',
};
</script>

<style scoped>
  .main {
    max-width: 600px;
    min-height: 80vh;
    margin: 0 auto;
    padding: 30px 60px 60px 60px;
  }
</style>
