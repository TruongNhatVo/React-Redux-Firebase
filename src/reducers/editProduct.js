import * as types from '../contanst/types';

var initialState = {};

const productEdit = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTBYID:
            return action.product
        default:
            return state;
    }
}

export default productEdit;