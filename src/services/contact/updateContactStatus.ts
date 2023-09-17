import {collection, updateDoc, doc} from '@firebase/firestore';
import {firestore} from '../../../firebase-config';
import {Collections} from '../collections';

export const updateContactStatus = async (id: string, status: boolean) => {
  const contactRef = doc(firestore, Collections.Contacts, id);
  await updateDoc(contactRef, {
    status,
  });
};
