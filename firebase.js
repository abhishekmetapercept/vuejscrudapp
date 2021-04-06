import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJap2fWJLH2sJtSujELNL_YkqzpDDQUzE",
  authDomain: "vue-projj.firebaseapp.com",
  projectId: "vue-projj",
  storageBucket: "vue-projj.appspot.com",
  messagingSenderId: "408504902136",
  appId: "1:408504902136:web:94d13f8dd60e4db8bdb60d"
};

firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();




export { auth, storage, db };
