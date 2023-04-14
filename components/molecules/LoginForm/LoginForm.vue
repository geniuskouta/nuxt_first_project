<template lang="pug">
StyledForm(:submit="formSubmit")
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

<script ts>
import { defineComponent } from 'vue'
import { PasswordInput, SubmitBtn, Form as StyledForm } from './styles'

export default defineComponent({
  components: {
    PasswordInput,
    SubmitBtn,
    StyledForm
  },
  methods: {
    async formSubmit () {
      return await this.$axios.post('/api/login', {
        email: 'abc@example.com',
        password: 'moon'
      })
    }
  }
})
</script>
