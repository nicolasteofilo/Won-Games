import { Meta, Story } from '@storybook/react/types-6-0'
import { Auth } from '.'

export default {
  title: 'Auth',
  component: Auth
} as Meta

export const Basic: Story = () => <Auth />
