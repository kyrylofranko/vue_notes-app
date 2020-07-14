<template>
  <el-form @submit.prevent="submit" class="form">
    <el-form-item label="New name" required>
      <el-input
        type="text"
        v-model="tempName"
      >
      </el-input>
    </el-form-item>
    <el-form-item label="New content" required>
      <el-input
        type="textarea"
        v-model="tempContent"
      >
      </el-input>
    </el-form-item>
    <el-button
      type="primary"
      class="form__button"
      v-on:click="submit"
      :disabled="isDisabled"
    >Save
    </el-button>
  </el-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'EditNoteForm',
  data() {
    return {
      tempName: '',
      tempContent: '',
    };
  },
  async mounted() {
    await this.fetchNotes();

    this.tempName = this.note.name;
    this.tempContent = this.note.content;
  },
  computed: {
    ...mapGetters(['allNotes']),
    note() {
      return this.allNotes.find((note) => note.id === this.$route.params.id) || {};
    },
    isDisabled() {
      return !this.tempName.trim() || !this.tempContent.trim();
    },
  },
  methods: {
    ...mapActions(['patchNoteToServer', 'fetchNotes']),
    submit() {
      const editedNote = {
        name: this.tempName,
        content: this.tempContent,
      };

      this.patchNoteToServer({
        id: this.note.id,
        note: editedNote,
      });

      this.$router.back();
    },
  },
};
</script>

<style lang="scss">
  .form {
    width: 600px;

    &__button {
      width: 100%;
    }
  }
</style>
