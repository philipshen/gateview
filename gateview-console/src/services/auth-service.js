import firebase from 'firebase'

/**
 * This service serves as an abstraction layer for authentication
 */
export const fetchLoginStatus = async() => {
  const user = await fetchCurrentUser()
  return user != null
}

export const fetchCurrentUser = async() => {
  return new Promise(res => {
    firebase.auth().onAuthStateChanged(res)
  })
}

export const loginWithGoogle = async() => {
  const provider = new firebase.auth.GoogleAuthProvider()
  return await firebase.auth().signInWithPopup(provider)
}

export const logout = async() => {
  firebase.auth().signOut()
}