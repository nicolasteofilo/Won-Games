import * as S from './styles'
import { Heading } from 'components/Heading'

const ExploreSidebar = () => (
  <S.Wrapper>
    <Heading lineBottom lineColor="secondary" size="small">
      Price
    </Heading>
    <Heading lineBottom lineColor="secondary" size="small">
      Sort By
    </Heading>
    <Heading lineBottom lineColor="secondary" size="small">System</Heading>
    <Heading lineBottom lineColor="secondary" size="small">Genre</Heading>
  </S.Wrapper>
)

export { ExploreSidebar }
