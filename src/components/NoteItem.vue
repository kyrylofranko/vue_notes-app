<template>
  <el-card shadow="hover">
    <div slot="header" class="note-item__clearfix">
      <span class="note-item__name">
        <router-link
          class="note-item__link"
          :to="'/notes/' + note.id"
        >
          {{note.name}}
        </router-link>
      </span>
      <i
        style="float: right; cursor: pointer"
        class="el-icon-delete col-sm-3"
        @click="handleDelete(note.id)"
      ></i>
    </div>
    <p class="note-item__content">
      {{note.content}}
    </p>
    <el-badge
      :value="note.comments.length"
      class="item comments"
      :hidden="!note.comments.length"
    >
      <router-link :to="'/notes/' + note.id">
        <el-button
          class="comments__button"
          size="small"
        >
          comments
        </el-button>
      </router-link>
    </el-badge>
  </el-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Note',
  props: {
    note: Object,
  },
  methods: {
    ...mapActions(['deleteNoteFromServer']),
    handleDelete(id) {
      this.deleteNoteFromServer(id);
    },
  },
};
</script>

<style lang="scss">
  .note-item {
    &__name {
      cursor: pointer;
    }

    &__content {
      margin-bottom: 20px;
      font-size: 14px;
    }

    &__clearfix:before,
    &__clearfix:after {
      display: table;
      content: "";
    }

    &__clearfix:after {
      clear: both
    }
  }
</style>
