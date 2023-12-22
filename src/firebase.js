// import 'firebase/firestore';
import 'firebase/auth';

import firebase from 'firebase/app';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; 
  const firebaseConfig = {
    apiKey: "AIzaSyCMMnD9piuEYH9bDhmiUWkN0t4bxBbNZq0",
    authDomain: "linkedin-clone-923a3.firebaseapp.com",
    projectId: "linkedin-clone-923a3",
    storageBucket: "linkedin-clone-923a3.appspot.com",
    messagingSenderId: "1045107458079",
    appId: "1:1045107458079:web:9f507140102f45cf98552a"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  // ... other services you need

  export {db,auth};
  



