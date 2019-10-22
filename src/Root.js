import React from 'react'
import { Provider }  from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers'
import { tsPropertySignature } from '@babel/types'

export default props => {
    return (
        <Provider store={createStore(reducers,props.initalState)}>
            {props.children}
        </ Provider>
    )
}