import { GameItemProps, GameItem } from '../GameItem'
import * as S from './styles'

export type CartListProps = {
  items: GameItemProps[]
  total: string
}

const CartList = ({ items, total }: CartListProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <GameItem key={`Game - ${item.title}`} {...item} />
    ))}

    <S.Footer>
      Total <S.Total>{total}</S.Total>
    </S.Footer>
  </S.Wrapper>
)

export { CartList }
