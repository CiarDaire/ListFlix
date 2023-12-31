// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeLjP4UK6AONPiuWJrvFnTRL3_eR3Nl0Y",
  authDomain: "listpit-c3962.firebaseapp.com",
  projectId: "listpit-c3962",
  storageBucket: "listpit-c3962.appspot.com",
  messagingSenderId: "924809084294",
  appId: "1:924809084294:web:54d8d3328b6dc7ffafc007",
  measurementId: "G-WTL76KPSB9"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
}
else{
    app = firebase.app()
}

const auth = firebase.auth()
export {auth}