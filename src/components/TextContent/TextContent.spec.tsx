import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { TextContent, TextContentProps } from '.'

const props: TextContentProps = {
  title: 'Title',
  content: '<h1>Content</h1>'
}

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />)

    expect(screen.getByRole('heading', { name: /Title/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Content/i })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(<TextContent content={props.content} />)

    expect(
      screen.queryByRole('heading', { name: /Title/i })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Content/i })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', {
      name: /Title/i
    }).parentElement

    expect(wrapper).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    })
  })
})
