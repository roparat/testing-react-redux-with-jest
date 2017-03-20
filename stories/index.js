import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'

import TodoItem from '../src/components/TodoItem'

storiesOf('Todo Item', module)
  .add('not complete', () => (
    <TodoItem text="hello" />
  ))
  .add('completed', () => (
    <TodoItem text="completed" complete />
  ))
