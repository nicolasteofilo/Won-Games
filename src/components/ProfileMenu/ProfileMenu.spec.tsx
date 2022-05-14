import { screen, render } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { ProfileMenu } from '.'

describe('<ProfileMenu />', () => {
  it('should render teh menu', () => {
    renderWithTheme(<ProfileMenu />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
