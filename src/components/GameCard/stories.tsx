import { Meta, Story } from '@storybook/react/types-6-0'
import { GameCard, GameCardProps } from '.'

export default {
  title: 'Game/GameCard',
  component: GameCard,
  args: {
    title: 'Super Mario Odyssey',
    developer: 'Nintendo',
    img: 'https://www.dafont.com/forum/attach/orig/6/7/671219.jpg',
    price: 'R$ 250,00'
  },
  argTypes: {
    onFav: { action: 'click' },
    ribbon: { type: 'string' }
  }
} as Meta

export const Basic: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <GameCard {...args} ribbon="20% OFF" />
  </div>
)
