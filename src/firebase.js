import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "USE YOUR OWN",
    authDomain: "tinder-clone-53e3b.firebaseapp.com",
    projectId: "tinder-clone-53e3b",
    storageBucket: "tinder-clone-53e3b.appspot.com",
    messagingSenderId: "534093962738",
    appId: "1:534093962738:web:1b5ae28d9cfe6278205f6b",
    measurementId: "G-XQVJWMTJHZ"
  };
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const database  = firebaseApp.firestore();

  export default database;
