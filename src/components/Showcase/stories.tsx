import { Meta, Story } from '@storybook/react/types-6-0'
import { Showcase, ShowcaseProps } from '.'
import highlightMock from 'components/Highlight/mock'
import gameCardSliderMock from 'components/GameCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<ShowcaseProps> = (args) => <Showcase {...args} />

Basic.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gameCardSliderMock
}

export const WithoutTitle: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutTitle.args = {
  games: gameCardSliderMock,
  highlight: highlightMock
}

export const WithoutHighlight: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutHighlight.args = {
  title: 'Most Popular',
  games: gameCardSliderMock
}

export const WithoutGames: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock
}
