<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import "@/styles/main";

#app {
  align-items: center;
  color: $text-color;
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;
  text-align: center;
  width: 100vw;
  overflow: hidden;
}
</style>
