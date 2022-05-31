import { screen, render } from '@testing-library/react'
import { Games } from '.'

describe('<Games />', () => {
  it('should render correctly', () => {
    const { container } = render(<Games />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
