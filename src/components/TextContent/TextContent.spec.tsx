import { render } from '@testing-library/react'
import { TextContent } from '.'

describe('<TextContent />', () => {
  it('should render correctly', () => {
    const { container } = render(<TextContent />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
