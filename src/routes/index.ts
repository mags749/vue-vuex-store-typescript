import Vue from "vue";
import Router from "vue-router";
import ToDo from "@/components/ToDo/ToDoList.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/todo",
      name: "todo",
      component: ToDo,
    },
    { path: "*", redirect: "/todo" },
  ],
  mode: "history",
  linkActiveClass: "active",
});

export default router;
