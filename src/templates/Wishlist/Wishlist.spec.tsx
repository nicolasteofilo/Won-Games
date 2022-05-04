import { render } from '@testing-library/react'
import { Wishlist } from '.'

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    const { container } = render(<Wishlist />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
