import { render } from '@testing-library/react'
import { Game } from '.'

describe('<Game />', () => {
  it('should render correctly', () => {
    const { container } = render(<Game />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
