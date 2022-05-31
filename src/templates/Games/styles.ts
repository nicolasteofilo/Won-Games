import media from 'styled-media-query'
import { Container } from 'components/Container'
import styled, { css } from 'styled-components'

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan(`medium`)`
      display: grid;
      grid-template-columns: 26rem 1fr;
      gap: ${theme.grid.gutter};
    `}
  `}
`

export const ShowMore = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.medium};
    text-transform: uppercase;
    font-weight: bold;
    color: ${theme.colors.white};
    cursor: pointer;

    > svg {
      color: ${theme.colors.primary};
    }
  `}
`
