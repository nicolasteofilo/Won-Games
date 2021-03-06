import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import { ProfileMenu } from '.'

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    const { container } = renderWithTheme(<ProfileMenu />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: 'My profile'
      })
    ).toHaveAttribute('href', '/profile/me')
    expect(
      screen.getByRole('link', {
        name: 'My cards'
      })
    ).toHaveAttribute('href', '/profile/cards')
    expect(
      screen.getByRole('link', {
        name: 'My orders'
      })
    ).toHaveAttribute('href', '/profile/orders')
    expect(
      screen.getByRole('link', {
        name: 'Sing out'
      })
    ).toHaveAttribute('href', '/logout')

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the menu with an active link defined', () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/me" />)

    expect(
      screen.queryByRole('link', {
        name: /My profile/i
      })
    ).toHaveStyle({
      color: theme.colors.white
    })
  })
})
