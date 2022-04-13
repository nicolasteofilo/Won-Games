import { screen, render } from '@testing-library/react'
import { Showcase } from '.'

describe('<Showcase />', () => {
  it('should render correctly', () => {
    const { container } = render(<Showcase />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
