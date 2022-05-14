import { Meta, Story } from '@storybook/react/types-6-0'
import { ProfileMenu, ProfileMenuProps } from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<ProfileMenuProps> = (args) => (
  <div
    style={{
      maxWidth: '25rem'
    }}
  >
    <ProfileMenu {...args} />
  </div>
)
