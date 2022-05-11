import { Meta, Story } from '@storybook/react/types-6-0'
import { PaymentOptions } from '.'

import cardsMock from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions
} as Meta

export const Basic: Story = () => <PaymentOptions cards={cardsMock} />
