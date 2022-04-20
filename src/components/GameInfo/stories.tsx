import { Meta, Story } from '@storybook/react/types-6-0'
import { GameInfo, GameInfoProps } from '.'

import gameInfoMock from './mock'

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<GameInfoProps> = () => (
  <div
    style={{
      maxWidth: '120rem',
      padding: '1.5rem'
    }}
  >
    <GameInfo {...gameInfoMock} />
  </div>
)
