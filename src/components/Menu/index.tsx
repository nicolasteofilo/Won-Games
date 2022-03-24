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
      <MenuIcon aria-label="Open menu" />
    </S.IconWrapper>
    <S.LogoWrapper>
      <Logo hideOnMobile aria-label="Logo" />
    </S.LogoWrapper>
    <S.MenuGroup>
      <S.IconWrapper>
        <SearchIcon aria-label="Search" />
      </S.IconWrapper>
      <S.IconWrapper>
        <ShoppingCartIcon aria-label="Open Shopping Cart" />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Wrapper>
)

export { Menu }
