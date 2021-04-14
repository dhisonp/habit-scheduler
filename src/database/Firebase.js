import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyD7DR1BwKl8eLLMMK0-D7VF42Kor16bWsw",
    authDomain: "habit-schedu.firebaseapp.com",
    databaseURL: "https://habit-schedu-default-rtdb.firebaseio.com",
    projectId: "habit-schedu",
    storageBucket: "habit-schedu.appspot.com",
    messagingSenderId: "989682684816",
    appId: "1:989682684816:web:c2a61403d40ab887e41915",
    measurementId: "G-0JYXMBL028"
};
// Initialize Firebase
const initializeFirebase = () => { firebase.initializeApp(firebaseConfig); }
export default initializeFirebase;
// firebase.analytics();
