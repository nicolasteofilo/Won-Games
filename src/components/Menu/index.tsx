import { MenuAlt1 as MenuIcon } from '@styled-icons/heroicons-outline'
import {
  Search as SearchIcon,
  AddShoppingCart as ShoppingCartIcon
} from 'styled-icons/material-outlined'

import { Logo } from 'components/Logo'
import * as S from './styles'

const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MenuIcon />
    </S.IconWrapper>
    <S.LogoWrapper>
      <Logo hideOnMobile />
    </S.LogoWrapper>
    <S.MenuGroup>
      <S.IconWrapper>
        <SearchIcon />
      </S.IconWrapper>
      <S.IconWrapper>
        <ShoppingCartIcon />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Wrapper>
)

export { Menu }
