import { screen } from '@testing-library/react'
import { Highlight } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'By now',
  buttonLink: '#'
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
})
