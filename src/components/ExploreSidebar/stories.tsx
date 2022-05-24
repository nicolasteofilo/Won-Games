import { Meta, Story } from '@storybook/react/types-6-0'
import { ExploreSidebar } from '.'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  parameters: {
    backgroud: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story = () => <ExploreSidebar />
