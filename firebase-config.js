// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA3jaj-Q9rE2r2l6wkyA77Cp79PyPajmO4',
  authDomain: 'petneedings.firebaseapp.com',
  databaseURL: 'https://petneedings-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'petneedings',
  storageBucket: 'petneedings.appspot.com',
  messagingSenderId: '431459404636',
  appId: '1:431459404636:web:4f6efb8c9748fbad318f99',
  measurementId: 'G-20VW2K11EM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
