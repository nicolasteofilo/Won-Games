import { Base } from 'templates/Base'
import { Container } from 'components/Container'
import { Heading } from 'components/Heading'

import { GameCardProps, GameCard } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import { Showcase } from 'components/Showcase'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendHighlight: HighlightProps
}

const Wishlist = ({
  games,
  recommendHighlight,
  recommendedGames
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games?.map((game, index) => (
        <GameCard key={`wishlist-${index}`} {...game} />
      ))}
    </Container>
    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendHighlight}
    />
  </Base>
)

export { Wishlist }
