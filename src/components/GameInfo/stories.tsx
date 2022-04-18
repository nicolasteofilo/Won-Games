import { Meta, Story } from '@storybook/react/types-6-0'
import { GameInfo } from '.'

export default {
  title: 'GameInfo',
  component: GameInfo
} as Meta

const props = {
  title: 'Forza Horizon 4',
  description: 'Forza Horizon 4 is a racing video game',
  price: '50.00'
}

export const Basic: Story = () => <GameInfo {...props} />
