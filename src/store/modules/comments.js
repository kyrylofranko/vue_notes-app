import api from '../../helpers/api';

export default {
  actions: {
    async fetchComments({ commit }) {
      const { data } = await api().get('/comments.json');
      const comments = Object.keys(data).map((key) => ({
        ...data[key],
        id: key,
      }));

      commit('updateComments', comments);
    },
    async loadCommentToServer({ dispatch }, comment) {
      await api().post('/comments.json', comment);

      dispatch('fetchComments');
      dispatch('fetchNotes');
    },
  },
  mutations: {
    updateComments(state, comments) {
      state.comments = comments;
    },
  },
  state: {
    comments: [],
  },
  getters: {
    allComments: (state) => state.comments,
  },
};
