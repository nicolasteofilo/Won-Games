import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { CartDropdown } from '.'

import mockItems from 'components/CartList/mock'

describe('<CartDropdown />', () => {
  it('should render <CartIcon />  and its badge', () => {
    renderWithTheme(<CartDropdown items={mockItems} total="U$ 10,00" />)

    expect(screen.getByLabelText(/Shopping Cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${mockItems.length}`)).toBeInTheDocument()
  })
})
