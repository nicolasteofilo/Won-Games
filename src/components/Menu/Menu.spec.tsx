import { screen, render } from '@testing-library/react'
import { Menu } from '.'

describe('<Menu />', () => {
  it('should render correctly', () => {
    const Menu = render(<Menu />)

    expect(Menu).toBeInTheDocument()
  }),
})
