import { Meta, Story } from '@storybook/react/types-6-0'
import { CartDropdown, CartDropdownProps } from '.'

import mockItems from 'components/GameCardSlider/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown
} as Meta

export const Basic: Story<CartDropdownProps> = (args) => (
  <div
    style={{
      maxWidth: '90%',
      display: 'flex',
      justifyContent: 'flex-end'
    }}
  >
    <CartDropdown {...args} />
  </div>
)

Basic.args = {
  items: mockItems,
  total: '$10.00'
}
