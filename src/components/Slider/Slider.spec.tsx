import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'
import Slider from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Slider />', () => {
  it('should render children as slider item', () => {
    renderWithTheme(
      <Slider settings={{ slidesToScroll: 2, infinite: false }}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>
    )

    expect(
      screen.getByText(/item 1/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(
      screen.getByText(/item 2/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(
      <Slider settings={{ slidesToScroll: 2, infinite: false }}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>
    )

    expect(container).toMatchSnapshot()
  })
})
