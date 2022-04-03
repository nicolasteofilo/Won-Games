import { screen, render } from '@testing-library/react'
import { Home } from '.'

describe('<Home />', () => {
  it('should render correctly', () => {
    const { container } = render(<Home />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
