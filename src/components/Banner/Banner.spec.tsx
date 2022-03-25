import { screen, render } from '@testing-library/react'
import { Banner } from '.'

describe('<Banner />', () => {
  it('should render correctly', () => {
    const Banner = render(<Banner />)

    expect(Banner).toBeInTheDocument()
  }),
})
