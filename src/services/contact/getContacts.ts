import {collection, getDocs} from '@firebase/firestore';
import {firestore} from '../../../firebase-config';
import {Collections} from '../collections';

export const getContacts = async () => {
  const contactsCollection = collection(firestore, Collections.Contacts);
  const contactsSnapshot = await getDocs(contactsCollection);
  const contacts = contactsSnapshot.docs.map(doc => doc.data());
  return contacts as ContactForm[];
};
