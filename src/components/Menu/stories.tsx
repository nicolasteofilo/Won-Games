import { Meta, Story } from '@storybook/react/types-6-0'
import { Menu, MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Basic: Story<MenuProps> = (args) => (
  <div
    style={{
      maxWidth: '130rem',
      margin: '0 auto'
    }}
  >
    <Menu {...args} />
  </div>
)

Basic.parameters = {
  viewport: { defaultViewport: 'mobile1' },
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
