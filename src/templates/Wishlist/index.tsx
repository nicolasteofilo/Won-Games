import { Base } from 'templates/Base'

import { Container } from 'components/Container'
import { Heading } from 'components/Heading'
import { GameCardProps, GameCard } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Grid } from 'components/Grid'
import { Showcase } from 'components/Showcase'
import { Divider } from 'components/Divider'
import { Empty } from 'components/Empty'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendHighlight: HighlightProps
}

const Wishlist = ({
  games = [],
  recommendHighlight,
  recommendedGames
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games.length ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
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

export { Wishlist }
