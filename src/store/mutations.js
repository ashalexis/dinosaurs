export default {
  addDino: (state, payload) => {
    state.mydinosaurs = [...state.mydinosaurs, payload];
  },
};
