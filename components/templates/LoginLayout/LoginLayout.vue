<template lang="pug">
Container
  slot
</template>

<script>
import { defineComponent } from 'vue'
import { Container } from './styles'
export default defineComponent({
  components: {
    Container
  }
})
</script>
