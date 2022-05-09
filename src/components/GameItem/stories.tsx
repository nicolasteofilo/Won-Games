import { Meta, Story } from '@storybook/react/types-6-0'
import { GameItem, GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/150x70',
    title: 'Super Mario Odyssey',
    price: 'R$ 199,99'
  }
} as Meta

export const Basic: Story<GameItemProps> = (args) => <GameItem {...args} />
