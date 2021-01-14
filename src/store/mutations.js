export default {
  addDino: (state, payload) => {
    state.mydinosaurs = [...state.mydinosaurs, payload];
  },
  deleteDino: (state, id) => {
    let newMyDinosaurs = state.mydinosaurs.filter(d => d.id !== id);
    state.mydinosaurs = newMyDinosaurs;
  },
};
