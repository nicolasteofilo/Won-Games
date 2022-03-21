import { screen, render } from '@testing-library/react'
import { Heading } from '.'

describe('<Heading />', () => {
  it('should render correctly', () => {
    const Heading = render(<Heading />)

    expect(Heading).toBeInTheDocument()
  }),
})
