<template>
  <section class="section__form">
    <Breadcrumbs />
    <AddNoteForm />
  </section>
</template>

<script>
import AddNoteForm from '../components/AddNoteForm';
import Breadcrumbs from '../components/Breadcrumbs';

export default {
  name: 'AddNote',
  components: {
    Breadcrumbs,
    AddNoteForm,
  },
};
</script>

<style lang="scss">
  .section {
    &__form {
      display: flex;
      flex-direction: column;
      align-self: center;
      align-items: center;
    }
  }
</style>
