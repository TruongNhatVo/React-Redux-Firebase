import * as types from '../contanst/types'
import { authentication, providerType, database } from './../firebase/config'

export const loginWithUser = (user) => ({
  type: 'LOGIN',
  user
})

export const signInWithProvider = (type) => {
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

export const signUpRequest = (user) => {
  return dispatch => {
    const { email, password } = user
    authentication.createUserWithEmailAndPassword(email, password)
      .then(ref => {
        dispatch(loginWithUser(ref.user))
      })
      .catch(err => {
        dispatch(authenticateError(err.message))
      })
  }
}

export const authenticateError = (errorMessage) => ({
  type: 'LOGIN_ERROR',
  errorMessage
})
