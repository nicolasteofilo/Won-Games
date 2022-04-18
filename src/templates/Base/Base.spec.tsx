import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { Base } from '.'

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    Menu: function Mock() {
      return <div data-testid="mock menu"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    Footer: function Mock() {
      return <div data-testid="mock footer"></div>
    }
  }
})

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    )

    expect(screen.getByTestId('mock menu')).toBeInTheDocument()
    expect(screen.getByTestId('mock footer')).toBeInTheDocument()

    expect(screen.getByText('Heading')).toBeInTheDocument()
  })
})
