<template lang="pug">
form(
  @submit.prevent="onSubmit"
)
  slot
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface Props {
  submit: (e: FormDataEvent) => void
}

export default defineComponent({
  props: {
    submit: {
      type: Function as PropType<Props['submit']>,
      required: true
    }
  },
  methods: {
    onSubmit (e: FormDataEvent) {
      this.submit(e)
    }
  }
})
</script>
