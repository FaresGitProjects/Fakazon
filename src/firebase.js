// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCs7wikHP8iSaAt_Af7pUwb6lUFCVtnyyM",
    authDomain: "react-clone-db188.firebaseapp.com",
    projectId: "react-clone-db188",
    storageBucket: "react-clone-db188.appspot.com",
    messagingSenderId: "49970275910",
    appId: "1:49970275910:web:ad2a4a0bb4b5a80d724c47",
    measurementId: "G-8NN38Q5CT5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db, auth};