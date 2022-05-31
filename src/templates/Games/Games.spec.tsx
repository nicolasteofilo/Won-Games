import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { GamesTemplate } from '.'

import filterItemsMock from 'components/ExploreSidebar/mock'
import gamesMock from 'components/GameCardSlider/mock'

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    Base: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="mock base">{children}</div>
    }
  }
})

jest.mock('components/ExploreSidebar', () => {
  return {
    __esModule: true,
    ExploreSidebar: function Mock() {
      return <div data-testid="mock exploreSidebar" />
    }
  }
})

describe('<Games />', () => {
  it('should render sections', () => {
    renderWithTheme(
      <GamesTemplate filterItems={filterItemsMock} games={[gamesMock[0]]} />
    )

    expect(screen.getByTestId('mock base')).toBeInTheDocument()
    expect(screen.getByTestId('mock exploreSidebar')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
