import { render } from '@testing-library/react'
import { Gallery } from '.'

describe('<Gallery />', () => {
  it('should render correctly', () => {
    const { container } = render(<Gallery />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
