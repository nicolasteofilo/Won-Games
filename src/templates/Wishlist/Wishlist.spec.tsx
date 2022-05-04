import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'
import { Wishlist, WishlistTemplateProps } from '.'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props: WishlistTemplateProps = {
  recommendedGames: gamesMock.slice(0, 5),
  recommendHighlight: highlightMock
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    Showcase: function Mock() {
      return <div data-testid="mock showcase"></div>
    }
  }
})

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(screen.getByTestId(/mock showcase/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /Wishlist/i
      })
    )
  })
})
