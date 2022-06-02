import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { CartList } from '.'

import cartListMock from './mock'

describe('<CartList />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <CartList items={cartListMock} total="R$ 330.00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(
      screen.getByRole('img', { name: /Red Dead Redemption 2/i })
    ).toHaveAttribute('src', cartListMock[0].img)
    expect(screen.getByText('R$ 330.00')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    renderWithTheme(
      <CartList items={cartListMock} total="R$ 330.00" hasButton />
    )

    expect(screen.getByText(/Buy it now/i)).toBeInTheDocument()
  })
})
