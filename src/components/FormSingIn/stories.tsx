import { Meta, Story } from '@storybook/react/types-6-0'
import { FormSingIn } from '.'

export default {
  title: 'Form/FormSingIn',
  component: FormSingIn
} as Meta

export const Basic: Story = () => (
  <div
    style={{
      width: 300,
      margin: 'auto'
    }}
  >
    <FormSingIn />
  </div>
)
