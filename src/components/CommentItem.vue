<template>
  <el-card shadow="hover">
    <div class="comment">
      <div class="comment__author">
        <i class="comment__icon el-icon-user"></i>
        {{comment.author}}
      </div>
      <div class="comment__content">
        {{comment.content}}
      </div>
      <div class="comment__date">
        {{comment.created_at}}
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Comment',
  props: ['comment'],
};
</script>

<style lang="scss" scoped>
  .comment {
    display: flex;
    flex-direction: column;

    &__author {
      display: flex;
    }

    &__icon {
      margin-right: 5px;
    }

    &__content {
      margin-top: 10px;
      text-align: left;
    }

    &__date {
      display: flex;
      align-self: flex-end;
      font-size: 14px;
    }
  }
</style>
