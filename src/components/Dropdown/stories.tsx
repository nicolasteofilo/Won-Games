import { Meta, Story } from '@storybook/react/types-6-0'
import { Dropdown, DropdownProps } from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<DropdownProps> = (args) => <Dropdown {...args} />

Basic.args = {
  title: 'Click to open',
  children: <p>Dropdown content</p>
}
