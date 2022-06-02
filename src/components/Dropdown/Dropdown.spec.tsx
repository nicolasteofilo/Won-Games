import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { Dropdown } from '.'

describe('<Dropdown />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Dropdown />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
