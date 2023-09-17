import {collection, getDocs} from '@firebase/firestore';
import {firestore} from '../../../firebase-config';
import {Collections} from '../collections';
import {ProductType} from '@types';

export const getProducts = async () => {
  const productsCollection = collection(firestore, Collections.Products);
  const productsSnapshot = await getDocs(productsCollection);
  const products = productsSnapshot.docs.map(doc => doc.data());
  return products as ProductType[];
};
