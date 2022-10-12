import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from './index'

export default {
  title: 'Components/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Placeholder...'
  },
  argTypes: {}
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}
