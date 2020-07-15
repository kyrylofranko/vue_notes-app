import Vue from 'vue';
import VueRouter from 'vue-router';
import AllNotes from '../views/AllNotes.vue';
import AddNote from '../views/AddNote';
import EditNote from '../views/EditNote';
import Note from '../views/Note';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'AllNotes',
    component: AllNotes,
  },
  {
    path: '/add',
    name: 'AddNote',
    component: AddNote,
  },
  {
    path: '/edit/:id',
    name: 'EditNote',
    component: EditNote,
  },
  {
    path: '/notes',
    redirect: '/',
  },
  {
    path: '/notes/:id',
    name: 'Note',
    component: Note,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/vue_notes-app/',
  routes,
});

export default router;
