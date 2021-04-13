import Base from 'templates/Base'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import { GameCardProps } from 'components/GameCard'

import * as S from './styles'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({ recommendedGames, recommendedHighlight }: Wishlist) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>
    </Container>
    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    ></Showcase>
  </Base>
)

export default Wishlist
