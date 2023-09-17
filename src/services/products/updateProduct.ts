import {collection, getDocs, updateDoc, doc} from '@firebase/firestore';
import {firestore} from '../../../firebase-config';
import {Collections} from '../collections';
import {ProductType} from '@types';
import {getProductById} from './getProductById';

type DataType = {
  field: string;
  value: string;
};

export const dynamicUpdateString = async (id: string, datas: DataType[]) => {
  const thisProduct = await getProductById(id);
  if (thisProduct) {
    const productRef = doc(firestore, Collections.Products, id);
    const data: any = {};
    datas.forEach(item => {
      data[item.field] = item.value;
    });
    await updateDoc(productRef, data);
    const updatedProduct = await getProductById(id);
    return updatedProduct;
  }
  return null;
};

export const updateDiscount = async (id: string, discount: ProductType['discount']) => {
  const productRef = doc(firestore, Collections.Products, id);
  await updateDoc(productRef, {discount});
  const updatedProduct = await getProductById(id);
  return updatedProduct;
};

export const updateCategory = async (id: string, category: ProductType['category']) => {
  const productRef = doc(firestore, Collections.Products, id);
  await updateDoc(productRef, {category});
  const updatedProduct = await getProductById(id);
  return updatedProduct;
};

export const updateFeatures = async (id: string, features: ProductType['features']) => {
  const productRef = doc(firestore, Collections.Products, id);
  await updateDoc(productRef, {features});
  const updatedProduct = await getProductById(id);
  return updatedProduct;
};
