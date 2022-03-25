import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import { Button } from '.'
import theme from '../../styles/theme'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Won</Button>)

    expect(screen.getByRole('button', { name: /Won/i })).toHaveStyle({
      fontSize: '1.4rem',
      height: '4rem',
      padding: `${theme.spacings.xxsmall} ${theme.spacings.medium}`
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Won Games</Button>)

    expect(screen.getByRole('button', { name: /Won Games/i })).toHaveStyle({
      height: '3rem',
      fontSize: `${theme.font.sizes.xsmall}`
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Won Games</Button>)

    expect(screen.getByRole('button', { name: /Won Games/i })).toHaveStyle({
      height: '5rem',
      fontSize: `${theme.font.sizes.medium}`,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`
    })
  })

  it('should render with full width version', () => {
    renderWithTheme(<Button fullWidth>Won Games</Button>)

    expect(screen.getByRole('button', { name: /Won Games/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render and icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    )

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
  })
})
