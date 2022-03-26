import { screen, render } from '@testing-library/react'
import { Ribbon } from '.'

describe('<Ribbon />', () => {
  it('should render correctly', () => {
    const Ribbon = render(<Ribbon />)

    expect(Ribbon).toBeInTheDocument()
  }),
})
