import * as S from './styles'
import SlickSlider, { Settings } from 'react-slick'

export type SliderSetting = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSetting
}

const Slider = ({ children, settings }: SliderProps) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
)

export { Slider }
