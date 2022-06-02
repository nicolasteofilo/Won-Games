import { Meta, Story } from '@storybook/react/types-6-0'
import { CartIcon } from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story = () => <CartIcon />
