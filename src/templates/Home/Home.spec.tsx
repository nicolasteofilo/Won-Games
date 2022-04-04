import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { Home } from '.'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home />)

    expect(screen.getByLabelText(/Open menu/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument()
    expect(screen.getByText(/Follow us/i)).toBeInTheDocument()
    expect(screen.getByText(/Links/i)).toBeInTheDocument()
    expect(screen.getByText(/Location/i)).toBeInTheDocument()
  })
})
