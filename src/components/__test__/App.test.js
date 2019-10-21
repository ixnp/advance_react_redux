import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import  CommentBox from '../CommentBox'
import CommentList from '../CommentList'

//Enzyme API
//Static Renders the given component and retruns plain HTML
//Shallow Render *just* the given component and none of its children
//Full Dom Render the component and all of its children + lets us modify it afterwards

it('shows a comment box', ()=> {
    const wrapped = shallow(<App />);

    expect(wrapped.find(CommentBox).length).toEqual(1);


});


it('shows a comment List', ()=> {
    const wrapped = shallow(<App />);

    expect(wrapped.find(CommentList).length).toEqual(1);


});