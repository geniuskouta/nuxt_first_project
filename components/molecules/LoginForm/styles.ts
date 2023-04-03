import styled from 'vue-styled-components'
import TextInput from '~/components/atoms/TextInput/TextInput.vue'
import SubmitButton from '~/components/atoms/SubmitButton/SubmitButton.vue'
import FormVue from '~/components/atoms/FormVue/FormVue.vue'

export const Form = styled(FormVue)`
  display: block;
  max-width: 420px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
  margin-top: calc(50% - 440px);
`

export const PasswordInput = styled(TextInput)`
  margin-top: 16px;
`

export const SubmitBtn = styled(SubmitButton)`
  margin-top: 16px
`
