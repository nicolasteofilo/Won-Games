import { Meta, Story } from '@storybook/react/types-6-0'
import { ExploreSidebar, ExploreSidebarProps } from '.'

import items from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  parameters: {
    backgroud: {
      default: 'won-dark'
    }
  },
  args: {
    items: items
  }
} as Meta

export const Basic: Story<ExploreSidebarProps> = (args) => (
  <ExploreSidebar {...args} />
)

export const WithInitialValue: Story<ExploreSidebarProps> = (args) => {
  <ExploreSidebar
    {...args}
    initialValues={{ windows: true, sort_by: 'low-to-high' }}
  />
}
