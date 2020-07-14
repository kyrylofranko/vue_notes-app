<template>
  <div class="list-container">
    <ul class="notes-list">
      <Note
        v-for="note of allNotes"
        :key="note.id"
        :note="note"
      />
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Note from './NoteItem';

export default {
  name: 'NotesList',
  computed: mapGetters(['allNotes']),
  components: { Note },
};
</script>

<style lang="scss">
  .list-container {
    display: flex;
    justify-content: center;
  }
  .notes-list {
    display: grid;
    grid-template-columns: repeat(4, 260px);
    gap: 20px;
  }
</style>
