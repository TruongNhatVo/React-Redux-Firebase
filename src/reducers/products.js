import * as types from './../contanst/types'
import { findIndex } from 'lodash'

var initialState = [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            state = action.products
            console.log(state)
            return [...state]
        case types.ADD_PRODUCT:
            return [...state, action.product]
        case types.FETCH_PRODUCTSBYCATEGORY:
            state = action.products
            return [...state]
        default:
            return [...state]
    }
}

export default products