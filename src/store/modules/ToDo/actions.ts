import { ActionTree } from "vuex";
import RootState from "@/model/RootState";
import * as types from "./mutation-types";
import ToDos from "@/model/ToDos";

export const actions: ActionTree<ToDos, RootState> = {
  updateToDo({ commit }): any {},
};
