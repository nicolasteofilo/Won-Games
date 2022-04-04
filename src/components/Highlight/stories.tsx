import { Meta, Story } from '@storybook/react/types-6-0'
import { Highlight, HighlightProps } from '.'
import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Basic: Story<HighlightProps> = (args) => (
  <div
    style={{
      maxWidth: '140rem'
    }}
  >
    <Highlight {...args} />
  </div>
)

export const withFloatImage: Story<HighlightProps> = (args) => (
  <div
    style={{
      maxWidth: '140rem'
    }}
  >
    <Highlight {...args} floatImage="/img/red-dead-float.png" />
  </div>
)
