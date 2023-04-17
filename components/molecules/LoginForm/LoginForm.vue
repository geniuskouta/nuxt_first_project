<template lang="pug">
StyledForm(:submit="formSubmit")
  TextInput(
  :value="formData.email"
  label="Email"
  placeholder='john1234@example.com'
  name="email"
  type="email"
  required=true
  @update='updateFormData'
  )
  PasswordInput(
  :value="formData.password"
  label="Password"
  placeholder=''
  name="password"
  type="password"
  required=true
  @update='updateFormData'
  )
  SubmitBtn(
    text="Login"
  )
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PasswordInput, SubmitBtn, Form as StyledForm } from './styles'

type UpdateEvent = { name: 'email' | 'password', value: string }

export default defineComponent({
  components: {
    PasswordInput,
    SubmitBtn,
    StyledForm
  },
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    updateFormData (event: UpdateEvent) {
      this.formData[event.name] = event.value
    },
    async formSubmit () {
      return await this.$axios.post('/api/login', this.formData)
    }
  }
})
</script>
