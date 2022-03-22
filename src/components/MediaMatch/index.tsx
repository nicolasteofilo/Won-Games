import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
}

const mediaMatchModifiers = {
  // small for size
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)`
      display: block;
    `}
  `,

  // large for size
  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)`
      display: block;
    `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ greaterThan, lessThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
