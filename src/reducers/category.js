import * as types from './../contanst/types';
const initialState = 'All'

const category = (state = initialState, action) => {
  switch (action.type) {

    case types.FILTER_CATEGORY:
      console.log(action.category);
      return action.category

    default:
      return state
  }
}

export default category