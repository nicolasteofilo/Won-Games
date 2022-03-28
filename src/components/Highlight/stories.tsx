import { Meta, Story } from '@storybook/react/types-6-0'
import { Highlight, HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Heading 1',
    subtitle: 'Heading 2',
    buttonLabel: 'Buy now',
    buttonLink: '#'
  }
} as Meta

export const Basic: Story<HighlightProps> = (args) => <Highlight {...args} />
