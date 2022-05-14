import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { ProfileMenu } from '.'

describe('<ProfileMenu />', () => {
  it('should render teh menu', () => {
    renderWithTheme(<ProfileMenu />)

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
  })
})
