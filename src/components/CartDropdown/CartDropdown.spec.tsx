import { screen, render } from '@testing-library/react'
import { CartDropdown } from '.'

describe('<CartDropdown />', () => {
  it('should render correctly', () => {
    const { container } = render(<CartDropdown />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
