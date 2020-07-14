<template>
  <section class="section__form">
    <div class="section__back-btn">
      <BackBtn />
    </div>
    <div class="section__form-edit">
      <EditNoteForm />
    </div>
  </section>
</template>

<script>
import EditNoteForm from '../components/EditNoteForm';
import BackBtn from '../components/BackBtn';

export default {
  name: 'EditNote',
  components: { BackBtn, EditNoteForm },
};
</script>

<style lang="scss">
  @import "../styles/vars";

  .section {
    &__back-btn {
      color: $primary-color;
      align-self: flex-start;
    }
    &__form-edit {
      margin-top: 20px;
    }
  }
</style>
