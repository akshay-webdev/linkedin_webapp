// Import necessary modules from Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMMnD9piuEYH9bDhmiUWkN0t4bxBbNZq0",
  authDomain: "linkedin-clone-923a3.firebaseapp.com",
  projectId: "linkedin-clone-923a3",
  storageBucket: "linkedin-clone-923a3.appspot.com",
  messagingSenderId: "1045107458079",
  appId: "1:1045107458079:web:9f507140102f45cf98552a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Create instances of Firestore and Auth
const db = firebase.firestore();
const auth = firebase.auth();

// Export the instances for use in other parts of your application
export { db, auth };
