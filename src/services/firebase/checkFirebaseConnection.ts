import {collection, getDocs} from '@firebase/firestore';
import {firestore} from '../../../firebase-config';
import {Collections} from '../collections';
import {ProductType} from '@types';

export const checkFirebaseConnection = async () => {
  const denemeCollection = collection(firestore, 'firebase-connection');
  const denemeSnapshot = await getDocs(denemeCollection);
  const deneme = denemeSnapshot.docs.map(doc => doc.data());
  return deneme[0];
};
