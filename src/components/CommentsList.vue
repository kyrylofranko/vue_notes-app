<template>
  <div class="comments-list">
    <CommentItem v-for="comment in comments"
             :key="comment.id"
             :comment="comment"
    />
  </div>
</template>

<script>
import CommentItem from '@/components/CommentItem';

export default {
  name: 'CommentList',
  props: { comments: Array },
  components: { CommentItem },
};
</script>

<style scoped>
  .comments-list {
    display: grid;
    grid-template-columns: repeat(2, 290px);
    gap: 20px;
  }
</style>
