import {collection, getDocs} from '@firebase/firestore';
import {firestore} from '../../../firebase-config';

export const checkFirebaseConnection = async () => {
  const denemeCollection = collection(firestore, 'firebase-connection');
  const denemeSnapshot = await getDocs(denemeCollection);
  const deneme = denemeSnapshot.docs.map(doc => doc.data());

  const firebaseConnection = deneme[0]?.connection;

  if (firebaseConnection) {
    console.log(
      '%cis firebase connected: ' + firebaseConnection,
      'color:green;font-family:system-ui;font-size:1rem;font-weight:bold',
    );
  } else {
    console.log(
      '%cis firebase connected: ' + firebaseConnection,
      'color:red;font-family:system-ui;font-size:1rem;font-weight:bold',
    );
  }
};
