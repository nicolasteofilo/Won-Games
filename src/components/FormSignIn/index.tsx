import Link from 'next/link'

import { Email, Lock } from '@styled-icons/material-outlined/'
import { Button } from 'components/Button'

import TextField from 'components/TextField'

import { FormWrapper, FormLink } from 'components/Form'

import * as S from './styles'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
      <Button fullWidth size="large">
        Sing in now
      </Button>
      <FormLink>
        Don’t have an account?{' '}
        <Link href="/sing-up">
          <a>Sing up</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export { FormSignIn }
