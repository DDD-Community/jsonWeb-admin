export const snackbar = {
  namespaced: true,
  state: {
    show: false,
    color: "red",
    message: "",
  },
  mutations: {
    showMessage(state, { message, color }) {
      state.show = true;
      state.message = message;
      state.color = color;
      setTimeout(() => {
        state.show = false;
      }, 2000);
    },
  },
  getters: {},
  actions: {
    showMessage({ commit }, { message, color }) {
      commit("showMessage", { message, color });
    },
  },
};
