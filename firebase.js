import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAQhlUKmy38FBzStAiGUHJzC18sQpqCxsE",
    authDomain: "docs-clone-de127.firebaseapp.com",
    projectId: "docs-clone-de127",
    storageBucket: "docs-clone-de127.appspot.com",
    messagingSenderId: "777640748768",
    appId: "1:777640748768:web:04760dba0e8d9d2d839285"
  };

const app = !firebase.app.length? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
 export {db} ; 