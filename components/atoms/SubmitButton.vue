<template lang="pug">
button(type="submit") {{ text }}
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  props: {
    text: {
      type: String as PropType<string>,
      default: 'Submit'
    }
  }
})
</script>
