<template lang="pug">
StyledLabel {{ label }}
  Required(v-if="required") *
  StyledInput(
    :value='textValue'
    @input='update'
    :type='type'
    :name='name'
    :placeholder='placeholder'
    :required='required'
  )
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { StyledInput, StyledLabel, Required } from './styles'
const inputTypes = ['text', 'email', 'password']

interface Props {
  label: string
  name: string
  type: 'text' | 'email' | 'password'
  placeholder: 'text'
  required: boolean,
  value: string
}

export default defineComponent({
  components: {
    StyledInput,
    StyledLabel,
    Required
  },
  props: {
    value: {
      type: String as PropType<Props['value']>,
      default: ''
    },
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
    },
    required: {
      type: Boolean as PropType<Props['required']>,
      default: false
    }
  },
  data () {
    return {
      textValue: this.value
    }
  },
  methods: {
    update (textInput: string) {
      this.textValue = textInput
      this.$emit('update', { name: this.name, value: this.textValue })
    }
  }
})
</script>
