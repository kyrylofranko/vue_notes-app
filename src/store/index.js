import Vue from 'vue';
import Vuex from 'vuex';
import notes from './modules/notes';
import comments from './modules/comments';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    comments,
    notes,
  },
});
