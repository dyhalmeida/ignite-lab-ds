import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Signin } from '.'

export default {
  title: 'Pages/Sign in',
  component: Signin,
  args: {},
  argTypes: {}
} as Meta

export const Default: StoryObj = {

  play: async ({ canvasElement }) => {

    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite o seu e-mail'), 'any_mail@mail.com')
    userEvent.type(canvas.getByPlaceholderText('********'), 'any_password')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => expect(canvas.getByText('Login Success!')).toBeInTheDocument())

  }

}
