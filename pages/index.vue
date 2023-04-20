<template lang="pug">
AppLayout
  h1 Welcome!
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  middleware: ['auth']
})
</script>
