import { storiesOf, action, linkTo } from '@kadira/storybook'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'
import React from 'react'

import TodoItem from '../TodoItem'

storiesOf('Story Name', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div style={{ textAlign: 'center' }}>{story()}</div>
  ))
  .addWithInfo('not complete', 'An incomplete todo item', () => (
    <TodoItem text={text('Text', 'Not complete')} />
  ))
  .addWithInfo('completed', 'An completed todo item', () => (
    <TodoItem
      text={text('Text', 'Completed')}
      complete={boolean('Complete', true)}
    />
  ))
