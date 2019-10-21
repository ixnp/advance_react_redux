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
})

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)

})
describe('the text area', () => {
    //describes can help limit the scope of tests
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment'}
        })
        wrapped.update();
    });

    it('has a text area that users can tyle in', () => {
        //simulate events this is not calling onchange
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    })

    it('has a text should be empty after submit', () => {
        wrapped.find('form').simulate('submit')
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    })

})