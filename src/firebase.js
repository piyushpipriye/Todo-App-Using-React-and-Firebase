import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  apiKey: "your-api-key",
  authDomain: "todo-app-e48ab.firebaseapp.com",
  projectId: "todo-app-e48ab",
  storageBucket: "todo-app-e48ab.appspot.com",
  messagingSenderId: "424369890587",
  appId: "1:424369890587:web:86aa11b130d2cdcf4b5fbe",
  measurementId: "G-HL3TSQYEQT"
  });

const db = app.firestore();

export default db ; 
