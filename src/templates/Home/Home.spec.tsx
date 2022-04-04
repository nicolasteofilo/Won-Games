import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import '../../../.jest/match-media-mock'

import { Home } from '.'

const props = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighligth: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighligth: highlightMock
}

describe('<Home />', () => {
  it('should render <Home /> with correct data', () => {
    renderWithTheme(<Home {...props} />)

    // Menu
    expect(screen.getByLabelText(/Open menu/i)).toBeInTheDocument()

    // Footer
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument()
    expect(screen.getByText(/Follow us/i)).toBeInTheDocument()
    expect(screen.getByText(/Links/i)).toBeInTheDocument()
    expect(screen.getByText(/Location/i)).toBeInTheDocument()

    // Headings
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()

    // Banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)

    // Cards Games ( 5 sections for 1 cards each = 5x1 = 5)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)

    // Highlight
    expect(screen.getAllByText(/Biomutant/i)).toHaveLength(3)
  })
})
