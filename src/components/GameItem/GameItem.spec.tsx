import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { GameItem } from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/150x70',
  title: 'Super Mario Odyssey',
  price: 'R$ 199,99'
}

describe('<GameItem />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameItem {...props} />)

    expect(
      screen.getByRole('heading', {
        name: /Super Mario Odyssey/i
      })
    ).toBeInTheDocument()
    expect(screen.getByText('R$ 199,99')).toBeInTheDocument()
    expect(
      screen.getByRole('img', {
        name: /Super Mario Odyssey/i
      })
    ).toHaveAttribute('src', props.img)
  })
})
