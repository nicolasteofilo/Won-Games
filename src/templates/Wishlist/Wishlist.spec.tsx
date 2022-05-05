import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'
import { Wishlist, WishlistTemplateProps } from '.'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props: WishlistTemplateProps = {
  games: gamesMock,
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

  it('should render games', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
  })

  it('should render <Empty /> when there are no games', () => {
    renderWithTheme(
      <Wishlist
        recommendHighlight={highlightMock}
        recommendedGames={gamesMock}
      />
    )

    expect(screen.queryAllByText(/population zero/i)).toHaveLength(0)
    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
