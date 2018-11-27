import * as types from './../contanst/types';
import { findIndex } from 'lodash';

var initialState = [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case types.DELETE_PRODUCT:
            let indexToRemove = findIndex(state, { 'id': action.id })
            state.splice(indexToRemove, 1)
            return [...state]
        case types.ADD_PRODUCT:
            return [...state, action.product]
        case types.UPDATE_PRODUCT:
            let indexToUpdate = findIndex(state, { 'id': action.newProductValue.id })
            state[indexToUpdate] = action.newProductValue
            return [...state]
        default:
            return [...state];
    }
}

export default products;