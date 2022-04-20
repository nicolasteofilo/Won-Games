import { render } from '@testing-library/react'
import { GameDetails } from '.'

describe('<GameDetails />', () => {
  it('should render correctly', () => {
    const { container } = render(<GameDetails />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
