import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6FWEhrO1fam_T5_Z4spTsPnm11kHcOWw",
  authDomain: "instagram-reels-d3b4e.firebaseapp.com",
  databaseURL: "https://instagram-reels-d3b4e.firebaseio.com",
  projectId: "instagram-reels-d3b4e",
  storageBucket: "instagram-reels-d3b4e.appspot.com",
  messagingSenderId: "138774162552",
  appId: "1:138774162552:web:06738d28f57f386c8ed18d",
  measurementId: "G-H46CP4DY0G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
