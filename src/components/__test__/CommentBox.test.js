import React from 'react';
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox';

//we are useing Full Dom to  test  how it works
//normally we would use Shallow because we are  only testing this component and no children under it

let wrapped;

beforeEach(()=>{
    wrapped = mount(<CommentBox />)
})

afterEach(()=>{
    wrapped.mount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)

})