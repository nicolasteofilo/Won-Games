import { Meta, Story } from '@storybook/react/types-6-0'
import { GameDetails, GameDetailsProps } from '.'

export default {
  title: 'GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    platforms: ['linux', 'mac', 'windows'],
    developer: 'GearBox Software',
    releaseDate: '2019-11-16T23:00:00',
    rating: 'BR14'
  },
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['linux', 'mac', 'windows']
      }
    }
  }
} as Meta

export const Basic: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)
