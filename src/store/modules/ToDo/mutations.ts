import { MutationTree } from "vuex";
import ToDos from "@/model/ToDos";
import * as types from "./mutation-types";

export const mutations: MutationTree<ToDos> = {
  [types.UPDATE_TODO](state: ToDos, payload: ToDos) {},
};
