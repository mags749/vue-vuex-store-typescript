<template>
  <div id="app">
    <h1>ToDo Example using Vue.js,</h1>
    <h1>Store with Typescipt</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/styles/main";

#app {
  align-items: center;
  color: $text-color;
  display: flex;
  height: 100vh;
  position: relative;
  text-align: center;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 45px;
    color: #1c1b3d;
    &:not(:first-child) {
      margin-top: 0px;
      margin-bottom: 5rem;
    }
  }
}
</style>
