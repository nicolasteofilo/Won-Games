import { screen, render } from '@testing-library/react'
import { Footer } from '.'

describe('<Footer />', () => {
  it('should render correctly', () => {
    const Footer = render(<Footer />)

    expect(Footer).toBeInTheDocument()
  }),
})
