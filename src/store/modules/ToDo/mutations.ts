import { MutationTree } from "vuex";
import ToDos from "@/model/ToDos";
import * as types from "./mutation-types";
import ToDo from "@/model/ToDo";

export const mutations: MutationTree<ToDos> = {
  [types.UPDATE_TODO](state: ToDos, payload: ToDos) {
    state.toDoList = [...payload.toDoList];
  },
  [types.ADD_TODO](state: ToDos, payload: ToDo) {
    state.toDoList.push(payload);
  },
};
