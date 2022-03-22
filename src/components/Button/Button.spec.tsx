import { screen, render } from '@testing-library/react'
import { Button } from '.'

describe('<Button />', () => {
  it('should render correctly', () => {
    const Button = render(<Button />)

    expect(Button).toBeInTheDocument()
  }),
})
