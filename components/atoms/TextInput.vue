<template lang="pug">
label {{ label }}
  input(
    :type='type'
    :name='name'
    :placeholder='placeholder'
  )
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

const inputTypes = ['text', 'email', 'password']

interface Props {
  label: string
  name: string
  type: 'text' | 'email' | 'password'
  placeholder: 'text'
}

export default defineComponent({
  props: {
    label: {
      type: String as PropType<Props['label']>,
      default: ''
    },
    name: {
      type: String as PropType<Props['name']>,
      default: ''
    },
    type: {
      type: String as PropType<Props['type']>,
      default: 'text',
      validator: (value: string): boolean =>
        inputTypes.includes(value)
    },
    placeholder: {
      type: String as PropType<Props['placeholder']>,
      default: ''
    }
  }
})
</script>
