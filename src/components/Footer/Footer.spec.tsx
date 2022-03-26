import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { Footer } from '.'

describe('<Footer />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(container.firstChild).toMatchSnapshot()
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument()
    expect(screen.getByText(/Follow us/i)).toBeInTheDocument()
    expect(screen.getByText(/Links/i)).toBeInTheDocument()
    expect(screen.getByText(/Location/i)).toBeInTheDocument()
  })
})
