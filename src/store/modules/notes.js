import api from '../../helpers/api';

export default {
  actions: {
    async fetchNotes({ commit, rootGetters }) {
      const { data } = await api().get('/notes.json');
      const notes = Object.keys(data).map((key) => ({
        ...data[key],
        id: key,
        comments: rootGetters.allComments
          .filter((comment) => comment.note === key),
      }));

      commit('updateNotes', notes);
    },
    async loadNoteToServer({ dispatch }, note) {
      await api().post('/notes.json', note);

      dispatch('fetchNotes');
    },
    async deleteNoteFromServer({ commit }, id) {
      await api().delete(`/notes/${id}.json`);

      commit('deleteNote', id);
    },
    async patchNoteToServer({ dispatch }, { id, note }) {
      await api().patch(`/notes/${id}.json`, note);

      dispatch('fetchNotes');
    },
  },
  mutations: {
    updateNotes(state, notes) {
      state.notes = notes;
    },
    deleteNote(state, id) {
      state.notes = state.notes.filter((note) => note.id !== id);
    },
  },
  state: {
    notes: [],
  },
  getters: {
    allNotes: (state) => state.notes,
    notesCount: (state) => state.notes.length,
  },
};
