import { Meta, Story } from '@storybook/react/types-6-0'
import { GameDetails } from '.'

export default {
  title: 'GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails platforms={['linux', 'mac', 'windows']} />
  </div>
)
