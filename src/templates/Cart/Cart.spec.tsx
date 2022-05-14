import { screen, render } from '@testing-library/react'
import { Cart, CartTemplateProps } from '.'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'
import { renderWithTheme } from 'utils/tests/helpers'

const props: CartTemplateProps = {
  items: itemsMock,
  total: '$0.00',
  cards: cardsMock,
  recommendedGames: gamesMock,
  recommendHighlight: highlightMock
}

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    Base: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="mock base">{children}</div>
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    Showcase: function Mock() {
      return <div data-testid="mock showcase"></div>
    }
  }
})

jest.mock('components/CartList', () => {
  return {
    __esModule: true,
    CartList: function Mock() {
      return <div data-testid="mock cartList"></div>
    }
  }
})

jest.mock('components/PaymentOptions', () => {
  return {
    __esModule: true,
    PaymentOptions: function Mock() {
      return <div data-testid="mock paymentOptions"></div>
    }
  }
})

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    Empty: function Mock() {
      return <div data-testid="mock empty"></div>
    }
  }
})

describe('<Cart />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Cart {...props} />)

    expect(
      screen.getByRole('heading', {
        name: /my cart/i
      })
    ).toBeInTheDocument()
    expect(screen.getByTestId('mock base')).toBeInTheDocument()
    expect(screen.getByTestId('mock cartList')).toBeInTheDocument()
    expect(screen.getByTestId('mock paymentOptions')).toBeInTheDocument()
    expect(screen.getByTestId('mock showcase')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render Empty section if there no items', () => {
    renderWithTheme(<Cart {...props} items={[]} />)
    expect(screen.getByTestId('mock empty')).toBeInTheDocument()
  })
})
