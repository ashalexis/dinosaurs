export default {
  dinoSort: (state) => {
    state.dinosaurs.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  },
};
