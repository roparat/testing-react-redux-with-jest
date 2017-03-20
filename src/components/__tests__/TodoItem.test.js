import React from 'react'
import { shallow } from 'enzyme'
import TodoItem from '../TodoItem'

describe('TodoItem', () => {
  it('render correct structure', () => {
    const component = shallow(<TodoItem text={'Hello'} />)
    
    expect(component.is('li')).toBe(true);
  })
})
