import { Meta, Story } from '@storybook/react/types-6-0'
import { OrdersList, OrdersListProps } from '.'

import ordersMock from './mock'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: ordersMock
  }
} as Meta

export const Basic: Story<OrdersListProps> = (args) => (
  <div
    style={{
      maxWidth: '400px'
    }}
  >
    <OrdersList {...args} />
  </div>
)
