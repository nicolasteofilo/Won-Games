import { screen, render } from '@testing-library/react'
import { Checkbox } from '.'

describe('<Checkbox />', () => {
  it('should render correctly', () => {
    const { container } = render(<Checkbox />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
