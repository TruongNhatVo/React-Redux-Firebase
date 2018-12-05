import * as types from './../contanst/types';
const initialState = {}

const login = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      console.log(action.user)
      return {...action.user}
    default:
      return state
  }
}

export default login