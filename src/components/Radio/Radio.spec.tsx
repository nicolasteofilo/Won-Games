import { screen, render } from '@testing-library/react'
import { Radio } from '.'

describe('<Radio />', () => {
  it('should render correctly', () => {
    const { container } = render(<Radio />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
