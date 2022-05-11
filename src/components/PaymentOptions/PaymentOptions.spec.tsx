import { screen, render } from '@testing-library/react'
import { PaymentOptions } from '.'

describe('<PaymentOptions />', () => {
  it('should render correctly', () => {
    const { container } = render(<PaymentOptions />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
