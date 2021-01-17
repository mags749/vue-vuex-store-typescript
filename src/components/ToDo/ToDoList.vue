<template>
  <div>
    <form @submit="formSubmit">
      <input type="text" name="todoName" v-model="todoName" />
    </form>
    <div>
      <ToDoItem
        v-for="(todo, index) in entries"
        :key="index"
        :index="index"
        :toDo="todo"
        @changeFlag="changeState"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ToDo from "@/model/ToDo";
import ToDoItem from "./ToDoItem.vue";

@Component({
  components: {
    ToDoItem,
  },
})
export default class ToDoList extends Vue {
  todoName: string = "";
  entries: Array<ToDo> = [];

  formSubmit(e: any) {
    e.preventDefault();
    const todo: ToDo = {
      isCompleted: false,
      text: this.todoName,
      isArchieved: false,
    };
    this.entries.push(todo);
    this.todoName = "";
  }

  changeState(id: number): void {
    this.entries[id].isCompleted = !this.entries[id].isCompleted;
  }
}
</script>

<style lang="scss">
@import "@/styles/main";
</style>
