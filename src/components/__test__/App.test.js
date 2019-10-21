import React from 'react'
import { shallow } from 'enzyme'
import App from 'components/App'
import  CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

//Enzyme API
//Static Renders the given component and retruns plain HTML
//Shallow Render *just* the given component and none of its children
//Full Dom Render the component and all of its children + lets us modify it afterwards
let wrapped;

beforeEach(()=>{
    wrapped = shallow(<App />);
})

it('shows a comment box', ()=> {
    expect(wrapped.find(CommentBox).length).toEqual(1);


});


it('shows a comment List', ()=> {
    expect(wrapped.find(CommentList).length).toEqual(1);


});