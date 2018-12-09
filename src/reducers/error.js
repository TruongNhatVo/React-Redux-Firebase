import * as types from './../contanst/types';
const initialState = ''

const error = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_ERROR:
      const err = action.errorMessage
      return err
    default:
      return state
  }
}

export default error