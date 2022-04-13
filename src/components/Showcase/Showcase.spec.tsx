import '../../../.jest/match-media-mock'

import { screen } from '@testing-library/react'
import { Showcase } from '.'
import { renderWithTheme } from 'utils/tests/helpers'

import highlightMock from 'components/Highlight/mock'
import gameCardSliderMock from 'components/GameCardSlider/mock'

describe('<Showcase />', () => {
  it('should render correctly', () => {
    renderWithTheme(
      <Showcase
        title="Most Popular"
        highlight={highlightMock}
        games={gameCardSliderMock}
      />
    )

    // Title
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    // Highlight
    expect(screen.getByText(highlightMock.title)).toBeInTheDocument()

    // GameCardSlider
    expect(screen.queryAllByText(gameCardSliderMock[0].title)).toHaveLength(4)
  })

  it('should render correctly with no title', () => {
    renderWithTheme(
      <Showcase highlight={highlightMock} games={gameCardSliderMock} />
    )

    // Highlight
    expect(screen.getByText(highlightMock.title)).toBeInTheDocument()

    // GameCardSlider
    expect(screen.queryAllByText(gameCardSliderMock[0].title)).toHaveLength(4)
  })

  it('should render correctly with no highlight', () => {
    renderWithTheme(
      <Showcase title="Most Popular" games={gameCardSliderMock} />
    )

    // Title
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    // GameCardSlider
    expect(screen.queryAllByText(gameCardSliderMock[0].title)).toHaveLength(4)
  })

  it('should render correctly with no games', () => {
    renderWithTheme(<Showcase title="Most Popular" highlight={highlightMock} />)

    // Title
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    // Highlight
    expect(screen.getByText(highlightMock.title)).toBeInTheDocument()
  })
})
