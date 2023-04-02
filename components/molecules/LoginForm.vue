<template lang="pug">
FormVue(:submit="log")
  TextInput(
  label="Email"
  placeholder='john1234@example.com'
  name="email"
  type="email"
  )
  TextInput(
  label="Password"
  placeholder=''
  name="password"
  type="password"
  )
  SubmitButton(
    text="Login"
  )
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    log () {
      console.log('hello')
    }
  }
})
</script>
