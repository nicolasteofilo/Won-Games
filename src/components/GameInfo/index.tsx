import Button from 'components/Button'
import { Heading } from 'components/Heading'
import { Ribbon } from 'components/Ribbon'
import { AddShoppingCart, FavoriteBorder } from 'styled-icons/material-outlined'

import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ description, price, title }: GameInfoProps) => (
  <S.Wrapper>
    <Heading lineLeft lineColor="primary">
      {title}
    </Heading>

    <Ribbon color="secondary">{`$${price}`}</Ribbon>

    <S.Description>{description}</S.Description>
    <S.ButtonsWrapper>
      <Button icon={<AddShoppingCart />}>Add to cart</Button>
      <Button icon={<FavoriteBorder />}>Wishlist</Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export { GameInfo }
