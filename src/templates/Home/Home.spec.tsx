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

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    Showcase: function Mock() {
      return <div data-testid="mock showcase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    BannerSlider: function Mock() {
      return <div data-testid="mock bannerSlider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render <Home /> with correct data', () => {
    renderWithTheme(<Home {...props} />)

    screen.getAllByTestId('mock bannerSlider')
    expect(screen.getAllByTestId('mock showcase')).toHaveLength(5)
  })
})
