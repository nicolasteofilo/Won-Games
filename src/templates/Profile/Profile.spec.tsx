import { screen, render } from '@testing-library/react'
import { Profile } from '.'

describe('<Profile />', () => {
  it('should render correctly', () => {
    const { container } = render(<Profile />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
