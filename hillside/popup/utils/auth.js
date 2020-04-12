function getCurrentUser() {
  return new Promise((resolve, reject) => {
    chrome.identity.getAuthToken({ interactive: true }, async token => {
      try {
        const credential = await firebase.auth.GoogleAuthProvider.credential(null, token)
        const data = await firebase.auth().signInWithCredential(credential)
        resolve(data)
      }
      catch (err) {
        reject(err)
      }
    })
  })
}