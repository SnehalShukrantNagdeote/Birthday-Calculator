// import firebase from 'firebase/compat/app';
import Firebase from 'firebase';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyD_806YCd6kfA4GEPumhNBgSMMyRHwe7FM",
    authDomain: "reactassignment-d3e37.firebaseapp.com",
    databaseURL: "https://reactassignment-d3e37-default-rtdb.firebaseio.com",
    projectId: "reactassignment-d3e37",
    storageBucket: "reactassignment-d3e37.appspot.com",
    messagingSenderId: "893450209949",
    appId: "1:893450209949:web:f4221749c41bb1205ba274"
};
// Initialize Firebase
const firebaseApp = Firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.database();
const auth = Firebase.auth();

export { auth, db };
// firestore