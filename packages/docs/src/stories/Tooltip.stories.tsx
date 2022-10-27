import type { Meta, StoryObj } from '@storybook/react'
import { Text, Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {},

} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: '26 de Outubro - Disponivel'
  },
}

export const unavailable: StoryObj<TooltipProps> = {
  args: {
    children: '26 de Outubro - Indisponivel'
  },
}
