import { Module } from "vuex";
import RootState from "@/model/RootState";
import ToDos from "@/model/ToDos";
import { actions } from "./actions";
import { mutations } from "./mutations";

export const state: ToDos = {
  toDoList: [],
};

const namespaced: boolean = true;

const todos: Module<ToDos, RootState> = {
  namespaced,
  state,
  mutations,
  actions,
};

export default todos;
