
import * as firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyA_NlsIxW-sDmfatX5724NmJdl45zJrujs",
    authDomain: "yourhome-8d399.firebaseapp.com",
    projectId: "yourhome-8d399",
    storageBucket: "yourhome-8d399.appspot.com",
    messagingSenderId: "80741234512",
    appId: "1:80741234512:web:cde9323b0f5c48e6a41e55"
  };

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };