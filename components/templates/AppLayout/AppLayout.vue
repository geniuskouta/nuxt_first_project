<template lang="pug">
Container
  slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Container } from './styles'
export default defineComponent({
  components: {
    Container
  }
})
</script>
