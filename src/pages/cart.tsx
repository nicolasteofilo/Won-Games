import { Cart, CartTemplateProps } from 'templates/Cart'

import itemsMock from 'components/CartList/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import paymentOptionsMock from 'components/PaymentOptions/mock'

export default function CartPage(props: CartTemplateProps) {
  return <Cart {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      recommendedGames: gamesMock,
      recommendHighlight: highlightMock,
      items: itemsMock,
      total: 'R$ 1.000,00',
      cards: paymentOptionsMock
    }
  }
}
