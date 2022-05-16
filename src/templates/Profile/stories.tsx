import { Meta, Story } from '@storybook/react/types-6-0'
import { Profile } from '.'

export default {
  title: 'Profile',
  component: Profile
} as Meta

export const Basic: Story = () => <Profile />
