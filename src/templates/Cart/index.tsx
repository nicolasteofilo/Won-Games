import { Base } from '../Base'

import { Container } from 'components/Container'
import { Heading } from 'components/Heading'
import { Divider } from 'components/Divider'
import { Showcase } from 'components/Showcase'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { CartList, CartListProps } from 'components/CartList'
import { PaymentOptions, PaymentOptionsProps } from 'components/PaymentOptions'
import { Empty } from 'components/Empty'

import * as S from './styles'

export type CartTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendHighlight,
  recommendedGames,
  items,
  total,
  cards
}: CartTemplateProps) => {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        {items?.length ? (
          <S.Content>
            <CartList items={items} total={total} />
            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}
        <Divider />
      </Container>
      <Showcase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendHighlight}
      />
    </Base>
  )
}

export { Cart }
