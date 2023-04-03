<template lang="pug">
StyledForm(:submit="log")
  TextInput(
  label="Email"
  placeholder='john1234@example.com'
  name="email"
  type="email"
  required=true
  )
  PasswordInput(
  label="Password"
  placeholder=''
  name="password"
  type="password"
  required=true
  )
  SubmitBtn(
    text="Login"
  )
</template>

<script>
import { defineComponent } from 'vue'
import { PasswordInput, SubmitBtn, Form as StyledForm } from './styles'

export default defineComponent({
  components: {
    PasswordInput,
    SubmitBtn,
    StyledForm
  },
  methods: {
    log () {
      console.log('hello')
    }
  }
})
</script>
