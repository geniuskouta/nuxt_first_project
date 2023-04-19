<template lang="pug">
StyledSelect(v-model="$i18n.locale")
  StyledOption(
    v-for="lang in $i18n.locales"
    :key="lang.code"
    :value="lang.code"
  ) {{ lang.name }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { StyledSelect, StyledOption } from './styles'

export default defineComponent({
  components: {
    StyledSelect,
    StyledOption
  }
})
</script>
