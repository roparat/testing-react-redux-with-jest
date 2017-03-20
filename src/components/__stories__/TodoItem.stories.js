import { storiesOf, action, linkTo } from '@kadira/storybook'
import React from 'react'

import TodoItem from '../TodoItem'

storiesOf('Story Name', module)
  .addDecorator(story => (
    <div>
      {story()}
    </div>
  ))
  .add('not complete', () => (
    <TodoItem text="hello" />
  ))
  .add('completed', () => (
    <TodoItem text="completed" complete />
  ))
