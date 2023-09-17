// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBM83KB09XIbGINmeRACIGQ6jkyd1vWlGw',
  authDomain: 'template-realestate.firebaseapp.com',
  // databaseURL: 'https://petneedings-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'template-realestate',
  storageBucket: 'template-realestate.appspot.com',
  messagingSenderId: '352386474577',
  appId: '1:352386474577:web:461679eec8fed3c5640e70',
  measurementId: 'G-T24Q8K99Z9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
