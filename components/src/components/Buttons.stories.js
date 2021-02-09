import * as React from 'react'
import { HighlightedButton } from './Buttons'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: 'Highlighted Button', decorators: [withKnobs]}

export const highlighted_button = () => {
  const content = text('Text', 'This is a button')
  return <HighlightedButton>{content}</HighlightedButton>
}