import { Heading } from 'components/Heading'
import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

const FormProfile = () => (
  <>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>
    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="John Doe"
      />
      <TextField
        name="email"
        type="email"
        placeholder="E-mail"
        initialValue="joedoe@email.com"
        label="E-mail"
        disabled
      />
      <TextField
        name="password"
        type="password"
        placeholder="type your password"
        label="Password"
      />
      <TextField
        name="new_password"
        type="new_password"
        placeholder="new password"
        label="New password"
      />
      <Button type="submit" size="large">
        Save
      </Button>
    </S.Form>
  </>
)

export { FormProfile }
