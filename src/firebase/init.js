import firebase from 'firebase/app';
import 'firebase/firestore';
//  import "firebase/database";
//  import "firebase/storage";
//  import "firebase/app";
//  import "firebase/auth";

 
 // Initialize Firebase
 var firebaseConfig = {
    apiKey: "AIzaSyDdcXQQmQLxKa5TTbWY4iRdqPIaMMTnbvk",
    authDomain: "ns-js-8ea7d.firebaseapp.com",
    databaseURL: "https://ns-js-8ea7d.firebaseio.com",
    projectId: "ns-js-8ea7d",
    storageBucket: "ns-js-8ea7d.appspot.com",
    messagingSenderId: "151468570030"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  // export firestore database

  export default firebaseApp.firestore()

  