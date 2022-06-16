import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDl9FV8uRXqXbVXdVAO7thrma8NCn8K4-Q",
    authDomain: "rn-uber-eats-edbd5.firebaseapp.com",
    projectId: "rn-uber-eats-edbd5",
    storageBucket: "rn-uber-eats-edbd5.appspot.com",
    messagingSenderId: "511268026486",
    appId: "1:511268026486:web:65a5e7949cfb28a2408757"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase;