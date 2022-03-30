import { screen, render } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import { GameCard } from '.'

const props = {
  title: 'Super Mario Odyssey',
  developer: 'Nintendo',
  img: 'https://www.dafont.com/forum/attach/orig/6/7/671219.jpg',
  price: 'R$ 250,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()
    expect(screen.getByText(props.price)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByText(props.price)).toBeInTheDocument()
    expect(screen.getByText(props.price)).toHaveStyle({
      'background-color': theme.colors.secondary
    })
    expect(screen.getByText(props.price)).not.toHaveStyle({
      'text-decoration': 'line-through',
      color: theme.colors.gray
    })
  })

  it('should render a line-through in price when promotion', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 200.00" />)

    expect(screen.getByText(props.price)).toHaveStyle({
      'text-decoration': 'line-through',
      color: theme.colors.gray
    })

    expect(screen.getByText('R$ 200.00')).toBeInTheDocument()
    expect(screen.getByText('R$ 200.00')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
  })
})
