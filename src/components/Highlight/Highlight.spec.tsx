import { screen } from '@testing-library/react'
import { Highlight } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'By now',
  buttonLink: '#',
  backgroundImage: '/img/red-dead-img.jpg'
}

describe('<Highlight />', () => {
  it('should render the heading and button', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /By now/i })).toBeInTheDocument()
  })

  it('should render backgroud image', () => {
    const {
      container: { firstChild }
    } = renderWithTheme(<Highlight {...props} />)

    expect(firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render backgroud image', () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    )
  })
})
