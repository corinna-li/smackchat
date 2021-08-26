// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCwMoYjS4R5ywkvE2sfSe8fP_W-HY8MtAc",
  authDomain: "smackchat-aa4a1.firebaseapp.com",
  projectId: "smackchat-aa4a1",
  storageBucket: "smackchat-aa4a1.appspot.com",
  messagingSenderId: "969746385637",
  appId: "1:969746385637:web:087b089e34e45a440a620c",
  measurementId: "G-41FJQ2E193",
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();

export { firebaseAuth, firebaseDb };
// firebase.analytics();
