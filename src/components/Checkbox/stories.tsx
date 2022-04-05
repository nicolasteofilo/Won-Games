import { Meta, Story } from '@storybook/react/types-6-0'
import { Checkbox, CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox
} as Meta

export const Basic: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Multiples: Story<CheckboxProps> = (args) => (
  <div>
    <Checkbox {...args} label="Windows" labelFor="win" />
    <br />
    <Checkbox {...args} label="Mac" labelFor="mac" />
    <br />
    <Checkbox {...args} label="Linux" labelFor="linux" />
  </div>
)
