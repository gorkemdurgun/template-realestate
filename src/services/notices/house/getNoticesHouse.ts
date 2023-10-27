import {collection, getDocs} from '@firebase/firestore';
import {firestore} from '../../../../firebase-config';
import {Collections} from '../../collections';

export const getNoticesHouse = async () => {
  const noticesCollection = collection(firestore, Collections.Notices);
  const noticesSnapshot = await getDocs(noticesCollection);
  const notices = noticesSnapshot.docs.map(doc => doc.data());
  return notices as ApartmentProperties[];
};
