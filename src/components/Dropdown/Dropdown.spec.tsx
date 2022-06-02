import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'
import { Dropdown } from '.'

describe('<Dropdown />', () => {
  it('should render correctly with title and content', () => {
    renderWithTheme(
      // eslint-disable-next-line react/no-children-prop
      <Dropdown title="Click to open" children="content" />
    )

    expect(screen.getByText(/Click to open/i)).toBeInTheDocument()
    expect(screen.getByText(/content/i)).toBeInTheDocument()
  })

  it('should render the open/close dropdown', async () => {
    renderWithTheme(
      // eslint-disable-next-line react/no-children-prop
      <Dropdown title="Click to open">
        <p>content</p>
      </Dropdown>
    )

    const content = screen.getByText(/content/i).parentElement

    expect(content).toHaveAttribute('aria-hidden', 'true')
    expect(content).toHaveStyle({
      opacity: 0
    })

    await userEvent.click(screen.getByText(/Click to open/i))

    expect(content).toHaveStyle({
      opacity: 1
    })
    expect(content).toHaveAttribute('aria-hidden', 'false')
  })
})
