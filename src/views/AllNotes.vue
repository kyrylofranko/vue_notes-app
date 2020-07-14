<template>
  <div class="container">
    <NotesList />
  </div>
</template>

<script>
import NotesList from '../components/NotesList';

export default {
  name: 'AllNotes',
  components: {
    NotesList,
  },
};
</script>

<style lang="scss">
  .container {
    margin: 0 auto;
  }
</style>
