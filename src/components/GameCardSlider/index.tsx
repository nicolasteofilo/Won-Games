import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight
} from '@styled-icons/material-outlined'
import { Slider, SliderSetting } from 'components/Slider'
import { GameCardProps, GameCard } from 'components/GameCard'

import * as S from './styles'

export type GameCardSlider = {
  items: GameCardProps[]
  color?: 'black' | 'white'
}

const settings: SliderSetting = {
  infinite: false,
  nextArrow: <ArrowRight aria-label="next games" />,
  prevArrow: <ArrowLeft aria-label="previus games" />,
  slidesToShow: 4,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}

const GameCardSlider = ({ items, color = 'black' }: GameCardSlider) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <GameCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export { GameCardSlider }
