import { screen, render } from '@testing-library/react'
import { Auth } from '.'

describe('<Auth />', () => {
  it('should render correctly', () => {
    const { container } = render(<Auth />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
