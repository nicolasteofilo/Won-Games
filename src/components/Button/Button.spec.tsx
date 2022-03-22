import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { Button } from '.'
import 'jest-styled-components'
import theme from '../../styles/theme'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Won Games</Button>)

    expect(screen.getByRole('button', { name: /Won Games/i })).toHaveStyle({
      fontSize: '1.4rem',
      height: '4rem',
      padding: `${theme.spacings.xxsmall} ${theme.spacings.medium}`
    })
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
})
