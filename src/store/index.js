import Vuex from "vuex";
import Vue from "vue";
import { snackbar } from "@/store/snackbar";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: { snackbar: snackbar },
});
