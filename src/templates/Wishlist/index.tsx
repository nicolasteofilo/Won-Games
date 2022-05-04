import { Base } from 'templates/Base'

import { Container } from 'components/Container'
import { Heading } from 'components/Heading'
import { GameCardProps, GameCard } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Grid } from 'components/Grid'
import { Showcase } from 'components/Showcase'
import { Divider } from 'components/Divider'

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

      <Grid>
        {games?.map((game, index) => (
          <GameCard key={`wishlist-${index}`} {...game} />
        ))}
      </Grid>
      <Divider />
    </Container>
    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendHighlight}
    />
  </Base>
)

export { Wishlist }
