<template>
  <div class="container">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      :rules="rules"
      class="form"
    >
      <el-form-item label="Author" prop="author" required>
        <el-input
          v-model="ruleForm.author"
          placeholder="write a author...">
        </el-input>
      </el-form-item>
      <el-form-item label="Comment" prop="content" required>
        <el-input
          type="textarea"
          v-model="ruleForm.content"
          placeholder="write a comment..">
        </el-input>
      </el-form-item>
      <el-button
        class="form__button"
        type="primary"
        @click="submitForm('ruleForm')"
      >
        Add
      </el-button>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddCommentForm',
  data() {
    return {
      ruleForm: {
        author: '',
        content: '',
      },
      rules: {
        author: [
          { required: true, message: 'Please input author', trigger: 'blur' },
          {
            min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur',
          },
        ],
        content: [
          { required: true, message: 'Please input comment', trigger: 'blur' },
        ],
      },
    };
  },
  props: {
    note: String,
    noteItem: Object,
  },
  methods: {
    ...mapActions(['loadCommentToServer']),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const newComment = {
            author: this.ruleForm.author,
            content: this.ruleForm.content,
            note: this.note,
            created_at: new Date().toLocaleDateString().replace(/\./g, '/'),
          };

          this.loadCommentToServer(newComment);

          this.$refs[formName].resetFields();
        } else {
          console.warn('error');
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .form {
    width: 600px;
  }
</style>
