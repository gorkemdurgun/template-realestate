import {collection, getDoc, doc} from '@firebase/firestore';
import {firestore} from '../../../firebase-config';
import {Collections} from '../collections';
import {ProductType} from '@types';

export const getProductById = async (id: string) => {
  console.log('id', id);
  const productRef = doc(firestore, Collections.Products, id);
  const productSnapshot = await getDoc(productRef);

  if (productSnapshot.exists()) {
    const product = productSnapshot.data() as ProductType;
    return product;
  } else {
    return null;
  }
};
