import { Meta, Story } from '@storybook/react/types-6-0'
import { Empty, EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<EmptyProps> = (args) => <Empty {...args} />

Basic.args = {
  title: 'Empty',
  description: 'Empty description'
}
