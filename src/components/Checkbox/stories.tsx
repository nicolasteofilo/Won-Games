import { Meta, Story } from '@storybook/react/types-6-0'
import { Checkbox, CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: {
      action: 'checked'
    }
  }
} as Meta

export const Basic: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const IsChecked: Story<CheckboxProps> = (args) => (
  <Checkbox {...args} isChecked />
)

export const Multiples: Story<CheckboxProps> = (args) => (
  <div>
    <Checkbox {...args} label="Windows" labelFor="win" />
    <br />
    <Checkbox {...args} label="Mac" labelFor="mac" />
    <br />
    <Checkbox {...args} label="Linux" labelFor="linux" />
  </div>
)
