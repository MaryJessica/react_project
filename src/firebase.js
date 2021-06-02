import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDoec1bi4znBXFpnLcouPA7Y6bHrysMY2g",
    authDomain: "unichat-5deee.firebaseapp.com",
    projectId: "unichat-5deee",
    storageBucket: "unichat-5deee.appspot.com",
    messagingSenderId: "662461806938",
    appId: "1:662461806938:web:830f88d137c9da3ac35b63"
  }).auth();

 export  default  firebase;