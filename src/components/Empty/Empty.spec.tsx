import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { Empty } from '.'

const props = {
  title: 'Empty',
  description: 'Empty description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('image', {
        name: /a gamer in a couch playing/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /empty/i
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/empty description/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /go back to store/i })
    ).toHaveAttribute('href', '/')
  })
  it('should not render link when hasLink is not passed', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /go back to store/i })
    ).not.toBeInTheDocument()
  })
})
