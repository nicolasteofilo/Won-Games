import { Meta, Story } from '@storybook/react/types-6-0'
import { FormSignUp } from '.'

export default {
  title: 'Form/FormSingUp',
  component: FormSignUp
} as Meta

export const Basic: Story = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignUp />
  </div>
)
