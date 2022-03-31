import { screen, render } from '@testing-library/react'
import { Slider } from '.'

describe('<Slider />', () => {
  it('should render correctly', () => {
    const Slider = render(<Slider />)

    expect(Slider).toBeInTheDocument()
  }),
})
