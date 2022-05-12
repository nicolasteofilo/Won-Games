import { screen, render } from '@testing-library/react'
import { Cart } from '.'

describe('<Cart />', () => {
  it('should render correctly', () => {
    const { container } = render(<Cart />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
