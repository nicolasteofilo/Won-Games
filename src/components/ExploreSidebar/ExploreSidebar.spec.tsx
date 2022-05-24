import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { ExploreSidebar } from '.'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(<ExploreSidebar />)

    expect(screen.getByRole('heading', { name: /price/i }))
    expect(screen.getByRole('heading', { name: /sort by/i }))
    expect(screen.getByRole('heading', { name: /system/i }))
    expect(screen.getByRole('heading', { name: /genre/i }))
  })
})
