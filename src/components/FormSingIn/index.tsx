import Link from 'next/link'

import { Email, Lock } from '@styled-icons/material-outlined/'
import { Button } from 'components/Button'

import TextField from 'components/TextField'

import * as S from './styles'

const FormSingIn = () => (
  <S.Wrapper>
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
      <S.FormLink>
        Don’t have an account?{' '}
        <Link href="/sing-up">
          <a>Sing up</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export { FormSingIn }
