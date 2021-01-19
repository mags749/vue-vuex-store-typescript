import { ActionTree, ActionContext } from "vuex";
import RootState from "@/model/RootState";
import * as types from "./mutation-types";
import ToDos from "@/model/ToDos";
import ToDo from "@/model/ToDo";

export const actions: ActionTree<ToDos, RootState> = {
  updateToDo({ commit }, todos: ToDos): any {
    commit(types.UPDATE_TODO, todos);
  },
  addToDo({ commit }, todo: ToDo): any {
    commit(types.ADD_TODO, todo);
  },
};
