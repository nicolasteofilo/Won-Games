import { Meta, Story } from '@storybook/react/types-6-0'
import { Highlight, HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Biomutant',
    subtitle:
      'Preorder now to get the Special Mercenary Class DLC and the Official Soundtrack.    ',
    buttonLabel: 'Pre order now',
    buttonLink: '#',
    backgroundImage: '/img/red-dead-img.jpg'
  }
} as Meta

export const Basic: Story<HighlightProps> = (args) => <Highlight {...args} />
