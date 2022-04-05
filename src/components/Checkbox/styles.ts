import styled, { css } from 'styled-components'
import { CheckboxProps } from './'

export const Wrapper = styled.main``

type CheckboxStyleProps = Pick<CheckboxProps, 'labelColor'>

export const Label = styled.label<CheckboxStyleProps>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
  `}
`
