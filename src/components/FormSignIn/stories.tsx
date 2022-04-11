import { Meta, Story } from '@storybook/react/types-6-0'
import { FormSignIn } from '.'

export default {
  title: 'Form/FormSingIn',
  component: FormSignIn
} as Meta

export const Basic: Story = () => (
  <div
    style={{
      width: 300,
      margin: 'auto'
    }}
  >
    <FormSignIn />
  </div>
)
