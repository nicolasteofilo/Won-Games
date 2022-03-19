import { screen, render } from '@testing-library/react'
import { Logo } from '.'

describe('<Logo />', () => {
  it('should render correctly', () => {
    const Logo = render(<Logo />)

    expect(Logo).toBeInTheDocument()
  }),
})
