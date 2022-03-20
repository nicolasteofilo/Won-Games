import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { Logo } from '.'
import theme from '../../styles/theme'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: theme.colors.black
    })
  })
})
