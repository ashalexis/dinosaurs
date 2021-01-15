export default {
  addDino: ({ commit }, payload) => {
    commit("addDino", payload);
  },
  deleteDino: ({ commit }, payload) => {
    commit("deleteDino", payload);
  },
};
