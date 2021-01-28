import * as React from 'react'
import Greeter from './Greeter'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: 'Greeter component', decorators: [withKnobs]}

export const greeter = () => {
  const name = text('Text', 'Helen')
  return <Greeter name={name}></Greeter>
}