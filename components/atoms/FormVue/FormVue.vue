<template lang="pug">
StyledForm(
  @submit.prevent="onSubmit"
)
  slot
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { StyledForm } from './styles'
interface Props {
  submit: () => void
}

export default defineComponent({
  components: {
    StyledForm
  },
  props: {
    submit: {
      type: Function as PropType<Props['submit']>,
      required: true
    }
  },
  methods: {
    onSubmit () {
      this.submit()
    }
  }
})
</script>
