<template>
  <el-form @submit.prevent="submit" class="form">
    <el-form-item label="Title" required>
      <el-input
        type="text"
        v-model="name"
        required
      >
      </el-input>
    </el-form-item>
    <el-form-item label="What to note?" required>
      <el-input
        type="textarea"
        v-model="content"
        required
      >
      </el-input>
    </el-form-item>
    <el-button
      type="primary"
      class="form__button"
      v-on:click="submit"
      :disabled="isDisabled"
    >Add
    </el-button>
  </el-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AddNoteForm',
  computed: {
    ...mapGetters(['allNotes']),
    isDisabled() {
      return !this.name.trim() || !this.content.trim();
    },
  },
  data() {
    return {
      name: '',
      content: '',
    };
  },
  methods: {
    ...mapActions({ loadToServer: 'loadNoteToServer' }),
    submit() {
      const newNote = {
        name: this.name,
        content: this.content,
      };

      this.loadToServer(newNote);

      this.name = '';
      this.content = '';
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
