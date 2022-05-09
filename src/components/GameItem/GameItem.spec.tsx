import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { GameItem } from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/150x70',
  title: 'Super Mario Odyssey',
  price: 'R$ 199,99'
}

describe('<GameItem />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameItem {...props} />)

    expect(
      screen.getByRole('heading', {
        name: /Super Mario Odyssey/i
      })
    ).toBeInTheDocument()
    expect(screen.getByText('R$ 199,99')).toBeInTheDocument()
    expect(
      screen.getByRole('img', {
        name: /Super Mario Odyssey/i
      })
    ).toHaveAttribute('src', props.img)
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https://www.google.com'

    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', {
        name: `Get ${props.title} here`
      })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the payment info', () => {
    const paymentInfo = {
      number: '**** **** **** 7891',
      flag: 'mastercard',
      img: '/img/master-card.png',
      purchaseDate: `${new Date()}`
    }

    renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: paymentInfo.flag })
    ).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
