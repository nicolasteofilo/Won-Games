import styled from 'styled-components'
import { Wrapper as GameItemWrapper } from 'components/GameItem/styles'

export const Wrapper = styled.div`
  ${GameItemWrapper} {
    &:last-child {
      border-bottom: 0;
    }
  }
`
