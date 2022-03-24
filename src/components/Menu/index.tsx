import { MenuAlt1 as MenuIcon } from '@styled-icons/heroicons-outline'
import {
  Search as SearchIcon,
  AddShoppingCart as ShoppingCartIcon,
  Close as CloseIcon
} from 'styled-icons/material-outlined'

import { Logo } from 'components/Logo'
import * as S from './styles'
import { useState } from 'react'
import { Button } from 'components/Button'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.IconWrapper onClick={() => setIsOpen(true)}>
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

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explorer</S.MenuLink>
        </S.MenuNav>

        <S.RegisterBox>
          <Button fullWidth size="large">
            Log in now
          </Button>
          <span>or</span>
          <S.CreateAccount href="#" title="Sing In">
            Create an account
          </S.CreateAccount>
        </S.RegisterBox>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export { Menu }
