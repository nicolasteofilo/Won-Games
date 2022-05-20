import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { OrdersList } from '.'

import mock from './mock'

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    Empty: function Mock() {
      return <div data-testid="mock Empty" />
    }
  }
})

jest.mock('components/GameItem', () => {
  return {
    __esModule: true,
    GameItem: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="mock GameItem">{children}</div>
    }
  }
})

describe('<OrdersList />', () => {
  it('should render the games items', () => {
    renderWithTheme(<OrdersList items={mock} />)

    expect(screen.getByRole('heading', { name: /My orders/i }))
    expect(screen.getAllByTestId('mock GameItem')).toHaveLength(2)
  })
  it('should render the empty component', () => {
    renderWithTheme(<OrdersList />)

    expect(screen.getByTestId('mock Empty'))
  })
})
