import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import About from './index'

describe('About.test.js', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<About Title="test"/>)

    expect(wrapper.length).toEqual(1)

    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })
})
