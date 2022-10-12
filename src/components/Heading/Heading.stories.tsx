import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './index'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem Ipsum',
    size: 'sm'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm'
  }
}

export const Medium: StoryObj<HeadingProps> = {
  args: {
    size: 'md'
  }
}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChildren: true,
    children: (
      <h1>Hello World</h1>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChildren: {
      table: {
        disable: true
      }
    }
  }
}


