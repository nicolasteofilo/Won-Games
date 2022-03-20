import { screen, render } from '@testing-library/react'
import { Logo } from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    render(<Logo />)

    expect(screen.getByRole('img')).toHaveStyle({
      'background-color': 'white'
    })
  })
})
