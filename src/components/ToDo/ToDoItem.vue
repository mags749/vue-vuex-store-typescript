<template>
  <div class="todoItem">
    <label class="checkbox path">
      <input
        type="checkbox"
        :value="toDo.isCompleted"
        :checked="toDo.isCompleted === true"
        @change="changeCompleted"
        :disabled="toDo.isArchieved"
      />
      <svg viewBox="0 0 21 21">
        <path
          d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"
        ></path>
      </svg>
    </label>
    <label
      :class="toDo.isArchieved ? 'todoItemName striked' : 'todoItemName'"
      >{{ toDo.text }}</label
    >
    <img
      src="@/assets/archive.svg"
      v-if="!toDo.isArchieved"
      @click="archieveItem"
    />
    <img
      src="@/assets/plus-square.svg"
      v-if="toDo.isArchieved"
      @click="archieveItem"
    />
    <img src="@/assets/trash-2.svg" @click="deleteItem" />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import ToDo from "@/model/ToDo";

@Component({
  components: {},
})
export default class ToDoItem extends Vue {
  @Prop() private readonly index: number;
  @Prop() private readonly toDo: ToDo;

  @Emit("changeFlag")
  changeFlag(id: number, action: string) {}

  changeCompleted(e: any) {
    this.changeFlag(this.index, "TOGGLE");
  }

  archieveItem(e: any) {
    this.changeFlag(this.index, "ARCHIEVE");
  }

  deleteItem(e: any) {
    this.changeFlag(this.index, "DELETE");
  }
}
</script>

<style lang="scss">
@import "@/styles/main";

.todoItem {
  display: flex;
  flex-direction: row;
  padding: 15px 0px;

  &:not(:first-child) {
    border-top: 1px solid darken(#fbc66b, 15%);
  }

  label {
    text-align: left;
    &:not(:first-child) {
      margin-top: -4px;
      padding-left: 10px;
      font-size: 20px;
    }
  }

  .todoItemName {
    flex: 2;
  }

  .striked {
    text-decoration: line-through;
  }

  img {
    padding: 0px 5px;
    margin-top: -4px;

    &:active {
      background: darken(#fbc66b, 15%);
      border-radius: 4px;
    }
  }
}

.checkbox {
  --background: #fff;
  --border: #e8ebf1;
  --border-hover: #bbc1e1;
  --border-active: #1e2235;
  --tick: #fff;
  position: relative;
  input,
  svg {
    width: 21px;
    height: 21px;
    display: block;
  }
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    outline: none;
    background: var(--background);
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    border-radius: 4px;
    transition: box-shadow 0.3s;
    box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));
    &:hover {
      --s: 2px;
      --b: var(--border-hover);
    }
    &:checked {
      --b: var(--border-active);
    }
  }
  svg {
    pointer-events: none;
    fill: none;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: var(--stroke, var(--border-active));
    position: absolute;
    top: 0px;
    width: 21px;
    height: 21px;
    transform: scale(var(--scale, 1)) translateZ(0);
  }
  &.path {
    input {
      &:checked {
        --s: 2px;
        transition-delay: 0.4s;
        & + svg {
          --a: 16.1 86.12;
          --o: 102.22;
        }
      }
    }
    svg {
      stroke-dasharray: var(--a, 86.12);
      stroke-dashoffset: var(--o, 86.12);
      transition: stroke-dasharray 0.6s, stroke-dashoffset 0.6s;
    }
  }
}
</style>
