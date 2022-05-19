import { render } from '@testing-library/react'
import { Profile } from '.'

describe('<Profile />', () => {
  it('should render correctly', () => {
    const { container } = render(<Profile>test</Profile>)

    expect(container.firstChild).toBeInTheDocument()
  })
})
