import React from 'react'
import { mount } from 'enzyme'

import CommentList from 'components/CommentList'
import Root from 'Root'
import { isTSAnyKeyword } from '@babel/types'

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentList />
        </Root>
    )
})

it('creates one LI per comment', () => {

})