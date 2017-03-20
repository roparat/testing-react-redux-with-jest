import React from 'react'
import { shallow } from 'enzyme'
import TodoItem from '../TodoItem'

describe('TodoItem', () => {
  it('matches its snapshot - not complete', () => {
    const component = shallow(<TodoItem text="Not complete"></TodoItem>)

    expect(component).toMatchSnapshot();
  })

  it('matches its snapshot - completed', () => {
    const component = shallow(<TodoItem text="Complete" complete></TodoItem>)

    expect(component).toMatchSnapshot();
  });

  it('render correct structure', () => {
    const component = shallow(<TodoItem text={'Hello'} />)
    
    expect(component.is('li')).toBe(true)
  })

  it('has complete class if receiving complete prop', () => {
    const component = shallow(<TodoItem text="Hello" complete />);

    expect(component.hasClass('complete')).toBe(true)
    expect(component.text()).toBe('Hello')
  })
})
