import { authentication,providerType, database } from './../firebase/config'

export const doCreateUserWithEmailAndPassword = (email,password) => {
  return authentication.signInWithEmailAndPassword(email,password)
}

export const doSendEmailVerification = () => {
  return authentication.currentUser.sendEmailVerification()
}

export const getFirebaseUser = (uid) => {
  return database.ref(`users${uid}`)
}

export const setFirebaseUser = (uid,userName,email) => {
  return getFirebaseUser(uid).set({userName,email})
}