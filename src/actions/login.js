import * as types from '../contanst/types'
import { authentication,providerType } from './../firebase/config'

export const loginWithUser = (user) => ({
  type: 'LOGIN',
  user
})

export const authenticate = ( type ) => {
  return dispatch => {
    authentication.signInWithPopup(providerType(type))
      .then(ref => {
        dispatch(loginWithUser(ref.user))
      })
      .catch(err => {
        console.log(err)
      })
  }
}