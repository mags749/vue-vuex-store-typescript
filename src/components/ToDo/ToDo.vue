<template>
  <div>
    <input type="text" name="todoName" />
    <div>
        List to be displayed here
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class ToDo extends Vue {
}
</script>

<style lang="scss">
@import "@/styles/main";

</style>
