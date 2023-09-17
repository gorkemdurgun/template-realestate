import {collection, addDoc} from '@firebase/firestore';
import {firestore} from '../../../firebase-config';
import {Collections} from '../collections';
import {ProductType} from '@types';

export const addProduct = async (product: ProductType) => {
  await addDoc(collection(firestore, Collections.Products), product);
};
