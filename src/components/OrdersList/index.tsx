import { GameItemProps, GameItem } from 'components/GameItem'
import { Heading } from 'components/Heading'
import { Empty } from 'components/Empty'

import * as S from './styles'

export type OrdersListProps = {
  items?: GameItemProps[]
}

const OrdersList = ({ items }: OrdersListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="secondary" color="black" size="small">
      My orders
    </Heading>
    {items?.length ? (
      items?.map((item) => <GameItem key={item.downloadLink} {...item} />)
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store and explore great games and offers"
        hasLink
      />
    )}
  </S.Wrapper>
)

export { OrdersList }
