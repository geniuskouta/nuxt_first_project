<template lang="pug">
StyledForm(:submit="formSubmit")
  LanguageSelectContainer
    LanguageInput
  EmailInput(
  :value="formData.email"
  :label="$t('loginPage.email')"
  placeholder='john1234@example.com'
  name="email"
  type="email"
  required=true
  @update='updateFormData'
  )
  PasswordInput(
  :value="formData.password"
  :label="$t('loginPage.password')"
  placeholder=''
  name="password"
  type="password"
  required=true
  @update='updateFormData'
  )
  SubmitBtn(
    :text="$t('loginPage.login')"
  )

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { EmailInput, PasswordInput, SubmitBtn, Form as StyledForm, LanguageSelectContainer } from './styles'

type UpdateEvent = { name: 'email' | 'password', value: string }
export default defineComponent({
  components: {
    EmailInput,
    PasswordInput,
    SubmitBtn,
    StyledForm,
    LanguageSelectContainer
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
