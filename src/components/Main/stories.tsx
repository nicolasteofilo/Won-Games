import { Meta, Story } from '@storybook/react/types-6-0'
import { Main } from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = (arg) => <Main {...arg} />
Basic.args = {
  title: 'Typescript, ReactJS, NextJS and Styled Components'
}
