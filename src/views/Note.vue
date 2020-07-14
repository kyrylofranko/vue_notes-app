<template>
  <div class="wrap">
    <Breadcrumbs />
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>{{note.name}}</span>
        <router-link :to="'/edit/' + note.id">
          <span style="float: right">
            <el-button type="primary" icon="el-icon-edit"></el-button>
          </span>
        </router-link>
      </div>
      <p class="note__content">
        {{note.content}}
      </p>
    </el-card>
    <h2 v-if="note.comments && note.comments.length">
      Comments ({{note.comments.length}})
    </h2>
    <p v-else class="no-comments-info">
      No comments yet.<br>Add the first comment 🚀
    </p>
    <CommentsList :comments="note.comments" />
    <h2 class="section__heading">Add a comment</h2>
    <AddCommentForm :note="note.id" :noteItem="note"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AddCommentForm from '../components/AddCommentForm';
import Breadcrumbs from '../components/Breadcrumbs';
import CommentsList from '../components/CommentsList';

export default {
  components: {
    CommentsList, Breadcrumbs, AddCommentForm,
  },
  methods: mapActions(['fetchNotes', 'fetchComments']),
  async mounted() {
    await this.fetchNotes();
    await this.fetchComments();
  },
  computed: {
    ...mapGetters(['allNotes']),
    note() {
      return this.allNotes.find((note) => note.id === this.$route.params.id) || {};
    },
  },
};
</script>

<style scoped lang="scss">
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .section__heading {
    margin-top: 40px;
  }

  .box-card {
    width: 600px;
    margin-bottom: 50px;
  }

  .no-comments-info {
    margin-top: 30px;
    margin-bottom: 30px;
  }
</style>
