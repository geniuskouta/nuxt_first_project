<template lang="pug">
SubmitBtn(type="submit") {{ text }}
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { SubmitBtn } from './styles'
export default defineComponent({
  components: {
    SubmitBtn
  },
  props: {
    text: {
      type: String as PropType<string>,
      default: 'Submit'
    }
  }

})
</script>
