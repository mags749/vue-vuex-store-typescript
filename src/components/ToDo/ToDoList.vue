<template>
  <div class="todoList">
    <form @submit="formSubmit">
      <input
        type="text"
        name="todoName"
        v-model="todoName"
        class="todoName"
        placeholder="ToDo Item"
        autocomplete="off"
      />
    </form>
    <div :class="entries.length > 0 ? 'todoMargin' : ''">
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

  changeState(id: number, action: string): void {
    switch (action) {
      case "TOGGLE":
        this.entries[id].isCompleted = !this.entries[id].isCompleted;
        break;
      case "ARCHIEVE":
        this.entries[id].isArchieved = !this.entries[id].isArchieved;
        break;
      case "DELETE":
        this.entries.splice(id);
      default:
        break;
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/main";

.todoList {
  background: #fbc66b;
  padding: 50px;
  border-radius: 4px;
}

.todoName {
  border: 1px solid #e8ebf1;
  padding: 10px;
  border-radius: 4px;
  font-size: 20px;
  width: 400px;

  &:focus {
    outline: none;
    border: 2px solid darken(#e8ebf1, 10%);
  }
}

.todoMargin {
  margin-top: 20px;
  overflow-y: auto;
  max-height: 55vh;
}
</style>
