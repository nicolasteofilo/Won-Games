import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { Auth } from '.'

describe('<Auth />', () => {
  it('should render correctly logos, title and children', () => {
    renderWithTheme(<Auth title="Sing up">children</Auth>)

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
    screen.logTestingPlaygroundURL()

    expect(
      screen.getByRole('heading', { name: /sing up/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/children/i)).toBeInTheDocument()
  })
})
