export default {
  addDino: (state, payload) => {
    state.mydinosaurs.push(payload);
    localStorage.setItem("mydinos", state.mydinosaurs);
  },
};
