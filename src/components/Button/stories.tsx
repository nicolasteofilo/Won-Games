import { Meta, Story } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { Button } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { type: 'string' }
  }
} as Meta

export const Basic: Story = (args) => <Button {...args} />

export const withIcon: Story = (args) => <Button {...args} />

export const asLink: Story = (args) => <Button {...args} />

Basic.args = {
  children: 'Hello Button'
}

withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}

asLink.args = {
  size: 'small',
  children: 'Buy now',
  as: 'a',
  href: 'https://google.com'
}
