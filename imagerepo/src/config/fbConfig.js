import firebase from 'firebase/app'
import "firebase/storage"
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyClS-D_hARPyBd1suwF7_O7y9aHdCSahzc",
    authDomain: "image-repo-app.firebaseapp.com",
    projectId: "image-repo-app",
    storageBucket: "image-repo-app.appspot.com",
    messagingSenderId: "542304685495",
    appId: "1:542304685495:web:d25f8c077f816dabcf6c32",
    measurementId: "G-FB5TW7SBD7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  const storage = firebase.storage(); 

  export { storage, firebase as default}; 