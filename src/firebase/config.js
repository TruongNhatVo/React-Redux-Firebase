import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDXD3rFUyhl71JFojYAr5MsosrhmCY0EG0",
  authDomain: "react-redux-firebase-f77d6.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-f77d6.firebaseio.com",
  projectId: "react-redux-firebase-f77d6",
  storageBucket: "react-redux-firebase-f77d6.appspot.com",
  messagingSenderId: "690674682102"
}

 firebase.initializeApp(config)
export const storage = firebase.storage()
export const database = firebase.database()
export const authentication = firebase.auth()
export const providerType = (type) => {
  return new firebase.auth[`${type}AuthProvider`]()
}
// export const firebase