import Vue from "vue";
import Router from "vue-router";
import ToDo from "@/components/ToDo/ToDo.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "",
      name: "todo",
      component: ToDo,
    },
  ],
  mode: "history",
  linkActiveClass: "active",
});

export default router;
