import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import todos from "./modules/ToDo";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
  },
});
